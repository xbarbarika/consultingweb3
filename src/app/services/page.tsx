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
    <section id={id} className="w-full py-16 px-4 md:px-8 lg:px-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Service Label */}
        <div className="text-white/60 text-lg sm:text-xl font-medium leading-7 mb-6" style={{ fontFamily: 'Inter' }}>
          Service <span className="text-white/90 font-medium">{serviceName}</span>
        </div>
        
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
          {title}
        </h2>
        
        {/* Subheading */}
        <p className="text-white/50 max-w-2xl text-base sm:text-lg font-normal leading-[110%] mb-8">
          {subtitle}
        </p>
        
        {/* Book Demo Button */}
        <div className="mb-10">
          <Link href="/book-demo">
            <div 
              className="inline-block p-[2px] rounded-xl transition hover:scale-105"
              style={{
                background: `linear-gradient(90deg, ${gradientColors})`,
              }}
            >
              <button 
                className="px-6 sm:px-8 py-3 rounded-[10px] font-medium bg-black text-white transition focus:outline-none w-full h-full"
              >
                Book Demo
              </button>
            </div>
          </Link>
        </div>
        
        {/* Card and Features Row Layout */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-10 items-start">
          {/* Enhanced 3D Glassy Card */}
          <div className="flex flex-col items-start w-full sm:w-auto">            
            {/* Gradient Border Wrapper */}
            <div 
              className="w-full sm:w-auto lg:w-[461px] hover:scale-105 transition-all duration-500 service-card-wrapper" 
              style={{
                maxWidth: '461px',
                height: '240px',
                borderRadius: '22px',
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
                  borderRadius: '22px', 
                  background: 'rgba(24, 24, 37, 0.8)',
                  backdropFilter: 'blur(25px)',
                  WebkitBackdropFilter: 'blur(25px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                  overflow: 'hidden'
                }}
              >
                {/* Glassmorphism Overlay */}
                <div 
                  className="absolute inset-0 rounded-[22px] opacity-0 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%)',
                    pointerEvents: 'none'
                  }}
                ></div>

                {/* Shimmer Effect */}
                <div 
                  className="absolute inset-0 rounded-[22px] opacity-0 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                    transform: 'translateX(-100%)',
                    pointerEvents: 'none'
                  }}
                ></div>

                {/* Animated Background Pattern */}
                <div 
                  className="absolute inset-0 rounded-[22px] opacity-20"
                  style={{
                    background: `radial-gradient(circle at 30% 20%, ${cardColor}20 0%, transparent 50%),
                                radial-gradient(circle at 70% 80%, ${cardColor}15 0%, transparent 50%)`,
                    animation: 'pulse 4s ease-in-out infinite'
                  }}
                ></div>

                <div 
                  style={{ 
                    position: 'absolute',
                    top: '40px',
                    left: '45px',
                    width: '62px',
                    height: '37px',
                    borderRadius: '4px',
                    background: cardColor,
                    boxShadow: `0 0 20px ${cardColor}40`,
                    transition: 'all 0.3s ease'
                  }} 
                />
                <div 
                  style={{ 
                    position: 'absolute',
                    top: '130px',
                    left: '45px',
                    color: '#FFFFFF', 
                    fontFamily: 'Inter', 
                    fontSize: '24px', 
                    fontWeight: '400', 
                    lineHeight: '28px',
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {cardTitle}
                </div>
                <div 
                  style={{ 
                    position: 'absolute',
                    top: '176px',
                    left: '45px',
                    color: 'rgba(255, 255, 255, 0.3)', 
                    fontFamily: 'Epilogue', 
                    fontSize: '18px', 
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
            className="space-y-3 list-disc list-inside flex-1 text-sm sm:text-base lg:text-[20px]" 
            style={{
              color: 'rgba(255, 255, 255, 0.6)', 
              fontFamily: 'Inter', 
              fontStyle: 'normal', 
              fontWeight: '400', 
              lineHeight: '260%' 
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
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );

  const services = [
    {
      id: "marketing-subscription",
      serviceName: "Marketing Subscription",
      title: "All Your Marketing Needs,\nOne Simple Subscription",
      subtitle: "Scale with an on-demand team that knows your business inside and out.\nFrom strategy to execution, get expert marketing support without the overhead.",
      cardTitle: "Marketing Subscription",
      cardColor: "#FF965D",
      gradientColors: "#ff965d 0%, #ff5bbe 50%, #a63ffd 100%",
      features: [
        "Complete marketing team at your fingertips",
        "Unlimited revisions and requests",
        "Transparent pricing, no hidden fees",
        "Pause or cancel anytime—no long-term contracts"
      ]
    },
    {
      id: "social-media",
      serviceName: "Social Media",
      title: "Build Meaningful Connections,\nDrive Real Engagement",
      subtitle: "We craft content that resonates with your audience and builds lasting relationships.\nFrom strategy to execution, we manage every aspect of your social media presence to drive growth and engagement.",
      cardTitle: "Social Media Marketing",
      cardColor: "#A63FFD",
      gradientColors: "#ff965d 0%, #ff5bbe 50%, #a63ffd 100%",
      features: [
        "Content strategy tailored to your brand voice",
        "Daily management across all major platforms",
        "Community building and audience engagement",
        "Analytics tracking and performance optimization"
      ]
    },
    {
      id: "paid-social",
      serviceName: "Paid Social Advertising",
      title: "Targeted Advertising That\nConverts and Scales",
      subtitle: "We create and optimize paid social campaigns that reach your ideal customers.\nFrom Facebook to TikTok, we maximize your ad spend for measurable ROI.",
      cardTitle: "Paid Social Advertising",
      cardColor: "#FF5BBE",
      gradientColors: "#ff965d 0%, #ff5bbe 50%, #a63ffd 100%",
      features: [
        "Multi-platform campaign management",
        "Advanced targeting and audience optimization",
        "Real-time performance monitoring",
        "A/B testing and continuous optimization"
      ]
    },
    {
      id: "pr-marketing",
      serviceName: "PR & Marketing",
      title: "Build Your Brand's\nReputation and Reach",
      subtitle: "We secure media coverage and build relationships that elevate your brand.\nFrom press releases to thought leadership, we amplify your voice in the market.",
      cardTitle: "PR & Marketing",
      cardColor: "#4CAF50",
      gradientColors: "#ff965d 0%, #ff5bbe 50%, #a63ffd 100%",
      features: [
        "Strategic media outreach and press releases",
        "Thought leadership content development",
        "Crisis communication management",
        "Brand reputation monitoring and enhancement"
      ]
    },
    {
      id: "seo",
      serviceName: "SEO",
      title: "Dominate Search Results\nand Drive Organic Growth",
      subtitle: "We optimize your website to rank higher in search results.\nFrom technical SEO to content optimization, we help you capture organic traffic and leads.",
      cardTitle: "Search Engine Optimization",
      cardColor: "#2196F3",
      gradientColors: "#ff965d 0%, #ff5bbe 50%, #a63ffd 100%",
      features: [
        "Technical SEO audit and optimization",
        "Keyword research and content strategy",
        "Link building and authority development",
        "Local SEO and Google My Business optimization"
      ]
    },
    {
      id: "web3-and-mobile",
      serviceName: "Web3 & Mobile",
      title: "Innovate in the Digital\nFrontier",
      subtitle: "We help you navigate the evolving landscape of Web3 and mobile technologies.\nFrom blockchain marketing to app store optimization, we position you for success.",
      cardTitle: "Web3 & Mobile Marketing",
      cardColor: "#9C27B0",
      gradientColors: "#ff965d 0%, #ff5bbe 50%, #a63ffd 100%",
      features: [
        "Blockchain and crypto marketing strategies",
        "NFT and DeFi project promotion",
        "Mobile app store optimization (ASO)",
        "Cross-platform mobile marketing campaigns"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onMenuClick={() => setMenuOpen(true)} />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <main className="pt-20">
        {services.map((service, index) => (
          <ServiceSection key={index} {...service} />
        ))}
      </main>

      <Footer />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          style={{
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}