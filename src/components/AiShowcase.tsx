
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

const FlipLink = ({children , href }: {children: string, href:string  }) => {
  return ( <a href= {href}> {children} </a>)
}