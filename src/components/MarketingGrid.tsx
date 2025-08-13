import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Crypto Marketing",
    description:
      "Effectively promote your cryptocurrency and blockchain offerings through targeted digital marketing strategies.",
    projects: 50,
    active: true,
    icon: "bitcoin-btc.svg",
  },
  {
    title: "B2B Marketing",
    description:
      "Capture the attention of key decision-makers and increase your brand's visibility in the business-to-business space with our specialist expertise.",
    projects: 50,
    icon: "recovery-convert.svg",
  },
  {
    title: "Fintech Marketing",
    description:
      "Gain a competitive edge in the financial tech sector using our strategic marketing strategies. Drive awareness, foster trust, and trigger long-term growth.",
    projects: 29,
    icon: "dollar-circle.svg",
  },
  {
    title: "SaaS Marketing",
    description:
      "Grow your SaaS business with a focused strategy that boosts engagement and increases customer acquisition.",
    projects: 50,
    icon: "data.svg",
  },
  {
    title: "Gaming Marketing",
    description:
      "Engage the gaming community and promote your product with an effective campaign designed to drive user engagement.",
    projects: 29,
    icon: "mouse.svg",
  },
  {
    title: "Esports Marketing",
    description:
      "Increase your reach in the competitive Esports world with a carefully planned strategy that raises brand awareness.",
    projects: 50,
    icon: "gameboy.svg",
  },
  {
    title: "Mobile Marketing",
    description:
      "Reach your target audience and promote your mobile app with a marketing roadmap that drives downloads.",
    projects: 29,
    icon: "Services.svg",
  },
  {
    title: "iGaming Marketing",
    description:
      "Unlock the potential of your iGaming brand with sophisticated marketing techniques that engage and drive results.",
    projects: 30,
    icon: "gameboy-1.svg",
  },
  {
    title: "Software Marketing",
    description:
      "Discover how BARBARIKA can take your software company from obscurity to global reach.",
    projects: 30,
    icon: "code-circle.svg",
  },
  {
    title: "Small Business",
    description:
      "Start growing your small business with targeted digital campaigns that build relationships and drive conversions.",
    projects: 29,
    icon: "layer.svg",
  },
  {
    title: "Ecommerce",
    description:
      "Empower your ECommerce venture with comprehensive digital marketing strategies for growth and success.",
    projects: 30,
    icon: "bag-happy.svg",
  },
  {
    title: "Startup Marketing",
    description:
      "Get your start-up off the ground with a comprehensive digital marketing strategy designed to bring success from day one.",
    projects: 29,
    icon: "flash-circle.svg",
  },
];

const MarketingGrid = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 767px) {
            .marketing-card {
              width: 100% !important;
              max-width: 100% !important;
              min-height: 220px !important;
            }
            .marketing-grid {
              column-gap: 15px !important;
              row-gap: 20px !important;
            }
            .marketing-title {
              font-size: 20px !important;
              margin-bottom: 30px !important;
            }
            .marketing-grid-container {
              padding-top: 40px !important;
            }
          }
          @media (min-width: 1024px) {
            .marketing-grid-container {
              padding-top: 80px !important;
              height: auto !important;
              min-height: 100vh !important;
            }
            .marketing-title {
              font-size: 36px !important;
              margin-bottom: 60px !important;
            }
            .marketing-grid {
              column-gap: 25px !important;
              row-gap: 35px !important;
            }
            .department-badge {
              width: auto !important;
              height: auto !important;
              padding: 8px 16px !important;
              font-size: 12px !important;
              line-height: 16px !important;
            }

            .service-icon {
              width: 28px !important;
              height: 28px !important;
            }
            .marketing-card {
              height: auto !important;
              min-height: 280px !important;
              display: flex !important;
              flex-direction: column !important;
            }
            .marketing-card p {
              flex-grow: 1 !important;
              word-wrap: break-word !important;
              overflow-wrap: break-word !important;
              hyphens: auto !important;
            }
            .marketing-grid {
              align-items: stretch !important;
            }
          }
          @media (min-width: 768px) and (max-width: 1023px) {
            .marketing-title {
              font-size: 28px !important;
              margin-bottom: 50px !important;
            }
            .marketing-grid {
              column-gap: 20px !important;
              row-gap: 30px !important;
            }
            .department-badge {
              width: auto !important;
              height: auto !important;
              padding: 6px 12px !important;
              font-size: 11px !important;
              line-height: 14px !important;
            }

            .service-icon {
              width: 24px !important;
              height: 24px !important;
            }
            .marketing-card {
              height: auto !important;
              min-height: 260px !important;
            }
            .marketing-card p {
              word-wrap: break-word !important;
              overflow-wrap: break-word !important;
              hyphens: auto !important;
            }
            .marketing-grid-container {
              padding-top: 50px !important;
            }
          }
          
          @media (min-width: 1280px) {
            .marketing-grid-container {
              padding-top: 100px !important;
            }
            .marketing-title {
              font-size: 40px !important;
              margin-bottom: 80px !important;
            }
            .marketing-grid {
              column-gap: 30px !important;
              row-gap: 40px !important;
            }
            .marketing-card {
              min-height: 300px !important;
            }
          }
          
          /* Enhanced 3D Glassy Card Styles */
          .marketing-card {
            position: relative !important;
            background: rgba(255, 255, 255, 0.05) !important;
            backdrop-filter: blur(20px) !important;
            -webkit-backdrop-filter: blur(20px) !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            box-shadow: 
              0 8px 32px rgba(0, 0, 0, 0.3),
              0 0 0 1px rgba(255, 255, 255, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
            transform-style: preserve-3d !important;
          }
          
          .marketing-card::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            background: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.1) 0%,
              rgba(255, 255, 255, 0.05) 50%,
              rgba(255, 255, 255, 0.1) 100%
            ) !important;
            border-radius: inherit !important;
            opacity: 0 !important;
            transition: opacity 0.4s ease !important;
            pointer-events: none !important;
          }
          
          .marketing-card::after {
            content: '' !important;
            position: absolute !important;
            top: -1px !important;
            left: -1px !important;
            right: -1px !important;
            bottom: -1px !important;
            background: linear-gradient(
              45deg,
              rgba(255, 150, 93, 0.3),
              rgba(186, 52, 226, 0.3),
              rgba(255, 150, 93, 0.3)
            ) !important;
            border-radius: inherit !important;
            opacity: 0 !important;
            transition: opacity 0.4s ease !important;
            z-index: -1 !important;
          }
          
          .marketing-card:hover {
            transform: translateY(-8px) rotateX(2deg) rotateY(2deg) !important;
            box-shadow: 
              0 20px 60px rgba(0, 0, 0, 0.4),
              0 0 0 1px rgba(255, 255, 255, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              0 0 40px rgba(255, 150, 93, 0.2) !important;
            background: rgba(255, 255, 255, 0.08) !important;
          }
          
          /* Mobile hover adjustments */
          @media (max-width: 768px) {
            .marketing-card:hover {
              transform: translateY(-4px) rotateX(1deg) rotateY(1deg) !important;
            }
          }
          
          .marketing-card:hover::before {
            opacity: 1 !important;
          }
          
          .marketing-card:hover::after {
            opacity: 1 !important;
          }
          
          .marketing-card:hover h2 {
            color: #FF965D !important;
            text-shadow: 0 0 20px rgba(255, 150, 93, 0.5) !important;
          }
          
          .marketing-card:hover p {
            color: rgba(255, 255, 255, 0.9) !important;
          }
          
          .marketing-card:hover .badge {
            background: rgba(255, 150, 93, 0.2) !important;
            color: #FF965D !important;
            border-color: rgba(255, 150, 93, 0.5) !important;
            box-shadow: 0 0 20px rgba(255, 150, 93, 0.3) !important;
          }
          
          .marketing-card:hover .department-badge {
            border: 1px solid rgba(255, 150, 93, 0.5) !important;
            background: rgba(255, 150, 93, 0.1) !important;
            color: #FF965D !important;
            box-shadow: 0 0 15px rgba(255, 150, 93, 0.3) !important;
          }

          .marketing-card:hover .service-icon {
            filter: brightness(0) saturate(100%) invert(67%) sepia(89%) saturate(1234%) hue-rotate(330deg) brightness(101%) contrast(101%) !important;
            transform: scale(1.1) !important;
          }
          
          /* Shimmer effect for cards */
          .marketing-card::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: -100% !important;
            width: 100% !important;
            height: 100% !important;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.1),
              transparent
            ) !important;
            transition: left 0.5s !important;
            border-radius: inherit !important;
            z-index: 1 !important;
          }
          
          .marketing-card:hover::before {
            left: 100% !important;
          }
        `
      }} />
      <div 
        id="services"
        className="marketing-grid-container bg-[#0e0b17] text-white px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16"
        style={{
          width: '100%',
          minHeight: '100vh',
          flexShrink: 0,
          paddingTop: '40px'
        }}
      >
        <h1 
          className="marketing-title text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
          style={{
            marginBottom: '30px',
            textAlign: 'center',
            fontFamily: '"DM Sans"',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '120%',
            background: 'linear-gradient(82deg, #FF965D 35%, #BA34E2 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Your On-Demand Marketing Powerhouse
        </h1>
        <div 
          className="marketing-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto px-2 sm:px-4 lg:px-0"
          style={{
            columnGap: '15px',
            rowGap: '20px',
            sm: {
              columnGap: '20px',
              rowGap: '25px'
            },
            lg: {
              columnGap: '25px',
              rowGap: '30px'
            }
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-3 sm:p-4 md:p-5 lg:p-6 transition-all duration-300 marketing-card ${
                service.active
                  ? "bg-[#fce4fc] text-black shadow-xl"
                  : "hover:shadow-lg hover:scale-105"
              }`}
              style={{
                width: '100%',
                maxWidth: '100%',
                height: 'auto',
                minHeight: '240px',
                flexShrink: 0,
                borderRadius: '16px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div className="mb-3 sm:mb-4">
                <div className="p-2 w-fit mb-3 sm:mb-4">
                  {service.icon ? (
                    <Image
                      src={`/${service.icon}`}
                      alt={service.title}
                      width={20}
                      height={20}
                      className="service-icon transition-transform duration-300 w-5 h-5 sm:w-6 sm:h-6"
                      style={{
                        flexShrink: 0,
                        filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(0deg) brightness(100%) contrast(100%)'
                      }}
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="service-icon transition-transform duration-300 w-5 h-5 sm:w-6 sm:h-6"
                      style={{
                        flexShrink: 0,
                        color: '#FFFFFF'
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <h2 
                className="mb-3 sm:mb-4 transition-all duration-300 text-sm sm:text-base lg:text-lg"
                style={{
                  color: '#FFFFFF',
                  fontFamily: '"DM Sans"',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '120%'
                }}
              >
                {service.title}
              </h2>
              <p 
                className="mb-4 text-xs sm:text-sm lg:text-base"
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontFamily: '"DM Sans"',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '140%',
                  flexGrow: 1
                }}
              >
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <div 
                  className="department-badge px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-medium border border-white/20"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    fontFamily: '"DM Sans"',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '100%'
                  }}
                >
                  {service.projects} Projects
                </div>
                {service.active && (
                  <div 
                    className="badge px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-medium"
                    style={{
                      background: 'linear-gradient(90deg, #FF965D 0%, #BA34E2 100%)',
                      color: '#FFFFFF',
                      fontFamily: '"DM Sans"',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: '100%'
                    }}
                  >
                    Active
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MarketingGrid; 