import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Service() {
  return (
    <div className="min-h-screen text-white flex flex-col" style={{ backgroundImage: 'url(/bg-pages/D3-9.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <Navbar />
      <main className="w-full flex-1 flex flex-col items-start justify-center pt-20 sm:pt-24 lg:pt-10 pb-10 px-4 md:px-8 lg:ml-[6cm] lg:px-8">
        {/* Service Label */}
        <div className="text-gray-400 text-base mb-2">Service <span className="text-white font-medium">Lead Generation</span></div>
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Consistent, Qualified Leads,<br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 text-transparent bg-clip-text">
            Without the Guesswork
          </span>
        </h1>
        {/* Subheading */}
        <p className="mt-4 text-gray-400 max-w-2xl text-base sm:text-lg">
          We build and manage performance-driven lead generation systems that deliver results—not just clicks.<br />
          From strategy to execution, we handle every step so your sales team focuses on closing, not chasing.
        </p>
        {/* Card and Features Row */}
        <div className="flex flex-col md:flex-row gap-10 mt-10 items-start w-full">
          {/* Card */}
          <div className="flex flex-col items-start w-full md:w-auto" style={{flex: '1 1 340px', minWidth: 0}}>
            <div className="bg-[#181825] rounded-2xl p-6 sm:p-8 min-w-[220px] md:min-w-[340px] min-h-[140px] md:min-h-[180px] flex flex-col justify-between shadow-lg border border-white/10 relative w-full max-w-md" style={{boxShadow: '0 4px 32px 0 rgba(0,0,0,0.25)'}}>
              <div className="w-8 h-5 sm:w-10 sm:h-6 bg-[#232336] rounded mb-6" />
              <div className="text-xl sm:text-2xl font-medium mb-2">Lead Generation</div>
              <div className="text-xs text-gray-500 tracking-widest">BARBARIKA</div>
            </div>
            {/* CTA Button */}
            <div className="mt-8">
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
          </div>
          {/* Features List */}
          <ul className="space-y-6 text-base text-white/90 list-disc list-inside mt-2 flex-1 w-full md:w-auto min-w-0 break-words">
            <li>High-intent lead targeting with real-time list building</li>
            <li>Personalized messaging that gets replies</li>
            <li>CRM integration and ongoing funnel optimization</li>
            <li>Weekly reports with lead quality insights</li>
          </ul>
        </div>
      </main>
    </div>
  );
} 