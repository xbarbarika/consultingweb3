"use client";
import React, { useState } from 'react';
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
    cardColor: '#5BAFFF',
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
    cardColor: '#5BAFFF',
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
    cardColor: '#5BAFFF',
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
    cardColor: '#5BAFFF',
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
    cardColor: '#5BAFFF',
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
    cardColor: '#5BAFFF',
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
    cardColor: '#5BAFFF',
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
    cardColor: '#5BAFFF',
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
    cardColor: '#5BAFFF',
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
    cardColor: '#5BAFFF',
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
  React.useEffect(() => {
    // Check if there's a hash in the URL and scroll to it
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
    <div className="text-white">
      <div className="min-h-screen" style={{ backgroundImage: 'url(/bg-pages/D3-1.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <Navbar onMenuClick={() => setMenuOpen(true)} />
        <main className="w-full flex flex-col items-center justify-start pt-16 xs:pt-18 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-24 pb-6 xs:pb-8 sm:pb-10 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 min-h-[calc(100vh-64px)]">
          <div className="w-full max-w-5xl mx-auto text-center mt-4 xs:mt-6 sm:mt-8 md:mt-10 mb-6 xs:mb-8 sm:mb-12">
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold text-pink-400 mb-2">Marketing</h2>
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 xs:mb-3 sm:mb-4">Our Marketing Services</h1>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto px-3 xs:px-4">
              Everything you need to grow your brand, all in one place. Explore our full suite of marketing services below:
            </p>
          </div>
          {marketingSections.map((section) => (
            <section key={section.key} id={section.key} className="w-full max-w-5xl mx-auto mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16 rounded-2xl overflow-hidden shadow-lg marketing-section scroll-mt-20" style={{ backgroundImage: `url(${section.bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
              <div className="bg-black/70 p-3 xs:p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16 flex flex-col xl:flex-row gap-4 xs:gap-6 sm:gap-8 rounded-2xl landscape-spacing">
                <div className="flex-1 order-2 xl:order-1">
                  <div className="text-white/60 text-sm xs:text-base sm:text-lg md:text-xl font-medium leading-6 xs:leading-7 mb-2 xs:mb-3 sm:mb-4 marketing-label" style={{ fontFamily: 'Inter' }}>
                    {section.label}
                  </div>
                  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-2 xs:mb-3 sm:mb-4 marketing-title text-overflow-fix">
                    {section.heading}
                  </h2>
                  <p className="mb-3 xs:mb-4 sm:mb-6 text-white/50 max-w-2xl text-xs xs:text-sm sm:text-base md:text-lg font-normal leading-[120%] xs:leading-[110%] marketing-subtitle text-overflow-fix landscape-spacing">
                    {section.subheading}
                  </p>
                  <Link href="/book-demo" className="block w-full sm:w-auto">
                    <div className="inline-block p-[2px] rounded-xl transition hover:scale-105 w-full sm:w-auto" style={{ background: 'linear-gradient(90deg, #ff965d 0%, #ff5bbe 50%, #a63ffd 100%)' }}>
                      <button className="px-3 xs:px-4 sm:px-6 md:px-8 py-2.5 xs:py-3 sm:py-3 rounded-[10px] font-medium bg-black text-white transition focus:outline-none w-full h-full text-sm xs:text-sm sm:text-base landscape-button">
                        Book Demo
                      </button>
                    </div>
                  </Link>
                </div>
                <div className="flex flex-col items-start w-full xl:w-auto order-1 xl:order-2">
                  <div className="w-full max-w-full xl:w-[461px] mb-3 xs:mb-4 sm:mb-6 marketing-card landscape-card-height" style={{ 
                    maxWidth: '461px', 
                    height: '140px',
                    borderRadius: '16px', 
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)', 
                    padding: '1px' 
                  }}>
                    <div className="relative" style={{ width: '100%', height: '100%', borderRadius: '16px', background: '#181825', backdropFilter: 'blur(21.5px)' }}>
                      <div style={{ 
                        position: 'absolute', 
                        top: '16px', 
                        left: '16px', 
                        width: '32px', 
                        height: '20px', 
                        borderRadius: '4px', 
                        background: section.cardColor 
                      }} />
                      <div style={{ 
                        position: 'absolute', 
                        top: '48px', 
                        left: '16px', 
                        color: '#FFFFFF', 
                        fontFamily: 'Inter', 
                        fontSize: '14px', 
                        fontWeight: '400', 
                        lineHeight: '18px' 
                      }}>{section.cardTitle}</div>
                      <div style={{ 
                        position: 'absolute', 
                        top: '72px', 
                        left: '16px', 
                        color: 'rgba(255,255,255,0.3)', 
                        fontFamily: 'Epilogue', 
                        fontSize: '12px', 
                        fontStyle: 'italic', 
                        fontWeight: '500', 
                        lineHeight: '110%', 
                        letterSpacing: '0.9px' 
                      }}>BARBARIKA</div>
                    </div>
                  </div>
                  <ul className="space-y-1.5 xs:space-y-2 sm:space-y-3 list-disc list-inside flex-1 text-xs xs:text-sm sm:text-base lg:text-lg xl:text-[20px] marketing-features text-overflow-fix" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', lineHeight: '200%' }}>
                    {section.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </main>
      </div>
      <Footer />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <style jsx>{`
        /* Responsive card adjustments for all devices */
        @media (max-width: 375px) {
          .marketing-card {
            height: 120px !important;
            border-radius: 12px !important;
          }
          
          .marketing-card .card-title {
            font-size: 12px !important;
            line-height: 16px !important;
          }
          
          .marketing-card .card-brand {
            font-size: 10px !important;
            line-height: 14px !important;
          }
        }

        @media (min-width: 376px) and (max-width: 480px) {
          .marketing-card {
            height: 130px !important;
            border-radius: 14px !important;
          }
          
          .marketing-card .card-title {
            font-size: 13px !important;
            line-height: 17px !important;
          }
          
          .marketing-card .card-brand {
            font-size: 11px !important;
            line-height: 15px !important;
          }
        }

        @media (min-width: 481px) and (max-width: 640px) {
          .marketing-card {
            height: 140px !important;
            border-radius: 16px !important;
          }
          
          .marketing-card .card-title {
            font-size: 14px !important;
            line-height: 18px !important;
          }
          
          .marketing-card .card-brand {
            font-size: 12px !important;
            line-height: 16px !important;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .marketing-card {
            height: 160px !important;
            border-radius: 18px !important;
          }
          
          .marketing-card .card-title {
            font-size: 15px !important;
            line-height: 19px !important;
          }
          
          .marketing-card .card-brand {
            font-size: 13px !important;
            line-height: 17px !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .marketing-card {
            height: 180px !important;
            border-radius: 20px !important;
          }
          
          .marketing-card .card-title {
            font-size: 16px !important;
            line-height: 20px !important;
          }
          
          .marketing-card .card-brand {
            font-size: 14px !important;
            line-height: 18px !important;
          }
        }

        @media (min-width: 1025px) {
          .marketing-card {
            height: 200px !important;
            border-radius: 22px !important;
          }
          
          .marketing-card .card-title {
            font-size: 18px !important;
            line-height: 22px !important;
          }
          
          .marketing-card .card-brand {
            font-size: 16px !important;
            line-height: 20px !important;
          }
        }

        @media (min-width: 1280px) {
          .marketing-card {
            height: 240px !important;
            border-radius: 22px !important;
          }
          
          .marketing-card .card-title {
            font-size: 20px !important;
            line-height: 24px !important;
          }
          
          .marketing-card .card-brand {
            font-size: 18px !important;
            line-height: 22px !important;
          }
        }
      `}</style>
    </div>
  );
}