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
                  <FlipLink value  ="one"> Your One-Stop</FlipLink>
                  <FlipLink value ="two ">Hi </FlipLink>
                  <FlipLink value ="three ">Career Navigation </FlipLink>
                  <FlipLink  value  ="four ">Platform  </FlipLink>
                
                   </ul>
             </div>
           </div>
         </section>

    )
}
 const DURATION = 0.25
 const STAGGERED = 0.025
const FlipLink = ({children , value }: {children: string, value:string  }) => {
  return ( <motion.h1
   key= {value} 
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
    </div> </motion.h1>)
}