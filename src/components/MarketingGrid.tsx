import React from "react";
import Image from "next/image";
// Using direct path to public directory for background image

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
          /* iPhone SE and very small devices */
          @media (max-width: 375px) {
            .marketing-card {
              width: 100% !important;
              max-width: 100% !important;
              min-height: 180px !important;
              border-radius: 12px !important;
            }
            .marketing-grid {
              column-gap: 10px !important;
              row-gap: 14px !important;
            }
            .marketing-title {
              font-size: 16px !important;
              margin-bottom: 20px !important;
            }
            .marketing-grid-container {
              padding-top: 24px !important;
            }
            .department-badge {
              font-size: 10px !important;
              padding: 4px 8px !important;
            }
            .service-icon {
              width: 16px !important;
              height: 16px !important;
            }
          }

          /* Small mobile devices */
          @media (min-width: 376px) and (max-width: 480px) {
            .marketing-card {
              width: 100% !important;
              max-width: 100% !important;
              min-height: 190px !important;
              border-radius: 13px !important;
            }
            .marketing-grid {
              column-gap: 12px !important;
              row-gap: 16px !important;
            }
            .marketing-title {
              font-size: 18px !important;
              margin-bottom: 22px !important;
            }
            .marketing-grid-container {
              padding-top: 28px !important;
            }
            .department-badge {
              font-size: 11px !important;
              padding: 5px 10px !important;
            }
            .service-icon {
              width: 18px !important;
              height: 18px !important;
            }
          }

          /* Medium mobile devices */
          @media (min-width: 481px) and (max-width: 640px) {
            .marketing-card {
              width: 100% !important;
              max-width: 100% !important;
              min-height: 200px !important;
              border-radius: 14px !important;
            }
            .marketing-grid {
              column-gap: 12px !important;
              row-gap: 16px !important;
            }
            .marketing-title {
              font-size: 20px !important;
              margin-bottom: 24px !important;
            }
            .marketing-grid-container {
              padding-top: 32px !important;
            }
            .department-badge {
              font-size: 11px !important;
              padding: 6px 12px !important;
            }
            .service-icon {
              width: 20px !important;
              height: 20px !important;
            }
          }

          /* Large mobile devices */
          @media (min-width: 641px) and (max-width: 767px) {
            .marketing-card {
              width: 100% !important;
              max-width: 100% !important;
              min-height: 220px !important;
              border-radius: 15px !important;
            }
            .marketing-grid {
              column-gap: 15px !important;
              row-gap: 20px !important;
            }
            .marketing-title {
              font-size: 22px !important;
              margin-bottom: 26px !important;
            }
            .marketing-grid-container {
              padding-top: 36px !important;
            }
            .department-badge {
              font-size: 12px !important;
              padding: 6px 12px !important;
            }
            .service-icon {
              width: 22px !important;
              height: 22px !important;
            }
          }

          /* Small tablet devices */
          @media (min-width: 768px) and (max-width: 900px) {
            .marketing-grid {
              column-gap: 18px !important;
              row-gap: 24px !important;
            }
          }
          /* Desktop devices */
          @media (min-width: 1024px) {
            .marketing-grid-container {
              padding-top: 60px !important;
              height: auto !important;
              min-height: 100vh !important;
            }
            .marketing-title {
              font-size: 32px !important;
              margin-bottom: 50px !important;
            }
            .marketing-grid {
              column-gap: 22px !important;
              row-gap: 32px !important;
            }
            .department-badge {
              width: auto !important;
              height: auto !important;
              padding: 7px 14px !important;
              font-size: 12px !important;
              line-height: 16px !important;
            }

            .service-icon {
              width: 26px !important;
              height: 26px !important;
            }
            .marketing-card {
              height: auto !important;
              min-height: 260px !important;
              display: flex !important;
              flex-direction: column !important;
              border-radius: 18px !important;
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
          /* Tablet devices */
          @media (min-width: 768px) and (max-width: 1023px) {
            .marketing-title {
              font-size: 26px !important;
              margin-bottom: 40px !important;
            }
            .marketing-grid {
              column-gap: 18px !important;
              row-gap: 26px !important;
            }
            .department-badge {
              width: auto !important;
              height: auto !important;
              padding: 6px 12px !important;
              font-size: 12px !important;
              line-height: 16px !important;
            }

            .service-icon {
              width: 24px !important;
              height: 24px !important;
            }
            .marketing-card {
              height: auto !important;
              min-height: 240px !important;
              border-radius: 16px !important;
            }
            .marketing-card p {
              word-wrap: break-word !important;
              overflow-wrap: break-word !important;
              hyphens: auto !important;
            }
            .marketing-grid-container {
              padding-top: 44px !important;
            }
          }
          
          /* Large desktop devices */
          @media (min-width: 1280px) {
            .marketing-grid-container {
              padding-top: 80px !important;
            }
            .marketing-title {
              font-size: 38px !important;
              margin-bottom: 70px !important;
            }
            .marketing-grid {
              column-gap: 26px !important;
              row-gap: 36px !important;
            }
            .marketing-card {
              min-height: 280px !important;
              border-radius: 20px !important;
            }
            .department-badge {
              padding: 8px 16px !important;
              font-size: 13px !important;
            }
            .service-icon {
              width: 28px !important;
              height: 28px !important;
            }
          }

          /* Medium desktop devices */
          @media (min-width: 1024px) and (max-width: 1279px) {
            .marketing-grid {
              column-gap: 22px !important;
              row-gap: 30px !important;
            }
          }

          /* Extra large desktop devices */
          @media (min-width: 1536px) {
            .marketing-grid-container {
              padding-top: 100px !important;
            }
            .marketing-title {
              font-size: 42px !important;
              margin-bottom: 80px !important;
            }
            .marketing-grid {
              column-gap: 30px !important;
              row-gap: 40px !important;
            }
            .marketing-card {
              min-height: 300px !important;
              border-radius: 22px !important;
            }
            .department-badge {
              padding: 9px 18px !important;
              font-size: 14px !important;
            }
            .service-icon {
              width: 30px !important;
              height: 30px !important;
            }
          }

          /* Ultra wide screens */
          @media (min-width: 1920px) {
            .marketing-grid {
              column-gap: 32px !important;
              row-gap: 44px !important;
            }
            .marketing-card {
              min-height: 320px !important;
              border-radius: 24px !important;
            }
          }
          
          /* Enhanced 3D Glassy Card Styles */
          .marketing-card {
            position: relative !important;
            background: rgba(0, 0, 0, 0.6) !important;
            backdrop-filter: blur(10px) !important;
            -webkit-backdrop-filter: blur(10px) !important;
            border: 2px solid rgba(255, 59, 48, 0.3) !important;
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
              rgba(255, 59, 48, 0.1) 0%,
              rgba(255, 59, 48, 0.05) 50%,
              rgba(255, 59, 48, 0.1) 100%
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
              rgba(255, 59, 48, 0.3),
              rgba(0, 0, 0, 0.5),
              rgba(255, 59, 48, 0.3)
            ) !important;
            border-radius: inherit !important;
            opacity: 0 !important;
            transition: opacity 0.4s ease !important;
            z-index: -1 !important;
          }
          
          .marketing-card:hover {
            transform: translateY(-8px) rotateX(2deg) rotateY(2deg) !important;
            box-shadow: 
              0 20px 60px rgba(255, 59, 48, 0.2),
              0 0 0 1px rgba(255, 59, 48, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              0 0 40px rgba(255, 59, 48, 0.2) !important;
            background: rgba(20, 20, 20, 0.8) !important;
            border-color: rgba(255, 59, 48, 0.6) !important;
          }
          
          /* Mobile hover adjustments */
          @media (max-width: 375px) {
            .marketing-card:hover {
              transform: translateY(-2px) rotateX(0.5deg) rotateY(0.5deg) !important;
            }
          }

          @media (min-width: 376px) and (max-width: 640px) {
            .marketing-card:hover {
              transform: translateY(-3px) rotateX(0.8deg) rotateY(0.8deg) !important;
            }
          }

          @media (min-width: 641px) and (max-width: 768px) {
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
            color: #FF3B30 !important;
            text-shadow: 0 0 20px rgba(255, 59, 48, 0.5) !important;
          }
          
          .marketing-card:hover p {
            color: rgba(255, 255, 255, 0.9) !important;
          }
          
          .marketing-card:hover .badge {
            background: rgba(255, 59, 48, 0.2) !important;
            color: #FF3B30 !important;
            border-color: rgba(255, 59, 48, 0.5) !important;
            box-shadow: 0 0 20px rgba(255, 59, 48, 0.3) !important;
          }
          
          .marketing-card:hover .department-badge {
            border: 1px solid rgba(255, 59, 48, 0.5) !important;
            background: rgba(255, 59, 48, 0.1) !important;
            color: #FF3B30 !important;
            box-shadow: 0 0 15px rgba(255, 59, 48, 0.3) !important;
          }

          .marketing-card:hover .service-icon {
            filter: brightness(0) saturate(100%) invert(25%) sepia(99%) saturate(7489%) hue-rotate(359deg) brightness(98%) contrast(112%) !important;
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
        className="relative w-full min-h-screen"
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom, 
              rgba(0, 0, 0, 0.8), 
              rgba(0, 0, 0, 0.7), 
              rgba(0, 0, 0, 0.9)
            ),
            url('/marketingbg.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }}
      >
        
        <div 
          id="services"
          className="relative z-10 text-white px-3 xs:px-4 sm:px-6 lg:px-8 pb-6 xs:pb-8 sm:pb-10 lg:pb-12 xl:pb-16 pt-8"
          style={{
            width: '100%',
            minHeight: '100vh',
            position: 'relative',
          }}
        >
        <div className="w-full flex justify-center mb-8 sm:mb-12 lg:mb-16 px-4">
          <div className="w-full max-w-5xl mx-auto text-center">
            <h1 
              className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              style={{
                color: 'white',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                lineHeight: '1.2',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                position: 'relative',
                display: 'inline-block',
                padding: '0.8rem 2rem',
                border: '3px solid #FF3B30',
                borderRadius: '1rem',
                background: 'rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(10px)',
                margin: '0 auto',
                width: 'auto',
                maxWidth: '90%',
                boxSizing: 'border-box',
                wordBreak: 'break-word',
                overflowWrap: 'break-word'
              }}
            >
              <span 
                className="block"
                style={{
                  fontFamily: 'var(--font-tourney), sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontVariationSettings: '"wdth" 100',
                  letterSpacing: '0.05em',
                  fontSize: 'inherit',
                  lineHeight: 'inherit'
                }}
              >
                Your On-Demand Marketing Powerhouse
              </span>
            </h1>
          </div>
        </div>
        <div 
          className="marketing-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto px-2 sm:px-4 lg:px-0 landscape-grid-gap"
          style={{
            columnGap: '12px',
            rowGap: '16px'
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-2.5 xs:p-3 sm:p-4 md:p-5 lg:p-6 transition-all duration-300 marketing-card landscape-card-height ${
                service.active
                  ? "bg-gradient-to-br from-red-900/20 to-red-900/40 text-white shadow-xl border-2 border-red-500/50"
                  : "hover:shadow-lg hover:scale-105"
              }`}
              style={{
                width: '100%',
                maxWidth: '100%',
                height: 'auto',
                minHeight: '200px',
                flexShrink: 0,
                borderRadius: '14px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div className="mb-2.5 xs:mb-3 sm:mb-4">
                <div className="p-1.5 xs:p-2 w-fit mb-2.5 xs:mb-3 sm:mb-4">
                  {service.icon ? (
                    <Image
                      src={`/${service.icon}`}
                      alt={service.title}
                      width={18}
                      height={18}
                      className="service-icon transition-transform duration-300 w-4.5 h-4.5 xs:w-5 xs:h-5 sm:w-6 sm:h-6"
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
                      className="service-icon transition-transform duration-300 w-4.5 h-4.5 xs:w-5 xs:h-5 sm:w-6 sm:h-6"
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
                className="mb-2.5 xs:mb-3 sm:mb-4 transition-all duration-300 text-sm xs:text-sm sm:text-base lg:text-lg text-overflow-fix"
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
                className="mb-3 xs:mb-4 text-xs xs:text-sm sm:text-base lg:text-base text-overflow-fix landscape-spacing"
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
                  className="department-badge px-1.5 xs:px-2 py-1 xs:py-1.5 sm:px-3 sm:py-1.5 rounded-full text-xs font-medium border border-white/20"
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
                    className="badge px-1.5 xs:px-2 py-1 xs:py-1.5 sm:px-3 sm:py-1.5 rounded-full text-xs font-medium"
                    style={{
                      background: 'linear-gradient(90deg, #FF3B30 0%, #BA34E2 100%)',
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
      </div>
    </>
  );
};

export default MarketingGrid; 