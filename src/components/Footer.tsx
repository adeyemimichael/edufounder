
"use client"
import Logo from "@/assets/logo.png"
import Image from "next/image";
import Link from "next/link";
import SocialX from "@/assets/social-x.svg"
import Socialinsta from "@/assets/social-insta.svg"
import SocialLinkedin from "@/assets/social-linkedin.svg"
import SocialPin from "@/assets/social-pin.svg"  
import SocialYoutube from "@/assets/social-youtube.svg"

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 text-[#bcbcbc] text-sm py-10 text-center">
      <div className="container mx-auto px-6">
        {/* Logo */}
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:absolute before:bg-[linear-gradient(to_right,#f892cf,#fb92cf,#ffdd98,#c2f0b1,#2fd8fe)]">
          <Image 
            src={Logo}
            height={40}
            alt="EduFounder logo"
            className="relative"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
          
          <Link href="/login" className="hover:text-white transition-colors">
            Login
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </nav>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a 
            href="https://twitter.com/edufounder" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
            aria-label="Follow us on Twitter"
          >
            <Image src={SocialX} alt="Twitter" width={20} height={20} />
          </a>
          <a 
            href="https://instagram.com/edufounder" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
            aria-label="Follow us on Instagram"
          >
            <Image src={Socialinsta} alt="Instagram" width={20} height={20} />
          </a>
          <a 
            href="https://linkedin.com/company/edufounder" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
            aria-label="Follow us on LinkedIn"
          >
            <Image src={SocialLinkedin} alt="LinkedIn" width={20} height={20} />
          </a>
          <a 
            href="https://pinterest.com/edufounder" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
            aria-label="Follow us on Pinterest"
          >
            <Image src={SocialPin} alt="Pinterest" width={20} height={20} />
          </a>
          <a 
            href="https://youtube.com/@edufounder" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
            aria-label="Subscribe to our YouTube channel"
          >
            <Image src={SocialYoutube} alt="YouTube" width={20} height={20} />
          </a>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8 max-w-md mx-auto">
          <h3 className="text-white font-semibold mb-3">Stay Updated</h3>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-gray-200 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <p>&copy; 2024 EduFounder, Inc. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Empowering students and professionals to navigate their career journey with confidence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;