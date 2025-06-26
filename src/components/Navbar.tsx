'use client';
import React, { useState } from 'react';
import Link from 'next/link';

interface NavbarProps {
  onMenuClick?: () => void;
  showMenuButton?: boolean;
}

const menuItems = [
  { label: 'Services', hasDropdown: true },
  { label: 'Industries', hasDropdown: true },
  { label: 'Success Stories' },
  { label: 'Our People' },
  { label: 'Company', hasDropdown: true },
  { label: 'Pricing' },
  { label: 'Events' },
];

const Navbar: React.FC<NavbarProps> = ({ onMenuClick, showMenuButton }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav
      className={`w-full flex items-center justify-between px-16 py-6 text-white font-bold text-sm tracking-wide uppercase fixed top-0 left-0 z-30 transition-colors duration-300 ${isHovered ? 'bg-black' : 'bg-transparent'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{backdropFilter: 'none'}}
    >
      {/* Logo and Brand */}
      <div className="flex items-center gap-2">
        {/* Placeholder SVG logo */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="6" fill="#fff" fillOpacity="0.1"/>
          <path d="M8 20L16 10L24 20" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="ml-2 text-lg font-extrabold tracking-widest">NINJA</span>
      </div>
      {/* Menu */}
      <ul className="flex gap-10 items-center mx-auto">
        {menuItems.map((item) => (
          <li key={item.label} className="relative flex items-center cursor-pointer hover:text-pink-400 transition text-base font-semibold">
            <span>{item.label}</span>
            {item.hasDropdown && (
              <svg className="ml-1" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </li>
        ))}
      </ul>
      {/* CTA Button */}
      <button
        className="rounded-md px-6 py-2 font-semibold bg-transparent border border-transparent bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text border-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 transition relative"
        style={{
          borderImage: 'linear-gradient(90deg, #FF8BA7, #7F5CFF) 1',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderRadius: '8px',
          color: 'transparent',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Book Intro Call
      </button>
    </nav>
  );
};

export default Navbar; 