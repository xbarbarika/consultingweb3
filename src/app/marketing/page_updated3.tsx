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
  {
    key: 'paid-social',
    label: 'Paid Social Advertising',
    heading: 'Supercharge Your Growth with High-Converting Social Ad Campaigns',
    subheading: 'We design, build and optimise ad campaigns that generate real sales. From creative production to advanced audience targeting, you get performance at scale.',
    cardTitle: 'Paid Social Advertising',
    cardColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    buttonColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    icon: '📈',
    features: [
      'Laser-focused audience targeting',
      'Creative assets built for engagement',
      'A/B testing & real-time optimization',
      'Scalable campaigns across platforms',
    ],
    bg: '/bg-pages/D3-10.svg',
  },
  {
    key: 'seo',
    label: 'SEO',
    heading: 'Scalable SEO That Grows With You',
    subheading: 'Technical expertise meets content strategy for organic growth that lasts. From keyword research to backlink building—we turn search traffic into revenue.',
    cardTitle: 'Search Engine Optimization',
    cardColor: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    buttonColor: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    icon: '🔍',
    features: [
      'Transparent pricing, no hidden fees',
      'No freelancers, only vetted SEO pros',
      'Keyword strategy, technical SEO, content & backlinks',
      'Real results, tracked and reported',
    ],
    bg: '/bg-pages/D3-10.svg',
  },
  {
    key: 'video',
    label: 'Video Production',
    heading: 'Bring Your Brand to Life Through Video',
    subheading: 'From concept to delivery, we create compelling video content that captivates your audience. Whether it\'s brand stories, product demos, or social media content—we make videos that convert.',
    cardTitle: 'Video Production',
    cardColor: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    buttonColor: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    icon: '🎥',
    features: [
      'Brand storytelling and product demos',
      'Social media and advertising video content',
      'Professional editing and post-production',
      'Optimized for every platform and format',
    ],
    bg: '/bg-pages/D3-10.svg',
  },
  {
    key: 'influencer',
    label: 'Influencer Marketing',
    heading: 'Amplify Your Reach Through Authentic Voices',
    subheading: 'We connect you with the right influencers to authentically promote your brand. From micro-influencers to industry leaders—we build campaigns that drive results.',
    cardTitle: 'Influencer Marketing',
    cardColor: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    buttonColor: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    icon: '⭐',
    features: [
      'Strategic influencer identification and outreach',
      'Campaign management from start to finish',
      'Performance tracking and ROI measurement',
      'Authentic partnerships that build trust',
    ],
    bg: '/bg-pages/D3-10.svg',
  },
  {
    key: 'pr-marketing',
    label: 'PR & Outreach',
    heading: 'Build Authority Through Strategic PR',
    subheading: 'We position your brand as an industry leader through strategic media relations. From press releases to thought leadership—we secure the coverage that matters.',
    cardTitle: 'PR & Outreach',
    cardColor: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    buttonColor: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    icon: '📰',
    features: [
      'Media relations and press release distribution',
      'Thought leadership content and positioning',
      'Crisis communication management',
      'Industry event and speaking opportunities',
    ],
    bg: '/bg-pages/D3-10.svg',
  },
  {
    key: 'community',
    label: 'Community Management',
    heading: 'Build & Nurture Thriving Communities',
    subheading: 'We help you build vibrant communities around your brand that drive engagement and loyalty. From Discord servers to social groups—we manage every touchpoint with your audience.',
    cardTitle: 'Community Management',
    cardColor: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    buttonColor: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    icon: '👥',
    features: [
      'Platform-specific community building strategies',
      'Daily engagement and moderation',
      'Event planning and community activities',
      'Growth tracking and community insights',
    ],
    bg: '/bg-pages/D3-10.svg',
  },
  {
    key: 'branding',
    label: 'Branding',
    heading: 'Build a Brand That Stands Out and Sticks',
    subheading: 'We craft brands that resonate from visual identity to verbal tone. Our approach combines deep research, clear positioning, and design systems built for growth.',
    cardTitle: 'Branding',
    cardColor: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    buttonColor: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    icon: '🎨',
    features: [
      'Brand strategy, positioning & architecture',
      'Logo, visual identity & brand guidelines',
      'Messaging frameworks for all channels',
      'Brand audits & repositioning',
    ],
    bg: '/bg-pages/D3-10.svg',
  },
  {
    key: 'lead-gen',
    label: 'Lead Generation',
    heading: 'Consistent, Qualified Leads, Without the Guesswork',
    subheading: 'We build and manage performance-driven lead generation systems that deliver results—not just clicks. From strategy to execution, we handle every step so your sales team focuses on closing, not chasing.',
    cardTitle: 'Lead Generation',
    cardColor: 'linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%)',
    buttonColor: 'linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%)',
    icon: '🎯',
    features: [
      'High-intent lead targeting with real-time list building',
      'Personalized messaging that gets replies',
      'CRM integration and ongoing funnel optimization',
      'Weekly reports with lead quality insights',
    ],
    bg: '/bg-pages/D3-10.svg',
  },
];

export default function Marketing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Filter services based on search query
  const filteredSections = marketingSections.filter(section => 
    section.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.subheading.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Debug: Log filtered sections
  console.log('Filtered sections:', filteredSections);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200 relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black/90 to-red-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-red-500/5" />
        
        {/* Animated grid overlay */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          }} 
        />
      </div>
      
      <Navbar onMenuClick={() => setMenuOpen(!menuOpen)} />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <header className="text-center mb-20 relative">
          {/* Animated floating elements */}
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
              WebkitTextFillColor: 'transparent'
            }}>
              Marketing Services
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10">
              Transform your online presence with our comprehensive marketing solutions
            </p>
            
            {/* Search Input */}
            <div className="relative max-w-2xl mx-auto mb-12">
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
        <div className="w-full p-0 m-0 -ml-4">
          {/* First row - Single card (left) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-12 mb-16">
            {filteredSections[0] && (
              <div 
                key={filteredSections[0].key}
                className="relative overflow-hidden rounded-3xl p-12 aspect-[4/3] flex flex-col md:col-span-2 transition-all duration-500 group"
                style={{
                  background: 'rgba(0, 0, 0, 0.7)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 10px 40px 0 rgba(0, 0, 0, 0.25)',
                  transform: hoveredCard === 0 ? 'translateY(-8px) rotateX(2deg) rotateY(2deg) scale(1.02)' : 'scale(1)',
                }}
                onMouseEnter={() => setHoveredCard(0)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-60"
                  style={{
                    backgroundImage: `url(/bg-1.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    filter: 'saturate(1.3) contrast(1.2) brightness(0.9)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black/80 to-red-900/30" />
                <div className="relative z-10 flex-1 flex flex-col group">
                  <h2 className="text-3xl font-bold text-white mb-4 font-libre-baskerville">{filteredSections[0].heading}</h2>
                  <p className="text-gray-300 mb-6 flex-1 font-roboto-condensed">{filteredSections[0].subheading}</p>
                  <a 
                    href="#contact" 
                    className="mt-auto self-start px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
                  >
                    Book a Call
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Second row - Two cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-16">
            {filteredSections.slice(1, 3).map((section, index) => (
              <div 
                key={section.key}
                className="relative overflow-hidden rounded-3xl p-12 aspect-[4/3] flex flex-col transition-all duration-500 group"
                style={{
                  background: 'rgba(0, 0, 0, 0.7)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: hoveredCard === index + 1 
                    ? '0 20px 60px rgba(255, 59, 48, 0.25), 0 0 25px rgba(255, 59, 48, 0.15)'
                    : '0 10px 40px 0 rgba(0, 0, 0, 0.25)',
                  transform: hoveredCard === index + 1 
                    ? 'translateY(-8px) rotateX(2deg) rotateY(2deg) scale(1.02)' 
                    : 'scale(1)',
                }}
                onMouseEnter={() => setHoveredCard(index + 1)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-60"
                  style={{
                    backgroundImage: `url(/bg-${index + 5}.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    filter: 'saturate(1.3) contrast(1.2) brightness(0.9)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black/80 to-red-900/30" />
                <div className="relative z-10 flex-1 flex flex-col group">
                  <h2 className="text-3xl font-bold text-white mb-4 font-libre-baskerville">{section.heading}</h2>
                  <p className="text-gray-300 mb-6 flex-1 font-roboto-condensed">{section.subheading}</p>
                  <a 
                    href="#contact" 
                    className="mt-auto self-start px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
                  >
                    Book a Call
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Third row - Single card (right) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-12 mb-16">
            {filteredSections[3] && (
              <div 
                key={filteredSections[3].key}
                className="relative overflow-hidden rounded-3xl p-12 aspect-[4/3] flex flex-col md:col-start-2 md:col-span-2 transition-all duration-500 group"
                style={{
                  background: 'rgba(0, 0, 0, 0.7)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: hoveredCard === 3 
                    ? '0 20px 60px rgba(255, 59, 48, 0.25), 0 0 25px rgba(255, 59, 48, 0.15)'
                    : '0 10px 40px 0 rgba(0, 0, 0, 0.25)',
                  transform: hoveredCard === 3 
                    ? 'translateY(-8px) rotateX(2deg) rotateY(2deg) scale(1.02)' 
                    : 'scale(1)',
                }}
                onMouseEnter={() => setHoveredCard(3)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 opacity-0 group-hover:opacity-20"
                  style={{
                    backgroundImage: `url(/bg-${parseInt(filteredSections[3].key) + 1}.jpg)`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black/80 to-red-900/30" />
                <div className="relative z-10 flex-1 flex flex-col group">
                  <h2 className="text-3xl font-bold text-white mb-4 font-libre-baskerville">{filteredSections[3].heading}</h2>
                  <p className="text-gray-300 mb-6 flex-1 font-roboto-condensed">{filteredSections[3].subheading}</p>
                  <a 
                    href="#contact" 
                    className="mt-auto self-start px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
                  >
                    Book a Call
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Remaining cards in pairs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-16">
            {filteredSections.slice(4).map((section, index) => (
              <div 
                key={section.key}
                className="relative overflow-hidden rounded-3xl p-12 aspect-[4/3] flex flex-col transition-all duration-500 group"
                style={{
                  background: 'rgba(0, 0, 0, 0.7)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: hoveredCard === index + 4 
                    ? '0 20px 60px rgba(255, 59, 48, 0.25), 0 0 25px rgba(255, 59, 48, 0.15)'
                    : '0 10px 40px 0 rgba(0, 0, 0, 0.25)',
                  transform: hoveredCard === index + 4 
                    ? 'translateY(-8px) rotateX(2deg) rotateY(2deg) scale(1.02)' 
                    : 'scale(1)',
                }}
                onMouseEnter={() => setHoveredCard(index + 4)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-60"
                  style={{
                    backgroundImage: `url(/bg-${index + 5}.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    filter: 'saturate(1.3) contrast(1.2) brightness(0.9)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black/80 to-red-900/30" />
                <div className="relative z-10 flex-1 flex flex-col group">
                  <h2 className="text-3xl font-bold text-white mb-4 font-libre-baskerville">{section.heading}</h2>
                  <p className="text-gray-300 mb-6 flex-1 font-roboto-condensed">{section.subheading}</p>
                  <a 
                    href="#contact" 
                    className="mt-auto self-start px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
                  >
                    Book a Call
                  </a>
                </div>
              </div>
            ))}
          </div>
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
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        
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
