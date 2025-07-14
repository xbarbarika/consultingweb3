"use client";
import React, { useState, useEffect } from "react";
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ESport() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Set page title and favicon
    document.title = "Barbarika";
    
    // Remove existing favicon
    const existingLink = document.querySelector("link[rel*='icon']");
    if (existingLink) {
      existingLink.remove();
    }
    
    // Add new favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/x-icon';
    link.href = '/Barbarika.ico';
    document.head.appendChild(link);
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
        <main className="w-full flex flex-col items-center justify-start pt-48 px-4 md:px-8 lg:px-16 min-h-screen">
          {/* Industries Label */}
          <div style={{ marginBottom: '28px' }}>
            <span style={{ 
              color: 'white', 
              opacity: 0.4, 
              fontFamily: 'Inter', 
              fontSize: '20px', 
              fontWeight: 500, 
              lineHeight: '28px' 
            }}>Industries </span>
            <span style={{ 
              color: 'white', 
              opacity: 0.6, 
              fontFamily: 'Inter', 
              fontSize: '20px', 
              fontWeight: 400, 
              lineHeight: '28px' 
            }}>eSport</span>
          </div>
          {/* Main Heading */}
          <h1 style={{ 
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: '36px',
            fontWeight: 500,
            lineHeight: '110%',
            marginBottom: '23px',
            whiteSpace: 'nowrap'
          }}>
            Compete Globally. Build Fanbase. Secure Sponsorships.
          </h1>
          {/* Subheading */}
          <p style={{ 
            color: 'white',
            opacity: 0.5,
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '110%',
            maxWidth: '700px',
            marginBottom: '60px'
          }}>
            Elevate your team&apos;s brand and attract tournament-winning sponsorships.<br />
            With Barbarika, you get esports marketing that builds legendary status and revenue.
          </p>
          {/* Book Demo Button */}
          <div style={{ marginBottom: '77px' }}>
            <Link href="/book-demo">
              <button className="px-8 py-3 rounded-full font-medium text-black text-lg shadow-lg transition-all duration-300" style={{
                background: 'linear-gradient(82deg, #FF965D 54.13%, #BA34E2 100.03%)',
                minWidth: 160
              }}>
                Book Demo
              </button>
            </Link>
          </div>
          {/* Bullet Points */}
          <div className="flex flex-col items-center w-full">
            <div className="relative max-w-4xl mx-auto">
              {/* Orange vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF965D] to-[#BA34E2]"></div>
              
              {/* Bullet points */}
              <div className="pl-6">
                <p style={{ 
                  color: 'white',
                  opacity: 0.6,
                  fontFamily: 'Inter',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '150%',
                  marginBottom: '12px',
                  whiteSpace: 'nowrap'
                }}>
                  • Team branding and player personal brand development
                </p>
                
                <p style={{ 
                  color: 'white',
                  opacity: 0.6,
                  fontFamily: 'Inter',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '150%',
                  marginBottom: '12px',
                  whiteSpace: 'nowrap'
                }}>
                  • Tournament promotion and live event marketing
                </p>
                
                <p style={{ 
                  color: 'white',
                  opacity: 0.6,
                  fontFamily: 'Inter',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '150%',
                  marginBottom: '12px',
                  whiteSpace: 'nowrap'
                }}>
                  • Sponsorship acquisition and brand partnership strategies
                </p>
                
                <p style={{ 
                  color: 'white',
                  opacity: 0.6,
                  fontFamily: 'Inter',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '150%',
                  whiteSpace: 'nowrap'
                }}>
                  • Fan engagement across Twitch, Discord, and social platforms
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