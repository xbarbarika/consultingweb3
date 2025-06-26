import React from 'react';

const AboutUs = () => {
  return (
    <div
      id="about-us"
      className="bg-[#F3F3F3] py-16 md:py-24 px-6 md:px-20 lg:px-36"
      style={{ scrollMarginTop: '100px' }}
    >
      <div className="mx-auto flex max-w-7xl flex-col overflow-hidden rounded-lg md:flex-row">
        {/* Left Content */}
        <div className="flex flex-col justify-center bg-white p-8 md:w-2/5 md:p-12">
          <h2 className="mb-6 text-3xl font-bold text-black md:mb-8 md:text-4xl">About Us</h2>
          <p className="mb-6 text-base text-black md:text-lg">
            We are a crypto-native marketing and growth agency.
          </p>
          <p className="text-base text-black md:text-lg">
            Our mission is simple: help Web3 teams build real, sustainable traction in a crowded market. From DeFi and NFTs to Layer 1 protocols and Web3 tools, we&apos;ve launched, scaled, and advised 100+ projects with data-backed strategies and native community expertise.
          </p>
        </div>
        
        {/* Right Image */}
        <div className="md:w-3/5">
          <img
            src="/aboutus.png"
            alt="About Us"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 