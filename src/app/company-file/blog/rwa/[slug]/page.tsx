'use client';
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
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
  }
];

export default function BlogPost() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [post, setPost] = useState<BlogPost | null>(null);
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    if (params.slug) {
      const foundPost = rwaPosts.find(p => p.slug === params.slug);
      if (foundPost) {
        setPost(foundPost);
      } else {
        router.push('/company-file/blog/rwa');
      }
    }
  }, [params.slug, router]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-400 mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200 relative">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black/90 to-red-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-red-500/5" />
      </div>
      
      <Navbar onMenuClick={() => setMenuOpen(true)} />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <div className="relative">
        {/* Hero Section */}
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex items-center flex-wrap gap-2 mb-2">
              <span className="px-3 py-1 text-xs font-semibold text-green-300 bg-green-900/50 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-gray-300">{post.date}</span>
              <span className="text-gray-500">•</span>
              <span className="text-sm text-gray-300">{post.readTime}</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4" style={{
              fontFamily: 'var(--font-tourney), sans-serif',
              background: 'linear-gradient(90deg, #10B981 0%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}>
              {post.title}
            </h1>
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

          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Written by</p>
                <p className="font-medium text-white">{post.author}</p>
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
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
