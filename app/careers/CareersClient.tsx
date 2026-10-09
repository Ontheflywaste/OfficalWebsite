'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Briefcase,
  Users,
  TrendingUp,
  Heart,
  Shield,
  Send,
  Phone,
  CheckCircle2,
  Loader2,
  Paperclip,
  X,
} from 'lucide-react';
import ScrollReveal from '@/app/components/ScrollReveal';
import { OPEN_ROLES, OTHER_OPTION } from './roles';

const HIRING_EMAIL = 'info@ontheflywastesolutions.com';
const MAX_RESUME_BYTES = 3 * 1024 * 1024; // 3 MB
const ALLOWED_RESUME_EXTENSIONS = ['pdf', 'doc', 'docx'];

const RESUME_FALLBACK = `Please email your resume to ${HIRING_EMAIL} instead and we'll add it to your application.`;
const GENERIC_ERROR = `Something went wrong and your application didn't go through. Please try again, or email your resume to ${HIRING_EMAIL}.`;

export default function CareersClient() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
  });
  const [resume, setResume] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState(GENERIC_ERROR);
  // Time trap: set after mount so the server can tell instant bot posts from people.
  const [formTs, setFormTs] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setFormTs(Date.now());
  }, []);

  function handleResumeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setResumeError(null);
    if (!file) {
      setResume(null);
      return;
    }
    const ext = file.name.split('.').pop()?.toLowerCase() ?? '';
    if (!ALLOWED_RESUME_EXTENSIONS.includes(ext)) {
      setResume(null);
      e.target.value = '';
      setResumeError(`We can only accept PDF, DOC, or DOCX files. ${RESUME_FALLBACK}`);
      return;
    }
    if (file.size > MAX_RESUME_BYTES) {
      setResume(null);
      e.target.value = '';
      setResumeError(
        `That file is ${(file.size / (1024 * 1024)).toFixed(1)} MB, and the limit is 3 MB. Try a smaller file, or ${RESUME_FALLBACK.charAt(0).toLowerCase()}${RESUME_FALLBACK.slice(1)}`
      );
      return;
    }
    setResume(file);
  }

  function clearResume() {
    setResume(null);
    setResumeError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  function resetForm() {
    setFormData({ full_name: '', email: '', phone: '', position: '', message: '' });
    clearResume();
    setSubmitStatus('idle');
    setErrorMessage(GENERIC_ERROR);
    setFormTs(Date.now());
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (resumeError) return;
    setSubmitting(true);
    setSubmitStatus('idle');

    const body = new FormData();
    body.append('full_name', formData.full_name);
    body.append('email', formData.email);
    body.append('phone', formData.phone);
    body.append('position', formData.position);
    body.append('message', formData.message);
    body.append('form_ts', String(formTs));
    // Honeypot: real users never see or fill this field.
    body.append('website', (e.currentTarget.elements.namedItem('website') as HTMLInputElement | null)?.value ?? '');
    if (resume) body.append('resume', resume, resume.name);

    try {
      // Trailing slash avoids a 308 redirect of the multipart body (next.config trailingSlash: true).
      const response = await fetch('/api/careers/', { method: 'POST', body });

      if (response.ok) {
        setSubmitStatus('success');
        return;
      }

      let serverMessage: string | undefined;
      try {
        serverMessage = (await response.json())?.error;
      } catch {
        // Non-JSON error (for example a 413 from the platform). Fall through to the generic message.
      }
      setErrorMessage(serverMessage || GENERIC_ERROR);
      setSubmitStatus('error');
    } catch {
      setErrorMessage(GENERIC_ERROR);
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  }

  const perks = [
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: 'Growth Opportunities',
      description: 'We promote from within. Many of our supervisors started as collection associates.',
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: 'Team Culture',
      description: 'Be part of a supportive, close-knit team that celebrates wins together and has your back.',
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: 'Community Impact',
      description: 'Make a visible difference every day by keeping apartment communities clean and welcoming.',
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: 'Steady Work',
      description: "We've been growing in Central Florida since 2020, and the communities we serve aren't going anywhere. This is a real job with a future, not a gig that dries up next month.",
    },
    {
      icon: <Briefcase className="w-7 h-7" />,
      title: 'Equipment Provided',
      description: 'We supply uniforms, tools, and everything you need to do your job right from day one.',
    },
  ];


  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 pt-32 md:pt-40 bg-surface-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Young_Team.JPEG"
            alt="On The Fly Waste Solutions young team"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%]"
            style={{ filter: 'brightness(0.85) contrast(1.1) saturate(1.15)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-deep/80 via-surface-dark/60 to-surface-dark/80" />
          <div
            className="absolute inset-0 pointer-events-none animate-radial-drift"
            style={{
              background:
                'radial-gradient(circle at 30% 40%, rgba(22, 163, 74, 0.18) 0%, transparent 55%)',
            }}
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Briefcase className="w-4 h-4" />
                We&apos;re Hiring
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                Join Our Growing Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Build your career with Central Florida&apos;s fastest-growing waste management company. We&apos;re looking for dedicated people who want to make a difference.
              </p>
              <a
                href="#join-our-team"
                className="btn-primary inline-flex items-center gap-2"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Work With Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe our people are our greatest asset. Here&apos;s what you can expect when you join the On The Fly family.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-6">
            {perks.map((perk, index) => (
              <ScrollReveal
                key={index}
                delay={index * 0.1}
                className={`md:col-span-2 ${index === 3 ? 'lg:col-start-2' : ''} ${index === 4 ? 'md:col-start-2 lg:col-start-auto' : ''}`}
              >
                <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {perk.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{perk.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{perk.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Culture
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    At On The Fly Waste Solutions, we&apos;re more than a waste management company -- we&apos;re a team of people who take pride in serving our communities. Since 2020, we&apos;ve grown from a small local operation to a trusted partner for apartment communities across Central Florida.
                  </p>
                  <p className="text-lg">
                    Our team members are the backbone of everything we do. We invest in our people through training, mentorship, and clear paths for advancement. When you join our team, you&apos;re not just filling a position -- you&apos;re joining a family that supports each other and celebrates every milestone.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-xl shadow-sm text-center">
                    <div className="text-3xl font-bold text-primary">2,500+</div>
                    <div className="text-gray-600 text-sm mt-1">Residents Served</div>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm text-center">
                    <div className="text-3xl font-bold text-primary">GPS</div>
                    <div className="text-gray-600 text-sm mt-1">Verified Routes</div>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm text-center">
                    <div className="text-3xl font-bold text-primary">5.0</div>
                    <div className="text-gray-600 text-sm mt-1">Google Rating</div>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm text-center">
                    <div className="text-3xl font-bold text-primary">2020</div>
                    <div className="text-gray-600 text-sm mt-1">Founded</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="relative rounded-2xl shadow-2xl overflow-hidden h-[500px]">
                  <Image
                    src="/Our_team_Breast_Cancer_Awareness.JPG"
                    alt="On The Fly Waste Solutions team supporting Breast Cancer Awareness"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/15 rounded-2xl" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl">
                  <div className="text-2xl font-bold">Growing Fast</div>
                  <div className="text-sm text-white/90">New positions available</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* Join Our Team */}
      <section id="join-our-team" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Team</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed text-left md:text-center">
                <p>
                  We&apos;re hiring right now. We&apos;re a Central Florida crew that keeps apartment, HOA, and resort communities clean, and we have three roles open today. Most of our team started as collection associates and moved up from there. If you show up, work hard, and take pride in a job done right, we want to hear from you.
                </p>
                <p>Pick the role you&apos;re interested in and tell us a little about yourself. We read every application and reply personally.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Open roles. Edit app/careers/roles.ts to change this list. */}
          <div className="grid gap-4 md:grid-cols-3 mb-10">
            {OPEN_ROLES.map((role, index) => (
              <ScrollReveal key={role.id} delay={index * 0.08}>
                <div className="h-full bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-primary transition-colors">
                  <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3">
                    <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
                    Open role
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{role.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{role.blurb}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.1}>
            <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-10 border-t-8 border-primary">
              {submitStatus === 'success' ? (
                <div className="text-center py-8" role="status">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thanks, we got your application.</h3>
                  <p className="text-gray-600 mb-6">We&apos;ll be in touch soon.</p>
                  <button onClick={resetForm} className="text-primary font-semibold hover:underline">
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative space-y-6">
                  <div>
                    <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      required
                      maxLength={200}
                      autoComplete="name"
                      value={formData.full_name}
                      onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      maxLength={254}
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      maxLength={40}
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                      placeholder="(407) 000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                      Position You&apos;re Applying For *
                    </label>
                    <select
                      id="position"
                      name="position"
                      required
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                    >
                      <option value="" disabled>
                        Select a role
                      </option>
                      {OPEN_ROLES.map((role) => (
                        <option key={role.id} value={role.title}>
                          {role.title}
                        </option>
                      ))}
                      <option value={OTHER_OPTION}>{OTHER_OPTION}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell Us About Yourself *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      minLength={10}
                      maxLength={5000}
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-none"
                      placeholder="Your experience, the kind of work you're looking for, and when you could start..."
                    />
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                      Resume <span className="text-gray-500 font-normal">(optional) &mdash; PDF or Word, up to 3 MB</span>
                    </label>
                    {resume ? (
                      <div className="flex items-center justify-between gap-3 bg-white border border-gray-300 rounded-lg px-4 py-3">
                        <span className="flex items-center gap-2 text-gray-800 text-sm truncate">
                          <Paperclip className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                          <span className="truncate">{resume.name}</span>
                          <span className="text-gray-500 flex-shrink-0">({(resume.size / 1024).toFixed(0)} KB)</span>
                        </span>
                        <button
                          type="button"
                          onClick={clearResume}
                          className="text-gray-500 hover:text-gray-900 flex-shrink-0"
                          aria-label="Remove resume"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <input
                        ref={fileInputRef}
                        type="file"
                        id="resume"
                        name="resume"
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        onChange={handleResumeChange}
                        className="block w-full text-sm text-gray-700 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 file:cursor-pointer"
                      />
                    )}
                    {resumeError && (
                      <p className="mt-2 text-sm text-red-700" role="alert">
                        {resumeError}
                      </p>
                    )}
                  </div>

                  {/* Honeypot: hidden from people, filled by bots. */}
                  <div className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
                  </div>

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm" role="alert">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting || !!resumeError}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Application
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Prefer email? Send your resume to{' '}
                    <a href={`mailto:${HIRING_EMAIL}?subject=Job%20Application`} className="text-primary hover:underline">
                      {HIRING_EMAIL}
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Questions before applying */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Have a question before you apply?</h2>
            <p className="text-lg text-white/90 mb-8">Call or email and a real person will answer.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:407-274-5019"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call (407) 274-5019
              </a>
              <a
                href={`mailto:${HIRING_EMAIL}?subject=Question%20about%20working%20at%20On%20The%20Fly`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30"
              >
                <Send className="w-5 h-5" />
                Email {HIRING_EMAIL}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
