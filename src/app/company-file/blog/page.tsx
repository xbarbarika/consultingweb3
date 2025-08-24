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
}

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

        <h2 class="text-2xl font-bold text-white mt-10 mb-4 tracking-tight">Why Are These Technologies Important Together?</h2>
        <p class="text-gray-200 leading-relaxed">AI is great at crunching massive amounts of data, but it needs data that's trustworthy. Blockchain keeps data safe and reliable.</p>
        <p class="text-gray-200 leading-relaxed">Together, they can make systems that are both smart and secure. We'll explore this partnership in detail throughout the series!</p>

        <h2 class="text-2xl font-bold text-white mt-10 mb-4 tracking-tight">Our Blog Roadmap</h2>
        <p class="text-gray-200 leading-relaxed">Here's the journey we'll take over the next 15 days:</p>
        
        <div class="space-y-6 mt-8">
          <div class="bg-gray-900/40 p-5 rounded-xl border border-gray-800/50">
            <h3 class="text-xl font-semibold text-blue-100 mb-2">Phase 1: Foundation (Days 1-5)</h3>
            <p class="text-gray-300 m-0">Building understanding of AI and Blockchain basics</p>
          </div>
          
          <div class="bg-gray-900/40 p-5 rounded-xl border border-gray-800/50">
            <h3 class="text-xl font-semibold text-blue-100 mb-2">Phase 2: Deep Dive (Days 6-10)</h3>
            <p class="text-gray-300 m-0">Exploring real-world applications and benefits</p>
          </div>
          
          <div class="bg-gray-900/40 p-5 rounded-xl border border-gray-800/50">
            <h3 class="text-xl font-semibold text-blue-100 mb-2">Phase 3: Advanced Topics (Days 11-15)</h3>
            <p class="text-gray-300 m-0">Case studies, expert insights, and final polish</p>
          </div>
        </div>

        <div class="bg-gray-900/60 p-6 rounded-xl my-8 border border-gray-800/60 shadow-lg backdrop-blur-sm">
          <h3 class="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">Full 15-Day Journey:</h3>
          <p class="text-gray-200 text-sm md:text-base overflow-x-auto py-2">
            Introduction → AI Deep Dive → Blockchain Deep Dive → Combination Benefits → Real Examples → Business Impact → Challenges → News → Trends → Q&A → Tips → Case Studies → Expert Opinions → Review → Final Publish
          </p>
        </div>

        <h2 class="text-2xl font-bold text-white mt-14 mb-5 tracking-tight bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">Wrap Up</h2>
        <p class="text-gray-200 leading-relaxed">Congratulations! You've just taken the first step!</p>
        <p class="text-gray-200 leading-relaxed">Keep following as we unravel these technologies together, always using simple words, relatable stories, and real-life examples.</p>
        <p class="mt-5 text-gray-200 leading-relaxed">Got questions about AI or blockchain already? Drop them in the comments, and I'll be sure to include answers in upcoming posts!</p>

        <div class="mt-14 pt-6 border-t border-gray-800/60">
          <p class="text-gray-300 m-0">
            <span class="font-medium text-blue-300">Next Up:</span> 
            <span class="text-gray-100">Tomorrow, we'll make AI even simpler. Stay tuned!</span>
          </p>
        </div>
      </article>
    `
  },
  {
    slug: 'coming-soon',
    title: 'Coming Soon',
    excerpt: 'Stay tuned for more exciting content!',
    date: 'Coming soon',
    author: 'Barbarika Labs',
    readTime: '1 min read',
    image: '/hero.png',
    category: 'Announcement',
    content: "<p>New content coming soon!</p>"
  }
];

export default function Blog() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const closeModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'auto';
    // Update URL without triggering a page reload
    router.push('/company-file/blog', { scroll: false });
  };

  // Filter blog posts based on search query
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return blogPosts;
    const query = searchQuery.toLowerCase();
    return blogPosts.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Handle URL hash changes for direct linking to posts
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const post = blogPosts.find(p => p.slug === hash);
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

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200 relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black/90 to-red-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-red-500/5" />
      </div>
      <Navbar />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      {/* Blog Header */}
      <div className="w-full relative overflow-hidden">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black/90 to-red-900/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-red-500/5" />
        </div>
        
        <section className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 xl:px-24">
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
        </section>
      </div>

      {/* Search Bar */}
      <section className="relative py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-3 pr-12 rounded-full bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
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

      {/* Blog Posts Grid */}
      <section className="relative py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-300">No posts found</h3>
            <p className="mt-2 text-gray-500">Try adjusting your search or filter to find what you&apos;re looking for.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {filteredPosts.map((post, index) => (
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
                    className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105 duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-300 bg-blue-900/50 rounded-full backdrop-blur-sm">
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
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors bg-gradient-to-r from-blue-300 to-red-300 bg-clip-text text-transparent">
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
        )}
      </section>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300" 
            onClick={closeModal}
          />
          <div className="relative min-h-screen flex items-center justify-center p-4">
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
                  className="object-cover"
                />
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
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />
                
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
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}