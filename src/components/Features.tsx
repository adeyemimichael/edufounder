"use client";

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
      </div>
    </section>
  );
}