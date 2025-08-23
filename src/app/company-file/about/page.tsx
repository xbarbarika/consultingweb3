'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navbar />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="w-full relative overflow-hidden">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black/90 to-red-900/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-red-500/5" />
        </div>
        
        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 xl:px-24">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight px-2" style={{ 
              fontFamily: 'var(--font-tourney), sans-serif',
              background: 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              lineHeight: '1.2',
              wordBreak: 'keep-all',
              hyphens: 'manual',
              overflowWrap: 'break-word',
              whiteSpace: 'normal'
            }}>
              We are the architects of digital transformation
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto mb-8 sm:mb-12 px-2 sm:px-4" style={{ 
              fontFamily: 'var(--font-dm-sans), sans-serif',
              lineHeight: '1.6'
            }}>
              We combine cutting-edge technology with creative strategy to build digital experiences that drive results. Our team of experts is dedicated to helping businesses thrive in the digital age.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 sm:mt-12 px-2 sm:px-0">
              <a 
                href="#our-mission" 
                className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                style={{
                  background: 'rgba(15, 23, 42, 0.6)',
                  border: '2px solid rgba(59, 130, 246, 0.5)',
                  color: '#BFDBFE',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 15px rgba(29, 78, 216, 0.15)'
                }}
              >
                Our Mission
              </a>
              <a 
                href="#our-approach" 
                className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                style={{
                  background: 'linear-gradient(135deg, #EF4444 0%, #B91C1C 100%)',
                  border: '2px solid rgba(239, 68, 68, 0.3)',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(220, 38, 38, 0.25)'
                }}
              >
                Our Approach
              </a>
            </div>
          </div>
        </section>

        {/* Mission & Impact Section */}
        <section id="our-mission" className={`pt-12 pb-20 px-6 sm:px-12 lg:px-24 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                    style={{
                      fontFamily: 'var(--font-tourney), sans-serif',
                      color: 'white',
                      textTransform: 'uppercase',
                      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                      lineHeight: '1.2',
                      marginBottom: '1.5rem'
                    }}>
                  Our Mission: Redefine Digital Excellence
                </h2>
                <p className="text-lg sm:text-xl text-white/80 leading-relaxed"
                   style={{ 
                     fontFamily: 'var(--font-dm-sans), sans-serif',
                     marginBottom: '1.5rem'
                   }}>
                  We exist to empower businesses with innovative digital solutions that drive real growth. Our approach combines cutting-edge technology with creative strategy to deliver exceptional results.
                </p>
                <div className="space-y-4 sm:space-y-5">
                  {[
                    {
                      title: "Data-Driven Decisions",
                      description: "Leveraging analytics to inform every strategy"
                    },
                    {
                      title: "Future-Focused",
                      description: "Staying ahead of digital trends and technologies"
                    },
                    {
                      title: "Results-Oriented",
                      description: "Delivering measurable impact and ROI"
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-4 group cursor-pointer transition-all duration-300 p-3 sm:p-4 rounded-xl hover:bg-white/5">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center group-hover:from-red-500 group-hover:to-red-700 transition-all duration-300">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors duration-300"
                            style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                          {item.title}
                        </h3>
                        <p className="text-white/70 mt-1 group-hover:text-white/90 transition-colors duration-300"
                           style={{ fontFamily: 'var(--font-numans), sans-serif' }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden"
                   style={{
                     background: 'rgba(0, 0, 0, 0.4)',
                     border: '1px solid rgba(255, 59, 48, 0.2)',
                     backdropFilter: 'blur(10px)',
                     boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                   }}>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-6xl mb-6 text-red-500">🚀</div>
                    <p className="text-2xl font-bold text-white mb-2"
                       style={{ fontFamily: 'var(--font-tourney), sans-serif' }}>
                      Driving Digital Transformation
                    </p>
                    <p className="text-white/80" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                      Since 2020
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section id="our-approach" className={`py-20 px-6 sm:px-12 lg:px-24 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight"
                style={{
                  fontFamily: 'var(--font-tourney), sans-serif',
                  color: 'white',
                  textTransform: 'uppercase',
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                }}>
              Our Approach to Digital Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-16">
              We combine strategy, creativity, and technology to deliver measurable results
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 group mb-12">
              {[
                {
                  icon: (
                    <svg className="w-10 h-10 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  ),
                  title: "Strategy",
                  description: "Data-driven approach to inform decisions and optimize your digital presence.",
                  gradient: "from-blue-600 to-blue-800",
                  border: "border-blue-500/30",
                  shadow: "shadow-blue-500/10",
                  bg: "bg-gradient-to-br from-blue-900/40 to-blue-800/20"
                },
                {
                  icon: (
                    <svg className="w-10 h-10 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  ),
                  title: "Execution",
                  description: "Agile methodology for rapid delivery without compromising on quality.",
                  gradient: "from-blue-600 to-blue-800",
                  border: "border-blue-500/30",
                  shadow: "shadow-blue-500/10",
                  bg: "bg-gradient-to-br from-blue-900/40 to-blue-800/20"
                },
                {
                  icon: (
                    <svg className="w-10 h-10 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  ),
                  title: "Transparency",
                  description: "Clear communication and regular updates throughout the project lifecycle.",
                  gradient: "from-blue-600 to-blue-800",
                  border: "border-blue-500/30",
                  shadow: "shadow-blue-500/10",
                  bg: "bg-gradient-to-br from-blue-900/40 to-blue-800/20"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`relative p-8 rounded-2xl transition-all duration-500 overflow-hidden ${
                    isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                    background: 'rgba(15, 23, 42, 0.5)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid',
                    borderColor: item.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                    boxShadow: `0 4px 30px ${item.gradient.includes('blue') ? 'rgba(37, 99, 235, 0.1)' : 'rgba(220, 38, 38, 0.1)'}`
                  }}
                >
                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    item.gradient.includes('blue') 
                      ? 'from-blue-900/20 to-blue-900/5' 
                      : 'from-red-900/20 to-red-900/5'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative z-10 h-full flex flex-col">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                      item.gradient.includes('blue')
                        ? 'bg-blue-900/40 text-blue-200 border border-blue-700/30'
                        : 'bg-red-900/40 text-red-200 border border-red-700/30'
                    }`}>
                      {item.icon}
                    </div>
                    <h3 className={`text-xl font-bold mb-4 text-center ${
                      item.gradient.includes('blue') ? 'text-blue-100' : 'text-red-100'
                    }`} style={{ 
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      letterSpacing: '0.05em',
                      position: 'relative',
                      display: 'inline-block'
                    }}>
                      {item.title}
                    </h3>
                    <p className="text-white/80 mt-4 leading-relaxed text-center flex-grow" style={{ fontFamily: 'var(--font-numans), sans-serif' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Stats Section */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { 
                  number: "100%", 
                  label: "Client Satisfaction",
                  icon: (
                    <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  ),
                  gradient: "from-red-600 to-red-800",
                  bg: "bg-gradient-to-br from-red-900/40 to-red-800/20"
                },
                { 
                  number: "50+", 
                  label: "Projects",
                  icon: (
                    <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                  ),
                  gradient: "from-red-600 to-red-800",
                  bg: "bg-gradient-to-br from-red-900/40 to-red-800/20"
                },
                { 
                  number: "24/7", 
                  label: "Support",
                  icon: (
                    <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  ),
                  gradient: "from-red-600 to-red-800",
                  bg: "bg-gradient-to-br from-red-900/40 to-red-800/20"
                },
                { 
                  number: "10+", 
                  label: "Years Experience",
                  icon: (
                    <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  ),
                  gradient: "from-red-600 to-red-800",
                  bg: "bg-gradient-to-br from-red-900/40 to-red-800/20"
                }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-500 hover:-translate-y-1 ${stat.bg} ${
                    isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(239, 68, 68, 0.3)'
                  }}
                  >
                    <div className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                      {stat.number}
                    </div>
                    <div className="mt-2 text-white/80" style={{ fontFamily: 'var(--font-numans), sans-serif' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 xl:px-24 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-14 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
                  style={{
                    fontFamily: 'var(--font-tourney), sans-serif',
                    background: 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textTransform: 'uppercase',
                    textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                  }}>
                Meet Our Team
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                The brilliant minds behind our success
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
              {[
                {
                  name: "Kritesh",
                  role: "Founder & CEO",
                  image: "/kriteshprofile.png",
                  description: "Visionary leader driving innovation across Web3 and blockchain technology.",
                  gradient: "from-blue-600 to-blue-800",
                  border: "border-blue-500/30",
                  shadow: "shadow-blue-500/10",
                  bg: "bg-gradient-to-br from-blue-900/40 to-blue-800/20"
                },
                {
                  name: "Prince",
                  role: "Frontend Developer",
                  image: "/princeprofile.png",
                  description: "Modern JavaScript expert creating fast, scalable web applications.",
                  gradient: "from-red-600 to-red-800",
                  border: "border-red-500/30",
                  shadow: "shadow-red-500/10",
                  bg: "bg-gradient-to-br from-red-900/40 to-red-800/20"
                },
                {
                  name: "Abhishek",
                  role: "Front End Developer",
                  image: "/abhishekprofile.png",
                  description: "React specialist crafting responsive interfaces with pixel-perfect precision.",
                  gradient: "from-blue-600 to-blue-800",
                  border: "border-blue-500/30",
                  shadow: "shadow-blue-500/10",
                  bg: "bg-gradient-to-br from-blue-900/40 to-blue-800/20"
                },
                {
                  name: "Shivam",
                  role: "UI/UX Designer",
                  image: "/shivamprofile.png",
                  description: "Design expert transforming complex ideas into intuitive user experiences.",
                  gradient: "from-red-600 to-red-800",
                  border: "border-red-500/30",
                  shadow: "shadow-red-500/10",
                  bg: "bg-gradient-to-br from-red-900/40 to-red-800/20"
                }
              ].map((member) => (
                <div 
                  key={member.name}
                  className={`p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 group border ${member.border} ${member.shadow} h-full flex flex-col`}
                  style={{
                    background: 'rgba(15, 23, 42, 0.6)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className="relative group flex flex-col items-center h-full">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full overflow-hidden border-2 transition-all duration-300"
                         style={{
                           borderColor: member.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.5)' : 'rgba(239, 68, 68, 0.5)'
                         }}>
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                             style={{
                               background: member.gradient.includes('blue') 
                                 ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.4) 100%)' 
                                 : 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.4) 100%)'
                             }}>
                        </div>
                        <Image 
                          src={member.image} 
                          alt={member.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-center mb-1 sm:mb-2 group-hover:scale-105 transition-transform duration-300" 
                        style={{ 
                          color: 'white',
                          fontFamily: 'var(--font-dm-sans), sans-serif',
                          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                        }}>
                      {member.name}
                    </h3>
                    
                    <div className={`px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mb-3 sm:mb-4 group-hover:scale-105 transition-all duration-300 ${
                      member.gradient.includes('blue') 
                        ? 'bg-blue-900/30 text-blue-200 border border-blue-700/30' 
                        : 'bg-red-900/30 text-red-200 border border-red-700/30'
                    }`}>
                      <p className="text-xs sm:text-sm font-medium" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                        {member.role}
                      </p>
                    </div>
                    
                    <p className="text-white/80 text-sm sm:text-base text-center mt-3 sm:mt-auto mb-4 sm:mb-0" style={{ 
                      fontFamily: 'var(--font-numans), sans-serif',
                      lineHeight: '1.6'
                    }}>
                      {member.description}
                    </p>
                    
                    <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10 w-full">
                      <div className="flex justify-center space-x-3 sm:space-x-4">
                        <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                        <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Twitter">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 sm:mt-16 text-center px-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6" style={{ fontFamily: 'var(--font-tourney), sans-serif' }}>
                Join Our Team
              </h3>
              <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto mb-6 sm:mb-8" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                We&apos;re always looking for talented individuals who are passionate about making an impact.
              </p>
              <a 
                href="/careers" 
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white transition-all duration-300 transform hover:scale-105"
                style={{
                  background: 'rgba(255, 59, 48, 0.9)',
                  border: '2px solid #FF3B30',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 15px rgba(255, 59, 48, 0.3)'
                }}
              >
                View Open Positions
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </section>
        
        {/* Floating Action Button */}
        <div className={`fixed bottom-8 right-8 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link href="/company-file/contact">
            <button className="relative group p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                    style={{
                      background: 'rgba(255, 59, 48, 0.9)',
                      border: '2px solid #FF3B30',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 4px 15px rgba(255, 59, 48, 0.3)'
                    }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <span className="relative text-white font-bold">Get Started</span>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}