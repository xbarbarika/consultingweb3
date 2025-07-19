'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';
import Link from 'next/link';

const services = [
  {
    icon: (
      // Marketing Subscription: calendar/checklist
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="20" fill="#232336"/><rect x="12" y="14" width="16" height="14" rx="3" stroke="#fff" strokeWidth="2"/><path d="M16 12v4M24 12v4" stroke="#fff" strokeWidth="2"/><path d="M15 20h10M15 24h6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: 'Marketing Subscription',
    desc: 'All your marketing needs in one simple subscription. Scale with an on-demand team that knows your business inside and out.',
    href: '/services-file/marketing-sub',
  },
  {
    icon: (
      // Social Media: chat bubbles
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="20" fill="#232336"/><path d="M12 25v-6a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5h-1.5l-3.5 3v-3H17a5 5 0 0 1-5-5Z" stroke="#fff" strokeWidth="2"/></svg>
    ),
    title: 'Social Media',
    desc: 'Engage your audience on their favourite platforms to foster meaningful relationships that build trust.',
    href: '/services-file/social-media',
  },
  {
    icon: (
      // Paid Social: target
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="20" fill="#232336"/><circle cx="20" cy="20" r="8" stroke="#fff" strokeWidth="2"/><circle cx="20" cy="20" r="4" stroke="#fff" strokeWidth="2"/><circle cx="20" cy="20" r="12" stroke="#fff" strokeWidth="2" opacity=".3"/></svg>
    ),
    title: 'Paid Social',
    desc: 'Extend the reach of your brand through laser-focused social ads that amplify awareness and propel sales.',
    href: '/services-file/paid-social',
  },
  {
    icon: (
      // SEO: magnifying glass
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="20" fill="#232336"/><circle cx="18" cy="18" r="7" stroke="#fff" strokeWidth="2"/><path d="M25 25l5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: 'SEO',
    desc: 'Employ strategic SEO to increase your visibility in search results and generate a higher volume of targeted traffic.',
    href: '/services-file/seo',
  },
  {
    icon: (
      // Influencer Marketing: star/user
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="20" fill="#232336"/><circle cx="20" cy="16" r="5" stroke="#fff" strokeWidth="2"/><path d="M12 30c0-3.3 3.6-6 8-6s8 2.7 8 6" stroke="#fff" strokeWidth="2"/><path d="M20 8l1.2 2.4L24 11l-2.4 1.2L20 15l-1.2-2.4L16 11l2.4-1.2L20 8Z" fill="#fff" opacity=".3"/></svg>
    ),
    title: 'Influencer Marketing',
    desc: 'Turbo-boost engagement and sales with strategic influencer campaigns that create a big buzz around your brand.',
    href: '/services-file/influencer',
  },
  {
    icon: (
      // PR & Outreach: megaphone
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="20" fill="#232336"/><path d="M13 22V18a2 2 0 0 1 2-2h2l8-3v14l-8-3h-2a2 2 0 0 1-2-2Z" stroke="#fff" strokeWidth="2"/><path d="M13 22v2a2 2 0 0 0 2 2h2" stroke="#fff" strokeWidth="2"/></svg>
    ),
    title: 'PR & Outreach',
    desc: 'Leverage stellar media relations expertise to boost brand exposure and positively influence public opinion.',
    href: '/services-file/pr-marketing',
  },
  {
    icon: (
      // Video Production: video camera
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="20" fill="#232336"/><rect x="12" y="16" width="12" height="8" rx="2" stroke="#fff" strokeWidth="2"/><path d="M24 18l4-2v8l-4-2" stroke="#fff" strokeWidth="2"/></svg>
    ),
    title: 'Video Production',
    desc: 'Cater to the growing hunger for multimedia digital content through attention-grabbing video production.',
    href: '/services-file/video',
  },
  {
    icon: (
      // Lead Generation: upward arrow
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="20" fill="#232336"/><path d="M20 28V12M20 12l-6 6M20 12l6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: 'Lead Generation',
    desc: 'Invigorate your marketing strategy by partnering with NinjaPromo – a lead generation marketing agency that can elevate your brand into the stratosphere.',
    href: '/services-file/lead-gen',
  },
  {
    icon: (
      // Branding: paint brush
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="20" fill="#232336"/><path d="M25 15l-8 8m0 0l-2 2a2 2 0 1 0 2.8 2.8l2-2m-2-2l8-8" stroke="#fff" strokeWidth="2"/></svg>
    ),
    title: 'Branding',
    desc: 'Put the spotlight on your brand and stand out from the crowd with an inspired branding campaign that generates positive PR.',
    href: '/services-file/branding',
  },
  {
    icon: (
      // Community Management: users
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="20" fill="#232336"/><circle cx="15" cy="18" r="3" stroke="#fff" strokeWidth="2"/><circle cx="25" cy="18" r="3" stroke="#fff" strokeWidth="2"/><path d="M12 26c0-2 2.7-4 6-4s6 2 6 4" stroke="#fff" strokeWidth="2"/></svg>
    ),
    title: 'Community Management',
    desc: 'Grow your online presence and build strong, lasting relationships with your target audience through strategic community management.',
    href: '/services-file/community',
  },
  {
    icon: (
      // Web3 & Mobile: connected nodes/mobile
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="20" fill="#232336"/><circle cx="20" cy="20" r="8" stroke="#fff" strokeWidth="2"/><rect x="16" y="14" width="8" height="12" rx="2" stroke="#fff" strokeWidth="2"/><circle cx="20" cy="26" r="1" fill="#fff"/></svg>
    ),
    title: 'Web3 & Mobile',
    desc: 'Next-gen web3 and mobile solutions for the future. From DeFi platforms to mobile dApps, we build the digital infrastructure of tomorrow.',
    href: '/services-file/web3-and-mobile',
  },
  {
    icon: (
      // Blockchain: blockchain nodes
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="20" fill="#232336"/><circle cx="12" cy="20" r="3" stroke="#fff" strokeWidth="2"/><circle cx="28" cy="20" r="3" stroke="#fff" strokeWidth="2"/><circle cx="20" cy="12" r="3" stroke="#fff" strokeWidth="2"/><circle cx="20" cy="28" r="3" stroke="#fff" strokeWidth="2"/><path d="M15 18l-1-2m12 2l1-2m-6-4v-2m0 18v-2m-6-4l-2-1m14 1l2-1" stroke="#fff" strokeWidth="2"/></svg>
    ),
    title: 'Blockchain',
    desc: 'Harness the incredible potential of blockchain technology to acquire new revenue streams and propel your business into the future.',
    href: '/services-file/blockchain',
  },
  {
    icon: (
      // GenAI: brain/ai
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="20" fill="#232336"/><path d="M20 12a8 8 0 0 1 8 8c0 2.5-1.5 4.5-3.5 5.5.3.5.5 1.1.5 1.7a3 3 0 0 1-3 3c-.6 0-1.2-.2-1.7-.5C16.5 29.5 14.5 28 14.5 25.5c0-.6.2-1.2.5-1.7C13.5 24.5 12 22.5 12 20a8 8 0 0 1 8-8Z" stroke="#fff" strokeWidth="2"/><circle cx="20" cy="20" r="2" fill="#fff"/></svg>
    ),
    title: 'GenAI',
    desc: 'Leverage cutting-edge AI technology to transform your business operations. From content generation to process automation—we harness the power of AI for your success.',
    href: '/services-file/genai',
  },
];

export default function Service() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="text-white">
      <div className="min-h-screen" style={{ backgroundImage: 'url(/bg-pages/D3-1.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <Navbar onMenuClick={() => setMenuOpen(true)} />
        <main className="w-full flex flex-col items-center justify-start pt-24 sm:pt-28 lg:pt-24 pb-10 px-4 md:px-8 lg:px-16 min-h-[calc(100vh-64px)]">
          {/* Header */}
          <div className="w-full max-w-5xl mx-auto text-center mt-10 mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-pink-400 mb-2">Services</h2>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We&apos;re experts in all things marketing. B2B, blockchain, fintech, software, and high-growth startup brands are our sweet spot. Discover how we can scale your business to new heights through our strategic services below:
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto mt-8">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="group">
                <div className="bg-[#181825] rounded-2xl shadow-lg p-7 flex flex-col items-center text-center border border-white/10 group-hover:border-pink-400 transition-all min-h-[260px] cursor-pointer">
                  <div className="mb-4 flex items-center justify-center h-14 w-14 rounded-full bg-white/10">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                  <p className="text-white/70 text-base">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
      <Footer />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
} 