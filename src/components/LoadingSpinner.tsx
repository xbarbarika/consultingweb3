import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'pink' | 'black';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'white',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const colorClasses = {
    white: 'border-white/20 border-t-white',
    pink: 'border-pink-400/20 border-t-pink-400',
    black: 'border-black/20 border-t-black'
  };

  const accentColorClasses = {
    white: 'border-transparent border-t-white',
    pink: 'border-transparent border-t-pink-400',
    black: 'border-transparent border-t-black'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative">
        <div className={`${sizeClasses[size]} border-4 ${colorClasses[color]} rounded-full animate-spin`}></div>
        <div className={`absolute inset-0 ${sizeClasses[size]} border-4 ${accentColorClasses[color]} rounded-full animate-spin`} style={{ animationDelay: '0.1s' }}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 