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
    excerpt: 'Welcome to the Journey! Starting something new can be exciting and sometimes a bit overwhelming. In the coming days, we\'ll break down the fascinating world of Artificial Intelligence (AI) and Blockchain, not only as individual technologies but as a powerful combination shaping the future.',
    date: 'Aug 7, 2025',
    author: 'Barbarika Labs',
    readTime: '2 min read',
    image: '/hero.png',
    category: 'Technology',
    content: `<div class="blog-content">
  <h1>Welcome to the Journey!</h1>
  
  <p>Starting something new can be exciting and sometimes a bit overwhelming. In the coming days, we&apos;ll break down the fascinating world of <strong>Artificial Intelligence (AI)</strong> and <strong>Blockchain</strong>, not only as individual technologies but as a powerful combination shaping the future.</p>
  
  <p>This first post is all about understanding what our journey will look like and how you, even as a beginner, can confidently explore these topics.</p>

  <h2>What Are We Doing on Day 1?</h2>
  <p>Today, we focus on two things:</p>
  <ul>
    <li><strong>Getting curious:</strong> We&apos;ll start by asking, &quot;What is AI?&quot; and &quot;What is Blockchain?&quot; in the simplest terms.</li>
    <li><strong>Planning ahead:</strong> We&apos;ll create a roadmap for our blog series, so you always know what&apos;s coming next.</li>
  </ul>

  <h2>What is Artificial Intelligence (AI)?</h2>
  <p><strong>Think of AI as teaching computers to learn, adapt, and make decisions just like people do!</strong></p>
  <p>AI is behind everyday things, from online shopping recommendations and virtual assistants (like Siri and Alexa) to self-driving cars. The goal of AI is to help machines recognize patterns and solve problems, making life easier and work faster.</p>
  
  <p><strong>Example:</strong> Imagine Netflix suggesting movies you might like. That&apos;s AI, learning your tastes and offering up choices.</p>

  <h2>What is Blockchain?</h2>
  <p><strong>Blockchain is more like a super-secure online notebook.</strong></p>
  <p>But instead of one person controlling it, lots of people share the same copy. Once something is written in this notebook (the &quot;blockchain&quot;), <strong>nobody can change or erase it</strong>. This makes it nearly tamper-proof. It&apos;s the technology behind digital coins like Bitcoin, but it&apos;s useful far beyond that!</p>
  
  <p><strong>Example:</strong> If you transfer money to a friend using blockchain, the transaction is recorded in a way that <strong>everyone can see, and nobody can secretly change it</strong>.</p>

  <h2>Why Are These Technologies Important Together?</h2>
  <p><strong>AI is great at crunching massive amounts of data, but it needs data that&apos;s trustworthy. Blockchain keeps data safe and reliable.</strong></p>
  <p>Together, they can make systems that are both smart and secure. We&apos;ll explore this partnership in detail throughout the series!</p>

  <h2>Our Blog Roadmap</h2>
  <p>Here&apos;s the journey we&apos;ll take over the next <strong>15 days</strong>:</p>
  
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
  
  <p><strong>Full 15-Day Journey:</strong> Introduction → AI Deep Dive → Blockchain Deep Dive → Combination Benefits → Real Examples → Business Impact → Challenges → News → Trends → Q&amp;A → Tips → Case Studies → Expert Opinions → Review → Final Publish</p>

  <h2>Wrap Up</h2>
  <p><strong>Congratulations! You&apos;ve just taken the first step!</strong></p>
  <p>Keep following as we unravel these technologies together, always using simple words, relatable stories, and real-life examples.</p>
  <p>Got questions about AI or blockchain already? Drop them in the comments, and I&apos;ll be sure to include answers in upcoming posts!</p>

  <h2>Next Up</h2>
  <p><strong>Tomorrow, we&apos;ll make AI even simpler.</strong> Stay tuned!</p>
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

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="w-full flex flex-col items-center justify-start pt-24 sm:pt-28 lg:pt-24 pb-10 px-4 md:px-8 lg:px-16 min-h-[calc(100vh-64px)]">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Blog Post Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/company-file/blog" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="w-full pt-24 sm:pt-28 lg:pt-24 pb-16 px-4 md:px-8 lg:px-16">
        <div className="w-full max-w-6xl mx-auto">
          {/* Back to Blog Link */}
          <div className="mb-8">
            <Link 
              href="/company-file/blog" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path d="M10 8H6M6 8L8 6M6 8L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Blog
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Blog Post Header */}
              <header className="mb-12">
                {/* Metadata */}
                <div className="flex items-center gap-3 mb-6 text-sm text-gray-500">
                  <span className="font-medium">{post.readTime}</span>
                  <span className="text-gray-300">•</span>
                  <span>{post.date}</span>
                  <span className="text-gray-300">•</span>
                  <span>{post.author}</span>
                </div>
                
                {/* Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  {post.title}
                </h1>
                
                {/* Excerpt */}
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl">
                  {post.excerpt}
                </p>
                
                {/* Divider */}
                <div className="w-24 h-px bg-gray-200 mt-8"></div>
              </header>

              {/* Blog Post Content */}
              <article className="prose prose-lg max-w-none">
                <div 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ 
                    __html: post.content || 'Content not available' 
                  }}
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.75'
                  }}
                />
              </article>

              {/* Bottom Section */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                {/* Share Section */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-gray-600 font-medium">Share this article:</span>
                  <div className="flex items-center gap-3">
                    <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-50">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                      </svg>
                    </button>
                    <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-50">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 2c-1.1 0-1.4.36-3.68 1.01C1.95 3.51 1 4.14 1 5.02v4.71c0 .88.95 1.51 1.32 2.01C4.6 15.64 4.9 16 6 16c1.1 0 1.4-.36 3.68-1.01.37-.5 1.32-1.13 1.32-2.01V5.02c0-.88-.95-1.51-1.32-2.01C7.4 1.36 7.1 1 6 1zm4.5 5l-4.5 2.5V6l4.5-2.5v2z"/>
                      </svg>
                    </button>
                    <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-50">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Related Articles */}
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">More from Barbarika Labs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blogPosts.slice(0, 2).map((relatedPost, index) => (
                      <Link 
                        key={index} 
                        href={`/company-file/blog/${relatedPost.slug}`}
                        className="group block"
                      >
                        <article className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-colors">
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                            {relatedPost.excerpt}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>{relatedPost.readTime}</span>
                            <span>•</span>
                            <span>{relatedPost.date}</span>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Tags/Categories */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Categories</h4>
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200">
                      Technology
                    </span>
                    <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full border border-green-200">
                      AI
                    </span>
                    <span className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full border border-purple-200">
                      Blockchain
                    </span>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Share</h4>
                  <div className="space-y-3">
                    <button className="w-full flex items-center gap-3 p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg border border-gray-200 hover:border-blue-200">
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.042a3.289 3.289 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                      <span className="text-sm font-medium">Twitter</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg border border-gray-200 hover:border-blue-200">
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.582 0 0 3.582 0 8c0 3.535 2.286 6.532 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.202-3.645-.888-3.645-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.177 1.322-.266 2.002-.27.68.004 1.364.093 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.932-.01 2.195 0 .215.144.463.55.385C13.714 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8z"/>
                      </svg>
                      <span className="text-sm font-medium">GitHub</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg border border-gray-200 hover:border-blue-200">
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.16.55-.35 0-.17-.01-.36-.01-.52 0-.31.13-.59.13-.59.71-1.84 1.66-2.22 1.66-2.22.27-.69-.27-.69-.27-.69l-.45 1.49c0 0 .27.58 1.23.58 0 0 .67 0 1.08-.06.42-.06 1.04-.17 1.04-.17.27 0 .53.09.53.67 0 .34-.01.61-.01.69 0 .07.05.15.15.15.21 0 .55-.12.55-.12.35 0 .69.18.69.18.34.31.53.77.53 1.3 0 .99-.55 1.52-.55 1.52-.27.32-.27.65-.27.98 0 .88.44 1.34.44 1.34.22.22.39.48.39.77 0 .56-.29 1.08-.29 1.08-.19.35-.1.65-.1.65.13.28.53.77.53.77.92 1.65 2.06 2.07 2.06 2.07.57.39 1.21.59 1.21.59.19.07.38-.11.38-.11.15-.08.27-.35.27-.35.08-.18.13-.36.13-.36.08-.33-.44-.61-.44-.61zM5.05 10.53c-.03.31-.32.65-.32.65.08.08.27.08.27.08l.27-.02c-.12-.18-.22-.35-.3-.52 0-.01-.01-.02-.01-.03-.01-.04-.22-.15-.22-.15s.01.06.01.09zM6.1 12.38c-.08.08-.27.11-.42.09 0-.01-.01-.02-.01-.02-.31-.12.42-.44.42-.44.01.01.01.02.01.03.09.13.09.28.01.34z"/>
                      </svg>
                      <span className="text-sm font-medium">LinkedIn</span>
                    </button>
                  </div>
                </div>

                {/* Author Info */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">About the Author</h4>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="text-blue-600">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-1">{post.author}</h5>
                    <p className="text-sm text-gray-600">Technology Partner for Web, SaaS, Blockchain, and AI Innovation</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
