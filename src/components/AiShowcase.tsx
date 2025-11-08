"use client"
import { motion } from "framer-motion"
import { useState } from "react"

export default function AiShowcase() {
    const [activeCard, setActiveCard] = useState(0);

    const features = [
        {
            step: "01",
            title: "Access Digital Brochure",
            description: "Explore curated career resources and dynamic brochures that demystify career paths and educational opportunities",
            icon: "📚",
            color: "from-blue-600 to-blue-700"
        },
        {
            step: "02",
            title: "Get AI-Powered Guidance",
            description: "Receive personalized, human-centric AI recommendations that complement real mentorship and tutorial support",
            icon: "🤖",
            color: "from-blue-500 to-blue-700"
        },
        {
            step: "03",
            title: "Connect with Mentors",
            description: "Find local tutorial centers and mentors who provide the human expertise you need for informed decisions",
            icon: "👥",
            color: "from-blue-500 to-blue-700"
        }
    ];

    return (
        <section className="relative min-h-screen bg-white overflow-hidden py-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                    >
                        Eliminate Career Uncertainty in 3 Steps
                    </motion.h2>
                </div>

                {/* Floating Cards Container */}
                <div className="relative max-w-8xl mx-auto">
                    {/* Main Content Card - Slides from Left */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-[1px] shadow-2xl"
                    >
                        <div className="bg-blue-50 rounded-3xl p-16 relative overflow-hidden min-h-[600px]">
                            {/* Decorative Elements */}
                            <div className="absolute top-8 left-8 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-2xl">📚</span>
                            </div>
                            <div className="absolute bottom-8 right-8 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-3xl">🎯</span>
                            </div>

                            {/* Three Feature Cards Inside */}
                            <div className="grid md:grid-cols-3 gap-8 relative z-10 mt-8">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ x: 300, opacity: 0, rotateY: 45 }}
                                        whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
                                        transition={{
                                            duration: 0.8,
                                            delay: index * 0.2,
                                            ease: "easeOut"
                                        }}
                                        whileHover={{
                                            y: -10,
                                            scale: 1.02,
                                            rotateY: -5,
                                            transition: { duration: 0.3 }
                                        }}
                                        className={`relative bg-gradient-to-br ${feature.color} rounded-2xl p-8 text-white shadow-xl cursor-pointer transform-gpu min-h-[280px]`}
                                        style={{
                                            transformStyle: "preserve-3d",
                                            perspective: "1000px"
                                        }}
                                        onClick={() => setActiveCard(index)}
                                    >
                                        {/* Card Background Pattern */}
                                        <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm"></div>

                                        {/* Card Content */}
                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="text-3xl">{feature.icon}</div>
                                                <div className="text-right">
                                                    <div className="text-2xl font-bold opacity-90">{feature.step}</div>
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                            <p className="text-white/90 leading-relaxed text-sm">{feature.description}</p>

                                            {/* Floating Action */}
                                            <motion.div
                                                className="mt-4 flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                                                whileHover={{ x: 5 }}
                                            >
                                                <span className="text-xs font-medium">Learn More</span>
                                                <span>→</span>
                                            </motion.div>
                                        </div>

                                        {/* Floating Indicator */}
                                        {activeCard === index && (
                                            <motion.div
                                                layoutId="activeIndicator"
                                                className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-20"
                >
                    <FlipText text="Navigate Your Future, Powered by Clarity" />
                </motion.div>
            </div>
        </section>
    )
}

const DURATION = 0.25;
const STAGGERED = 0.025;

const FlipText = ({ text }: { text: string }) => {
    return (
        <motion.h1
            initial="initial"
            whileInView="hovered"
            className="relative block overflow-hidden whitespace-nowrap text-4xl font-black sm:text-6xl md:text-4xl lg:text-4xl text-gray-800"
        >
            <div>
                {text.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        variants={{
                            initial: { y: 0 },
                            hovered: { y: "-100%" }
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGERED * i
                        }}
                        className="inline-block"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0">
                {text.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        variants={{
                            initial: { y: "100%" },
                            hovered: { y: 0 }
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGERED * i
                        }}
                        className="inline-block text-blue-600"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </div>
        </motion.h1>
    );
};