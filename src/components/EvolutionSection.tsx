'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const features = [
  { title: "$100K", description: "Average savings on annual agency or in-house fees." },
  { title: "30+ services", description: "All-in-one package, from ads to content, PR to strategy." },
  { title: "5+ specialists", description: "A global, cross-functional team at your fingertips." },
  { title: "1–3 Months", description: "Typical ramp-up time saved vs. hiring or onboarding." },
  { title: "2 Hours/Week", description: "Time saved managing multiple vendors or team members." },
  { title: "1 D Turnaround", description: "From task created to execution kick-off. Lightning fast." }
];

const EvolutionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="relative min-h-screen w-full overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background.jpeg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className={`mb-6 transition-all duration-300 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{
            color: 'white',
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            lineHeight: '1.1',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
            position: 'relative',
            display: 'inline-block',
            padding: '1rem 2rem',
            border: '3px solid #FF3B30',
            borderRadius: '1rem',
            background: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(10px)'
          }}>
            <span className="block" style={{
              fontFamily: 'var(--font-tourney), sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              Welcome to the Next
            </span>
            <span className="block mt-2" style={{
              fontFamily: 'var(--font-press-start-2p), monospace',
              fontWeight: 400,
              fontSize: '0.4em',
              lineHeight: '1.4',
            }}>
              Evolution in Digital Marketing
            </span>
          </h2>
          
          <p className={`mt-8 max-w-2xl mx-auto transition-all duration-300 ease-out delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontFamily: 'var(--font-numans), sans-serif',
            fontSize: '1.25rem',
            lineHeight: '1.6',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            fontWeight: 400,
          }}>
            Experience smarter, faster, more agile marketing built for modern brands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`transition-all duration-300 ease-out cursor-pointer flex flex-col items-start text-left transform ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
              } ${
                hoveredCard === idx ? 'scale-105 -translate-y-1 shadow-2xl' : 'scale-100 translate-y-0 shadow-lg hover:scale-[1.02]'
              }`}
              style={{
                padding: '2rem',
                gap: '1.25rem',
                borderRadius: '1rem',
                background: hoveredCard === idx ? 'rgba(20, 20, 20, 0.8)' : 'rgba(0, 0, 0, 0.6)',
                transitionDelay: `${50 + idx * 25}ms`,
                boxShadow: hoveredCard === idx 
                  ? '0 15px 35px rgba(255, 59, 48, 0.2)' 
                  : '0 8px 25px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(10px)',
                border: hoveredCard === idx 
                  ? '1px solid rgba(255, 59, 48, 0.4)' 
                  : '1px solid rgba(255, 255, 255, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '200px',
                transition: 'all 0.3s ease-out, transform 0.2s ease-out'
              }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 className="transition-all duration-300 ease-out" style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '2rem',
                fontWeight: 700,
                lineHeight: '1.2',
                textAlign: 'left',
                margin: 0,
                padding: 0,
                background: 'none',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'currentColor',
                color: '#FF3B30'
              }}>
                {feature.title}
              </h3>
              <p className={`transition-all duration-300 ease-out ${
                hoveredCard === idx ? 'text-white/95' : 'text-white/70'
              }`} style={{
                fontFamily: 'var(--font-numans), sans-serif',
                fontSize: '1rem',
                lineHeight: '1.6',
                margin: 0,
                padding: 0,
                textAlign: 'left',
                maxWidth: '100%'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={`mt-16 text-center transition-all duration-300 ease-out delay-200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <button 
          className="px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          style={{
            background: 'transparent',
            color: 'white',
            border: '2px solid #FF3B30',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 10px rgba(255, 59, 48, 0.5)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.animation = 'gradientShift 3s ease infinite';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animation = '';
          }}
        >
          Learn more
        </button>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .scale-102 {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default EvolutionSection;