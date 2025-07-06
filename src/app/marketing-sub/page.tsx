"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Service() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'radial-gradient(ellipse at top left, #181825 60%, #0f0f17 100%)', color: '#fff', fontFamily: 'Inter, Poppins, Montserrat, sans-serif', backgroundImage: 'url(/bg-pages/D3.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <Navbar />
      <main className="w-full flex-1 flex flex-col items-start justify-center py-10 px-4 md:px-8 lg:ml-[6cm] lg:px-8">
        {/* Service Label */}
        <div className="text-sm mb-2 tracking-widest uppercase" style={{ color: '#b3b3b3', fontWeight: 500, letterSpacing: '0.08em' }}>
          Service <span className="text-white font-semibold">Marketing Subscription</span>
        </div>
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-2" style={{ fontFamily: 'Poppins, Inter, sans-serif', letterSpacing: '-0.02em' }}>
          All Your Marketing.<br />
          <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-transparent bg-clip-text" style={{ fontWeight: 800 }}>
            One Simple Subscription.
          </span>
        </h1>
        {/* Subheading */}
        <p className="mt-3 text-base sm:text-lg max-w-2xl" style={{ color: '#b3b3b3', fontWeight: 400, lineHeight: '1.7' }}>
          Say goodbye to messy handoffs, bloated retainers, and scattered freelancers.<br />
          With Barbarika, you get a fully integrated marketing team—on-demand.
        </p>
        {/* Card and Features Row */}
        <div className="flex flex-col md:flex-row gap-10 mt-10 items-start w-full">
          {/* Card */}
          <div className="flex flex-col items-start w-full md:w-auto" style={{ flex: '1 1 340px', minWidth: 0 }}>
            <div className="bg-[#181825] rounded-2xl p-8 min-w-[220px] md:min-w-[340px] min-h-[140px] md:min-h-[180px] flex flex-col justify-between shadow-lg border border-white/10 relative w-full max-w-md" style={{ boxShadow: '0 8px 40px 0 rgba(0,0,0,0.35)' }}>
              <div className="w-10 h-6 bg-[#232336] rounded mb-6" />
              <div className="text-2xl font-semibold mb-2" style={{ fontFamily: 'Poppins, Inter, sans-serif', letterSpacing: '-0.01em' }}>Marketing Subscription</div>
              <div className="text-xs text-gray-500 tracking-widest italic" style={{ color: '#b3b3b3' }}>BARBARIKA</div>
            </div>
            {/* CTA Button */}
            <div className="mt-8">
              <Link href="/book-demo">
                <button className="px-8 py-3 rounded-full font-semibold border-2 bg-black/60 text-white transition hover:scale-105 hover:brightness-110 focus:outline-none w-full sm:w-auto shadow-md"
                  style={{
                    borderImage: 'linear-gradient(90deg, #ff965d 0%, #ff5bbe 50%, #a63ffd 100%) 1',
                    borderStyle: 'solid',
                    borderWidth: '2px',
                    fontFamily: 'Poppins, Inter, sans-serif',
                    fontSize: '1.1rem',
                  }}>
                  Book Demo
                </button>
              </Link>
            </div>
          </div>
          {/* Features List */}
          <ul className="space-y-6 text-lg list-disc list-inside mt-2 flex-1 w-full md:w-auto 2xl:ml-[-28cm] min-w-0 break-words" style={{ color: '#e0e0e0', fontWeight: 500 }}>
            <li>Transparent billing</li>
            <li>30+ services under one roof</li>
            <li>Access to top-tier strategists, designers, and growth experts</li>
            <li>Scalable to match your goals</li>
          </ul>
        </div>
      </main>
      {/* Google Fonts Import for Inter/Poppins */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&family=Poppins:wght@400;500;600;700;800&display=swap');
      `}</style>
    </div>
  );
} 