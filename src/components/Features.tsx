"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ManageSearchImage from "@/assets/manage-search.svg";

export default function Features() {
  const features = [
    {
      icon: "📚",
      title: "Digital Library & Brochures",
      description: "Access curated, dynamic career resources by telling us what your interest and passion",
      benefits: ["Career path guidance", "Educational brochures based on your Input", "Ai insights", "Verified resources"]
    },
    {
      icon: "📄",
      title: "Document Management Place",
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
              className="bg-blue-50/80 backdrop-blur-md border border-blue-100/50 p-8 rounded-2xl hover:shadow-lg hover:bg-blue-50/90 transition-all duration-300"
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
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              {/* <Image
                src={ManageSearchImage}
                alt="Search and Manage"
                width={80}
                height={80}
                className="filter invert"
              /> */}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Why EduFounder is Different
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Unlike Generic chatbot platforms, EduFounder offers structured, actionable
              Career path Recommendations, by taking input such as their passion, academic records to make informed guidance decision.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">3 Pillars</div>
                <div className="text-blue-100">Digital Brochure  + AI + Human Mentorship</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Decisions based on Users Input</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Local</div>
                <div className="text-blue-100">Mentor & Tutorial Center Connections</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}