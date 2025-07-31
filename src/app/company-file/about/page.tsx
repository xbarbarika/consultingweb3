'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main style={{ 
      backgroundColor: '#000000', 
      minHeight: '100vh',
      background: 'url(/about-bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <Navbar onMenuClick={() => setMenuOpen(true)} />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      


      {/* Main Content - Enhanced with animations */}
      <div className="relative w-full max-w-4xl mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        {/* Welcome Section */}
        <section className={`text-center mb-20 w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Welcome to the Next Evolution in Digital Marketing
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At Barbarika, we&apos;re redefining growth through precision-crafted campaigns, community-first thinking, and a model that scales with you. Built by marketers, for disruptors.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className={`text-center mb-20 w-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            To empower bold startups and futuristic enterprises with performance-backed marketing that never slows down.
          </p>
        </section>

        {/* Why Barbarika Works Section */}
        <section className={`text-center mb-20 w-full transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 leading-tight">
            Why Barbarika Works
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { stat: "$100K+", desc: "average annual savings" },
              { stat: "2 hrs/week", desc: "is all we need from you" },
              { stat: "30+ services", desc: "under one subscription" },
              { stat: "1-day turnaround", desc: "execution model" },
              { stat: "Global experts", desc: "on your team" }
            ].map((item, index) => (
              <div key={index} className={`text-center transition-all duration-700 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <p className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                  <span className="text-white font-bold">{item.stat}</span> {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Meet the Crew Section */}
        <section className={`text-center mb-20 w-full transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Meet the Crew
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Photos or illustrated avatars for team members would go here
          </p>
        </section>

        {/* Floating Action Button */}
        <div className={`fixed bottom-8 right-8 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link href="/company-file/contact">
            <button className="relative group p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <span className="relative text-white font-bold">Get Started</span>
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
} 