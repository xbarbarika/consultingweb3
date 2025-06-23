import React from 'react';

const AboutUs = () => {
  return (
    <div
      id="about-us"
      className="bg-[#F3F3F3] py-24 mt-24"
      style={{ padding: '0 140px', scrollMarginTop: '100px' }}
    >
      <div className="flex mx-auto rounded-lg overflow-hidden" style={{ maxWidth: '1529px' }}>
        {/* Left Content */}
        <div className="p-12 flex flex-col justify-center bg-white" style={{ flexBasis: '30%' }}>
          <h2 className="text-4xl font-bold mb-8 text-black">About Us</h2>
          <p className="text-lg text-black mb-6">
            We are a crypto-native marketing and growth agency.
          </p>
          <p className="text-lg text-black">
            Our mission is simple: help Web3 teams build real, sustainable traction in a crowded market. From DeFi and NFTs to Layer 1 protocols and Web3 tools, we&apos;ve launched, scaled, and advised 100+ projects with data-backed strategies and native community expertise.
          </p>
        </div>
        
        {/* Right Image */}
        <div style={{ flexBasis: '70%' }}>
          <img
            src="/aboutus.png"
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 