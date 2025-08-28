'use client';
import React, { useState, useMemo } from 'react';
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
        content: 'Content for RWA intro post...'
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
        content: 'Content for treasury bond post...'
      }
    ]
  },
  {
    slug: 'ai-series',
    title: 'AI & Blockchain',
    description: 'Exploring the convergence of artificial intelligence and blockchain technology.',
    category: 'Technology',
    image: '/hero.png',
    posts: [
      {
        slug: 'ai-blockchain-intro',
        title: 'Day 1: Introduction to AI + Blockchain',
        excerpt: 'Welcome to the Journey! Starting something new can be exciting and sometimes a bit overwhelming.',
        date: 'Aug 7, 2025',
        author: 'Barbarika Labs',
        readTime: '2 min read',
        image: '/hero.png',
        category: 'Technology',
        seriesSlug: 'ai-series',
        content: 'Content for AI intro post...'
      },
      {
        slug: 'ai-deep-dive',
        title: 'Day 2: WHAT IS AI?',
        excerpt: 'What is AI? Hey there, curious mind! Today, let\'s explore Artificial Intelligence (AI) using a warm, natural story.',
        date: 'Aug 8, 2025',
        author: 'Barbarika Labs',
        readTime: '5 min read',
        image: '/hero.png',
        category: 'Technology',
        seriesSlug: 'ai-series',
        content: 'Content for AI deep dive post...'
      }
    ]
  },
  {
    slug: 'zk-series',
    title: 'Zero-Knowledge Proofs',
    description: 'Exploring the cryptographic foundations of privacy and scalability in blockchain technology.',
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
        content: 'Content for ZK intro post...'
      }
    ]
  }
];

const Blog = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter blog series based on search query
  const filteredSeries = useMemo(() => {
    let series = blogSeries;
    
    // Apply search filter if there's a query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      series = series.filter((s: BlogSeries) => 
        s.title.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query) ||
        s.category.toLowerCase().includes(query) ||
        s.posts.some((post: BlogPost) => 
        post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query)
        )
      );
    }
    
    return series;
  }, [searchQuery]);

  const openSeries = (series: BlogSeries) => {
    // Navigate to the appropriate section page
    if (series.slug === 'rwa-series') {
      router.push('/company-file/blog/rwa');
    } else if (series.slug === 'ai-series') {
      router.push('/company-file/blog/ai');
    } else if (series.slug === 'zk-series') {
      router.push('/company-file/blog/zk');
    }
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
          <div className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 xl:px-24">
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
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto sm:mb-0 px-2 sm:px-4" style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                lineHeight: '1.6'
              }}>
                Discover the latest trends, insights, and stories from our team of experts.
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
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
        <section className="relative py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
            <div>
            {filteredSeries.length === 0 ? (
                <div className="text-center py-16">
                <h3 className="text-xl font-medium text-gray-300">No series found</h3>
                <p className="mt-2 text-gray-500">Try adjusting your search to find what you&apos;re looking for.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {filteredSeries.map((series, index) => (
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
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Blog;
