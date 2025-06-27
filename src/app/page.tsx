'use client';
import { useState } from 'react';
import HeroSection from "@/components/Herosection";
import Navbar from '../components/Navbar';
import MarketingServices from "@/components/WhoWeHelp";
import ServicesOffered from "@/components/ServicesOffered";
import FeaturedIn from "@/components/AboutUs";
import OurTeam from "@/components/OurTeam";
import ScheduleMeeting from "@/components/ScheduleMeeting";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import MenuModal from '@/components/MenuModal';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main style={{ backgroundColor: '#F3F3F3', minHeight: '100vh' }}>
      <Navbar onMenuClick={() => setMenuOpen(true)} />
      <HeroSection />
      <FeaturedIn />
              <MarketingServices />
      <ServicesOffered />
      <OurTeam />
      <ScheduleMeeting />
      <FAQ />
      <Footer />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </main>
  );
}