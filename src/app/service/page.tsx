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
        <main className="w-full flex flex-col items-start justify-start pt-24 sm:pt-28 lg:pt-24 pb-10 px-4 md:px-8 lg:ml-[6cm] lg:px-8 min-h-[calc(100vh-64px)]">
        {/* Service Label */}
        <div className="text-gray-400 text-sm sm:text-base mb-2">
          Service <span className="text-white font-medium">Marketing Subscription</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          All Your Marketing.<br />
          <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            One Simple Subscription.
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="mt-4 text-gray-400 max-w-2xl text-sm sm:text-base">
          Say goodbye to messy handoffs, bloated retainers, and scattered freelancers.<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>With NinjaPromo, you get a fully integrated marketing team—on-demand.
        </p>
        
        {/* Book Demo Button */}
        <div className="mt-6 sm:mt-8">
          <Link href="/book-demo">
            <button className="px-6 sm:px-8 py-3 rounded-full font-medium border-2 bg-black/60 text-white transition hover:scale-105 focus:outline-none w-full sm:w-auto text-sm sm:text-base"
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
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mt-8 sm:mt-10 items-start w-full">
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