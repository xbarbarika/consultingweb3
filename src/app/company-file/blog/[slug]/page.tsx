'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Import the blog posts data (you might want to move this to a separate file later)
const blogPosts = [
  {
    slug: 'ai-blockchain',
    title: 'AI + BLOCKCHAIN',
    excerpt: 'Welcome to the Journey! Starting something new can be exciting — and sometimes a bit overwhelming. In the coming days, we\'ll break down the fascinating world of Artificial Intelligence (AI) and Blockchain, not only as individual technologies but as a powerful combination shaping the future.',
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
Think of AI as teaching computers to learn, adapt, and make decisions — just like people do! AI is behind everyday things, from online shopping recommendations and virtual assistants (like Siri and Alexa) to self-driving cars. The goal of AI is to help machines recognize patterns and solve problems, making life easier and work faster.

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

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="text-white">
        <div className="min-h-screen" style={{ backgroundImage: 'url(/bg-pages/D3-1.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          <Navbar />
          <main className="w-full flex flex-col items-center justify-start pt-24 sm:pt-28 lg:pt-24 pb-10 px-4 md:px-8 lg:px-16 min-h-[calc(100vh-64px)]">
            <div className="w-full max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
              <p className="text-lg text-white/70 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
              <Link href="/company-file/blog" className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg transition-colors">
                Back to Blog
              </Link>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="text-white">
      <div className="min-h-screen" style={{ backgroundImage: 'url(/bg-pages/D3-1.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <Navbar />
        <main className="w-full flex flex-col items-center justify-start pt-24 sm:pt-28 lg:pt-24 pb-10 px-4 md:px-8 lg:px-16 min-h-[calc(100vh-64px)]">
          <div className="w-full max-w-4xl mx-auto">
            {/* Back to Blog Link */}
            <div className="mb-8">
              <Link href="/company-file/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                  <path d="M15 10H5M5 10L10 5M5 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back to Blog
              </Link>
            </div>

            {/* Blog Post Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-pink-400 text-sm font-medium">{post.readTime}</span>
                <span className="text-white/30">•</span>
                <span className="text-white/50 text-sm">{post.date}</span>
                <span className="text-white/30">•</span>
                <span className="text-white/50 text-sm">{post.author}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">{post.title}</h1>
              <p className="text-xl text-white/70">{post.excerpt}</p>
            </div>

            {/* Blog Post Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="bg-gray-800/30 rounded-2xl p-8 border border-white/10">
                <div className="whitespace-pre-line text-white/90 leading-relaxed">
                  {post.content}
                </div>
              </div>
            </div>

            {/* Share and Navigation */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-white/70">Share:</span>
                  <button className="text-white/70 hover:text-pink-400 transition-colors">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                    </svg>
                  </button>
                </div>
                <Link href="/company-file/blog" className="text-pink-400 hover:text-pink-300 transition-colors">
                  ← Back to All Posts
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
