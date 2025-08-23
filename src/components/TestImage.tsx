import React from 'react';
import Image from 'next/image';

export default function TestImage() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Testing Image Load</h2>
        <div className="relative w-full max-w-2xl h-96">
          <Image
            src="/marketingbg.jpg"
            alt="Test Marketing Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="text-white mt-4">If you can see the image above, it&apos;s loading correctly.</p>
      </div>
    </div>
  );
}
