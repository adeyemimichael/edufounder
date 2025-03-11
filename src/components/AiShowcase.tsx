"use client"
import {motion} from "framer-motion"
export default function Testimonials (){

    return(
         <section className=" bg-gray-400  h-screen grid place-content-center gap-2 text-center text-black">
           <div className=" container px-4 py-4  tracking-tighter mx-2 ">
            <div className="flex items-center justify-center">
             <h2 className="heading-section">How to Use</h2>
             </div>
             <div>
                <ul>
                  <FlipLink href="#"> Your</FlipLink>
                  <FlipLink href="#">One-stop </FlipLink>
                  <FlipLink href="#">Career Navigation </FlipLink>
                  <FlipLink href="#">Platform  </FlipLink>
                
                   </ul>
             </div>
           </div>
         </section>

    )
}
 const DURATION = 0.25
 const STAGGERED = 0.025
const FlipLink = ({children , href }: {children: string, href:string  }) => {
  return ( <motion.a
   href= {href} 
   initial= "initials" 
   whileInView="hovered" 
   className=" relative block overflow-hidden whitespace-nowrap 
   text-4xl font-black sm:text-7xl md:text-8xl lg:text-9xl">
  
   <div
  >

   {children.split("").map((l, i) => {
    return <motion.span key={i} 
    variants={{
      initials: {y : 0},
      hovered: { y : "-100%"}
     }}
     transition={{
      duration: DURATION,
      ease:"easeInOut",
      delay: STAGGERED * i
     }}
     className="inline-block">
      {l}
    </motion.span >
   })}</div>
   <div
   className="absolute inset-0 "
   >

{children.split("").map((l, i) => {

    return <motion.span key={i} 
    variants={{
      initials: {y : "100%"},
      hovered: { y : 0}
     }}
     transition={{
      duration: DURATION,
      ease:"easeInOut",
      delay: STAGGERED * i
     }}
     className="inline-block">
      {l}
    </motion.span >})}
    </div> </motion.a>)
}