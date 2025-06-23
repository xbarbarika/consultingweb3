'use client';
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="absolute inset-0 z-50 flex justify-center items-center backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-transparent rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black text-4xl"
          style={{ zIndex: 1 }}
        >
          &times;
        </button>
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal; 