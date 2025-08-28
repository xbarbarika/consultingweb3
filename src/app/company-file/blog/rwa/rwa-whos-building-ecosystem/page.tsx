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
      <h1 class="text-3xl font-bold text-white mb-6">Who's Building the RWA Ecosystem? (Platforms + Projects You Should Know)</h1>

      <p class="text-xl text-gray-300 mb-6 leading-relaxed">RWAs don't magically appear on the blockchain. Someone has to do the heavy lifting — infrastructure, custody, compliance, and the interfaces we use. Let's break it down.</p>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Builders Behind RWAs</h2>
      <p class="mb-4">Think of RWAs like building a bridge between the physical world (apartments, gold bars, invoices) and the digital one (tokens, wallets, smart contracts). You need:</p>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Tokenization platforms</strong> — digitize the asset</li>
        <li><strong>Custodians</strong> — safely hold the real-world asset</li>
        <li><strong>Protocols & blockchains</strong> — rails for movement</li>
        <li><strong>Front-end platforms</strong> — apps/exchanges where users access them</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">Some Key Players (Explained Simply)</h2>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Centrifuge</strong> — Tokenizes invoices so businesses can get financing.</li>
        <li><strong>Maple Finance</strong> — Lending protocol for institutional borrowers and lenders.</li>
        <li><strong>Ondo Finance</strong> — Tokenized bonds and money market funds bridging TradFi and DeFi.</li>
        <li><strong>RealT</strong> — Fractionalized rental properties in the US.</li>
        <li><strong>Goldfinch</strong> — Credit lending in underserved regions via tokenized loans.</li>
        <li><strong>Polymesh</strong> — Blockchain built specifically for regulated assets.</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Big Picture</h2>
      <p class="mb-6">Different projects are taking slices of the RWA pie — real estate, bonds, credit, collectibles. The pipes are being laid; the winners will balance trust, compliance, and scale.</p>

      <div class="bg-gray-800/50 p-6 rounded-xl mb-8 border-l-4 border-green-500">
        <h3 class="text-xl font-semibold text-white mb-3">Why You Should Care</h3>
        <p class="text-gray-300 mb-0">In 5–10 years, these names could be as familiar as Paytm or CoinDCX in India. Understand the players early and stay ahead of the trend.</p>
      </div>

      <div class="mt-12 pt-6 border-t border-gray-800">
        <p class="text-sm text-gray-400">By Barbarika Labs</p>
        <p class="text-sm text-gray-500 mt-2">Published on October 7, 2025</p>
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
                Who&apos;s Building RWAs
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
