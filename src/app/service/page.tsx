import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Service() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0e0e1a] to-[#150d2e] text-white flex flex-col">
      <Navbar />
      <main className="w-full flex-1 flex flex-col items-start justify-start pt-32 px-8" style={{marginLeft: '4cm'}}>
        {/* Service Label */}
        <div className="text-gray-400 text-base mb-2">Service <span className="text-white font-medium">Marketing Subscription</span></div>
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          All Your Marketing.<br />
          <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            One Simple Subscription.
          </span>
        </h1>
        {/* Subheading */}
        <p className="mt-4 text-gray-400 max-w-2xl">
          Say goodbye to messy handoffs, bloated retainers, and scattered freelancers.<br />
          With NinjaPromo, you get a fully integrated marketing team—on-demand.
        </p>
        {/* Card and Features Row */}
        <div className="flex flex-col md:flex-row gap-10 mt-14 items-start w-full">
          {/* Card */}
          <div className="flex flex-col items-start" style={{flex: '1 1 340px', minWidth: 340}}>
            <div className="bg-[#181825] rounded-2xl p-8 min-w-[340px] min-h-[180px] flex flex-col justify-between shadow-lg border border-white/10 relative w-full max-w-md" style={{boxShadow: '0 4px 32px 0 rgba(0,0,0,0.25)'}}>
              <div className="w-10 h-6 bg-[#232336] rounded mb-6" />
              <div className="text-2xl font-medium mb-2">Marketing Subscription</div>
              <div className="text-xs text-gray-500 tracking-widest">BARBARIKA</div>
            </div>
            {/* CTA Button */}
            <div className="mt-8">
              <Link href="/book-demo">
                <button className="px-8 py-3 rounded-full font-medium border-2 bg-black/60 text-white transition hover:scale-105 focus:outline-none"
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
          <ul className="space-y-6 text-base text-white/90 list-disc list-inside mt-2 flex-1" style={{minWidth: 320, marginLeft: '-28cm'}}>
            <li>Transparent billing</li>
            <li>30+ services under one roof</li>
            <li>Access to top-tier strategists, designers, and growth experts</li>
            <li>Scalable to match your goals</li>
          </ul>
        </div>
      </main>
    </div>
  );
} 