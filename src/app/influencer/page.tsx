import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Service() {
  return (
    <div className="text-white">
      <div className="min-h-screen" style={{ backgroundImage: 'url(/bg-pages/D3-3.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <Navbar />
        <main className="w-full flex flex-col items-start justify-start pt-24 sm:pt-28 lg:pt-24 pb-10 px-4 md:px-8 lg:px-16 min-h-[calc(100vh-64px)]">
        {/* Service Label */}
                  <div className="text-white/60 text-xl font-medium leading-7 mt-16 mb-6" style={{ fontFamily: 'Inter', marginLeft: '66px' }}>Service <span className="text-white/90 font-medium">Influencer Marketing</span></div>
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight" style={{ marginLeft: '66px' }}>
          Drive ROI with<br />
          Data-Backed Influencer Campaigns
        </h1>
        {/* Subheading */}
        <p className="mt-[25px] text-white/50 max-w-2xl text-lg font-normal leading-[110%]" style={{ marginLeft: '66px' }}>
          From nano to mega influencers, we design and manage influencer partnerships that actually move the needle. Reach the right audience with content that converts –at scale.
        </p>
        {/* Card and Features Row */}
        <div className="flex flex-col md:flex-row gap-10 mt-10 items-start w-full" style={{ marginLeft: '66px' }}>
          {/* Card */}
          <div className="flex flex-col items-start w-full md:w-auto" style={{flex: '1 1 340px', minWidth: 0}}>
            <div className="bg-[#181825] rounded-2xl p-6 sm:p-8 min-w-[220px] md:min-w-[340px] min-h-[140px] md:min-h-[180px] flex flex-col justify-between shadow-lg border border-white/10 relative w-full max-w-md" style={{boxShadow: '0 4px 32px 0 rgba(0,0,0,0.25)'}}>
              <div className="w-8 h-5 sm:w-10 sm:h-6 bg-[#FFA053] rounded mb-6" />
              <div className="text-xl sm:text-2xl font-medium mb-2">Influencer Marketing</div>
              <div className="text-xs text-gray-500 tracking-widest">BARBARIKA</div>
            </div>
            {/* CTA Button */}
            <div className="mt-8">
              <Link href="/book-demo">
                <button className="px-6 sm:px-8 py-3 rounded-full font-medium bg-[#FFA053] text-black transition hover:scale-105 focus:outline-none w-full sm:w-auto"
                  style={{
                    border: 'none',
                  }}>
                  Book Demo
                </button>
              </Link>
            </div>
          </div>
          {/* Features List */}
          <ul className="space-y-6 text-base text-white/90 list-disc list-inside mt-2 flex-1 w-full md:w-auto min-w-0 break-words">
            <li>Verified creators across every niche and platform</li>
            <li>Performance tracking, not vanity metrics</li>
            <li>End-to-end campaign management</li>
            <li>Transparent pricing and clear ROI reporting</li>
          </ul>
        </div>
        </main>
      </div>
      <Footer />
    </div>
  );
} 