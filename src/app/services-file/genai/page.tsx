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
      <div className="min-h-screen" style={{ backgroundImage: 'url(/bg-pages/D3-4.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <Navbar onMenuClick={() => setMenuOpen(true)} />
        <main className="w-full flex flex-col items-start justify-start pt-24 sm:pt-28 lg:pt-24 pb-10 px-4 md:px-8 lg:px-16 min-h-[calc(100vh-64px)]">
        {/* Service Label */}
        <div className="text-white/60 text-lg sm:text-xl font-medium leading-7 mt-16 mb-6 ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-[66px]" style={{ fontFamily: 'Inter' }}>Service <span className="text-white/90 font-medium">GenAI</span></div>
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-[66px]">
          AI-Powered Solutions That Drive Growth
        </h1>
        {/* Subheading */}
        <p className="mt-[25px] text-white/50 max-w-2xl text-base sm:text-lg font-normal leading-[110%] ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-[66px]">
          Leverage cutting-edge AI technology to transform your business operations.<br />
          From content generation to process automation—we harness the power of AI for your success.
        </p>
        
        {/* Book Demo Button */}
        <div className="mt-8 ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-[66px]">
          <Link href="/book-demo">
            <button className="px-6 sm:px-8 py-3 rounded-full font-medium border-2 bg-black/60 text-white transition hover:scale-105 focus:outline-none w-full sm:w-auto"
              style={{
                borderImage: 'linear-gradient(90deg, #5d8bff 0%, #5bafff 50%, #3f7ffd 100%) 1',
                borderStyle: 'solid',
                borderWidth: '2px',
              }}>
              Book Demo
            </button>
          </Link>
        </div>
        
        {/* Card and Features Row Layout */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-10 mt-10 items-start ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-[66px]">
          {/* Card */}
          <div className="flex flex-col items-start w-full sm:w-auto">            
            {/* Gradient Border Wrapper */}
            <div className="w-full sm:w-auto lg:w-[461px]" style={{
              maxWidth: '461px',
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
                  background: '#1d4ed8'
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
                }}>Generative AI Solutions</div>
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
          <ul className="space-y-3 list-disc list-inside flex-1 text-sm sm:text-base lg:text-[20px]" style={{
            color: 'rgba(255, 255, 255, 0.6)', 
            fontFamily: 'Inter', 
            fontStyle: 'normal', 
            fontWeight: '400', 
            lineHeight: '260%' 
          }}>
            <li>Custom AI model development and integration</li>
            <li>Content generation and automation solutions</li>
            <li>AI-powered customer service and chatbots</li>
            <li>Data analysis and predictive insights</li>
          </ul>
        </div>
        </main>
      </div>
      <Footer />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
} 