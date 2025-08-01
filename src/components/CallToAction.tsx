"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Start Your Educational Journey?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Join thousands of students who have found their perfect educational path with EduFounder
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/waitlist"
              className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Join Waitlist
            </Link>
            <Link
              href="/course-predictor"
              className="inline-block border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition"
            >
              Try Course Predictor
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-gray-400"
          >
            <p className="mb-4">Trusted by students from top institutions</p>
            <div className="flex justify-center gap-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={`/assets/avatar-${i}.png`}
                    alt={`User ${i}`}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}