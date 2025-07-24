"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import BgIllustration from "../assets/noodle.png";
import ExtraIllustration from "../assets/background.jpg"; 

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      
      {/* Gradient Background */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="bg-gradient"></div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <Image 
          src={BgIllustration} 
          alt="Background Illustration" 
          className="w-[600px] h-auto object-contain" 
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-32 gap-10">
        
        {/* Left Text */}
        <div className="text-center md:text-left max-w-xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight"
          >
            Navigate Your Future,{" "}
            <span className="text-blue-600 font-bold">
              Powered by Clarity
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            Your career path shouldn't feel like a maze. EduFounder eliminates career uncertainty 
            by combining a comprehensive digital library, secure document management, and 
            human-centric AI guidance—all while connecting you to local mentors and tutorial centers.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="/waitlist"
              className="inline-block rounded-full bg-blue-600 text-white px-8 py-4 text-base font-semibold hover:bg-blue-700 transition"
            >
              Start Your Journey
            </a>
            <a 
              href="/about"
              className="inline-block rounded-full border-2 border-blue-600 text-blue-600 px-8 py-4 text-base font-semibold hover:bg-blue-50 transition"
            >
              Learn More
            </a>
          </motion.div>

          {/* Key Benefits */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-8 flex flex-wrap gap-6 text-sm text-gray-600"
          >
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Digital Career Library</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>AI-Powered Guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Mentor Connections</span>
            </div>
          </motion.div>
        </div>

        {/* Right Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end flex-[1.5]"
        >
          <Image 
            src={ExtraIllustration} 
            alt="Students planning their career journey with EduFounder" 
            className="w-full max-w-lg md:max-w-xl h-auto object-contain rounded-2xl shadow-none opacity-90"
          />
        </motion.div>

      </div>
    </section>
  );
}