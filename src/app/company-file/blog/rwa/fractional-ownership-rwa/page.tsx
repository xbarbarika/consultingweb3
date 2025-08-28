'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  category: string;
  content: string;
}

const post: BlogPost = {
  slug: 'fractional-ownership-rwa',
  title: 'Owning a Piece of the World: How Fractional Ownership Works in RWAs',
  excerpt: 'Discover how fractional ownership through blockchain technology is democratizing access to high-value assets.',
  date: 'Sep 25, 2025',
  author: 'Prince Bhesaniya',
  readTime: '7 min read',
  image: '/hero.png',
  category: 'Finance',
  content: `
    <div class="prose prose-invert max-w-4xl mx-auto py-8 px-4">
      <h1 class="text-3xl font-bold text-white mb-6">Owning a Piece of the World: How Fractional Ownership Works in RWAs</h1>
      
      <div class="flex items-center text-sm text-gray-400 mb-8">
        <span>By Prince Bhesaniya</span>
        <span class="mx-2">•</span>
        <span>Sep 25, 2025</span>
        <span class="mx-2">•</span>
        <span>7 min read</span>
      </div>

      <div class="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
        <img src="/hero.png" alt="Fractional Ownership" class="w-full h-full object-cover" />
      </div>

      <div class="bg-gray-800/50 p-6 rounded-xl mb-8 border-l-4 border-green-500">
        <p class="text-xl text-gray-200 mb-4 italic">"Why buy a whole cow when you just want a glass of milk?"</p>
        <p class="text-gray-300">That's essentially the idea behind fractional ownership — except instead of cows, we're talking apartments in Dubai, gold bars in Swiss vaults, and even rare paintings.</p>
      </div>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Old World Problem</h2>
      <p class="mb-6">
        Imagine walking past a luxury apartment in Dubai priced at ₹10 crore. You know it's a great investment — the location is unbeatable, the rental income is high — but here's the catch: You don't have ₹10 crore lying around.
      </p>
      <p class="mb-6">
        Even if you could team up with friends or family, it would get messy:
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Who handles the paperwork?</li>
        <li>Who collects rent?</li>
        <li>What if someone wants to sell their share?</li>
      </ul>
      <p class="mb-6">
        Fractional ownership existed before, but it was slow, legal-heavy, and often limited to people who knew each other.
      </p>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">The New World Solution: Blockchain + RWAs</h2>
      <p class="mb-6">
        With Real-World Assets (RWAs) on the blockchain, all of those headaches disappear.
      </p>
      <p class="mb-6">Here's how it works:</p>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>The real asset (say, an apartment) is tokenized into smaller pieces.</li>
        <li>Each token represents a share of that asset.</li>
        <li>Your ownership is recorded transparently on the blockchain.</li>
        <li>You can sell your tokens whenever you want — no lawyers, no waiting months for buyers.</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">A Few Real-Life Examples</h2>
      
      <h3 class="text-xl font-semibold text-white mt-8 mb-3">1. Luxury Real Estate</h3>
      <p class="mb-4">
        A villa in Goa worth ₹12 crore is split into 12,000 tokens. Each token costs ₹10,000.
      </p>
      <p class="mb-6">
        You buy 5 tokens → you own 0.05% of the villa and earn your share of the rental income.
      </p>

      <h3 class="text-xl font-semibold text-white mt-8 mb-3">2. Gold</h3>
      <p class="mb-4">
        A gold bar stored in a vault is tokenized into 1,000 parts.
      </p>
      <p class="mb-6">
        You own 25 tokens → when gold prices rise, your tokens gain value.
      </p>

      <h3 class="text-xl font-semibold text-white mt-8 mb-3">3. Art</h3>
      <p class="mb-4">
        A famous painting is tokenized so multiple collectors can co-own it.
      </p>
      <p class="mb-6">
        When it's auctioned years later, profits are split based on token holdings.
      </p>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">Why This is a Game-Changer</h2>
      
      <h3 class="text-xl font-semibold text-white mt-8 mb-3">Lower Entry Barriers</h3>
      <p class="mb-6">
        You can start with as little as ₹100 in some projects.
      </p>

      <h3 class="text-xl font-semibold text-white mt-8 mb-3">Diversification</h3>
      <p class="mb-6">
        Instead of putting ₹1 lakh into just one asset, you could own fractions of real estate, gold, and corporate bonds all at once.
      </p>

      <h3 class="text-xl font-semibold text-white mt-8 mb-3">Liquidity</h3>
      <p class="mb-6">
        Unlike traditional ownership, you're not locked in for years — you can trade your tokens anytime on supported marketplaces.
      </p>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">But… It's Not Risk-Free</h2>
      
      <h3 class="text-xl font-semibold text-white mt-8 mb-3">Trust in the Custodian</h3>
      <p class="mb-6">
        The token is only as reliable as the company holding the real asset.
      </p>

      <h3 class="text-xl font-semibold text-white mt-8 mb-3">Market Fluctuations</h3>
      <p class="mb-6">
        Token prices can move based on demand, not just the asset's value.
      </p>

      <h3 class="text-xl font-semibold text-white mt-8 mb-3">Regulatory Uncertainty</h3>
      <p class="mb-6">
        Some countries don't have clear laws for tokenized fractional ownership yet.
      </p>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">Why Everyday Investors Should Care</h2>
      <p class="mb-6">
        Fractional ownership is democratizing access to assets once reserved for the ultra-rich:
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>A student in Bengaluru can co-own farmland in Australia.</li>
        <li>A retiree in Pune can hold part of a gold vault in Switzerland.</li>
        <li>A small business owner in Delhi can invest in US corporate bonds.</li>
      </ul>
      <p class="mb-6">
        You no longer need to be rich to invest like the rich.
      </p>

      <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Road Ahead</h2>
      <p class="mb-6">
        As regulation catches up and more platforms emerge, expect to see:
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>NFT-based property deeds for instant transfers.</li>
        <li>Cross-asset swaps (gold → real estate → bonds in minutes).</li>
        <li>Fully digital portfolios made entirely of fractional assets.</li>
      </ul>

      <div class="bg-gray-800/50 p-6 rounded-xl mb-8 border-l-4 border-green-500">
        <h3 class="text-xl font-semibold text-white mb-3">Final Takeaway</h3>
        <p class="text-gray-300 mb-0">
          Fractional ownership isn't about buying "less." It's about unlocking access to more opportunities — without needing millions in your bank account.
        </p>
      </div>

      <div class="mt-12 pt-6 border-t border-gray-800">
        <p class="text-sm text-gray-400">
          By Prince Bhesaniya
        </p>
        <p class="text-sm text-gray-500 mt-2">
          Published on September 25, 2025
        </p>
      </div>
    </div>
  `
};

export default function BlogPost() {
  const [menuOpen, setMenuOpen] = useState(false);

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
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Back Button */}
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

        {/* Blog Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }} />
          
          {/* Author and Share Section */}
          <div className="mt-12 pt-6 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <p className="text-sm text-gray-400">
                  Written by <span className="text-green-400">{post.author}</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Published on {post.date}
                </p>
              </div>
              <div className="flex space-x-4 mt-4 sm:mt-0">
                <button className="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-blue-800 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
