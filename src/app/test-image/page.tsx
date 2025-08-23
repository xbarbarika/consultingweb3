import React from 'react';
import Image from 'next/image';

export default function TestImagePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl w-full p-8">
        <h1 className="text-3xl font-bold mb-6">Image Test Page</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Using Next.js Image with absolute path:</h2>
          <div className="relative w-full h-96 border-2 border-dashed border-gray-400">
            <Image 
              src="/marketingbg.jpg" 
              alt="Test Marketing Background" 
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Path: <code>/marketingbg.jpg</code>
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Using background image with CSS:</h2>
          <div 
            className="w-full h-96 border-2 border-dashed border-gray-400"
            style={{
              backgroundImage: 'url(/marketingbg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          <p className="mt-2 text-sm text-gray-600">
            CSS: <code>background-image: url(/marketingbg.jpg)</code>
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Troubleshooting Steps:</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Verify the image exists at: <code>public/marketingbg.jpg</code></li>
            <li>Check the image file permissions</li>
            <li>Try clearing your browser cache</li>
            <li>Check the browser&apos;s network tab for 404 errors</li>
            <li>Try accessing the image directly: <a href="/marketingbg.jpg" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">/marketingbg.jpg</a></li>
          </ol>
        </div>
      </div>
    </div>
  );
}
