'use client';
import { useState } from 'react';
import HeroSection from "@/components/Herosection";
import Navbar from '../components/Navbar';
import MenuModal from '@/components/MenuModal';
import EvolutionSection from '@/components/EvolutionSection';
import MarketingGrid from '@/components/MarketingGrid';
import TeamSection from '@/components/TeamSection';
import PricingPlans from '@/components/PricingPlans';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      <Navbar onMenuClick={() => setMenuOpen(true)} />
      <HeroSection />
      
      {/* Download Roadmap Section */}
      <section className="text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div 
          className="flex items-center justify-center w-full max-w-[1279px] min-h-[280px] sm:min-h-[300px] lg:h-[245px] p-6 sm:p-8 lg:p-12"
          style={{
            flexShrink: 0,
            borderRadius: '18px',
            background: 'radial-gradient(161.04% 61.44% at 50.04% -14.49%, #201234 0%, #0D0D0D 100%)'
          }}
        >
          <div className="w-full max-w-4xl">
            <h2 
              className="mb-3 text-lg sm:text-xl lg:text-[22px] font-medium leading-normal"
              style={{
                color: '#FFF',
                fontFamily: 'var(--font-inter)',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal'
              }}
            >
              Download Your 2025 Marketing Roadmap
            </h2>
            <p 
              className="mb-6 text-sm sm:text-base lg:text-[18px] font-medium leading-relaxed lg:leading-normal"
              style={{
                color: '#FFF',
                fontFamily: 'var(--font-inter)',
                fontStyle: 'normal',
                fontWeight: 500,
                opacity: 0.5
              }}
            >
              Discover the proven strategies, smart tactics, and bold thinking top brands are using to dominate next year.
            </p>

            {/* Input and Button responsive layout */}
            <form className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-start lg:items-center gap-4" autoComplete="off">
              <input
                type="email"
                placeholder="Email"
                className="w-full lg:flex-1 border-b border-gray-600 bg-transparent outline-none text-white placeholder-gray-400 py-2 text-sm sm:text-base focus:border-gray-400 transition-colors"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                type="submit"
                className="text-white transition-all duration-300 hover:scale-105 whitespace-nowrap flex justify-center items-center w-auto text-sm sm:text-base"
                style={{
                  display: 'flex',
                  padding: '7px 18px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  borderRadius: '32px',
                  background: 'rgba(100, 100, 100, 0.24)'
                }}
              >
                Download for free
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <EvolutionSection />
      <TeamSection />
      <MarketingGrid />
      <PricingPlans />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </main>
  );
}