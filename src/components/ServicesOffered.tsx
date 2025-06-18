import React from 'react';

const services = [
  {
    title: '1. Growth Marketing',
    items: [
      'Paid campaigns (Twitter, Meta, Google)',
      'KOL & influencer activations',
      'Conversion funnel design',
      'Airdrop & incentive program strategy',
    ],
  },
  {
    title: '2. Community Building & Engagement',
    items: [
      'Discord/Telegram setup & moderation',
      'Community events & AMAs',
      'DAO launch support',
      'Ambassador & mod programs',
    ],
  },
  {
    title: '3. Growth Marketing',
    items: [
      'Press releases and distribution',
      'Web3-native media placement (e.g., CoinTelegraph, Decrypt)',
      'Social media content creation',
      'Whitepaper & website copywriting',
    ],
  },
];

const ServicesOffered = () => (
  <section className="w-full flex flex-col items-center justify-center py-12 px-2 mt-[60px]">
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10 text-center">Services Offered</h2>
    <div className="flex flex-col md:flex-row gap-6 md:gap-[32px] justify-center items-center w-full max-w-7xl">
      {services.map((service) => (
        <div
          key={service.title}
          className="bg-white/50 backdrop-blur-md rounded-[32px] shadow-md border border-white/40 p-10 w-full max-w-[518px] min-w-[260px] h-[640px] flex flex-col items-start"
          style={{ background: 'rgba(255,255,255,0.48)', backgroundColor: 'color(display-p3 1 1 1 / 0.48)' }}
        >
          <h3 className="font-bold text-xl md:text-2xl text-gray-900 mb-6 text-left w-full">{service.title}</h3>
          <ul className="list-disc pl-5 space-y-5 text-gray-800 text-base w-full text-left">
            {service.items.map((item) => (
              <li key={item} className="leading-relaxed text-left">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesOffered;
