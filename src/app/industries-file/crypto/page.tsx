"use client";
import React, { useState, useEffect } from "react";
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Crypto() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [screenSize, setScreenSize] = useState('desktop');

  useEffect(() => {
    // Handle screen size detection
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setScreenSize('mobile');
      } else if (window.innerWidth <= 768) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    // Set initial screen size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="text-white">
      <div className="min-h-screen w-full" style={{
        background: `linear-gradient(180deg, #1a1028 0%, #18122B 60%, #0B0711 100%), radial-gradient(ellipse at top, rgba(255,150,93,0.12) 0%, transparent 60%)`,
        backgroundBlendMode: 'screen',
        backgroundColor: '#0B0711',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <Navbar onMenuClick={() => setMenuOpen(true)} />
        <main className="w-full flex flex-col items-center justify-start pt-24 md:pt-32 lg:pt-48 px-4 md:px-8 lg:px-16 min-h-screen">
          {/* Industries Label */}
          <div style={{ marginBottom: '28px' }}>
            <span style={{ 
              color: 'white', 
              opacity: 0.4, 
              fontFamily: 'Inter', 
              fontSize: screenSize === 'desktop' ? '20px' : '16px', 
              fontWeight: 500, 
              lineHeight: screenSize === 'desktop' ? '28px' : '22px' 
            }}>Industries </span>
            <span style={{ 
              color: 'white', 
              opacity: 0.6, 
              fontFamily: 'Inter', 
              fontSize: screenSize === 'desktop' ? '20px' : '16px', 
              fontWeight: 400, 
              lineHeight: screenSize === 'desktop' ? '28px' : '22px' 
            }}>Crypto</span>
          </div>
          {/* Main Heading */}
          <h1 className="text-center text-white font-medium leading-tight mb-6 px-4" style={{ 
            fontFamily: 'Inter',
            fontSize: screenSize === 'mobile' ? '24px' : screenSize === 'tablet' ? '30px' : '36px',
            lineHeight: '110%',
            whiteSpace: screenSize === 'desktop' ? 'nowrap' : 'normal'
          }}>
            Launch Projects. Build Communities. Attract Investors.
          </h1>
          {/* Subheading */}
          <p className="text-center text-white opacity-50 mb-12 md:mb-15 px-4" style={{ 
            fontFamily: 'Inter',
            fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'tablet' ? '16px' : '18px',
            fontWeight: 400,
            lineHeight: '110%',
            maxWidth: screenSize === 'desktop' ? '700px' : '90%'
          }}>
            From token launches to community building, navigate the dynamic crypto landscape with confidence.<br />
            With Barbarika, you get crypto marketing that drives adoption and builds lasting value.
          </p>
          {/* Book Demo Button */}
          <div style={{ marginBottom: screenSize === 'desktop' ? '77px' : '48px' }}>
            <Link href="/book-demo">
              <button className="rounded-full font-medium text-black shadow-lg transition-all duration-300" style={{
                background: 'linear-gradient(82deg, #FF965D 54.13%, #BA34E2 100.03%)',
                padding: screenSize === 'mobile' ? '12px 24px' : '12px 32px',
                fontSize: screenSize === 'mobile' ? '16px' : '18px',
                minWidth: screenSize === 'mobile' ? '140px' : '160px'
              }}>
                Book Demo
              </button>
            </Link>
          </div>
          {/* Bullet Points */}
          <div className="flex flex-col items-center w-full">
            <div className="relative mx-auto" style={{ 
              maxWidth: screenSize === 'mobile' ? '100%' : screenSize === 'tablet' ? '85%' : '896px' 
            }}>
              {/* Orange vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF965D] to-[#BA34E2]"></div>
              
              {/* Bullet points */}
              <div className="pl-6">
                <p style={{ 
                  color: 'white',
                  opacity: 0.6,
                  fontFamily: 'Inter',
                  fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'tablet' ? '16px' : '18px',
                  fontWeight: 400,
                  lineHeight: '150%',
                  marginBottom: '12px',
                  whiteSpace: screenSize === 'desktop' ? 'nowrap' : 'normal'
                }}>
                  • ICO, IDO, and IEO marketing campaigns for token launches
                </p>
                
                <p style={{ 
                  color: 'white',
                  opacity: 0.6,
                  fontFamily: 'Inter',
                  fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'tablet' ? '16px' : '18px',
                  fontWeight: 400,
                  lineHeight: '150%',
                  marginBottom: '12px',
                  whiteSpace: screenSize === 'desktop' ? 'nowrap' : 'normal'
                }}>
                  • Community building across Discord, Telegram, and social platforms
                </p>
                
                <p style={{ 
                  color: 'white',
                  opacity: 0.6,
                  fontFamily: 'Inter',
                  fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'tablet' ? '16px' : '18px',
                  fontWeight: 400,
                  lineHeight: '150%',
                  marginBottom: '12px',
                  whiteSpace: screenSize === 'desktop' ? 'nowrap' : 'normal'
                }}>
                  • DeFi protocol marketing and yield farming campaigns
                </p>
                
                <p style={{ 
                  color: 'white',
                  opacity: 0.6,
                  fontFamily: 'Inter',
                  fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'tablet' ? '16px' : '18px',
                  fontWeight: 400,
                  lineHeight: '150%',
                  whiteSpace: screenSize === 'desktop' ? 'nowrap' : 'normal'
                }}>
                  • NFT project promotion and marketplace optimization
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
        <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </div>
  );
} 