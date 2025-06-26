import React from 'react';

const teamMembers = [
  { name: 'Isabella Wilson', role: 'Owner' },
  { name: 'Peter Parker', role: 'UI & UX' },
  { name: 'Avery Anderson', role: 'Developer' },
];

const OurTeam = () => {
  return (
    <section
      id="team"
      className="py-16 md:py-24 px-6 md:px-20 lg:px-36"
      style={{ scrollMarginTop: '100px' }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-20 text-black">Our team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {teamMembers.map((member) => (
          <div key={member.name} className="text-center">
            <div
              className="bg-black/5 rounded-3xl w-full h-64 md:h-80 mx-auto"
            ></div>
            <h3 className="mt-6 mb-1 text-xl md:text-2xl font-semibold text-black">{member.name}</h3>
            <p className="text-gray-500 text-base md:text-lg">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam; 