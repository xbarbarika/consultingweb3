'use client';

import { useState } from 'react';
import HeroSection from "@/components/Herosection";
import Navbar from '../components/Navbar';
import WhoWeHelp from "@/components/WhoWeHelp";
import ServicesOffered from "@/components/ServicesOffered";
import AboutUs from "@/components/AboutUs";
import OurTeam from "@/components/OurTeam";
import ScheduleMeeting from "@/components/ScheduleMeeting";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Modal from '@/components/Modal';
import ScheduleMeetingForm from '@/components/ScheduleMeetingForm';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main style={{ backgroundColor: '#F3F3F3', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection onBookCallClick={openModal} />
      <AboutUs />
      <WhoWeHelp />
      <ServicesOffered />
      <OurTeam />
      <ScheduleMeeting />
      <FAQ />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ScheduleMeetingForm />
      </Modal>
    </main>
  );
}