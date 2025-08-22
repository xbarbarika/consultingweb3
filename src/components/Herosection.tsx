import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/background.jpeg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>
      
      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-20 lg:pb-24">
        {/* Text Content */}
        <div className="text-center lg:text-left max-w-3xl lg:max-w-2xl xl:max-w-3xl mb-8 sm:mb-12 lg:mb-0">
          <div className="relative inline-block mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                style={{
                  color: 'white',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  lineHeight: '1.1',
                  textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                  position: 'relative',
                  display: 'inline-block',
                  padding: '0.5rem 1.5rem',
                  border: '3px solid #FF3B30',
                  borderRadius: '1rem',
                  background: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(10px)'
                }}
            >
              <span 
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                style={{
                  fontFamily: 'var(--font-tourney), sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontVariationSettings: '"wdth" 100',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
              >
                Your Technology Partner for
              </span>
              <span 
                className="block text-xl sm:text-2xl md:text-3xl mt-3"
                style={{
                  fontFamily: 'var(--font-press-start-2p), monospace',
                  fontWeight: 400,
                  lineHeight: '1.4',
                  letterSpacing: '-0.5px'
                }}
              >
                Web, SaaS, Blockchain, and AI Innovation
              </span>
            </h1>
          </div>
          
          <div className="relative z-20 mb-10 max-w-2xl mx-auto lg:mx-0">
            <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed"
               style={{
                 fontFamily: 'var(--font-numans), sans-serif',
                 lineHeight: '1.6',
                 textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                 fontWeight: 400,
                 position: 'relative',
                 zIndex: 20
               }}
            >
              We design and develop powerful digital products that help businesses innovate, scale, and stay ahead in a fast-changing world
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
            <button 
              className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              style={{
                background: 'rgba(0, 0, 0, 0.2)',
                color: 'white',
                border: '2px solid #FF3B30',
                backdropFilter: 'blur(10px)'
              }}
            >
              Get Started
            </button>
            <button 
              className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              style={{
                background: 'rgba(0, 0, 0, 0.2)',
                color: 'white',
                border: '2px solid #4776E6',
                backdropFilter: 'blur(10px)'
              }}
            >
              Learn More
            </button>
          </div>
        </div>
        
        {/* Floating Image - Enhanced Size */}
        <div className="relative w-full max-w-[90%] sm:max-w-lg lg:max-w-2xl xl:max-w-3xl mt-6 sm:mt-10 lg:mt-0 mx-auto lg:mx-0">
          <div className="relative w-full h-64 sm:h-80 md:h-[450px] lg:h-[600px] xl:h-[650px]">
            {/* Main Image - Responsive */}
            <div className="relative w-full h-full p-2 sm:p-3 md:p-4">
              <div className="relative w-full h-full">
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255, 240, 180, 0.15) 0%, transparent 60%)',
                    filter: 'blur(8px)',
                    transform: 'scale(1.08)',
                    opacity: 0.5
                  }}
                />
                <Image
                  src="/floating.png"
                  alt="Floating Icon"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 50vw"
                  style={{
                    filter: 'drop-shadow(0 2px 6px rgba(255, 240, 180, 0.08))',
                    animation: 'float 8s ease-in-out infinite',
                    transform: 'scale(1.05)'
                  }}
                />
              </div>
            </div>
            
            {/* Subtle Highlight - Only on larger screens */}
            <div className="hidden md:block absolute inset-0 overflow-hidden">
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 60%)',
                  borderRadius: '50%',
                  filter: 'blur(12px)'
                }}
              ></div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-purple-500/20 blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-orange-500/20 blur-3xl"></div>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-50">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(${Math.random() > 0.5 ? '255, 143, 78' : '202, 34, 234'}, ${Math.random() * 0.3 + 0.2})`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.7
            }}
          ></div>
        ))}
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full mt-1"></div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(10px) translateX(-10px);
          }
          75% {
            transform: translateY(-10px) translateX(10px);
          }
        }
      `}</style>
    </section>
  );
}
