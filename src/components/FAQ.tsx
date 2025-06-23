'use client';
import React from 'react';

const faqQuestions = [
  'How can I earn money by walking?',
  'How can I sell my shoes?',
  'What can I do if my shoes get worn out?',
  'How are the rarity levels of shoes determined?',
];

const DownArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="stroke-current text-black"
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
  return (
    <section id="faq" className="py-24 mt-4" style={{ scrollMarginTop: '100px' }}>
      <h2 className="text-4xl font-bold text-center mb-16 text-black">FAQ</h2>
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        {faqQuestions.map((question, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-6 rounded-2xl"
            style={{ backgroundColor: '#EAEAEA' }}
          >
            <span className="text-lg text-black font-medium">{question}</span>
            <DownArrowIcon />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ; 