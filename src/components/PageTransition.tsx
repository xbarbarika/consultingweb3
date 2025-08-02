'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== currentPath) {
      setIsTransitioning(true);
      setCurrentPath(pathname);
      
      // Brief transition effect
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [pathname, currentPath]);

  return (
    <div className={`page-content ${isTransitioning ? 'transitioning' : ''}`}>
      {children}
    </div>
  );
};

export default PageTransition; 