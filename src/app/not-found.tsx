"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import PyramidImage from "@/assets/pyramid.png";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-8"
        >
          <h1 className="text-9xl md:text-[12rem] font-black text-gray-200 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Image 
                src={PyramidImage} 
                alt="" 
                width={120} 
                height={120}
                className="opacity-30"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered off. 
            Let's get you back on track.
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
        >
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Go Home
          </Link>
          <Link
            href="/about"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-50 transition"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-gray-500 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/about" className="text-blue-600 hover:text-blue-700 transition">
              About Us
            </Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-700 transition">
              Contact
            </Link>
            <Link href="/waitlist" className="text-blue-600 hover:text-blue-700 transition">
              Join Waitlist
            </Link>
            <Link href="/login" className="text-blue-600 hover:text-blue-700 transition">
              Login
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}