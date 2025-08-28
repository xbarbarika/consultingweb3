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
      <h1 class="text-3xl font-bold text-white mb-6">How RWAs Could Change Finance for the Next 100 Million Users</h1>

      <p class="text-xl text-gray-300 mb-6 leading-relaxed">
        Let's stop thinking of RWAs as just a crypto play. They're much bigger than that. RWAs have the power to reshape finance for millions of people who've been left out of traditional systems.
      </p>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">Borderless Finance</h2>
      <p class="mb-6">If you're in India today and want to buy a US Treasury bond, good luck. The paperwork, middlemen, and cost make it nearly impossible. With RWAs, you could own a tokenized slice of the same bond in minutes. That's borderless access — something banks have never been able to offer.</p>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">Financial Inclusion</h2>
      <p class="mb-6">RWAs shrink the entry barrier. Instead of needing ₹50 lakh to buy property, you can invest ₹500 in a fraction of a building. Instead of needing connections to buy corporate bonds, you can grab a token instantly. The result? A farmer in UP and a software engineer in Bengaluru can both own the same asset.</p>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">Liquidity & Flexibility</h2>
      <p class="mb-6">Traditionally, assets like real estate or bonds are illiquid — once you buy them, you're locked in for years. RWAs change this by creating instant secondary markets. Buy today, sell tomorrow, all on-chain.</p>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">Wealth Creation for the Masses</h2>
      <p class="mb-6">RWAs democratize access to high-value assets. For decades, these were opportunities reserved for the wealthy. Now, they're open to anyone with internet access.</p>

      <div class="bg-gray-800/50 p-6 rounded-xl mb-8 border-l-4 border-green-500">
        <h3 class="text-xl font-semibold text-white mb-3">The Takeaway</h3>
        <p class="text-gray-300 mb-0">RWAs are not just a new investment product. They're a shift in who gets to participate in wealth creation. The next 100 million users won't join crypto because of memes or speculation — they'll join because RWAs give them financial tools they've never had before.</p>
      </div>

      <div class="mt-12 pt-6 border-t border-gray-800">
        <p class="text-sm text-gray-400">By Barbarika Labs</p>
        <p class="text-sm text-gray-500 mt-2">Published on October 2, 2025</p>
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
                Next 100 Million Users
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
