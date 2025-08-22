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
    category: 'Technology',
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
    category: 'Technology',
    content: 'More content coming soon...'
  }
];

export default function Blog() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="text-white min-h-screen">
      {/* Background with Lighter Gradient and More Visible Wave Textures */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-800 via-purple-800/30 to-slate-900 -z-10">
        {/* More Visible Abstract Wave Textures */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.2)_0%,transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.2)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 left-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15)_0%,transparent_50%)]"></div>
        </div>
      </div>

      <Navbar onMenuClick={() => setMenuOpen(true)} />
      
      <main className="relative z-10 pt-24 sm:pt-28 lg:pt-24 pb-16 px-4 md:px-8 lg:px-16 min-h-screen">
        {/* Hero Section */}
        <div className="w-full max-w-6xl mx-auto text-center mb-16">
          <div className="mb-12">
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)'
              }}
            >
              Signal Over Noise
            </h1>
            <p 
              className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
              style={{
                fontFamily: 'var(--font-numans), sans-serif',
                textShadow: '0 2px 4px rgba(0,0,0,0.7)'
              }}
            >
              Insights That Fuel Growth. Learn how we scale brands, decode marketing shifts, and build with strategy-first execution.
            </p>
          </div>
          
          {/* Enhanced Futuristic Search Bar */}
          <div className="w-full max-w-2xl mx-auto mb-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/40 via-purple-500/40 to-blue-500/40 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-90 group-hover:opacity-100"></div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search insights, strategies, and innovations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-8 py-6 bg-gray-800/90 backdrop-blur-xl border border-gray-600/50 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:border-red-400/80 focus:ring-2 focus:ring-red-400/40 text-lg transition-all duration-300"
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), 0 8px 32px rgba(0,0,0,0.5)'
                  }}
                />
                <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="w-full max-w-7xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Link key={index} href={`/company-file/blog/${post.slug}`}>
                  <article className="group relative">
                    {/* Enhanced Glassmorphism Card with More Visible Neon Accent */}
                    <div className="relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
                      {/* More Visible Neon Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Enhanced Main Card - Darker Background */}
                      <div 
                        className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden transition-all duration-500 group-hover:bg-gray-800/90 group-hover:border-gray-600/70"
                        style={{
                          boxShadow: '0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)'
                        }}
                      >
                        {/* Enhanced Image Placeholder with Darker Gradient Overlay */}
                        <div className="relative w-full h-48 bg-gradient-to-br from-gray-800 via-purple-900/80 to-gray-900 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                          {/* More Visible Pattern Overlay */}
                          <div className="absolute inset-0 opacity-60">
                            <div className="absolute top-4 left-4 w-16 h-16 border border-gray-500/40 rounded-full"></div>
                            <div className="absolute top-20 right-6 w-8 h-8 border border-gray-500/40 rounded-full"></div>
                            <div className="absolute bottom-8 left-1/2 w-12 h-12 border border-gray-500/40 rounded-full"></div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-8">
                          {/* Enhanced Metadata Row */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <span 
                                className="px-3 py-1 text-xs font-semibold rounded-full bg-red-500/40 text-red-200 border border-red-500/60"
                                style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                              >
                                {post.category}
                              </span>
                              <span className="text-gray-400 text-xs">•</span>
                              <span 
                                className="text-gray-300 text-xs font-medium"
                                style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                              >
                                {post.readTime}
                              </span>
                            </div>
                            <span 
                              className="text-gray-400 text-xs"
                              style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                            >
                              {post.date}
                            </span>
                          </div>
                          
                          {/* Enhanced Title */}
                          <h3 
                            className="text-xl font-bold mb-3 text-white group-hover:text-white/95 transition-colors duration-300 leading-tight"
                            style={{
                              fontFamily: 'var(--font-dm-sans), sans-serif',
                              textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                            }}
                          >
                            {post.title}
                          </h3>
                          
                          {/* Enhanced Excerpt */}
                          <p 
                            className="text-gray-200 text-sm mb-6 leading-relaxed line-clamp-3"
                            style={{
                              fontFamily: 'var(--font-numans), sans-serif'
                            }}
                          >
                            {post.excerpt}
                          </p>
                          
                          {/* Enhanced Author and Read More */}
                          <div className="flex items-center justify-between">
                            <span 
                              className="text-gray-300 text-xs font-medium"
                              style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                            >
                              {post.author}
                            </span>
                            
                            {/* Enhanced Read More Button */}
                            <div className="flex items-center gap-2 text-red-300 group-hover:text-red-200 transition-colors duration-300">
                              <span 
                                className="text-sm font-semibold"
                                style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                              >
                                Read More
                              </span>
                              <svg 
                                width="16" 
                                height="16" 
                                fill="none" 
                                viewBox="0 0 16 16"
                                className="transform group-hover:translate-x-1 transition-transform duration-300"
                              >
                                <path 
                                  d="M6 12l4-4-4-4" 
                                  stroke="currentColor" 
                                  strokeWidth="2" 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Enhanced Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/15 via-purple-500/15 to-blue-500/15 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-110"></div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            /* Enhanced No Results State */
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/15 backdrop-blur-xl border border-white/25 flex items-center justify-center">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-white/60">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                  <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 
                className="text-xl font-semibold text-white/90 mb-2"
                style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
              >
                No results found
              </h3>
              <p 
                className="text-white/70"
                style={{ fontFamily: 'var(--font-numans), sans-serif' }}
              >
                Try adjusting your search terms or browse all posts
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
} 