'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';

const blogPosts = [
  {
    slug: 'ai-blockchain',
    title: 'AI + BLOCKCHAIN',
    excerpt: 'Welcome to the Journey! Starting something new can be exciting and sometimes a bit overwhelming. In the coming days, we\'ll break down the fascinating world of Artificial Intelligence (AI) and Blockchain, not only as individual technologies but as a powerful combination shaping the future.',
    date: 'Aug 7, 2025',
    author: 'Barbarika Labs',
    readTime: '2 min read',
    image: '/hero.png',
    content: `<div class="blog-content">
  <h1>Welcome to the Journey!</h1>
  
  <p>Starting something new can be exciting and sometimes a bit overwhelming. In the coming days, we'll break down the fascinating world of <strong>Artificial Intelligence (AI)</strong> and <strong>Blockchain</strong>, not only as individual technologies but as a powerful combination shaping the future.</p>
  
  <p>This first post is all about understanding what our journey will look like and how you, even as a beginner, can confidently explore these topics.</p>

  <h2>What Are We Doing on Day 1?</h2>
  <p>Today, we focus on two things:</p>
  <ul>
    <li><strong>Getting curious:</strong> We'll start by asking, "What is AI?" and "What is Blockchain?" in the simplest terms.</li>
    <li><strong>Planning ahead:</strong> We'll create a roadmap for our blog series, so you always know what's coming next.</li>
  </ul>

  <h2>What is Artificial Intelligence (AI)?</h2>
  <p><strong>Think of AI as teaching computers to learn, adapt, and make decisions just like people do!</strong></p>
  <p>AI is behind everyday things, from online shopping recommendations and virtual assistants (like Siri and Alexa) to self-driving cars. The goal of AI is to help machines recognize patterns and solve problems, making life easier and work faster.</p>
  
  <p><strong>Example:</strong> Imagine Netflix suggesting movies you might like. That's AI, learning your tastes and offering up choices.</p>

  <h2>What is Blockchain?</h2>
  <p><strong>Blockchain is more like a super-secure online notebook.</strong></p>
  <p>But instead of one person controlling it, lots of people share the same copy. Once something is written in this notebook (the "blockchain"), <strong>nobody can change or erase it</strong>. This makes it nearly tamper-proof. It's the technology behind digital coins like Bitcoin, but it's useful far beyond that!</p>
  
  <p><strong>Example:</strong> If you transfer money to a friend using blockchain, the transaction is recorded in a way that <strong>everyone can see, and nobody can secretly change it</strong>.</p>

  <h2>Why Are These Technologies Important Together?</h2>
  <p><strong>AI is great at crunching massive amounts of data, but it needs data that's trustworthy. Blockchain keeps data safe and reliable.</strong></p>
  <p>Together, they can make systems that are both smart and secure. We'll explore this partnership in detail throughout the series!</p>

  <h2>Our Blog Roadmap</h2>
  <p>Here's the journey we'll take over the next <strong>15 days</strong>:</p>
  
  <div class="roadmap-simple">
    <div class="roadmap-phase">
      <h3>Phase 1: Foundation (Days 1-5)</h3>
      <p>Building understanding of AI and Blockchain basics</p>
    </div>
    
    <div class="roadmap-phase">
      <h3>Phase 2: Deep Dive (Days 6-10)</h3>
      <p>Exploring real-world applications and benefits</p>
    </div>
    
    <div class="roadmap-phase">
      <h3>Phase 3: Advanced Topics (Days 11-15)</h3>
      <p>Case studies, expert insights, and final polish</p>
    </div>
  </div>
  
  <p><strong>Full 15-Day Journey:</strong> Introduction → AI Deep Dive → Blockchain Deep Dive → Combination Benefits → Real Examples → Business Impact → Challenges → News → Trends → Q&A → Tips → Case Studies → Expert Opinions → Review → Final Publish</p>

  <h2>Wrap Up</h2>
  <p><strong>Congratulations! You've just taken the first step!</strong></p>
  <p>Keep following as we unravel these technologies together, always using simple words, relatable stories, and real-life examples.</p>
  <p>Got questions about AI or blockchain already? Drop them in the comments, and I'll be sure to include answers in upcoming posts!</p>

  <h2>Next Up</h2>
  <p><strong>Tomorrow, we'll make AI even simpler.</strong> Stay tuned!</p>
</div>`
  },
  {
    slug: 'coming-soon',
    title: 'Coming Soon',
    excerpt: 'More exciting content about AI, Blockchain, and the future of technology is on the way. Stay tuned for our next blog posts!',
    date: 'Coming Soon',
    author: 'Barbarika Labs',
    readTime: 'TBD',
    image: '/hero.png',
    content: 'More content coming soon...'
  }
];

export default function Blog() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="text-white">
      <div className="min-h-screen" style={{ backgroundImage: 'url(/bg-pages/D3-1.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <Navbar onMenuClick={() => setMenuOpen(true)} />
        <main className="w-full flex flex-col items-center justify-start pt-24 sm:pt-28 lg:pt-24 pb-10 px-4 md:px-8 lg:px-16 min-h-[calc(100vh-64px)]">
          {/* Hero Section */}
          <div className="w-full max-w-5xl mx-auto text-center mt-10 mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Signal Over Noise. Insights That Fuel Growth.
            </h1>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              Learn how we scale brands, decode marketing shifts, and build with strategy-first execution.
            </p>
            
            {/* Search Bar */}
            <div className="w-full max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-6 py-4 bg-gray-800/50 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-pink-400 text-lg"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2"/>
                    <path d="M14 14l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Link key={index} href={`/company-file/blog/${post.slug}`}>
                  <div className="bg-gray-800/50 rounded-2xl overflow-hidden border border-white/10 hover:border-pink-400 transition-all cursor-pointer">
                    {/* Image Placeholder */}
                    <div className="w-full h-48 bg-gray-700/50"></div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-pink-400 text-xs font-medium">{post.readTime}</span>
                        <span className="text-white/30">•</span>
                        <span className="text-white/50 text-xs">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{post.title}</h3>
                      <p className="text-white/70 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      <p className="text-white/50 text-xs">{post.author}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
} 