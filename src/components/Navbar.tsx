'use client';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl justify-between items-center glassy-navbar">
        <div className="w-5 h-5 bg-black rounded-sm" />
        <div className="flex space-x-[80px] text-sm text-gray-700">
          <a href="#about-us" className="hover:text-black">About Us</a>
          <a href="#services" className="hover:text-black">Services</a>
          <a href="#team" className="hover:text-black">Team</a>
          <a href="#faq" className="hover:text-black">FAQ</a>
        </div>
        <button className="bg-black text-white text-sm px-4 py-1 rounded-full hover:bg-gray-800 transition">
          Contact us
        </button>
      </div>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="w-5 h-5 bg-black rounded-sm" />
            </div>
            <div className="-mr-2 flex">
              <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about-us" className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium">About Us</a>
              <a href="#services" className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium">Services</a>
              <a href="#team" className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium">Team</a>
              <a href="#faq" className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium">FAQ</a>
            </div>
            <div className="px-2 pt-2 pb-3">
              <button className="w-full bg-black text-white text-sm px-4 py-2 rounded-full hover:bg-gray-800 transition">
                Contact us
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar; 