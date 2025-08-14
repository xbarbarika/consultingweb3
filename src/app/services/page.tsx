'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll to show/hide back to top button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add smooth scrolling behavior for anchor links
  React.useEffect(() => {
    // Check if there's a hash in the URL and scroll to it
    if (typeof window !== 'undefined' && window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const ServiceSection = ({ 
    serviceName, 
    title, 
    subtitle, 
    cardTitle, 
    cardColor, 
    features, 
    gradientColors,
    id 
  }: {
    serviceName: string;
    title: string;
    subtitle: string;
    cardTitle: string;
    cardColor: string;
    features: string[];
    gradientColors: string;
    id: string;
  }) => (
    <section id={id} className="w-full py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 scroll-mt-20 service-section">
      <div className="max-w-7xl mx-auto">
        {/* Service Label */}
        <div className="text-white/60 text-sm xs:text-base sm:text-lg md:text-xl font-medium leading-6 xs:leading-7 mb-3 xs:mb-4 sm:mb-6 service-label" style={{ fontFamily: 'Inter, sans-serif' }}>
          Service <span className="text-white/90 font-medium">{serviceName}</span>
        </div>
        
        {/* Main Heading */}
        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-3 xs:mb-4 sm:mb-6 service-title text-overflow-fix" style={{ fontFamily: 'Epilogue, sans-serif' }}>
          {title}
        </h2>
        
        {/* Subheading */}
        <p className="text-white/50 max-w-2xl text-xs xs:text-sm sm:text-base md:text-lg font-normal leading-[120%] xs:leading-[110%] mb-4 xs:mb-6 sm:mb-8 service-subtitle text-overflow-fix landscape-spacing" style={{ fontFamily: 'Inter, sans-serif' }}>
          {subtitle}
        </p>
        
        {/* Book Demo Button */}
        <div className="mb-6 xs:mb-8 sm:mb-10">
          <Link href="/book-demo" className="block w-full sm:w-auto">
            <div 
              className="inline-block p-[2px] rounded-xl transition hover:scale-105 w-full sm:w-auto"
              style={{
                background: `linear-gradient(90deg, ${gradientColors})`,
              }}
            >
              <button 
                className="px-3 xs:px-4 sm:px-6 md:px-8 py-2.5 xs:py-3 sm:py-3 rounded-[10px] font-medium bg-black text-white transition focus:outline-none w-full h-full text-sm xs:text-sm sm:text-base landscape-button"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Book Demo
              </button>
            </div>
          </Link>
        </div>
        
        {/* Card and Features Row Layout */}
        <div className="flex flex-col xl:flex-row gap-4 xs:gap-6 sm:gap-8 lg:gap-10 items-start landscape-grid-gap">
          {/* Enhanced 3D Glassy Card */}
          <div className="flex flex-col items-start w-full xl:w-auto order-2 xl:order-1">            
            {/* Gradient Border Wrapper */}
            <div 
              className="w-full max-w-full xl:w-[461px] hover:scale-105 transition-all duration-500 service-card-wrapper service-card landscape-card-height" 
              style={{
                maxWidth: '461px',
                height: '160px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.3) 100%)',
                padding: '1px',
                position: 'relative',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Inner Card Content */}
              <div 
                className="relative service-card-inner" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  borderRadius: '16px', 
                  background: '#181825',
                  backdropFilter: 'blur(25px)',
                  WebkitBackdropFilter: 'blur(25px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                  overflow: 'hidden'
                }}
              >
                {/* Glassmorphism Overlay */}
                <div 
                  className="absolute inset-0 rounded-[16px] opacity-0 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%)',
                    pointerEvents: 'none'
                  }}
                ></div>

                {/* Shimmer Effect */}
                <div 
                  className="absolute inset-0 rounded-[16px] opacity-0 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                    transform: 'translateX(-100%)',
                    pointerEvents: 'none'
                  }}
                ></div>

                <div 
                  style={{ 
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    width: '32px',
                    height: '20px',
                    borderRadius: '4px',
                    background: cardColor,
                    boxShadow: `0 0 20px ${cardColor}40`,
                    transition: 'all 0.3s ease'
                  }} 
                />
                <div 
                  style={{ 
                    position: 'absolute',
                    top: '48px',
                    left: '16px',
                    color: '#FFFFFF', 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '14px', 
                    fontWeight: '400', 
                    lineHeight: '18px',
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {cardTitle}
                </div>
                <div 
                  style={{ 
                    position: 'absolute',
                    top: '72px',
                    left: '16px',
                    color: 'rgba(255, 255, 255, 0.3)', 
                    fontFamily: 'Epilogue, sans-serif', 
                    fontSize: '12px', 
                    fontStyle: 'italic', 
                    fontWeight: '500', 
                    lineHeight: '110%', 
                    letterSpacing: '0.9px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  BARBARIKA
                </div>
              </div>
            </div>
          </div>
          
          {/* Features List */}
          <ul 
            className="space-y-2 xs:space-y-3 sm:space-y-3 list-disc list-inside flex-1 text-xs xs:text-sm sm:text-base lg:text-lg xl:text-[20px] order-1 xl:order-2 service-features text-overflow-fix" 
            style={{
              color: 'rgba(255, 255, 255, 0.6)', 
              fontFamily: 'Inter, sans-serif', 
              fontStyle: 'normal', 
              fontWeight: '400', 
              lineHeight: '200%'
            }}
          >
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .service-card-wrapper {
          transform-style: preserve-3d;
        }
        
        .service-card-wrapper:hover {
          transform: translateY(-8px) rotateX(2deg) rotateY(2deg);
        }
        
        .service-card-wrapper:hover .service-card-inner {
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          background: rgba(24, 24, 37, 0.9);
        }
        
        .service-card-wrapper:hover .glassmorphism-overlay {
          opacity: 1;
        }
        
        .service-card-wrapper:hover .shimmer-effect {
          opacity: 1;
          transform: translateX(100%);
        }

        /* iPhone SE and small mobile devices */
        @media (max-width: 375px) {
          .service-card-wrapper {
            height: 140px !important;
            border-radius: 12px !important;
          }
          
          .service-card-inner {
            border-radius: 12px !important;
          }
          
          .service-card-wrapper:hover {
            transform: translateY(-2px) rotateX(0.5deg) rotateY(0.5deg);
          }
        }

        /* Small mobile devices */
        @media (min-width: 376px) and (max-width: 480px) {
          .service-card-wrapper {
            height: 150px !important;
            border-radius: 14px !important;
          }
          
          .service-card-inner {
            border-radius: 14px !important;
          }
          
          .service-card-wrapper:hover {
            transform: translateY(-3px) rotateX(1deg) rotateY(1deg);
          }
        }

        /* Medium mobile devices */
        @media (min-width: 481px) and (max-width: 640px) {
          .service-card-wrapper {
            height: 160px !important;
            border-radius: 16px !important;
          }
          
          .service-card-inner {
            border-radius: 16px !important;
          }
          
          .service-card-wrapper:hover {
            transform: translateY(-4px) rotateX(1deg) rotateY(1deg);
          }
        }

        /* Large mobile devices */
        @media (min-width: 641px) and (max-width: 768px) {
          .service-card-wrapper {
            height: 180px !important;
            border-radius: 18px !important;
          }
          
          .service-card-inner {
            border-radius: 18px !important;
          }
          
          .service-card-wrapper:hover {
            transform: translateY(-5px) rotateX(1.5deg) rotateY(1.5deg);
          }
        }

        /* Tablet devices */
        @media (min-width: 769px) and (max-width: 1024px) {
          .service-card-wrapper {
            height: 200px !important;
            border-radius: 20px !important;
          }
          
          .service-card-inner {
            border-radius: 20px !important;
          }
          
          .service-card-wrapper:hover {
            transform: translateY(-6px) rotateX(1.5deg) rotateY(1.5deg);
          }
        }

        /* Desktop devices */
        @media (min-width: 1025px) {
          .service-card-wrapper {
            height: 220px !important;
            border-radius: 22px !important;
          }
          
          .service-card-inner {
            border-radius: 22px !important;
          }
          
          .service-card-wrapper:hover {
            transform: translateY(-8px) rotateX(2deg) rotateY(2deg);
          }
        }

        /* Large desktop devices */
        @media (min-width: 1280px) {
          .service-card-wrapper {
            height: 240px !important;
            border-radius: 22px !important;
          }
        }
      `}</style>
    </section>
  );

  const services = [
    {
      id: "blockchain",
      serviceName: "Blockchain",
      title: "Scalable, Secure, and Custom\nBlockchain Solutions",
      subtitle: "From smart contracts to full dApps, we help you build on-chain products with performance and security at the core.",
      cardTitle: "Blockchain",
      cardColor: "#232336",
      gradientColors: "#ff965d 0%, #ff5bbe 50%, #a63ffd 100%",
      features: [
        "Smart contract development (Solidity, Rust)",
        "dApp & token infrastructure",
        "NFT platforms, wallets & DAO integrations",
        "Audits, testing, and post-launch support"
      ]
    },
    {
      id: "web3-mobile",
      serviceName: "Web3 & Mobile",
      title: "Build the Future\nwith Web3 & Mobile Solutions",
      subtitle: "Next-gen web3 and mobile solutions for the future.\nFrom DeFi platforms to mobile dApps, we build the digital infrastructure of tomorrow.",
      cardTitle: "Web3 & Mobile",
      cardColor: "#5D8BFF",
      gradientColors: "#ff965d 0%, #ff5bbe 50%, #a63ffd 100%",
      features: [
        "Web3 integration and DeFi protocols",
        "Mobile app development (iOS & Android)",
        "Cross-platform solutions and PWAs",
        "Blockchain integration for mobile apps"
      ]
    },
    {
      id: "genai",
      serviceName: "GenAI",
      title: "AI-Powered Solutions That Drive Growth",
      subtitle: "Leverage cutting-edge AI technology to transform your business operations.\nFrom content generation to process automation—we harness the power of AI for your success.",
      cardTitle: "Generative AI Solutions",
      cardColor: "#1d4ed8",
      gradientColors: "#5d8bff 0%, #5bafff 50%, #3f7ffd 100%",
      features: [
        "Custom AI model development and integration",
        "Content generation and automation solutions",
        "AI-powered customer service and chatbots",
        "Data analysis and predictive insights"
      ]
    }
  ];

  return (
    <div className="text-white" style={{ scrollBehavior: 'smooth' }}>
      <div 
        className="min-h-screen" 
        style={{ 
          backgroundImage: 'url(/bg-pages/D3-1.svg)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat' 
        }}
      >
        <Navbar onMenuClick={() => setMenuOpen(true)} />
        
        {/* Header Section */}
        <div className="w-full flex flex-col items-center justify-start pt-16 xs:pt-18 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-24 pb-6 xs:pb-8 sm:pb-10 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="w-full max-w-5xl mx-auto text-center mt-4 xs:mt-6 sm:mt-8 md:mt-10 mb-8 xs:mb-12 sm:mb-16">
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold text-pink-400 mb-2" style={{ fontFamily: 'Epilogue, sans-serif' }}>Services</h2>
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 xs:mb-3 sm:mb-4" style={{ fontFamily: 'Epilogue, sans-serif' }}>Our Complete Service Portfolio</h1>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-6 xs:mb-8 sm:mb-12 px-3 xs:px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              We&apos;re experts in all things marketing. B2B, blockchain, fintech, software, and high-growth startup brands are our sweet spot. 
              Discover our comprehensive range of services designed to scale your business to new heights.
            </p>
            
            {/* Services Navigation */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-3 xs:p-4 sm:p-6 border border-white/10 hover:border-pink-400/30 transition-all duration-300 mx-3 xs:mx-4">
              <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-2 xs:mb-3 sm:mb-4 text-white flex items-center justify-center gap-2" style={{ fontFamily: 'Epilogue, sans-serif' }}>
                <svg width="16" height="16" className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Quick Navigation
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5 xs:gap-2 sm:gap-3 text-xs xs:text-sm">
                <Link 
                  href="/marketing"
                  className="text-white/70 hover:text-pink-400 transition-all duration-200 text-left hover:scale-105 transform py-1.5 xs:py-2 px-1.5 xs:px-2 sm:px-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-pink-400/20 group"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span className="group-hover:font-medium transition-all duration-200">Marketing</span>
                </Link>
                {services.map((service, index) => (
                  <a 
                    key={service.id}
                    href={`#${service.id}`}
                    className="text-white/70 hover:text-pink-400 transition-all duration-200 text-left hover:scale-105 transform py-1.5 xs:py-2 px-1.5 xs:px-2 sm:px-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-pink-400/20 group"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      fontFamily: 'Inter, sans-serif'
                    }}
                  >
                    <span className="group-hover:font-medium transition-all duration-200">
                      {service.serviceName}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Marketing Card */}
        <div className="w-full px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-2">
          <div className="max-w-7xl mx-auto">
            <div className="mb-3 xs:mb-4 sm:mb-6 text-white/70 text-xs xs:text-sm uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>Featured</div>
            <Link href="/marketing" className="group inline-block w-full">
              <div
                className="w-full max-w-full xl:w-[461px] hover:scale-105 transition-all duration-500 service-card-wrapper"
                style={{
                  maxWidth: '461px',
                  height: '160px',
                  borderRadius: '16px',
                  background:
                    'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.3) 100%)',
                  padding: '1px',
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div
                  className="relative service-card-inner"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '16px',
                    background: '#181825',
                    backdropFilter: 'blur(25px)',
                    WebkitBackdropFilter: 'blur(25px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow:
                      '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      width: '32px',
                      height: '20px',
                      borderRadius: '4px',
                      background: '#ec4899',
                      boxShadow: '0 0 20px rgba(236, 72, 153, 0.25)',
                      transition: 'all 0.3s ease',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '48px',
                      left: '16px',
                      color: '#FFFFFF',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      fontWeight: '400',
                      lineHeight: '18px',
                      textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Marketing
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      top: '72px',
                      left: '16px',
                      color: 'rgba(255, 255, 255, 0.3)',
                      fontFamily: 'Epilogue, sans-serif',
                      fontSize: '12px',
                      fontStyle: 'italic',
                      fontWeight: '500',
                      lineHeight: '110%',
                      letterSpacing: '0.9px',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    BARBARIKA
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Services Sections */}
        <div className="space-y-8 xs:space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-20 xl:space-y-24 pb-8 xs:pb-10 sm:pb-12 md:pb-16">
          {services.map((service, index) => (
            <div key={service.id}>
              <ServiceSection {...service} />
              {index < services.length - 1 && (
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto max-w-6xl mt-6 xs:mt-8 sm:mt-10 md:mt-12 lg:mt-16" />
              )}
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-4 xs:bottom-6 sm:bottom-8 right-3 xs:right-6 sm:right-8 z-50 bg-pink-500 hover:bg-pink-600 text-white p-2 xs:p-2.5 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          aria-label="Back to top"
        >
          <svg width="16" height="16" className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 14l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  );
}