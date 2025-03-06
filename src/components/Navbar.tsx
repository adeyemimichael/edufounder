"use client";
import Image from "next/image";
import LogoImage from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className=" sticky top-0 backdrop-blur-md z-40 text-black p-4">
      <div className="container mx-auto flex justify-between items-center  px-4 sm:px-6 lg:px-8 ">
        <Image src={LogoImage}
        alt="My Image" width={200} height={200} />
        <ul className="flex flex-row space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
            { name: "Waitlist", path: "/login" },
          ].map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={` ${
                  pathname === link.path ? "font-bold" : "btn"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

,. 
    </nav>
  );
}
