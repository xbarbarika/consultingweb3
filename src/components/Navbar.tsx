'use client';
import React from 'react';

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

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <nav className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-16 py-3 sm:py-4 text-white font-medium text-sm fixed top-0 left-0 z-30 bg-transparent hover:bg-black transition-colors duration-300 backdrop-blur-sm group">
      {/* Logo and Brand */}
      <div className="flex items-center">
        <button
          type="button"
          onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
          className="cursor-pointer bg-transparent border-none p-0 m-0 focus:outline-none"
          style={{ background: 'none' }}
        >
          <span className="text-lg sm:text-xl font-bold tracking-wider" style={{fontFamily: 'Epilogue, sans-serif'}}>BARBARIKA</span>
        </button>
      </div>
      
      {/* Menu Items - Center - HIDDEN ON TABLET */}
      <ul className="hidden lg:flex gap-8 items-center">
        {menuItems.map((item, index) => (
          <li
            key={item.label}
            className={`relative flex items-center cursor-pointer hover:text-pink-400 transition text-sm font-semibold capitalize ${index === 0 ? 'text-white' : 'text-gray-300'}`}
            onClick={e => {
              if (item.label === 'Services') {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              } else if (item.label === 'Industries') {
                e.preventDefault();
                document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth' });
              } else if (item.label === 'Our people') {
                e.preventDefault();
                document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
              } else if (item.label === 'Pricing') {
                e.preventDefault();
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="capitalize">{item.label}</span>
          </li>
        ))}
      </ul>
      
      {/* CTA Button */}
      <div className="flex items-center gap-4">
                 <button 
           className="hidden lg:inline-flex justify-center items-center gap-[10px] px-[18px] py-[7px] text-white font-medium rounded-[32px] transition-all duration-300 group-hover:!bg-white group-hover:!text-black text-sm" 
           style={{background: 'rgba(0, 0, 0, 0.24)'}}
           onMouseEnter={(e) => {
             e.currentTarget.style.background = 'linear-gradient(90deg, #FF69B4, #8A2BE2)';
             e.currentTarget.style.color = 'white';
           }}
           onMouseLeave={(e) => {
             const nav = e.currentTarget.closest('nav');
             if (nav && nav.matches(':hover')) {
               e.currentTarget.style.background = 'white';
               e.currentTarget.style.color = 'black';
             } else {
               e.currentTarget.style.background = 'rgba(0, 0, 0, 0.24)';
               e.currentTarget.style.color = 'white';
             }
           }}
         >
           Book Intro-Call
         </button>
        
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