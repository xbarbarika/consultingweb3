import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const locations = [
  {
    country: "South Korea",
    address: "South Korea",
    image: "/korea.jpg",
    timezone: "KST (UTC+9)"
  },
  {
    country: "India",
    address: "India",
    image: "/mumbai.jpg",
    timezone: "IST (UTC+5:30)"
  },
  {
    country: "Dubai",
    address: "UAE",
    image: "/dubai.jpg",
    timezone: "GST (UTC+4)"
  },
  {
    country: "Ireland",
    address: "Ireland",
    image: "/ireland.jpg",
    timezone: "GMT (UTC+0)"
  },
  {
    country: "USA",
    address: "141st LN SE Bellevue WA 98007",
    image: "/usa.jpg",
    timezone: "EST (UTC-5)"
  }
];

const LocationsSection = () => {
  const [counts, setCounts] = useState({ countries: 0, clients: 0 });
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCounts(prev => ({
        countries: Math.min(prev.countries + 1, 5),
        clients: Math.min(prev.clients + 50, 1000)
      }));
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-center mb-12"
          style={{
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
          Global Presence
        </h2>
        
        <p 
          className="text-center mb-8 text-gray-300 max-w-3xl mx-auto"
          style={{
            fontFamily: 'DM Sans',
            fontSize: 'clamp(16px, 4vw, 20px)',
            lineHeight: '1.5'
          }}
        >
          Serving clients worldwide with local expertise and global reach
        </p>

        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <div 
                className="text-4xl font-bold mb-2"
                style={{
                  background: 'linear-gradient(82deg, #FF965D 54.13%, #BA34E2 100.03%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'DM Sans'
                }}
              >
                {counts.countries}+
              </div>
              <div className="text-gray-300 text-sm" style={{ fontFamily: 'DM Sans' }}>
                Countries
              </div>
            </div>
            <div className="text-center">
              <div 
                className="text-4xl font-bold mb-2"
                style={{
                  background: 'linear-gradient(82deg, #FF965D 54.13%, #BA34E2 100.03%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'DM Sans'
                }}
              >
                {counts.clients}+
              </div>
              <div className="text-gray-300 text-sm" style={{ fontFamily: 'DM Sans' }}>
                Clients Served
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div 
              key={index}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={location.image}
                  alt={`${location.country}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 
                    className="text-white font-bold text-xl mb-1"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    {location.country}
                  </h3>
                  <p 
                    className="text-white/80 text-sm"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    {location.country}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-pink-400"
                  >
                    <path 
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" 
                      fill="currentColor"
                    />
                  </svg>
                  <span 
                    className="text-pink-400 text-sm font-medium"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    {location.timezone}
                  </span>
                </div>
                
                <p 
                  className="text-gray-300 text-sm leading-relaxed"
                  style={{ fontFamily: 'DM Sans' }}
                >
                  {location.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection; 