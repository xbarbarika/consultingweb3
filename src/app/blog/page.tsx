'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';

const blogPosts = [
  {
    title: 'Title',
    excerpt: 'Short excerpt',
    date: '20.06.2026',
    author: 'Prince Besaniya',
    image: '/hero.png'
  },
  {
    title: 'Title',
    excerpt: 'Short excerpt',
    date: '20.06.2026',
    author: 'Prince Besaniya',
    image: '/hero.png'
  },
  {
    title: 'Title',
    excerpt: 'Short excerpt',
    date: '20.06.2026',
    author: 'Prince Besaniya',
    image: '/hero.png'
  },
  {
    title: 'Title',
    excerpt: 'Short excerpt',
    date: '20.06.2026',
    author: 'Prince Besaniya',
    image: '/hero.png'
  },
  {
    title: 'Title',
    excerpt: 'Short excerpt',
    date: '20.06.2026',
    author: 'Prince Besaniya',
    image: '/hero.png'
  },
  {
    title: 'Title',
    excerpt: 'Short excerpt',
    date: '20.06.2026',
    author: 'Prince Besaniya',
    image: '/hero.png'
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
                <div key={index} className="bg-gray-800/50 rounded-2xl overflow-hidden border border-white/10 hover:border-pink-400 transition-all cursor-pointer">
                  {/* Image Placeholder */}
                  <div className="w-full h-48 bg-gray-700/50"></div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">{post.title}</h3>
                    <p className="text-white/70 text-sm mb-4">{post.excerpt}</p>
                    <p className="text-white/50 text-xs">{post.date} - {post.author}</p>
                  </div>
                </div>
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