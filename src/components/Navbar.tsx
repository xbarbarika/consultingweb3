'use client';
import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  FaInstagram,
  FaTelegram,
  FaXTwitter,
} from 'react-icons/fa6';
import Link from 'next/link';

interface NavbarProps {
  onMenuClick?: () => void;
}

const menuItems = [
  { label: 'Services'},
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

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const pathname = usePathname();
  const [companyOpen, setCompanyOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const companyRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const companyTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Check if we're on a blog detail page
  const isBlogDetailPage = pathname?.startsWith('/company-file/blog/') && pathname !== '/company-file/blog';
  
  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (companyRef.current && !companyRef.current.contains(event.target as Node)) {
        setCompanyOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    if (companyOpen || servicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [companyOpen, servicesOpen]);

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

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 100);
  };
  
  return (
    <nav className={`w-full flex items-center justify-between px-4 sm:px-6 lg:px-16 py-3 sm:py-4 font-medium text-sm fixed top-0 left-0 z-50 backdrop-blur-sm transition-all duration-300 ${
      isBlogDetailPage 
        ? 'bg-white/95 text-gray-900 shadow-sm border-b border-gray-200' 
        : 'bg-transparent text-white'
    }`}>
      {/* Logo and Brand */}
      <div className="flex items-center">
        <Link href="/">
          <button
            type="button"
            className="cursor-pointer bg-transparent border-none p-0 m-0 focus:outline-none"
            style={{ background: 'none' }}
          >
            <span className={`text-lg sm:text-xl font-bold tracking-wider ${isBlogDetailPage ? 'text-gray-900' : 'text-white'}`} style={{fontFamily: 'Epilogue, sans-serif'}}>BARBARIKA</span>
          </button>
        </Link>
      </div>
      
      {/* Menu Items - Center - HIDDEN ON TABLET */}
      <ul className="hidden lg:flex gap-8 items-center">
        {menuItems.map((item, index) => (
          <li
            key={item.label}
            className={`relative flex items-center cursor-pointer transition text-sm font-semibold capitalize ${
              isBlogDetailPage 
                ? index === 0 ? 'text-gray-900 hover:text-blue-600' : 'text-gray-600 hover:text-blue-600'
                : index === 0 ? 'text-white' : 'text-gray-300 hover:text-pink-400'
            }`}
          >
            {item.label === 'Services' ? (
              <div
                ref={servicesRef}
                className="relative"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <span className="capitalize flex items-center gap-1 select-none">
                  {item.label} <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2.5L6 6.5L10 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                {servicesOpen && (
                  <div 
                    className="absolute left-0 top-full mt-0 w-56 bg-white text-black rounded-lg shadow-lg py-2 z-50 border border-gray-200 animate-fade-in"
                    style={{minWidth: '224px'}}
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <Link href="/marketing">
                      <div className="flex items-center justify-between px-5 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-900">
                        <span>Marketing</span>
                        <span className="text-xs text-pink-500">Featured</span>
                      </div>
                    </Link>
                    <Link href="/services-file/blockchain">
                      <div className="flex items-center justify-between px-5 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-900">
                        <span>Blockchain</span>
                      </div>
                    </Link>
                    <Link href="/services-file/web3-and-mobile">
                      <div className="flex items-center justify-between px-5 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-900">
                        <span>Web3 & Mobile</span>
                      </div>
                    </Link>
                    <Link href="/services-file/genai">
                      <div className="flex items-center justify-between px-5 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-900">
                        <span>AI</span>
                      </div>
                    </Link>

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
                          <div className="flex items-center justify-between px-5 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-900">
                            <span>{company.label}</span>
                          </div>
                        </Link>
                      ) : (
                        <div key={company.label} className="flex items-center justify-between px-5 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-900">
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
        <div className={`hidden lg:flex items-center gap-4 ${isBlogDetailPage ? 'text-gray-600' : 'text-white/60'}`}>
          <Link href="https://www.instagram.com/barbarika_xyz/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={`w-5 h-5 cursor-pointer transition-colors duration-300 ${isBlogDetailPage ? 'hover:text-blue-600' : 'hover:text-white'}`} />
          </Link>
          <Link href="https://t.me/+FBj81VSgbiA2N2Zl" target="_blank" rel="noopener noreferrer">
            <FaTelegram className={`w-5 h-5 cursor-pointer transition-colors duration-300 ${isBlogDetailPage ? 'hover:text-blue-600' : 'hover:text-white'}`} />
          </Link>
          <Link href="https://x.com/Barbarika192079" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className={`w-5 h-5 cursor-pointer transition-colors duration-300 ${isBlogDetailPage ? 'hover:text-blue-600' : 'hover:text-white'}`} />
          </Link>
        </div>
        
        <Link href="/book-demo">
          <button 
            className={`hidden lg:inline-flex justify-center items-center gap-2 px-6 py-3 font-semibold rounded-full transition-all duration-300 text-sm ${
              isBlogDetailPage 
                ? 'text-white bg-blue-600 hover:bg-blue-700 border border-blue-600 hover:border-blue-700 shadow-lg' 
                : 'text-white border border-white/20 bg-black/30 hover:bg-white hover:text-black hover:border-white hover:shadow-lg'
            }`}
          >
            Book Intro-Call
          </button>
        </Link>
        
        {/* Mobile & Tablet Menu Button - VISIBLE ON TABLET */}
        <button
          onClick={onMenuClick}
          className={`lg:hidden p-2 transition-colors ${isBlogDetailPage ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-pink-400'}`}
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

// New: ServiceNavBar for main service categories
export const ServiceNavBar = () => (
  <div className="w-full flex justify-center mt-2 z-40">
    <nav className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg px-6 py-3 flex gap-4 md:gap-8 max-w-2xl w-full items-center justify-center">
      <Link href="/marketing" className="text-white/80 hover:text-pink-400 font-semibold transition-colors">Marketing</Link>
      <Link href="/services-file/blockchain" className="text-white/80 hover:text-pink-400 font-semibold transition-colors">Blockchain</Link>
      <Link href="/services-file/web3-and-mobile" className="text-white/80 hover:text-pink-400 font-semibold transition-colors">Web3 & Mobile</Link>
      <Link href="/services-file/genai" className="text-white/80 hover:text-pink-400 font-semibold transition-colors">GenAI</Link>
    </nav>
  </div>
); 