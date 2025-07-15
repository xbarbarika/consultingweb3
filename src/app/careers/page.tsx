'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';

export default function Careers() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  const openRoles = [
    {
      title: 'Performance Marketing Lead',
      department: 'Marketing',
      type: 'Full-time'
    },
    {
      title: 'Brand Strategist',
      department: 'Strategy',
      type: 'Full-time'
    },
    {
      title: 'Social Media Manager',
      department: 'Marketing',
      type: 'Full-time'
    },
    {
      title: 'Growth Analyst',
      department: 'Analytics',
      type: 'Full-time'
    },
    {
      title: 'Content Copywriter',
      department: 'Content',
      type: 'Full-time'
    }
  ];

  useEffect(() => {
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

  // Responsive styling functions
  const getHeadingStyle = () => {
    if (screenSize === 'desktop') {
      return {
        color: '#EBEBEB',
        textAlign: 'center' as const,
        fontFamily: 'Inter',
        fontSize: '32px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
        marginBottom: '36px'
      };
    }
    return {
      color: '#EBEBEB',
      textAlign: 'center' as const,
      fontFamily: 'Inter',
      fontSize: screenSize === 'mobile' ? '24px' : '28px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 'normal',
      marginBottom: screenSize === 'mobile' ? '24px' : '30px',
      padding: screenSize === 'mobile' ? '0 10px' : '0 20px'
    };
  };

  const getDescriptionStyle = () => {
    if (screenSize === 'desktop') {
      return {
        color: 'rgba(255, 255, 255, 0.40)',
        textAlign: 'center' as const,
        fontFamily: 'Inter',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
        marginBottom: '38px'
      };
    }
    return {
      color: 'rgba(255, 255, 255, 0.40)',
      textAlign: 'center' as const,
      fontFamily: 'Inter',
      fontSize: screenSize === 'mobile' ? '16px' : '18px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      marginBottom: screenSize === 'mobile' ? '24px' : '30px',
      padding: screenSize === 'mobile' ? '0 10px' : '0 20px'
    };
  };

  const getButtonStyle = () => {
    return {
      display: 'inline-flex',
      padding: '14px 30px',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      borderRadius: '32px',
      background: 'rgba(255, 255, 255, 0.90)',
      marginBottom: screenSize === 'mobile' ? '48px' : screenSize === 'tablet' ? '60px' : '93px'
    };
  };

  const getWhyWorkHeadingStyle = () => {
    if (screenSize === 'desktop') {
      return {
        color: '#EBEBEB',
        textAlign: 'center' as const,
        fontFamily: 'Inter',
        fontSize: '32px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
        marginBottom: '25px'
      };
    }
    return {
      color: '#EBEBEB',
      textAlign: 'center' as const,
      fontFamily: 'Inter',
      fontSize: screenSize === 'mobile' ? '24px' : '28px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 'normal',
      marginBottom: screenSize === 'mobile' ? '20px' : '22px',
      padding: screenSize === 'mobile' ? '0 10px' : '0 20px'
    };
  };

  const getBenefitsStyle = () => {
    const baseStyle = {
      color: 'rgba(255, 255, 255, 0.80)',
      opacity: 0.7,
      fontFamily: 'Inter',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '32px',
      marginBottom: '92px'
    };

    if (screenSize === 'desktop') {
      return {
        ...baseStyle,
        whiteSpace: 'nowrap' as const
      };
    }
    return {
      ...baseStyle,
      fontSize: screenSize === 'mobile' ? '16px' : '18px',
      lineHeight: screenSize === 'mobile' ? '24px' : '28px',
      marginBottom: screenSize === 'mobile' ? '48px' : '60px',
      whiteSpace: 'normal' as const,
      padding: screenSize === 'mobile' ? '0 10px' : '0 20px'
    };
  };

  const getOpenRolesHeadingStyle = () => {
    if (screenSize === 'desktop') {
      return {
        color: '#EBEBEB',
        textAlign: 'center' as const,
        fontFamily: 'Inter',
        fontSize: '32px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal'
      };
    }
    return {
      color: '#EBEBEB',
      textAlign: 'center' as const,
      fontFamily: 'Inter',
      fontSize: screenSize === 'mobile' ? '24px' : '28px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 'normal',
      padding: screenSize === 'mobile' ? '0 10px' : '0 20px'
    };
  };

  const getJobCardStyle = () => {
    if (screenSize === 'desktop') {
      return {
        display: 'inline-flex',
        height: '92px',
        width: '381px',
        padding: '0px 51px 0px 52px',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
        borderRadius: '10px',
        background: 'rgba(255, 255, 255, 0.09)',
        border: '2px solid transparent',
        transition: 'border-color 0.3s ease'
      };
    }
    return {
      display: 'inline-flex',
      height: '92px',
      width: screenSize === 'mobile' ? '280px' : '320px',
      padding: screenSize === 'mobile' ? '0px 20px' : '0px 30px',
      justifyContent: 'center',
      alignItems: 'center',
      flexShrink: 0,
      borderRadius: '10px',
      background: 'rgba(255, 255, 255, 0.09)',
      border: '2px solid transparent',
      transition: 'border-color 0.3s ease'
    };
  };

  const getJobTitleStyle = () => {
    if (screenSize === 'desktop') {
      return {
        color: '#FFF',
        textAlign: 'center' as const,
        fontFamily: 'Inter',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal'
      };
    }
    return {
      color: '#FFF',
      textAlign: 'center' as const,
      fontFamily: 'Inter',
      fontSize: screenSize === 'mobile' ? '16px' : '18px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 'normal'
    };
  };

  return (
    <div className="text-white bg-black">
      <div className="w-full" style={{
        minHeight: 'calc(100vh + 300px)',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <Navbar onMenuClick={() => setMenuOpen(true)} />
        
        {/* Hero Section */}
        <main className={`w-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 ${screenSize === 'mobile' ? 'pt-24' : screenSize === 'tablet' ? 'pt-32' : 'pt-48'}`}>
          <div className={`mx-auto text-center ${screenSize === 'desktop' ? 'max-w-4xl' : 'max-w-full'}`}>
            <h1 className="font-medium" style={getHeadingStyle()}>
              Build With Us. Market the Future.
            </h1>
            
            <p style={getDescriptionStyle()}>
              Join a fully remote team shaping the next era of marketing. We don&apos;t chase trends —
              {screenSize === 'desktop' ? <br /> : ' '}
              we set them.
            </p>
            
            <button 
              onClick={() => document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-medium text-black text-lg shadow-lg transition-all duration-300 hover:scale-105"
              style={getButtonStyle()}
            >
              See open roles
            </button>
          </div>
        </main>

        {/* Why Work at Barbarika Section */}
        <section className="w-full px-4 md:px-8 lg:px-16">
          <div className={`mx-auto text-center ${screenSize === 'desktop' ? 'max-w-6xl' : 'max-w-full'}`}>
            <h2 className="font-medium" style={getWhyWorkHeadingStyle()}>
              Why Work at Barbarika?
            </h2>
            
            <div className={`${screenSize === 'desktop' ? 'flex justify-center items-center gap-12' : 'flex flex-col items-center'} ${screenSize === 'mobile' ? 'gap-4' : 'gap-5'}`} style={getBenefitsStyle()}>
              <div className="flex items-center gap-3">
                <span style={{ fontSize: '18px' }}>🔥</span>
                <span>100% Remote</span>
              </div>
              <div className="flex items-center gap-3">
                <span style={{ fontSize: '18px' }}>🌍</span>
                <span>Global Culture</span>
              </div>
              <div className="flex items-center gap-3">
                <span style={{ fontSize: '18px' }}>🧠</span>
                <span>Weekly Learning Credits</span>
              </div>
              <div className="flex items-center gap-3">
                <span style={{ fontSize: '18px' }}>⏱️</span>
                <span>Async + Flexible Hours</span>
              </div>
              <div className="flex items-center gap-3">
                <span style={{ fontSize: '18px' }}>🚀</span>
                <span>Real Client Impact</span>
              </div>
            </div>
          </div>
        </section>

        {/* Open Roles Section */}
        <section id="open-roles" className="w-full px-4 md:px-8 lg:px-16" style={{ marginBottom: screenSize === 'mobile' ? '120px' : screenSize === 'tablet' ? '180px' : '300px' }}>
          <div className={`mx-auto text-center ${screenSize === 'desktop' ? 'max-w-4xl' : 'max-w-full'}`}>
            <h2 className={`font-medium ${screenSize === 'mobile' ? 'mb-8' : screenSize === 'tablet' ? 'mb-12' : 'mb-16'}`} style={getOpenRolesHeadingStyle()}>
              Open Roles
            </h2>
            
            {screenSize === 'desktop' ? (
              <div className="flex flex-col items-center gap-6">
                {/* First Row - 3 cards */}
                <div className="flex gap-6">
                  {openRoles.slice(0, 3).map((role, index) => (
                    <div 
                      key={index} 
                      className="cursor-pointer group transition-all duration-300 hover:!border-white"
                      style={getJobCardStyle()}
                    >
                      <h3 className="group-hover:text-[#FF965D] transition-colors" style={getJobTitleStyle()}>
                        {role.title}
                      </h3>
                    </div>
                  ))}
                </div>
                
                {/* Second Row - 2 cards */}
                <div className="flex gap-6">
                  {openRoles.slice(3, 5).map((role, index) => (
                    <div 
                      key={index + 3} 
                      className="cursor-pointer group transition-all duration-300 hover:!border-white"
                      style={getJobCardStyle()}
                    >
                      <h3 className="group-hover:text-[#FF965D] transition-colors" style={getJobTitleStyle()}>
                        {role.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className={`flex flex-col items-center ${screenSize === 'mobile' ? 'gap-3' : 'gap-4'}`}>
                {openRoles.map((role, index) => (
                  <div 
                    key={index} 
                    className="cursor-pointer group transition-all duration-300 hover:!border-white"
                    style={getJobCardStyle()}
                  >
                    <h3 className="group-hover:text-[#FF965D] transition-colors" style={getJobTitleStyle()}>
                      {role.title}
                    </h3>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
      
      <Footer />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
} 