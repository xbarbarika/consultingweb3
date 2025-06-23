import React from 'react';

const Navbar = () => (
  <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl flex justify-between items-center glassy-navbar">
    <div className="w-5 h-5 bg-black rounded-sm" />
    <div className="hidden md:flex space-x-[80px] text-sm text-gray-700">
      <a href="#about-us" className="hover:text-black">About Us</a>
      <a href="#services" className="hover:text-black">Services</a>
      <a href="#team" className="hover:text-black">Team</a>
      <a href="#faq" className="hover:text-black">FAQ</a>
    </div>
    <button className="bg-black text-white text-sm px-4 py-1 rounded-full hover:bg-gray-800 transition">
      Contact us
    </button>
  </div>
);

export default Navbar; 