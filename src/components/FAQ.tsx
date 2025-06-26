'use client';
import React, { useState } from 'react';

const faqItems = [
  {
    question: 'How can I earn money by walking?',
    answer: 'Our platform integrates with your favorite fitness apps to reward you for every step you take. Simply connect your app, start walking, and watch your earnings grow. Rewards can be redeemed for cash, gift cards, or cryptocurrency.'
  },
  {
    question: 'How can I sell my shoes?',
    answer: 'You can list your shoes on our marketplace in just a few simple steps. Take some photos, write a description, set your price, and post your listing. We offer secure transactions and a large community of buyers.'
  },
  {
    question: 'What can I do if my shoes get worn out?',
    answer: 'We have partnered with leading shoe repair and recycling services. You can find local repair shops through our app or request a mail-in kit to have your shoes professionally restored. For shoes that are beyond repair, we offer a recycling program that gives you credit towards your next purchase.'
  },
  {
    question: 'How are the rarity levels of shoes determined?',
    answer: 'Rarity is determined by a combination of factors, including brand, model, condition, and production volume. Limited edition and vintage shoes are typically rated higher. Our system uses a proprietary algorithm to assess these factors and assign a rarity score.'
  },
];

const DownArrowIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`stroke-current text-black transition-transform duration-300 ${className}`}
  >
    <path
      d="M7 10L12 15L17 10"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-black">FAQ</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="rounded-2xl" style={{ backgroundColor: '#EAEAEA' }}>
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full p-6 text-left"
            >
              <span className="text-base md:text-lg text-black font-medium">{item.question}</span>
              <DownArrowIcon className={activeIndex === index ? 'rotate-180' : ''} />
            </button>
            {activeIndex === index && (
              <div className="p-6 pt-0">
                <p className="text-gray-700 text-sm md:text-base">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ; 