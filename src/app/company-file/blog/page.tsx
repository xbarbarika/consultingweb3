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
    excerpt: 'Welcome to the Journey! Starting something new can be exciting and sometimes a bit overwhelming. In the coming days, we&apos;ll break down the fascinating world of Artificial Intelligence (AI) and Blockchain, not only as individual technologies but as a powerful combination shaping the future.',
    date: 'Aug 7, 2025',
    author: 'Barbarika Labs',
    readTime: '2 min read',
    image: '/hero.png',
    content: `Welcome to the Journey!
Starting something new can be exciting and sometimes a bit overwhelming. In the coming days, we&apos;ll break down the fascinating world of Artificial Intelligence (AI) and Blockchain, not only as individual technologies but as a powerful combination shaping the future. This first post is all about understanding what our journey will look like and how you, even as a beginner, can confidently explore these topics.

What Are We Doing on Day 1?
Today, we focus on two things:

Getting curious: We&apos;ll start by asking, &quot;What is AI?&quot; and &quot;What is Blockchain?&quot; in the simplest terms.
Planning ahead: We&apos;ll create a roadmap for our blog series, so you always know what&apos;s coming next.

What is Artificial Intelligence (AI)?
Think of AI as teaching computers to learn, adapt, and make decisions just like people do! AI is behind everyday things, from online shopping recommendations and virtual assistants (like Siri and Alexa) to self-driving cars. The goal of AI is to help machines recognize patterns and solve problems, making life easier and work faster.

Example:
Imagine Netflix suggesting movies you might like. That&apos;s AI, learning your tastes and offering up choices.

What is Blockchain?
Blockchain is more like a super-secure online notebook. But instead of one person controlling it, lots of people share the same copy. Once something is written in this notebook (the &quot;blockchain&quot;), nobody can change or erase it. This makes it nearly tamper-proof. It&apos;s the technology behind digital coins like Bitcoin, but it&apos;s useful far beyond that!

Example:
If you transfer money to a friend using blockchain, the transaction is recorded in a way that everyone can see, and nobody can secretly change it.

Why Are These Technologies Important Together?
AI is great at crunching massive amounts of data, but it needs data that&apos;s trustworthy. Blockchain keeps data safe and reliable. Together, they can make systems that are both smart and secure. We&apos;ll explore this partnership in detail throughout the series!

Our Blog Roadmap
Here&apos;s the journey we&apos;ll take over the next 15 days:

1. Introduction and Basics (Today)
2. Deep Dive: What is AI?
3. Deep Dive: What is Blockchain?
4. Why Combine AI and Blockchain?
5. Real-World Examples
6. Benefits for Businesses and Society
7. Challenges and Limitations
8. Recent Developments and News
9. Future Trends
10. Q&A or Highlights (Recap)
11. Practical Tips for Beginners
12. Case Studies
13. Interviews or Expert Opinions
14. Writing and Review Day
15. Final Polish and Publish!

Wrap Up
Congratulations you&apos;ve just taken the first step! Keep following as we unravel these technologies together, always using simple words, relatable stories, and real-life examples. Got questions about AI or blockchain already? Drop them in the comments, and I&apos;ll be sure to include answers in upcoming posts!

Next Up:
Tomorrow, we&apos;ll make AI even simpler. Stay tuned!`
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