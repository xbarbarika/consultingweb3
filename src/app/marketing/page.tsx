"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';
import Link from 'next/link';

const marketingSections = [
  {
    key: 'marketing-sub',
    label: 'Marketing Subscription',
    heading: 'All Your Marketing Needs, One Simple Subscription',
    subheading: 'Scale with an on-demand team that knows your business inside and out. From strategy to execution, get expert marketing support without the overhead.',
    cardTitle: 'Marketing Subscription',
    cardColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    buttonColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: '📊',
    features: [
      'Complete marketing team at your fingertips',
      'Unlimited revisions and requests',
      'Transparent pricing, no hidden fees',
      'Pause or cancel anytime—no long-term contracts',
    ],
    bg: '/bg-pages/D3-10.svg',
  },
  {
    key: 'social-media',
    label: 'Social Media',
    heading: 'Build Meaningful Connections, Drive Real Engagement',
    subheading: 'We craft content that resonates with your audience and builds lasting relationships. From strategy to execution, we manage every aspect of your social media presence to drive growth and engagement.',
    cardTitle: 'Social Media Marketing',
    cardColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    buttonColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    icon: '💬',
    features: [
      'Content strategy tailored to your brand voice',
      'Platform-optimized posting schedules',
      'Community management and engagement',
      'Performance tracking and optimization',
    ],
    bg: '/bg-pages/D3-10.svg',
  },
  {
    key: 'paid-social',
    label: 'Paid Social Advertising',
    heading: 'Supercharge Your Growth with High-Converting Social Ad Campaigns',
    subheading: 'We design, build and optimise ad campaigns that generate real sales. From creative production to advanced audience targeting, you get performance at scale.',
    cardTitle: 'Paid Social Advertising',
    cardColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    buttonColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    icon: '📈',
    features: [
      'Laser-focused audience targeting',
      'Creative assets built for engagement',
      'A/B testing & real-time optimization',
      'Scalable campaigns across platforms',
    ],
    bg: '/bg-pages/D3-10.svg',
  },
  {
    key: 'seo',
    label: 'SEO',
    heading: 'Scalable SEO That Grows With You',
    subheading: 'Technical expertise meets content strategy for organic growth that lasts. From keyword research to backlink building—we turn search traffic into revenue.',
    cardTitle: 'Search Engine Optimization',
    cardColor: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    buttonColor: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    icon: '🔍',
    features: [
      'Transparent pricing, no hidden fees',
      'No freelancers, only vetted SEO pros',
      'Keyword strategy, technical SEO, content & backlinks',
      'Real results, tracked and reported',
    ],
    bg: '/bg-pages/D3-10.svg',
  },
  {
    key: 'video',
    label: 'Video Production',
    heading: 'Bring Your Brand to Life Through Video',
    subheading: 'From concept to delivery, we create compelling video content that captivates your audience. Whether it\'s brand stories, product demos, or social media content—we make videos that convert.',
    cardTitle: 'Video Production',
    cardColor: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    buttonColor: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    icon: '🎥',
    features: [
      'Brand storytelling and product demos',
      'Social media and advertising video content',
      'Professional editing and post-production',
      'Optimized for every platform and format',
    ],
    bg: '/bg-pages/D3-10.svg',
  },
  {
    key: 'influencer',
    label: 'Influencer Marketing',
    heading: 'Amplify Your Reach Through Authentic Voices',
    subheading: 'We connect you with the right influencers to authentically promote your brand. From micro-influencers to industry leaders—we build campaigns that drive results.',
    cardTitle: 'Influencer Marketing',
    cardColor: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    buttonColor: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    icon: '⭐',
    features: [
      'Strategic influencer identification and outreach',
      'Campaign management from start to finish',
      'Performance tracking and ROI measurement',
      'Authentic partnerships that build trust',
    ],
    bg: '/bg-pages/D3-10.svg',
  },
  {
    key: 'pr-marketing',
    label: 'PR & Outreach',
    heading: 'Build Authority Through Strategic PR',
    subheading: 'We position your brand as an industry leader through strategic media relations. From press releases to thought leadership—we secure the coverage that matters.',
    cardTitle: 'PR & Outreach',
    cardColor: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    buttonColor: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    icon: '📰',
    features: [
      'Media relations and press release distribution',
      'Thought leadership content and positioning',
      'Crisis communication management',
      'Industry event and speaking opportunities',
    ],
    bg: '/bg-pages/D3-10.svg',
  },
  {
    key: 'community',
    label: 'Community Management',
    heading: 'Build & Nurture Thriving Communities',
    subheading: 'We help you build vibrant communities around your brand that drive engagement and loyalty. From Discord servers to social groups—we manage every touchpoint with your audience.',
    cardTitle: 'Community Management',
    cardColor: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    buttonColor: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    icon: '👥',
    features: [
      'Platform-specific community building strategies',
      'Daily engagement and moderation',
      'Event planning and community activities',
      'Growth tracking and community insights',
    ],
    bg: '/bg-pages/D3-10.svg',
  },
  {
    key: 'branding',
    label: 'Branding',
    heading: 'Build a Brand That Stands Out and Sticks',
    subheading: 'We craft brands that resonate from visual identity to verbal tone. Our approach combines deep research, clear positioning, and design systems built for growth.',
    cardTitle: 'Branding',
    cardColor: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    buttonColor: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    icon: '🎨',
    features: [
      'Brand strategy, positioning & architecture',
      'Logo, visual identity & brand guidelines',
      'Messaging frameworks for all channels',
      'Brand audits & repositioning',
    ],
    bg: '/bg-pages/D3-10.svg',
  },
  {
    key: 'lead-gen',
    label: 'Lead Generation',
    heading: 'Consistent, Qualified Leads, Without the Guesswork',
    subheading: 'We build and manage performance-driven lead generation systems that deliver results—not just clicks. From strategy to execution, we handle every step so your sales team focuses on closing, not chasing.',
    cardTitle: 'Lead Generation',
    cardColor: 'linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%)',
    buttonColor: 'linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%)',
    icon: '🎯',
    features: [
      'High-intent lead targeting with real-time list building',
      'Personalized messaging that gets replies',
      'CRM integration and ongoing funnel optimization',
      'Weekly reports with lead quality insights',
    ],
    bg: '/bg-pages/D3-10.svg',
  },
];

export default function Marketing() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Add smooth scrolling behavior
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="text-white min-h-screen flex flex-col">
      {/* Premium Background with Gradient Overlay */}
      <div 
        className="fixed inset-0 z-0"
        style={{ 
          backgroundImage: 'url(/bg-pages/D3-1.svg)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat' 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-purple-900/40"></div>
      </div>

      <div className="relative z-10 flex-1">
        <Navbar onMenuClick={() => setMenuOpen(true)} />
        
        <main className="w-full flex flex-col items-center justify-start pt-24 pb-16 px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Hero Section - Left Aligned with Contact Button */}
          <div className="w-full max-w-7xl mx-auto mb-20 animate-fade-in">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
              {/* Left Side - Content */}
              <div className="flex-1 space-y-6 lg:space-y-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 animate-slide-up">
                  <span className="text-sm font-semibold text-pink-400 tracking-wide uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Marketing Services
                  </span>
                </div>
                
                <div className="space-y-4 lg:space-y-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-slide-up-delay" style={{ fontFamily: 'Epilogue, sans-serif' }}>
                    <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                      Transform Your
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                      Brand Through
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Marketing
                    </span>
                  </h1>
                  
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl leading-relaxed animate-slide-up-delay-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Everything you need to grow your brand, all in one place. 
                    Explore our comprehensive suite of marketing services designed to drive real results.
                  </p>
                </div>
              </div>

              {/* Right Side - Contact Button */}
              <div className="lg:flex-shrink-0 animate-slide-up-delay-2">
                <Link href="/book-demo">
                  <button className="group relative px-8 py-4 lg:px-12 lg:py-6 rounded-2xl font-bold text-white overflow-hidden transition-all duration-500 hover:shadow-2xl text-lg lg:text-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                    <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center gap-3">
                      Get Started
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="w-full max-w-7xl mx-auto space-y-16 mb-20">
            {marketingSections.map((section, index) => (
              <section
                key={section.key}
                id={section.key}
                className="scroll-mt-20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  {/* Container - No Hover Effect */}
                  <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                    <div className="relative p-8 lg:p-12 xl:p-16">
                      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                        {/* Content Side */}
                        <div className="space-y-6 lg:space-y-8">
                          {/* Service Badge */}
                          <div className="flex items-center gap-3 lg:gap-4">
                            <div className="text-2xl lg:text-3xl opacity-80">{section.icon}</div>
                            <span className="px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs lg:text-sm font-semibold text-white/90 tracking-wide uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                              {section.label}
                            </span>
                          </div>
                          
                          {/* Heading */}
                          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent" style={{ fontFamily: 'Epilogue, sans-serif' }}>
                            {section.heading}
                          </h2>
                          
                          {/* Subheading */}
                          <p className="text-base md:text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {section.subheading}
                          </p>
                          
                          {/* CTA Button */}
                          <div className="pt-2">
                            <Link href="/book-demo">
                              <button 
                                className="group relative px-6 py-3 lg:px-8 lg:py-4 rounded-2xl font-bold text-white overflow-hidden transition-all duration-500 hover:shadow-xl text-base lg:text-lg"
                                style={{ 
                                  background: section.buttonColor,
                                  fontFamily: 'Inter, sans-serif'
                                }}
                              >
                                <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative z-10 flex items-center gap-2 lg:gap-3">
                                  Book Demo
                                  <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </span>
                              </button>
                            </Link>
                          </div>
                        </div>
                        
                        {/* Card Side */}
                        <div className="space-y-6 lg:space-y-8">
                          {/* Service Card - With Hover Effect */}
                          <div className="relative transform transition-all duration-500 hover:scale-105 hover:rotate-y-2">
                            <div className="relative h-56 lg:h-64 xl:h-72 rounded-3xl overflow-hidden shadow-2xl">
                              {/* Card Background */}
                              <div 
                                className="absolute inset-0 rounded-3xl transition-all duration-500"
                                style={{ background: section.cardColor }}
                              >
                                <div className="absolute inset-0 bg-black/20"></div>
                              </div>
                              
                              {/* Card Content */}
                              <div className="relative h-full p-6 lg:p-8 flex flex-col justify-between">
                                <div className="flex items-start justify-between">
                                  <div className="w-12 h-8 lg:w-16 lg:h-10 rounded-xl bg-white/20 backdrop-blur-md"></div>
                                  <div className="text-2xl lg:text-3xl opacity-80">{section.icon}</div>
                                </div>
                                
                                <div className="space-y-2 lg:space-y-3">
                                  <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-white" style={{ fontFamily: 'Epilogue, sans-serif' }}>
                                    {section.cardTitle}
                                  </h3>
                                  <p className="text-xs lg:text-sm text-white/70 font-medium tracking-wider uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    BARBARIKA
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Features List */}
                          <div className="space-y-3 lg:space-y-4">
                            {section.features.map((feature, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-3 lg:gap-4 animate-slide-in-left p-3 lg:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                                style={{ animationDelay: `${i * 0.1}s` }}
                              >
                                <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 mt-1.5 lg:mt-2 flex-shrink-0"></div>
                                <p className="text-white/90 leading-relaxed text-sm lg:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                                  {feature}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>
      
      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
      
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slide-up-delay {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slide-up-delay-2 {
          from { 
            opacity: 0; 
            transform: translateY(40px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slide-in-left {
          from { 
            opacity: 0; 
            transform: translateX(-20px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-slide-up-delay {
          animation: slide-up-delay 0.8s ease-out 0.2s both;
        }
        
        .animate-slide-up-delay-2 {
          animation: slide-up-delay-2 0.8s ease-out 0.4s both;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.4s ease-out both;
        }
        
        .hover\\:rotate-y-2:hover {
          transform: perspective(1000px) rotateY(2deg);
        }
      `}</style>
    </div>
  );
}