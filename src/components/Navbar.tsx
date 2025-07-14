'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  onMenuClick?: () => void;
}

const menuItems = [
  { label: 'Services'},
  { label: 'Industries' },
  { label: 'Success stories' },
  { label: 'Our people' },
  { label: 'Company' },
  { label: 'Pricing' },
  { label: 'Events' },
];

const servicesDropdown = [
  { label: 'Marketing Subscription', href: '/marketing-sub' },
  { label: 'Social Media', href: '/social-media' },
  { label: 'Paid Social', href: '/paid-social' },
  { label: 'SEO', href: '/seo' },
  { label: 'Influencer Marketing', href: '/influencer' },
  { label: 'PR & Outreach', href: '/pr-marketing' },
  { label: 'Video Production', href: '/video' },
  { label: 'Lead Generation', href: '/lead-gen' },
  { label: 'Branding', href: '/branding' },
  { label: 'Community Management', href: '/community' },
  { label: 'Web3 & Mobile', href: '/web3-and-mobile' },
  { label: 'Blockchain ', href: '/blockchain' },
  { label: 'GenAI', href: '/genai' },
];

const companyDropdown = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
];

const industriesDropdown = [
  { label: 'B2B', href: '/industries' },
  { label: 'Fintech', href: '/fintech' },
  { label: 'Crypto', href: '/crypto' },
  { label: 'Healthcare', href: '/healthcare' },
  { label: 'Software', href: '/software' },
  { label: 'SaaS', href: '/saas' },
  { label: 'Startup', href: '/startup' },
  { label: 'Small Business', href: '/small-business' },
  { label: 'Gaming', href: '/gaming' },
  { label: 'eSport', href: '/esport' },
  { label: 'Mobile', href: '/mobile' },
  { label: 'eCommerce', href: '/ecommerce' },
];

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const companyTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const industriesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
      if (companyRef.current && !companyRef.current.contains(event.target as Node)) {
        setCompanyOpen(false);
      }
      if (industriesRef.current && !industriesRef.current.contains(event.target as Node)) {
        setIndustriesOpen(false);
      }
    };

    if (servicesOpen || companyOpen || industriesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [servicesOpen, companyOpen, industriesOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 100);
  };

  const handleCompanyMouseEnter = () => {
    if (companyTimeoutRef.current) {
      clearTimeout(companyTimeoutRef.current);
    }
    setCompanyOpen(true);
  };

  const handleCompanyMouseLeave = () => {
    companyTimeoutRef.current = setTimeout(() => {
      setCompanyOpen(false);
    }, 100);
  };

  const handleIndustriesMouseEnter = () => {
    if (industriesTimeoutRef.current) {
      clearTimeout(industriesTimeoutRef.current);
    }
    setIndustriesOpen(true);
  };

  const handleIndustriesMouseLeave = () => {
    industriesTimeoutRef.current = setTimeout(() => {
      setIndustriesOpen(false);
    }, 100);
  };
  
  return (
    <nav className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-16 py-3 sm:py-4 text-white font-medium text-sm fixed top-0 left-0 z-50 bg-transparent lg:bg-transparent lg:hover:bg-black transition-colors duration-300 backdrop-blur-sm group">
      {/* Logo and Brand */}
      <div className="flex items-center">
        <Link href="/">
          <button
            type="button"
            className="cursor-pointer bg-transparent border-none p-0 m-0 focus:outline-none"
            style={{ background: 'none' }}
          >
            <span className="text-lg sm:text-xl font-bold italic tracking-wider" style={{fontFamily: 'Epilogue, sans-serif'}}>BARBARIKA</span>
          </button>
        </Link>
      </div>
      
      {/* Menu Items - Center - HIDDEN ON TABLET */}
      <ul className="hidden lg:flex gap-8 items-center">
        {menuItems.map((item, index) => (
          <li
            key={item.label}
            className={`relative flex items-center cursor-pointer hover:text-pink-400 transition text-sm font-semibold capitalize ${index === 0 ? 'text-white' : 'text-gray-300'}`}
          >
            {item.label === 'Services' ? (
              <div
                ref={servicesRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="/service">
                  <span className="capitalize flex items-center gap-1 select-none">
                    {item.label} <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2.5L6 6.5L10 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </Link>
                {servicesOpen && (
                  <div 
                    className="absolute left-0 top-full mt-0 w-64 bg-white text-black rounded-lg shadow-lg py-2 z-50 border border-gray-200 animate-fade-in" 
                    style={{minWidth: '260px'}}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {servicesDropdown.map((service) => (
                      service.href ? (
                        <Link key={service.label} href={service.href}>
                          <div className="flex items-center justify-between px-5 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                            <span>{service.label}</span>
                          </div>
                        </Link>
                      ) : (
                        <div key={service.label} className="flex items-center justify-between px-5 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                          <span>{service.label}</span>
                        </div>
                      )
                    ))}
                  </div>
                )}
              </div>
            ) : item.label === 'Industries' ? (
              <div
                ref={industriesRef}
                className="relative"
                onMouseEnter={handleIndustriesMouseEnter}
                onMouseLeave={handleIndustriesMouseLeave}
              >
                <span className="capitalize flex items-center gap-1 select-none">
                  {item.label} <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2.5L6 6.5L10 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                {industriesOpen && (
                  <div 
                    className="absolute left-0 top-full mt-0 w-64 bg-white text-black rounded-lg shadow-lg py-2 z-50 border border-gray-200 animate-fade-in" 
                    style={{minWidth: '260px'}}
                    onMouseEnter={handleIndustriesMouseEnter}
                    onMouseLeave={handleIndustriesMouseLeave}
                  >
                    {industriesDropdown.map((industry) => (
                      industry.href ? (
                        <Link key={industry.label} href={industry.href}>
                          <div className="flex items-center justify-between px-5 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                            <span>{industry.label}</span>
                          </div>
                        </Link>
                      ) : (
                        <div key={industry.label} className="flex items-center justify-between px-5 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                          <span>{industry.label}</span>
                        </div>
                      )
                    ))}
                  </div>
                )}
              </div>
            ) : item.label === 'Company' ? (
              <div
                ref={companyRef}
                className="relative"
                onMouseEnter={handleCompanyMouseEnter}
                onMouseLeave={handleCompanyMouseLeave}
              >
                <span className="capitalize flex items-center gap-1 select-none">
                  {item.label} <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2.5L6 6.5L10 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                {companyOpen && (
                  <div 
                    className="absolute left-0 top-full mt-0 w-48 bg-white text-black rounded-lg shadow-lg py-2 z-50 border border-gray-200 animate-fade-in" 
                    style={{minWidth: '200px'}}
                    onMouseEnter={handleCompanyMouseEnter}
                    onMouseLeave={handleCompanyMouseLeave}
                  >
                    {companyDropdown.map((company) => (
                      company.href ? (
                        <Link key={company.label} href={company.href}>
                          <div className="flex items-center justify-between px-5 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                            <span>{company.label}</span>
                          </div>
                        </Link>
                      ) : (
                        <div key={company.label} className="flex items-center justify-between px-5 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                          <span>{company.label}</span>
                        </div>
                      )
                    ))}
                  </div>
                )}
              </div>
            ) : item.label === 'Success stories' ? (
              <Link href="/success-stories">
                <span className="capitalize">{item.label}</span>
              </Link>
            ) : item.label === 'Our people' ? (
              pathname === '/' ? (
                <span
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="capitalize"
                >
                  {item.label}
                </span>
              ) : (
                <Link href="/#team">
                  <span className="capitalize">{item.label}</span>
                </Link>
              )
            ) : item.label === 'Pricing' ? (
              pathname === '/' ? (
                <span
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="capitalize"
                >
                  {item.label}
                </span>
              ) : (
                <Link href="/#pricing">
                  <span className="capitalize">{item.label}</span>
                </Link>
              )
            ) : (
              <span className="capitalize">{item.label}</span>
            )}
          </li>
        ))}
      </ul>
      
      {/* CTA Button */}
      <div className="flex items-center gap-4">
        <Link href="/book-demo">
          <button 
            className="hidden lg:inline-flex justify-center items-center gap-2 px-6 py-3 text-white font-semibold rounded-full transition-all duration-300 text-sm border border-white/20 bg-black/30 hover:bg-white hover:text-black hover:border-white hover:shadow-lg" 
          >
            Book Intro-Call
          </button>
        </Link>
        
        {/* Mobile & Tablet Menu Button - VISIBLE ON TABLET */}
                 <button
           onClick={onMenuClick}
           className="lg:hidden p-2 text-white hover:text-pink-400 transition-colors"
           aria-label="Open menu"
         >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 