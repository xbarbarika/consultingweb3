import React from 'react';
import Image from 'next/image';

const plans = [
  {
    name: 'Nucleus Plan',
    price: '$3,200',
    description: 'Your lean growth starter kit.',
    highlight: false,
    popular: false,
  },
  {
    name: 'Nerve Plan',
    price: '$5,600',
    description: 'Your full-stack growth engine.',
    highlight: true,
    popular: true,
  },
  {
    name: 'Nova Plan',
    price: '$9,600',
    description: 'Your in-house marketing department—on autopilot.',
    highlight: false,
    popular: false,
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
    <div id="pricing" className="relative bg-black text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-8 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 
            className="text-transparent bg-clip-text mb-6 sm:mb-8 lg:mb-10"
            style={{
              textAlign: 'center',
              fontFamily: 'DM Sans',
              fontSize: 'clamp(28px, 6vw, 48px)',
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
          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <p
              style={{
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'DM Sans',
                fontSize: 'clamp(16px, 4vw, 24px)',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '1.3',
                opacity: 0.9,
              }}
            >
              Flexible marketing subscriptions. Upgrade, downgrade, or switch anytime.
            </p>
            <p
              style={{
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'DM Sans',
                fontSize: 'clamp(14px, 3.5vw, 20px)',
                fontStyle: 'italic',
                fontWeight: 300,
                lineHeight: '1.3',
                opacity: 0.6,
              }}
            >
              Tap into a full-stack team, without the full-time cost.
            </p>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20 lg:mb-24">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transition-all duration-500 ${
                plan.popular ? 'md:-mt-8' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="px-4 py-2 rounded-full text-xs font-semibold text-white"
                    style={{
                      background: 'linear-gradient(90deg, #FF965D 0%, #BA34E2 100%)',
                      boxShadow: '0 4px 20px rgba(255, 150, 93, 0.3)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Card */}
              <div
                className={`h-full px-6 sm:px-8 py-8 sm:py-10 transition-all duration-500 text-gray-100 relative overflow-hidden pricing-card ${
                  plan.popular ? 'popular-card' : 'standard-card'
                }`}
                style={{
                  borderRadius: '24px',
                  background: plan.popular 
                    ? 'linear-gradient(135deg, rgba(255, 150, 93, 0.15) 0%, rgba(186, 52, 226, 0.15) 100%)' 
                    : 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: plan.popular 
                    ? '1px solid rgba(255, 150, 93, 0.4)' 
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: plan.popular
                    ? '0 8px 32px rgba(255, 150, 93, 0.2), 0 0 0 1px rgba(255, 150, 93, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    : '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Glassmorphism Overlay */}
                <div 
                  className="absolute inset-0 rounded-[24px] opacity-0 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%)',
                    pointerEvents: 'none'
                  }}
                ></div>

                {/* Shimmer Effect */}
                <div 
                  className="absolute inset-0 rounded-[24px] opacity-0 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                    transform: 'translateX(-100%)',
                    pointerEvents: 'none'
                  }}
                ></div>

                {/* Plan Badge */}
                <div className="flex justify-center mb-6 sm:mb-8 relative z-10">
                  <div 
                    className="inline-flex px-4 py-2 rounded-full text-center transition-all duration-300"
                    style={{
                      border: plan.popular ? '1px solid rgba(255, 150, 93, 0.5)' : '1px solid rgba(255, 255, 255, 0.2)',
                      color: plan.popular ? '#FF965D' : '#B9B9B9',
                      backgroundColor: plan.popular ? 'rgba(255, 150, 93, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      fontFamily: 'DM Sans',
                      fontSize: 'clamp(13px, 3.2vw, 16px)',
                      fontWeight: 500,
                      letterSpacing: '0.32px'
                    }}
                  >
                    {plan.name}
                  </div>
                </div>
                
                {/* Price */}
                <div className="text-center mb-6 sm:mb-8 relative z-10">
                  <div className="flex items-baseline justify-center">
                    <span
                      style={{
                        color: '#FFF',
                        fontFamily: 'DM Sans',
                        fontSize: 'clamp(32px, 8vw, 48px)',
                        fontWeight: 500,
                        letterSpacing: '0.32px'
                      }}
                    >
                      {plan.price}
                    </span>
                    <span
                      style={{
                        color: 'rgba(255, 255, 255, 0.4)',
                        fontFamily: 'DM Sans',
                        fontSize: 'clamp(16px, 4vw, 20px)',
                        fontWeight: 500,
                        letterSpacing: '0.32px',
                        marginLeft: '4px'
                      }}
                    >
                      /mo
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p 
                  className="text-center mb-8 sm:mb-10 relative z-10"
                  style={{
                    color: plan.popular ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.6)',
                    fontFamily: 'DM Sans',
                    fontSize: 'clamp(14px, 3.5vw, 18px)',
                    fontWeight: 500,
                    lineHeight: '1.4',
                    letterSpacing: '0.32px',
                  }}
                >
                  {plan.description}
                </p>

                {/* CTA Button */}
                <div className="mt-auto relative z-10">
                  <button 
                    className={`w-full py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base ${
                      plan.popular 
                        ? 'text-white hover:shadow-lg' 
                        : 'text-white border border-white/20 hover:border-pink-400/50 hover:bg-white/5'
                    }`}
                    style={plan.popular ? {
                      background: 'linear-gradient(90deg, #FF965D 0%, #BA34E2 100%)',
                      boxShadow: '0 4px 20px rgba(255, 150, 93, 0.3)',
                      backdropFilter: 'blur(10px)'
                    } : {
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="max-w-4xl mx-auto">
          <h3 
            className="text-center mb-8 sm:mb-10"
            style={{
              color: '#B9B9B9',
              fontFamily: 'DM Sans',
              fontSize: 'clamp(16px, 4vw, 20px)',
              fontWeight: 500,
              letterSpacing: '0.32px',
            }}
          >
            All Plans Include
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-all duration-300 feature-card"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
                }}>
                <div className="flex-shrink-0 mt-0.5">
                  <Image 
                    src="/tick.svg" 
                    alt="tick" 
                    width={20}
                    height={20}
                    className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300"
                    style={{
                      filter: 'hue-rotate(180deg) saturate(1.5) brightness(1.2)'
                    }}
                  />
                </div>
                <span
                  style={{
                    color: '#D1D5DB',
                    fontFamily: 'DM Sans',
                    fontSize: 'clamp(14px, 3.5vw, 16px)',
                    fontWeight: 500,
                    lineHeight: '1.5',
                    letterSpacing: '0.16px',
                  }}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <p className="text-white/60 text-sm sm:text-base mb-6 sm:mb-8">
            Not sure which plan is right for you?
          </p>
          <button className="px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-white border border-white/20 hover:border-pink-400/50 hover:bg-white/5 transition-all duration-300 text-sm sm:text-base hover:scale-105"
            style={{
              backdropFilter: 'blur(10px)',
              background: 'rgba(255, 255, 255, 0.05)'
            }}>
            Schedule a Consultation
          </button>
        </div>
      </div>

      <style jsx>{`
        .pricing-card {
          transform-style: preserve-3d;
        }
        
        .pricing-card:hover {
          transform: translateY(-12px) rotateX(3deg) rotateY(3deg);
          box-shadow: 
            0 25px 80px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            0 0 50px rgba(255, 150, 93, 0.3);
        }
        
        .popular-card:hover {
          box-shadow: 
            0 25px 80px rgba(255, 150, 93, 0.3),
            0 0 0 1px rgba(255, 150, 93, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            0 0 60px rgba(255, 150, 93, 0.4);
        }
        
        .pricing-card:hover .glassmorphism-overlay {
          opacity: 1;
        }
        
        .pricing-card:hover .shimmer-effect {
          opacity: 1;
          transform: translateX(100%);
        }
        
        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 
            0 12px 32px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
        }
        
        .feature-card:hover img {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default PricingPlans; 