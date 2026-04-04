'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2, Building2, Recycle, ArrowRight, ArrowLeft, CheckCircle2, Loader2 } from 'lucide-react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

interface FormData {
  serviceType: string;
  propertySize: string;
  name: string;
  email: string;
  phone: string;
  propertyName: string;
}

const HUBSPOT_PORTAL_ID = '22416220';
const HUBSPOT_FORM_ID = 'b6cf29bc-2fdc-48cb-adfc-0d201a5aa15d';

const services = [
  { id: 'valet-trash', name: 'Valet Trash', icon: Trash2, description: 'Doorstep collection' },
  { id: 'junk-removal', name: 'Junk Removal', icon: Building2, description: 'Hauling & disposal' },
  { id: 'bulk-pickup', name: 'Bulk Pick-up', icon: Recycle, description: 'Large item removal' },
];

const propertySizes = [
  { value: '1-50', label: '1-50 Units' },
  { value: '51-100', label: '51-100 Units' },
  { value: '101-200', label: '101-200 Units' },
  { value: '200+', label: '200+ Units' },
];

export default function QuickQuoteWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<FormData>({
    serviceType: '',
    propertySize: '',
    name: '',
    email: '',
    phone: '',
    propertyName: '',
  });

  const handleServiceSelect = (serviceId: string) => {
    setFormData({ ...formData, serviceType: serviceId });
    setStep(2);
  };

  const handlePropertySizeSelect = (size: string) => {
    setFormData({ ...formData, propertySize: size });
    setStep(3);
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^[\d\s\-\(\)\.+]{10,}$/.test(phone.replace(/\s/g, ''));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim()) {
      setError('Please enter your name');
      return;
    }
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (!validatePhone(formData.phone)) {
      setError('Please enter a valid phone number');
      return;
    }
    if (!formData.propertyName.trim()) {
      setError('Please enter your property name');
      return;
    }

    setIsSubmitting(true);

    try {
      const nameParts = formData.name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: [
              { name: 'firstname', value: firstName },
              { name: 'lastname', value: lastName },
              { name: 'email', value: formData.email },
              { name: 'phone', value: formData.phone },
              { name: 'company', value: formData.propertyName },
              { name: 'message', value: `Service: ${formData.serviceType}, Property Size: ${formData.propertySize} units` },
            ],
            context: {
              pageUri: window.location.href,
              pageName: 'Quick Quote Wizard',
            },
          }),
        }
      );

      if (response.ok) {
        if (window.gtag) {
          window.gtag('event', 'generate_lead', {
            service_type: formData.serviceType,
            property_size: formData.propertySize,
            source: 'quick_quote_wizard',
            currency: 'USD',
          });
        }

        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'generate_lead',
            service_type: formData.serviceType,
            property_size: formData.propertySize,
            source: 'quick_quote_wizard',
          });
        }

        setIsSuccess(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFinalDetails = () => {
    const params = new URLSearchParams({
      service: formData.serviceType,
      size: formData.propertySize,
    });
    router.push(`/contact/?${params.toString()}`);
  };

  const handleBack = () => {
    setStep(step - 1);
    setError('');
  };

  if (isSuccess) {
    return (
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-md mx-auto animate-scale-in">
        <div className="text-center">
          <div className="w-20 h-20 bg-[#049704] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Request Received!
          </h3>
          <p className="text-gray-600 mb-6">
            Our team will contact you within 24 hours with a customized quote for your property.
          </p>
          <button
            onClick={handleFinalDetails}
            className="w-full bg-[#049704] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#038503] transition-all flex items-center justify-center gap-2"
          >
            Complete Full Details
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Quick Quote</h3>
        <div className="flex gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`w-8 h-2 rounded-full transition-colors ${
                s <= step ? 'bg-[#049704]' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <p className="text-gray-600 mb-4">What service do you need?</p>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => handleServiceSelect(service.id)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all hover:border-[#049704] hover:bg-[#049704]/5 ${
                  formData.serviceType === service.id
                    ? 'border-[#049704] bg-[#049704]/5'
                    : 'border-gray-200'
                }`}
              >
                <div className="w-12 h-12 bg-[#049704]/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#049704]" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{service.name}</div>
                  <div className="text-sm text-gray-500">{service.description}</div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" />
              </button>
            );
          })}
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 hover:text-[#049704] transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <p className="text-gray-600 mb-4">What is your property size?</p>
          <div className="grid grid-cols-2 gap-3">
            {propertySizes.map((size) => (
              <button
                key={size.value}
                onClick={() => handlePropertySizeSelect(size.value)}
                className={`p-4 rounded-xl border-2 transition-all hover:border-[#049704] hover:bg-[#049704]/5 ${
                  formData.propertySize === size.value
                    ? 'border-[#049704] bg-[#049704]/5'
                    : 'border-gray-200'
                }`}
              >
                <div className="font-semibold text-gray-900">{size.label}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 hover:text-[#049704] transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <p className="text-gray-600 mb-4">Enter your contact details</p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <input
            type="text"
            placeholder="Your Name *"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#049704] focus:outline-none transition-colors"
            required
          />
          <input
            type="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#049704] focus:outline-none transition-colors"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#049704] focus:outline-none transition-colors"
            required
          />
          <input
            type="text"
            placeholder="Property Name *"
            value={formData.propertyName}
            onChange={(e) => setFormData({ ...formData, propertyName: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#049704] focus:outline-none transition-colors"
            required
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#049704] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#038503] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Get My Estimate
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
