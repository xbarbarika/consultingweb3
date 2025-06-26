import React, { useState } from 'react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuData = [
  {
    title: 'Crypto Marketing',
    color: 'text-blue-700',
    items: [
      'Dedicated Marketing Team',
      'NFT Promotion',
      'DeFi Promotion',
      'YouTube Influencers',
      'Twitter Influencers',
      'Crypto PR',
      'Crypto Traffic',
      'Crypto & Blockchain SEO',
      'Crypto Escrow',
      'Online Reputation Management',
      'Korean Marketing',
      'Chinese Marketing',
      'Russian Marketing',
    ],
  },
  {
    title: 'iGaming Marketing',
    color: 'text-blue-700',
    items: [
      'Gambling & Casino SEO',
      'Design for Online Casino',
      'Online Casino PR',
      'Influencer Marketing for Gambling',
      'Casino PPC',
    ],
  },
  {
    title: 'Blockchain Development',
    color: 'text-blue-700',
    items: [
      'Crypto Website',
      'DeFi Development',
      'Blockchain Consulting',
      'Smart Contracts',
      'Custom Blockchain',
    ],
  },
  {
    title: 'Content Production',
    color: 'text-blue-700',
    items: [
      'Promo Video Creation',
      'Analytical Review',
      'White papers for crypto projects',
      'Branding & Identity',
    ],
  },
  {
    title: 'Information',
    color: 'text-gray-800',
    items: [
      'About us',
      'Cases',
      'Events',
      'For Partners',
      'Blog',
      'FAQs',
      'Careers',
      'Brand Assets',
    ],
  },
];

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  if (!isOpen) return null;

  const selected = menuData[selectedIndex];

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm px-2 py-4">
      {/* Themed Close button with cross icon */}
      <button
        onClick={onClose}
        className="mb-4 px-6 py-2 bg-[#716A54] rounded-full shadow text-white font-semibold text-base hover:bg-[#5a543e] focus:outline-none flex items-center gap-2"
        style={{ zIndex: 101 }}
      >
        <span className="text-lg">&times;</span>
        <span>Close</span>
      </button>
      <div className="relative w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
        <select
          className="w-full mb-6 px-4 py-3 rounded-lg border border-gray-300 text-black text-lg focus:outline-none focus:ring-2 focus:ring-[#716A54]"
          value={selectedIndex}
          onChange={e => setSelectedIndex(Number(e.target.value))}
        >
          {menuData.map((col, idx) => (
            <option key={col.title} value={idx}>{col.title}</option>
          ))}
        </select>
        <div className="w-full">
          <h3 className={`mb-3 text-xl font-bold ${selected.color}`}>{selected.title}</h3>
          <ul className="space-y-3">
            {selected.items.map((item) => (
              <li key={item} className="text-gray-800 hover:text-[#716A54] cursor-pointer text-base transition-colors">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuModal; 