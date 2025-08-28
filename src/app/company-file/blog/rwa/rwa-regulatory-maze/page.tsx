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
      <h1 class="text-3xl font-bold text-white mb-6">The Regulatory Maze: What Rules Apply to RWAs?</h1>

      <p class="text-xl text-gray-300 mb-6 leading-relaxed">Finance is one of the most regulated industries in the world. And RWAs? They're sitting at the intersection of finance and blockchain — double the rules, double the complexity.</p>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">Why Regulation Matters</h2>
      <p class="mb-4">Imagine you buy a tokenized bond from a platform. You expect interest payments every month. But what if the custodian disappears? What if regulators say the token was never legal? Or the rules change overnight? Regulation is the foundation of trust.</p>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Current Landscape (Simplified)</h2>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>US & Europe:</strong> Moving faster. The US often treats tokenized assets as securities (SEC rules apply). Europe’s MiCA is creating a clear framework.</li>
        <li><strong>India:</strong> Still cautious. RBI and SEBI haven't provided a direct path for RWAs yet. Crypto is taxed; RWAs as a regulated product are still under discussion.</li>
        <li><strong>Global South:</strong> Some regions allow sandboxes for tokenized credit or carbon markets.</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">Key Challenges</h2>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Custody rules — who legally holds the asset?</li>
        <li>Investor protection — if something goes wrong, who do you call?</li>
        <li>Cross-border laws — asset in one country, token in another.</li>
        <li>Taxation — how is tokenized income taxed?</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Good News</h2>
      <p class="mb-6">Every breakthrough faced this: the internet, ride-sharing, even UPI. Governments are watching, learning, and slowly setting the rules.</p>

      <div class="bg-gray-800/50 p-6 rounded-xl mb-8 border-l-4 border-green-500">
        <h3 class="text-xl font-semibold text-white mb-3">What This Means For You</h3>
        <p class="text-gray-300 mb-0">Don't rush blindly. Use platforms with some regulatory clarity. This is a long game — safer opportunities come as the rules become clearer.</p>
      </div>

      <div class="mt-12 pt-6 border-t border-gray-800">
        <p class="text-sm text-gray-400">By Barbarika Labs</p>
        <p class="text-sm text-gray-500 mt-2">Published on October 10, 2025</p>
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
                Regulatory Maze
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
