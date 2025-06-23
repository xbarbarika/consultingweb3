import React, { useState } from 'react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#ECEBE8] rounded-2xl p-8 md:p-12 w-full max-w-lg text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black">Contact Us</h2>
      <p className="text-gray-700 mb-6 md:mb-8 text-base md:text-lg font-medium">
        Send request to scale your business to the next level
      </p>
      {!submitted ? (
        <form className="space-y-6 text-left" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="contact-name" className="block text-gray-700 text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="contact-name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-white rounded-lg focus:outline-none text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="contact-email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-white rounded-lg focus:outline-none text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-gray-700 text-sm font-medium mb-2">Message</label>
            <textarea
              id="contact-message"
              rows={4}
              placeholder="Type your message..."
              className="w-full px-4 py-3 bg-white rounded-lg focus:outline-none text-black resize-none"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white py-3 px-8 md:px-12 rounded-lg transition-colors w-full md:w-auto font-semibold text-lg"
              style={{ backgroundColor: '#716A54' }}
            >
              Apply Now
            </button>
          </div>
        </form>
      ) : (
        <div className="py-12">
          <h3 className="text-2xl font-bold text-black mb-4">Thank you!</h3>
          <p className="text-gray-700 text-base md:text-lg">Your request has been sent successfully!</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm; 