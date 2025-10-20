"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

// Counter animation component
const AnimatedCounter = ({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Agboola",
      role: "Computer Science Student",
      university: "Federal University of Technology Akure ",
      avatar: "/assets/avatar-1.png",
      content: "I was overwhelmed by career choices until EduFounder's digital brochure and library showed me clear pathways. The AI guidance plus local mentor connections made all the difference!",
      rating: 5
    },
    {
      name: "Adamu williams ",
      role: "High School Senior",
      university: "Planning for College",
      avatar: "/assets/avatar-2.png",
      content: "EduFounder eliminated my career uncertainty. The structured resources and human-centric AI helped me make confident decisions about my future without the overwhelm.",
      rating: 5
    },
    {
      name: "Dr. Fola Ezekiel",
      role: "Parent & Educator",
      university: "Supporting her daughter",
      avatar: "/assets/avatar-3.png",
      content: "As a parent, I needed trustworthy tools to support my daughter's future. EduFounder's verified resources and mentor connections gave us both confidence.",
      rating: 5
    },
    {
      name: "David Adesoye",
      role: "Pre-Med Student",
      university: "Unilag",
      avatar: "/assets/avatar-4.png",
      content: "Unlike ChatGPT, EduFounder gave me structured, actionable pathways for my medical career. The local tutorial center connections were invaluable for MCAT prep.",
      rating: 5
    },
    {
      name: "Prof. Jessica Adams",
      role: "Career Counselor",
      university: "University of Ibadan",
      avatar: "/assets/avatar-5.png",
      content: "EduFounder bridges education and career readiness like no other platform. It's not just another AI tool—it's a comprehensive ecosystem that truly helps students.",
      rating: 5
    }
  ];

  const stats = [
    { number: 3, suffix: "+", label: "Your Input" },
    { number: 2, suffix: "+", label: "AI guided Recommendation" },
    { number: 95, suffix: "%", label: "Success Rate" },
    { number: 4.9, suffix: "/5", label: "User Rating", isDecimal: true }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-blue-600">Students & Parents</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how EduFounder eliminates career uncertainty and empowers confident 
            decision-making for students, parents, and educational institutions.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.isDecimal ? (
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} duration={2.5} />
                ) : (
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} duration={2} />
                )}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">★</span>
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
              "{testimonials[activeTestimonial].content}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {testimonials[activeTestimonial].name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[activeTestimonial].role}
                </div>
                <div className="text-blue-600 text-sm">
                  {testimonials[activeTestimonial].university}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === activeTestimonial ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Them?
          </h3>
          <p className="text-gray-600 mb-8">
            Start your journey with EduFounder today and take control of your career path.
          </p>
          <motion.a
            href="/waitlist"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition"
          >
            Join Us 
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}