// app/components/ServicesOffered.tsx

import React from "react";

const servicesData = [
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

const ServicesOffered = () => {
  return (
    <section className="py-32" style={{ padding: '0 140px' }}>
      <h2 className="text-4xl font-bold text-center mb-16 text-black">
        Services Offered
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-10 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2"
            style={{ height: '380px' }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-black">{service.title}</h3>
            <ul className="space-y-5">
              {service.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  <span className="text-black mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOffered;
