'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BlockchainService() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('blockchain');

  const blockchainServices = [
    {
      title: 'Public Blockchains',
      description: 'Connection to different network layers, consensus protocols, node synchronizations, RPC-requests',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      features: ['Ethereum', 'Polygon', 'BSC', 'Solana', 'NEAR', 'Aurora']
    },
    {
      title: 'Private Blockchains',
      description: 'Implementation of own network, cryptography, consensus protocol, node synchronizations',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: ['Hyperledger Fabric', 'Hyperledger Besu', 'Custom Networks']
    },
    {
      title: 'Smart Contracts',
      description: 'Development, audit, and implementation of smart contracts with individual business requirements',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      features: ['Solidity', 'Rust', 'Golang', 'Security Audits']
    },
    {
      title: 'Decentralized Applications',
      description: 'Full cycle dev of blockchain-based solutions with connected smart contracts, Web3 UI/UX, wallets and Auth connection',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      features: ['dApps', 'Wallets', 'Authentication', 'UI/UX']
    },
    {
      title: 'Web2 to Web3',
      description: 'Web2 companies planning to build decentralized platforms must be sure of architecture, protocols, tools, tokenomics, and integrations',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      features: ['Migration', 'Integration', 'Architecture', 'Tokenomics']
    },
    {
      title: 'Web3 UI/UX',
      description: 'Design decentralized applications with wallet Auth, smart-contract interactions, based on users stories and habits',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      features: ['User Experience', 'Wallet Integration', 'Responsive Design']
    }
  ];

  const web3Services = [
    {
      title: 'Enterprise Software Development',
      description: 'Create complex enterprise software, ensure reliable software integration, modernize your system to Web3',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: ['Custom Solutions', 'Integration', 'Modernization']
    },
    {
      title: 'Web3 Consulting',
      description: 'Trust our top tech minds to eliminate workflow pain points, implement new tech, and create useful dApp',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: ['Strategy', 'Implementation', 'Optimization']
    },
    {
      title: 'Research & Development',
      description: 'PhDs in our team with 100+ publications and open source development help to overthink and implement your idea',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      features: ['Innovation', 'Open Source', 'Publications']
    },
    {
      title: 'Mobile App Development',
      description: 'Create a mobile app with Web3 implementation that fits your goals',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      features: ['iOS', 'Android', 'Web3 Integration']
    },
    {
      title: 'UI/UX Design',
      description: 'Build the product you need with an experienced team that uses a clear and effective design process',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      features: ['User Research', 'Prototyping', 'Testing']
    },
    {
      title: 'DevOps',
      description: 'Our DevOps engineers guarantee you fast delivery and deployment, simple monitoring and long-term support',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      features: ['CI/CD', 'Monitoring', 'Support']
    }
  ];

  const industryServices = [
    {
      title: 'Industry Blockchain',
      description: 'P2P transaction platform to split crypto payments, tokenization platform and other enterprise solutions',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: ['P2P Transactions', 'Tokenization', 'Enterprise']
    },
    {
      title: 'FinTech',
      description: 'Wallets, Tokens, Staking and Earning Rewards, DEXs, and comprehensive financial solutions',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      features: ['DeFi', 'Staking', 'DEXs', 'Wallets']
    },
    {
      title: 'E-Commerce',
      description: 'New opportunities for Web2 business and customers with the help of Web3 implementations',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      features: ['Marketplaces', 'Payments', 'Loyalty Programs']
    },
    {
      title: 'SocialFi',
      description: 'Web3 platforms with reputation-based economy and rewards for activity',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      features: ['Social Networks', 'Reputation', 'Rewards']
    },
    {
      title: 'GameFi',
      description: 'Decentralized game mechanics with P2P motivation for users and innovative gaming economies',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: ['P2E Games', 'NFTs', 'Gaming Economies']
    },
    {
      title: 'DAO',
      description: 'Smart Contract based algorithm with governance, voting and distributing funds for VCs, Charity, Companies',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: ['Governance', 'Voting', 'Treasury Management']
    }
  ];

  const technologies = [
    'Hyperledger Fabric', 'NEAR', 'AURORA', 'BSC', 'Polygon', 'Ethereum', 'Tron', 'Hyperledger Besu'
  ];

  const tools = [
    'Node.js', 'Python', 'JavaScript', 'TypeScript', 'Rust', 'Golang', 'Solidity'
  ];

  const platforms = [
    'Amazon Managed Blockchain', 'Google Cloud Platform', 'Oracle Autonomous Blockchain Cloud Service', 'IBM Blockchain Platform'
  ];

  const caseStudies = [
    {
      title: 'Longevity.Foundation (DAO)',
      description: 'The DAO platform for Longevity Science Foundation allows to receive donations in fiat or crypto and distribute LSF Points between donors according to algorithms. The Governance platform allows to Vote for project proposals and transparently distribute the funding.',
      technologies: 'TypeScript, ReactJS, NodeJS, Ethereum (Solidity, ERC20)',
      category: 'DAO',
      image: '/bg-pages/D3-1.svg'
    },
    {
      title: 'B4B.WORLD (Smart-Contracts)',
      description: 'Web3 influencer Ads platform with reputation-based rewards.',
      technologies: 'TypeScript, ReactJS, NodeJS, AURORA (EVM, Solidity, ERC20)',
      category: 'SocialFi',
      image: '/bg-pages/D3-3.svg'
    },
    {
      title: 'Distributed Exchange (DEX)',
      description: 'The Distributed Exchange is based on an EVM-compatible blockchain with basic functionality and key management.',
      technologies: 'TypeScript, ReactJS, NodeJS, EVM (Solidity, ERC20)',
      category: 'DeFi',
      image: '/bg-pages/D3-5.svg'
    },
    {
      title: 'Tokenization Assets Platform (NFTs)',
      description: 'The platform for verifying and issuing Tokenized Assets (NFTs - Green Certificates) for the electricity generated with renewable energy sources.',
      technologies: 'TypeScript, ReactJS, NodeJS, Hyperledger Besu / Fabric (Solidity, ERC1155)',
      category: 'Sustainability',
      image: '/bg-pages/D3-7.svg'
    },
    {
      title: 'QuickToken',
      description: 'Quicktoken is the first blockchain platform for the tokenization of financial assets. On the platform, banks can sell tokenized loan portfolios and scale, while investors can receive passive income from investments.',
      technologies: 'TypeScript, ReactJS, NodeJS, Hyperledger Besu / Fabric (Solidity, ERC1155)',
      category: 'FinTech',
      image: '/bg-pages/D3-9.svg'
    },
    {
      title: 'Flexibility Market Control',
      description: 'A platform that will help small companies and individuals easily start participating in the flexibility market and earn money, while aggregators will have less work to do.',
      technologies: 'TypeScript, ReactJS, NodeJS, Hyperledger Besu / Fabric (Solidity, ERC1155)',
      category: 'Energy',
      image: '/bg-pages/D3-11.svg'
    }
  ];

  return (
    <div className="text-white bg-black">
      <Navbar onMenuClick={() => setMenuOpen(true)} />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e] pt-28 sm:pt-32 pb-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-8 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-10 mb-16 bg-gradient-to-r from-white via-pink-100 to-purple-100 bg-clip-text text-transparent">
            Blockchain Solutions for Visionaries
          </h1>
          <span className="block text-xl sm:text-2xl font-normal text-white/80 mb-10">
            Empowering your ideas with secure, scalable, and innovative blockchain technology from concept to launch.
          </span>
          <p className="text-xl sm:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Unlock the full potential of blockchain for your business. We help you design, architect, and build custom blockchain products that turn your vision into reality: securely, efficiently, and with future growth in mind.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-22">
            <div className="group">
              <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff965d] to-[#a63ffd] group-hover:scale-110 transition-transform duration-300">
                20+
              </div>
              <div className="text-white/60 font-medium group-hover:text-white transition-colors">
                launched projects
              </div>
            </div>
            <div className="group">
              <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff965d] to-[#a63ffd] group-hover:scale-110 transition-transform duration-300">
                7+
              </div>
              <div className="text-white/60 font-medium group-hover:text-white transition-colors">
                years of expertise in blockchain
              </div>
            </div>
            <div className="group">
              <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff965d] to-[#a63ffd] group-hover:scale-110 transition-transform duration-300">
                33+
              </div>
              <div className="text-white/60 font-medium group-hover:text-white transition-colors">
                blockchain hackathons won
              </div>
            </div>
            <div className="group">
              <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff965d] to-[#a63ffd] group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-white/60 font-medium group-hover:text-white transition-colors">
                published scientific articles about blockchain
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-[#181828] pt-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        {/* Decorative gradients */}
        <div className="pointer-events-none absolute -top-32 left-0 w-96 h-96 bg-gradient-to-br from-[#ff965d]/30 via-[#a63ffd]/20 to-transparent rounded-full blur-3xl opacity-60"></div>
        <div className="pointer-events-none absolute -bottom-32 right-0 w-96 h-96 bg-gradient-to-tr from-[#a63ffd]/30 via-[#ff965d]/20 to-transparent rounded-full blur-3xl opacity-60"></div>

        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#ff965d] via-white to-[#a63ffd] drop-shadow-lg">
            What We Offer
          </h2>
          <p className="text-white/70 text-center mb-20 max-w-2xl mx-auto text-xl font-medium">
            End-to-end blockchain development, product design, and Web3 expertise for ambitious teams and enterprises.
          </p>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { id: "blockchain", label: "BLOCKCHAIN DEVELOPMENT" },
              { id: "web3", label: "WEB3 & MOBILE" },
              { id: "industries", label: "INDUSTRIES" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 rounded-2xl font-bold text-base tracking-wider transition-all duration-300 shadow-md ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#ff965d] to-[#a63ffd] text-white shadow-lg shadow-orange-500/25 scale-105"
                    : "bg-white/5 text-white/80 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Service Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {(activeTab === "blockchain" ? blockchainServices :
              activeTab === "web3" ? web3Services : industryServices
            ).map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/5 via-[#232347]/10 to-[#1a1a2e]/30 rounded-2xl p-10 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col min-h-[370px] relative"
              >
                {/* Floating icon */}
                <div className="absolute -top-7 left-8">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shadow border border-white/20">
                    <span className="text-white text-2xl flex items-center justify-center">
                      {React.cloneElement(service.icon, { className: "w-7 h-7" })}
                    </span>
                  </div>
                </div>
                {/* Card content */}
                <div className="flex-1 flex flex-col justify-end pt-10">
                  <h3 className="text-xl font-bold text-white mb-3 mt-6">{service.title}</h3>
                  <p className="text-base text-white/80 leading-relaxed mb-5">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-white/80 border border-white/15 hover:bg-white/20 hover:border-[#ff965d] transition-all duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0f] py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#ff965d] via-white to-[#a63ffd]">
            Technologies We Use
          </h2>
          <p className="text-lg text-white/70 text-center mb-20 max-w-2xl mx-auto">
            We leverage the most advanced blockchain networks, developer tools, and cloud platforms to deliver secure, scalable, and innovative solutions for your business.
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Blockchains */}
            <div className="relative text-center group bg-gradient-to-br from-[#232347]/60 to-[#1a1a2e]/80 rounded-2xl border border-white/10 shadow-lg shadow-[#ff965d]/10 p-10 hover:shadow-[#ff965d]/30 transition-all duration-300">
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-[#ff965d] to-[#a63ffd] rounded-full flex items-center justify-center shadow-lg shadow-[#ff965d]/30 border-4 border-[#1a1a2e]">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h8M12 8v8" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mt-8 mb-6 group-hover:text-pink-400 transition-colors">
                BLOCKCHAIN NETWORKS
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ff965d]/30 to-[#a63ffd]/30 rounded-full text-sm text-white/90 border border-white/20 shadow-md hover:bg-white/10 hover:border-pink-500/50 hover:text-pink-400 transition-all duration-300 transform hover:scale-110 font-semibold tracking-wide"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-br from-[#ff965d] to-[#a63ffd] shadow"></span>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="relative text-center group bg-gradient-to-br from-[#232347]/60 to-[#1a1a2e]/80 rounded-2xl border border-white/10 shadow-lg shadow-[#a63ffd]/10 p-10 hover:shadow-[#a63ffd]/30 transition-all duration-300">
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-[#a63ffd] to-[#ff965d] rounded-full flex items-center justify-center shadow-lg shadow-[#a63ffd]/30 border-4 border-[#1a1a2e]">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 8h8v8H8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mt-8 mb-6 group-hover:text-blue-400 transition-colors">
                DEVELOPMENT TOOLS
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#a63ffd]/30 to-[#ff965d]/30 rounded-full text-sm text-white/90 border border-white/20 shadow-md hover:bg-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 font-semibold tracking-wide"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-br from-[#a63ffd] to-[#ff965d] shadow"></span>
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Platforms */}
            <div className="relative text-center group bg-gradient-to-br from-[#232347]/60 to-[#1a1a2e]/80 rounded-2xl border border-white/10 shadow-lg shadow-[#4ade80]/10 p-10 hover:shadow-[#4ade80]/30 transition-all duration-300">
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-[#4ade80] to-[#a63ffd] rounded-full flex items-center justify-center shadow-lg shadow-[#4ade80]/30 border-4 border-[#1a1a2e]">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="6" y="6" width="12" height="12" rx="3" strokeWidth="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9h6v6H9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mt-8 mb-6 group-hover:text-green-400 transition-colors">
                CLOUD PLATFORMS
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {platforms.map((platform, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#4ade80]/30 to-[#a63ffd]/30 rounded-full text-sm text-white/90 border border-white/20 shadow-md hover:bg-white/10 hover:border-green-400/50 hover:text-green-400 transition-all duration-300 transform hover:scale-110 font-semibold tracking-wide"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-br from-[#4ade80] to-[#a63ffd] shadow"></span>
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="bg-[#0a0a0f] py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
            Client Success Stories
          </h2>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p className="text-white/60 text-center mb-16 max-w-3xl mx-auto text-lg">
            Real blockchain projects we&apos;ve delivered for our clients
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-102 hover:shadow-lg hover:shadow-black/20 cursor-pointer"
              >
                {/* Header Section */}
                <div className="mb-4">
                  <div className="text-sm text-[#ff965d] font-medium mb-3 bg-white/5 px-3 py-1 rounded-md inline-block border border-white/10">
                    {study.category}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-white transition-colors duration-300">
                    {study.title}
                  </h3>
                </div>

                {/* Content */}
                <p className="text-white/70 mb-4 leading-relaxed line-clamp-4 text-sm">
                  {study.description}
                </p>
                <div className="text-sm text-white/50 group-hover:text-white/60 transition-colors duration-300">
                  <strong className="text-white/70">Technologies:</strong>{" "}
                  {study.technologies}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#ff965d] to-[#a63ffd] py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build Your Blockchain Solution?
          </h2>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s discuss your blockchain project and create a solution that
            drives your business forward. Get a free consultation with our
            blockchain experts at Barbarika.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/book-demo">
              <button className="group px-10 py-5 bg-white text-[#ff965d] font-bold rounded-xl hover:bg-white/90 transition-all duration-300 text-lg transform hover:scale-105 hover:shadow-2xl shadow-lg">
                <span className="flex items-center gap-2">
                  Book Free Consultation
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
            </Link>
            <Link href="/company-file/contact">
              <button className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#ff965d] transition-all duration-300 text-lg transform hover:scale-105 hover:shadow-2xl">
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