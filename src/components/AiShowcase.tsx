"use client"
import { motion } from "framer-motion"

export default function AiShowcase() {
    return (
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center py-20">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="heading-section mb-12"
                    >
                        Eliminate Career Uncertainty in 3 Steps
                    </motion.h2>
                    
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <FeatureCard 
                            step="01"
                            title="Access Digital Library"
                            description="Explore curated career resources and dynamic brochures that demystify career paths and educational opportunities"
                            delay={0.2}
                        />
                        <FeatureCard 
                            step="02"
                            title="Get AI-Powered Guidance"
                            description="Receive personalized, human-centric AI recommendations that complement real mentorship and tutorial support"
                            delay={0.4}
                        />
                        <FeatureCard 
                            step="03"
                            title="Connect with Mentors"
                            description="Find local tutorial centers and mentors who provide the human expertise you need for informed decisions"
                            delay={0.6}
                        />
                    </div>

                    <div className="text-center">
                        <FlipText text="Navigate Your Future, Powered by Clarity" />
                    </div>
                </div>
            </div>
        </section>
    )
}

const FeatureCard = ({ step, title, description, delay }: {
    step: string;
    title: string;
    description: string;
    delay: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                {step}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </motion.div>
    );
};

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