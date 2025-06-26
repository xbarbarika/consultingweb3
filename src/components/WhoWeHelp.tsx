import React from 'react';

const items = [
  { title: 'DEFI', subtitle: 'PROTOCOLS' },
  { title: 'NFT', subtitle: 'PROJECTS' },
  { title: 'L1+L2', subtitle: 'CHAINS' },
  { title: 'DAO', subtitle: '' },
  { title: 'W3', subtitle: 'INFRAS' },
];

const WhoWeHelp = () => (
  <section className="relative w-full overflow-hidden py-12 px-4 sm:px-6 lg:px-8 mt-16 md:mt-24 mb-16 md:mb-24">
    <div className="text-center">
      <h2 className="text-3xl font-semibold text-gray-800 sm:text-4xl">Who We Help</h2>
      <p className="mt-2 text-base text-gray-600 md:text-lg">Tailored Growth for Every Web3 Vertical</p>
    </div>
    <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:gap-8">
      {items.map(({ title, subtitle }) => (
        <div
          key={title}
          className="flex h-40 w-full flex-col items-center justify-center rounded-2xl border border-white/40 bg-white/70 shadow-md backdrop-blur-md"
        >
          <span className="mb-1 text-4xl font-bold text-gray-900">{title}</span>
          {subtitle && (
            <span className="text-sm tracking-widest text-black">{subtitle}</span>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default WhoWeHelp; 