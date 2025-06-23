'use client';
import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm bg-black/20"
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
        <div className="max-w-5xl mx-auto p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal; 