'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Service() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<'web3' | 'mobile'>('web3');

  const web3Capabilities = [
    { title: 'dApp Development', desc: 'Full-stack decentralized apps with wallet flows, on/off-chain data.' },
    { title: 'Smart Contracts', desc: 'Solidity/Rust contracts with audits and test suites.' },
    { title: 'DeFi & NFTs', desc: 'AMMs, staking, vesting, ERC20/721/1155 with marketplaces.' },
    { title: 'Wallet & Auth', desc: 'WalletConnect, social login, MPC, multi-chain support.' },
    { title: 'L2 Scaling', desc: 'Optimism/Arbitrum/Polygon with gas-aware UX.' },
    { title: 'Data Indexing', desc: 'The Graph, custom indexers, analytics dashboards.' }
  ];

  const mobileCapabilities = [
    { title: 'Cross‑Platform Apps', desc: 'React Native and Flutter with native modules when needed.' },
    { title: 'Performance & UX', desc: '60fps interactions, offline-first, background sync.' },
    { title: 'Secure Wallets', desc: 'Embedded wallets, key management, biometric auth.' },
    { title: 'Native Integrations', desc: 'Push, deep linking, payments, camera/AR.' },
    { title: 'CI/CD & QA', desc: 'Automated builds, testing, release pipelines.' },
    { title: 'Store Readiness', desc: 'App Store/Play Store compliance and launch.' }
  ];

  const capabilities = active === 'web3' ? web3Capabilities : mobileCapabilities;

  return (
    <div className="text-white min-h-screen flex flex-col">
      {/* Animated cosmic background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/bg-pages/D3-10.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/90 to-black/80" />
        {/* subtle ambient orbs */}
        <div className="absolute -top-16 -left-8 w-56 h-56 rounded-full bg-white/10 blur-3xl animate-orb" />
        <div className="absolute bottom-0 left-1/3 w-52 h-52 rounded-full bg-white/5 blur-3xl animate-orb-slow" />
      </div>

      <Navbar onMenuClick={() => setMenuOpen(true)} />

      <main className="relative z-10 w-full flex-1 pt-24 pb-20 px-4 sm:px-6 lg:px-10">
        {/* Hero */}
        <section className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 blinking-dot" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase" style={{ fontFamily: 'Inter' }}>Service • Web3 & Mobile</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold heading-premium mb-4">
            Build What Doesn’t Exist Yet
          </h1>
          <p className="text-white/70 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed mb-8" style={{ fontFamily: 'Inter' }}>
            From trustless protocols to buttery‑smooth apps, we craft products that feel like magic and scale like engineering.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="/book-demo">
              <button className="btn-sleek text-sm sm:text-base">Book a Discovery Call</button>
            </Link>
            <div className="inline-flex p-1 rounded-2xl bg-black/40 border border-white/20 backdrop-blur-md w-fit">
              <button onClick={() => setActive('web3')} className={`${active === 'web3' ? 'btn-tab-active' : 'btn-tab'} text-sm sm:text-base`}>Web3</button>
              <button onClick={() => setActive('mobile')} className={`${active === 'mobile' ? 'btn-tab-active' : 'btn-tab'} text-sm sm:text-base`}>Mobile</button>
            </div>
          </div>

          {/* Device mock + network */}
          <div className="mt-12 grid lg:grid-cols-2 gap-10 xl:gap-14 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative h-72 sm:h-80 md:h-96">
                {/* Single premium snapshot card */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[88%] sm:w-[85%] md:w-[80%] lg:w-[75%] h-[72%] sm:h-[75%] md:h-[78%] rounded-[32px] bg-black/60 border border-white/20 shadow-2xl overflow-hidden animate-float-slow">
                    <div className="h-full w-full p-5 sm:p-6 md:p-8 flex flex-col">
                      <div className="flex items-center justify-between mb-4 md:mb-5">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span className="text-xs text-white/70">Connected</span>
                        </div>
                        <span className="text-xs text-white/50">Snapshot</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 flex-1">
                        <div>
                          <div className="text-white/70 text-xs mb-1">Primary Balance</div>
                          <div className="text-3xl md:text-4xl font-bold mb-2">2.35 ETH</div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="badge-premium">0x12a4...9F8b</span>
                            <span className="badge-premium">ETH Mainnet</span>
                            <span className="badge-premium">WalletConnect</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="rounded-2xl bg-black/50 border border-white/20 p-3">
                            <div className="text-[10px] text-white/60">Pending TX</div>
                            <div className="font-semibold">3</div>
                          </div>
                          <div className="rounded-2xl bg-black/50 border border-white/20 p-3">
                            <div className="text-[10px] text-white/60">Gas (gwei)</div>
                            <div className="font-semibold">22</div>
                          </div>
                          <div className="rounded-2xl bg-black/50 border border-white/20 p-3">
                            <div className="text-[10px] text-white/60">Networks</div>
                            <div className="font-semibold">4</div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-6 flex items-center gap-2 md:gap-3">
                        <button className="btn-sleek btn-sleek-sm">Send</button>
                        <button className="btn-sleek btn-sleek-sm">Swap</button>
                        <button className="btn-sleek btn-sleek-sm">Receive</button>
                        <div className="ml-auto flex items-center gap-2">
                          <span className="badge-premium">DeFi</span>
                          <span className="badge-premium">NFT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">{active === 'web3' ? 'On‑chain power. Off‑the‑charts UX.' : 'Native feel. Cross‑platform speed.'}</h2>
              <p className="text-white/70 mb-6" style={{ fontFamily: 'Inter' }}>
                {active === 'web3' ? 'Ship protocols and products with security-first engineering and delightful wallet flows.' : 'Deliver feature‑rich apps that feel instant, sync offline, and integrate the device capabilities users love.'}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {capabilities.map((c) => (
                  <li key={c.title} className="p-4 rounded-2xl bg-black/50 border border-white/20 transition">
                    <p className="font-semibold mb-1">{c.title}</p>
                    <p className="text-white/70 text-sm">{c.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Tech marquee */}
        <section className="max-w-7xl mx-auto mt-16">
          <div className="relative p-0">
            <div className="marquee whitespace-nowrap py-3 md:py-4">
              {['Solidity','Rust','Typescript','React Native','Flutter','WalletConnect','Ethers.js','Wagmi','Hardhat','Foundry','The Graph','IPFS/Pinata','Expo','Fastlane'].map((t, i) => (
                <span
                  key={t}
                  className="inline-flex items-center px-4 md:px-5 py-2 mx-2 my-1 rounded-full border text-sm"
                  style={{
                    borderColor: 'rgba(255,255,255,0.2)',
                    background: [
                      'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))',
                      'linear-gradient(135deg, rgba(93,139,255,0.15), rgba(93,139,255,0.05))',
                      'linear-gradient(135deg, rgba(186,52,226,0.15), rgba(186,52,226,0.05))',
                      'linear-gradient(135deg, rgba(255,150,93,0.15), rgba(255,150,93,0.05))',
                      'linear-gradient(135deg, rgba(0,242,254,0.15), rgba(0,242,254,0.05))'
                    ][i % 5]
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Process timeline */}
        <section className="max-w-7xl mx-auto mt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Launch plan, zero guesswork</h3>
          <div className="grid md:grid-cols-4 gap-4 md:gap-5">
            {[
              { step: '01', title: 'Blueprint', desc: 'Architecture, user flows, tokenomics/feature map.' },
              { step: '02', title: 'Prototype', desc: 'Clickable UX + technical spikes to de-risk.' },
              { step: '03', title: 'Build', desc: 'Secure contracts and production-ready app.' },
              { step: '04', title: 'Ship', desc: 'Audits, launch, analytics, iteration cadence.' }
            ].map((s) => (
              <div key={s.step} className={`rounded-2xl p-5 border transition bg-black/50 border-white/20`}>
                <div className="text-sm text-white/60 mb-2">{s.step}</div>
                <div className="font-semibold text-lg mb-1">{s.title}</div>
                <div className="text-white/70 text-sm">{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto mt-16">
          <div className="relative overflow-hidden rounded-3xl bg-black/60 border border-white/20 p-8 md:p-12 text-center">
            <h4 className="text-2xl md:text-3xl font-bold mb-3">Ready to build something people haven’t seen before?</h4>
            <p className="text-white/70 max-w-2xl mx-auto mb-6" style={{ fontFamily: 'Inter' }}>
              We combine protocol engineering with product craft. Let’s turn your idea into a product your users rave about.
            </p>
            <Link href="/book-demo">
              <button className="btn-sleek text-base md:text-lg">Book Demo</button>
            </Link>
            <div className="pointer-events-none absolute -inset-1 opacity-30" style={{
              background: 'radial-gradient(600px 200px at 50% 120%, rgba(255,150,93,0.25), transparent 60%)'
            }} />
          </div>
        </section>
      </main>

      <Footer />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <style jsx>{`
        @keyframes orb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.03); }
        }
        .animate-orb { animation: orb 8s ease-in-out infinite; }
        .animate-orb-delay { animation: orb 10s ease-in-out infinite 0.5s; }
        .animate-orb-slow { animation: orb 12s ease-in-out infinite 1s; }
        .marquee {
          position: relative;
          display: flex;
          gap: 8px;
          overflow: hidden;
        }
        .marquee::before,
        .marquee::after {
          content: '';
          position: absolute;
          top: 0;
          width: 60px;
          height: 100%;
          pointer-events: none;
        }
        .marquee::before { left: 0; background: linear-gradient(90deg, rgba(0,0,0,0.9), transparent); }
        .marquee::after { right: 0; background: linear-gradient(270deg, rgba(0,0,0,0.9), transparent); }
        .marquee > span {
          animation: marqueeItem 18s linear infinite;
          white-space: nowrap;
        }
        .marquee:hover > span { animation-play-state: paused; }
        @keyframes marqueeItem {
          0% { transform: translateX(0); }
          100% { transform: translateX(-120%); }
        }
        
        /* Premium sleek buttons */
        .btn-sleek {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 22px;
          border-radius: 14px;
          background: radial-gradient(120% 120% at 30% 20%, rgba(93,139,255,0.25) 0%, rgba(186,52,226,0.2) 45%, rgba(0,0,0,0) 60%), linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.22);
          box-shadow: 0 10px 30px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.12);
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .btn-sleek:hover {
          transform: translateY(-1px);
          border-color: rgba(255,255,255,0.32);
          box-shadow: 0 14px 36px rgba(0,0,0,0.45), 0 0 24px rgba(93,139,255,0.25);
        }
        .btn-sleek:active { transform: translateY(0); }
        .btn-sleek-sm { padding: 8px 14px; border-radius: 12px; font-size: 12px; }
        
        /* Toggle tabs */
        .btn-tab {
          padding: 10px 16px;
          border-radius: 12px;
          color: rgba(255,255,255,0.8);
          background: transparent;
          transition: all 0.25s ease;
        }
        .btn-tab:hover { color: white; background: rgba(255,255,255,0.05); }
        .btn-tab-active {
          padding: 10px 16px;
          border-radius: 12px;
          color: white;
          background: linear-gradient(135deg, rgba(93,139,255,0.35), rgba(186,52,226,0.35));
          border: 1px solid rgba(255,255,255,0.22);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.12);
        }

        /* Premium badges */
        .badge-premium {
          display: inline-flex;
          align-items: center;
          padding: 6px 10px;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.22);
          background: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          font-size: 12px;
          color: rgba(255,255,255,0.9);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.12);
        }
      `}</style>
    </div>
  );
}