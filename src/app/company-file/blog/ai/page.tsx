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

const aiPosts: BlogPost[] = [
  {
    slug: 'ai-blockchain-intersection',
    title: 'The Intersection of AI and Blockchain: A New Paradigm',
    excerpt: 'Exploring how artificial intelligence and blockchain technology are converging to create revolutionary applications.',
    date: 'Aug 25, 2025',
    author: 'Barbarika Labs',
    readTime: '6 min read',
    image: '/hero.png',
    category: 'Technology',
    content: `
      <div class="prose prose-invert max-w-4xl mx-auto py-8 px-4">
        <h1 class="text-3xl font-bold text-white mb-6">The Intersection of AI and Blockchain: A New Paradigm</h1>
        
        <div class="flex items-center text-sm text-gray-400 mb-8">
          <span>By Barbarika Labs</span>
          <span class="mx-2">•</span>
          <span>Aug 25, 2025</span>
          <span class="mx-2">•</span>
          <span>6 min read</span>
        </div>

        <div class="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
          <img src="/hero.png" alt="AI and Blockchain" class="w-full h-full object-cover" />
        </div>

        <p class="text-xl text-gray-300 mb-6 leading-relaxed">
          The convergence of artificial intelligence and blockchain technology is creating unprecedented opportunities 
          for innovation across industries. This intersection represents a fundamental shift in how we approach 
          data, computation, and trust in the digital age.
        </p>
        
        <h2 class="text-2xl font-bold text-white mt-12 mb-4">AI-Powered Smart Contracts</h2>
        <p class="mb-6">
          Smart contracts are evolving beyond simple if-then logic to incorporate sophisticated AI algorithms 
          that can make complex decisions based on real-time data analysis and machine learning models.
        </p>
        
        <h2 class="text-2xl font-bold text-white mt-12 mb-4">Decentralized AI Networks</h2>
        <p class="mb-6">
          Blockchain enables the creation of decentralized AI networks where computational resources, 
          data, and models can be shared and monetized in a trustless environment.
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">Key Applications</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="p-6 bg-gray-800/50 rounded-xl">
            <h3 class="text-xl font-semibold text-white mb-3">DeFi Optimization</h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-300">
              <li>AI-driven yield optimization</li>
              <li>Risk assessment and management</li>
              <li>Automated trading strategies</li>
            </ul>
          </div>
          
          <div class="p-6 bg-gray-800/50 rounded-xl">
            <h3 class="text-xl font-semibold text-white mb-3">Data Marketplaces</h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-300">
              <li>Decentralized data sharing</li>
              <li>AI model training</li>
              <li>Privacy-preserving computation</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Future</h2>
        <p class="mb-6">
          As AI and blockchain technologies mature, we'll see the emergence of autonomous organizations 
          and systems that can operate independently while maintaining transparency and trust.
        </p>

        <div class="mt-12 pt-6 border-t border-gray-800">
          <p class="text-sm text-gray-400">
            By Barbarika Labs
          </p>
          <p class="text-sm text-gray-500 mt-2">
            Published on August 25, 2025
          </p>
        </div>
      </div>
    `
  },
  {
    slug: 'ai-decentralized-computing',
    title: 'Decentralized Computing: The Future of AI Infrastructure',
    excerpt: 'How blockchain is revolutionizing AI infrastructure through decentralized computing networks.',
    date: 'Sep 5, 2025',
    author: 'Prince Bhesaniya',
    readTime: '7 min read',
    image: '/hero.png',
    category: 'Technology',
    content: `
      <div class="prose prose-invert max-w-4xl mx-auto py-8 px-4">
        <h1 class="text-3xl font-bold text-white mb-6">Decentralized Computing: The Future of AI Infrastructure</h1>
        
        <div class="flex items-center text-sm text-gray-400 mb-8">
          <span>By Prince Bhesaniya</span>
          <span class="mx-2">•</span>
          <span>Sep 5, 2025</span>
          <span class="mx-2">•</span>
          <span>7 min read</span>
        </div>

        <div class="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
          <img src="/hero.png" alt="Decentralized Computing" class="w-full h-full object-cover" />
        </div>

        <p class="text-xl text-gray-300 mb-6 leading-relaxed">
          Traditional AI infrastructure is centralized, expensive, and controlled by a few major tech companies. 
          Blockchain technology is changing this paradigm by enabling decentralized computing networks 
          that democratize access to AI resources.
        </p>
        
        <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Problem with Centralized AI</h2>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li>High computational costs</li>
          <li>Limited access to resources</li>
          <li>Data privacy concerns</li>
          <li>Single points of failure</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">Decentralized Solutions</h2>
        <p class="mb-6">
          Blockchain networks enable individuals and organizations to contribute computational resources 
          and earn rewards while providing AI services to the network.
        </p>
        
        <h3 class="text-xl font-semibold text-white mt-8 mb-3">Key Benefits</h3>
        <ol class="list-decimal pl-6 space-y-3 mb-6">
          <li>Reduced costs through resource sharing</li>
          <li>Increased accessibility for smaller organizations</li>
          <li>Enhanced privacy through distributed computation</li>
          <li>Improved reliability through redundancy</li>
        </ol>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">Real-World Applications</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="p-6 bg-gray-800/50 rounded-xl">
            <h3 class="text-xl font-semibold text-white mb-3">Distributed Training</h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-300">
              <li>Federated learning networks</li>
              <li>Privacy-preserving model training</li>
              <li>Collaborative AI development</li>
            </ul>
          </div>
          
          <div class="p-6 bg-gray-800/50 rounded-xl">
            <h3 class="text-xl font-semibold text-white mb-3">Inference Services</h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-300">
              <li>On-demand AI processing</li>
              <li>Load balancing across networks</li>
              <li>Cost-effective AI deployment</li>
            </ul>
          </div>
        </div>

        <p class="mb-6">
          Decentralized computing represents the future of AI infrastructure, making artificial intelligence 
          more accessible, affordable, and democratic for everyone.
        </p>

        <div class="mt-12 pt-6 border-t border-gray-800">
          <p class="text-sm text-gray-400">
            By Prince Bhesaniya
          </p>
          <p class="text-sm text-gray-500 mt-2">
            Published on September 5, 2025
          </p>
        </div>
      </div>
    `
  },
  {
    slug: 'ai-data-privacy',
    title: 'AI and Data Privacy: Blockchain Solutions for the Digital Age',
    excerpt: 'How blockchain technology is solving the critical challenge of data privacy in AI applications.',
    date: 'Sep 12, 2025',
    author: 'Barbarika Labs',
    readTime: '5 min read',
    image: '/hero.png',
    category: 'Technology',
    content: `
      <div class="prose prose-invert max-w-4xl mx-auto py-8 px-4">
        <h1 class="text-3xl font-bold text-white mb-6">AI and Data Privacy: Blockchain Solutions for the Digital Age</h1>
        
        <div class="flex items-center text-sm text-gray-400 mb-8">
          <span>By Barbarika Labs</span>
          <span class="mx-2">•</span>
          <span>Sep 12, 2025</span>
          <span class="mx-2">•</span>
          <span>5 min read</span>
        </div>

        <div class="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
          <img src="/hero.png" alt="AI Data Privacy" class="w-full h-full object-cover" />
        </div>

        <p class="text-xl text-gray-300 mb-6 leading-relaxed">
          As AI systems become more sophisticated, the need for robust data privacy solutions has never been greater. 
          Blockchain technology offers innovative approaches to protect user data while enabling AI innovation.
        </p>
        
        <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Privacy Challenge</h2>
        <p class="mb-6">
          Traditional AI systems require vast amounts of data, often compromising user privacy. 
          Centralized data storage creates single points of failure and security vulnerabilities.
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">Blockchain Privacy Solutions</h2>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Zero-Knowledge Proofs:</strong> Verify computations without revealing data</li>
          <li><strong>Homomorphic Encryption:</strong> Process encrypted data directly</li>
          <li><strong>Federated Learning:</strong> Train models on distributed data</li>
          <li><strong>Decentralized Identity:</strong> User-controlled data sharing</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">Real-World Applications</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="p-6 bg-gray-800/50 rounded-xl">
            <h3 class="text-xl font-semibold text-white mb-3">Healthcare AI</h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-300">
              <li>Secure medical data analysis</li>
              <li>Privacy-preserving diagnostics</li>
              <li>Patient-controlled data sharing</li>
            </ul>
          </div>
          
          <div class="p-6 bg-gray-800/50 rounded-xl">
            <h3 class="text-xl font-semibold text-white mb-3">Financial Services</h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-300">
              <li>Fraud detection without data exposure</li>
              <li>Credit scoring with privacy</li>
              <li>Secure transaction analysis</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Future of Privacy-Preserving AI</h2>
        <p class="mb-6">
          Blockchain-enabled privacy solutions will become the standard for AI applications, 
          ensuring that innovation doesn't come at the cost of user privacy and security.
        </p>

        <div class="mt-12 pt-6 border-t border-gray-800">
          <p class="text-sm text-gray-400">
            By Barbarika Labs
          </p>
          <p class="text-sm text-gray-500 mt-2">
            Published on September 12, 2025
          </p>
        </div>
      </div>
    `
  }
];

export default function AIBlogSection() {
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
                AI & Blockchain
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto mb-8 sm:mb-12 px-2 sm:px-4" style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                lineHeight: '1.6'
              }}>
                Exploring the convergence of artificial intelligence and blockchain technology.
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
            {aiPosts.map((post, index) => (
              <div
                key={index}
                className="relative group bg-gray-900/60 rounded-xl overflow-hidden border border-gray-800/60 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/50 hover:scale-[1.02] hover:ring-1 hover:ring-blue-500/30"
                onClick={() => router.push(`/company-file/blog/ai/${post.slug}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && router.push(`/company-file/blog/ai/${post.slug}`)}
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
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm text-blue-300 bg-blue-900/50">
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
        </section>
        
        <Footer />
      </div>
    </div>
  );
}
