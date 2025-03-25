"use client";
import Image from "next/image";
import ImageIllustration from "../assets/noodle.png";
import { motion } from "framer-motion";
import Waitlist from "./WaitList";
import { useState } from "react";

export default function HeroSection() {
  const [handleClick, setHandleclick] = useState();
// //  if ( handleClick === null ) {
//   try (console.log("i am trying my hand what i think is right "))
//  }
  return (
    <section className="relative pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip">
      {/* 🔥 Radial Gradient Background */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        {/* ✅ Option 1: Tailwind Native Gradient (Requires v3.1+)
        <div className="w-[100%] h-[100vh] bg-gradient-radial from-pink-300 via-blue-500 to-green-300/60 blur-3xl opacity-20"></div> */}

       
        <div className="bg-gradient"></div>
      </div>

      {/* ✅ Content */}
      <div className="relative z-10">
        <div className="md:flex items-center">
          <motion.div className="md:w-[478px]">
            <h1 className="heading-tag">
              Your <span className="font-medium italic md:text-7xl  text-4xl">one-stop</span> Career Navigation Platform
            </h1>
            {/* <ul>
                  <FlipLink value  ="one"> Your</FlipLink>
                  <FlipLink value ="two "> One-Stop </FlipLink>
                  <FlipLink value ="three ">Career Navigation </FlipLink>
                  <FlipLink  value  ="four ">Platform  </FlipLink>
                
                   </ul> */}
            <p className="text-xl text-[#010d3e] tracking-tight mt-6">
              Your career path shouldn’t feel like a maze. Let’s map it together. 
              Keep your credentials safe, organized, and ready for what’s next.
              We are redefining digital Brochure system for students.
            </p>
            <div className="flex gap-1 mt-[30px] items-center">
              <button className="btn btn-primary">Join our Waitlist</button>
            </div>
          </motion.div>

          <div className="illustration">
            <Image src={ImageIllustration} alt="Illustration for the image" />
          </div>
        </div>
      </div>
    </section>
  );
}
// const DURATION = 0.25
//  const STAGGERED = 0.025
// const FlipLink = ({children , value }: {children: string, value:string  }) => {
//   return ( <motion.h1
//    key= {value} 
//    initial= "initials" 
//    whileHover="hovered" 
//    className=" relative block overflow-hidden whitespace-nowrap 
//    heading-tag">
  
//    <div
//   >

//    {children.split("").map((l, i) => {
//     return <motion.span key={i} 
//     variants={{
//       initials: {y : 0},
//       hovered: { y : "-100%"}
//      }}
//      transition={{
//       duration: DURATION,
//       ease:"easeInOut",
//       delay: STAGGERED * i
//      }}
//      className="inline-block">
//       {l}
//     </motion.span >
//    })}</div>
//    <div
//    className="absolute inset-0 "
//    >

// {children.split("").map((l, i) => {

//     return <motion.span key={i} 
//     variants={{
//       initials: {y : "100%"},
//       hovered: { y : 0}
//      }}
//      transition={{
//       duration: DURATION,
//       ease:"easeInOut",
//       delay: STAGGERED * i
//      }}
//      className="inline-block">
//       {l}
//     </motion.span >})}
//     </div> </motion.h1>)
// }