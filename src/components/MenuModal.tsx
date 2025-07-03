import React, { useState } from 'react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuData = [
  {
    title: 'Home',
    color: 'text-pink-500',
    items: [],
  },
  {
    title: 'Services',
    color: 'text-pink-500', 
    items: [
      'Crypto Marketing',
      'Performance Ads',
      'Influencer Operations',
      'Community Campaigns',
      'Tech PR',
      'Content Production',
      'iGaming Marketing',
    ],
  },
  {
    title: 'Industries',
    color: 'text-pink-500',
    items: [
      'Crypto & Blockchain',
      'DeFi',
      'NFT',
      'Web3',
      'Gaming',
      'SaaS',
      'Tech',
    ],
  },
  {
    title: 'Success stories',
    color: 'text-pink-500',
    items: [],
  },
  {
    title: 'Our people',
    color: 'text-pink-500',
    items: [],
  },
  {
    title: 'Company',
    color: 'text-pink-500',
    items: [
      'About us',
      'Careers',
      'Blog',
      'Events',
      'Brand Assets',
    ],
  },
  {
    title: 'Pricing',
    color: 'text-pink-500',
    items: [],
  },
  {
    title: 'Events',
    color: 'text-pink-500',
    items: [],
  },
];

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm px-3 py-3">
      {/* Close button */}
      <button
        onClick={onClose}
        className="mb-3 px-4 py-2 bg-white/10 rounded-full shadow text-white font-medium text-sm hover:bg-white/20 focus:outline-none flex items-center gap-1 border border-white/20"
        style={{ zIndex: 101 }}
      >
        <span className="text-base">&times;</span>
        <span>Close</span>
      </button>
      
      <div className="relative w-full max-w-xs mx-auto bg-black/85 backdrop-blur-xl rounded-xl shadow-lg p-4 border border-white/10">
        {/* Main Navigation */}
        <div className="w-full">
          <h3 className="mb-3 text-lg font-bold text-white text-center">Menu</h3>
          <ul className="space-y-2">
            {menuData.map((item, index) => (
              <li key={item.title}>
                <button
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm font-medium ${
                    selectedIndex === index 
                      ? 'bg-pink-500/20 text-pink-400' 
                      : 'text-gray-300 hover:text-pink-400 hover:bg-white/5'
                  }`}
                  onClick={() => setSelectedIndex(index)}
                >
                  {item.title}
                  {item.items.length > 0 && (
                    <span className="float-right text-xs">▶</span>
                  )}
                </button>
                
                {/* Sub-items */}
                {selectedIndex === index && item.items.length > 0 && (
                  <ul className="mt-1 ml-3 space-y-1">
                    {item.items.map((subItem) => (
                      <li key={subItem} className="text-gray-400 hover:text-pink-300 cursor-pointer text-xs py-0.5 transition-colors">
                        {subItem}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          
          {/* CTA Button */}
          <div className="mt-4 pt-3 border-t border-white/10">
            <button className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity text-sm">
              Book Intro-Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal; 