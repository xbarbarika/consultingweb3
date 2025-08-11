'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BlockchainService() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('blockchain');

  const technologies = [
    'Ethereum', 'Polygon', 'BSC', 'Solana', 'NEAR', 'Aurora', 'Hyperledger Fabric', 'Tron'
  ];

  const tools = [
    'Node.js', 'Python', 'JavaScript', 'TypeScript', 'Rust', 'Golang', 'Solidity', 'React'
  ];

  const platforms = [
    'AWS Blockchain', 'Google Cloud Platform', 'Oracle Blockchain', 'IBM Blockchain Platform'
  ];

  const caseStudies = [
    {
      title: 'DeFi Trading Platform',
      description: 'Decentralized exchange with automated market making and liquidity pools',
      technologies: 'Solidity, React, Node.js, Ethereum',
      category: 'DeFi'
    },
    {
      title: 'NFT Marketplace',
      description: 'Full-featured NFT platform with minting, trading, and royalty distribution',
      technologies: 'Solidity, IPFS, React, Polygon',
      category: 'NFTs'
    },
    {
      title: 'DAO Governance Platform',
      description: 'Decentralized governance system with voting mechanisms and treasury management',
      technologies: 'Solidity, TypeScript, Ethereum, Aragon',
      category: 'DAO'
    }
  ];

  return (
    <div className="text-white">
      <div className="min-h-screen" style={{ backgroundImage: 'url(/bg-pages/D3-13.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <Navbar onMenuClick={() => setMenuOpen(true)} />
        <main className="w-full flex flex-col items-start justify-start pt-24 sm:pt-28 lg:pt-24 pb-10 px-4 md:px-8 lg:px-16 min-h-[calc(100vh-64px)]">
          {/* Service Label */}
          <div className="text-white/60 text-lg sm:text-xl font-medium leading-7 mt-16 mb-6 ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-[66px]" style={{ fontFamily: 'Inter' }}>
            <span className="text-white/90 font-medium">Blockchain Development</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-[66px] max-w-4xl">
            Leading Blockchain Development & Consulting Services
          </h1>
          
          {/* Subheading */}
          <p className="mt-[25px] text-white/50 max-w-3xl text-base sm:text-lg font-normal leading-[140%] ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-[66px]">
            We provide cutting-edge blockchain solutions including smart contracts, DeFi platforms, NFT marketplaces, and enterprise blockchain integration. From concept to deployment, we deliver secure and scalable blockchain applications.
          </p>
          
          {/* Book Demo Button */}
          <div className="mt-8 ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-[66px]">
            <Link href="/book-demo">
              <div 
                className="inline-block p-[2px] rounded-xl transition hover:scale-105"
                style={{
                  background: 'linear-gradient(90deg, #ff965d 0%, #ff5bbe 50%, #a63ffd 100%)',
                }}
              >
                <button className="px-8 py-4 rounded-[10px] font-medium bg-black text-white transition focus:outline-none text-lg">
                  Book Consultation
                </button>
              </div>
            </Link>
          </div>
        </main>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e] py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">Our Blockchain Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff965d] to-[#a63ffd]">50+</div>
              <div className="text-white/60 font-medium">Blockchain Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff965d] to-[#a63ffd]">5+</div>
              <div className="text-white/60 font-medium">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff965d] to-[#a63ffd]">15+</div>
              <div className="text-white/60 font-medium">Blockchain Networks</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff965d] to-[#a63ffd]">100M+</div>
              <div className="text-white/60 font-medium">Transactions Processed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-[#1a1a2e] py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">What We Offer</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive blockchain development services tailored to your business needs
          </p>
          
          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'blockchain', label: 'Blockchain Development' },
              { id: 'web3', label: 'Web3 & Mobile' },
              { id: 'industries', label: 'Industries' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#ff965d] to-[#a63ffd] text-white'
                    : 'bg-white/10 text-white/60 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Service Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === 'blockchain' && [
              {
                title: 'Smart Contracts',
                description: 'Development, audit, and implementation of smart contracts with individual business requirements',
                icon: '📜'
              },
              {
                title: 'DeFi Platforms',
                description: 'Decentralized finance solutions including DEXs, lending protocols, and yield farming',
                icon: '💰'
              },
              {
                title: 'NFT Marketplaces',
                description: 'Full-featured NFT platforms with minting, trading, and royalty systems',
                icon: '🖼️'
              },
              {
                title: 'Public Blockchains',
                description: 'Integration with existing networks like Ethereum, BSC, Polygon, and more',
                icon: '🌐'
              },
              {
                title: 'Private Blockchains',
                description: 'Custom enterprise blockchain networks with tailored consensus mechanisms',
                icon: '🔒'
              },
              {
                title: 'Web2 to Web3',
                description: 'Migration services to help traditional businesses adopt blockchain technology',
                icon: '🔄'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.description}</p>
              </div>
            ))}

            {activeTab === 'web3' && [
              {
                title: 'Enterprise Software',
                description: 'Complex enterprise solutions with blockchain integration and modernization',
                icon: '🏢'
              },
              {
                title: 'Web3 Consulting',
                description: 'Strategic consulting to implement blockchain technology in your business',
                icon: '💡'
              },
              {
                title: 'Mobile App Development',
                description: 'Mobile applications with Web3 wallets and blockchain connectivity',
                icon: '📱'
              },
              {
                title: 'UI/UX Design',
                description: 'User-friendly interfaces for complex blockchain applications',
                icon: '🎨'
              },
              {
                title: 'DevOps & Infrastructure',
                description: 'Blockchain infrastructure setup, monitoring, and maintenance',
                icon: '⚙️'
              },
              {
                title: 'Security Audits',
                description: 'Comprehensive security audits and penetration testing for blockchain apps',
                icon: '🛡️'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.description}</p>
              </div>
            ))}

            {activeTab === 'industries' && [
              {
                title: 'FinTech',
                description: 'Digital wallets, payment systems, trading platforms, and DeFi solutions',
                icon: '🏦'
              },
              {
                title: 'Gaming & GameFi',
                description: 'Play-to-earn games, in-game asset tokenization, and gaming economies',
                icon: '🎮'
              },
              {
                title: 'Supply Chain',
                description: 'Transparent supply chain tracking and verification systems',
                icon: '🚚'
              },
              {
                title: 'Healthcare',
                description: 'Secure patient data management and pharmaceutical tracking',
                icon: '⚕️'
              },
              {
                title: 'Real Estate',
                description: 'Property tokenization, fractional ownership, and smart contracts',
                icon: '🏘️'
              },
              {
                title: 'Energy & Sustainability',
                description: 'Carbon credit trading, renewable energy certificates, and green tokens',
                icon: '🌱'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0f] py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">Technologies We Use</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blockchains */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-6">Blockchain Networks</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {technologies.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-white/10 rounded-full text-sm text-white/80 border border-white/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-6">Development Tools</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {tools.map((tool, index) => (
                  <span key={index} className="px-4 py-2 bg-white/10 rounded-full text-sm text-white/80 border border-white/20">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Platforms */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-6">Cloud Platforms</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {platforms.map((platform, index) => (
                  <span key={index} className="px-4 py-2 bg-white/10 rounded-full text-sm text-white/80 border border-white/20">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="bg-[#0a0a0f] py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">Client Success Stories</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Real blockchain projects we&apos;ve delivered for our clients
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition">
                <div className="text-sm text-[#ff965d] font-medium mb-2">{study.category}</div>
                <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                <p className="text-white/60 mb-4 leading-relaxed">{study.description}</p>
                <div className="text-sm text-white/40">
                  <strong>Technologies:</strong> {study.technologies}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#ff965d] to-[#a63ffd] py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build Your Blockchain Solution?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your blockchain project and create a solution that drives your business forward. 
            Get a free consultation with our blockchain experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo">
              <button className="px-8 py-4 bg-white text-[#ff965d] font-bold rounded-lg hover:bg-white/90 transition text-lg">
                Book Free Consultation
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#ff965d] transition text-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
} 