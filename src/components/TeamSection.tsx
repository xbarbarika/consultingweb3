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
        
        .profile-morphing-circle {
          background: linear-gradient(135deg, #2B203E 0%, #1a1425 100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .profile-container:hover .profile-morphing-circle {
          width: 280px !important;
          height: 220px !important;
          border-radius: 16px !important;
          padding: 25px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }
        
        .profile-avatar-image {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          object-fit: contain;
        }
        
        .profile-container:hover .profile-avatar-image {
          width: 0px !important;
          height: 0px !important;
          opacity: 0;
        }
        
        .profile-text-content {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .profile-container:hover .profile-text-content {
          opacity: 0;
          transform: translateY(20px);
        }
        
        .profile-hover-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: center;
          width: 100%;
          padding: 0 20px;
        }
        
        .profile-container:hover .profile-hover-content {
          opacity: 1;
        }
        
        .founder-morphing-circle {
          background: linear-gradient(135deg, #2B203E 0%, #1a1425 100%);
        }
        
        .profile-container:hover .founder-morphing-circle {
          width: 320px !important;
          height: 250px !important;
          border-radius: 16px !important;
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
          .profile-container:hover .profile-morphing-circle {
            width: 220px !important;
            height: 180px !important;
            padding: 20px;
          }
          .profile-container:hover .founder-morphing-circle {
            width: 250px !important;
            height: 200px !important;
            padding: 25px;
          }
        }
      `}</style>
      <section 
        id="team"
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
          {/* Founder Morphing Circle */}
          <div 
            className="founder-morphing-circle profile-morphing-circle founder-avatar"
            style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%'
            }}
          >
            <Image
              src={founder.avatar}
              alt={founder.name}
              width={140}
              height={140}
              className="profile-avatar-image"
            />
            
            {/* Founder Hover Content inside the morphing circle */}
            <div className="profile-hover-content">
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
          
          {/* Founder Text Content below circle */}
          <div className="profile-text-content">
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
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto responsive-grid" style={{ gap: '180px' }}>
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="responsive-member profile-container"
          >
            {/* Morphing Circle */}
            <div 
              className="profile-morphing-circle responsive-avatar"
              style={{
                width: '110.938px',
                height: '110.938px',
                borderRadius: '50%'
              }}
            >
              <Image
                src={member.avatar}
                alt={member.name}
                width={110.938}
                height={110.938}
                className="profile-avatar-image"
              />
              
              {/* Hover Content inside the morphing circle */}
              <div className="profile-hover-content">
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
            
            {/* Text Content below circle */}
            <div className="profile-text-content">
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
          </div>
        ))}
      </div>
    </section>
    </>
  );
} 