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
    <footer className="bg-black text-white py-10 px-4 sm:px-6 md:px-8 lg:px-20 xl:pl-[130px]" style={{ minHeight: '646px' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-sm text-zinc-300 gap-8 sm:gap-10 lg:gap-[50px]">

        {/* Left section */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <h2 
            className="text-white mb-2 mt-6 sm:mt-12 lg:mt-[90px] text-lg sm:text-xl font-bold italic tracking-wider"
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

          <div>
            <h3 
              className="text-white mb-1 text-base sm:text-lg"
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
              className="text-white mb-4 mt-8 sm:mt-12 lg:mt-[85px] text-base sm:text-lg"
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
            className="text-white mb-4 text-base"
            style={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 'normal',
            }}
          >
            Services
          </h3>
          <ul className="[&>*:not(:last-child)]:mb-[10px]">
            <li>
              <Link href="/services#marketing-subscription" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                Marketing Subscription
              </Link>
            </li>
            <li>
              <Link href="/services#social-media" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                Social Media
              </Link>
            </li>
            <li>
              <Link href="/services#paid-social" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                Paid Social
              </Link>
            </li>
            <li>
              <Link href="/services#seo" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                SEO
              </Link>
            </li>
            <li>
              <Link href="/services#influencer-marketing" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                Influencer Marketing
              </Link>
            </li>
            <li>
              <Link href="/services#pr-marketing" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                PR & Outreach
              </Link>
            </li>
            <li>
              <Link href="/services#video-production" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                Video Production
              </Link>
            </li>
            <li>
              <Link href="/services#lead-generation" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                Lead Generation
              </Link>
            </li>
            <li>
              <Link href="/services#branding" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                Branding
              </Link>
            </li>
            <li>
              <Link href="/services#community-management" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                Community Management
              </Link>
            </li>
            <li>
              <Link href="/services#web3-mobile" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400"
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
              <Link href="/services#blockchain" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400"
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
              <Link href="/services#genai" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                GenAI
              </Link>
            </li>
          </ul>
        </div>

        {/* Industries */}
        <div className="mt-6 sm:mt-12 lg:mt-[90px] ml-0 sm:ml-8 lg:ml-[100px]">
          <h3 
            className="text-white mb-4 text-base"
            style={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 'normal',
            }}
          >
            Industries
          </h3>
          <ul className="[&>*:not(:last-child)]:mb-[10px]">
            <li>
              <Link href="/industries" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                B2B
              </Link>
            </li>
            <li>
              <Link href="/industries-file/fintech" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                Fintech
              </Link>
            </li>
            <li>
              <Link href="/industries-file/crypto" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                Crypto
              </Link>
            </li>
            <li>
              <Link href="/industries-file/healthcare" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                Healthcare
              </Link>
            </li>
            <li>
              <Link href="/industries-file/software" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                Software
              </Link>
            </li>
            <li>
              <Link href="/industries-file/saas" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                SaaS
              </Link>
            </li>
            <li>
              <Link href="/industries-file/startup" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                Startup
              </Link>
            </li>
            <li>
              <Link href="/industries-file/small-business" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                Small Business
              </Link>
            </li>
            <li>
              <Link href="/industries-file/gaming" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                Gaming
              </Link>
            </li>
            <li>
              <Link href="/industries-file/esport" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                eSport
              </Link>
            </li>
            <li>
              <Link href="/industries-file/mobile" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                Mobile
              </Link>
            </li>
            <li>
              <Link href="/industries-file/ecommerce" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                eCommerce
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="mt-6 sm:mt-12 lg:mt-[90px] ml-0 sm:ml-8 lg:ml-[100px]">
          <h3 
            className="text-white mb-4 text-base"
            style={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 'normal',
            }}
          >
            Company
          </h3>
          <ul className="[&>*:not(:last-child)]:mb-[10px]">
            <li>
              <Link href="/company-file/about" 
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400"
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
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400"
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
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400"
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
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400"
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
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400"
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
                className="hover:opacity-100 transition-opacity text-white/60 text-sm sm:text-base hover:text-pink-400"
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
      <div className="border-t border-zinc-800 mt-10 pt-6 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
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