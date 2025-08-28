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
      <h1 class="text-3xl font-bold text-white mb-6">Your First Step: Trying a Tokenized Asset with Just ₹100</h1>

      <p class="text-xl text-gray-300 mb-6 leading-relaxed">All of this sounds exciting. But let's make it real. How can you, sitting at home, actually experience RWAs without risking your life savings? Here's a practical guide.</p>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">Step 1: Pick the Right Platform</h2>
      <p class="mb-2">Start with a well-known platform that:</p>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Publishes audits</li>
        <li>Has custody with trusted institutions</li>
        <li>Is clear about regulations</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">Step 2: Start Small (₹100–₹500)</h2>
      <p class="mb-6">Don't chase profit in your first try. The goal is to learn: how tokenization works, what fees are involved, how trading feels. Think of it as paying for an education — not making a quick return.</p>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">Step 3: Observe the Process</h2>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>How quickly you receive tokens</li>
        <li>Whether you can resell them instantly</li>
        <li>What kind of documentation or KYC is needed</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">Step 4: Ask the Hard Questions</h2>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Who holds the underlying asset?</li>
        <li>What happens if the platform shuts down?</li>
        <li>Does your ownership stand in court?</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">Why This Matters</h2>
      <p class="mb-6">The best way to understand RWAs isn't by reading a blog or watching a video. It's by trying. Start small, stay curious, and you'll see firsthand how traditional finance and blockchain are merging.</p>

      <div class="bg-gray-800/50 p-6 rounded-xl mb-8 border-l-4 border-green-500">
        <h3 class="text-xl font-semibold text-white mb-3">The Takeaway</h3>
        <p class="text-gray-300 mb-0">With just ₹100, you can take your first step into one of the biggest shifts in finance. RWAs aren't about theory — they're about practice. The earlier you try, the faster you'll understand where this future is heading.</p>
      </div>

      <div class="mt-12 pt-6 border-t border-gray-800">
        <p class="text-sm text-gray-400">By Barbarika Labs</p>
        <p class="text-sm text-gray-500 mt-2">Published on October 5, 2025</p>
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
                First Step: ₹100
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
