'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BlogPost() {
  const [menuOpen, setMenuOpen] = useState(false);

  const content = `
    <div class="prose prose-invert max-w-4xl mx-auto py-8 px-4">
      <h1 class="text-3xl font-bold text-white mb-6">Who's Powering RWAs? A Look at the Platforms Behind the Hype</h1>

      <p class="text-xl text-gray-300 mb-6 leading-relaxed">
        When you hear about RWAs, you usually picture assets — real estate, gold, bonds. But behind every tokenized apartment or digital gold bar is a platform making it happen. Think of platforms as the exchanges, custodians, and tech providers of this new world. Without them, RWAs would just be a buzzword.
      </p>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">Big Names to Know</h2>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Ondo Finance</strong> — Tokenized bonds and treasuries.</li>
        <li><strong>Maple Finance</strong> — Credit and lending built on RWAs.</li>
        <li><strong>RealT</strong> — Fractionalized real estate.</li>
        <li><strong>Centrifuge</strong> — Tokenizing invoices and business financing.</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">Why They Matter</h2>
      <p class="mb-4">They handle:</p>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Legal custody of the actual asset</li>
        <li>Smart contract logic for tokenization</li>
        <li>Secondary marketplaces for liquidity</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Risk Factor</h2>
      <p class="mb-6">
        Pick the wrong platform, and you could be holding a token with nothing behind it. That's why research into who's powering RWAs is as important as the asset itself.
      </p>

      <div class="mt-12 pt-6 border-t border-gray-800">
        <p class="text-sm text-gray-400">By Barbarika Labs</p>
        <p class="text-sm text-gray-500 mt-2">Published on September 27, 2025</p>
      </div>
    </div>
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200 relative">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black/90 to-red-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-red-500/5" />
      </div>

      <Navbar onMenuClick={() => setMenuOpen(true)} />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="relative">
        <div className="w-full">
          <div className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 xl:px-24">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight px-2" style={{
                fontFamily: 'var(--font-tourney), sans-serif',
                background: 'linear-gradient(90deg, #10B981 0%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                lineHeight: '1.2',
                wordBreak: 'keep-all',
                hyphens: 'manual',
                overflowWrap: 'break-word',
                whiteSpace: 'normal'
              }}>
                Who&apos;s Powering RWAs?
              </h1>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/company-file/blog/rwa">
            <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-6">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to RWA Series
            </button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        <Footer />
      </div>
    </div>
  );
}
