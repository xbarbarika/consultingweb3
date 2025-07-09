import {
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaDiscord,
  FaYoutube,
  FaXTwitter,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20" style={{ paddingLeft: '130px', minHeight: '646px' }}>
      <div className="grid md:grid-cols-4 text-sm text-zinc-300" style={{ gap: '50px' }}>

        {/* Left section */}
        <div className="col-span-1">
          <h2 
            style={{
              fontFamily: 'Epilogue',
              fontSize: '30.071px',
              fontStyle: 'italic',
              fontWeight: '600',
              lineHeight: '110%',
              letterSpacing: '1.504px',
              color: 'white',
              marginBottom: '8px',
              marginTop: '90px'
            }}
          >
            BARBARIKA
          </h2>
          <p 
            style={{
              fontFamily: 'Epilogue',
              fontSize: '22px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '110%',
              letterSpacing: '1.1px',
              textTransform: 'uppercase',
              color: 'white',
              opacity: '0.5',
              marginBottom: '80px',
              whiteSpace: 'nowrap'
            }}
          >
            Your global growth partner
          </p>

          <div>
            <h3 
              style={{
                fontFamily: 'Inter',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: 'normal',
                color: 'white',
                marginBottom: '5px'
              }}
            >
              Get in Touch
            </h3>
            <p 
              style={{
                fontFamily: 'Inter',
                fontSize: '17px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '15px'
              }}
            >
              We&apos;d love to hear from you.
            </p>
            <p 
              className="cursor-pointer"
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
                color: 'white',
                marginBottom: '15px'
              }}
            >
              📧 hello@barbarika.io
            </p>
            <p 
              className="cursor-pointer"
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
                color: 'white',
                marginBottom: '40px'
              }}
            >
              📞 +91 00000 00000
            </p>
          </div>

          {/* Social icons */}
          <div>
            <h3 
              style={{
                fontFamily: 'Inter',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: 'normal',
                color: 'white',
                marginBottom: '15px',
                marginTop: '85px'
              }}
            >
              Follow us
            </h3>
            <div className="flex gap-4 text-xl text-zinc-400">
              <FaInstagram className="cursor-pointer hover:text-white" />
              <FaLinkedin className="cursor-pointer hover:text-white" />
              <FaTelegram className="cursor-pointer hover:text-white" />
              <FaDiscord className="cursor-pointer hover:text-white" />
              <FaYoutube className="cursor-pointer hover:text-white" />
              <FaXTwitter className="cursor-pointer hover:text-white" />
            </div>
          </div>
        </div>

        {/* Services */}
        <div style={{ marginTop: '90px', marginLeft: '100px' }}>
          <h3 
            style={{
              fontFamily: 'Inter',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 'normal',
              color: 'white',
              marginBottom: '16px'
            }}
          >
            Services
          </h3>
          <ul className="space-y-2">
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              Social Media Marketing
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              Paid Social Advertising
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              SEO Services
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              Influencer Marketing
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              PR & Outreach
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              Video Production
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              Lead Generation
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              Community Management
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              Branding
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              Website/App Development
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              Web/App Design
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6'
              }}
            >
              Blockchain 
            </li>
          </ul>
        </div>

        {/* Industries */}
        <div style={{ marginTop: '90px', marginLeft: '100px' }}>
          <h3 
            style={{
              fontFamily: 'Inter',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 'normal',
              color: 'white',
              marginBottom: '16px'
            }}
          >
            Industries
          </h3>
          <ul className="space-y-2">
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              B2B
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              Fintech
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              Crypto
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              Healthcare
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              Software
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              SaaS
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              Startup
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              Small Business
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              Gaming
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              eSport
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              Mobile
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6'
              }}
            >
              eCommerce
            </li>
          </ul>
        </div>

        {/* Company */}
        <div style={{ marginTop: '90px', marginLeft: '100px' }}>
          <h3 
            style={{
              fontFamily: 'Inter',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 'normal',
              color: 'white',
              marginBottom: '16px'
            }}
          >
            Company
          </h3>
          <ul className="space-y-2">
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              About us
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              Our People
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              Pricing
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              Blog
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6',
                marginBottom: '16px'
              }}
            >
              Careers
            </li>
            <li 
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                color: 'white',
                opacity: '0.6'
              }}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800 mt-10 pt-6 text-center">
        <div className="flex items-center justify-center gap-6">
          <p 
            style={{
              fontFamily: 'Inter',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 'normal',
              color: 'white',
              opacity: '0.4'
            }}
          >
            © 2025 Barbarika. All rights reserved.
          </p>
          <span 
            className="cursor-pointer hover:text-white"
            style={{
              fontFamily: 'Inter',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 'normal',
              color: 'white',
              opacity: '0.4'
            }}
          >
            Privacy Policy
          </span>
          <span 
            className="cursor-pointer hover:text-white"
            style={{
              fontFamily: 'Inter',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 'normal',
              color: 'white',
              opacity: '0.4'
            }}
          >
            Terms of Service
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 