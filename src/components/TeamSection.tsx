import Image from "next/image";

const founder = { 
  name: "Kritesh", 
  role: "Founder & CEO", 
  avatar: "/Kritesh.svg",
  description: "Visionary leader with extensive experience in Web3 and blockchain technology. Drives innovation and strategic growth across all business verticals."
};

const teamMembers = [
  { 
    name: "Abhishek", 
    role: "Front End Developer", 
    avatar: "/Abhishek.svg",
    description: "Specializes in React, Next.js, and modern frontend technologies. Creates responsive and interactive user interfaces with exceptional attention to detail."
  },
  { 
    name: "Shivam", 
    role: "UI/UX Designer", 
    avatar: "/Shivam.svg",
    description: "Expert in user experience design and interface creation. Transforms complex ideas into intuitive, beautiful designs that users love."
  },
  { 
    name: "Prince", 
    role: "Frontend Developer", 
    avatar: "/Prince.svg",
    description: "Skilled in modern JavaScript frameworks and responsive design. Builds fast, scalable web applications with clean, maintainable code."
  },
  { 
    name: "Aditya", 
    role: "Blockchain Developer", 
    avatar: "/Aditya.svg",
    description: "Blockchain specialist with expertise in smart contracts and DeFi protocols. Builds secure, decentralized applications and Web3 solutions."
  },
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
            margin-left: 0px !important;
            margin-right: 0px !important;
          }
          .responsive-member:nth-child(1),
          .responsive-member:nth-child(3) {
            margin-right: -80px !important;
          }
          .responsive-member:nth-child(2),
          .responsive-member:nth-child(4) {
            margin-left: -80px !important;
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
          .founder-avatar {
            width: 120px !important;
            height: 120px !important;
          }
          .founder-name {
            font-size: 20px !important;
            margin-top: 25px !important;
          }
          .founder-role {
            font-size: 16px !important;
          }
        }
        
        .profile-container {
          position: relative;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .profile-normal {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .profile-normal {
          transition: opacity 0.4s ease;
        }
        
        .profile-container:hover .profile-normal {
          opacity: 0;
        }
        
        .profile-hover-box {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 280px;
          height: 220px;
          background: linear-gradient(135deg, #2B203E 0%, #1a1425 100%);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 25px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        
        .profile-container:hover .profile-hover-box {
          opacity: 1;
          pointer-events: auto;
        }
        
        .founder-hover-box {
          width: 320px;
          height: 250px;
          padding: 30px;
        }
        
        /* Desktop Zigzag positioning */
        @media (min-width: 769px) {
          .responsive-grid {
            max-width: 100% !important;
          }
          .responsive-member:nth-child(1) {
            margin-top: 0px;
          }
          .responsive-member:nth-child(2) {
            margin-top: 40px;
          }
          .responsive-member:nth-child(3) {
            margin-top: 0px;
          }
          .responsive-member:nth-child(4) {
            margin-top: 40px;
          }
        }
        
        @media (max-width: 768px) {
          .profile-hover-box {
            width: 220px;
            height: 180px;
            padding: 20px;
          }
          .founder-hover-box {
            width: 250px;
            height: 200px;
            padding: 25px;
          }
        }
      `}</style>
      <section 
        className="bg-black text-white px-2 sm:px-4 text-center responsive-section"
        style={{
          height: '950px',
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
      
      {/* Founder Section */}
      <div className="flex justify-center mb-16">
        <div className="profile-container" style={{ alignItems: 'center' }}>
          {/* Normal Founder View */}
          <div className="profile-normal">
            <div 
              className="rounded-full bg-[#2B203E] flex items-center justify-center overflow-hidden founder-avatar"
              style={{
                width: '140px',
                height: '140px',
                aspectRatio: '1/1'
              }}
            >
              <Image
                src={founder.avatar}
                alt={founder.name}
                width={140}
                height={140}
                className="object-contain"
              />
            </div>
            
            <div 
              className="founder-name"
              style={{ 
                marginTop: '30px',
                color: '#FFFFFF',
                textAlign: 'center',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '26px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '100%'
              }}
            >
              {founder.name}
            </div>
            <div 
              className="founder-role"
              style={{ 
                marginTop: '8px',
                color: '#FFFFFF',
                textAlign: 'center',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '100%',
                opacity: 0.4
              }}
            >
              {founder.role}
            </div>
          </div>
          
          {/* Founder Hover Box */}
          <div className="profile-hover-box founder-hover-box">
            <div 
              style={{ 
                color: '#FFFFFF',
                textAlign: 'center',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '24px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '120%',
                marginBottom: '12px'
              }}
            >
              {founder.name}
            </div>
            <div 
              style={{ 
                color: '#FFFFFF',
                textAlign: 'center',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '120%',
                opacity: 0.8,
                marginBottom: '18px'
              }}
            >
              {founder.role}
            </div>
            <div 
              style={{ 
                color: '#FFFFFF',
                textAlign: 'center',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '140%',
                opacity: 0.7
              }}
            >
              {founder.description}
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto responsive-grid" style={{ gap: '180px' }}>
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="responsive-member profile-container"
          >
            {/* Normal Profile View */}
            <div className="profile-normal">
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
            
            {/* Hover Box */}
            <div className="profile-hover-box">
              <div 
                style={{ 
                  color: '#FFFFFF',
                  textAlign: 'center',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '120%',
                  marginBottom: '10px'
                }}
              >
                {member.name}
              </div>
              <div 
                style={{ 
                  color: '#FFFFFF',
                  textAlign: 'center',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '120%',
                  opacity: 0.8,
                  marginBottom: '15px'
                }}
              >
                {member.role}
              </div>
              <div 
                style={{ 
                  color: '#FFFFFF',
                  textAlign: 'center',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '13px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '140%',
                  opacity: 0.7
                }}
              >
                {member.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
} 