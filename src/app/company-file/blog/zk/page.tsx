'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  category: string;
  content: string;
}

const zkPosts: BlogPost[] = [
  {
    slug: 'zk-proofs-basics',
    title: 'Zero-Knowledge Proofs: The Foundation of Privacy in Web3',
    excerpt: 'Understanding the fundamental concepts of zero-knowledge proofs and their role in blockchain privacy.',
    date: 'Aug 30, 2025',
    author: 'Barbarika Labs',
    readTime: '8 min read',
    image: '/hero.png',
    category: 'Cryptography',
    content: `
      <div class="prose prose-invert max-w-4xl mx-auto py-8 px-4">
        <h1 class="text-3xl font-bold text-white mb-6">Zero-Knowledge Proofs: The Foundation of Privacy in Web3</h1>
        
        <div class="flex items-center text-sm text-gray-400 mb-8">
          <span>By Barbarika Labs</span>
          <span class="mx-2">•</span>
          <span>Aug 30, 2025</span>
          <span class="mx-2">•</span>
          <span>8 min read</span>
        </div>

        <div class="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
          <img src="/hero.png" alt="Zero-Knowledge Proofs" class="w-full h-full object-cover" />
        </div>

        <p class="text-xl text-gray-300 mb-6 leading-relaxed">
          Zero-knowledge proofs (ZKPs) represent one of the most powerful cryptographic tools in blockchain technology, 
          enabling privacy and scalability while maintaining security and transparency.
        </p>
        
        <h2 class="text-2xl font-bold text-white mt-12 mb-4">What Are Zero-Knowledge Proofs?</h2>
        <p class="mb-6">
          A zero-knowledge proof allows one party (the prover) to prove to another party (the verifier) 
          that a statement is true without revealing any information beyond the validity of the statement itself.
        </p>
        
        <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Three Properties</h2>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Completeness:</strong> If the statement is true, an honest verifier will be convinced by an honest prover</li>
          <li><strong>Soundness:</strong> If the statement is false, no cheating prover can convince an honest verifier</li>
          <li><strong>Zero-Knowledge:</strong> If the statement is true, the verifier learns nothing other than the fact that the statement is true</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">Types of ZK Proofs</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="p-6 bg-gray-800/50 rounded-xl">
            <h3 class="text-xl font-semibold text-white mb-3">zk-SNARKs</h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-300">
              <li>Succinct Non-interactive Arguments of Knowledge</li>
              <li>Small proof sizes</li>
              <li>Fast verification</li>
              <li>Trusted setup required</li>
            </ul>
          </div>
          
          <div class="p-6 bg-gray-800/50 rounded-xl">
            <h3 class="text-xl font-semibold text-white mb-3">zk-STARKs</h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-300">
              <li>Scalable Transparent Arguments of Knowledge</li>
              <li>Quantum-resistant</li>
              <li>No trusted setup</li>
              <li>Larger proof sizes</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">Applications in Blockchain</h2>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Privacy:</strong> Hide transaction details while proving validity</li>
          <li><strong>Scalability:</strong> Batch multiple transactions into single proofs</li>
          <li><strong>Identity:</strong> Prove identity without revealing personal data</li>
          <li><strong>Compliance:</strong> Meet regulatory requirements while maintaining privacy</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Future of ZK</h2>
        <p class="mb-6">
          As zero-knowledge proof technology matures, we'll see widespread adoption across DeFi, 
          identity systems, and enterprise blockchain applications, fundamentally changing how we approach privacy in the digital age.
        </p>

        <div class="mt-12 pt-6 border-t border-gray-800">
          <p class="text-sm text-gray-400">
            By Barbarika Labs
          </p>
          <p class="text-sm text-gray-500 mt-2">
            Published on August 30, 2025
          </p>
        </div>
      </div>
    `
  },
  {
    slug: 'zk-rollups-explained',
    title: 'ZK-Rollups: Scaling Ethereum with Zero-Knowledge Proofs',
    excerpt: 'How ZK-rollups are solving Ethereum\'s scalability challenges while maintaining security and decentralization.',
    date: 'Sep 8, 2025',
    author: 'Prince Bhesaniya',
    readTime: '6 min read',
    image: '/hero.png',
    category: 'Cryptography',
    content: `
      <div class="prose prose-invert max-w-4xl mx-auto py-8 px-4">
        <h1 class="text-3xl font-bold text-white mb-6">ZK-Rollups: Scaling Ethereum with Zero-Knowledge Proofs</h1>
        
        <div class="flex items-center text-sm text-gray-400 mb-8">
          <span>By Prince Bhesaniya</span>
          <span class="mx-2">•</span>
          <span>Sep 8, 2025</span>
          <span class="mx-2">•</span>
          <span>6 min read</span>
        </div>

        <div class="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
          <img src="/hero.png" alt="ZK-Rollups" class="w-full h-full object-cover" />
        </div>

        <p class="text-xl text-gray-300 mb-6 leading-relaxed">
          ZK-rollups represent the most promising Layer 2 scaling solution for Ethereum, 
          combining the security of the mainnet with the throughput of off-chain processing.
        </p>
        
        <h2 class="text-2xl font-bold text-white mt-12 mb-4">How ZK-Rollups Work</h2>
        <p class="mb-6">
          ZK-rollups process thousands of transactions off-chain and submit a single cryptographic proof 
          to the Ethereum mainnet, proving that all transactions are valid without revealing the transaction details.
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">Key Benefits</h2>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Scalability:</strong> Process thousands of transactions per second</li>
          <li><strong>Security:</strong> Inherit Ethereum's security through cryptographic proofs</li>
          <li><strong>Privacy:</strong> Transaction details remain private</li>
          <li><strong>Cost Efficiency:</strong> Significantly reduced gas fees</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">Popular ZK-Rollup Solutions</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="p-6 bg-gray-800/50 rounded-xl">
            <h3 class="text-xl font-semibold text-white mb-3">zkSync</h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-300">
              <li>Ethereum-compatible smart contracts</li>
              <li>Low transaction fees</li>
              <li>Fast finality</li>
            </ul>
          </div>
          
          <div class="p-6 bg-gray-800/50 rounded-xl">
            <h3 class="text-xl font-semibold text-white mb-3">StarkNet</h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-300">
              <li>General-purpose ZK-rollup</li>
              <li>STARK-based proofs</li>
              <li>High throughput</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">Challenges and Considerations</h2>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li>Complexity of ZK proof generation</li>
          <li>Limited smart contract functionality</li>
          <li>Centralization of sequencers</li>
          <li>Cross-chain interoperability</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Future of Scaling</h2>
        <p class="mb-6">
          ZK-rollups are expected to become the dominant scaling solution for Ethereum, 
          enabling the network to handle millions of transactions while maintaining decentralization and security.
        </p>

        <div class="mt-12 pt-6 border-t border-gray-800">
          <p class="text-sm text-gray-400">
            By Prince Bhesaniya
          </p>
          <p class="text-sm text-gray-500 mt-2">
            Published on September 8, 2025
          </p>
        </div>
      </div>
    `
  },
  {
    slug: 'zk-privacy-applications',
    title: 'Privacy Applications of Zero-Knowledge Proofs in DeFi',
    excerpt: 'Exploring how ZK proofs are revolutionizing privacy in decentralized finance applications.',
    date: 'Sep 15, 2025',
    author: 'Barbarika Labs',
    readTime: '7 min read',
    image: '/hero.png',
    category: 'Cryptography',
    content: `
      <div class="prose prose-invert max-w-4xl mx-auto py-8 px-4">
        <h1 class="text-3xl font-bold text-white mb-6">Privacy Applications of Zero-Knowledge Proofs in DeFi</h1>
        
        <div class="flex items-center text-sm text-gray-400 mb-8">
          <span>By Barbarika Labs</span>
          <span class="mx-2">•</span>
          <span>Sep 15, 2025</span>
          <span class="mx-2">•</span>
          <span>7 min read</span>
        </div>

        <div class="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
          <img src="/hero.png" alt="ZK Privacy in DeFi" class="w-full h-full object-cover" />
        </div>

        <p class="text-xl text-gray-300 mb-6 leading-relaxed">
          Decentralized finance has revolutionized financial services, but privacy remains a critical concern. 
          Zero-knowledge proofs are providing innovative solutions to protect user privacy while maintaining transparency and compliance.
        </p>
        
        <h2 class="text-2xl font-bold text-white mt-12 mb-4">Privacy Challenges in DeFi</h2>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li>All transactions are publicly visible on the blockchain</li>
          <li>Wallet addresses can be linked to real-world identities</li>
          <li>Transaction patterns reveal trading strategies</li>
          <li>Regulatory compliance requires transparency</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">ZK Solutions for DeFi Privacy</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="p-6 bg-gray-800/50 rounded-xl">
            <h3 class="text-xl font-semibold text-white mb-3">Private Transactions</h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-300">
              <li>Hide transaction amounts</li>
              <li>Conceal sender/receiver addresses</li>
              <li>Mask trading patterns</li>
            </ul>
          </div>
          
          <div class="p-6 bg-gray-800/50 rounded-xl">
            <h3 class="text-xl font-semibold text-white mb-3">Compliance Proofs</h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-300">
              <li>Prove regulatory compliance</li>
              <li>Verify identity without revealing it</li>
              <li>Demonstrate solvency privately</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">Real-World Applications</h2>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Private DEXs:</strong> Trade without revealing positions</li>
          <li><strong>Private Lending:</strong> Borrow without exposing collateral</li>
          <li><strong>Private Yield Farming:</strong> Optimize strategies in secret</li>
          <li><strong>Private Governance:</strong> Vote without revealing preferences</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-12 mb-4">The Balance of Privacy and Transparency</h2>
        <p class="mb-6">
          ZK proofs enable DeFi to achieve the perfect balance between privacy and transparency, 
          allowing users to maintain financial privacy while proving compliance and maintaining the trustless nature of blockchain.
        </p>

        <div class="mt-12 pt-6 border-t border-gray-800">
          <p class="text-sm text-gray-400">
            By Barbarika Labs
          </p>
          <p class="text-sm text-gray-500 mt-2">
            Published on September 15, 2025
          </p>
        </div>
      </div>
    `
  }
];

export default function ZKBlogSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200 relative">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black/90 to-red-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-red-500/5" />
      </div>
      
      <Navbar onMenuClick={() => setMenuOpen(true)} />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <div className="relative">
        <div className="w-full">
          <div className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 xl:px-24">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight px-2" style={{
                fontFamily: 'var(--font-tourney), sans-serif',
                background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                lineHeight: '1.2',
                wordBreak: 'keep-all',
                hyphens: 'manual',
                overflowWrap: 'break-word',
                whiteSpace: 'normal'
              }}>
                Zero-Knowledge Proofs
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto mb-8 sm:mb-12 px-2 sm:px-4" style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                lineHeight: '1.6'
              }}>
                Exploring the cryptographic foundations of privacy and scalability in blockchain technology.
              </p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <section className="relative py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <Link href="/company-file/blog">
            <button className="mb-8 flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </button>
          </Link>
        </section>

        {/* Blog Posts */}
        <section className="relative py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {zkPosts.map((post, index) => (
              <div
                key={index}
                className="relative group bg-gray-900/60 rounded-xl overflow-hidden border border-gray-800/60 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/50 hover:scale-[1.02] hover:ring-1 hover:ring-purple-500/30"
                onClick={() => router.push(`/company-file/blog/zk/${post.slug}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && router.push(`/company-file/blog/zk/${post.slug}`)}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm text-purple-300 bg-purple-900/50">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 relative z-10">
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <span className="group-hover:text-purple-300 transition-colors">{post.date}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm text-gray-300">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-200 transition-colors line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-purple-400 group-hover:text-purple-300 transition-colors">
                    <span>Read more</span>
                    <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
}
