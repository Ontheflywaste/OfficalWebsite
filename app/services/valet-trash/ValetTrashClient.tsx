'use client';
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock, Shield, Users, BarChart3, Phone, Star, Quote, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/app/components/ScrollReveal';

export default function ValetTrashClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="min-h-screen pt-32">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Professional Valet Trash Service</h1>
          <p className="text-xl text-gray-600">Coming soon - Service detail page</p>
        </div>
      </section>
    </div>
  );
}
