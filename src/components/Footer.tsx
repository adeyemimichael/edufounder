
"use client"
import Logo from "@/assets/logo.png"
import Image from "next/image";
import SocialX from "@/assets/social-x.svg"
import Socialinsta from "@/assets/social-insta.svg"
import SocialLindkedin from "@/assets/social-linkedin.svg"
import SocialPin from "@/assets/social-pin.svg"  
import SocialYoutube from "@/assets/social-youtube.svg"

export const Footer = () => {
  return (
    <footer  className="bg-black text-[#bcbcbc] text-sm py-10 text-center ">

<div className="container">
  <div className="inline-flex relative before:content-[''] before:top-2  before:bottom-0 before:blur  before:w-full before:absolute before:bg-[linear-gradient( to_right, #f892cf, #fb92cf, #ffdd98, #c2f0b1, #2fd8fe )]">
<Image src={Logo}
height={40}
alt="saas logo "
className="relative "
/>
</div>
<nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
  <a href="http://">About </a>
  <a href="http://">Features </a>
  <a href="http://">Customers</a>
  <a href="http://">Pricing </a>
  <a href="http://">Help </a>
  <a href="http://">Careers</a>

</nav>
<div className="flex justify-center gap-6 mt-6 ">
  {/* <SocialX />
  <Socialinsta />
  <SocialLindkedin />
  <SocialPin />
  <SocialYoutube /> */}
</div>
<p className="mt-6">&copy; 2024 Produktiv, Inc. All rights reserved. </p>
</div>
    </footer >
  )
};
export default Footer;