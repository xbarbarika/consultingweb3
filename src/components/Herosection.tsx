import React from 'react';

interface HeroSectionProps {
  onBookCallClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onBookCallClick }) => {
  return (
    <div 
      className="pt-32 pb-12 relative overflow-hidden"
      style={{
        backgroundColor: '#F3F3F3',
        backgroundImage: 'url(/Vector.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1"
        style={{
          width: 720,
          height: 720,
          borderRadius: '720px',
          background: 'linear-gradient(180deg, #B7BA00 0%, #C56D2F 100%)',
          filter: 'blur(300px)',
          opacity: 0.5,
        }}
      />
      <div style={{ padding: '0 140px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto z-10 relative">
          {/* Left Content */}
          <div className="text-left">
            <h1
              className="text-black mb-6"
              style={{
                fontFamily: 'DM Serif Text, serif',
                fontSize: '64px',
                fontWeight: 400,
                lineHeight: '100%',
              }}
            >
              Scaling Web3 Projects from Zero to Moon
            </h1>
            <p
              className="text-black mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '28px',
                fontWeight: 500,
              }}
            >
              We are a full-stack growth and marketing agency helping Web3 startups accelerate adoption, build communities, and go global.
            </p>
            <div className="flex items-center gap-3 mb-8">
              <span
                className="w-3 h-3 blinking-dot"
                style={{ backgroundColor: 'rgba(145, 118, 0, 1)', borderRadius: '50%' }}
              ></span>
              <span className="text-lg font-medium" style={{ color: 'rgba(145, 118, 0, 1)' }}>We are Live</span>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={onBookCallClick}
                className="bg-[#8A8A6A] text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition text-base font-semibold"
              >
                Book a Free Strategy Call
              </button>
              <button className="border border-black px-8 py-3 rounded-md hover:bg-gray-100 transition text-base font-semibold text-black">
                Explore Our Work
              </button>
            </div>

            {/* Stats Section */}
            <div className="flex justify-start gap-8 mt-12 text-left">
              <div>
                <p className="text-3xl font-bold text-black">500+</p>
                <p className="text-gray-800">satisfied clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-black">500+</p>
                <p className="text-gray-800">satisfied clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-black">500+</p>
                <p className="text-gray-800">satisfied clients</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            style={{
              width: '589px',
              height: '444px',
              borderRadius: '13.15px',
            }}
            className="overflow-hidden"
          >
            <img
              src="/hero.png"
              alt="Developer at work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Logos Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-16">
            
          {/* Clutch */}
          <div
            style={{
              width: 'auto',
              padding: '15px 25px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.50)',
            }}
            className="flex flex-col justify-between items-center text-center h-full"
          >
            <img src="/Clutchlogo.svg" alt="Clutch" className="h-12 mb-2" />
            <div className="text-xs text-gray-800">Top Crypto Marketing Agency 2025</div>
          </div>

          {/* Techreviewer */}
          <div
            style={{
              width: 'auto',
              padding: '15px 25px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.50)',
            }}
            className="flex flex-col justify-between items-center text-center h-full"
          >
            <img src="/TechReviewerLogo.svg" alt="Techreviewer" className="h-12 mb-2" />
            <div className="text-xs text-gray-800">Best Web Design Company</div>
          </div>

          {/* Trustpilot */}
          <div
            style={{
              width: 'auto',
              padding: '15px 25px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.50)',
            }}
            className="flex flex-col justify-between items-center text-center h-full"
          >
            <img src="/TrustpilotLogo.svg" alt="Trustpilot" className="h-12 mb-2" />
            <div className="text-xs text-gray-800">Top Rated Trustpilot Agency</div>
          </div>

          {/* Influencer Marketing Hub */}
          <div
            style={{
              width: 'auto',
              padding: '15px 25px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.50)',
            }}
            className="flex flex-col justify-between items-center text-center h-full"
          >
            <img src="/InfluencerLogo.svg" alt="Influencer Marketing Hub" className="h-12 mb-2" />
            <div className="text-xs text-gray-800">Top Crypto & NFT Agency</div>
          </div>

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
