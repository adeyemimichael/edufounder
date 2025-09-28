"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import PyramidImage from "@/assets/pyramid.png";
import NoodleImage from "@/assets/noodle.png";
import { useState, useEffect } from "react";
import ImageSlide1 from "@/assets/image.jpg";
import ImageSlide2 from "@/assets/imag2e.jpg";
import ImageSlide3 from "@/assets/image3.jpg";
import ImageSlide4 from "@/assets/image4.jpg";
import ImageSlide5 from "@/assets/image6.jpg";
export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    ImageSlide1,
    ImageSlide2,
    ImageSlide3,
    ImageSlide4,
    ImageSlide5
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-10 bg-gradient-to-br from-blue-50 to-indigo-100 h-[720px]">
        <div className="container mx-auto px-3 h-full ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-6xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-6">
              About <span className="text-blue-600">Us</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're pioneering the elimination of career uncertainty by bridging education
              and career readiness through our comprehensive digital brochure system that combines
              users passions, human-centric AI, and real mentorship to guide users on career choices.
            </p>

            <motion.div
              className="w-full mt-8 mb-6 bg-gray-200 h-[480px] rounded-2xl border-2 overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ y: "100%" }}
                  animate={{
                    y: index === currentImageIndex ? "0%" :
                      index < currentImageIndex ? "-100%" : "100%"
                  }}
                  transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smooth feel
                  }}
                >
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover rounded-2xl"
                    priority={index === 0}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </motion.div>
              ))}

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                        ? 'bg-white shadow-lg scale-110'
                        : 'bg-white/50 hover:bg-white/70'
                      }`}
                  />
                ))}
              </div>

              {/* Gradient Overlay for better indicator visibility */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent rounded-b-2xl" />
            </motion.div>
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
                To develop a global innovative digital platform that simplifies access to academic guidance and advise,
                provides AI-driven career guidance, and connects students to nearby mentors and resources
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
              className="bg-blue-600 p-8 rounded-2xl text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Our Core Pillars</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">

                  </span>
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
      {/* <section className="py-20">
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
                name: "",
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
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-white ">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-black  mb-6">
              Ready to Eliminate Career Uncertainty?
            </h2>
            <p className="text-xl text-black  mb-8 max-w-2xl mx-auto">
              Join students, parents, and educational institutions who trust EduFounder
              to bridge education and career readiness with clarity and confidence.
            </p>
            <motion.a
              href="/waitlist"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-blue-600  text-white   px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition"
            >
              Sign up
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}