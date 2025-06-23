'use client';
import React, { useState } from 'react';
import Modal from './Modal';
import ScheduleMeetingForm from './ScheduleMeetingForm';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div 
      className="relative overflow-hidden bg-[#F3F3F3] pt-32 pb-12"
      style={{
        backgroundImage: 'url(/Vector.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -z-1 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: 'linear-gradient(180deg, #B7BA00 0%, #C56D2F 100%)',
          filter: 'blur(300px)',
          opacity: 0.5,
        }}
      />
      <div className="px-6 md:px-16 lg:px-28">
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1
              className="mb-6 text-4xl font-bold text-black md:text-5xl lg:text-6xl"
              style={{
                fontFamily: 'DM Serif Text, serif',
                lineHeight: '100%',
              }}
            >
              Scaling Web3 Projects from Zero to Moon
            </h1>
            <p
              className="mb-6 text-lg text-black md:text-xl lg:text-2xl"
              style={{
                fontFamily: 'Inter, sans-serif',
              }}
            >
              We are a full-stack growth and marketing agency helping Web3 startups accelerate adoption, build communities, and go global.
            </p>
            <div className="mb-8 flex items-center justify-center gap-3 md:justify-start">
              <span
                className="blinking-dot h-3 w-3 rounded-full"
                style={{ backgroundColor: 'rgba(145, 118, 0, 1)' }}
              ></span>
              <span className="text-lg font-medium" style={{ color: 'rgba(145, 118, 0, 1)' }}>We are Live</span>
            </div>
            <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">
              <button
                onClick={openModal}
                className="w-full rounded-md bg-[#8A8A6A] px-8 py-3 text-base font-semibold text-white transition hover:bg-opacity-90 sm:w-auto"
              >
                Book a Free Strategy Call
              </button>
              <button className="w-full rounded-md border border-black px-8 py-3 text-base font-semibold text-black transition hover:bg-gray-100 sm:w-auto">
                Explore Our Work
              </button>
            </div>

            {/* Stats Section */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-center md:justify-start md:text-left">
              <div>
                <p className="text-3xl font-bold text-black">500+</p>
                <p className="text-gray-800">satisfied clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-black">500+</p>
                <p className="text-gray-800">satisfied clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-black">500+</p>
                <p className="text-gray-800">satisfied clients</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="mx-auto mt-8 md:mt-0 h-auto w-full max-w-lg md:h-[444px] md:w-[589px] overflow-hidden rounded-[13.15px]">
            <img
              src="/hero.png"
              alt="Developer at work"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        
        {/* Logos Section */}
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            
          {/* Clutch */}
          <div
            className="flex h-full flex-col items-center justify-between rounded-lg bg-white/50 p-4 text-center"
          >
            <img src="/Clutchlogo.svg" alt="Clutch" className="h-12 mb-2" />
            <div className="text-xs text-gray-800">Top Crypto Marketing Agency 2025</div>
          </div>

          {/* Techreviewer */}
          <div
            className="flex h-full flex-col items-center justify-between rounded-lg bg-white/50 p-4 text-center"
          >
            <img src="/TechReviewerLogo.svg" alt="Techreviewer" className="h-12 mb-2" />
            <div className="text-xs text-gray-800">Best Web Design Company</div>
          </div>

          {/* Trustpilot */}
          <div
            className="flex h-full flex-col items-center justify-between rounded-lg bg-white/50 p-4 text-center"
          >
            <img src="/TrustpilotLogo.svg" alt="Trustpilot" className="h-12 mb-2" />
            <div className="text-xs text-gray-800">Top Rated Trustpilot Agency</div>
          </div>

          {/* Influencer Marketing Hub */}
          <div
            className="flex h-full flex-col items-center justify-between rounded-lg bg-white/50 p-4 text-center"
          >
            <img src="/InfluencerLogo.svg" alt="Influencer Marketing Hub" className="h-12 mb-2" />
            <div className="text-xs text-gray-800">Top Crypto & NFT Agency</div>
          </div>

        </div>
      </div>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ScheduleMeetingForm />
        </Modal>
      )}
    </div>
  );
};

export default HeroSection;

/*
<style jsx global>{`
  .glassy-navbar {
    background: rgba(255, 255, 255, 0.35);
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    border-radius: 48px;
    border: 1.5px solid rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
    padding: 0.5rem 2rem;
  }
`}</style>
*/
