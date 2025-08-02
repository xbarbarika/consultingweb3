'use client';
import React, { useState, useEffect, useRef } from "react";

const features = [
  {
    title: "$100K",
    description: "Average savings on annual agency or in-house fees.",
  },
  {
    title: "30+ services",
    description: "All-in-one package, from ads to content, PR to strategy.",
  },
  {
    title: "5+ specialists",
    description: "A global, cross-functional team at your fingertips.",
  },
  {
    title: "1–3 Months",
    description: "Typical ramp-up time saved vs. hiring or onboarding.",
  },
  {
    title: "2 Hours/Week",
    description: "Average savings on annual agency or in-house fees.",
  },
  {
    title: "1 D Turnaround",
    description: "From task created to execution kick-off. Lightning fast.",
  },
];

export default function EvolutionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section ref={sectionRef} id="industries" className="bg-black text-white py-20 px-6 text-center overflow-hidden">
      <h2 
        className={`mb-4 mx-auto w-full max-w-[320px] sm:max-w-[500px] lg:max-w-[700px] px-4 lg:px-0 text-2xl sm:text-3xl lg:text-[40px] transition-all duration-300 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{
          textAlign: 'center',
          fontFamily: 'var(--font-dm-sans)',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '1.2',
          background: 'linear-gradient(82deg, #FF965D 54.13%, #BA34E2 100.03%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent'
        }}
      >
        Welcome to the Next <br /> Evolution in Digital Marketing
      </h2>
      <p 
        className={`mx-auto mb-12 transition-all duration-300 ease-out delay-50 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{
          color: '#FFF',
          fontFamily: 'var(--font-inter)',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: 'normal',
          opacity: 0.6
        }}
      >
        Experience smarter, faster, more agile marketing built for modern brands.
      </p>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`transition-all duration-150 ease-out cursor-pointer inline-flex flex-col items-start text-left transform ${
              isVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-12 scale-95'
            } ${
              hoveredCard === idx 
                ? 'scale-102 translate-y-[-2px] shadow-xl' 
                : 'scale-100 translate-y-0 shadow-lg'
            }`}
            style={{
              padding: '47px 60px 56px 44px',
              gap: '24px',
              borderRadius: '14px',
              background: hoveredCard === idx 
                ? 'rgba(255, 255, 255, 0.1)'
                : 'rgba(20, 20, 20, 0.80)',
              backgroundBlendMode: 'screen',
              transitionDelay: `${50 + idx * 25}ms`,
              boxShadow: hoveredCard === idx 
                ? '0 15px 35px rgba(0, 0, 0, 0.3)' 
                : '0 8px 25px rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(15px)',
              border: hoveredCard === idx 
                ? '1px solid rgba(255, 255, 255, 0.2)' 
                : '1px solid rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3 
              className={`transition-all duration-100 ease-out ${
                hoveredCard === idx ? 'text-white' : 'text-white/70'
              }`}
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '28px',
                fontStyle: 'normal',
                lineHeight: 'normal',
                textAlign: 'left'
              }}
            >
              {idx === 0 && (
                <span style={{ fontWeight: 600 }}>{feature.title}</span>
              )}
              {idx === 1 && (
                <>
                  <span style={{ fontWeight: 600 }}>30+ </span>
                  <span style={{ fontWeight: 400 }}>services</span>
                </>
              )}
              {idx === 2 && (
                <>
                  <span style={{ fontWeight: 600 }}>5+ </span>
                  <span style={{ fontWeight: 400 }}>specialists</span>
                </>
              )}
              {idx === 3 && (
                <>
                  <span style={{ fontWeight: 600 }}>1–3 </span>
                  <span style={{ fontWeight: 400 }}>Months</span>
                </>
              )}
              {idx === 4 && (
                <>
                  <span style={{ fontWeight: 600 }}>2 </span>
                  <span style={{ fontWeight: 400 }}>Hours/Week</span>
                </>
              )}
              {idx === 5 && (
                <>
                  <span style={{ fontWeight: 600 }}>1 </span>
                  <span style={{ fontWeight: 400 }}>D Turnaround</span>
                </>
              )}
            </h3>
            <p 
              className={`transition-all duration-100 ease-out ${
                hoveredCard === idx ? 'text-white/90' : 'text-white/60'
              }`}
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal',
                width: '275px',
                textAlign: 'left'
              }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Learn More Button */}
      <div className={`mt-10 transition-all duration-300 ease-out delay-150 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <button 
          className="px-8 py-4 rounded-full text-black text-sm font-bold shadow-lg transition-all duration-150 ease-out transform hover:scale-105 hover:shadow-xl active:scale-95"
          style={{
            background: 'linear-gradient(45deg, #FF965D, #BA34E2, #FF965D)',
            backgroundSize: '200% 200%',
            animation: 'gradientShift 3s ease infinite'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.animation = 'gradientShift 1s ease infinite';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animation = 'gradientShift 3s ease infinite';
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
    </section>
  );
} 