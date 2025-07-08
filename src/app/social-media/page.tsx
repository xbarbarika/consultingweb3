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
      <div className="min-h-screen" style={{ backgroundImage: 'url(/bg-pages/D3-2.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <Navbar />
        <main className="w-full flex flex-col items-start justify-start pt-24 sm:pt-28 lg:pt-24 pb-10 px-4 md:px-8 lg:px-16 min-h-[calc(100vh-64px)]">
        {/* Service Label */}
        <div className="text-white/60 text-xl font-medium leading-7 mt-16 mb-6" style={{ fontFamily: 'Inter', marginLeft: '66px' }}>
          Service <span className="text-white/90 font-medium">Social Media Marketing</span>
        </div>
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight" style={{ marginLeft: '66px' }}>
          Spark Conversations. Build Community.<br />
          Drive Growth.
        </h1>
        {/* Subheading */}
        <p className="mt-[25px] text-white/50 max-w-2xl text-lg font-normal leading-[110%]" style={{ marginLeft: '66px' }}>
          Strategic content creation and community management that builds loyal audiences.<br />
          From viral posts to thoughtful engagement, we turn followers into customers.
        </p>
        {/* CTA Button */}
        <div className="mt-6 mb-2" style={{ marginLeft: '66px' }}>
          <Link href="/book-demo">
            <button className="px-6 sm:px-8 py-3 rounded-full font-semibold text-white transition hover:scale-105 focus:outline-none w-full sm:w-auto shadow-lg"
              style={{
                background: 'linear-gradient(90deg, #ff965d 0%, #ff5bbe 50%, #a63ffd 100%)',
                boxShadow: '0 4px 32px 0 rgba(0,0,0,0.25)'
              }}>
              Book Demo
            </button>
          </Link>
        </div>
        {/* Card and Features Row */}
        <div className="flex flex-col md:flex-row gap-10 mt-10 items-start w-full" style={{ marginLeft: '66px' }}>
          {/* Card */}
          <div className="flex flex-col items-start w-full md:w-auto" style={{flex: '1 1 340px', minWidth: 0}}>
            <div className="bg-[#232336] rounded-2xl p-6 sm:p-8 min-w-[220px] md:min-w-[340px] min-h-[140px] md:min-h-[180px] flex flex-col justify-between shadow-lg border border-white/10 relative w-full max-w-md" style={{boxShadow: '0 4px 32px 0 rgba(0,0,0,0.25)'}}>
              <div className="w-8 h-5 sm:w-10 sm:h-6 bg-[#a97b5d] rounded mb-6" />
              <div className="text-xl sm:text-2xl font-semibold mb-2 text-white">Social Media Marketing</div>
              <div className="text-xs text-gray-400 tracking-widest italic">BARBARIKA</div>
            </div>
          </div>
          {/* Features List */}
          <ul className="space-y-4 text-base text-white/90 list-disc list-inside mt-2 flex-1 w-full md:w-auto min-w-0 break-words font-normal">
            <li>Strategy, content, and community handled</li>
            <li>Platform-specific execution (IG, X, TikTok, LinkedIn, and more)</li>
            <li>Organic + paid social integration</li>
            <li>Creative assets optimized for attention and action</li>
          </ul>
        </div>
        </main>
      </div>
      <Footer />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
} 