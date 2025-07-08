'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Service() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="text-white">
      <div className="min-h-screen" style={{ backgroundImage: 'url(/bg-pages/D3-1.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <Navbar />
        <main className="w-full flex flex-col items-start justify-start pt-24 sm:pt-28 lg:pt-24 pb-10 px-4 md:px-8 lg:px-16 min-h-[calc(100vh-64px)]">
        {/* Service Label */}
        <div className="text-white/60 text-xl font-medium leading-7 mt-16 mb-6" style={{ fontFamily: 'Inter', marginLeft: '66px' }}>
          Service <span className="text-white/90 font-medium">Marketing Subscription</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight" style={{ marginLeft: '66px' }}>
          All Your Marketing.<br />
          One Simple Subscription.
        </h1>
        {/* Subheading */}
        <p className="mt-[25px] text-white/50 max-w-2xl text-lg font-normal leading-[110%]" style={{ marginLeft: '66px' }}>
          From brand strategy to growth campaigns, we handle every aspect of your marketing operation.<br />
          Scale without limits with an on-demand team that knows your business inside and out.
        </p>
        
        {/* Book Demo Button */}
        <div className="mt-8" style={{ marginLeft: '66px' }}>
          <Link href="/book-demo">
            <button className="px-6 sm:px-8 py-3 rounded-full font-medium border-2 bg-black/60 text-white transition hover:scale-105 focus:outline-none w-full sm:w-auto"
              style={{
                borderImage: 'linear-gradient(90deg, #ff965d 0%, #ff5bbe 50%, #a63ffd 100%) 1',
                borderStyle: 'solid',
                borderWidth: '2px',
              }}>
              Book Demo
            </button>
          </Link>
        </div>
        
        {/* Card and Features Row */}
        <div className="flex flex-col md:flex-row gap-10 mt-10 items-start w-full" style={{ marginLeft: '66px' }}>
          {/* Card */}
          <div className="flex flex-col items-start w-full lg:flex-1 lg:min-w-[340px] lg:max-w-md">
            <div className="bg-[#181825] rounded-2xl p-6 sm:p-8 w-full min-h-[160px] sm:min-h-[180px] flex flex-col justify-between shadow-lg border border-white/10 relative" style={{boxShadow: '0 4px 32px 0 rgba(0,0,0,0.25)'}}>
              <div className="w-8 h-5 sm:w-10 sm:h-6 bg-[#232336] rounded mb-4 sm:mb-6" />
              <div className="text-xl sm:text-2xl font-medium mb-2">Marketing Subscription</div>
              <div className="text-xs text-gray-500 tracking-widest">BARBARIKA</div>
            </div>
          </div>
          
          {/* Features List */}
          <div className="w-full lg:flex-1 lg:min-w-[320px] lg:ml-0">
            <ul className="space-y-4 sm:space-y-6 text-sm sm:text-base text-white/90 list-disc list-inside lg:mt-2">
              <li>Transparent billing</li>
              <li>30+ services under one roof</li>
              <li>Access to top-tier strategists, designers, and growth experts</li>
              <li>Scalable to match your goals</li>
            </ul>
          </div>
        </div>
        </main>
      </div>
      <Footer />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
} 