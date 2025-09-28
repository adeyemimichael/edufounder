"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle Blue Accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20"></div>

      {/* Blue Geometric Shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-48 h-48 bg-blue-600/8 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* Top Announcement Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-12"
        >
          <div className="bg-blue-50 border border-blue-200/50 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-3 shadow-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-900 text-sm font-medium">
              🎓 Digital Library & AI Guidance Available
            </span>
          </div>
        </motion.div>

        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6"
          >
            Your One-stop Ai {" "}
            <br className="hidden md:block" />
            <span className="text-blue-600">
             Career Guidance Platform
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-10"
          >
            Your career path shouldn't feel like a maze. EduFounder eliminates career uncertainty
            by combining a comprehensive digital library, secure document management, and
            human-centric AI guidance—all while connecting you to local mentors and tutorial centers.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <a
              href="/waitlist"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
            >
              Start Your Journey
            </a>
            <a
              href="/about"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300"
            >
              Learn More
            </a>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 text-sm mb-16"
          >
            <div className="flex items-center gap-2 bg-blue-50/50 px-4 py-2 rounded-full border border-blue-100">
              <span className="text-blue-500">✓</span>
              <span className="text-blue-700 font-medium">Digital Brochure </span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50/50 px-4 py-2 rounded-full border border-blue-100">
              <span className="text-blue-500">✓</span>
              <span className="text-blue-700 font-medium">AI-Powered Guidance</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50/50 px-4 py-2 rounded-full border border-blue-100">
              <span className="text-blue-500">✓</span>
              <span className="text-blue-700 font-medium">Mentor Connections</span>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Preview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {/* Left Card - Career Guidance */}
          <div className="bg-white border border-blue-100/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <div className="bg-blue-50 border border-blue-200/30 p-3 rounded-2xl">
                <span className="text-2xl">📚</span>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600">95%</div>
                <div className="text-sm text-blue-500">Success Rate</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Career Match</div>
                  <div className="text-sm text-blue-600">Perfect fit found!</div>
                </div>
              </div>

              <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-blue-500">✓</span>
                  <span className="text-sm font-medium text-blue-700">Ready to Apply!</span>
                </div>
                <div className="text-xs text-blue-600">Based on your academic performance & interests</div>
              </div>
            </div>
          </div>

          {/* Right Card - Document Management */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 shadow-2xl text-white hover:shadow-3xl transition-shadow">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Document Hub</h3>
              <p className="text-blue-100">Secure & Organized</p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 border border-blue-200/50 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-lg">📄</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Academic Records</div>
                  <div className="text-xs text-blue-600">Certificates • Transcripts • Results</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-blue-600">12</div>
                  <div className="text-xs text-blue-500">Documents stored</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-xs text-blue-500">Secure backup</div>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs hover:bg-blue-700 transition-colors">
                  Upload new
                </button>
                <button className="border border-blue-200 text-blue-600 px-4 py-2 rounded-full text-xs hover:bg-blue-50 transition-colors">
                  Share securely
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}