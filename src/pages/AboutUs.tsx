import React from 'react';
import { Users, Leaf, Award, Target, CheckCircle2, Phone, Mail, Linkedin, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollReveal from '../components/ScrollReveal';

function AboutUs() {
  const values = [
    {
      icon: Award,
      title: "Excellence in Service",
      description: "We maintain the highest standards in every aspect of our operations, from staff training to service delivery, ensuring consistent quality that exceeds expectations."
    },
    {
      icon: Users,
      title: "Community Partnership",
      description: "We view ourselves as partners in your property's success, working collaboratively to enhance resident satisfaction and property value through reliable service."
    },
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      description: "Our commitment to sustainable practices includes proper waste sorting, recycling programs, and eco-friendly disposal methods that benefit our community."
    },
    {
      icon: Target,
      title: "Innovation & Growth",
      description: "We continuously invest in new technologies and service improvements to stay ahead of industry trends and provide cutting-edge solutions."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Orlando's Premier Valet Trash Company | On The Fly Waste Solutions</title>
        <meta name="description" content="Learn about On The Fly Waste Solutions, Orlando's trusted valet trash and waste management company. Serving Central Florida since 2020 with professional, reliable service for multifamily communities." />
        <meta name="keywords" content="about on the fly waste solutions, orlando valet trash company, central florida waste management, professional trash services, multifamily waste solutions" />
        <link rel="canonical" href="https://ontheflywastesolutions.com/about-us" />
      </Helmet>

      <div className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-[#049704]/10 text-[#049704] rounded-full text-sm font-medium mb-4">
                  Our Story
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  About Orlando's Premier Valet Trash Company
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transforming waste management for Central Florida communities since 2020 with professional, reliable, and innovative solutions
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Journey to Excellence</h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Founded in 2020, On The Fly Waste Solutions emerged from a simple yet powerful vision: to revolutionize the valet trash and waste management industry in Central Florida through unwavering commitment to excellence, innovation, and exceptional customer service. What began as a local startup has evolved into Orlando's most trusted name in professional waste management solutions for multifamily communities.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Our founders recognized a critical gap in the market—property managers needed a reliable, professional waste management partner who understood the unique challenges of multifamily operations. Traditional waste management companies often treated valet trash as an afterthought, but we saw an opportunity to specialize and excel in this essential service that directly impacts resident satisfaction and property value.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Today, we proudly serve a diverse portfolio of residential and commercial properties throughout Central Florida, from luxury apartment communities to student housing complexes and resort-style properties. Our growth is a testament to our dedication to continuous improvement, innovative service delivery, and our ability to adapt to our clients' evolving needs while maintaining the personal touch that sets us apart from larger, impersonal waste management corporations.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">What Sets Us Apart</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Unlike national waste management companies that treat valet trash as a commodity service, we've built our entire business model around understanding and exceeding the specific needs of multifamily properties. Our team undergoes rigorous training in customer service, safety protocols, and property-specific procedures to ensure every interaction reflects positively on your community.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  We've invested heavily in technology and operational systems that provide transparency and accountability. Our <Link to="/services/valet-trash" className="text-[#049704] hover:text-[#038203] font-medium">comprehensive valet trash services</Link> include real-time service tracking, photo verification of completed collections, and detailed reporting that helps property managers monitor service quality and resident satisfaction metrics.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Beyond our core valet trash services, we've expanded our offerings to include specialized solutions like bulk item removal, pressure washing, and emergency cleanup services. This comprehensive approach allows us to serve as your single point of contact for all waste management and property maintenance needs, simplifying operations while ensuring consistent quality across all services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment to Central Florida</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  As a locally-owned and operated company, we're deeply invested in the success of Central Florida's multifamily housing market. We understand the unique challenges that property managers face in this competitive market, from seasonal occupancy fluctuations to the diverse needs of residents ranging from young professionals to retirees.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Our local presence means we can provide rapid response times, personalized service, and the flexibility to adapt our services to meet specific property requirements. Whether you need emergency <Link to="/services/junk-removal" className="text-[#049704] hover:text-[#038203] font-medium">bulk removal services</Link> for a sudden move-out or want to implement a customized collection schedule that works around your community's unique needs, we have the agility and expertise to deliver solutions that larger companies simply cannot match.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  We're also committed to environmental stewardship and sustainable business practices. Our waste management processes prioritize recycling and proper disposal methods, and we work with local facilities to ensure that waste is handled in an environmentally responsible manner that benefits our entire community.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  The principles that guide every decision and drive our commitment to excellence
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <ScrollReveal 
                  key={index}
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-12 h-12 bg-[#049704]/10 rounded-xl flex items-center justify-center mb-6">
                      <value.icon className="h-6 w-6 text-[#049704]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  The experienced professionals driving innovation and excellence in waste management
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Donnell Edwards",
                  title: "Founder & CEO",
                  image: "/Images/Donnell2.jpg",
                  bio: "Donnell's visionary leadership has transformed On The Fly Waste Solutions into Central Florida's premier valet trash service provider. His commitment to operational excellence and customer satisfaction drives our company's continued growth and innovation.",
                  linkedin: "https://www.linkedin.com/in/on-the-fly-waste-solutions-23a48b296/"
                },
                {
                  name: "Trevor Alston",
                  title: "Vice President",
                  image: "/Images/4D4435D3-67E3-4455-925B-2543F5C84AEC.jpeg",
                  bio: "Trevor brings strategic vision and operational expertise to our service delivery. His focus on continuous improvement and team development ensures we consistently exceed client expectations while maintaining the highest service standards.",
                  linkedin: "https://www.linkedin.com/in/on-the-fly-waste-solutions-23a48b296/"
                },
                {
                  name: "Steven Edwards",
                  title: "Chief Financial Officer",
                  image: "/Images/Steven2.jpg",
                  bio: "With over 20 years of financial management experience, Steven provides the strategic financial leadership that enables our sustainable growth while maintaining competitive pricing and exceptional value for our clients.",
                  linkedin: "https://www.linkedin.com/in/on-the-fly-waste-solutions-23a48b296/"
                }
              ].map((member, index) => (
                <ScrollReveal 
                  key={index}
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                >
                  <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 mx-auto">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: "50% 20%" }}
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-[#049704] font-medium mb-3">{member.title}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    <div className="flex justify-center space-x-3">
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#049704] transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a 
                        href="mailto:info@ontheflywastesolutions.com"
                        className="text-gray-600 hover:text-[#049704] transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas & Contact */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Serving Central Florida</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Proudly providing professional waste management services throughout the greater Orlando area
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <ScrollReveal direction="left">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <MapPin className="h-8 w-8 text-[#049704] mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Service Area</h3>
                  <p className="text-gray-600 mb-4">
                    We serve multifamily communities throughout Central Florida, including Orlando, Kissimmee, Altamonte Springs, Lake Mary, Apopka, and Clermont.
                  </p>
                  <Link to="/contact" className="text-[#049704] hover:text-[#038203] font-medium">
                    Check Service Availability →
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Clock className="h-8 w-8 text-[#049704] mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Always Available</h3>
                  <p className="text-gray-600 mb-4">
                    Our customer service team is available 7 days a week from 8:00 AM to 9:00 PM to address any questions or concerns.
                  </p>
                  <a href="tel:407-274-5019" className="text-[#049704] hover:text-[#038203] font-medium">
                    Call (407) 274-5019 →
                  </a>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Partner with Us?</h3>
                <p className="text-gray-600 mb-6">
                  Discover how our professional waste management solutions can enhance your property and improve resident satisfaction.
                </p>
                <Link to="/contact" className="btn-primary">
                  Get Your Free Consultation
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutUs;