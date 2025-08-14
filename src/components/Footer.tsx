import {
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaDiscord,
  FaYoutube,
  FaXTwitter,
} from 'react-icons/fa6';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-4 sm:px-6 md:px-8 lg:px-20 xl:pl-[130px]" style={{ minHeight: '646px' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-sm text-zinc-300 gap-12 sm:gap-16 lg:gap-[60px]">

        {/* Left section */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <h2 
            className="text-white mb-4 mt-6 sm:mt-12 lg:mt-[90px] text-lg sm:text-xl font-bold italic tracking-wider"
            style={{
              fontFamily: 'Epilogue, sans-serif',
            }}
          >
            BARBARIKA
          </h2>
          <p 
            className="text-white/50 mb-12 sm:mb-16 lg:mb-20 text-lg sm:text-xl lg:text-[22px] whitespace-nowrap"
            style={{
              fontFamily: 'Epilogue',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '110%',
              letterSpacing: '1.1px',
              textTransform: 'uppercase',
            }}
          >
            Your global growth partner
          </p>

          <div className="mb-12">
            <h3 
              className="text-white mb-3 text-base sm:text-lg"
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: 'normal',
              }}
            >
              Get in Touch
            </h3>
            <p 
              className="text-white/60 mb-4 text-sm sm:text-base lg:text-[17px]"
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
              }}
            >
              We&apos;d love to hear from you.
            </p>
            <p 
              className="cursor-pointer text-white mb-4 text-sm sm:text-base"
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
              }}
            >
              📧 barbarika.team@gmail.com
            </p>
            <p 
              className="cursor-pointer text-white mb-8 sm:mb-10 lg:mb-10 text-sm sm:text-base"
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
              }}
            >
              📞 +91 9904395990
            </p>
          </div>

          {/* Social icons */}
          <div>
            <h3 
              className="text-white mb-6 mt-8 sm:mt-12 lg:mt-[85px] text-base sm:text-lg"
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: 'normal',
              }}
            >
              Follow us
            </h3>
            <div className="flex gap-4 text-xl text-zinc-400">
              <Link href="https://www.instagram.com/barbarika_xyz/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="cursor-pointer hover:text-white transition-colors duration-300" />
              </Link>
              <FaLinkedin className="cursor-pointer hover:text-white" />
              <Link href="https://t.me/+FBj81VSgbiA2N2Zl" target="_blank" rel="noopener noreferrer">
                <FaTelegram className="cursor-pointer hover:text-white transition-colors duration-300" />
              </Link>
              <FaDiscord className="cursor-pointer hover:text-white" />
              <FaYoutube className="cursor-pointer hover:text-white" />
              <Link href="https://x.com/Barbarika192079" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="cursor-pointer hover:text-white transition-colors duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mt-6 sm:mt-12 lg:mt-[90px] ml-0 sm:ml-8 lg:ml-[100px]">
          <h3 
            className="text-white mb-6 text-base font-semibold"
            style={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 'normal',
            }}
          >
            Services
          </h3>
          <ul className="space-y-4">
            <li>
              <Link href="/marketing" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400 block"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                Marketing
              </Link>
            </li>
            <li>
              <Link href="/services-file/blockchain" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400 block"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                Blockchain
              </Link>
            </li>
            <li>
              <Link href="/services-file/web3-and-mobile" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400 block"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                Web3 & Mobile
              </Link>
            </li>
            <li>
              <Link href="/services-file/genai" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400 block"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                AI
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="mt-6 sm:mt-12 lg:mt-[90px] ml-0 sm:ml-8 lg:ml-[100px]">
          <h3 
            className="text-white mb-6 text-base font-semibold"
            style={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 'normal',
            }}
          >
            Company
          </h3>
          <ul className="space-y-4">
            <li>
              <Link href="/company-file/about" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400 block"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                About us
              </Link>
            </li>
            <li>
              <Link href="/#team" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400 block"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                Our People
              </Link>
            </li>
            <li>
              <Link href="/#pricing" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400 block"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/company-file/blog" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400 block"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link href="/company-file/careers" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400 block"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link href="/company-file/contact" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400 block"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800 mt-16 pt-8 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          <p 
            className="text-white/40 text-xs sm:text-sm"
            style={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 'normal',
            }}
          >
            © 2025 Barbarika. All rights reserved.
          </p>
          <span 
            className="cursor-pointer hover:text-white text-white/40 text-xs sm:text-sm"
            style={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 'normal',
            }}
          >
            Privacy Policy
          </span>
          <span 
            className="cursor-pointer hover:text-white text-white/40 text-xs sm:text-sm"
            style={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 'normal',
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