import React, { useState } from 'react';
import Link from 'next/link';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuData = [
  {
    title: 'Home',
    color: 'text-pink-500',
    items: [],
    href: '/',
  },
  {
    title: 'Services',
    color: 'text-pink-500', 
    items: [
      { label: 'Marketing Subscription', href: '/marketing-sub' },
      { label: 'Social Media', href: '/social-media' },
      { label: 'Paid Social', href: '/paid-social' },
      { label: 'SEO', href: '/seo' },
      { label: 'Influencer Marketing', href: '/influencer' },
      { label: 'PR & Outreach', href: '/pr-marketing' },
      { label: 'Video Production', href: '/video' },
      { label: 'Lead Generation', href: '/lead-gen' },
      { label: 'Branding', href: '/branding' },
      { label: 'Community Management', href: '/community' },
      { label: 'Website Development', href: '/web3-and-mobile' },
      { label: 'Web Design', href: '/web-design' },
      { label: 'Blockchain Development', href: '/blockchain' },
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
                {item.href ? (
                  <Link href={item.href}>
                    <button
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm font-medium ${
                        selectedIndex === index 
                          ? 'bg-pink-500/20 text-pink-400' 
                          : 'text-gray-300 hover:text-pink-400 hover:bg-white/5'
                      }`}
                      onClick={() => {
                        setSelectedIndex(index);
                        onClose();
                      }}
                    >
                      {item.title}
                    </button>
                  </Link>
                ) : (
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
                )}
                
                {/* Sub-items */}
                {selectedIndex === index && item.items.length > 0 && (
                  <ul className="mt-1 ml-3 space-y-1">
                    {item.items.map((subItem) => (
                      <li key={typeof subItem === 'string' ? subItem : subItem.label}>
                        {typeof subItem === 'string' ? (
                          <span className="text-gray-400 hover:text-pink-300 cursor-pointer text-xs py-0.5 transition-colors block">
                            {subItem}
                          </span>
                        ) : (
                          <Link href={subItem.href}>
                            <span 
                              className="text-gray-400 hover:text-pink-300 cursor-pointer text-xs py-0.5 transition-colors block"
                              onClick={onClose}
                            >
                              {subItem.label}
                            </span>
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          
          {/* CTA Button */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <Link href="/book-demo">
              <button 
                className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity text-sm shadow-lg"
                onClick={onClose}
              >
                Book a Demo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal; 