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
      title: "Supercharge Your Growth with\nHigh-Converting Social Ad Campaigns",
      subtitle: "We design, build and optimise ad campaigns that generate real sales.\nFrom creative production to advanced audience targeting, you get performance at scale.",
      cardTitle: "Paid Social Advertising",
      cardColor: "#A63FFD",
      gradientColors: "#ff965d 0%, #ff5bbe 50%, #a63ffd 100%",
      features: [
        "Data-driven campaign strategy and execution",
        "Creative production optimized for conversions",
        "Advanced audience targeting and lookalike modeling",
        "Real-time optimization and performance reporting"
      ]
    },
    {
      id: "seo",
      serviceName: "SEO",
      title: "Scalable SEO That Grows With You",
      subtitle: "Technical expertise meets content strategy for organic growth that lasts.\nFrom keyword research to backlink building—we turn search traffic into revenue.",
      cardTitle: "Search Engine Optimization",
      cardColor: "#1d4ed8",
      gradientColors: "#5d8bff 0%, #5bafff 50%, #3f7ffd 100%",
      features: [
        "Transparent pricing, no hidden fees",
        "No freelancers, only vetted SEO pros",
        "Keyword strategy, technical SEO, content & backlinks",
        "Real results, tracked and reported"
      ]
    },
    {
      id: "video-production",
      serviceName: "Video Production",
      title: "Bring Your Brand to Life\nThrough Video",
      subtitle: "From concept to delivery, we create compelling video content that captivates your audience.\nWhether it's brand stories, product demos, or social media content—we make videos that convert.",
      cardTitle: "Video Production",
      cardColor: "#FF5BBE",
      gradientColors: "#ff965d 0%, #ff5bbe 50%, #a63ffd 100%",
      features: [
        "Brand storytelling and product demos",
        "Social media and advertising video content",
        "Professional editing and post-production",
        "Optimized for every platform and format"
      ]
    },
    {
      id: "influencer-marketing",
      serviceName: "Influencer Marketing",
      title: "Amplify Your Reach\nThrough Authentic Voices",
      subtitle: "We connect you with the right influencers to authentically promote your brand.\nFrom micro-influencers to industry leaders—we build campaigns that drive results.",
      cardTitle: "Influencer Marketing",
      cardColor: "#FF8F3F",
      gradientColors: "#ff965d 0%, #ff5bbe 50%, #a63ffd 100%",
      features: [
        "Strategic influencer identification and outreach",
        "Campaign management from start to finish",
        "Performance tracking and ROI measurement",
        "Authentic partnerships that build trust"
      ]
    },
    {
      id: "pr-marketing",
      serviceName: "PR & Outreach",
      title: "Build Authority\nThrough Strategic PR",
      subtitle: "We position your brand as an industry leader through strategic media relations.\nFrom press releases to thought leadership—we secure the coverage that matters.",
      cardTitle: "PR & Outreach",
      cardColor: "#3F7FFD",
      gradientColors: "#ff965d 0%, #ff5bbe 50%, #a63ffd 100%",
      features: [
        "Strategic media relations and press outreach",
        "Thought leadership content development",
        "Crisis communication and reputation management",
        "Industry awards and recognition programs"
      ]
    },
    {
      id: "community-management",
      serviceName: "Community Management",
      title: "Build & Nurture\nThriving Communities",
      subtitle: "We help you build vibrant communities around your brand that drive engagement and loyalty.\nFrom Discord servers to social groups—we manage every touchpoint with your audience.",
      cardTitle: "Community Management",
      cardColor: "#5BAFFF",
      gradientColors: "#a63ffd 0%, #ff5bbe 50%, #ff965d 100%",
      features: [
        "Community strategy and platform setup",
        "Daily moderation and engagement",
        "Event planning and community activation",
        "Growth strategies and member retention"
      ]
    },
    {
      id: "branding",
      serviceName: "Branding",
      title: "Build a Brand\nThat Stands Out and Sticks",
      subtitle: "We craft brands that resonate from visual identity to verbal tone.\nOur approach combines deep research, clear positioning, and design systems built for growth.",
      cardTitle: "Branding",
      cardColor: "#232336",
      gradientColors: "#ff965d 0%, #ff5bbe 50%, #a63ffd 100%",
      features: [
        "Brand strategy, positioning & architecture",
        "Logo, visual identity & brand guidelines",
        "Messaging frameworks for all channels",
        "Brand audits & repositioning"
      ]
    },
    {
      id: "lead-generation",
      serviceName: "Lead Generation",
      title: "Consistent, Qualified Leads,\nWithout the Guesswork",
      subtitle: "We build and manage performance-driven lead generation systems that deliver results—not just clicks.\nFrom strategy to execution, we handle every step so your sales team focuses on closing, not chasing.",
      cardTitle: "Lead Generation",
      cardColor: "#232336",
      gradientColors: "#ff965d 0%, #ff5bbe 50%, #a63ffd 100%",
      features: [
        "High-intent lead targeting with real-time list building",
        "Personalized messaging that gets replies",
        "CRM integration and ongoing funnel optimization",
        "Weekly reports with lead quality insights"
      ]
    },
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
        <div className="w-full flex flex-col items-center justify-start pt-24 sm:pt-28 lg:pt-24 pb-10 px-4 md:px-8 lg:px-16">
          <div className="w-full max-w-5xl mx-auto text-center mt-10 mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-pink-400 mb-2">Services</h2>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Complete Service Portfolio</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12">
              We&apos;re experts in all things marketing. B2B, blockchain, fintech, software, and high-growth startup brands are our sweet spot. 
              Discover our comprehensive range of services designed to scale your business to new heights.
            </p>
            
            {/* Services Navigation */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-pink-400/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Quick Navigation
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-sm">
                {services.map((service, index) => (
                  <a 
                    key={service.id}
                    href={`#${service.id}`}
                    className="text-white/70 hover:text-pink-400 transition-all duration-200 text-left hover:scale-105 transform py-2 px-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-pink-400/20 group"
                    style={{
                      animationDelay: `${index * 50}ms`,
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

        {/* Services Sections */}
        <div className="space-y-24 pb-16">
          {services.map((service, index) => (
            <div key={service.id}>
              <ServiceSection {...service} />
              {index < services.length - 1 && (
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto max-w-6xl mt-16" />
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
          className="fixed bottom-8 right-8 z-50 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          aria-label="Back to top"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 14l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  );
}