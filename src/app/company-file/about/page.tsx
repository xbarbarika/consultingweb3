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
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Navbar onMenuClick={() => setMenuOpen(true)} />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="w-full">
        {/* Hero Section */}
        <section className={`relative py-24 px-6 sm:px-12 lg:px-24 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              We are the architects of digital transformation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              At Barbarika, we blend creativity with technology to build digital experiences that matter. We&apos;re not just marketers; we&apos;re growth partners for the digital age.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <a href="#our-mission" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                Our Mission
              </a>
              <a href="#our-approach" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                Our Approach
              </a>
            </div>
          </div>
        </section>

        {/* Mission & Impact Section */}
        <section id="our-mission" className={`py-20 px-6 sm:px-12 lg:px-24 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Our Mission: To Redefine Digital Excellence
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  We exist to empower businesses with innovative digital solutions that drive real growth. Our approach combines cutting-edge technology with creative strategy to deliver exceptional results.
                </p>
                <div className="pt-6 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Data-Driven Decisions</h3>
                      <p className="text-gray-400 mt-1">Leveraging analytics to inform every strategy</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Future-Focused</h3>
                      <p className="text-gray-400 mt-1">Staying ahead of digital trends and technologies</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl overflow-hidden">
                {/* This would be an image or illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🚀</div>
                    <p className="text-white font-medium">Driving digital transformation since 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section id="our-approach" className={`py-20 px-6 sm:px-12 lg:px-24 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Approach to Digital Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-16">
              We combine strategy, creativity, and technology to deliver measurable results
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-12 h-12 text-purple-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  ),
                  title: "Data-Driven Strategy",
                  description: "We leverage analytics and insights to inform every decision and optimize your digital presence."
                },
                {
                  icon: (
                    <svg className="w-12 h-12 text-pink-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  ),
                  title: "Lightning Fast Execution",
                  description: "Our agile approach means we deliver results quickly without sacrificing quality or attention to detail."
                },
                {
                  icon: (
                    <svg className="w-12 h-12 text-purple-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  ),
                  title: "Transparent Process",
                  description: "Stay informed with regular updates and clear communication throughout every project phase."
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2 ${
                    isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {item.icon}
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
            
            {/* Stats Section */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "100%", label: "Client Satisfaction" },
                { number: "50+", label: "Projects Completed" },
                { number: "30+", label: "Services Offered" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-gray-800/50 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  style={{
                    transition: `all 0.5s ease ${index * 100}ms`,
                    animation: isVisible ? `fadeIn 0.5s ease-out ${index * 100}ms both` : 'none'
                  }}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="mt-2 text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={`py-20 px-6 sm:px-12 lg:px-24 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Team Members
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The brilliant minds behind our success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 - Kritesh */}
              <div className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-purple-500">
                  <Image 
                    src="/kriteshprofile.png" 
                    alt="Kritesh" 
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Kritesh</h3>
                <p className="text-purple-400 font-medium mb-4">Founder & CEO</p>
                <p className="text-gray-300">Visionary leader driving innovation across Web3 and blockchain technology.</p>
              </div>
              
              {/* Team Member 2 - Prince */}
              <div className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-blue-500">
                  <Image 
                    src="/princeprofile.png" 
                    alt="Prince" 
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Prince</h3>
                <p className="text-blue-400 font-medium mb-4">Frontend Developer</p>
                <p className="text-gray-300">Modern JavaScript expert creating fast, scalable web applications.</p>
              </div>
              
              {/* Team Member 3 - Abhishek */}
              <div className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-green-500">
                  <Image 
                    src="/abhishekprofile.png" 
                    alt="Abhishek" 
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Abhishek</h3>
                <p className="text-green-400 font-medium mb-4">Front End Developer</p>
                <p className="text-gray-300">React specialist crafting responsive interfaces with pixel-perfect precision.</p>
              </div>
              
              {/* Team Member 3 */}
              <div className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-pink-500">
                  <Image 
                    src="/shivamprofile.png" 
                    alt="Shivam" 
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Shivam</h3>
                <p className="text-pink-400 font-medium mb-4">UI/UX Designer</p>
                <p className="text-gray-300">Design expert transforming complex ideas into intuitive user experiences.</p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-white mb-6">Join Our Team</h3>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                We&apos;re always looking for talented individuals who are passionate about making an impact.
              </p>
              <a 
                href="/careers" 
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-all duration-300 transform hover:scale-105"
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
            <button className="relative group p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <span className="relative text-white font-bold">Get Started</span>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}