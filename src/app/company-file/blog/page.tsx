'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';

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
  isSeries?: boolean;
  seriesSlug?: string;
}

interface BlogSeries {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  posts: BlogPost[];
}

const blogSeries: BlogSeries[] = [
  {
    slug: 'rwa-series',
    title: 'RWA (Real World Assets)',
    description: 'Explore how Real World Assets are being tokenized and brought onto blockchain networks.',
    category: 'Finance',
    image: '/hero.png',
    posts: [
      {
        slug: 'rwa-intro',
        title: 'Introduction to Real World Asset Tokenization',
        excerpt: 'Discover how blockchain is transforming traditional assets through tokenization.',
        date: 'Aug 20, 2025',
        author: 'Barbarika Labs',
        readTime: '4 min read',
        image: '/hero.png',
        category: 'Finance',
        seriesSlug: 'rwa-series',
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
        seriesSlug: 'rwa-series',
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
        seriesSlug: 'rwa-series',
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
        slug: 'tokenization-made-simple',
        title: 'Tokenization Made Simple: How Real Things Become Digital Assets You Can Own',
        excerpt: 'A beginner-friendly guide to understanding how real-world assets are transformed into digital tokens.',
        date: 'Sep 17, 2025',
        author: 'Prince Bhesaniya',
        readTime: '5 min read',
        image: '/hero.png',
        category: 'Education',
        seriesSlug: 'rwa-series',
        content: `
          <div class="prose prose-invert max-w-4xl mx-auto py-8 px-4">
            <h1 class="text-3xl font-bold text-white mb-6">Tokenization Made Simple</h1>
            <h2 class="text-2xl font-semibold text-gray-300 mb-6">How Real Things Become Digital Assets You Can Own</h2>
            
            <div class="flex items-center text-sm text-gray-400 mb-8">
              <span>By Prince Bhesaniya</span>
              <span class="mx-2">•</span>
              <span>Sep 17, 2025</span>
              <span class="mx-2">•</span>
              <span>5 min read</span>
            </div>

            <div class="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
              <img src="/hero.png" alt="Tokenization Explained" class="w-full h-full object-cover" />
            </div>

            <p class="text-xl text-gray-300 mb-6 leading-relaxed">
              Imagine owning a piece of the Eiffel Tower, a famous painting, or a rare sports car — 
              not just in pictures, but actual ownership you can prove and sell. 
              This is the magic of tokenization, and it's simpler than you think.
            </p>
            
            <h2 class="text-2xl font-bold text-white mt-12 mb-4">What is Tokenization?</h2>
            <p class="mb-6">
              Tokenization turns real-world assets into digital tokens on a blockchain. 
              It's like creating digital certificates of ownership that are secure, easy to transfer, 
              and can be divided into smaller pieces.
            </p>
            
            <div class="bg-gray-800/50 p-6 rounded-xl mb-8">
              <h3 class="text-xl font-semibold text-white mb-3">The Pizza Analogy</h3>
              <p class="mb-4">
                Think of tokenization like cutting a pizza into slices. The whole pizza is the asset, 
                and each slice represents a token. You can own one slice or many, and you can easily 
                trade your slices with others.
              </p>
              <p>
                The best part? The blockchain keeps perfect track of who owns which slices, 
                so there's never any confusion or dispute.
              </p>
            </div>

            <h2 class="text-2xl font-bold text-white mt-12 mb-4">How Tokenization Works</h2>
            <ol class="list-decimal pl-6 space-y-4 mb-6">
              <li>
                <strong>Asset Selection:</strong> Choose a valuable asset (real estate, art, commodities, etc.)
              </li>
              <li>
                <strong>Legal Framework:</strong> Establish ownership rights and legal structure
              </li>
              <li>
                <strong>Valuation:</strong> Determine the asset's market value
              </li>
              <li>
                <strong>Token Creation:</strong> Issue digital tokens representing ownership shares
              </li>
              <li>
                <strong>Distribution:</strong> Sell tokens to investors through compliant channels
              </li>
            </ol>

            <h2 class="text-2xl font-bold text-white mt-12 mb-4">Why It Matters</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div class="p-6 bg-gray-800/50 rounded-xl">
                <h3 class="text-xl font-semibold text-white mb-3">For Investors</h3>
                <ul class="list-disc pl-5 space-y-1 text-gray-300">
                  <li>Access to premium assets with small amounts</li>
                  <li>Diversify across different asset classes</li>
                  <li>24/7 global trading</li>
                  <li>Transparent ownership records</li>
                </ul>
              </div>
              
              <div class="p-6 bg-gray-800/50 rounded-xl">
                <h3 class="text-xl font-semibold text-white mb-3">For Asset Owners</h3>
                <ul class="list-disc pl-5 space-y-1 text-gray-300">
                  <li>Unlock liquidity in illiquid assets</li>
                  <li>Access global capital pools</li>
                  <li>Reduce transaction costs</li>
                  <li>Automate compliance and distributions</li>
                </ul>
              </div>
            </div>

            <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Future is Tokenized</h2>
            <p class="mb-6">
              As blockchain technology matures, we'll see more assets being tokenized, 
              making investing more accessible and markets more efficient. 
              The tokenization revolution is just beginning, and it's open to everyone.
            </p>

            <div class="mt-12 pt-6 border-t border-gray-800">
              <p class="text-sm text-gray-400">
                By Prince Bhesaniya, Blockchain & Fintech Expert
              </p>
              <p class="text-sm text-gray-500 mt-2">
                Published on September 17, 2025
              </p>
            </div>
          </div>
        `
      },
      {
        slug: 'blockchain-rwa-backbone',
        title: 'Why Blockchain is the Backbone of Real World Assets (RWAs)',
        excerpt: 'Understanding the critical role of blockchain technology in enabling the tokenization of real-world assets.',
        date: 'Sep 24, 2025',
        author: 'Prince Bhesaniya',
        readTime: '5 min read',
        image: '/hero.png',
        category: 'Technology',
        seriesSlug: 'rwa-series',
        content: `
          <div class="prose prose-invert max-w-4xl mx-auto py-8 px-4">
            <h1 class="text-3xl font-bold text-white mb-6">Why Blockchain is the Backbone of Real World Assets</h1>
            
            <div class="flex items-center text-sm text-gray-400 mb-8">
              <span>By Prince Bhesaniya</span>
              <span class="mx-2">•</span>
              <span>Sep 24, 2025</span>
              <span class="mx-2">•</span>
              <span>5 min read</span>
            </div>

            <div class="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
              <img src="/hero.png" alt="Blockchain Technology" class="w-full h-full object-cover" />
            </div>

            <p class="text-xl text-gray-300 mb-6 leading-relaxed">
              Blockchain technology is the foundation that makes tokenization of real-world assets possible. 
              Here's why it's the perfect solution for managing ownership of physical assets in the digital world.
            </p>
            
            <h2 class="text-2xl font-bold text-white mt-12 mb-4">1. Immutable Record Keeping</h2>
            <p class="mb-6">
              Blockchain creates an unchangeable record of ownership. Once a transaction is recorded, 
              it cannot be altered or deleted, ensuring the integrity of asset ownership records.
            </p>
            
            <h2 class="text-2xl font-bold text-white mt-12 mb-4">2. Decentralized Verification</h2>
            <p class="mb-6">
              No single entity controls the network. Instead, multiple participants verify transactions, 
              making the system more secure and resistant to fraud.
            </p>

            <h2 class="text-2xl font-bold text-white mt-12 mb-4">3. Smart Contracts</h2>
            <p class="mb-6">
              Self-executing contracts automate processes like dividend payments, rental distributions, 
              and compliance, reducing administrative overhead and human error.
            </p>

            <h2 class="text-2xl font-bold text-white mt-12 mb-4">4. Global Accessibility</h2>
            <p class="mb-6">
              Blockchain operates 24/7 across borders, enabling anyone with an internet connection 
              to participate in global markets.
            </p>

            <h2 class="text-2xl font-bold text-white mt-12 mb-4">5. Fractional Ownership</h2>
            <p class="mb-6">
              Blockchain makes it easy to divide assets into smaller, more affordable units, 
              democratizing access to investment opportunities.
            </p>

            <div class="mt-12 pt-6 border-t border-gray-800">
              <p class="text-sm text-gray-400">
                By Prince Bhesaniya, Blockchain & Fintech Expert
              </p>
              <p class="text-sm text-gray-500 mt-2">
                Published on September 24, 2025
              </p>
            </div>
          </div>
        `
      },
      {
        slug: 'rwa-beginners-guide',
        title: 'Real World Assets: The Beginner\'s Gateway to the Next Financial Evolution',
        excerpt: 'Explore how Real World Assets are transforming finance through blockchain technology and tokenization.',
        date: 'Aug 27, 2025',
        author: 'Prince Bhesaniya',
        readTime: '6 min read',
        image: '/hero.png',
        category: 'Finance',
        seriesSlug: 'rwa-series',
        content: `
          <div class="prose prose-invert max-w-4xl mx-auto py-8 px-4">
            <h1 class="text-3xl font-bold text-white mb-6">Real World Assets: The Beginner's Gateway to the Next Financial Evolution</h1>
            
            <div class="flex items-center text-sm text-gray-400 mb-8">
              <span>By Prince Bhesaniya</span>
              <span class="mx-2">•</span>
              <span>Aug 27, 2025</span>
              <span class="mx-2">•</span>
              <span>6 min read</span>
            </div>

            <div class="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
              <img src="/hero.png" alt="Real World Assets" class="w-full h-full object-cover" />
            </div>

            <p class="text-xl text-gray-300 mb-6 leading-relaxed">
              The financial world is on the cusp of a revolution, and at its heart lies the tokenization of Real World Assets (RWA). 
              This transformative technology is bridging the gap between traditional finance and the blockchain ecosystem, creating 
              unprecedented opportunities for investors and businesses alike.
            </p>
            
            <h2 class="text-2xl font-bold text-white mt-12 mb-4">What Are Real World Assets (RWA)?</h2>
            <p class="mb-6">
              Real World Assets (RWA) represent a broad category of tangible and intangible assets that exist in the physical world 
              and can be represented as digital tokens on a blockchain. These assets include but are not limited to:
            </p>
            
            <ul class="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Real Estate:</strong> Commercial and residential properties, land, and real estate investment trusts (REITs)</li>
              <li><strong>Commodities:</strong> Precious metals, oil, agricultural products, and natural resources</li>
              <li><strong>Financial Instruments:</strong> Bonds, stocks, and other securities</li>
              <li><strong>Intellectual Property:</strong> Patents, copyrights, and trademarks</li>
              <li><strong>Collectibles & Art:</strong> Fine art, rare collectibles, and luxury goods</li>
              <li><strong>Infrastructure:</strong> Roads, bridges, and public utilities</li>
            </ul>

            <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Mechanics of RWA Tokenization</h2>
            <p class="mb-6">
              The process of tokenizing real-world assets involves several key steps:
            </p>
            
            <ol class="list-decimal pl-6 space-y-3 mb-6">
              <li><strong>Asset Selection:</strong> Identifying suitable assets for tokenization based on market demand and regulatory considerations.</li>
              <li><strong>Legal Structuring:</strong> Establishing the legal framework and ownership rights through smart contracts.</li>
              <li><strong>Valuation:</strong> Determining the fair market value of the asset through professional appraisal.</li>
              <li><strong>Token Creation:</strong> Minting digital tokens that represent ownership or shares in the asset.</li>
              <li><strong>Compliance:</strong> Ensuring adherence to relevant securities laws and regulations.</li>
              <li><strong>Distribution:</strong> Offering tokens to investors through private sales or public offerings.</li>
              <li><strong>Secondary Trading:</strong> Enabling trading of tokens on compliant digital asset exchanges.</li>
            </ol>

            <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Transformative Benefits of RWA Tokenization</h2>
            
            <h3 class="text-xl font-semibold text-white mt-8 mb-3">1. Democratization of Investment Opportunities</h3>
            <p class="mb-6">
              Tokenization breaks down traditional barriers to entry, allowing retail investors to participate in asset classes 
              that were previously accessible only to institutional investors or high-net-worth individuals. Fractional ownership 
              enables investors to own portions of high-value assets with relatively small capital outlays.
            </p>

            <h3 class="text-xl font-semibold text-white mt-8 mb-3">2. Enhanced Liquidity</h3>
            <p class="mb-6">
              Traditional assets like real estate are notoriously illiquid. Tokenization creates a secondary market where these 
              assets can be traded 24/7, significantly improving liquidity and price discovery.
            </p>

            <h3 class="text-xl font-semibold text-white mt-8 mb-3">3. Reduced Transaction Costs</h3>
            <p class="mb-6">
              By eliminating intermediaries and automating processes through smart contracts, tokenization reduces transaction 
              costs, settlement times, and administrative overhead.
            </p>

            <h3 class="text-xl font-semibold text-white mt-8 mb-3">4. Global Market Access</h3>
            <p class="mb-6">
              Blockchain's borderless nature enables global investment opportunities, allowing investors from different 
              jurisdictions to participate in previously inaccessible markets.
            </p>

            <h3 class="text-xl font-semibold text-white mt-8 mb-3">5. Increased Transparency and Security</h3>
            <p class="mb-6">
              The immutable nature of blockchain ensures transparent record-keeping, while smart contracts automate compliance 
              and distribution of returns, reducing the potential for fraud and errors.
            </p>

            <h2 class="text-2xl font-bold text-white mt-12 mb-4">Real-World Applications and Use Cases</h2>
            
            <h3 class="text-xl font-semibold text-white mt-8 mb-3">1. Real Estate Tokenization</h3>
            <p class="mb-6">
              The real estate sector has emerged as a prime candidate for tokenization. Platforms are enabling fractional ownership 
              of commercial and residential properties, allowing investors to build diversified real estate portfolios with 
              smaller capital commitments.
            </p>

            <h3 class="text-xl font-semibold text-white mt-8 mb-3">2. Private Equity and Venture Capital</h3>
            <p class="mb-6">
              Tokenization is transforming private markets by providing liquidity to traditionally illiquid private company shares 
              and venture capital investments.
            </p>

            <h3 class="text-xl font-semibold text-white mt-8 mb-3">3. Fine Art and Collectibles</h3>
            <p class="mb-6">
              High-value art and collectibles are being tokenized, enabling broader ownership and creating new investment 
              opportunities in the art market.
            </p>

            <h3 class="text-xl font-semibold text-white mt-8 mb-3">4. Commodities and Natural Resources</h3>
            <p class="mb-6">
              From precious metals to agricultural products, tokenization is making commodity markets more accessible and efficient.
            </p>

            <h2 class="text-2xl font-bold text-white mt-12 mb-4">Regulatory Landscape and Challenges</h2>
            <p class="mb-6">
              While the potential of RWA tokenization is immense, several challenges remain:
            </p>
            
            <ul class="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Regulatory Uncertainty:</strong> The regulatory framework for tokenized assets is still evolving across jurisdictions.</li>
              <li><strong>Legal Recognition:</strong> Questions remain about the legal standing of tokenized ownership in many regions.</li>
              <li><strong>Market Infrastructure:</strong> The ecosystem for secondary trading of tokenized assets is still developing.</li>
              <li><strong>Standardization:</strong> Lack of industry-wide standards for tokenization processes and smart contracts.</li>
              <li><strong>Investor Education:</strong> Need for greater awareness and understanding of tokenized assets among investors.</li>
            </ul>

            <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Future of RWA Tokenization</h2>
            <p class="mb-6">
              As blockchain technology matures and regulatory clarity improves, we can expect to see exponential growth in the 
              tokenization of real-world assets. Industry experts predict that trillions of dollars worth of assets will be 
              tokenized in the coming decade, fundamentally transforming global financial markets.
            </p>

            <p class="mb-6">
              The convergence of traditional finance with blockchain technology through RWA tokenization represents a paradigm 
              shift in how we think about asset ownership, investment, and value exchange. This evolution promises to create 
              more inclusive, efficient, and transparent financial markets for participants worldwide.
            </p>

            <div class="mt-12 pt-6 border-t border-gray-800">
              <p class="text-sm text-gray-400">
                By Prince Bhesaniya, Blockchain & Fintech Expert
              </p>
              <p class="text-sm text-gray-500 mt-2">
                Published on August 27, 2025
              </p>
            </div>
          </div>
        `
      }
    ]
  },
  {
    slug: 'ai-blockchain-series',
    title: 'AI + BLOCKCHAIN',
    description: 'Explore the fascinating intersection of Artificial Intelligence and Blockchain technology through our comprehensive series.',
    category: 'Technology',
    image: '/hero.png',
    posts: [
      {
        slug: 'ai-blockchain-intro',
        title: 'Day 1: Introduction to AI + Blockchain',
        excerpt: 'Welcome to the Journey! Starting something new can be exciting and sometimes a bit overwhelming. In the coming days, we\'ll break down the fascinating world of Artificial Intelligence (AI) and Blockchain.',
        date: 'Aug 7, 2025',
        author: 'Barbarika Labs',
        readTime: '2 min read',
        image: '/hero.png',
        category: 'Technology',
        seriesSlug: 'ai-blockchain-series',
        content: `
          <article class="prose prose-invert max-w-none">
            <p class="text-xl text-gray-100 mb-6 leading-relaxed">Welcome to the Journey! Starting something new can be exciting and sometimes a bit overwhelming. In the coming days, we'll break down the fascinating world of Artificial Intelligence (AI) and Blockchain, not only as individual technologies but as a powerful combination shaping the future.</p>
            
            <h2 class="text-2xl font-bold text-white mt-10 mb-4 tracking-tight">What Are We Doing on Day 1?</h2>
            <p class="text-gray-200">Today, we focus on two things:</p>
            <ul class="list-disc pl-6 space-y-2 my-4 text-gray-200">
              <li class="leading-relaxed"><strong class="text-blue-100 font-semibold">Getting curious:</strong> We'll start by asking, "What is AI?" and "What is Blockchain?" in the simplest terms.</li>
              <li class="leading-relaxed"><strong class="text-blue-100 font-semibold">Planning ahead:</strong> We'll create a roadmap for our blog series, so you always know what's coming next.</li>
            </ul>

            <h2 class="text-2xl font-bold text-white mt-10 mb-4 tracking-tight">What is Artificial Intelligence (AI)?</h2>
            <p class="text-gray-200 leading-relaxed">Think of AI as teaching computers to learn, adapt, and make decisions just like people do!</p>
            <p class="text-gray-200 leading-relaxed">AI is behind everyday things, from online shopping recommendations and virtual assistants (like Siri and Alexa) to self-driving cars. The goal of AI is to help machines recognize patterns and solve problems, making life easier and work faster.</p>
            <div class="bg-gray-800/60 p-5 rounded-lg my-6 border-l-4 border-blue-500 shadow-lg">
              <p class="m-0 text-gray-100"><span class="font-semibold text-blue-300">Example:</span> Imagine Netflix suggesting movies you might like. That's AI, learning your tastes and offering up choices.</p>
            </div>

            <h2 class="text-2xl font-bold text-white mt-10 mb-4 tracking-tight">What is Blockchain?</h2>
            <p class="text-gray-200 leading-relaxed">Blockchain is more like a super-secure online notebook.</p>
            <p class="text-gray-200 leading-relaxed">But instead of one person controlling it, lots of people share the same copy. Once something is written in this notebook (the "blockchain"), nobody can change or erase it. This makes it nearly tamper-proof. It's the technology behind digital coins like Bitcoin, but it's useful far beyond that!</p>
            <div class="bg-gray-800/60 p-5 rounded-lg my-6 border-l-4 border-blue-500 shadow-lg">
              <p class="m-0 text-gray-100"><span class="font-semibold text-blue-300">Example:</span> If you transfer money to a friend using blockchain, the transaction is recorded in a way that everyone can see, and nobody can secretly change it.</p>
            </div>

            <div class="mt-14 pt-6 border-t border-gray-800/60">
              <p class="text-gray-300 m-0">
                <span class="font-medium text-blue-300">Next Up:</span> 
                <span class="text-gray-100">Day 2: Deep dive into AI fundamentals and machine learning basics.</span>
              </p>
            </div>
          </article>
        `
      },
      {
        slug: 'ai-deep-dive',
        title: 'Day 2: WHAT IS AI?',
        excerpt: 'What is AI? Hey there, curious mind! Today, let\'s explore Artificial Intelligence (AI) using a warm, natural story to make things simple and memorable.',
        date: 'Aug 8, 2025',
        author: 'Barbarika Labs',
        readTime: '5 min read',
        image: '/hero.png',
        category: 'Technology',
        seriesSlug: 'ai-blockchain-series',
        content: `
          <article class="prose prose-invert max-w-none">
            <h1 class="text-3xl font-bold text-white mb-6">What is AI?</h1>
            <p class="text-xl text-gray-100 mb-6 leading-relaxed">Hey there, curious mind! 🌟</p>
            <p class="text-gray-200 leading-relaxed mb-6">Today, let's explore Artificial Intelligence (AI) using a warm, natural story to make things simple and memorable. Along the way, I'll give you a clear overview of AI's important parts — without making it too long or technical.</p>
            
            <h2 class="text-2xl font-bold text-white mt-10 mb-4 tracking-tight">Imagine a Little Parrot Named Kiwi Learning About Flowers</h2>
            <p class="text-gray-200 leading-relaxed mb-4">Meet Kiwi, a bright and curious pet parrot living in a garden full of colorful flowers. Kiwi loves to play but doesn't yet know the different types of flowers around him.</p>
            <p class="text-gray-200 leading-relaxed mb-4">One day, Kiwi's owner decides to help him learn:</p>
            <ul class="list-disc pl-6 space-y-2 my-4 text-gray-200">
              <li class="leading-relaxed">She shows Kiwi a red rose, pointing out its shape and color.</li>
              <li class="leading-relaxed">Then, she introduces a yellow marigold, explaining how it looks different — its petals and scent.</li>
              <li class="leading-relaxed">Over time, Kiwi learns to recognize these flowers by their colors, shapes, and even smells.</li>
            </ul>
            <p class="text-gray-200 leading-relaxed mb-6">Soon, whenever Kiwi sees a flower, he can confidently say, "That's a rose!" or "That's a marigold!" even if the flower looks a little different or is in a new spot.</p>

            <h2 class="text-2xl font-bold text-white mt-10 mb-4 tracking-tight">This is Exactly How AI Learns!</h2>
            <p class="text-gray-200 leading-relaxed mb-4">Just like Kiwi, AI starts with no knowledge. Instead of programming AI with every single detail about flowers (or anything else), we give it lots of examples — called data.</p>
            <p class="text-gray-200 leading-relaxed mb-6">AI looks carefully to find patterns, like Kiwi noticing the red petals or the round shape of the rose. Using those clues, the AI guesses what it sees or hears, even if it's something brand new.</p>

            <h2 class="text-2xl font-bold text-white mt-10 mb-4 tracking-tight">What Makes AI So Amazing?</h2>
            <p class="text-gray-200 leading-relaxed mb-4">AI can do many incredible things once it learns from data:</p>
            <ul class="list-disc pl-6 space-y-2 my-6 text-gray-200">
              <li class="leading-relaxed"><strong class="text-blue-100 font-semibold">Recommendation Systems:</strong> Platforms like Netflix or YouTube use AI to find shows and videos you might love.</li>
              <li class="leading-relaxed"><strong class="text-blue-100 font-semibold">Healthcare:</strong> AI helps doctors spot diseases early by analyzing medical images.</li>
              <li class="leading-relaxed"><strong class="text-blue-100 font-semibold">Navigation:</strong> Apps learn about traffic and suggest the fastest routes.</li>
              <li class="leading-relaxed"><strong class="text-blue-100 font-semibold">Voice Assistants:</strong> When you talk to Siri or Alexa, AI understands and helps you.</li>
              <li class="leading-relaxed"><strong class="text-blue-100 font-semibold">Automating Tasks:</strong> AI can automate repetitive work, saving time and reducing errors.</li>
            </ul>

            <h2 class="text-2xl font-bold text-white mt-10 mb-4 tracking-tight">Key Aspects of AI You Should Know</h2>
            <div class="space-y-4 my-6">
              <div class="bg-gray-900/40 p-4 rounded-lg border border-gray-800/50">
                <h3 class="text-lg font-semibold text-blue-100 mb-2">Machine Learning (ML)</h3>
                <p class="text-gray-300 m-0">This is how AI learns from data. It looks for patterns and improves with more examples.</p>
              </div>
              
              <div class="bg-gray-900/40 p-4 rounded-lg border border-gray-800/50">
                <h3 class="text-lg font-semibold text-blue-100 mb-2">Deep Learning</h3>
                <p class="text-gray-300 m-0">A powerful kind of ML that uses layered "neural networks" inspired by the human brain. It helps AI understand complex data like pictures, sounds, and languages.</p>
              </div>
              
              <div class="bg-gray-900/40 p-4 rounded-lg border border-gray-800/50">
                <h3 class="text-lg font-semibold text-blue-100 mb-2">Natural Language Processing (NLP)</h3>
                <p class="text-gray-300 m-0">This allows AI to understand and talk in human language — like chatbots or language translators.</p>
              </div>
              
              <div class="bg-gray-900/40 p-4 rounded-lg border border-gray-800/50">
                <h3 class="text-lg font-semibold text-blue-100 mb-2">Computer Vision</h3>
                <p class="text-gray-300 m-0">AI's ability to "see" and interpret images or videos, just like how Kiwi recognizes flowers.</p>
              </div>
              
              <div class="bg-gray-900/40 p-4 rounded-lg border border-gray-800/50">
                <h3 class="text-lg font-semibold text-blue-100 mb-2">Generative AI</h3>
                <p class="text-gray-300 m-0">AI that can create new content such as writing stories, making art, or composing music.</p>
              </div>
            </div>

            <h2 class="text-2xl font-bold text-white mt-10 mb-4 tracking-tight">How AI Learns, Step-by-Step (Like Teaching Kiwi)</h2>
            <ol class="list-decimal pl-6 space-y-2 my-6 text-gray-200">
              <li class="leading-relaxed"><strong class="text-blue-100 font-semibold">Show lots of examples:</strong> Kiwi sees many flowers; AI gets huge amounts of data.</li>
              <li class="leading-relaxed"><strong class="text-blue-100 font-semibold">Find patterns:</strong> Kiwi notices petal shapes and colors; AI finds features in data.</li>
              <li class="leading-relaxed"><strong class="text-blue-100 font-semibold">Practice and improve:</strong> Kiwi gets better at recognizing flowers; AI updates its understanding constantly.</li>
              <li class="leading-relaxed"><strong class="text-blue-100 font-semibold">Make smart guesses:</strong> Kiwi identifies new flowers based on past learning; AI predicts or classifies new info.</li>
            </ol>

            <h2 class="text-2xl font-bold text-white mt-10 mb-4 tracking-tight">Why Should You Care About AI?</h2>
            <p class="text-gray-200 leading-relaxed mb-4">Because AI is already part of your daily life and has huge potential for the future:</p>
            <ul class="list-disc pl-6 space-y-2 my-6 text-gray-200">
              <li class="leading-relaxed">It makes experiences personalized and easier.</li>
              <li class="leading-relaxed">It accelerates innovation in fields like medicine, finance, and education.</li>
              <li class="leading-relaxed">It can create new jobs and ways to earn — think of smart tools helping you work or become creative.</li>
              <li class="leading-relaxed">It encourages us to think carefully about ethical use, fairness, and privacy.</li>
            </ul>

            <div class="bg-gray-800/60 p-5 rounded-lg my-6 border-l-4 border-blue-500 shadow-lg">
              <p class="m-0 text-gray-100"><span class="font-semibold text-blue-300">Final Thought:</span> AI is like teaching a smart friend — whether it's Kiwi or your computer — step by step, from basics to brilliant. With each lesson, AI gets better, helping make your world easier and more exciting.</p>
            </div>

            <p class="text-gray-200 leading-relaxed mb-4">Got questions or fun stories about learning new things? Share them in the comments — we're all in this learning adventure together!</p>
            <p class="text-gray-200 leading-relaxed mb-6">Stay curious, and see you tomorrow! 🚀</p>

            <div class="mt-14 pt-6 border-t border-gray-800/60">
              <p class="text-gray-300 m-0">
                <span class="font-medium text-blue-300">What's Up Next?</span> 
                <span class="text-gray-100">Tomorrow, we will uncover Blockchain, a secure and trustworthy technology.</span>
              </p>
            </div>
          </article>
        `
      },
      {
        slug: 'blockchain-fundamentals',
        title: 'Day 3: Blockchain Fundamentals - Beyond Cryptocurrency',
        excerpt: 'Discover how blockchain technology works beyond digital currencies. Understand consensus mechanisms, smart contracts, and decentralization.',
        date: 'Aug 9, 2025',
        author: 'Barbarika Labs',
        readTime: '3 min read',
        image: '/hero.png',
        category: 'Technology',
        seriesSlug: 'ai-blockchain-series',
        content: `<p class="text-gray-400 text-center py-8">Content coming soon...</p>`
      },
      {
        slug: 'ai-blockchain-synergy',
        title: 'Day 4: The Perfect Match - AI + Blockchain Synergy',
        excerpt: 'Learn how AI and blockchain complement each other. Explore use cases where these technologies create powerful solutions together.',
        date: 'Aug 10, 2025',
        author: 'Barbarika Labs',
        readTime: '4 min read',
        image: '/hero.png',
        category: 'Technology',
        seriesSlug: 'ai-blockchain-series',
        content: `<p class="text-gray-400 text-center py-8">Content coming soon...</p>`
      },
      {
        slug: 'real-world-applications',
        title: 'Day 5: Real-World Applications and Case Studies',
        excerpt: 'Examine real companies and projects using AI + Blockchain. From supply chain to healthcare, see how these technologies are changing industries.',
        date: 'Aug 11, 2025',
        author: 'Barbarika Labs',
        readTime: '5 min read',
        image: '/hero.png',
        category: 'Technology',
        seriesSlug: 'ai-blockchain-series',
        content: `<p class="text-gray-400 text-center py-8">Content coming soon...</p>`
      }
    ]
  },
  {
    slug: 'zk-series',
    title: 'ZK',
    description: 'Discover the world of Zero Knowledge proofs and privacy-preserving technologies.',
    category: 'Cryptography',
    image: '/hero.png',
    posts: [
      {
        slug: 'zk-intro',
        title: 'Introduction to Zero Knowledge Proofs',
        excerpt: 'Coming soon - explore the fundamentals of Zero Knowledge technology.',
        date: 'Aug 15, 2025',
        author: 'Barbarika Labs',
        readTime: '3 min read',
        image: '/hero.png',
        category: 'Cryptography',
        seriesSlug: 'zk-series',
        content: `<p class="text-gray-400 text-center py-8">Content coming soon...</p>`
      }
    ]
  },
  {
    slug: 'rwa-series',
    title: 'RWA (Real World Assets)',
    description: 'Explore how Real World Assets are being tokenized and brought onto blockchain networks.',
    category: 'Finance',
    image: '/hero.png',
    posts: [
      {
        slug: 'rwa-intro',
        title: 'Introduction to Real World Asset Tokenization',
        excerpt: 'Discover how blockchain is transforming traditional assets through tokenization.',
        date: 'Aug 20, 2025',
        author: 'Barbarika Labs',
        readTime: '4 min read',
        image: '/hero.png',
        category: 'Finance',
        seriesSlug: 'rwa-series',
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
        seriesSlug: 'rwa-series',
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
        seriesSlug: 'rwa-series',
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
        slug: 'tokenization-made-simple',
        title: 'Tokenization Made Simple: How Real Things Become Digital Assets You Can Own',
        excerpt: 'A beginner-friendly guide to understanding how real-world assets are transformed into digital tokens.',
        date: 'Sep 17, 2025',
        author: 'Prince Bhesaniya',
        readTime: '5 min read',
        image: '/hero.png',
        category: 'Education',
        seriesSlug: 'rwa-series',
        content: `
          <div class="prose prose-invert max-w-4xl mx-auto py-8 px-4">
            <h1 class="text-3xl font-bold text-white mb-6">Tokenization Made Simple</h1>
            <h2 class="text-2xl font-semibold text-gray-300 mb-6">How Real Things Become Digital Assets You Can Own</h2>
            
            <div class="flex items-center text-sm text-gray-400 mb-8">
              <span>By Prince Bhesaniya</span>
              <span class="mx-2">•</span>
              <span>Sep 17, 2025</span>
              <span class="mx-2">•</span>
              <span>5 min read</span>
            </div>

            <div class="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
              <img src="/hero.png" alt="Tokenization Explained" class="w-full h-full object-cover" />
            </div>

            <p class="text-xl text-gray-300 mb-6 leading-relaxed">
              Imagine owning a piece of the Eiffel Tower, a famous painting, or a rare sports car — 
              not just in pictures, but actual ownership you can prove and sell. 
              This is the magic of tokenization, and it's simpler than you think.
            </p>
            
            <h2 class="text-2xl font-bold text-white mt-12 mb-4">What is Tokenization?</h2>
            <p class="mb-6">
              Tokenization turns real-world assets into digital tokens on a blockchain. 
              It's like creating digital certificates of ownership that are secure, easy to transfer, 
              and can be divided into smaller pieces.
            </p>
            
            <div class="bg-gray-800/50 p-6 rounded-xl mb-8">
              <h3 class="text-xl font-semibold text-white mb-3">The Pizza Analogy</h3>
              <p class="mb-4">
                Think of tokenization like cutting a pizza into slices. The whole pizza is the asset, 
                and each slice represents a token. You can own one slice or many, and you can easily 
                trade your slices with others.
              </p>
              <p>
                The best part? The blockchain keeps perfect track of who owns which slices, 
                so there's never any confusion or dispute.
              </p>
            </div>

            <h2 class="text-2xl font-bold text-white mt-12 mb-4">How Tokenization Works</h2>
            <ol class="list-decimal pl-6 space-y-4 mb-6">
              <li>
                <strong>Asset Selection:</strong> Choose a valuable asset (real estate, art, commodities, etc.)
              </li>
              <li>
                <strong>Legal Framework:</strong> Establish ownership rights and legal structure
              </li>
              <li>
                <strong>Valuation:</strong> Determine the asset's market value
              </li>
              <li>
                <strong>Token Creation:</strong> Issue digital tokens representing ownership shares
              </li>
              <li>
                <strong>Distribution:</strong> Sell tokens to investors through compliant channels
              </li>
            </ol>

            <h2 class="text-2xl font-bold text-white mt-12 mb-4">Why It Matters</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div class="p-6 bg-gray-800/50 rounded-xl">
                <h3 class="text-xl font-semibold text-white mb-3">For Investors</h3>
                <ul class="list-disc pl-5 space-y-1 text-gray-300">
                  <li>Access to premium assets with small amounts</li>
                  <li>Diversify across different asset classes</li>
                  <li>24/7 global trading</li>
                  <li>Transparent ownership records</li>
                </ul>
              </div>
              
              <div class="p-6 bg-gray-800/50 rounded-xl">
                <h3 class="text-xl font-semibold text-white mb-3">For Asset Owners</h3>
                <ul class="list-disc pl-5 space-y-1 text-gray-300">
                  <li>Unlock liquidity in illiquid assets</li>
                  <li>Access global capital pools</li>
                  <li>Reduce transaction costs</li>
                  <li>Automate compliance and distributions</li>
                </ul>
              </div>
            </div>

            <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Future is Tokenized</h2>
            <p class="mb-6">
              As blockchain technology matures, we'll see more assets being tokenized, 
              making investing more accessible and markets more efficient. 
              The tokenization revolution is just beginning, and it's open to everyone.
            </p>

            <div class="mt-12 pt-6 border-t border-gray-800">
              <p class="text-sm text-gray-400">
                By Prince Bhesaniya, Blockchain & Fintech Expert
              </p>
              <p class="text-sm text-gray-500 mt-2">
                Published on September 17, 2025
              </p>
            </div>
          </div>
        `
      },
      {
        slug: 'blockchain-rwa-backbone',
        title: 'Why Blockchain is the Backbone of Real World Assets (RWAs)',
        excerpt: 'Understanding the critical role of blockchain technology in enabling the tokenization of real-world assets.',
        date: 'Sep 24, 2025',
        author: 'Prince Bhesaniya',
        readTime: '5 min read',
        image: '/hero.png',
        category: 'Technology',
        seriesSlug: 'rwa-series',
        content: `
          <div class="prose prose-invert max-w-4xl mx-auto py-8 px-4">
            <h1 class="text-3xl font-bold text-white mb-6">Why Blockchain is the Backbone of Real World Assets</h1>
            
            <div class="flex items-center text-sm text-gray-400 mb-8">
              <span>By Prince Bhesaniya</span>
              <span class="mx-2">•</span>
              <span>Sep 24, 2025</span>
              <span class="mx-2">•</span>
              <span>5 min read</span>
            </div>

            <div class="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
              <img src="/hero.png" alt="Blockchain Technology" class="w-full h-full object-cover" />
            </div>

            <p class="text-xl text-gray-300 mb-6 leading-relaxed">
              Blockchain technology is the foundation that makes tokenization of real-world assets possible. 
              Here's why it's the perfect solution for managing ownership of physical assets in the digital world.
            </p>
            
            <h2 class="text-2xl font-bold text-white mt-12 mb-4">1. Immutable Record Keeping</h2>
            <p class="mb-6">
              Blockchain creates an unchangeable record of ownership. Once a transaction is recorded, 
              it cannot be altered or deleted, ensuring the integrity of asset ownership records.
            </p>
            
            <h2 class="text-2xl font-bold text-white mt-12 mb-4">2. Decentralized Verification</h2>
            <p class="mb-6">
              No single entity controls the network. Instead, multiple participants verify transactions, 
              making the system more secure and resistant to fraud.
            </p>

            <h2 class="text-2xl font-bold text-white mt-12 mb-4">3. Smart Contracts</h2>
            <p class="mb-6">
              Self-executing contracts automate processes like dividend payments, rental distributions, 
              and compliance, reducing administrative overhead and human error.
            </p>

            <h2 class="text-2xl font-bold text-white mt-12 mb-4">4. Global Accessibility</h2>
            <p class="mb-6">
              Blockchain operates 24/7 across borders, enabling anyone with an internet connection 
              to participate in global markets.
            </p>

            <h2 class="text-2xl font-bold text-white mt-12 mb-4">5. Fractional Ownership</h2>
            <p class="mb-6">
              Blockchain makes it easy to divide assets into smaller, more affordable units, 
              democratizing access to investment opportunities.
            </p>

            <div class="mt-12 pt-6 border-t border-gray-800">
              <p class="text-sm text-gray-400">
                By Prince Bhesaniya, Blockchain & Fintech Expert
              </p>
              <p class="text-sm text-gray-500 mt-2">
                Published on September 24, 2025
              </p>
            </div>
          </div>
        `
      },
      {
        slug: 'rwa-beginners-guide',
        title: 'Real World Assets: The Beginner\'s Gateway to the Next Financial Evolution',
        excerpt: 'Explore how Real World Assets are transforming finance through blockchain technology and tokenization.',
        date: 'Aug 27, 2025',
        author: 'Prince Bhesaniya',
        readTime: '6 min read',
        image: '/hero.png',
        category: 'Finance',
        seriesSlug: 'rwa-series',
        content: `
          <div class="prose prose-invert max-w-4xl mx-auto py-8 px-4">
            <h1 class="text-3xl font-bold text-white mb-6">Real World Assets: The Beginner's Gateway to the Next Financial Evolution</h1>
            
            <div class="flex items-center text-sm text-gray-400 mb-8">
              <span>By Prince Bhesaniya</span>
              <span class="mx-2">•</span>
              <span>Aug 27, 2025</span>
              <span class="mx-2">•</span>
              <span>6 min read</span>
            </div>

            <div class="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
              <img src="/hero.png" alt="Real World Assets" class="w-full h-full object-cover" />
            </div>

            <p class="text-xl text-gray-300 mb-6 leading-relaxed">
              The financial world is on the cusp of a revolution, and at its heart lies the tokenization of Real World Assets (RWA). 
              This transformative technology is bridging the gap between traditional finance and the blockchain ecosystem, creating 
              unprecedented opportunities for investors and businesses alike.
            </p>
            
            <h2 class="text-2xl font-bold text-white mt-12 mb-4">What Are Real World Assets (RWA)?</h2>
            <p class="mb-6">
              Real World Assets (RWA) represent a broad category of tangible and intangible assets that exist in the physical world 
              and can be represented as digital tokens on a blockchain. These assets include but are not limited to:
            </p>
            
            <ul class="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Real Estate:</strong> Commercial and residential properties, land, and real estate investment trusts (REITs)</li>
              <li><strong>Commodities:</strong> Precious metals, oil, agricultural products, and natural resources</li>
              <li><strong>Financial Instruments:</strong> Bonds, stocks, and other securities</li>
              <li><strong>Intellectual Property:</strong> Patents, copyrights, and trademarks</li>
              <li><strong>Collectibles & Art:</strong> Fine art, rare collectibles, and luxury goods</li>
              <li><strong>Infrastructure:</strong> Roads, bridges, and public utilities</li>
            </ul>

            <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Mechanics of RWA Tokenization</h2>
            <p class="mb-6">
              The process of tokenizing real-world assets involves several key steps:
            </p>
            
            <ol class="list-decimal pl-6 space-y-3 mb-6">
              <li><strong>Asset Selection:</strong> Identifying suitable assets for tokenization based on market demand and regulatory considerations.</li>
              <li><strong>Legal Structuring:</strong> Establishing the legal framework and ownership rights through smart contracts.</li>
              <li><strong>Valuation:</strong> Determining the fair market value of the asset through professional appraisal.</li>
              <li><strong>Token Creation:</strong> Minting digital tokens that represent ownership or shares in the asset.</li>
              <li><strong>Compliance:</strong> Ensuring adherence to relevant securities laws and regulations.</li>
              <li><strong>Distribution:</strong> Offering tokens to investors through private sales or public offerings.</li>
              <li><strong>Secondary Trading:</strong> Enabling trading of tokens on compliant digital asset exchanges.</li>
            </ol>

            <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Transformative Benefits of RWA Tokenization</h2>
            
            <h3 class="text-xl font-semibold text-white mt-8 mb-3">1. Democratization of Investment Opportunities</h3>
            <p class="mb-6">
              Tokenization breaks down traditional barriers to entry, allowing retail investors to participate in asset classes 
              that were previously accessible only to institutional investors or high-net-worth individuals. Fractional ownership 
              enables investors to own portions of high-value assets with relatively small capital outlays.
            </p>

            <h3 class="text-xl font-semibold text-white mt-8 mb-3">2. Enhanced Liquidity</h3>
            <p class="mb-6">
              Traditional assets like real estate are notoriously illiquid. Tokenization creates a secondary market where these 
              assets can be traded 24/7, significantly improving liquidity and price discovery.
            </p>

            <h3 class="text-xl font-semibold text-white mt-8 mb-3">3. Reduced Transaction Costs</h3>
            <p class="mb-6">
              By eliminating intermediaries and automating processes through smart contracts, tokenization reduces transaction 
              costs, settlement times, and administrative overhead.
            </p>

            <h3 class="text-xl font-semibold text-white mt-8 mb-3">4. Global Market Access</h3>
            <p class="mb-6">
              Blockchain's borderless nature enables global investment opportunities, allowing investors from different 
              jurisdictions to participate in previously inaccessible markets.
            </p>

            <h3 class="text-xl font-semibold text-white mt-8 mb-3">5. Increased Transparency and Security</h3>
            <p class="mb-6">
              The immutable nature of blockchain ensures transparent record-keeping, while smart contracts automate compliance 
              and distribution of returns, reducing the potential for fraud and errors.
            </p>

            <h2 class="text-2xl font-bold text-white mt-12 mb-4">Real-World Applications and Use Cases</h2>
            
            <h3 class="text-xl font-semibold text-white mt-8 mb-3">1. Real Estate Tokenization</h3>
            <p class="mb-6">
              The real estate sector has emerged as a prime candidate for tokenization. Platforms are enabling fractional ownership 
              of commercial and residential properties, allowing investors to build diversified real estate portfolios with 
              smaller capital commitments.
            </p>

            <h3 class="text-xl font-semibold text-white mt-8 mb-3">2. Private Equity and Venture Capital</h3>
            <p class="mb-6">
              Tokenization is transforming private markets by providing liquidity to traditionally illiquid private company shares 
              and venture capital investments.
            </p>

            <h3 class="text-xl font-semibold text-white mt-8 mb-3">3. Fine Art and Collectibles</h3>
            <p class="mb-6">
              High-value art and collectibles are being tokenized, enabling broader ownership and creating new investment 
              opportunities in the art market.
            </p>

            <h3 class="text-xl font-semibold text-white mt-8 mb-3">4. Commodities and Natural Resources</h3>
            <p class="mb-6">
              From precious metals to agricultural products, tokenization is making commodity markets more accessible and efficient.
            </p>

            <h2 class="text-2xl font-bold text-white mt-12 mb-4">Regulatory Landscape and Challenges</h2>
            <p class="mb-6">
              While the potential of RWA tokenization is immense, several challenges remain:
            </p>
            
            <ul class="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Regulatory Uncertainty:</strong> The regulatory framework for tokenized assets is still evolving across jurisdictions.</li>
              <li><strong>Legal Recognition:</strong> Questions remain about the legal standing of tokenized ownership in many regions.</li>
              <li><strong>Market Infrastructure:</strong> The ecosystem for secondary trading of tokenized assets is still developing.</li>
              <li><strong>Standardization:</strong> Lack of industry-wide standards for tokenization processes and smart contracts.</li>
              <li><strong>Investor Education:</strong> Need for greater awareness and understanding of tokenized assets among investors.</li>
            </ul>

            <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Future of RWA Tokenization</h2>
            <p class="mb-6">
              As blockchain technology matures and regulatory clarity improves, we can expect to see exponential growth in the 
              tokenization of real-world assets. Industry experts predict that trillions of dollars worth of assets will be 
              tokenized in the coming decade, fundamentally transforming global financial markets.
            </p>

            <p class="mb-6">
              The convergence of traditional finance with blockchain technology through RWA tokenization represents a paradigm 
              shift in how we think about asset ownership, investment, and value exchange. This evolution promises to create 
              more inclusive, efficient, and transparent financial markets for participants worldwide.
            </p>

            <div class="mt-12 pt-6 border-t border-gray-800">
              <p class="text-sm text-gray-400">
                By Prince Bhesaniya, Blockchain & Fintech Expert
              </p>
              <p class="text-sm text-gray-500 mt-2">
                Published on August 27, 2025
              </p>
            </div>
          </div>
        `
      }
    ]
  }
];

const allBlogPosts = blogSeries.flatMap(series => series.posts);

const Blog = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedSeries, setSelectedSeries] = useState<BlogSeries | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const closeModal = () => {
    setSelectedPost(null);
    setSelectedSeries(null);
    document.body.style.overflow = 'auto';
    // Update URL without triggering a page reload
    router.push('/company-file/blog', { scroll: false });
  };

  // Filter blog posts based on search query and selected series
  const filteredPosts = useMemo(() => {
    let posts = allBlogPosts;
    
    // Filter by series if one is selected
    if (selectedSeries) {
      posts = selectedSeries.posts;
    }
    
    // Apply search filter if there's a query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter((post: BlogPost) => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
      );
    }
    
    return posts;
  }, [searchQuery, selectedSeries]);

  // Handle URL hash changes for direct linking to posts
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const post = allBlogPosts.find((p: BlogPost) => p.slug === hash);
        if (post) {
          setSelectedPost(post);
          document.body.style.overflow = 'hidden';
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
    // Update URL with post slug
    router.push(`/company-file/blog#${post.slug}`, { scroll: false });
  };

  const openSeries = (series: BlogSeries) => {
    setSelectedSeries(series);
    document.body.style.overflow = 'hidden';
    // Update URL with series slug
    router.push(`/company-file/blog#${series.slug}`, { scroll: false });
  };

  const backToMain = () => {
    setSelectedSeries(null);
    setSelectedPost(null);
    document.body.style.overflow = 'auto';
    router.push('/company-file/blog', { scroll: false });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200 relative">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black/90 to-red-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-red-500/5" />
      </div>
      <Navbar />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="relative">
        <div className="w-full">
          <div className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 xl:px-24">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight px-2" style={{
                fontFamily: 'var(--font-tourney), sans-serif',
                background: 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                lineHeight: '1.2',
                wordBreak: 'keep-all',
                hyphens: 'manual',
                overflowWrap: 'break-word',
                whiteSpace: 'normal'
              }}>
                Insights & Updates
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto mb-8 sm:mb-12 px-2 sm:px-4" style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                lineHeight: '1.6'
              }}>
                Discover the latest trends, insights, and stories from our team of experts.
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <section className="relative py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 pr-12 rounded-full bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" />
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </section>

        {/* Blog Content */}
        <section className="relative py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16 min-h-0">
          {selectedSeries ? (
            /* Series View - Show posts within selected series */
            <div>
              {/* Back Button */}
              <button
                onClick={backToMain}
                className="mb-8 flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog Series
              </button>

              {/* Series Header */}
              <div className="mb-10 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{
                  fontFamily: 'var(--font-tourney), sans-serif',
                  background: selectedSeries.category === 'Technology' ? 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)' :
                    selectedSeries.category === 'Cryptography' ? 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)' :
                      'linear-gradient(90deg, #10B981 0%, #F59E0B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {selectedSeries.title}
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">{selectedSeries.description}</p>
              </div>

              {/* Posts in Series */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16 min-h-0">
                {selectedSeries.posts.map((post: BlogPost, index: number) => (
                  <div
                    key={index}
                    className={`relative group bg-gray-900/60 rounded-xl overflow-hidden border border-gray-800/60 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/50 hover:scale-[1.02] hover:ring-1 hover:ring-blue-500/30`}
                    onClick={() => openPost(post)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && openPost(post)}
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
                        <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm ${post.category === 'Technology' ? 'text-blue-300 bg-blue-900/50' :
                            post.category === 'Cryptography' ? 'text-purple-300 bg-purple-900/50' :
                              'text-green-300 bg-green-900/50'}`}>
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 relative z-10">
                      <div className="flex items-center text-sm text-gray-400 mb-2">
                        <span className="group-hover:text-blue-300 transition-colors">{post.date}</span>
                        <span className="mx-2">•</span>
                        <span className="text-sm text-gray-300">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 mb-4 group-hover:text-gray-200 transition-colors line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-blue-400 group-hover:text-blue-300 transition-colors">
                        <span>Read more</span>
                        <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Main View - Show series cards */
            <div>
              {filteredPosts.length === 0 ? (
                <div className="text-center py-16">
                  <h3 className="text-xl font-medium text-gray-300">No posts found</h3>
                  <p className="mt-2 text-gray-500">Try adjusting your search or filter to find what you&apos;re looking for.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                  {blogSeries.map((series, index) => (
                    <div
                      key={index}
                      className={`relative group bg-gray-900/60 rounded-xl overflow-hidden border border-gray-800/60 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/50 hover:scale-[1.02] hover:ring-1 hover:ring-blue-500/30`}
                      onClick={() => openSeries(series)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && openSeries(series)}
                    >
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={series.image}
                          alt={series.title}
                          fill
                          className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm ${series.category === 'Technology' ? 'text-blue-300 bg-blue-900/50' :
                              series.category === 'Cryptography' ? 'text-purple-300 bg-purple-900/50' :
                                'text-green-300 bg-green-900/50'}`}>
                            {series.category}
                          </span>
                          <div className="mt-2">
                            <span className="inline-block px-2 py-1 text-xs text-gray-300 bg-gray-800/70 rounded">
                              {series.posts.length} posts
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6 relative z-10">
                        <h3 className={`text-xl font-bold mb-2 transition-colors ${series.category === 'Technology' ? 'text-white group-hover:text-blue-300 bg-gradient-to-r from-blue-300 to-red-300 bg-clip-text text-transparent' :
                            series.category === 'Cryptography' ? 'text-white group-hover:text-purple-300 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent' :
                              'text-white group-hover:text-green-300 bg-gradient-to-r from-green-300 to-yellow-300 bg-clip-text text-transparent'}`}>
                          {series.title}
                        </h3>
                        <p className="text-gray-400 mb-4 group-hover:text-gray-200 transition-colors line-clamp-3">
                          {series.description}
                        </p>
                        <div className={`flex items-center text-sm transition-colors ${series.category === 'Technology' ? 'text-blue-400 group-hover:text-blue-300' :
                            series.category === 'Cryptography' ? 'text-purple-400 group-hover:text-purple-300' :
                              'text-green-400 group-hover:text-green-300'}`}>
                          <span>Explore Series</span>
                          <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </section>

        {/* Blog Post Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
              onClick={closeModal} />
            <div className="relative min-h-screen flex items-start py-16 justify-center p-4 overflow-y-auto">
              <div className="relative w-full max-w-4xl bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-800 overflow-hidden shadow-2xl">
                <div className="absolute top-4 right-4 z-10">
                  <button
                    onClick={closeModal}
                    className="p-2 rounded-full bg-gray-800/80 hover:bg-gray-700/90 transition-colors duration-200 text-gray-300 hover:text-white"
                    aria-label="Close modal"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="relative h-64 md:h-96 w-full">
                  <Image
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    fill
                    className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="flex items-center flex-wrap gap-2 mb-2">
                      <span className="px-3 py-1 text-xs font-semibold text-blue-300 bg-blue-900/50 rounded-full">
                        {selectedPost.category}
                      </span>
                      <span className="text-sm text-gray-300">{selectedPost.date}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-sm text-gray-300">{selectedPost.readTime}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{
                      fontFamily: 'var(--font-tourney), sans-serif',
                      background: 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                    }}>
                      Blog
                    </h1>
                    <h2 className="text-2xl font-bold text-white">{selectedPost.title}</h2>
                  </div>
                </div>

                <div className="p-6 md:p-8 overflow-y-auto max-h-[60vh]">
                  <div
                    className="prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: selectedPost.content }} />

                  <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Written by</p>
                        <p className="font-medium text-white">{selectedPost.author}</p>
                      </div>
                      <div className="flex space-x-4">
                        <button className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/80 transition-colors">
                          <span className="sr-only">Share on Twitter</span>
                          <svg className="w-5 h-5 text-gray-400 hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </button>
                        <button className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/80 transition-colors">
                          <span className="sr-only">Share on LinkedIn</span>
                          <svg className="w-5 h-5 text-gray-400 hover:text-blue-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 relative z-10">
                    <h3 className={`text-xl font-bold mb-2 transition-colors ${selectedSeries?.category === 'Technology' ? 'text-white group-hover:text-blue-300 bg-gradient-to-r from-blue-300 to-red-300 bg-clip-text text-transparent' :
                        selectedSeries?.category === 'Cryptography' ? 'text-white group-hover:text-purple-300 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent' :
                          'text-white group-hover:text-green-300 bg-gradient-to-r from-green-300 to-yellow-300 bg-clip-text text-transparent'}`}>
                      {selectedSeries?.title}
                    </h3>
                    <p className="text-gray-400 mb-4 group-hover:text-gray-200 transition-colors line-clamp-3">
                      {selectedSeries?.description}
                    </p>
                    <div className={`flex items-center text-sm transition-colors ${selectedSeries?.category === 'Technology' ? 'text-blue-400 group-hover:text-blue-300' :
                        selectedSeries?.category === 'Cryptography' ? 'text-purple-400 group-hover:text-purple-300' :
                          'text-green-400 group-hover:text-green-300'}`}>
                      <span>Explore Series</span>
                      <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Blog;