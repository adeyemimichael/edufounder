import HeroSection from "@/components/Herosection";
import Testimonials from "@/components/AiShowcase";
import Waitlist from "@/components/WaitList";
export default function Home() {
  return (
    <div className="">
      <h1> I am doing it all again </h1>
      <HeroSection/>

      <Testimonials/>
      <Waitlist/>
    </div>
  );
}
