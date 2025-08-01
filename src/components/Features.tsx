"use client";
<<<<<<< HEAD
import { motion } from "framer-motion";
import Image from "next/image";
import ManageSearchImage from "@/assets/manage-search.svg";

export default function Features() {
  const features = [
    {
      icon: "📚",
      title: "Digital Library & Brochures",
      description: "Access curated, dynamic career resources that demystify career paths and educational opportunities.",
      benefits: ["Career path exploration", "Educational brochures", "Industry insights", "Verified resources"]
    },
    {
      icon: "📄",
      title: "Document Management Hub",
      description: "Secure, intuitive storage for all your academic records, certificates, and credentials.",
      benefits: ["Secure credential storage", "Easy document access", "Certificate verification", "Academic records"]
    },
    {
      icon: "🤖",
      title: "Human-Centric AI Guidance",
      description: "Personalized AI recommendations that complement—not replace—real human mentorship.",
      benefits: ["Personalized pathways", "AI-driven insights", "Human expertise integration", "Structured guidance"]
    },
    {
      icon: "👥",
      title: "Mentor & Tutorial Connections",
      description: "Connect with local mentors and tutorial centers for real human expertise and support.",
      benefits: ["Local mentor matching", "Tutorial center finder", "Expert guidance", "Community support"]
    },
    {
      icon: "🎯",
      title: "Career Clarity Tools",
      description: "Structured, actionable tools that eliminate uncertainty and build confidence in your decisions.",
      benefits: ["Decision frameworks", "Goal setting", "Progress tracking", "Confidence building"]
    },
    {
      icon: "🔒",
      title: "Secure & Accessible",
      description: "Enterprise-grade security with 24/7 access to your career resources and documents.",
      benefits: ["End-to-end encryption", "Cloud accessibility", "Data privacy", "Secure sharing"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Three Pillars of <span className="text-blue-600">Career Clarity</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlike generic AI chatbots, EduFounder combines structured digital resources, 
            human-centric AI guidance, and real mentorship to eliminate career uncertainty.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 text-white text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Image 
                src={ManageSearchImage} 
                alt="Search and Manage" 
                width={80} 
                height={80}
                className="filter invert"
              />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Why EduFounder is Different
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Unlike ChatGPT or generic chatbots, EduFounder offers structured, actionable 
              pathways tailored to each student's goals, backed by verified resources and 
              real human expertise from local mentors and tutorial centers.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">3 Pillars</div>
                <div className="text-blue-100">Digital Library + AI + Human Mentorship</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Verified Resources & Security</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Local</div>
                <div className="text-blue-100">Mentor & Tutorial Center Connections</div>
              </div>
            </div>
          </div>
        </motion.div>
=======

import { motion } from "framer-motion";

const features = [
  {
    title: "Course Prediction",
    description: "Get personalized course recommendations based on your academic performance and interests.",
    icon: "📚"
  },
  {
    title: "Tutorial Centers",
    description: "Find and connect with the best tutorial centers near you.",
    icon: "🎓"
  },
  {
    title: "Career Guidance",
    description: "Expert guidance to help you make informed decisions about your future.",
    icon: "🎯"
  },
  {
    title: "Resource Library",
    description: "Access a vast collection of educational resources and study materials.",
    icon: "📖"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Why Choose EduFounder?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Everything you need to make informed educational decisions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
>>>>>>> 8cdc669686965ceac5ad1d2c04696bbf4d278aa7
      </div>
    </section>
  );
}