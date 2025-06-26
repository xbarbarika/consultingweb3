import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative bg-[#0B0C2A] text-white min-h-screen overflow-hidden font-sans">
      {/* Glowing Background Effect */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF8BA7] via-[#7F5CFF] to-transparent opacity-60 blur-[100px]" />
        <div className="absolute right-0 bottom-0 w-[400px] h-[300px] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#00E0FF] via-[#D38EFF] to-transparent opacity-40 blur-[80px]" />
      </div>
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-start px-20 pt-32 pb-16">
        <h1 className="text-[64px] font-semibold leading-tight tracking-tight font-dm-sans">
          <span
            className="inline-block text-transparent bg-clip-text font-semibold font-dm-sans"
            style={{
              backgroundImage: 'linear-gradient(90deg, #ff9966 0%, #ff5e62 40%, #ff8ba7 70%, #a685ff 100%)',
            }}
          >
            SUBSCRIPTION-BASED
          </span><br />
          <span className="text-white font-semibold font-dm-sans">MARKETING FOR UNSTOPPABLE GROWTH</span>
        </h1>
        {/* Divider/Arrow and Subheading/Button side by side */}
        <div className="flex w-full items-center mt-2 mb-4">
          {/* Divider and Arrow */}
          <div className="flex-1 flex items-center">
            <div className="h-px bg-white/60 w-full" />
            <svg className="ml-4" width="56" height="24" viewBox="0 0 56 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12H54M54 12L46 4M54 12L46 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {/* Subheading and Button */}
          <div className="flex flex-col items-start ml-8" style={{width: 600}}>
            <p className="text-xl text-gray-300 text-left mb-2 font-dm-sans">
              Design, development, content, ads and all you need in one package from a leading digital marketing company worldwide
            </p>
            <button className="w-full py-4 rounded-lg text-lg font-bold text-white shadow-lg transition text-center gradient-reverse-on-hover font-dm-sans">
              Book a demo
            </button>
          </div>
        </div>
      </div>
      {/* Awards & Trust Section */}
      <div className="relative z-10 flex justify-center gap-6 mt-8 px-10 flex-wrap">
        {[
          { name: 'Clutch', text: 'Top Digital Marketing Agencies For Startups' },
          { name: 'sortlist', text: 'Best Advertising Agency In The US' },
          { name: 'FINTECH DRIFT', text: 'Best Marketing Agencies For Fintech Companies' },
          { name: 'Influencer MarketingHub', text: '#1 Crypto Marketing Agency 2021–2023' },
          { name: 'HOSTINGER', text: 'Best Digital Agency Worldwide' },
        ].map((item, idx) => (
          <div
            key={idx}
            className="w-60 h-28 border border-white/20 rounded-2xl p-4 flex flex-col items-center justify-center text-center bg-white/5 text-base text-white shadow-sm hover:shadow-lg hover:bg-white/10 transition backdrop-blur-sm"
          >
            <div className="font-semibold text-2xl mb-1">{item.name}</div>
            <div className="text-gray-200 text-sm">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
