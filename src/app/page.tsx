import HeroSection from "@/components/Herosection";
import AiShowcase from "@/components/AiShowcase";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";

import './globals.css';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AiShowcase />
      <Features />
      <Testimonials />
    </div>
  );
}
