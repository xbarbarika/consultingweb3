'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    email: '',
    whatsapp_telegram: '',
    message: '',
    date: '',
    time: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(false);

    const { error } = await supabase
      .from('meetings')
      .insert([form]);

    if (error) {
      alert('There was an error scheduling your meeting. Please try again.');
      return;
    }

    setSubmitted(true);
    setForm({
      name: '',
      email: '',
      whatsapp_telegram: '',
      message: '',
      date: '',
      time: '',
    });
  };

  return (
    <>
      <Navbar showMenuButton onMenuClick={() => setMenuOpen(true)} />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="w-full flex justify-start max-w-5xl mx-auto mt-30 px-4">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 px-5 py-2 bg-[#716A54] text-white rounded-full font-semibold shadow hover:bg-[#5a543e] transition text-base md:text-lg"
        >
          <span className="text-lg">&#8592;</span>
          <span>Back</span>
        </button>
      </div>
      <div className="w-full flex flex-col items-center bg-[#F3F3F3] px-2 sm:px-4 md:px-8 pb-8">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden mt-6">
          {/* Left: Info */}
          <div className="bg-[#ECEBE8] flex-1 flex flex-col justify-center p-4 sm:p-6 md:p-10">
            <div className="mb-6 sm:mb-8">
              <Link href="/" className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-4 inline-block">Main &mdash; Contact Us</Link>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2 sm:mb-4">Send request to scale your business to the next level</h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                We are a team of professionals who accompany your business at all stages
              </p>
            </div>
          </div>
          {/* Right: Form */}
          <div className="flex-1 flex flex-col justify-center p-4 sm:p-6 md:p-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">Contact Us</h2>
            {!submitted ? (
              <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white rounded-lg focus:outline-none text-black border border-gray-200 text-sm sm:text-base"
                    required
                  />
                  <input
                    type="text"
                    placeholder="WhatsApp / Telegram"
                    value={form.whatsapp_telegram}
                    onChange={e => setForm({ ...form, whatsapp_telegram: e.target.value })}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white rounded-lg focus:outline-none text-black border border-gray-200 text-sm sm:text-base"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white rounded-lg focus:outline-none text-black border border-gray-200 text-sm sm:text-base"
                  required
                />
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <input
                    type="date"
                    value={form.date}
                    onChange={e => setForm({ ...form, date: e.target.value })}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white rounded-lg focus:outline-none text-black border border-gray-200 text-sm sm:text-base"
                    required
                  />
                  <input
                    type="time"
                    value={form.time}
                    onChange={e => setForm({ ...form, time: e.target.value })}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white rounded-lg focus:outline-none text-black border border-gray-200 text-sm sm:text-base"
                    required
                  />
                </div>
                <textarea
                  placeholder="Text message"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white rounded-lg focus:outline-none text-black border border-gray-200 resize-none text-sm sm:text-base"
                  required
                />
                <div className="flex justify-end items-center gap-3 sm:gap-4 mt-3 sm:mt-4">
                  <button
                    type="submit"
                    className="bg-[#716A54] text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow hover:bg-[#5a543e] transition"
                  >
                    Apply Now
                  </button>
                  <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#ECEBE8]">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#716A54]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </span>
                </div>
              </form>
            ) : (
              <div className="py-8 sm:py-12 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">Thank you!</h3>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg">Your request has been sent successfully!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
} 