import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen px-4 md:px-10 py-12" style={{ background: '#DBDBDB' }}>
      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-182px-48px)]">{/* 48px is approx navbar height */}
        <div className="text-center" style={{ maxWidth: 'calc(100vw - 700px)', marginLeft: 'auto', marginRight: 'auto', marginTop: '80px' }}>
          <h1
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-[23px] whitespace-nowrap"
            style={{ fontFamily: 'DM Serif Text, serif' }}
          >
            Scaling Web3 Projects from Zero to Moon
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-[18px]">
            We are a full-stack growth and marketing agency helping Web3 startups<br />
            accelerate adoption, build communities, and go global.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition text-sm">
            Book a Free Strategy Call
          </button>
          <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100 transition text-sm">
            Explore Our Work
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-5xl rounded-xl overflow-hidden shadow-lg relative mx-auto mt-8">
          {/* Blurred Gradient Circle Background */}
          <div
            aria-hidden="true"
            className="absolute -left-40 -top-56 z-0"
            style={{
              width: 700,
              height: 700,
              borderRadius: '700px',
              background: 'linear-gradient(180deg, #B7BA00 0%, #C56D2F 100%)',
              filter: 'blur(120px)',
              opacity: 0.5,
            }}
          />
          <img
            src="/hero.png"
            alt="hero Image"
            className="w-full object-cover relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

/*
<style jsx global>{`
  .glassy-navbar {
    background: rgba(255, 255, 255, 0.35);
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    border-radius: 48px;
    border: 1.5px solid rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
    padding: 0.5rem 2rem;
  }
`}</style>
*/
