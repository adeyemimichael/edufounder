import HeroSection from "@/components/Herosection";
import Testimonials from "@/components/AiShowcase";

import './globals.css';




export default function Home() {
  return (
    <div className="container">
      
      <HeroSection/>

      <Testimonials/>
   
    </div>
  );
}
