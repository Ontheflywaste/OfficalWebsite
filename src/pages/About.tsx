import React from 'react';
import { Users, Leaf, Award, Target, CheckCircle2, Phone, Mail, Linkedin } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

function About() {
  return (
    <>
      <Helmet>
        <title>About Orlando's Valet Trash Experts | On The Fly</title>
        <meta name="description" content="Learn about Orlando's premier valet trash service. Professional team with proven experience serving multifamily communities since 2020." />
        <meta name="keywords" content="orlando valet trash service, central florida waste management, professional trash collection orlando, apartment waste services florida" />
        <link rel="canonical" href="https://ontheflywastesolutions.com/about" />
        
        {/* About Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "On The Fly Waste Solutions",
            "url": "https://ontheflywastesolutions.com/about",
            "logo": "https://ontheflywastesolutions.com/Images/OnTheFlyRecycleLogoWhitenobackground.png",
            "description": "Professional valet trash and waste management services for multifamily communities in Orlando and Central Florida since 2020",
            "foundingDate": "2020",
            "founder": [
              {
                "@type": "Person",
                "name": "Donnell Edwards",
                "jobTitle": "Founder & CEO"
              }
            ],
            "employee": [
              {
                "@type": "Person",
                "name": "Donnell Edwards",
                "jobTitle": "Founder & CEO"
              },
              {
                "@type": "Person",
                "name": "Trevor Alston",
                "jobTitle": "Vice President"
              },
              {
                "@type": "Person",
                "name": "Steven Edwards",
                "jobTitle": "Chief Financial Officer"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Orlando",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-407-274-5019",
            "email": "info@ontheflywastesolutions.com"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen pt-24 md:pt-0">
        <ScrollReveal>
          <div className="relative min-h-[60vh] hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1920"
              alt="On The Fly Waste Solutions Professional Team Meeting in Orlando"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: 'center 15%' }}
              loading="eager"
            />
            <div className="relative h-full z-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex flex-col justify-center items-center h-full text-center" style={{ paddingTop: '25vh', paddingBottom: '10vh' }}>
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">About Orlando's Valet Trash Experts</h1>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    Professional Valet Trash & Junk Removal Services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Main Content */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey to Excellence</h2>
                  <div className="prose prose-lg text-gray-600">
                    <p className="mb-4">
                      Since our founding in 2020, On The Fly Waste Solutions has been driven by a singular mission: to transform the valet trash and bulk removal industry through innovation, reliability, and exceptional service. Our journey began when we identified a critical gap in the market for high-quality, consistent valet trash services in Central Florida.
                    </p>
                    <p className="mb-4">
                      What sets us apart is our unwavering commitment to excellence and our innovative approach to valet trash and bulk removal. We've invested in cutting-edge technology and developed streamlined processes that ensure efficient, environmentally responsible service delivery. Our team undergoes rigorous training to maintain the highest standards of professionalism and safety.
                    </p>
                    <div className="bg-[#049704]/10 rounded-lg p-4 my-6">
                      <p className="text-[#049704] font-medium">Curious about what makes a great valet trash provider? <Link to="/blog/how-to-choose-valet-trash-vendor" className="underline hover:no-underline">Read our guide</Link> on selecting the right vendor for your property.</p>
                    </div>
                    <p className="mb-4">
                      Today, we serve a diverse portfolio of residential and commercial properties throughout Central Florida, earning a reputation for reliability and exceptional customer service. Our growth is a testament to our dedication to continuous improvement and our ability to adapt to our clients' evolving needs.
                    </p>
                    <p>
                      As we look to the future, we remain committed to our founding principles while embracing new technologies and sustainable practices that will shape the future of valet trash and bulk removal services. Our success is measured not just in numbers, but in the lasting relationships we build with our clients and the positive impact we make in our community.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div className="w-full">
                  <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105">
                    <img
                      src="/Images/excellence image.jpg"
                      alt="On The Fly Waste Solutions Excellence"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Meet Our Leadership Team</h2>
                <p className="mt-4 text-lg text-gray-600">
                  The dedicated professionals behind On The Fly Waste Solutions
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Donnell Edwards",
                  title: "Founder & CEO",
                  image: "/Images/Donnell2.jpg",
                  bio: "As the visionary founder of On The Fly Waste Solutions, Donnell has revolutionized valet trash services across Central Florida. With an unwavering commitment to excellence and innovation, he has built a company that sets new standards in the industry. His leadership philosophy combines cutting-edge operational efficiency with exceptional customer service, ensuring that every client receives the highest quality waste management solutions.",
                  linkedin: "https://www.linkedin.com/in/on-the-fly-waste-solutions-23a48b296/",
                  hasImage: true,
                  objectPosition: "50% 20%"
                },
                {
                  name: "Trevor Alston",
                  title: "Vice President",
                  image: "/Images/Trevor.jpg",
                  bio: "Trevor brings a wealth of operational expertise and strategic vision to On The Fly Waste Solutions. His innovative approach to service delivery and team management has been instrumental in our company's growth and success. With a focus on continuous improvement and customer satisfaction, Trevor ensures that our services consistently exceed client expectations while maintaining the highest standards of efficiency and reliability.",
                  linkedin: "https://www.linkedin.com/in/on-the-fly-waste-solutions-23a48b296/",
                  hasImage: true,
                  objectPosition: "50% 20%"
                },
                {
                  name: "Steven Edwards",
                  title: "Chief Financial Officer",
                  image: "/Images/Steven2.jpg",
                  bio: "With over 20 years of experience in financial management and tax strategy, Steven brings unparalleled expertise to On The Fly Waste Solutions. His comprehensive background in corporate finance, tax planning, and business development has been crucial in driving our company's financial success and sustainable growth. Steven's strategic financial leadership ensures strong fiscal management while maximizing operational efficiency and maintaining the highest standards of financial compliance and transparency.",
                  linkedin: "https://www.linkedin.com/in/on-the-fly-waste-solutions-23a48b296/",
                  hasImage: true,
                  objectPosition: "50% 20%"
                }
              ].map((member, index) => (
                <ScrollReveal 
                  key={index}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  delay={index * 0.1}
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full">
                    <div className="w-full h-64 aspect-[3/4] relative overflow-hidden">
                      {member.hasImage ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="object-cover w-full h-full rounded-t-lg"
                          style={{ objectPosition: member.name === 'Donnell Edwards' ? 'center 15%' : 'center top' }}
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#049704] flex items-center justify-center rounded-t-lg">
                          <span className="text-4xl font-bold text-white">{member.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 text-center">{member.name}</h3>
                      <p className="text-[#049704] font-medium mb-4 text-center">{member.title}</p>
                      <p className="text-gray-600 mb-6 text-center leading-relaxed">{member.bio}</p>
                      <div className="flex items-center justify-center space-x-4">
                        <a 
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-[#049704] transition-colors duration-300"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a 
                          href="mailto:info@ontheflywastesolutions.com"
                          className="text-gray-600 hover:text-[#049704] transition-colors duration-300"
                        >
                          <Mail className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Experience the difference with our professional waste management services
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Professional Service",
                  description: "Our team is trained to provide courteous and efficient service, ensuring your waste management needs are met with the highest level of professionalism."
                },
                {
                  title: "Reliable & Consistent",
                  description: "We maintain strict schedules and provide reliable service you can count on, day after day, week after week."
                },
                {
                  title: "Competitive Pricing",
                  description: "We offer fair and competitive pricing for all our services, with transparent billing and no hidden fees."
                },
                {
                  title: "Flexible Scheduling",
                  description: "We work around your schedule to provide waste collection services at times that are convenient for you."
                },
                {
                  title: "Eco-Friendly Practices",
                  description: "We're committed to environmentally responsible waste management practices and proper disposal methods."
                },
                {
                  title: "Customer Satisfaction",
                  description: "Your satisfaction is our priority. We go above and beyond to ensure you're happy with our services."
                }
              ].map((item, index) => (
                <ScrollReveal 
                  key={index}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  delay={index * 0.1}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-[#038203] flex-shrink-0 mt-1" />
                      <div className="flex-1 flex flex-col">
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600 flex-1">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>

        {/* Company Timeline */}
        <div className="py-20 bg-gradient-to-br from-[#049704]/5 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey Through the Years</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  From startup to industry leader - discover the key milestones that shaped On The Fly Waste Solutions
                </p>
              </div>
            </ScrollReveal>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-[#049704]/20 hidden md:block"></div>
              
              <div className="space-y-12">
                {[
                  {
                    year: "2020",
                    title: "Company Launch",
                    description: "On The Fly Waste Solutions officially launched into the valet trash industry, bringing professional waste management services to Central Florida multifamily communities.",
                    side: "left"
                  },
                  {
                    year: "2021",
                    title: "Major Partnership Milestone",
                    description: "Acquired our first major partnership with Encore Resort at Reunion, establishing our reputation for serving premium resort-style communities with exceptional service standards.",
                    side: "right"
                  },
                  {
                    year: "2022",
                    title: "Industry Recognition",
                    description: "Became proud partners with the Apartment Association of Greater Orlando (AAGO), Florida Apartment Association (FAA), and National Apartment Association (NAA), solidifying our commitment to professional standards and industry best practices.",
                    side: "left"
                  },
                  {
                    year: "2023",
                    title: "1,500+ Happy Clients",
                    description: "Reached a significant milestone of serving over 1,500 satisfied residents across Central Florida, demonstrating our commitment to reliable service and customer satisfaction.",
                    side: "right"
                  },
                  {
                    year: "2024",
                    title: "Premium Partnership Expansion",
                    description: "Acquired major partnerships with prestigious properties including Margaritaville Resort and Reunion Resort at Orlando, expanding our portfolio of luxury community services.",
                    side: "left"
                  },
                  {
                    year: "2025",
                    title: "Industry Leadership",
                    description: "Now proudly serving 2,500+ residents and partnered with leading management companies including ZRS Management, Rangewater Management, Artemis Lifestyles, Venterra Realty, and RPM Living.",
                    side: "right"
                  }
                ].map((milestone, index) => (
                  <ScrollReveal 
                    key={milestone.year}
                    direction={milestone.side === 'left' ? 'left' : 'right'}
                    delay={index * 0.1}
                  >
                    <div className={`relative flex items-center ${
                      milestone.side === 'left' 
                        ? 'md:justify-start' 
                        : 'md:justify-end'
                    } justify-center`}>
                      {/* Timeline dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#049704] rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>
                      
                      {/* Content card */}
                      <div className={`bg-white rounded-xl shadow-lg p-6 max-w-md w-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                        milestone.side === 'left' 
                          ? 'md:mr-8 md:text-right' 
                          : 'md:ml-8 md:text-left'
                      } text-center md:text-left`}>
                        <div className={`flex items-center mb-3 ${
                          milestone.side === 'left' 
                            ? 'md:justify-end justify-center' 
                            : 'md:justify-start justify-center'
                        }`}>
                          <div className="w-12 h-12 bg-[#049704] text-white rounded-full flex items-center justify-center font-bold text-sm mr-3 md:mr-0">
                            {milestone.year}
                          </div>
                          {milestone.side === 'right' && (
                            <div className="hidden md:block ml-3">
                              <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                            </div>
                          )}
                          {milestone.side === 'left' && (
                            <div className="hidden md:block mr-3 text-right">
                              <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                            </div>
                          )}
                        </div>
                        <div className="md:hidden mb-3">
                          <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal delay={0.6}>
              <div className="text-center mt-16">
                <div className="bg-[#049704]/10 rounded-2xl p-8 max-w-3xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Looking Ahead</h3>
                  <p className="text-lg text-gray-700">
                    As we continue to grow and serve more communities across Central Florida, our commitment to excellence, innovation, and exceptional service remains stronger than ever. The future holds exciting opportunities to expand our impact and continue setting new standards in the valet trash industry.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
    </>

  );
}

export default About;