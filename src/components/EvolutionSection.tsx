import React from "react";

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
  return (
    <section className="bg-black text-white py-20 px-6 text-center">
      <h2 
        className="mb-4 mx-auto w-full max-w-[320px] sm:max-w-[500px] lg:w-[553px] lg:max-w-none px-4 lg:px-0 text-2xl sm:text-3xl lg:text-[40px]"
        style={{
          textAlign: 'center',
          fontFamily: 'var(--font-dm-sans)',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '100%',
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
        className="mx-auto mb-12"
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
            className="transition-all duration-300 cursor-pointer inline-flex flex-col items-start text-left"
            style={{
              padding: '47px 60px 56px 44px',
              gap: '24px',
              borderRadius: '14px',
              background: 'rgba(20, 20, 20, 0.50)',
              backgroundBlendMode: 'screen'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#C5C5C5';
              e.currentTarget.style.padding = '47px 80px 56px 44px';
              // Change text colors to black on hover
              const h3 = e.currentTarget.querySelector('h3');
              const p = e.currentTarget.querySelector('p');
              if (h3) h3.style.color = 'black';
              if (p) p.style.color = 'black';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(20, 20, 20, 0.50)';
              e.currentTarget.style.padding = '47px 60px 56px 44px';
              // Restore original text colors
              const h3 = e.currentTarget.querySelector('h3');
              const p = e.currentTarget.querySelector('p');
              if (h3) h3.style.color = 'rgba(255, 255, 255, 0.50)';
              if (p) p.style.color = 'rgba(255, 255, 255, 0.50)';
            }}
          >
            <h3 
              className="transition-colors duration-300"
              style={{
                color: 'rgba(255, 255, 255, 0.50)',
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
              className="transition-colors duration-300"
              style={{
                color: 'rgba(255, 255, 255, 0.50)',
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
      <div className="mt-10">
        <button 
          className="px-6 py-3 rounded-full text-black text-sm font-medium shadow-lg transition-all duration-300"
          style={{
            background: 'linear-gradient(82deg, #FF965D 54.13%, #BA34E2 100.03%)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(82deg, #BA34E2 54.13%, #FF965D 100.03%)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'linear-gradient(82deg, #FF965D 54.13%, #BA34E2 100.03%)';
          }}
        >
          Learn more
        </button>
      </div>
    </section>
  );
} 