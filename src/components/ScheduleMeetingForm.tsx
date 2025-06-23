import React from 'react';

const ScheduleMeetingForm = () => {
  return (
    <div className="bg-[#ECEBE8] rounded-2xl p-8 md:p-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-black">
        Schedule a meeting
      </h2>
      <form className="max-w-lg mx-auto">
        <div className="mb-6">
          <label htmlFor="modal-name" className="block text-gray-700 text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="modal-name"
            placeholder="Enter your Name"
            className="w-full px-4 py-3 bg-white rounded-lg focus:outline-none text-black"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="modal-email" className="block text-gray-700 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="modal-email"
            placeholder="Anything@example.com"
            className="w-full px-4 py-3 bg-white rounded-lg focus:outline-none text-black"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="w-full md:w-1/2">
            <label htmlFor="modal-date" className="block text-gray-700 text-sm font-medium mb-2">
              Date
            </label>
            <input
              type="date"
              id="modal-date"
              className="w-full px-4 py-3 bg-white rounded-lg focus:outline-none text-black"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label htmlFor="modal-time" className="block text-gray-700 text-sm font-medium mb-2">
              Time
            </label>
            <input
              type="time"
              id="modal-time"
              className="w-full px-4 py-3 bg-white rounded-lg focus:outline-none text-black"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-white py-3 px-8 md:px-12 rounded-lg transition-colors w-full md:w-auto"
            style={{ backgroundColor: '#716A54' }}
          >
            Book a Free Strategy Call
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScheduleMeetingForm; 