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
    subheading: 'From concept to delivery, we create compelling video content that captivates your audience. Whether it’s brand stories, product demos, or social media content—we make videos that convert.',
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
  return (
    <div className="text-white">
      <div className="min-h-screen" style={{ backgroundImage: 'url(/bg-pages/D3-1.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <Navbar onMenuClick={() => setMenuOpen(true)} />
        <main className="w-full flex flex-col items-center justify-start pt-24 sm:pt-28 lg:pt-24 pb-10 px-4 md:px-8 lg:px-16 min-h-[calc(100vh-64px)]">
          <div className="w-full max-w-5xl mx-auto text-center mt-10 mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-pink-400 mb-2">Marketing</h2>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Marketing Services</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Everything you need to grow your brand, all in one place. Explore our full suite of marketing services below:
            </p>
          </div>
          {marketingSections.map((section) => (
            <section key={section.key} className="w-full max-w-5xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-lg" style={{ backgroundImage: `url(${section.bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
              <div className="bg-black/70 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-8 rounded-2xl">
                <div className="flex-1">
                  <div className="text-white/60 text-lg sm:text-xl font-medium leading-7 mb-4" style={{ fontFamily: 'Inter' }}>
                    {section.label}
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                    {section.heading}
                  </h2>
                  <p className="mb-6 text-white/50 max-w-2xl text-base sm:text-lg font-normal leading-[110%]">
                    {section.subheading}
                  </p>
                  <Link href="/book-demo">
                    <div className="inline-block p-[2px] rounded-xl transition hover:scale-105" style={{ background: 'linear-gradient(90deg, #ff965d 0%, #ff5bbe 50%, #a63ffd 100%)' }}>
                      <button className="px-6 sm:px-8 py-3 rounded-[10px] font-medium bg-black text-white transition focus:outline-none w-full sm:w-auto">
                        Book Demo
                      </button>
                    </div>
                  </Link>
                </div>
                <div className="flex flex-col items-start w-full sm:w-auto">
                  <div className="w-full sm:w-auto lg:w-[461px] mb-6" style={{ maxWidth: '461px', height: '240px', borderRadius: '22px', background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)', padding: '1px' }}>
                    <div className="relative" style={{ width: '100%', height: '100%', borderRadius: '22px', background: '#181825', backdropFilter: 'blur(21.5px)' }}>
                      <div style={{ position: 'absolute', top: '40px', left: '45px', width: '62px', height: '37px', borderRadius: '4px', background: section.cardColor }} />
                      <div style={{ position: 'absolute', top: '130px', left: '45px', color: '#FFFFFF', fontFamily: 'Inter', fontSize: '24px', fontWeight: '400', lineHeight: '28px' }}>{section.cardTitle}</div>
                      <div style={{ position: 'absolute', top: '176px', left: '45px', color: 'rgba(255,255,255,0.3)', fontFamily: 'Epilogue', fontSize: '18px', fontStyle: 'italic', fontWeight: '500', lineHeight: '110%', letterSpacing: '0.9px' }}>BARBARIKA</div>
                    </div>
                  </div>
                  <ul className="space-y-3 list-disc list-inside flex-1 text-sm sm:text-base lg:text-[20px]" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', lineHeight: '260%' }}>
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
    </div>
  );
}