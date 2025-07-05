import React from 'react';
import Image from 'next/image';

const plans = [
  {
    name: 'Nucleus Plan',
    price: '$3,200',
    //hours: '40 hr',
    description: 'Your lean growth starter kit.',
    highlight: false,
  },
  {
    name: 'Nerve Plan',
    price: '$5,600',
    //
    description: 'Your full-stack growth engine.',
    highlight: true,
  },
  {
    name: 'Nova Plan',
    price: '$9,600',
    //hours: '160 hr',
    description: 'Your in-house marketing department—on autopilot.',
    highlight: false,
  },
];

const features = [
  'Access to all our services',
  '24/5 timezone coverage',
  'Weekly calls',
  'Access to the entire marketing team',
  'Customized work plan',
  'Real-time management dashboard',
  'Dedicated marketing strategist',
  'Detailed monthly reports',
];

const PricingPlans = () => {
  return (
    <div id="pricing" className="bg-black text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 text-center">
      <h2 
        className="text-transparent bg-clip-text mb-8 sm:mb-10 lg:mb-12"
        style={{
          textAlign: 'center',
          fontFamily: 'DM Sans',
          fontSize: 'clamp(28px, 6vw, 40px)',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '100%',
          background: 'linear-gradient(82deg, #FF965D 54.13%, #BA34E2 100.03%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Choose a Plan That Moves at Your Speed
      </h2>
      <div className="w-full flex flex-col items-center mb-16 sm:mb-20 lg:mb-32">
        <div
          style={{
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'DM Sans',
            fontSize: 'clamp(16px, 4vw, 24px)',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '1.3',
            opacity: 0.9,
            whiteSpace: 'normal',
            marginBottom: '10px',
            padding: '0 1rem'
          }}
        >
          Flexible marketing subscriptions. Upgrade, downgrade, or switch anytime.
        </div>
        <div
          style={{
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'DM Sans',
            fontSize: 'clamp(14px, 3.5vw, 24px)',
            fontStyle: 'italic',
            fontWeight: 300,
            lineHeight: '1.3',
            opacity: 0.6,
            padding: '0 1rem'
          }}
        >
          Tap into a full-stack team, without the full-time cost.
        </div>
      </div>

      {/* Plans */}
      <div className="flex flex-col lg:flex-row justify-center mb-12 sm:mb-16 gap-6 sm:gap-8 lg:gap-16">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 transition-all duration-300 text-gray-100 hover:shadow-lg mx-auto lg:mx-0"
            style={{
              width: '100%',
              maxWidth: '320px',
              minHeight: '280px',
              height: 'auto',
              borderRadius: '20px',
              background: '#19191A'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'radial-gradient(84.11% 84.51% at 39.77% 16.11%, rgba(255, 158, 114, 0.70) 0%, rgba(255, 94, 193, 0.70) 100%)';
              // Change plan container color and border to white
              const planContainer = e.currentTarget.querySelector('.plan-container') as HTMLElement;
              if (planContainer) {
                planContainer.style.color = '#FFF';
                planContainer.style.border = '1px solid #FFF';
              }
              // Change description text color to white
              const descriptionText = e.currentTarget.querySelector('.description-text') as HTMLElement;
              if (descriptionText) {
                descriptionText.style.color = '#FFF';
                descriptionText.style.opacity = '1';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#19191A';
              // Reset plan container color and border
              const planContainer = e.currentTarget.querySelector('.plan-container') as HTMLElement;
              if (planContainer) {
                planContainer.style.color = '#B9B9B9';
                planContainer.style.border = '1px solid #6B6B6B';
              }
              // Reset description text color
              const descriptionText = e.currentTarget.querySelector('.description-text') as HTMLElement;
              if (descriptionText) {
                descriptionText.style.color = '#FFF';
                descriptionText.style.opacity = '0.6';
              }
            }}
          >
            <div 
              className="hover:text-white transition-colors cursor-pointer plan-container mb-4 md:mb-6 lg:mb-[45px]"
              style={{
                display: 'inline-flex',
                padding: '6px 14px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '360px',
                border: '1px solid #6B6B6B',
                color: '#B9B9B9',
                textAlign: 'center',
                fontFamily: 'DM Sans',
                fontSize: 'clamp(13px, 3.2vw, 16px)',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '1.4',
                letterSpacing: '0.32px'
              }}
            >
              {plan.name}
            </div>
            <div style={{ marginBottom: '15px sm:mb-20px lg:mb-25px' }}>
              <span
                style={{
                  color: '#FFF',
                  textAlign: 'center',
                  fontFamily: 'DM Sans',
                  fontSize: 'clamp(24px, 6vw, 32px)',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '22.4px',
                  letterSpacing: '0.32px'
                }}
              >
                {plan.price}
              </span>
              <span
                style={{
                  color: 'rgba(255, 255, 255, 0.30)',
                  fontFamily: 'DM Sans',
                  fontSize: 'clamp(20px, 5vw, 32px)',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '22.4px',
                  letterSpacing: '0.32px'
                }}
              >
                /mo
              </span>
            </div>
            <div 
              className="mb-4"
              style={{
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'DM Sans',
                fontSize: 'clamp(20px, 5vw, 26px)',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '22.4px',
                letterSpacing: '0.32px'
              }}
            >
              {plan.hours}
            </div>
            <p 
              className="description-text"
              style={{
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'DM Sans',
                fontSize: 'clamp(14px, 3.5vw, 16px)',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '1.4',
                letterSpacing: '0.32px',
                opacity: 0.6
              }}
            >
              {plan.description}
            </p>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="bg-[#1a1a1a] text-gray-300 rounded-xl max-w-6xl mx-auto p-6 sm:p-8">
        <h3 
          className="mb-6 text-center sm:text-left"
          style={{
            color: '#B9B9B9',
            textAlign: 'center',
            fontFamily: 'DM Sans',
            fontSize: 'clamp(14px, 3.5vw, 16px)',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '22.4px',
            letterSpacing: '0.32px',
            marginLeft: '0',
            marginBottom: '20px sm:mb-6'
          }}
        >
          All Plans include
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left text-sm">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <Image 
                src="/tick.svg" 
                alt="tick" 
                width={20}
                height={20}
                className="flex-shrink-0" 
                style={{
                  color: '#808080'
                }}
              />
                              <span
                  style={{
                    display: 'flex',
                    width: 'auto',
                    height: 'auto',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    color: '#808080',
                    fontFamily: 'DM Sans',
                    fontSize: 'clamp(14px, 3.5vw, 16px)',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '1.4',
                    letterSpacing: '0.16px',
                    whiteSpace: 'normal'
                  }}
                >
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans; 