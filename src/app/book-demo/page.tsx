'use client';
import React, { useState } from "react";
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';

export default function BookDemoPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    aboutProject: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if all fields are filled
    const isFormValid = Object.values(formData).every(value => value.trim() !== '');
    
    if (isFormValid) {
      // Show success popup
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        aboutProject: ''
      });
      
      // Hide success popup after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  };

  return (
    <main style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      <Navbar onMenuClick={() => setMenuOpen(true)} />
      <section className="min-h-screen flex items-center justify-center bg-black px-4 py-16">
      {/* Desktop Layout - Unchanged */}
      <div className="hidden lg:flex gap-3 items-start justify-center">
        {/* Left Text Section */}
        <div className="w-[732px] h-[558px] rounded-xl text-white shadow-lg" style={{ backgroundColor: 'rgba(167, 140, 206, 0.10)' }}>
          <h2 className="font-inter text-[32px] font-medium leading-normal mt-[123px] ml-[60px] mb-[35px]" style={{ background: 'linear-gradient(to right, #FF965D, #BA34E2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Ready to Scale Smarter?
          </h2>
          <p className="text-white font-inter text-[20px] font-normal leading-[28px] ml-[60px] mb-[35px]">
            Let&apos;s talk about how we can transform your marketing, without the complexity. Book a quick discovery call to explore:
          </p>
          <ul className="list-disc list-inside space-y-1 text-white/40 font-inter text-[17px] font-normal ml-[60px] mb-[123px]" style={{ lineHeight: '220.4%' }}>
            <li>How our subscription model works (and why it beats hiring or outsourcing)</li>
            <li>How we deliver multi-channel marketing, 10x faster than traditional teams</li>
            <li>Real examples tailored to your industry and goals</li>
            <li>A personalized plan recommendation based on your needs</li>
          </ul>
        </div>

        {/* Right Form Section */}
        <div className="relative w-full max-w-[473px] h-[558px] mx-auto">
          {/* Gradient Border Wrapper */}
          <div className="w-full h-full rounded-xl bg-gradient-to-r from-[#FF965D] to-[#BA34E2] p-[1px]">
            <div className="w-full h-full bg-[#18171A] rounded-[11px] p-8 text-white">
              <form className="h-full flex flex-col" onSubmit={handleSubmit}>
                <div className="pt-[45px] space-y-[25px]">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      className="flex w-[413px] px-3 py-2.5 items-center gap-2.5 bg-transparent border-0 border-b border-b-white/11 focus:outline-none focus:border-b-white/25 transition-all text-white placeholder:text-white/60 placeholder:font-inter placeholder:text-[17px] placeholder:font-normal placeholder:leading-normal"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      className="flex w-[413px] px-3 py-2.5 items-center gap-2.5 bg-transparent border-0 border-b border-b-white/11 focus:outline-none focus:border-b-white/25 transition-all text-white placeholder:text-white/60 placeholder:font-inter placeholder:text-[17px] placeholder:font-normal placeholder:leading-normal"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Work Email"
                      className="flex w-[413px] px-3 py-2.5 items-center gap-2.5 bg-transparent border-0 border-b border-b-white/11 focus:outline-none focus:border-b-white/25 transition-all text-white placeholder:text-white/60 placeholder:font-inter placeholder:text-[17px] placeholder:font-normal placeholder:leading-normal"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(+91) 00000 00000"
                      className="flex w-[413px] px-3 py-2.5 items-center gap-2.5 bg-transparent border-0 border-b border-b-white/11 focus:outline-none focus:border-b-white/25 transition-all text-white placeholder:text-white/60 placeholder:font-inter placeholder:text-[17px] placeholder:font-normal placeholder:leading-normal"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      name="aboutProject"
                      value={formData.aboutProject}
                      onChange={handleInputChange}
                      placeholder="About Project"
                      className="flex w-[413px] px-3 py-2.5 items-center gap-2.5 bg-transparent border-0 border-b border-b-white/11 focus:outline-none focus:border-b-white/25 transition-all resize-none text-white placeholder:text-white/60 placeholder:font-inter placeholder:text-[17px] placeholder:font-normal placeholder:leading-normal h-[41px] overflow-hidden"
                      rows={1}
                      required
                    />
                  </div>
                </div>
                <div className="mt-[50px]">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                  >
                    Book a Demo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout - New */}
      <div className="flex lg:hidden flex-col gap-6 items-center justify-center w-full max-w-md mx-auto">
        {/* Left Text Section - Mobile */}
        <div className="w-full rounded-2xl text-white shadow-2xl p-8 border border-white/10" style={{ backgroundColor: 'rgba(167, 140, 206, 0.15)' }}>
          <h2 className="font-inter text-3xl font-semibold leading-tight mb-6 text-center" style={{ background: 'linear-gradient(to right, #FF965D, #BA34E2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Ready to Scale Smarter?
          </h2>
          <p className="text-white/90 font-inter text-lg font-normal leading-relaxed mb-6 text-center">
            Let&apos;s talk about how we can transform your marketing, without the complexity. Book a quick discovery call to explore:
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF965D] to-[#BA34E2] mt-2 flex-shrink-0"></div>
              <p className="text-white/70 font-inter text-base font-normal leading-relaxed">
                How our subscription model works (and why it beats hiring or outsourcing)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF965D] to-[#BA34E2] mt-2 flex-shrink-0"></div>
              <p className="text-white/70 font-inter text-base font-normal leading-relaxed">
                How we deliver multi-channel marketing, 10x faster than traditional teams
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF965D] to-[#BA34E2] mt-2 flex-shrink-0"></div>
              <p className="text-white/70 font-inter text-base font-normal leading-relaxed">
                Real examples tailored to your industry and goals
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF965D] to-[#BA34E2] mt-2 flex-shrink-0"></div>
              <p className="text-white/70 font-inter text-base font-normal leading-relaxed">
                A personalized plan recommendation based on your needs
              </p>
            </div>
          </div>
        </div>

        {/* Right Form Section - Mobile */}
        <div className="relative w-full">
          {/* Gradient Border Wrapper */}
          <div className="w-full rounded-xl bg-gradient-to-r from-[#FF965D] to-[#BA34E2] p-[1px]">
            <div className="w-full bg-[#18171A] rounded-[11px] p-6 text-white">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="flex w-full px-3 py-3 items-center gap-2.5 bg-transparent border-0 border-b border-b-white/11 focus:outline-none focus:border-b-white/25 transition-all text-white placeholder:text-white/60 placeholder:font-inter placeholder:text-base placeholder:font-normal placeholder:leading-normal"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="flex w-full px-3 py-3 items-center gap-2.5 bg-transparent border-0 border-b border-b-white/11 focus:outline-none focus:border-b-white/25 transition-all text-white placeholder:text-white/60 placeholder:font-inter placeholder:text-base placeholder:font-normal placeholder:leading-normal"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Work Email"
                    className="flex w-full px-3 py-3 items-center gap-2.5 bg-transparent border-0 border-b border-b-white/11 focus:outline-none focus:border-b-white/25 transition-all text-white placeholder:text-white/60 placeholder:font-inter placeholder:text-base placeholder:font-normal placeholder:leading-normal"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(+91) 00000 00000"
                    className="flex w-full px-3 py-3 items-center gap-2.5 bg-transparent border-0 border-b border-b-white/11 focus:outline-none focus:border-b-white/25 transition-all text-white placeholder:text-white/60 placeholder:font-inter placeholder:text-base placeholder:font-normal placeholder:leading-normal"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="aboutProject"
                    value={formData.aboutProject}
                    onChange={handleInputChange}
                    placeholder="About Project"
                    className="flex w-full px-3 py-3 items-center gap-2.5 bg-transparent border-0 border-b border-b-white/11 focus:outline-none focus:border-b-white/25 transition-all resize-none text-white placeholder:text-white/60 placeholder:font-inter placeholder:text-base placeholder:font-normal placeholder:leading-normal h-[50px] overflow-hidden"
                    rows={2}
                    required
                  />
                </div>
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                  >
                    Book a Demo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Success Popup */}
    {showSuccess && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-sm mx-4 text-center shadow-2xl">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Successful!</h3>
          <p className="text-gray-600">Your demo request has been submitted successfully. We&apos;ll get back to you soon!</p>
        </div>
      </div>
    )}

    <Footer />
    <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </main>
  );
} 