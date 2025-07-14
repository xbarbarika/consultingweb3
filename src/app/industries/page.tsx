"use client";
import React, { useState, useEffect } from "react";
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Industries() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

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

    // Screen size detection
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setScreenSize('mobile');
      } else if (width <= 768) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive typography
  const getHeadingStyle = () => {
    const baseStyle = {
      color: 'white',
      textAlign: 'center' as const,
      fontFamily: 'Inter',
      fontWeight: 500,
      lineHeight: '110%',
      marginBottom: '23px',
    };

    switch (screenSize) {
      case 'mobile':
        return {
          ...baseStyle,
          fontSize: '24px',
          whiteSpace: 'normal' as const,
          padding: '0 10px',
        };
      case 'tablet':
        return {
          ...baseStyle,
          fontSize: '30px',
          whiteSpace: 'normal' as const,
          padding: '0 20px',
        };
      default:
        return {
          ...baseStyle,
          fontSize: '36px',
          whiteSpace: 'nowrap' as const,
        };
    }
  };

  const getSubheadingStyle = () => {
    const baseStyle = {
      color: 'white',
      opacity: 0.5,
      textAlign: 'center' as const,
      fontFamily: 'Inter',
      fontWeight: 400,
      lineHeight: '110%',
      marginBottom: '60px'
    };

    switch (screenSize) {
      case 'mobile':
        return {
          ...baseStyle,
          fontSize: '14px',
          maxWidth: '280px',
          padding: '0 10px',
        };
      case 'tablet':
        return {
          ...baseStyle,
          fontSize: '16px',
          maxWidth: '500px',
          padding: '0 20px',
        };
      default:
        return {
          ...baseStyle,
          fontSize: '18px',
          maxWidth: '700px',
        };
    }
  };

  const getBreadcrumbStyle = () => {
    const baseStyle = {
      marginBottom: '28px'
    };

    switch (screenSize) {
      case 'mobile':
        return {
          ...baseStyle,
          padding: '0 10px',
        };
      case 'tablet':
        return {
          ...baseStyle,
          padding: '0 20px',
        };
      default:
        return baseStyle;
    }
  };

  const getBreadcrumbTextStyle = () => {
    switch (screenSize) {
      case 'mobile':
        return {
          fontFamily: 'Inter',
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '24px'
        };
      case 'tablet':
        return {
          fontFamily: 'Inter',
          fontSize: '18px',
          fontWeight: 500,
          lineHeight: '26px'
        };
      default:
        return {
          fontFamily: 'Inter',
          fontSize: '20px',
          fontWeight: 500,
          lineHeight: '28px'
        };
    }
  };

  const getContainerStyle = () => {
    switch (screenSize) {
      case 'mobile':
        return 'max-w-sm';
      case 'tablet':
        return 'max-w-2xl';
      default:
        return 'max-w-4xl';
    }
  };

  const getBulletStyle = () => {
    const baseStyle = {
      color: 'white',
      opacity: 0.6,
      fontFamily: 'Inter',
      fontWeight: 400,
      marginBottom: '12px'
    };

    switch (screenSize) {
      case 'mobile':
        return {
          ...baseStyle,
          fontSize: '14px',
          lineHeight: '150%',
          whiteSpace: 'normal' as const,
        };
      case 'tablet':
        return {
          ...baseStyle,
          fontSize: '16px',
          lineHeight: '150%',
          whiteSpace: 'normal' as const,
        };
      default:
        return {
          ...baseStyle,
          fontSize: '18px',
          lineHeight: '150%',
          whiteSpace: 'nowrap' as const,
        };
    }
  };

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
          <div style={getBreadcrumbStyle()}>
            <span style={{ 
              color: 'white', 
              opacity: 0.4, 
              ...getBreadcrumbTextStyle()
            }}>Industries </span>
            <span style={{ 
              color: 'white', 
              opacity: 0.6, 
              ...getBreadcrumbTextStyle(),
              fontWeight: 400
            }}>B2B</span>
          </div>
          {/* Main Heading */}
          <h1 style={getHeadingStyle()}>
            Spark Conversations. Build Community. Drive Growth.
          </h1>
          {/* Subheading */}
          <p style={getSubheadingStyle()}>
            Say goodbye to messy handoffs, bloated retainers, and scattered freelancers.<br />
            With Barbarika, you get a fully integrated marketing team—on-demand.
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
            <div className={`relative ${getContainerStyle()} mx-auto`}>
              {/* Orange vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF965D] to-[#BA34E2]"></div>
              
              {/* Bullet points */}
              <div className="pl-6">
                <p style={getBulletStyle()}>
                  • Strategy, content, and community handled
                </p>
                
                <p style={getBulletStyle()}>
                  • Platform-specific execution (IG, X, TikTok, LinkedIn, and more)
                </p>
                
                <p style={getBulletStyle()}>
                  • Organic + paid social integration
                </p>
                
                <p style={{ 
                  ...getBulletStyle(),
                  marginBottom: '0px'
                }}>
                  • Creative assets optimized for attention and action
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