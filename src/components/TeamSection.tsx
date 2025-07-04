import Image from "next/image";

const teamMembers = [
  { name: "Abhishek", role: "Front End", avatar: "/Abhishek.svg" },
  { name: "Bhumi", role: "Backend", avatar: "/Bhumi.svg" },
  { name: "Shivam", role: "UI/UX", avatar: "/Shivam.svg" },
  { name: "Shruti", role: "Web", avatar: "/Shruti.svg" },
  { name: "Prince", role: "Frontend", avatar: "/Prince.svg" },
  { name: "Aditya", role: "Blockchain", avatar: "/Aditya.svg" },
];

export default function TeamSection() {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .responsive-section {
            height: auto !important;
            padding-top: 60px !important;
            padding-bottom: 60px !important;
          }
          .responsive-heading {
            font-size: 22px !important;
            margin-bottom: 60px !important;
          }
          .responsive-grid {
            gap: 25px !important;
            flex-direction: column !important;
            max-width: 100% !important;
            align-items: center !important;
          }
          .responsive-member {
            margin-top: 0px !important;
          }
          .responsive-member:nth-child(even) {
            margin-left: -130px !important;
          }
          .responsive-member:nth-child(odd) {
            margin-right: -130px !important;
          }
          .responsive-avatar {
            width: 90px !important;
            height: 90px !important;
          }
          .responsive-name {
            font-size: 18px !important;
            margin-top: 20px !important;
          }
          .responsive-role {
            font-size: 14px !important;
          }
        }
      `}</style>
      <section 
        className="bg-black text-white px-2 sm:px-4 text-center responsive-section"
        style={{
          height: '747px',
          paddingTop: '125px'
        }}
      >
      <h2 
        className="responsive-heading"
        style={{
          textAlign: 'center',
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '40px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '100%',
          background: 'linear-gradient(82deg, #FF965D 30%, #FF69B4 70%, #BA34E2 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '125px'
        }}
      >
        Experts Behind the Growth
      </h2>
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto responsive-grid" style={{ gap: '50px' }}>
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center responsive-member"
            style={{
              marginTop: index % 2 === 0 ? '0px' : '40px'
            }}
          >
            <div 
              className="rounded-full bg-[#2B203E] flex items-center justify-center overflow-hidden responsive-avatar"
              style={{
                width: '110.938px',
                height: '110.938px',
                aspectRatio: '110.94/110.94'
              }}
            >
              <Image
                src={member.avatar}
                alt={member.name}
                width={110.938}
                height={110.938}
                className="object-contain"
              />
            </div>
            <div 
              className="responsive-name"
              style={{ 
                marginTop: '25px',
                color: '#FFFFFF',
                textAlign: 'center',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '22.188px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '100%'
              }}
            >
              {member.name}
            </div>
            <div 
              className="responsive-role"
              style={{ 
                marginTop: '8px',
                color: '#FFFFFF',
                textAlign: 'center',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '17.067px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '100%',
                opacity: 0.4
              }}
            >
              {member.role}
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
} 