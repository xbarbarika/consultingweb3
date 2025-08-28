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
      <h1 class="text-3xl font-bold text-white mb-6">The Rulebook: Regulations Shaping RWA Adoption</h1>

      <p class="text-xl text-gray-300 mb-6 leading-relaxed">
        Here's the thing: finance doesn't move forward without rules. Real World Assets sit at the intersection of two highly regulated worlds: traditional finance — where everything is tightly controlled — and crypto — where rules are still being figured out. This creates both challenges and opportunities.
      </p>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">What's Happening Globally</h2>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>United States:</strong> The SEC has been cautious, but tokenized US Treasuries are progressing and becoming one of the first widely adopted RWA products.</li>
        <li><strong>Europe:</strong> MiCA (Markets in Crypto Assets) is set to become one of the world's most comprehensive crypto regulations and includes guidelines directly impacting tokenization.</li>
        <li><strong>India:</strong> Movement is slow. Crypto isn't fully banned, but it's heavily taxed and restricted. RWAs will require clear guidelines before mass adoption.</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">Why Regulation Matters</h2>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Trust:</strong> Regulatory approval builds confidence; retail investors feel safer.</li>
        <li><strong>Barriers:</strong> Strict rules can slow progress; compliance is expensive for startups.</li>
        <li><strong>Adoption:</strong> Clear regulations make integration with mainstream finance easier long-term.</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Uber Analogy</h2>
      <p class="mb-6">Think about Uber in its early days — extremely useful but constantly clashing with regulators. RWAs are similar today. They solve real problems but need a proper rulebook to go mainstream.</p>

      <div class="bg-gray-800/50 p-6 rounded-xl mb-8 border-l-4 border-green-500">
        <h3 class="text-xl font-semibold text-white mb-3">Takeaway</h3>
        <p class="text-gray-300 mb-0">RWAs can't thrive in a lawless environment. Regulations will decide how quickly and how widely they reshape global finance.</p>
      </div>

      <div class="mt-12 pt-6 border-t border-gray-800">
        <p class="text-sm text-gray-400">By Barbarika Labs</p>
        <p class="text-sm text-gray-500 mt-2">Published on September 29, 2025</p>
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
                Regulations & RWAs
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
