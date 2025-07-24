"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import PyramidImage from "@/assets/pyramid.png";
import NoodleImage from "@/assets/noodle.png";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">EduFounder</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're pioneering the elimination of career uncertainty by bridging education 
              and career readiness through our comprehensive digital ecosystem that combines 
              verified resources, human-centric AI, and real mentorship.
            </p>
          </motion.div>
        </div>
        
        {/* Background Decorations */}
        <div className="absolute top-10 left-10 opacity-20">
          <Image src={PyramidImage} alt="" width={100} height={100} />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <Image src={NoodleImage} alt="" width={120} height={120} />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To develop an innovative digital platform that simplifies access to academic resources, 
                provides AI-driven career guidance, and connects students to nearby tutorial centres 
                ensuring informed educational and career decisions.
              </p>
              <p className="text-lg text-gray-600">
                We eliminate career uncertainty by equipping students with a holistic platform that 
                simplifies career planning, centralizes academic credentials, and connects them to 
                mentors—all while fostering informed, confident decision-making.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Our Three Core Pillars</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">📚</span>
                  Digital Brochure Solutions
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">📄</span>
                  Document Management Hub
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">🤖</span>
                  Human-Centric AI Guidance
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">👥</span>
                  Local Mentor Connections
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at EduFounder
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Security First",
                description: "Your data is protected with enterprise-grade security measures and encryption.",
                icon: "🔒"
              },
              {
                title: "User-Centric Design",
                description: "Every feature is designed with the user experience at the forefront.",
                icon: "👥"
              },
              {
                title: "Innovation",
                description: "We continuously evolve our platform with cutting-edge technology.",
                icon: "🚀"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate educators, technologists, and innovators working together to transform education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Co-Founder",
                bio: "Former education consultant with 10+ years of experience in academic technology.",
                avatar: "/assets/avatar-1.png"
              },
              {
                name: "Michael Chen",
                role: "CTO & Co-Founder",
                bio: "Full-stack engineer passionate about building scalable educational platforms.",
                avatar: "/assets/avatar-2.png"
              },
              {
                name: "Emily Rodriguez",
                role: "Head of Product",
                bio: "UX designer focused on creating intuitive experiences for students and professionals.",
                avatar: "/assets/avatar-3.png"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Eliminate Career Uncertainty?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join students, parents, and educational institutions who trust EduFounder 
              to bridge education and career readiness with clarity and confidence.
            </p>
            <motion.a
              href="/waitlist"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition"
            >
              Join Our Waitlist
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}