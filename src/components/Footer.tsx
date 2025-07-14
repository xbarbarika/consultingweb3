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
            className="text-white mb-2 mt-6 sm:mt-12 lg:mt-[90px] text-2xl sm:text-3xl lg:text-[30.071px]"
            style={{
              fontFamily: 'Epilogue',
              fontStyle: 'italic',
              fontWeight: '600',
              lineHeight: '110%',
              letterSpacing: '1.504px',
            }}
          >
            BARBARIKA
          </h2>
          <p 
            className="text-white/50 mb-12 sm:mb-16 lg:mb-20 text-lg sm:text-xl lg:text-[22px]"
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
              📞 +91 9326387236
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
          <ul className="space-y-2">
            <li>
              <Link href="/marketing-sub" 
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
                Marketing Subscription
              </Link>
            </li>
            <li>
              <Link href="/social-media" 
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
                Social Media
              </Link>
            </li>
            <li>
              <Link href="/paid-social" 
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
                Paid Social
              </Link>
            </li>
            <li>
              <Link href="/seo" 
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
                SEO
              </Link>
            </li>
            <li>
              <Link href="/influencer" 
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
                Influencer Marketing
              </Link>
            </li>
            <li>
              <Link href="/pr-marketing" 
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
                PR & Outreach
              </Link>
            </li>
            <li>
              <Link href="/video" 
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
                Video Production
              </Link>
            </li>
            <li>
              <Link href="/lead-gen" 
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
                Lead Generation
              </Link>
            </li>
            <li>
              <Link href="/branding" 
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
                Branding
              </Link>
            </li>
            <li>
              <Link href="/community" 
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
                Community Management
              </Link>
            </li>
            <li>
              <Link href="/web3-and-mobile" 
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
                Web3 & Mobile
              </Link>
            </li>
            <li>
              <Link href="/blockchain" 
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
                Blockchain
              </Link>
            </li>
            <li>
              <Link href="/genai" 
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
          <ul className="space-y-2">
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
              <Link href="/fintech" 
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
              <Link href="/crypto" 
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
              <Link href="/healthcare" 
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
              <Link href="/software" 
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
              <Link href="/saas" 
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
              <Link href="/startup" 
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
              <Link href="/small-business" 
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
              <Link href="/gaming" 
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
              <Link href="/esport" 
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
              <Link href="/mobile" 
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
              <Link href="/ecommerce" 
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
          <ul className="space-y-2">
            <li className="text-white/60 mb-4 text-sm sm:text-base"
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}
            >
              About us
            </li>
            <li className="text-white/60 mb-4 text-sm sm:text-base"
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}
            >
              Our People
            </li>
            <li className="text-white/60 mb-4 text-sm sm:text-base"
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}
            >
              Pricing
            </li>
            <li className="text-white/60 mb-4 text-sm sm:text-base"
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}
            >
              Blog
            </li>
            <li className="text-white/60 mb-4 text-sm sm:text-base"
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}
            >
              Careers
            </li>
            <li className="text-white/60 text-sm sm:text-base"
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}
            >
              Contact
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