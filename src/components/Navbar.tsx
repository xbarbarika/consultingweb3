import React from 'react';

const Navbar = () => (
  <div className="fixed top-[50px] left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl flex justify-between items-center glassy-navbar glass relative">
    <div className="w-5 h-5 bg-black rounded-sm" />
    <div className="hidden md:flex space-x-[80px] text-sm text-gray-700">
      <a href="#" className="hover:text-black">Home</a>
      <a href="#" className="hover:text-black">Features</a>
      <a href="#" className="hover:text-black">Career</a>
    </div>
    <button className="bg-gray-200 text-sm px-4 py-1 rounded-full hover:bg-gray-300 transition">
      Contact us
    </button>
  </div>
);

export default Navbar; 