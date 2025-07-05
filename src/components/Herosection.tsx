import React from "react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative text-white min-h-[80vh] sm:min-h-[90vh] lg:min-h-screen w-full pt-36 pb-24 px-4 sm:px-6" style={{backgroundImage: 'url(/hero.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            {/* Background Circles Image */}
      <div className="absolute inset-0 z-0 herocircles-bg" style={{backgroundImage: 'url(/herocircles.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
      
      {/* Floating Labels */}
      <div className="absolute inset-0 z-0">
        <p className="hidden md:block absolute left-[60px] lg:left-[100px] top-[120px] lg:top-[180px] opacity-70" style={{fontFamily: '"Shadows Into Light", cursive', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, letterSpacing: '0.9px'}}>Performance Ads</p>
        <p className="hidden md:block absolute left-[80px] lg:left-[160px] bottom-[180px] lg:bottom-[240px] opacity-70" style={{fontFamily: '"Shadows Into Light", cursive', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, letterSpacing: '0.9px'}}>Influencer Ops</p>
        <p className="hidden md:block absolute right-[60px] lg:right-[100px] top-[140px] lg:top-[200px] opacity-70" style={{fontFamily: '"Shadows Into Light", cursive', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, letterSpacing: '0.9px'}}>Community Campaigns</p>
        <p className="hidden md:block absolute right-[80px] lg:right-[160px] bottom-[140px] lg:bottom-[200px] opacity-70" style={{fontFamily: '"Shadows Into Light", cursive', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, letterSpacing: '0.9px'}}>Tech PR</p>
        
        <div className="absolute top-[100px] sm:top-[140px] lg:top-[180px] left-1/2 transform -translate-x-1/2">
          <button className="inline-flex justify-center items-center gap-[8px] lg:gap-[10px] px-[16px] lg:px-[20px] py-[6px] lg:py-[8px] text-[10px] sm:text-xs rounded-[30px]" style={{background: 'rgba(255, 255, 255, 0.07)'}}>Chain the Future</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center lg:mt-0 md:-mt-12 -mt-24">
        <div className="text-center">
          <h1 className="w-full max-w-[320px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1200px] mx-auto text-center font-medium text-transparent bg-clip-text mb-8 sm:mb-12 lg:mb-20 mt-3 sm:mt-8 lg:mt-12 text-[28px] xs:text-[32px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-[32px] xs:leading-[36px] sm:leading-[40px] md:leading-[52px] lg:leading-[72px]" style={{
            fontFamily: 'var(--font-dm-sans)',
            fontStyle: 'normal',
            fontWeight: 500,
            background: 'linear-gradient(82deg, #FF8F4E 54.13%, #CA22EA 100.03%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            <span className="block sm:hidden text-[28px] xs:text-[32px] leading-[32px] xs:leading-[36px]">Subscription-based</span>
            <span className="block sm:hidden text-[28px] xs:text-[32px] leading-[32px] xs:leading-[36px]">marketing for</span>
            <span className="block sm:hidden text-[28px] xs:text-[32px] leading-[32px] xs:leading-[36px]">unstoppable growth</span>
            <span className="hidden sm:block">Subscription-based <br /> marketing for unstoppable growth</span>
        </h1>
          <p className="text-gray-300 mt-3 sm:mt-4 lg:mt-6 text-sm sm:text-base max-w-xs sm:max-w-md lg:max-w-2xl mx-auto px-2 sm:px-0">
            We architect high-conversion digital campaigns that help ambitious startups and enterprises break through noise and grow fast — without wasting ad dollars.
          </p>
          <div className="mt-4 sm:mt-6 lg:mt-8 flex flex-row justify-center gap-3 sm:gap-4 px-2 sm:px-0">
            <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition text-sm sm:text-base">Learn more</button>
            <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition text-sm sm:text-base">Book Demo</button>
          </div>
        </div>
      </div>

      {/* Footer Badges */}
      <div className="absolute bottom-[35px] left-0 right-0 z-10 hidden lg:flex justify-center gap-6 max-w-none mx-auto px-4">
        <div className="flex flex-col items-center w-[320px] px-[30px] py-[20px] rounded-[10px] text-center text-sm" style={{background: 'rgba(0, 0, 0, 0.35)'}}>
          <div className="flex items-center justify-center mb-2">
            <img src="/Clutchlogo.svg" alt="Clutch" style={{width: '180px', height: '60px', objectFit: 'contain', filter: 'brightness(0) invert(1)'}} />
          </div>
          <p className="text-xs text-gray-400">Top Crypto Marketing Agency 2025</p>
        </div>
        <div className="flex flex-col items-center w-[320px] px-[30px] py-[20px] rounded-[10px] text-center text-sm" style={{background: 'rgba(0, 0, 0, 0.35)'}}>
          <div className="flex items-center justify-center mb-2">
            <img src="/TechReviewerLogo.svg" alt="TechReviewer" style={{width: '180px', height: '60px', objectFit: 'contain', filter: 'brightness(0) invert(1)'}} />
          </div>
          <p className="text-xs text-gray-400">Best Web Design Company</p>
        </div>
        <div className="flex flex-col items-center w-[320px] px-[30px] py-[20px] rounded-[10px] text-center text-sm" style={{background: 'rgba(0, 0, 0, 0.35)'}}>
          <div className="flex items-center justify-center mb-2">
            <img src="/TrustpilotLogo.svg" alt="Trustpilot" style={{width: '180px', height: '60px', objectFit: 'contain', filter: 'brightness(0) invert(1)'}} />
          </div>
          <p className="text-xs text-gray-400">Top Rated Trustpilot Agency</p>
        </div>
        <div className="flex flex-col items-center w-[320px] px-[30px] py-[20px] rounded-[10px] text-center text-sm" style={{background: 'rgba(0, 0, 0, 0.35)'}}>
          <div className="flex items-center justify-center mb-2">
            <img src="/InfluencerLogo.svg" alt="Influencer MarketingHub" style={{width: '180px', height: '60px', objectFit: 'contain', filter: 'brightness(0) invert(1)'}} />
          </div>
          <p className="text-xs text-gray-400">Top Crypto & NFT Agency</p>
        </div>
      </div>
      
      {/* Mobile/Tablet Footer Badges */}
      <div className="absolute bottom-[100px] sm:bottom-[90px] md:bottom-[60px] left-0 right-0 z-10 grid grid-cols-2 gap-2 sm:gap-3 max-w-[320px] sm:max-w-[600px] mx-auto px-2 sm:px-4 lg:hidden">
        <div className="flex flex-col items-center w-full px-[15px] sm:px-[20px] py-[10px] sm:py-[15px] rounded-[10px] text-center text-sm" style={{background: 'rgba(0, 0, 0, 0.35)'}}>
          <div className="flex items-center justify-center mb-1">
            <img src="/Clutchlogo.svg" alt="Clutch" style={{width: '90px', height: '30px', objectFit: 'contain', filter: 'brightness(0) invert(1)'}} className="sm:w-[120px] sm:h-[40px]" />
            </div>
          <p className="text-[10px] sm:text-xs text-gray-400 hidden sm:block">Top Crypto Marketing Agency 2025</p>
                </div>
        <div className="flex flex-col items-center w-full px-[15px] sm:px-[20px] py-[10px] sm:py-[15px] rounded-[10px] text-center text-sm" style={{background: 'rgba(0, 0, 0, 0.35)'}}>
          <div className="flex items-center justify-center mb-1">
            <img src="/TechReviewerLogo.svg" alt="TechReviewer" style={{width: '90px', height: '30px', objectFit: 'contain', filter: 'brightness(0) invert(1)'}} className="sm:w-[120px] sm:h-[40px]" />
              </div>
          <p className="text-[10px] sm:text-xs text-gray-400 hidden sm:block">Best Web Design Company</p>
            </div>
        <div className="flex flex-col items-center w-full px-[15px] sm:px-[20px] py-[10px] sm:py-[15px] rounded-[10px] text-center text-sm" style={{background: 'rgba(0, 0, 0, 0.35)'}}>
          <div className="flex items-center justify-center mb-1">
            <img src="/TrustpilotLogo.svg" alt="Trustpilot" style={{width: '90px', height: '30px', objectFit: 'contain', filter: 'brightness(0) invert(1)'}} className="sm:w-[120px] sm:h-[40px]" />
          </div>
          <p className="text-[10px] sm:text-xs text-gray-400 hidden sm:block">Top Rated Trustpilot Agency</p>
            </div>
        <div className="flex flex-col items-center w-full px-[15px] sm:px-[20px] py-[10px] sm:py-[15px] rounded-[10px] text-center text-sm" style={{background: 'rgba(0, 0, 0, 0.35)'}}>
          <div className="flex items-center justify-center mb-1">
            <img src="/InfluencerLogo.svg" alt="Influencer MarketingHub" style={{width: '90px', height: '30px', objectFit: 'contain', filter: 'brightness(0) invert(1)'}} className="sm:w-[120px] sm:h-[40px]" />
          </div>
          <p className="text-[10px] sm:text-xs text-gray-400 hidden sm:block">Top Crypto & NFT Agency</p>
        </div>
      </div>


    </section>
  );
}
