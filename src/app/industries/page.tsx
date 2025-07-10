"use client";
import React, { useState } from "react";
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Industries() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="text-white">
      <div className="min-h-screen w-full" style={{
        background: `linear-gradient(180deg, #1a1028 0%, #18122B 60%, #0B0711 100%), radial-gradient(ellipse at top, rgba(255,150,93,0.12) 0%, transparent 60%)`,
        backgroundBlendMode: 'screen',
        backgroundColor: '#0B0711',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <Navbar onMenuClick={() => setMenuOpen(true)} />
        <main className="w-full flex flex-col items-center justify-start pt-24 sm:pt-28 lg:pt-24 pb-10 px-4 md:px-8 lg:px-16 min-h-[calc(100vh-64px)]">
          {/* Industries Label */}
          <div className="text-white/60 text-xl font-medium leading-7 mt-16 mb-2" style={{ fontFamily: 'Inter' }}>Industries <span className="text-white/90 font-medium">B2B</span></div>
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center mb-4" style={{ fontFamily: 'DM Sans', maxWidth: 800 }}>
            Spark Conversations. Build Community. Drive Growth.
          </h1>
          {/* Subheading */}
          <p className="mt-2 text-white/60 max-w-2xl text-lg font-normal leading-[110%] text-center mb-8" style={{ fontFamily: 'Inter' }}>
            Say goodbye to messy handoffs, bloated retainers, and scattered freelancers.<br />
            With NinjaPromo, you get a fully integrated marketing team—on-demand.
          </p>
          {/* Book Demo Button */}
          <div className="mb-12">
            <Link href="/book-demo">
              <button className="px-8 py-3 rounded-full font-medium text-black text-lg shadow-lg transition-all duration-300" style={{
                background: 'linear-gradient(82deg, #FF965D 54.13%, #BA34E2 100.03%)',
                minWidth: 160
              }}>
                Book Demo
              </button>
            </Link>
          </div>
          {/* Bullet Points */}
          <div className="flex flex-col items-center w-full">
            <ul className="space-y-3 list-disc list-inside text-left max-w-xl mx-auto" style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontFamily: 'Inter',
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: '2.6',
              borderLeft: '4px solid #FF965D',
              paddingLeft: '24px',
              marginTop: '24px',
              marginBottom: '24px',
            }}>
              <li>Strategy, content, and community handled</li>
              <li>Platform-specific execution (IG, X, TikTok, LinkedIn, and more)</li>
              <li>Organic + paid social integration</li>
              <li>Creative assets optimized for attention and action</li>
            </ul>
          </div>
        </main>
        <Footer />
        <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </div>
  );
} 