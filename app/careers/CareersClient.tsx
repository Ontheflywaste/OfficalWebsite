'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  ChevronDown,
  Users,
  TrendingUp,
  Heart,
  DollarSign,
  Shield,
  Send,
  Phone,
  CheckCircle2,
  Loader2,
} from 'lucide-react';
import ScrollReveal from '@/app/components/ScrollReveal';

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string;
  benefits: string;
  created_at: string;
}

export default function CareersClient() {
  const [jobs, setJobs] = useState<JobOpening[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    fetchJobs();
  }, []);

  async function fetchJobs() {
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseKey) return;

      const response = await fetch(
        `${supabaseUrl}/rest/v1/job_openings?is_active=eq.true&order=created_at.desc`,
        {
          headers: {
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setJobs(data);
      }
    } catch (err) {
      // silently fail - page still works with empty state
    } finally {
      setLoading(false);
    }
  }

  function handleApply(job: JobOpening) {
    setSelectedJob(job);
    setShowApplicationForm(true);
    setSubmitStatus('idle');
    setTimeout(() => {
      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          job_opening_id: selectedJob?.id || null,
          job_title: selectedJob?.title || 'General Application',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ full_name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  }

  const perks = [
    {
      icon: <DollarSign className="w-7 h-7" />,
      title: 'Competitive Pay',
      description: 'Earn above-market wages with performance bonuses that reward your hard work and dedication.',
    },
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
      title: 'Stability & Growth',
      description: 'Consistent schedules, paid time off for eligible team members, and long-term job stability.',
    },
    {
      icon: <Briefcase className="w-7 h-7" />,
      title: 'Equipment Provided',
      description: 'We supply uniforms, tools, and everything you need to do your job right from day one.',
    },
  ];

  function formatList(text: string) {
    return text.split('.').filter((s) => s.trim().length > 0);
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 pt-32 md:pt-40 bg-gradient-to-b from-black via-black to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <Image
            src="/Young_Team.JPEG"
            alt="On The Fly Waste Solutions young team"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-black/0" />
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
                href="#open-positions"
                className="btn-primary inline-flex items-center gap-2"
              >
                View Open Positions
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
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
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-gray-600 text-sm mt-1">Collection Rate</div>
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

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600">
                Find your next opportunity with On The Fly Waste Solutions
              </p>
            </div>
          </ScrollReveal>

          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
          ) : jobs.length === 0 ? (
            <ScrollReveal>
              <div className="text-center py-12 bg-gray-50 rounded-2xl px-8">
                <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  No Specific Openings Right Now
                </h3>
                <p className="text-gray-600 max-w-lg mx-auto mb-6">
                  We&apos;re always looking for great people. Send us your resume and we&apos;ll reach out when a position that fits your skills becomes available.
                </p>
                <a
                  href="mailto:info@ontheflywastesolutions.com?subject=Career%20Interest%20-%20General%20Application"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Your Resume
                </a>
              </div>
            </ScrollReveal>
          ) : (
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <ScrollReveal key={job.id} delay={index * 0.1}>
                  <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-primary/30 transition-colors duration-300">
                    <button
                      onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                      className="w-full text-left p-6 flex items-center justify-between gap-4"
                    >
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-3">
                          <span className="inline-flex items-center gap-1.5 text-sm text-gray-600">
                            <Briefcase className="w-4 h-4 text-primary" />
                            {job.department}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-sm text-gray-600">
                            <MapPin className="w-4 h-4 text-primary" />
                            {job.location}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-sm text-gray-600">
                            <Clock className="w-4 h-4 text-primary" />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                          expandedJob === job.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedJob === job.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-6 border-t border-gray-100 pt-6">
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">About This Role</h4>
                            <p className="text-gray-700 leading-relaxed">{job.description}</p>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h4>
                            <ul className="space-y-2">
                              {formatList(job.requirements).map((req, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                  <span>{req.trim()}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">What We Offer</h4>
                            <ul className="space-y-2">
                              {formatList(job.benefits).map((benefit, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                  <span>{benefit.trim()}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <button
                            onClick={() => handleApply(job)}
                            className="btn-primary inline-flex items-center gap-2"
                          >
                            Apply for This Position
                            <ArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Application Form */}
      {showApplicationForm && (
        <section id="application-form" className="py-20 bg-gray-50 scroll-mt-32">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Apply Now</h2>
                  <p className="text-gray-600">
                    Applying for: <span className="font-semibold text-primary">{selectedJob?.title || 'General Application'}</span>
                  </p>
                </div>

                {submitStatus === 'success' ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Received</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for your interest in joining our team. We will review your application and get back to you soon.
                    </p>
                    <button
                      onClick={() => {
                        setShowApplicationForm(false);
                        setSubmitStatus('idle');
                      }}
                      className="text-primary font-semibold hover:underline"
                    >
                      Back to Open Positions
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="full_name"
                        required
                        value={formData.full_name}
                        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
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
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
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
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                        placeholder="(407) 000-0000"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Tell Us About Yourself *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-none"
                        placeholder="Share your relevant experience, why you're interested in this role, and what makes you a great fit..."
                      />
                    </div>

                    {submitStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                        Something went wrong. Please try again or email us directly at info@ontheflywastesolutions.com.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Submit Application
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Don&apos;t See the Right Fit?
                </h2>
                <p className="text-lg text-white/90 mb-6 leading-relaxed">
                  We&apos;re always looking for talented, hardworking people to join our growing team. Even if you don&apos;t see a position that matches your skills right now, we&apos;d love to hear from you.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>Send your resume for future opportunities</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>We respond to every application personally</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>New positions are added regularly as we grow</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="text-white/90 mb-8 leading-relaxed">
                  Reach out to us directly with your resume or any questions about working at On The Fly Waste Solutions.
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:info@ontheflywastesolutions.com?subject=Career%20Interest%20-%20General%20Inquiry"
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 w-full"
                  >
                    <Send className="w-5 h-5" />
                    Email Your Resume
                  </a>
                  <a
                    href="tel:407-274-5019"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30 w-full"
                  >
                    <Phone className="w-5 h-5" />
                    Call (407) 274-5019
                  </a>
                  <Link
                    href="/contact/"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30 w-full"
                  >
                    <ArrowRight className="w-5 h-5" />
                    Contact Page
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
