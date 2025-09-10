import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import ScrollReveal from '../components/ScrollReveal';

// Lazy load EmailJS only when needed
const loadEmailJS = () => import('@emailjs/browser');

function Contact() {
  const [formStep, setFormStep] = useState(0);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyName: '',
    unitCount: '',
    referralSource: '',
    additionalInfo: ''
  });

  useEffect(() => {
    // EmailJS will be loaded dynamically when form is submitted
  }, []);

  const validateForm = (currentStep = formStep) => {
    const errors: Record<string, string> = {};
    
    const shouldValidateField = (fieldName: string) => {
      return hasAttemptedSubmit || touchedFields.has(fieldName);
    };
    
    if (currentStep === 0 && shouldValidateField('name')) {
      if (!formData.name.trim()) {
        errors.name = 'Name is required';
      }
    }
    
    if (currentStep === 1) {
      if (shouldValidateField('phone') && !formData.phone.trim()) {
        errors.phone = 'Phone number is required';
      }
      if (shouldValidateField('email')) {
        if (!formData.email.trim()) {
          errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          errors.email = 'Please enter a valid email address';
        }
      }
    }
    
    if (currentStep === 2) {
      if (shouldValidateField('propertyName') && !formData.propertyName.trim()) {
        errors.propertyName = 'Property name is required';
      }
      if (shouldValidateField('unitCount') && !formData.unitCount.trim()) {
        errors.unitCount = 'Unit count is required';
      }
    }
    
    if (currentStep === 3) {
      if (shouldValidateField('referralSource') && !formData.referralSource) {
        errors.referralSource = 'Please select how you heard about us';
      }
      if (shouldValidateField('additionalInfo') && !formData.additionalInfo.trim()) {
        errors.additionalInfo = 'Please provide additional information';
      }
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formStep < formSteps.length - 1) {
      nextStep();
      return;
    }

    setHasAttemptedSubmit(true);
    const errors = validateForm(3);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      toast.error('Please fill in all required fields');
      return;
    }

    setFormStatus('submitting');
    
    try {
      // Dynamically import EmailJS when needed
      const emailjs = await loadEmailJS();
      
      // Initialize EmailJS
      emailjs.default.init("JwYfbaBokN347YiVO");
      
      await emailjs.send(
        'service_decr5zt',
        'template_x34o2r9',
        {
          from_name: formData.name,
          from_email: formData.email,
          to_name: 'On The Fly Waste Solutions',
          to_email: 'info@ontheflywastesolutions.com',
          phone_number: formData.phone,
          property_name: formData.propertyName,
          unit_count: formData.unitCount,
          referral_source: formData.referralSource,
          additional_info: formData.additionalInfo,
          reply_to: formData.email
        },
        'JwYfbaBokN347YiVO'
      );

      setFormStatus('success');
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyName: '',
        unitCount: '',
        referralSource: '',
        additionalInfo: ''
      });
      setFormStep(0);
      setHasAttemptedSubmit(false);
      setFormErrors({});
      setTouchedFields(new Set());
    } catch (error) {
      console.error('Failed to send email:', error);
      setFormStatus('error');
      toast.error('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    setTouchedFields(prev => new Set(prev).add(name));
    
    if (touchedFields.has(name) || hasAttemptedSubmit) {
      const newErrors = validateForm();
      setFormErrors(prev => ({
        ...prev,
        [name]: newErrors[name] || ''
      }));
    }
  };

  const nextStep = () => {
    const errors = validateForm();
    const currentStepErrors = Object.keys(errors).filter(field => {
      const fieldStep = getFieldStep(field);
      return fieldStep === formStep;
    });

    if (currentStepErrors.length === 0) {
      setFormStep(prev => prev + 1);
    } else {
      setFormErrors(errors);
      const currentStepFields = Object.keys(formData).filter(field => getFieldStep(field) === formStep);
      setTouchedFields(prev => new Set([...prev, ...currentStepFields]));
    }
  };

  const getFieldStep = (fieldName: string): number => {
    const stepMap: Record<string, number> = {
      name: 0,
      phone: 1,
      email: 1,
      propertyName: 2,
      unitCount: 2,
      referralSource: 3,
      additionalInfo: 3
    };
    return stepMap[fieldName] || 0;
  };

  const prevStep = () => {
    setFormStep(prev => prev - 1);
  };

  const formSteps = [
    {
      title: "Let's start with your name",
      fields: (
        <div className="mt-3">
          <label htmlFor="name\" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-invalid={!!formErrors.name}
            aria-describedby={formErrors.name ? "name-error" : undefined}
            className={`w-full px-4 py-2 rounded-lg border ${
              formErrors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#049704]'
            } focus:border-transparent transition duration-200`}
            placeholder="John Doe"
          />
          {formErrors.name && (
            <p id="name-error\" className="mt-1 text-sm text-red-500\" role="alert">
              {formErrors.name}
            </p>
          )}
        </div>
      )
    },
    {
      title: "How can we reach you?",
      fields: (
        <div className="space-y-4 mt-3">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              aria-invalid={!!formErrors.phone}
              aria-describedby={formErrors.phone ? "phone-error" : undefined}
              className={`w-full px-4 py-2 rounded-lg border ${
                formErrors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#049704]'
              } focus:border-transparent transition duration-200`}
              placeholder="(407) 123-4567"
            />
            {formErrors.phone && (
              <p id="phone-error\" className="mt-1 text-sm text-red-500\" role="alert">
                {formErrors.phone}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-invalid={!!formErrors.email}
              aria-describedby={formErrors.email ? "email-error" : undefined}
              className={`w-full px-4 py-2 rounded-lg border ${
                formErrors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#049704]'
              } focus:border-transparent transition duration-200`}
              placeholder="john@example.com"
            />
            {formErrors.email && (
              <p id="email-error\" className="mt-1 text-sm text-red-500\" role="alert">
                {formErrors.email}
              </p>
            )}
          </div>
        </div>
      )
    },
    {
      title: "Tell us about your property",
      fields: (
        <div className="space-y-4 mt-3">
          <div>
            <label htmlFor="propertyName" className="block text-sm font-medium text-gray-700 mb-1">
              Property Name *
            </label>
            <input
              type="text"
              id="propertyName"
              name="propertyName"
              value={formData.propertyName}
              onChange={handleChange}
              required
              aria-invalid={!!formErrors.propertyName}
              aria-describedby={formErrors.propertyName ? "propertyName-error" : undefined}
              className={`w-full px-4 py-2 rounded-lg border ${
                formErrors.propertyName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#049704]'
              } focus:border-transparent transition duration-200`}
              placeholder="Property Name"
            />
            {formErrors.propertyName && (
              <p id="propertyName-error\" className="mt-1 text-sm text-red-500\" role="alert">
                {formErrors.propertyName}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="unitCount" className="block text-sm font-medium text-gray-700 mb-1">
              Unit Count *
            </label>
            <input
              type="number"
              id="unitCount"
              name="unitCount"
              value={formData.unitCount}
              onChange={handleChange}
              required
              min="1"
              aria-invalid={!!formErrors.unitCount}
              aria-describedby={formErrors.unitCount ? "unitCount-error" : undefined}
              className={`w-full px-4 py-2 rounded-lg border ${
                formErrors.unitCount ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#049704]'
              } focus:border-transparent transition duration-200`}
              placeholder="Number of units"
            />
            {formErrors.unitCount && (
              <p id="unitCount-error\" className="mt-1 text-sm text-red-500\" role="alert">
                {formErrors.unitCount}
              </p>
            )}
          </div>
        </div>
      )
    },
    {
      title: "Additional Information",
      fields: (
        <div className="space-y-4 mt-3">
          <div>
            <label htmlFor="referralSource" className="block text-sm font-medium text-gray-700 mb-1">
              How did you hear about us? *
            </label>
            <select
              id="referralSource"
              name="referralSource"
              value={formData.referralSource}
              onChange={handleChange}
              required
              aria-invalid={!!formErrors.referralSource}
              aria-describedby={formErrors.referralSource ? "referralSource-error" : undefined}
              className={`w-full px-4 py-2 rounded-lg border ${
                formErrors.referralSource ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#049704]'
              } focus:border-transparent transition duration-200`}
            >
              <option value="">Please select</option>
              <option value="google">Google Search</option>
              <option value="referral">Referral</option>
              <option value="social">Social Media</option>
              <option value="other">Other</option>
            </select>
            {formErrors.referralSource && (
              <p id="referralSource-error" className="mt-1 text-sm text-red-500" role="alert">
                {formErrors.referralSource}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
              Additional Information *
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              required
              rows={4}
              aria-invalid={!!formErrors.additionalInfo}
              aria-describedby={formErrors.additionalInfo ? "additionalInfo-error" : undefined}
              className={`w-full px-4 py-2 rounded-lg border ${
                formErrors.additionalInfo ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#049704]'
              } focus:border-transparent transition duration-200`}
              placeholder="Tell us anything else we should know..."
            />
            {formErrors.additionalInfo && (
              <p id="additionalInfo-error\" className="mt-1 text-sm text-red-500\" role="alert">
                {formErrors.additionalInfo}
              </p>
            )}
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Orlando Valet Trash Service | Get Quote</title>
        <meta name="description" content="Get in touch with Orlando's leading valet trash service. Schedule consultation for your apartment community or request quote today." />
        <meta name="keywords" content="valet trash orlando contact, waste management quote orlando, apartment trash service florida, contact waste solutions orlando" />
        <link rel="canonical" href="https://ontheflywastesolutions.com/contact" />
        
        {/* Contact Page Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact On The Fly Waste Solutions",
            "description": "Get in touch with Orlando's premier valet trash service for professional waste management solutions",
            "url": "https://ontheflywastesolutions.com/contact",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "On The Fly Waste Solutions",
              "telephone": "+1-407-274-5019",
              "email": "info@ontheflywastesolutions.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Orlando",
                "addressRegion": "FL",
                "addressCountry": "US"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 pt-24">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Orlando's Top Valet Trash Service</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get in touch for professional valet trash and waste management services
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8 h-fit">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                  <div className="space-y-6">
                    <a href="tel:407-274-5019" className="flex items-start group">
                      <div className="h-12 w-12 rounded-full bg-[#049704]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Phone className="h-6 w-6 text-[#049704]" />
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-semibold text-gray-900 group-hover:text-[#049704] transition-colors">407-274-5019</div>
                        <p className="text-gray-600">Available 7 days a week</p>
                      </div>
                    </a>

                    <a href="mailto:info@ontheflywastesolutions.com" className="flex items-start group">
                      <div className="h-12 w-12 rounded-full bg-[#049704]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Mail className="h-6 w-6 text-[#049704]" />
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-semibold text-gray-900 group-hover:text-[#049704] transition-colors break-all">
                          info@ontheflywastesolutions.com
                        </div>
                        <p className="text-gray-600">We reply within 24 hours</p>
                      </div>
                    </a>

                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full bg-[#049704]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <MapPin className="h-6 w-6 text-[#049704]" />
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-semibold text-gray-900">Central Florida</div>
                        <p className="text-gray-600">Serving the greater Central Florida area</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full bg-[#049704]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Clock className="h-6 w-6 text-[#049704]" />
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-semibold text-gray-900">8:00 AM - 9:00 PM</div>
                        <p className="text-gray-600">Monday - Sunday</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden" style={{ height: '400px' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224444.06另外85899373!2d-81.48754542650833!3d28.53833034591211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1680887892244!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                    title="On The Fly Waste Solutions Location Map"
                  ></iframe>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8" style={{ height: 'fit-content', minHeight: '600px' }}>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                  <p className="text-sm text-gray-600">Fill out the form below and we'll get back to you soon</p>
                </div>
                <div className="mb-8">
                  <div className="flex items-center">
                    {formSteps.map((_, index) => (
                      <React.Fragment key={index}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          index <= formStep ? 'bg-[#049704] text-white' : 'bg-gray-200 text-gray-500'
                        }`}>
                          {index + 1}
                        </div>
                        {index < formSteps.length - 1 && (
                          <div className={`h-1 flex-1 ${
                            index < formStep ? 'bg-[#049704]' : 'bg-gray-200'
                          }`} />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <form noValidate>
                  <div className="mb-8 min-h-[250px] flex flex-col justify-start">
                    <div className="text-lg font-semibold mb-4 text-center">{formSteps[formStep].title}</div>
                    <div className="flex-1 flex flex-col justify-start">
                      {formSteps[formStep].fields}
                    </div>
                  </div>

                  <div className="flex justify-between pt-6 border-t border-gray-100">
                    {formStep > 0 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex items-center text-gray-600 hover:text-[#049704] transition-colors duration-300"
                      >
                        <ArrowLeft className="h-5 w-5 mr-2" />
                        Back
                      </button>
                    )}
                    {formStep < formSteps.length - 1 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="btn-primary ml-auto"
                      >
                        Next Step <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={formStatus === 'submitting'}
                        className="btn-primary ml-auto disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {formStatus === 'submitting' ? (
                          <span className="flex items-center">
                            <Loader2 className="animate-spin mr-2 h-5 w-5" />
                            Sending...
                          </span>
                        ) : formStatus === 'success' ? (
                          <span className="flex items-center">
                            Message Sent <CheckCircle2 className="ml-2 h-5 w-5" />
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Send Message <Send className="ml-2 h-5 w-5" />
                          </span>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* Areas We Serve Section */}
            <div className="mt-16">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Areas We Serve</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Professional waste management services throughout Central Florida
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    city: "Orlando",
                    description: "Downtown, College Park, Winter Park, Dr. Phillips"
                  },
                  {
                    city: "Kissimmee",
                    description: "Celebration, Poinciana, St. Cloud"
                  },
                  {
                    city: "Altamonte Springs",
                    description: "Longwood, Casselberry, Winter Springs"
                  },
                  {
                    city: "Lake Mary",
                    description: "Sanford, Heathrow, Lake Forest"
                  },
                  {
                    city: "Apopka",
                    description: "Mount Dora, Eustis, Tavares"
                  },
                  {
                    city: "Clermont",
                    description: "Minneola, Groveland, Montverde"
                  },
                  {
                    city: "Melbourne",
                    description: "Palm Bay, Rockledge, Satellite Beach"
                  },
                  {
                    city: "Davenport",
                    description: "ChampionsGate, Reunion, Four Corners"
                  },
                  {
                    city: "Winter Garden",
                    description: "Windermere, Ocoee, Oakland"
                  },
                  {
                    city: "Davenport",
                    description: "ChampionsGate, Reunion, Four Corners"
                  },
                  {
                    city: "Winter Garden",
                    description: "Windermere, Ocoee, Oakland"
                  }
                ].map((area, index) => (
                  <ScrollReveal 
                    key={index}
                    direction={index % 2 === 0 ? 'left' : 'right'}
                    delay={index * 0.1}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {area.city}
                      </h3>
                      <p className="text-gray-600">
                        {area.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal>
                <div className="text-center bg-gradient-to-br from-[#049704]/5 to-[#038203]/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't See Your Area?</h3>
                  <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                    We're continuously expanding our services throughout Central Florida. Contact us to discuss service availability in your location.
                  </p>
                  <Link to="/contact" className="btn-primary">
                    Check Service Availability <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;