'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const servicesData = [
  { label: 'Marketing', href: '/marketing', featured: true },
  { label: 'Blockchain', href: '/services-file/blockchain' },
  { label: 'Web3 & Mobile', href: '/services-file/web3-and-mobile' },
  { label: 'AI', href: '/services-file/genai' },
];

const companyData = [
  { label: 'About', href: '/company-file/about' },
  { label: 'Blog', href: '/company-file/blog' },
  { label: 'Careers', href: '/company-file/careers' },
  { label: 'Contact', href: '/company-file/contact' },
];

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setTimeout(() => setIsAnimating(false), 300);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    setServicesOpen(false);
    setCompanyOpen(false);
    onClose();
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col transition-all duration-300 h-screen ${
        isOpen 
          ? 'opacity-100 backdrop-blur-xl' 
          : 'opacity-0 backdrop-blur-none pointer-events-none'
      }`}
      style={{
        background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(20,20,40,0.98) 50%, rgba(0,0,0,0.95) 100%)',
        height: '100dvh' // Use dynamic viewport height for better mobile support with fallback from h-screen class
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-8 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="relative flex items-center justify-between p-4 sm:p-6 border-b border-white/10 flex-shrink-0">
        <Link href="/" onClick={handleClose}>
          <span 
            className="text-xl sm:text-2xl font-bold tracking-wider text-white hover:text-pink-400 transition-colors" 
            style={{ fontFamily: 'Epilogue, sans-serif' }}
          >
            BARBARIKA
          </span>
        </Link>
        <button
          onClick={handleClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Scrollable Menu Content */}
      <div className="relative flex-1 overflow-y-auto overscroll-contain">
        <div className="max-w-lg mx-auto px-4 sm:px-6 py-4 sm:py-6 pb-6 sm:pb-8">
          
          {/* Navigation Items */}
          <nav className="space-y-1">
            {/* Home */}
            <Link href="/" onClick={handleClose}>
              <div className={`group flex items-center justify-between p-3 sm:p-4 rounded-xl transition-all duration-200 ${
                pathname === '/' ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30' : 'hover:bg-white/5'
              }`}>
                <span className={`text-base sm:text-lg font-medium ${
                  pathname === '/' ? 'text-pink-400' : 'text-white group-hover:text-pink-400'
                } transition-colors`} style={{ fontFamily: 'Inter, sans-serif' }}>
                  Home
                </span>
              </div>
            </Link>

            {/* Services with Dropdown */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="group w-full flex items-center justify-between p-3 sm:p-4 rounded-xl transition-all duration-200 hover:bg-white/5"
              >
                <span className="text-base sm:text-lg font-medium text-white group-hover:text-pink-400 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Services
                </span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={`text-white/60 group-hover:text-pink-400 transition-all duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {servicesOpen && (
                <div className="mt-2 ml-2 sm:ml-4 space-y-1 animate-fade-in">
                  <div className="space-y-1">
                    {servicesData.map((service) => (
                      <Link key={service.label} href={service.href} onClick={handleClose}>
                        <div className={`group flex items-center justify-between p-2 sm:p-3 rounded-lg transition-all duration-200 ${
                          pathname === service.href ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30' : 'hover:bg-white/5'
                        }`}>
                          <span className={`text-sm transition-colors ${
                            pathname === service.href ? 'text-pink-400 font-medium' : 'text-white/70 group-hover:text-white'
                          }`}>
                            {service.label}
                          </span>
                          {service.featured && (
                            <span className="text-xs text-pink-500 bg-pink-500/10 px-2 py-1 rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Our People - Scroll to section if on home, otherwise navigate */}
            <button
              onClick={() => {
                if (pathname === '/') {
                  handleClose();
                  setTimeout(() => {
                    document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
                  }, 300);
                } else {
                  window.location.href = '/#team';
                }
              }}
              className="group w-full flex items-center justify-between p-3 sm:p-4 rounded-xl transition-all duration-200 hover:bg-white/5"
            >
              <span className="text-base sm:text-lg font-medium text-white group-hover:text-pink-400 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                Our People
              </span>
            </button>

            {/* Company with Dropdown */}
            <div>
              <button
                onClick={() => setCompanyOpen(!companyOpen)}
                className="group w-full flex items-center justify-between p-3 sm:p-4 rounded-xl transition-all duration-200 hover:bg-white/5"
              >
                <span className="text-base sm:text-lg font-medium text-white group-hover:text-pink-400 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Company
                </span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={`text-white/60 group-hover:text-pink-400 transition-all duration-200 ${companyOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {companyOpen && (
                <div className="mt-2 ml-2 sm:ml-4 space-y-1 animate-fade-in">
                  <div className="space-y-1">
                    {companyData.map((company) => (
                      <Link key={company.href} href={company.href} onClick={handleClose}>
                        <div className={`group flex items-center justify-between p-2 sm:p-3 rounded-lg transition-all duration-200 ${
                          pathname === company.href ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30' : 'hover:bg-white/5'
                        }`}>
                          <span className={`text-sm transition-colors ${
                            pathname === company.href ? 'text-pink-400 font-medium' : 'text-white/70 group-hover:text-white'
                          }`}>
                            {company.label}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Pricing - Scroll to section if on home, otherwise navigate */}
            <button
              onClick={() => {
                if (pathname === '/') {
                  handleClose();
                  setTimeout(() => {
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                  }, 300);
                } else {
                  window.location.href = '/#pricing';
                }
              }}
              className="group w-full flex items-center justify-between p-3 sm:p-4 rounded-xl transition-all duration-200 hover:bg-white/5"
            >
              <span className="text-base sm:text-lg font-medium text-white group-hover:text-pink-400 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                Pricing
              </span>
            </button>
          </nav>

          {/* CTA Section - Always visible at bottom */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
            <div className="text-center mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2" style={{ fontFamily: 'Epilogue, sans-serif' }}>
                Ready to Get Started?
              </h3>
              <p className="text-white/60 text-sm">
                Book a free consultation call with our experts
              </p>
            </div>
            
            <Link href="/book-demo" onClick={handleClose}>
              <button className="w-full px-6 py-3 sm:py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl relative overflow-hidden group text-sm sm:text-base"
                style={{
                  background: 'linear-gradient(90deg, #ff965d 0%, #ff5bbe 50%, #a63ffd 100%)',
                  boxShadow: '0 8px 32px rgba(255, 91, 190, 0.3)'
                }}>
                <span className="relative z-10">Book Intro-Call</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>
        </div>
        
        {/* Extra bottom padding to ensure CTA is always accessible */}
        <div className="h-4 sm:h-6 flex-shrink-0"></div>
      </div>
    </div>
  );
};

export default MenuModal; 