"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';
import Link from 'next/link';

const marketingSections = [
  {
    key: 'marketing-sub',
    label: 'Marketing Subscription',
    heading: 'All Your Marketing Needs, One Simple Subscription',
    subheading: 'Scale with an on-demand team that knows your business inside and out. From strategy to execution, get expert marketing support without the overhead.',
    cardTitle: 'Marketing Subscription',
    cardColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    buttonColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: '📊',
    features: [
      'Complete marketing team at your fingertips',
      'Unlimited revisions and requests',
      'Transparent pricing, no hidden fees',
      'Pause or cancel anytime—no long-term contracts',
    ],
    bg: '/bg-pages/D3-10.svg',
  },
  {
    key: 'social-media',
    label: 'Social Media',
    heading: 'Build Meaningful Connections, Drive Real Engagement',
    subheading: 'We craft content that resonates with your audience and builds lasting relationships. From strategy to execution, we manage every aspect of your social media presence to drive growth and engagement.',
    cardTitle: 'Social Media Marketing',
    cardColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    buttonColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    icon: '💬',
    features: [
      'Content strategy tailored to your brand voice',
      'Platform-optimized posting schedules',
      'Community management and engagement',
      'Performance tracking and optimization',
    ],
    bg: '/bg-pages/D3-10.svg',
  },
  // Add other marketing sections here...
];

export default function MarketingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filteredSections = marketingSections.filter(section => 
    section.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.subheading.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200 relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black/90 to-red-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-red-500/5" />
      </div>
      
      <Navbar onMenuClick={() => setMenuOpen(!menuOpen)} />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <header className="text-center mb-20 relative">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl animate-float" />
          <div className="absolute top-1/4 -right-20 w-60 h-60 bg-red-500/10 rounded-full filter blur-3xl animate-float animation-delay-2000" />
          
          <div className="relative z-10">
            <div className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-red-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium tracking-wider">
              FUTURE OF MARKETING
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight" style={{ 
              fontFamily: 'var(--font-tourney), sans-serif',
              background: 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
              lineHeight: '1.1',
              letterSpacing: '-0.03em'
            }}>
              Next-Gen <br/>Marketing
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
              Harness the power of AI and data-driven strategies to transform your brand&apos;s digital presence
            </p>
            
            {/* Search Input */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-900/50 border border-gray-800 rounded-full py-4 px-6 pr-14 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent text-lg"
              />
              <svg 
                className="absolute right-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </div>
          </div>
        </header>
        
        {/* Services Grid */}
        <div className="grid gap-8 mt-20">
          {filteredSections.map((section, index) => (
            <div 
              key={section.key}
              className="relative overflow-hidden rounded-3xl p-8 h-[500px] flex flex-col"
              style={{
                background: `url(${section.bg}) center/cover no-repeat`,
                transform: hoveredCard === index ? 'scale(1.02)' : 'scale(1)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60" />
              <div className="relative z-10 flex-1 flex flex-col">
                <h2 className="text-3xl font-bold text-white mb-4">{section.heading}</h2>
                <p className="text-gray-300 mb-6 flex-1">{section.subheading}</p>
                <button className="mt-auto self-start px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-24 mb-16 text-center">
          <div className="relative max-w-4xl mx-auto p-12 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black/80 to-red-900/20 rounded-3xl border border-gray-800/50 backdrop-blur-lg" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-red-300 bg-clip-text text-transparent">
                Ready to Transform Your Marketing?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how we can help you achieve your business goals with our cutting-edge marketing solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/book-demo" 
                  className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
                >
                  Book a Free Consultation
                </Link>
                <Link 
                  href="/contact" 
                  className="px-8 py-4 rounded-xl font-semibold bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 transition-all duration-300"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <div className="relative z-10 mt-32">
        <Footer />
      </div>
      
      {/* Custom animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
