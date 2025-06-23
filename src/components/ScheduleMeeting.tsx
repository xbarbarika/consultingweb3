import React from 'react';

const ScheduleMeeting = () => {
  return (
    <section className="bg-transparent py-24 mt-24">
      <div className="max-w-5xl mx-auto bg-[#ECEBE8] rounded-2xl p-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          Schedule a meeting
        </h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your Name"
              className="w-full px-4 py-3 bg-white rounded-lg focus:outline-none text-black"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Anything@example.com"
              className="w-full px-4 py-3 bg-white rounded-lg focus:outline-none text-black"
            />
          </div>
          <div className="flex gap-4 mb-10">
            <div className="w-1/2">
              <label htmlFor="date" className="block text-gray-700 text-sm font-medium mb-2">
                Date
              </label>
              <input
                type="date"
                id="date"
                className="w-full px-4 py-3 bg-white rounded-lg focus:outline-none text-black"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="time" className="block text-gray-700 text-sm font-medium mb-2">
                Time
              </label>
              <input
                type="time"
                id="time"
                className="w-full px-4 py-3 bg-white rounded-lg focus:outline-none text-black"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white py-3 px-12 rounded-lg transition-colors"
              style={{ backgroundColor: '#716A54' }}
            >
              Book a Free Strategy Call
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ScheduleMeeting; 