'use client';
import { useState } from 'react';
import HeroSection from "@/components/Herosection";
import Navbar from '../components/Navbar';
import MenuModal from '@/components/MenuModal';
import EvolutionSection from '@/components/EvolutionSection';
import MarketingGrid from '@/components/MarketingGrid';
import LocationsSection from '@/components/LocationsSection';
import PricingPlans from '@/components/PricingPlans';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      <Navbar onMenuClick={() => setMenuOpen(true)} />
      <HeroSection />
      
      {/* Download Roadmap Section */}
      {/* Removed as per user request */}
      
      <EvolutionSection />
      <MarketingGrid />
      <LocationsSection />
      <PricingPlans />
      <FaqSection />
      <Footer />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </main>
  );
}