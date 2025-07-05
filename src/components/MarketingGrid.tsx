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
            }
            .marketing-grid {
              column-gap: 0px !important;
              row-gap: 20px !important;
            }
          }
          @media (min-width: 1024px) {
            .marketing-grid-container {
              padding-top: 120px !important;
              height: 1459px !important;
              min-height: unset !important;
            }
            .marketing-title {
              font-size: 40px !important;
              margin-bottom: 80px !important;
            }
            .marketing-grid {
              column-gap: 25px !important;
              row-gap: 40px !important;
            }
            .department-badge {
              width: 82.19px !important;
              height: 25.992px !important;
              padding: 6.42px 10.177px 6.733px 10.432px !important;
              font-size: 9.63px !important;
              line-height: 11.556px !important;
            }

            .service-icon {
              width: 32.099px !important;
              height: 32.099px !important;
            }
            .marketing-card {
              height: 333.028px !important;
              min-height: unset !important;
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
              font-size: 32px !important;
              margin-bottom: 60px !important;
            }
            .marketing-grid {
              column-gap: 20px !important;
              row-gap: 35px !important;
            }
            .department-badge {
              width: 75px !important;
              height: 24px !important;
              padding: 5px 9px !important;
              font-size: 8.5px !important;
              line-height: 10.5px !important;
            }

            .service-icon {
              width: 28px !important;
              height: 28px !important;
            }
            .marketing-card {
              height: auto !important;
              min-height: 300px !important;
            }
            .marketing-card p {
              word-wrap: break-word !important;
              overflow-wrap: break-word !important;
              hyphens: auto !important;
            }
          }
          .marketing-card:hover {
            background: radial-gradient(182.12% 137.91% at 27.78% 13.98%, #FFDBC8 0%, #F0C0FF 100%) !important;
            backdrop-filter: blur(4.012380599975586px) !important;
          }
          .marketing-card:hover h2 {
            color: #40234F !important;
            font-family: "DM Sans" !important;
            font-size: 22.469px !important;
            font-style: normal !important;
            font-weight: 600 !important;
            line-height: 29.21px !important;
          }
          .marketing-card:hover p {
            color: #40234F !important;
            font-family: "DM Sans" !important;
            font-size: 14.445px !important;
            font-style: normal !important;
            font-weight: 500 !important;
            line-height: 20.8px !important;
          }
          .marketing-card:hover .badge {
            background: rgba(0, 0, 0, 0.1) !important;
            color: #000 !important;
          }
          .marketing-card:hover .department-badge {
            border: 0.802px solid rgba(169, 104, 204, 0.48) !important;
            background: transparent !important;
            color: #442152 !important;
            text-align: center !important;
            font-family: "DM Sans" !important;
            font-size: 9.63px !important;
            font-style: normal !important;
            font-weight: 500 !important;
            line-height: 11.556px !important;
            text-transform: uppercase !important;
          }

          .marketing-card:hover .service-icon {
            color: #40234F !important;
          }
          .marketing-card:hover img.service-icon {
            filter: brightness(0) saturate(100%) invert(15%) sepia(34%) saturate(1766%) hue-rotate(285deg) brightness(95%) contrast(93%) !important;
          }
        `
      }} />
    <div 
      id="services"
      className="marketing-grid-container bg-[#0e0b17] text-white px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16"
      style={{
        width: '100vw',
        minHeight: '100vh',
        flexShrink: 0,
        paddingTop: '60px'
      }}
    >
      <h1 
        className="marketing-title"
        style={{
          marginBottom: '40px',
          textAlign: 'center',
          fontFamily: '"DM Sans"',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '100%',
          background: 'linear-gradient(82deg, #FF965D 35%, #BA34E2 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Your On-Demand Marketing Powerhouse
      </h1>
      <div 
        className="marketing-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-2 sm:px-0"
        style={{
          columnGap: '15px',
          rowGap: '30px'
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-4 sm:p-5 lg:p-6 transition-all duration-300 marketing-card ${
              service.active
                ? "bg-[#fce4fc] text-black shadow-xl"
                : "hover:shadow-lg hover:scale-105"
            }`}
            style={{
              width: '100%',
              maxWidth: '288.891px',
              height: 'auto',
              minHeight: '280px',
              flexShrink: 0,
              borderRadius: '12.84px',
              background: 'rgba(228, 197, 255, 0.08)',
              backdropFilter: 'blur(4.012380599975586px)'
            }}
          >
            <div className="mb-4">
              <div className="p-2 w-fit mb-4">
                {service.icon ? (
                  <Image
                    src={`/${service.icon}`}
                    alt={service.title}
                    width={24}
                    height={24}
                    className="service-icon"
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
                    className="service-icon"
                    style={{
                      width: '24px',
                      height: '24px',
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
              className="mb-4"
              style={{
                color: '#FFFFFF',
                fontFamily: '"DM Sans"',
                fontSize: '22.469px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '29.21px'
              }}
            >
              {service.title}
            </h2>
            <div className="flex gap-2 mb-4">
              <span 
                className="badge department-badge"
                style={{
                  display: 'flex',
                  width: '70px',
                  height: '22px',
                  padding: '4px 8px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                  borderRadius: '6.42px',
                  border: '0.802px solid #A1A1A9',
                  background: 'transparent',
                  color: '#A1A1AA',
                  textAlign: 'center',
                  fontFamily: '"DM Sans"',
                  fontSize: '8px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '10px',
                  textTransform: 'uppercase'
                }}
              >
                DEPARTMENT
              </span>
            </div>
            <p 
              style={{
                color: '#A1A1A9',
                fontFamily: '"DM Sans"',
                fontSize: '14.445px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '20.8px'
              }}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default MarketingGrid; 