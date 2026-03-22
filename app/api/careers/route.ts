import { NextRequest, NextResponse } from 'next/server';

interface CareerApplicationData {
  full_name: string;
  email: string;
  phone?: string;
  message: string;
  job_opening_id?: string;
  job_title?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: CareerApplicationData = await request.json();
    const { full_name, email, phone, message, job_opening_id, job_title } = body;

    if (!full_name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const response = await fetch(`${supabaseUrl}/rest/v1/career_applications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseAnonKey,
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify({
        full_name,
        email,
        phone: phone || '',
        message,
        job_opening_id: job_opening_id || null,
        job_title: job_title || 'General Application',
        status: 'new',
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Supabase error:', errorText);
      return NextResponse.json(
        { error: 'Failed to submit application' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting career application:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
