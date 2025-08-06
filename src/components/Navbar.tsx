'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaInstagram,
  FaTelegram,
  FaXTwitter,
} from 'react-icons/fa6';

interface NavbarProps {
  onMenuClick?: () => void;
}

const menuItems = [
  { label: 'Services'},
  { label: 'Industries' },
  { label: 'Our people' },
  { label: 'Company' },
  { label: 'Pricing' },
];



const companyDropdown = [
  { label: 'About', href: '/company-file/about' },
  { label: 'Blog', href: '/company-file/blog' },
  { label: 'Careers', href: '/company-file/careers' },
  { label: 'Contact', href: '/company-file/contact' },
];

const industriesDropdown = [
  { label: 'B2B', href: '/industries' },
  { label: 'Fintech', href: '/industries-file/fintech' },
  { label: 'Crypto', href: '/industries-file/crypto' },
  { label: 'Healthcare', href: '/industries-file/healthcare' },
  { label: 'Software', href: '/industries-file/software' },
  { label: 'SaaS', href: '/industries-file/saas' },
  { label: 'Startup', href: '/industries-file/startup' },
  { label: 'Small Business', href: '/industries-file/small-business' },
  { label: 'Gaming', href: '/industries-file/gaming' },
  { label: 'eSport', href: '/industries-file/esport' },
  { label: 'Mobile', href: '/industries-file/mobile' },
  { label: 'eCommerce', href: '/industries-file/ecommerce' },
];

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const pathname = usePathname();
  const [companyOpen, setCompanyOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const companyRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const companyTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const industriesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (companyRef.current && !companyRef.current.contains(event.target as Node)) {
        setCompanyOpen(false);
      }
      if (industriesRef.current && !industriesRef.current.contains(event.target as Node)) {
        setIndustriesOpen(false);
      }
    };

    if (companyOpen || industriesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [companyOpen, industriesOpen]);



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
    <nav className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-16 py-3 sm:py-4 text-white font-medium text-sm fixed top-0 left-0 z-50 bg-transparent backdrop-blur-sm transition-colors duration-300 group">
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
              <Link href="/services">
                <span className="capitalize">{item.label}</span>
              </Link>
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
      
      {/* Social Icons and CTA Button */}
      <div className="flex items-center gap-4">
        {/* Social Media Icons - Hidden on mobile */}
        <div className="hidden lg:flex items-center gap-4 text-white/60">
          <Link href="https://www.instagram.com/barbarika_xyz/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-5 h-5 cursor-pointer hover:text-white transition-colors duration-300" />
          </Link>
          <Link href="https://t.me/+FBj81VSgbiA2N2Zl" target="_blank" rel="noopener noreferrer">
            <FaTelegram className="w-5 h-5 cursor-pointer hover:text-white transition-colors duration-300" />
          </Link>
          <Link href="https://x.com/Barbarika192079" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="w-5 h-5 cursor-pointer hover:text-white transition-colors duration-300" />
          </Link>
        </div>
        
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