"use client";

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
        <div className="text-white/60 text-xl font-medium leading-7 mt-16 mb-6" style={{ fontFamily: 'Inter', marginLeft: '66px' }}>Service <span className="text-white/90 font-medium">Marketing Subscription</span></div>
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight" style={{ marginLeft: '66px' }}>
          All Your Marketing.<br />
          One Simple Subscription.
        </h1>
        {/* Subheading */}
        <p className="mt-[25px] text-white/50 max-w-2xl text-lg font-normal leading-[110%]" style={{ marginLeft: '66px' }}>
          From brand development to automated performance campaigns, we give you the full marketing stack.<br />
          Expand your reach, optimise your funnels, and scale with confidence.
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
          <div className="flex flex-col items-start w-full md:w-auto" style={{ flex: '1 1 340px', minWidth: 0 }}>
            <div className="bg-[#181825] rounded-2xl p-8 min-w-[220px] md:min-w-[340px] min-h-[140px] md:min-h-[180px] flex flex-col justify-between shadow-lg border border-white/10 relative w-full max-w-md" style={{ boxShadow: '0 8px 40px 0 rgba(0,0,0,0.35)' }}>
              <div className="w-10 h-6 bg-[#232336] rounded mb-6" />
              <div className="text-2xl font-semibold mb-2" style={{ fontFamily: 'Poppins, Inter, sans-serif', letterSpacing: '-0.01em' }}>Marketing Subscription</div>
              <div className="text-xs text-gray-500 tracking-widest italic" style={{ color: '#b3b3b3' }}>BARBARIKA</div>
            </div>
          </div>
          {/* Features List */}
          <ul className="space-y-6 text-lg list-disc list-inside mt-2 flex-1 w-full md:w-auto min-w-0 break-words" style={{ color: '#e0e0e0', fontWeight: 500 }}>
            <li>Transparent billing</li>
            <li>30+ services under one roof</li>
            <li>Access to top-tier strategists, designers, and growth experts</li>
            <li>Scalable to match your goals</li>
          </ul>
        </div>
        </main>
      </div>
      <Footer />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      {/* Google Fonts Import for Inter/Poppins */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&family=Poppins:wght@400;500;600;700;800&display=swap');
      `}</style>
    </div>
  );
} 