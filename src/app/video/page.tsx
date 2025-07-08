'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Service() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="text-white">
      <div className="min-h-screen" style={{ backgroundImage: 'url(/bg-pages/D3-6.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <Navbar />
        <main className="w-full flex flex-col items-start justify-start pt-24 sm:pt-28 lg:pt-24 pb-10 px-4 md:px-8 lg:px-16 min-h-[calc(100vh-64px)]">
        {/* Service Label */}
        <div className="text-white/60 text-xl font-medium leading-7 mt-16 mb-6" style={{ fontFamily: 'Inter', marginLeft: '66px' }}>Service <span className="text-white/90 font-medium">Video Production</span></div>
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight" style={{ marginLeft: '66px' }}>
          Tell Stories That Sell.<br />
          Create Videos That Convert.
        </h1>
        {/* Subheading */}
        <p className="mt-[25px] text-white/50 max-w-2xl text-lg font-normal leading-[110%]" style={{ marginLeft: '66px' }}>
          From concept to distribution, we create videos that connect with your audience.<br />
          Whether it&apos;s brand storytelling or performance content, we deliver results that move the needle.
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
                  background: '#232336'
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
                }}>Video Production</div>
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
            <li>Brand videos, ads, explainers, and UGC</li>
            <li>End-to-end production: scripting, shooting, editing</li>
            <li>Optimized for every platform and funnel stage</li>
            <li>Fast turnarounds without compromising quality</li>
          </ul>
        </div>
        </main>
      </div>
      <Footer />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
} 