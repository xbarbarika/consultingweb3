import React from 'react';

const items = [
  { title: 'DEFI', subtitle: 'PROTOCOLS' },
  { title: 'NFT', subtitle: 'PROJECTS' },
  { title: 'L1+L2', subtitle: 'CHAINS' },
  { title: 'DAO', subtitle: '' },
  { title: 'W3', subtitle: 'INFRAS' },
];

const WhoWeHelp = () => (
  <section className="w-full min-h-[350px] flex flex-col items-center justify-center py-12 px-2 relative overflow-hidden mt-[100px]">
    <div className="text-center mb-2">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">Who We Help</h2>
      <p className="text-gray-600 text-base md:text-lg">Tailored Growth for Every Web3 Vertical</p>
    </div>
    <div className="flex flex-wrap justify-center gap-[18px] mt-8">
      {items.map(({ title, subtitle }) => (
        <div
          key={title}
          className="flex flex-col items-center justify-center w-[160px] h-[160px] bg-white/70 backdrop-blur-md rounded-2xl shadow-md border border-white/40"
        >
          <span className="font-bold text-gray-900 mb-1" style={{ fontSize: '42px' }}>{title}</span>
          {subtitle && (
            <span className="tracking-widest" style={{ fontSize: '14px', color: '#000' }}>{subtitle}</span>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default WhoWeHelp; 