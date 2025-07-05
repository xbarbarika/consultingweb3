// components/FaqSection.tsx

import React, { useState } from 'react';
import Image from 'next/image';

const faqData = [
  {
    question: 'What are your marketing specialties?',
    answer: 'We specialize in performance marketing, brand strategy, paid advertising, content marketing, social media management, and conversion optimization. Our team has expertise across multiple channels including Google Ads, Facebook advertising, SEO, email marketing, and marketing automation. We focus on data-driven strategies that deliver measurable results for your business. Each campaign is tailored to your specific industry, target audience, and business objectives to maximize ROI and drive sustainable growth.',
  },
  {
    question: 'How can my business benefit from partnering with your agency?',
    answer: 'You get access to a full-stack marketing team with diverse expertise without the overhead of hiring multiple specialists. Our flexible engagement models allow you to scale marketing efforts up or down based on your needs and budget. We provide strategic insights backed by data analytics, helping you make informed decisions about your marketing investments. You&apos;ll benefit from our proven methodologies, cutting-edge tools, and continuous optimization to stay ahead of competitors. Plus, our transparent reporting keeps you informed about performance and ROI at every step.',
  },
  {
    question: 'How do I determine my marketing budget?',
    answer: 'We help you assess your business goals, industry benchmarks, competitive landscape, and growth projections to create a custom-fit marketing budget. Typically, businesses should allocate 7-10% of their revenue to marketing, but this varies by industry and growth stage. We analyze your customer acquisition costs, lifetime value, and current conversion rates to determine optimal budget allocation across different channels. Our strategic approach ensures every dollar is invested where it will generate the highest return, whether that&apos;s in paid advertising, content creation, or brand building initiatives.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
  };

  return (
    <div className="bg-black text-white px-4 sm:px-6 py-8 sm:py-12 lg:py-16" style={{ minHeight: '680px', height: 'auto' }}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* FAQ Section - Left Side */}
        <div className="flex-1">
          <h2 
            className="mb-6 sm:mb-8 text-center lg:text-left"
            style={{
              display: 'flex',
              width: 'auto',
              height: 'auto',
              flexDirection: 'column',
              justifyContent: 'center',
              color: '#FFF',
              fontFamily: 'DM Sans',
              fontSize: 'clamp(24px, 5vw, 36.603px)',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '1.4'
            }}
          >
            FAQ&apos;s
          </h2>
                    <div className="space-y-3 sm:space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-gray-700 overflow-hidden" 
                style={{ 
                  minHeight: '60px',
                  height: openIndex === index ? 'auto' : '60px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: openIndex === index ? 'flex-start' : 'center',
                  transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  transform: openIndex === index ? 'translateY(0)' : 'translateY(0)',
                  opacity: openIndex === index ? 1 : 0.95
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="w-full flex justify-between items-center text-left cursor-pointer px-2 sm:px-0"
                  style={{
                    fontFamily: 'DM Sans',
                    fontSize: 'clamp(14px, 3.5vw, 18.302px)',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '1.25',
                    minHeight: '60px',
                    paddingTop: openIndex === index ? '15px' : '0px',
                    paddingBottom: openIndex === index ? '8px' : '0px',
                    transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    transform: openIndex === index ? 'translateX(8px)' : 'translateX(0)'
                  }}
                >
                  <span
                    className="pr-4"
                    style={openIndex === index ? {
                      background: 'linear-gradient(82deg, #FF8F4E 54.13%, #CA22EA 100.03%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      transform: 'scale(1.02)'
                    } : {
                      color: '#FFF',
                      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      transform: 'scale(1)'
                    }}
                  >
                    {faq.question}
                  </span>
                  <Image
                    src="/faq.svg"
                    alt="FAQ toggle"
                    width={30}
                    height={30}
                    className={`${openIndex === index ? 'rotate-45' : ''} flex-shrink-0`}
                    style={{
                      color: '#FFFFFF',
                      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      transform: openIndex === index ? 'rotate(45deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                      filter: openIndex === index ? 'brightness(1.2)' : 'brightness(1)'
                    }}
                  />
                </div>
                <div 
                  className={`${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  style={{
                    overflow: 'hidden',
                    paddingBottom: openIndex === index ? '15px' : '0px',
                    paddingLeft: '8px',
                    transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    transform: openIndex === index ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.98)'
                  }}
                >
                  <div 
                    style={{ 
                      color: '#808080',
                      fontFamily: 'DM Sans',
                      fontSize: 'clamp(14px, 3.5vw, 16px)',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      lineHeight: '1.4',
                      letterSpacing: '0.16px',
                      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      transform: openIndex === index ? 'translateY(0)' : 'translateY(-5px)'
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Still Have Questions Box - Right Side */}
        <div className="w-full lg:w-80">
          <div className="bg-[#1a1a1a] rounded-xl p-6 sm:p-8" style={{ minHeight: '400px', height: 'auto' }}>
            <h3 
              className="mb-4 text-center lg:text-left"
              style={{
                background: 'linear-gradient(82deg, #FF8F4E 54.13%, #CA22EA 100.03%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'DM Sans',
                fontSize: 'clamp(20px, 4vw, 24px)',
                fontWeight: 600,
                lineHeight: '1.25'
              }}
            >
              Still have questions?
            </h3>
            <p 
              className="text-gray-300 text-sm sm:text-base leading-relaxed text-center lg:text-left"
              style={{
                fontFamily: 'DM Sans'
              }}
            >
              Our team is here to help you navigate your marketing journey. Whether you&apos;re looking to scale your current efforts 
              or completely transform your strategy, we have the expertise to make it happen. 
              <br /><br />
              We work with businesses of all sizes across various industries including e-commerce, SaaS, healthcare, and finance. 
              Each partnership begins with a comprehensive audit followed by a customized strategy designed to meet your goals.
            </p>
          </div>
          
          {/* Contact Us Button */}
          <div className="flex justify-center lg:justify-start mt-6">
            <button
              className="px-[18px] py-[7px] text-white font-medium rounded-[32px] transition-all duration-300 text-sm"
              style={{
                background: 'rgba(255, 255, 255, 0.24)',
                fontFamily: 'DM Sans'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = 'black';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.24)';
                e.currentTarget.style.color = 'white';
              }}
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection; 