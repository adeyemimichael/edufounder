"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className=" sticky top-0 backdrop-blur-sm z-20 text-black p-8">
      <div className="container mx-auto flex justify-between items-center ">
        <h1 className="text-xl font-bold px-2 ">EduFounder</h1>
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
                className={`hover:text-gray-800 ${
                  pathname === link.path ? "font-bold underline" : "btn"
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
