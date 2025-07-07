import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Service() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'radial-gradient(ellipse 80% 60% at 40% 40%, #bfc6e6 0%, #dbe2f7 60%, #e7eaf7 100%)' }}>
      <Navbar />
      <main className="w-full flex-1 flex flex-col items-start justify-center pt-20 sm:pt-24 lg:pt-10 pb-10 px-4 md:px-8 lg:ml-[6cm] lg:px-8">
        {/* Service Label */}
        <div className="text-[#8d8fa7] text-base mb-2 font-medium">Service <span className="text-[#232336] font-normal">Website/App Development</span></div>
        {/* Main Heading */}
        <h1 className="text-[2rem] sm:text-4xl md:text-5xl font-bold leading-tight text-[#6b6fa7]" style={{lineHeight: '1.1'}}>
          Fast, Scalable Websites<br />
          <span className="text-black font-extrabold">Built for Performance</span>
        </h1>
        {/* Subheading */}
        <p className="mt-4 text-[#232336] max-w-2xl text-base sm:text-lg font-normal">
          We design and develop websites that are responsive, lightning-fast, and conversion-optimized.<br />
          From MVPs to complex platforms—we build to grow with your business.
        </p>
        {/* CTA Button */}
        <div className="mt-8">
          <Link href="/book-demo">
            <button className="px-6 sm:px-8 py-2.5 rounded-full font-medium border border-[#232336] bg-white text-[#232336] transition hover:bg-[#232336] hover:text-white focus:outline-none shadow-md" style={{minWidth: '140px'}}>
              Book Demo
            </button>
          </Link>
        </div>
        {/* Card and Features Row */}
        <div className="flex flex-col md:flex-row gap-10 mt-10 items-start w-full">
          {/* Card */}
          <div className="flex flex-col items-start w-full md:w-auto" style={{flex: '1 1 340px', minWidth: 0}}>
            <div className="bg-[#f5f6fa] rounded-2xl p-6 sm:p-8 min-w-[220px] md:min-w-[340px] min-h-[140px] md:min-h-[180px] flex flex-col justify-between shadow-lg border border-[#e0e2ef] relative w-full max-w-md" style={{boxShadow: '0 4px 32px 0 rgba(36, 40, 80, 0.10)'}}>
              <div className="w-8 h-5 sm:w-10 sm:h-6 bg-[#e0e2ef] rounded mb-6" />
              <div className="text-xl sm:text-2xl font-medium mb-2 text-[#232336]">Website/App Development</div>
              <div className="text-xs text-[#8d8fa7] tracking-widest">BARBARIKA</div>
            </div>
          </div>
          {/* Features List */}
          <ul className="space-y-6 text-base text-[#232336] list-disc list-inside mt-2 flex-1 w-full md:w-auto min-w-0 break-words font-normal">
            <li>Full-stack web and mobile app development</li>
            <li>SEO-ready, mobile-optimized builds</li>
            <li>Ongoing maintenance and support</li>
            <li>CMS integrations (Webflow, WordPress, Headless)</li>
          </ul>
        </div>
      </main>
    </div>
  );
} 