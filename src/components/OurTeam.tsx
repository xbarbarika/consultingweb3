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
      className="py-24 mt-24"
      style={{ padding: '0 140px', scrollMarginTop: '100px' }}
    >
      <h2 className="text-4xl font-bold text-center mb-20 text-black">Our team</h2>
      <div className="flex justify-center items-center gap-12">
        {teamMembers.map((member) => (
          <div key={member.name} className="text-center">
            <div
              className="bg-black/5 rounded-3xl"
              style={{
                width: '340px',
                height: '340px',
              }}
            ></div>
            <h3 className="mt-6 mb-1 text-2xl font-semibold text-black">{member.name}</h3>
            <p className="text-gray-500 text-lg">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam; 