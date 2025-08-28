'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
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

const rwaPosts: BlogPost[] = [
  {
    slug: 'rwa-intro',
    title: 'Introduction to Real World Asset Tokenization',
    excerpt: 'Discover how blockchain is transforming traditional assets through tokenization.',
    date: 'Aug 20, 2025',
    author: 'Barbarika Labs',
    readTime: '4 min read',
    image: '/hero.png',
    category: 'Finance',
    content: `
      <div class="prose prose-invert max-w-4xl mx-auto py-8 px-4">
        <h1 class="text-3xl font-bold text-white mb-6">Introduction to Real World Asset Tokenization</h1>
        
        <div class="flex items-center text-sm text-gray-400 mb-8">
          <span>By Barbarika Labs</span>
          <span class="mx-2">•</span>
          <span>Aug 20, 2025</span>
          <span class="mx-2">•</span>
          <span>4 min read</span>
        </div>

        <div class="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
          <img src="/hero.png" alt="Real World Asset Tokenization" class="w-full h-full object-cover" />
        </div>

        <p class="text-xl text-gray-300 mb-6 leading-relaxed">
          The world of finance is undergoing a seismic shift with the advent of blockchain technology. 
          One of the most promising applications is the tokenization of real-world assets (RWA).
        </p>
        
        <h2 class="text-2xl font-bold text-white mt-12 mb-4">What is Asset Tokenization?</h2>
        <p class="mb-6">
          Asset tokenization converts rights to an asset into a digital token on a blockchain, 
          enabling fractional ownership, increased liquidity, and 24/7 trading of traditionally illiquid assets.
        </p>
        
        <h2 class="text-2xl font-bold text-white mt-12 mb-4">Key Benefits</h2>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Liquidity:</strong> Unlock value in illiquid assets</li>
          <li><strong>Accessibility:</strong> Fractional ownership of high-value assets</li>
          <li><strong>Efficiency:</strong> Reduce settlement times from days to minutes</li>
          <li><strong>Transparency:</strong> Immutable record of ownership</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">Tokenizable Assets</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="p-6 bg-gray-800/50 rounded-xl">
            <h3 class="text-xl font-semibold text-white mb-3">Tangible Assets</h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-300">
              <li>Real Estate</li>
              <li>Precious Metals</li>
              <li>Art & Collectibles</li>
            </ul>
          </div>
          
          <div class="p-6 bg-gray-800/50 rounded-xl">
            <h3 class="text-xl font-semibold text-white mb-3">Intangible Assets</h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-300">
              <li>Intellectual Property</li>
              <li>Private Equity</li>
              <li>Royalties</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Future</h2>
        <p class="mb-6">
          As blockchain technology matures, we'll see trillions in real-world assets move onto blockchain networks, 
          creating a more inclusive and transparent financial system.
        </p>

        <div class="mt-12 pt-6 border-t border-gray-800">
          <p class="text-sm text-gray-400">
            By Barbarika Labs
          </p>
          <p class="text-sm text-gray-500 mt-2">
            Published on August 20, 2025
          </p>
        </div>
      </div>
    `
  },
  {
    slug: 'rwa-treasury-bond',
    title: 'How Priya from Pune Bought a Piece of a US Treasury Bond',
    excerpt: 'Discover how blockchain enabled global investment in US Treasury bonds with just $50.',
    date: 'Sep 3, 2025',
    author: 'Prince Bhesaniya',
    readTime: '5 min read',
    image: '/hero.png',
    category: 'Finance',
    content: `
      <div class="prose prose-invert max-w-4xl mx-auto py-8 px-4">
        <h1 class="text-3xl font-bold text-white mb-6">How Priya from Pune Bought a Piece of a US Treasury Bond</h1>
        
        <div class="flex items-center text-sm text-gray-400 mb-8">
          <span>By Prince Bhesaniya</span>
          <span class="mx-2">•</span>
          <span>Sep 3, 2025</span>
          <span class="mx-2">•</span>
          <span>5 min read</span>
        </div>

        <div class="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
          <img src="/hero.png" alt="Global Investing" class="w-full h-full object-cover" />
        </div>

        <p class="text-xl text-gray-300 mb-6 leading-relaxed">
          Priya Patel from Pune, India, invested in a US Treasury bond with just $50, thanks to blockchain technology. 
          Here's how she did it and what it means for global finance.
        </p>
        
        <h2 class="text-2xl font-bold text-white mt-12 mb-4">Traditional Barriers</h2>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li>Minimum investments over $1,000</li>
          <li>Complex international accounts</li>
          <li>Currency conversion fees</li>
          <li>Lengthy settlement times</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Blockchain Solution</h2>
        <p class="mb-6">
          Tokenization platforms pool investor funds, purchase actual bonds, and issue digital tokens representing fractional ownership.
        </p>
        
        <h3 class="text-xl font-semibold text-white mt-8 mb-3">Priya's Journey</h3>
        <ol class="list-decimal pl-6 space-y-3 mb-6">
          <li>Signed up on a regulated platform</li>
          <li>Completed KYC in 10 minutes</li>
          <li>Deposited 4,000 INR ($50)</li>
          <li>Invested in a US Treasury bond fund</li>
          <li>Received digital tokens as proof of ownership</li>
        </ol>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Impact</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="p-6 bg-gray-800/50 rounded-xl">
            <h3 class="text-xl font-semibold text-white mb-3">For Investors</h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-300">
              <li>Low minimum investment</li>
              <li>No international accounts needed</li>
              <li>Transparent tracking</li>
            </ul>
          </div>
          
          <div class="p-6 bg-gray-800/50 rounded-xl">
            <h3 class="text-xl font-semibold text-white mb-3">For the System</h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-300">
              <li>Increased capital efficiency</li>
              <li>Broader investor base</li>
              <li>24/7 global markets</li>
            </ul>
          </div>
        </div>

        <p class="mb-6">
          This is just the beginning of a more inclusive financial system where anyone with an internet connection 
          can access global investment opportunities.
        </p>

        <div class="mt-12 pt-6 border-t border-gray-800">
          <p class="text-sm text-gray-400">
            By Prince Bhesaniya
          </p>
          <p class="text-sm text-gray-500 mt-2">
            Published on September 3, 2025
          </p>
        </div>
      </div>
    `
  },
  {
    slug: 'rwa-real-world-examples',
    title: 'Real World Examples of RWAs: 2024-2025 (From Gold to Green Finance)',
    excerpt: 'Explore real-world examples of tokenized assets transforming global finance in 2024-2025.',
    date: 'Sep 10, 2025',
    author: 'Prince Bhesaniya',
    readTime: '6 min read',
    image: '/hero.png',
    category: 'Finance',
    content: `
      <div class="prose prose-invert max-w-4xl mx-auto py-8 px-4">
        <h1 class="text-3xl font-bold text-white mb-6">Real World Examples of RWAs: 2024-2025</h1>
        <h2 class="text-2xl font-semibold text-gray-300 mb-6">From Gold to Green Finance</h2>
        
        <div class="flex items-center text-sm text-gray-400 mb-8">
          <span>By Prince Bhesaniya</span>
          <span class="mx-2">•</span>
          <span>Sep 10, 2025</span>
          <span class="mx-2">•</span>
          <span>6 min read</span>
        </div>

        <div class="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
          <img src="/hero.png" alt="Tokenized Assets" class="w-full h-full object-cover" />
        </div>

        <p class="text-xl text-gray-300 mb-6 leading-relaxed">
          The tokenization of real-world assets (RWAs) is no longer theoretical. 
          Here are the most compelling examples transforming global finance in 2024-2025.
        </p>
        
        <h2 class="text-2xl font-bold text-white mt-12 mb-4">1. Precious Metals: Gold Goes Digital</h2>
        <p class="mb-4">
          Gold-backed tokens like PAX Gold (PAXG) allow investors to own fractional shares of physical gold:
        </p>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li>Each token = 1 troy ounce of physical gold</li>
          <li>24/7 trading on digital exchanges</li>
          <li>Fractional ownership (as small as 0.01g)</li>
          <li>Eliminates storage and insurance costs</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">2. Real Estate: Fractional Property Ownership</h2>
        <p class="mb-4">
          Tokenized commercial properties in major cities worldwide:
        </p>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li>Invest as little as $100 in premium properties</li>
          <li>Automated rental income distribution</li>
          <li>Secondary market trading</li>
          <li>Global investor participation</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">3. Green Finance: Carbon Credits</h2>
        <p class="mb-4">
          Blockchain is revolutionizing environmental markets:
        </p>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li>Fractional trading of carbon credits</li>
          <li>Transparent price discovery</li>
          <li>Automated verification and retirement</li>
          <li>New opportunities for sustainable investing</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">4. Private Credit: Small Business Loans</h2>
        <p class="mb-4">
          Tokenized loans are transforming emerging markets:
        </p>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li>Global funding for small businesses</li>
          <li>Automated loan servicing</li>
          <li>Secondary market liquidity</li>
          <li>Expanding access to capital</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Future of Asset Tokenization</h2>
        <p class="mb-6">
          These examples represent just the beginning. As blockchain infrastructure matures and regulations evolve, 
          we'll see tokenization expand across all asset classes, creating more efficient and transparent markets.
        </p>

        <div class="mt-12 pt-6 border-t border-gray-800">
          <p class="text-sm text-gray-400">
            By Prince Bhesaniya, Blockchain & Fintech Expert
          </p>
          <p class="text-sm text-gray-500 mt-2">
            Published on September 10, 2025
          </p>
        </div>
      </div>
    `
  },
  {
    slug: 'blockchain-rwa-backbone',
    title: 'Why Blockchain is the Backbone of Real World Assets (RWAs)',
    excerpt: 'Understanding the fundamental role of blockchain technology in enabling RWA tokenization.',
    date: 'Sep 15, 2025',
    author: 'Barbarika Labs',
    readTime: '7 min read',
    image: '/hero.png',
    category: 'Finance',
    content: `
      <div class="prose prose-invert max-w-4xl mx-auto py-8 px-4">
        <h1 class="text-3xl font-bold text-white mb-6">Why Blockchain is the Backbone of Real World Assets (RWAs)</h1>
        
        <div class="flex items-center text-sm text-gray-400 mb-8">
          <span>By Barbarika Labs</span>
          <span class="mx-2">•</span>
          <span>Sep 15, 2025</span>
          <span class="mx-2">•</span>
          <span>7 min read</span>
        </div>

        <div class="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
          <img src="/hero.png" alt="Blockchain RWA Backbone" class="w-full h-full object-cover" />
        </div>

        <p class="text-xl text-gray-300 mb-6 leading-relaxed">
          Blockchain technology provides the essential infrastructure that makes Real World Asset tokenization possible, 
          secure, and efficient. Here's why it's the backbone of the RWA revolution.
        </p>
        
        <h2 class="text-2xl font-bold text-white mt-12 mb-4">1. Immutable Ownership Records</h2>
        <p class="mb-6">
          Blockchain's immutable ledger ensures that once ownership is recorded, it cannot be altered or disputed. 
          This provides the foundation of trust needed for digital asset ownership.
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">2. Programmable Smart Contracts</h2>
        <p class="mb-6">
          Smart contracts automate complex financial operations like dividend distribution, voting rights, 
          and compliance requirements, reducing costs and eliminating human error.
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">3. Global Accessibility</h2>
        <p class="mb-6">
          Blockchain networks operate 24/7 globally, enabling investors from anywhere in the world 
          to participate in asset ownership without traditional barriers.
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">4. Fractional Ownership</h2>
        <p class="mb-6">
          Blockchain enables the division of assets into tiny fractions, making high-value assets 
          accessible to investors with any budget.
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">5. Transparent Pricing</h2>
        <p class="mb-6">
          All transactions are publicly visible on the blockchain, creating transparent price discovery 
          and reducing information asymmetry in markets.
        </p>

        <div class="mt-12 pt-6 border-t border-gray-800">
          <p class="text-sm text-gray-400">
            By Barbarika Labs
          </p>
          <p class="text-sm text-gray-500 mt-2">
            Published on September 15, 2025
          </p>
        </div>
      </div>
    `
  },
  {
    slug: 'rwa-beginners-guide',
    title: 'RWA Tokenization: A Complete Beginner\'s Guide (2025)',
    excerpt: 'Everything you need to know about Real World Asset tokenization, from basics to advanced concepts.',
    date: 'Sep 20, 2025',
    author: 'Prince Bhesaniya',
    readTime: '8 min read',
    image: '/hero.png',
    category: 'Finance',
    content: `
      <div class="prose prose-invert max-w-4xl mx-auto py-8 px-4">
        <h1 class="text-3xl font-bold text-white mb-6">RWA Tokenization: A Complete Beginner's Guide (2025)</h1>
        
        <div class="flex items-center text-sm text-gray-400 mb-8">
          <span>By Prince Bhesaniya</span>
          <span class="mx-2">•</span>
          <span>Sep 20, 2025</span>
          <span class="mx-2">•</span>
          <span>8 min read</span>
        </div>

        <div class="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
          <img src="/hero.png" alt="RWA Beginner's Guide" class="w-full h-full object-cover" />
        </div>

        <p class="text-xl text-gray-300 mb-6 leading-relaxed">
          The financial world is on the cusp of a revolution, and at its heart lies the tokenization of Real World Assets (RWA). 
          This comprehensive guide will walk you through everything you need to know.
        </p>
        
        <h2 class="text-2xl font-bold text-white mt-12 mb-4">What Are Real World Assets (RWA)?</h2>
        <p class="mb-6">
          Real World Assets (RWA) represent a broad category of tangible and intangible assets that exist in the physical world
          and can be tokenized on blockchain networks. These include real estate, commodities, art, intellectual property, 
          and financial instruments.
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Mechanics of RWA Tokenization</h2>
        <p class="mb-6">
          Tokenization involves converting ownership rights of an asset into digital tokens on a blockchain. 
          Each token represents a fraction of the underlying asset, enabling fractional ownership and 
          increased liquidity for traditionally illiquid assets.
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Transformative Benefits of RWA Tokenization</h2>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Increased Liquidity:</strong> Convert illiquid assets into tradeable tokens</li>
          <li><strong>Fractional Ownership:</strong> Enable investment in high-value assets with small amounts</li>
          <li><strong>Global Access:</strong> Remove geographical barriers to investment</li>
          <li><strong>Reduced Costs:</strong> Eliminate intermediaries and reduce transaction fees</li>
          <li><strong>Transparency:</strong> Provide immutable records of ownership and transactions</li>
          <li><strong>Automation:</strong> Use smart contracts for automated compliance and payments</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">Challenges and Considerations</h2>
        <p class="mb-6">
          While the potential of RWA tokenization is immense, several challenges remain:
        </p>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li>Regulatory compliance across jurisdictions</li>
          <li>Legal framework for digital asset ownership</li>
          <li>Technical infrastructure and security</li>
          <li>Market adoption and liquidity</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Future of RWA Tokenization</h2>
        <p class="mb-6">
          The convergence of traditional finance with blockchain technology through RWA tokenization represents a paradigm
          shift that will democratize access to investment opportunities and create more efficient, transparent markets.
        </p>

        <div class="mt-12 pt-6 border-t border-gray-800">
          <p class="text-sm text-gray-400">
            By Prince Bhesaniya
          </p>
          <p class="text-sm text-gray-500 mt-2">
            Published on September 20, 2025
          </p>
        </div>
      </div>
    `
  },
  {
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
  },
  {
    slug: 'rwa-platforms-behind-hype',
    title: "Who's Powering RWAs? A Look at the Platforms Behind the Hype",
    excerpt: 'Meet the platforms tokenizing real estate, gold, treasuries — and why they matter.',
    date: 'Sep 27, 2025',
    author: 'Barbarika Labs',
    readTime: '5 min read',
    image: '/hero.png',
    category: 'Finance',
    content: `
      <div class="prose prose-invert max-w-4xl mx-auto py-8 px-4">
        <h1 class="text-3xl font-bold text-white mb-6">Who's Powering RWAs? A Look at the Platforms Behind the Hype</h1>

        <p class="text-xl text-gray-300 mb-6 leading-relaxed">
          When you hear about RWAs, you usually picture assets — real estate, gold, bonds. But behind every tokenized apartment or digital gold bar is a platform making it happen. Think of these platforms as the exchanges, custodians, and tech providers of this new world.
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">Big Names to Know</h2>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Ondo Finance</strong> — Tokenized bonds and treasuries</li>
          <li><strong>Maple Finance</strong> — Credit and lending built on RWAs</li>
          <li><strong>RealT</strong> — Fractionalized real estate</li>
          <li><strong>Centrifuge</strong> — Tokenizing invoices and business financing</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">Why They Matter</h2>
        <p class="mb-4">These platforms handle the hard parts so users don't have to:</p>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li>Legal custody of the actual asset</li>
          <li>Smart contract logic for tokenization</li>
          <li>Secondary marketplaces for liquidity</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Risk Factor</h2>
        <p class="mb-6">
          Pick the wrong platform, and you could be holding a token with nothing behind it. Research into who's powering RWAs is as important as the asset itself.
        </p>

        <div class="mt-12 pt-6 border-t border-gray-800">
          <p class="text-sm text-gray-400">By Barbarika Labs</p>
          <p class="text-sm text-gray-500 mt-2">Published on September 27, 2025</p>
        </div>
      </div>
    `
  },
  {
    slug: 'rwa-regulations-rulebook',
    title: 'The Rulebook: Regulations Shaping RWA Adoption',
    excerpt: 'Rules build trust — see how the US, Europe, and India are shaping RWAs.',
    date: 'Sep 29, 2025',
    author: 'Barbarika Labs',
    readTime: '6 min read',
    image: '/hero.png',
    category: 'Finance',
    content: `
      <div class="prose prose-invert max-w-4xl mx-auto py-8 px-4">
        <h1 class="text-3xl font-bold text-white mb-6">The Rulebook: Regulations Shaping RWA Adoption</h1>

        <p class="text-xl text-gray-300 mb-6 leading-relaxed">
          Finance doesn't move forward without rules. RWAs sit at the intersection of two worlds — traditional finance where everything is tightly controlled, and crypto where rules are still forming. That creates both challenges and opportunities.
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">What's Happening Globally</h2>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li><strong>United States:</strong> The SEC is cautious, but tokenized US Treasuries are gaining adoption.</li>
          <li><strong>Europe:</strong> MiCA is becoming one of the most comprehensive crypto frameworks, with direct impact on tokenization.</li>
          <li><strong>India:</strong> Movement is slow; crypto is taxed and restricted. RWAs need clear guidelines before mass adoption.</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">Why Regulation Matters</h2>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Trust:</strong> Approvals build confidence for retail investors.</li>
          <li><strong>Barriers:</strong> Compliance is expensive and can slow smaller innovators.</li>
          <li><strong>Adoption:</strong> Clarity enables integration with mainstream finance.</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Uber Analogy</h2>
        <p class="mb-6">Like Uber's early battles with regulators, RWAs solve real problems but need a proper rulebook to go mainstream.</p>

        <div class="bg-gray-800/50 p-6 rounded-xl mb-8 border-l-4 border-green-500">
          <h3 class="text-xl font-semibold text-white mb-3">Takeaway</h3>
          <p class="text-gray-300 mb-0">RWAs can't thrive in a lawless environment. Regulations will decide how quickly and widely they reshape global finance.</p>
        </div>

        <div class="mt-12 pt-6 border-t border-gray-800">
          <p class="text-sm text-gray-400">By Barbarika Labs</p>
          <p class="text-sm text-gray-500 mt-2">Published on September 29, 2025</p>
        </div>
      </div>
    `
  },
  {
    slug: 'rwa-next-100-million',
    title: 'How RWAs Could Change Finance for the Next 100 Million Users',
    excerpt: 'From borderless access to inclusion and liquidity — RWAs expand who can invest.',
    date: 'Oct 2, 2025',
    author: 'Barbarika Labs',
    readTime: '6 min read',
    image: '/hero.png',
    category: 'Finance',
    content: `
      <div class="prose prose-invert max-w-4xl mx-auto py-8 px-4">
        <h1 class="text-3xl font-bold text-white mb-6">How RWAs Could Change Finance for the Next 100 Million Users</h1>

        <p class="text-xl text-gray-300 mb-6 leading-relaxed">
          RWAs are bigger than crypto. They can reshape access to high-quality financial products for people long excluded by traditional systems.
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">Borderless Finance</h2>
        <p class="mb-6">Owning a slice of a US Treasury bond from India could take minutes, not months. That's borderless access — something banks have never offered.</p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">Financial Inclusion</h2>
        <p class="mb-6">Instead of needing ₹50 lakh for property, invest ₹500 in a fraction of a building. A farmer in UP and a software engineer in Bengaluru can own the same asset.</p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">Liquidity & Flexibility</h2>
        <p class="mb-6">Traditionally illiquid assets become tradable on secondary markets. Buy today, sell tomorrow — all on-chain.</p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">Wealth Creation for the Masses</h2>
        <p class="mb-6">Access to high-value assets has been limited to the wealthy for decades. RWAs open these doors to anyone with internet access.</p>

        <div class="bg-gray-800/50 p-6 rounded-xl mb-8 border-l-4 border-green-500">
          <h3 class="text-xl font-semibold text-white mb-3">The Takeaway</h3>
          <p class="text-gray-300 mb-0">The next 100 million users won't join for memes or speculation — they'll join because RWAs give them tools they've never had before.</p>
        </div>

        <div class="mt-12 pt-6 border-t border-gray-800">
          <p class="text-sm text-gray-400">By Barbarika Labs</p>
          <p class="text-sm text-gray-500 mt-2">Published on October 2, 2025</p>
        </div>
      </div>
    `
  },
  {
    slug: 'rwa-first-step-100',
    title: 'Your First Step: Trying a Tokenized Asset with Just ₹100',
    excerpt: 'A practical, low-risk guide to experience RWAs with ₹100–₹500.',
    date: 'Oct 5, 2025',
    author: 'Barbarika Labs',
    readTime: '5 min read',
    image: '/hero.png',
    category: 'Finance',
    content: `
      <div class="prose prose-invert max-w-4xl mx-auto py-8 px-4">
        <h1 class="text-3xl font-bold text-white mb-6">Your First Step: Trying a Tokenized Asset with Just ₹100</h1>

        <p class="text-xl text-gray-300 mb-6 leading-relaxed">
          All of this sounds exciting. But let's make it real. How can you, sitting at home, actually experience RWAs without risking your life savings? Here's a practical guide.
        </p>

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
    `
  },
  {
    slug: 'rwa-whos-building-ecosystem',
    title: "Who's Building the RWA Ecosystem? (Platforms + Projects You Should Know)",
    excerpt: 'The builders laying the rails for tokenized assets — explained simply.',
    date: 'Oct 7, 2025',
    author: 'Barbarika Labs',
    readTime: '7 min read',
    image: '/hero.png',
    category: 'Finance',
    content: `
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
    `
  },
  {
    slug: 'rwa-regulatory-maze',
    title: 'The Regulatory Maze: What Rules Apply to RWAs?',
    excerpt: 'Double the rules, double the complexity — a simple view of RWA regulation.',
    date: 'Oct 10, 2025',
    author: 'Barbarika Labs',
    readTime: '7 min read',
    image: '/hero.png',
    category: 'Finance',
    content: `
      <div class="prose prose-invert max-w-4xl mx-auto py-8 px-4">
        <h1 class="text-3xl font-bold text-white mb-6">The Regulatory Maze: What Rules Apply to RWAs?</h1>

        <p class="text-xl text-gray-300 mb-6 leading-relaxed">Finance is one of the most regulated industries, and RWAs sit at the intersection of finance and blockchain — double the rules, double the complexity.</p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">Why Regulation Matters</h2>
        <p class="mb-4">Imagine you buy a tokenized bond. You expect interest every month. But what if the custodian disappears, the token was never legal, or rules change overnight? Regulation is the foundation of trust.</p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Current Landscape (Simplified)</h2>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li><strong>US & Europe:</strong> Moving faster; tokens often treated as securities. MiCA is setting a clear framework.</li>
          <li><strong>India:</strong> Still cautious; RBI and SEBI haven't provided a direct path for tokenized RWAs. Crypto is taxed; regulated RWA path is in discussion.</li>
          <li><strong>Global South:</strong> Some regions are exploring sandboxes for tokenized credit and carbon markets.</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">Key Challenges</h2>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li>Custody rules — who legally holds the asset?</li>
          <li>Investor protection — who do you call if something breaks?</li>
          <li>Cross-border laws — asset in one country, token in another.</li>
          <li>Taxation — how is tokenized income taxed?</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Good News</h2>
        <p class="mb-6">Every breakthrough went through this — the internet, ride-sharing, even UPI. Governments are watching, learning, and drafting rules.</p>

        <div class="bg-gray-800/50 p-6 rounded-xl mb-8 border-l-4 border-green-500">
          <h3 class="text-xl font-semibold text-white mb-3">What This Means for Beginners</h3>
          <p class="text-gray-300 mb-0">Don't rush blindly. Use platforms with regulatory clarity. This is a long game — safer opportunities come as rules solidify.</p>
        </div>

        <div class="mt-12 pt-6 border-t border-gray-800">
          <p class="text-sm text-gray-400">By Barbarika Labs</p>
          <p class="text-sm text-gray-500 mt-2">Published on October 10, 2025</p>
        </div>
      </div>
    `
  }
];

export default function RWABlogSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

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
                RWA (Real World Assets)
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto mb-8 sm:mb-12 px-2 sm:px-4" style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                lineHeight: '1.6'
              }}>
                Explore how Real World Assets are being tokenized and brought onto blockchain networks.
              </p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <section className="relative py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <Link href="/company-file/blog">
            <button className="mb-8 flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </button>
          </Link>
        </section>

        {/* Blog Posts */}
        <section className="relative py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rwaPosts.map((post, index) => (
              <div
                key={index}
                className="relative group bg-gray-900/60 rounded-xl overflow-hidden border border-gray-800/60 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 hover:border-green-500/50 hover:scale-[1.02] hover:ring-1 hover:ring-green-500/30"
                onClick={() => router.push(`/company-file/blog/rwa/${post.slug}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && router.push(`/company-file/blog/rwa/${post.slug}`)}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm text-green-300 bg-green-900/50">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 relative z-10">
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <span className="group-hover:text-green-300 transition-colors">{post.date}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm text-gray-300">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-200 transition-colors line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-green-400 group-hover:text-green-300 transition-colors">
                    <span>Read more</span>
                    <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
}
