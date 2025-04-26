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
            className="text-4xl md:text-6xl font-bold text-gray-700 leading-tight"
          >
            Your{" "}
            <span className="text-black font-medium italic">
              one-stop
            </span>{" "}
            Career Navigation Platform
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            Your career path shouldn’t feel like a maze. Let’s map it together.
            Keep your credentials safe, organized, and ready for what’s next. 
            We are redefining the digital brochure system for students.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-8"
          >
            <button className="inline-block rounded-full bg-black text-white px-8 py-4 text-base font-semibold hover:bg-gray-800 transition">
              Join our Waitlist
            </button>
          </motion.div>
        </div>

        {/* Right Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end flex-[1.5] "
        >
          <Image 
            src={ExtraIllustration} 
            alt="Side Illustration" 
            className="w-full max-w-lg md:max-w-xl h-auto object-contain rounded-2xl shadow-lg opacity-90"
          />
        </motion.div>

      </div>
    </section>
  );
}
