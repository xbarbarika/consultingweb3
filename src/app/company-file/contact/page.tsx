'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';
import { Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    workEmail: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    // TODO: Implement form submission logic
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="text-white bg-black min-h-screen">
      <div className="w-full" style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <Navbar onMenuClick={() => setMenuOpen(true)} />
        
        {/* Main Content */}
        <main className="w-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 pt-32 pb-16">
          <div className="max-w-2xl mx-auto text-center w-full">
            {/* Hero Section */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6">
                Let&apos;s Create Something That Scales.
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
                Whether you&apos;re ready to subscribe or just exploring, we&apos;re all ears.
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-10 mb-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                    required
                  />
                </div>
                <input
                  type="email"
                  name="workEmail"
                  placeholder="Work Email"
                  value={formData.workEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-medium text-white mb-8">
                Or Reach Us
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400 text-lg">barbarika.team@gmail.com</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400 text-lg">+91 9326387236</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <Footer />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
} 