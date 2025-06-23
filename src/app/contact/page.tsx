'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar showMenuButton onMenuClick={() => setMenuOpen(true)} />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="w-full flex justify-start max-w-5xl mx-auto mt-30 px-4">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 px-5 py-2 bg-[#716A54] text-white rounded-full font-semibold shadow hover:bg-[#5a543e] transition"
        >
          <span className="text-lg">&#8592;</span>
          <span>Back</span>
        </button>
      </div>
      <div className="w-full flex flex-col items-center bg-[#F3F3F3] px-4 md:px-12 pb-12">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden mt-8">
          {/* Left: Info */}
          <div className="bg-[#ECEBE8] flex-1 flex flex-col justify-center p-8 md:p-12">
            <div className="mb-8">
              <Link href="/" className="text-gray-400 text-sm mb-4 inline-block">Main &mdash; Contact Us</Link>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Send request to scale your business to the next level</h2>
              <p className="text-gray-700 text-base md:text-lg">
                We are a team of professionals who accompany your business at all stages
              </p>
            </div>
          </div>
          {/* Right: Form */}
          <div className="flex-1 flex flex-col justify-center p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Contact Us</h2>
            {!submitted ? (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-white rounded-lg focus:outline-none text-black border border-gray-200"
                    required
                  />
                  <input
                    type="text"
                    placeholder="WhatsApp / Telegram"
                    className="w-full px-4 py-3 bg-white rounded-lg focus:outline-none text-black border border-gray-200"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-white rounded-lg focus:outline-none text-black border border-gray-200"
                  required
                />
                <textarea
                  placeholder="Text message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white rounded-lg focus:outline-none text-black border border-gray-200 resize-none"
                  required
                />
                <div className="flex justify-end items-center gap-4 mt-4">
                  <button
                    type="submit"
                    className="bg-[#716A54] text-white font-semibold text-lg px-8 py-3 rounded-lg shadow hover:bg-[#5a543e] transition"
                  >
                    Apply Now
                  </button>
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#ECEBE8]">
                    <svg className="w-6 h-6 text-[#716A54]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </span>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center">
                <h3 className="text-2xl font-bold text-black mb-4">Thank you!</h3>
                <p className="text-gray-700 text-base md:text-lg">Your request has been sent successfully!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
} 