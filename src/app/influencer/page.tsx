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
        
        {/* Book Demo Button */}
        <div className="mt-8" style={{ marginLeft: '66px' }}>
          <Link href="/book-demo">
            <button className="px-6 sm:px-8 py-3 rounded-full font-medium bg-[#FFA053] text-black transition hover:scale-105 focus:outline-none w-full sm:w-auto"
              style={{
                border: 'none',
              }}>
              Book Demo
            </button>
          </Link>
        </div>
        
        {/* Card and Features Row Layout */}
        <div className="flex flex-col md:flex-row gap-10 mt-10 items-start" style={{ marginLeft: '66px' }}>
          {/* Card */}
          <div className="flex flex-col items-start">            
            {/* Gradient Border Wrapper */}
            <div style={{
              width: '461px',
              height: '240px',
              borderRadius: '22px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.3) 100%)',
              padding: '1px'
            }}>
              {/* Inner Card Content */}
              <div className="relative" style={{ 
                width: '100%', 
                height: '100%', 
                borderRadius: '22px', 
                background: '#181825',
                backdropFilter: 'blur(21.5px)' 
              }}>
                <div style={{ 
                  position: 'absolute',
                  top: '40px',
                  left: '45px',
                  width: '62px',
                  height: '37px',
                  borderRadius: '4px',
                  background: '#FFA053'
                }} />
                <div style={{ 
                  position: 'absolute',
                  top: '130px',
                  left: '45px',
                  color: '#FFFFFF', 
                  fontFamily: 'Inter', 
                  fontSize: '24px', 
                  fontWeight: '400', 
                  lineHeight: '28px'
                }}>Influencer Marketing</div>
                <div style={{ 
                  position: 'absolute',
                  top: '176px',
                  left: '45px',
                  color: 'rgba(255, 255, 255, 0.3)', 
                  fontFamily: 'Epilogue', 
                  fontSize: '18px', 
                  fontStyle: 'italic', 
                  fontWeight: '500', 
                  lineHeight: '110%', 
                  letterSpacing: '0.9px'
                }}>BARBARIKA</div>
              </div>
            </div>
          </div>
          
          {/* Features List */}
          <ul className="space-y-3 list-disc list-inside flex-1" style={{
            color: 'rgba(255, 255, 255, 0.6)', 
            fontFamily: 'Inter', 
            fontSize: '20px', 
            fontStyle: 'normal', 
            fontWeight: '400', 
            lineHeight: '260%' 
          }}>
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