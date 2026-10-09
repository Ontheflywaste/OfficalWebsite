import { NextRequest, NextResponse } from 'next/server';
import { POSITION_OPTIONS } from '../../careers/roles';

/**
 * Careers application endpoint.
 *
 * Accepts a multipart form (name, email, phone, message, optional resume) and
 * emails it to the hiring inbox through Resend's REST API. Nothing is stored.
 *
 * Spam defenses: a honeypot field (`website`), a time trap (`form_ts` must be
 * at least MIN_FORM_AGE_MS old), and strict server-side validation.
 */

export const runtime = 'nodejs';

const TO_ADDRESS = 'info@ontheflywastesolutions.com';
const FROM_ADDRESS = 'On The Fly Careers <careers@ontheflywastesolutions.com>';

const MAX_FILE_BYTES = 3 * 1024 * 1024; // 3 MB
const ALLOWED_EXTENSIONS = new Set(['pdf', 'doc', 'docx']);
const ALLOWED_MIME_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/octet-stream', // some browsers send this for .doc/.docx
]);
const MIN_FORM_AGE_MS = 3000;

const LIMITS = {
  full_name: 200,
  email: 254,
  phone: 40,
  message: 5000,
};

const RESUME_FALLBACK_MESSAGE =
  'Please email your resume to info@ontheflywastesolutions.com instead.';

function reject(error: string, status = 400) {
  return NextResponse.json({ error }, { status });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function fileExtension(name: string) {
  const idx = name.lastIndexOf('.');
  return idx === -1 ? '' : name.slice(idx + 1).toLowerCase();
}

function safeFilename(name: string, ext: string) {
  const base = name
    .split(/[\\/]/)
    .pop()!
    .replace(/\.[^.]*$/, '')
    .replace(/[^A-Za-z0-9._-]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .slice(0, 80);
  return `${base || 'resume'}.${ext}`;
}

export async function POST(request: NextRequest) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return reject('Invalid form submission.');
  }

  const field = (key: string) => (form.get(key) ?? '').toString().trim();

  const fullName = field('full_name');
  const email = field('email');
  const phone = field('phone');
  const position = field('position');
  const message = field('message');
  const honeypot = field('website');
  const formTs = Number(field('form_ts'));

  // Honeypot: bots fill every field. Pretend it worked and drop it.
  if (honeypot) {
    return NextResponse.json({ success: true });
  }

  // Time trap: real people take longer than a few seconds.
  if (!Number.isFinite(formTs) || Date.now() - formTs < MIN_FORM_AGE_MS) {
    return reject('Please take a moment to finish the form, then try again.');
  }

  if (!fullName || !email || !message) {
    return reject('Name, email, and a short message are required.');
  }
  if (fullName.length < 2 || fullName.length > LIMITS.full_name) {
    return reject('Please enter your full name.');
  }
  if (email.length > LIMITS.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return reject('Please enter a valid email address.');
  }
  if (phone.length > LIMITS.phone) {
    return reject('Please enter a valid phone number.');
  }
  if (!POSITION_OPTIONS.includes(position)) {
    return reject("Please choose the position you're applying for.");
  }
  if (message.length < 10 || message.length > LIMITS.message) {
    return reject('Please tell us a little more about yourself (10 to 5,000 characters).');
  }

  // Optional resume
  let attachment: { filename: string; content: string } | null = null;
  const resume = form.get('resume');
  if (resume instanceof File && resume.size > 0) {
    const ext = fileExtension(resume.name);
    if (!ALLOWED_EXTENSIONS.has(ext)) {
      return reject(`We can only accept PDF, DOC, or DOCX resumes. ${RESUME_FALLBACK_MESSAGE}`);
    }
    if (resume.type && !ALLOWED_MIME_TYPES.has(resume.type)) {
      return reject(`We can only accept PDF, DOC, or DOCX resumes. ${RESUME_FALLBACK_MESSAGE}`);
    }
    if (resume.size > MAX_FILE_BYTES) {
      return reject(`That resume is over the 3 MB limit. ${RESUME_FALLBACK_MESSAGE}`);
    }
    const bytes = Buffer.from(await resume.arrayBuffer());
    attachment = { filename: safeFilename(resume.name, ext), content: bytes.toString('base64') };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[careers] RESEND_API_KEY is not set');
    return reject('Applications are temporarily unavailable. ' + RESUME_FALLBACK_MESSAGE, 500);
  }

  const submittedAt = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  const text = [
    `New job application from the website`,
    ``,
    `Position: ${position}`,
    `Name:   ${fullName}`,
    `Email:  ${email}`,
    `Phone:  ${phone || '(not provided)'}`,
    `Resume: ${attachment ? attachment.filename + ' (attached)' : '(none attached)'}`,
    `Sent:   ${submittedAt} ET`,
    ``,
    `About the applicant:`,
    message,
    ``,
    `Reply to this email to respond to the applicant directly.`,
  ].join('\n');

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.5;color:#111">
      <h2 style="margin:0 0 16px;font-size:20px">New job application from the website</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:20px">
        <tr><td style="padding:4px 16px 4px 0;color:#555">Position</td><td style="padding:4px 0"><strong>${escapeHtml(position)}</strong></td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#555">Name</td><td style="padding:4px 0"><strong>${escapeHtml(fullName)}</strong></td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#555">Email</td><td style="padding:4px 0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#555">Phone</td><td style="padding:4px 0">${escapeHtml(phone || '(not provided)')}</td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#555">Resume</td><td style="padding:4px 0">${attachment ? escapeHtml(attachment.filename) + ' (attached)' : '(none attached)'}</td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#555">Sent</td><td style="padding:4px 0">${escapeHtml(submittedAt)} ET</td></tr>
      </table>
      <p style="margin:0 0 6px;color:#555">About the applicant:</p>
      <div style="white-space:pre-wrap;background:#f6f7f9;border-radius:8px;padding:14px 16px">${escapeHtml(message)}</div>
      <p style="margin:20px 0 0;color:#777;font-size:13px">Reply to this email to respond to the applicant directly.</p>
    </div>`;

  const payload: Record<string, unknown> = {
    from: FROM_ADDRESS,
    to: [TO_ADDRESS],
    reply_to: email,
    subject: `Job application: ${position} - ${fullName}`,
    text,
    html,
  };
  if (attachment) {
    payload.attachments = [attachment];
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error('[careers] Resend rejected the email', response.status, detail);
      return reject('We could not send your application. ' + RESUME_FALLBACK_MESSAGE, 502);
    }
  } catch (error) {
    console.error('[careers] Error sending application email', error);
    return reject('We could not send your application. ' + RESUME_FALLBACK_MESSAGE, 502);
  }

  return NextResponse.json({ success: true });
}
