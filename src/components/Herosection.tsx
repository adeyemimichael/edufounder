"use client"
import Image from "next/image";
import ImageIllustration from "../assets/noodle.png"
import { motion } from "framer-motion";
import Waitlist from "./WaitList";
import { useState } from "react";


export default function HeroSection () {
 
const [handleClick, setHandleclick] = useState();

    return(
 
<section className=" pt-8 pb-20 md:pt-5 md:pb-10 custom-radial overflow-x-clip">
      <div className=" ">
        <div className="md:flex items-center">
        <motion.div className="md:w-[478px]"
        >

          <h1  className="text-5xl md:text-7xl tracking-tighter font-bold bg-gradient-to-b
           from-black to-[#008ef8] text-transparent bg-clip-text mt-6">Your  <span className="font-medium">one-stop</span> Career Navigation Platform </h1>
        <p className="text-xl text-[#010d3e] tracking-tight mt-6 ">
          Your career path shouldn’t feel like a maze. Let’s map it together. 
          Keep your credentials safe, organized, and ready for what’s next.
           We are redefining digital Brochure system for students 
 </p>
       <div  className="flex gap-1 mt-[30px] items-center ">
        <button className="btn btn-primary" > Join our Waitlist</button>
      
       </div>
         </motion.div>

          <div className="illustraion">
            <Image
            src={ImageIllustration}
            alt="Illustration for the image"
             />
          </div>

         </div>

      </div>



      </section>
  

    )
  }