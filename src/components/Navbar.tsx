"use client";

import Image from "next/image";
import LogoImage from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur-md border-b">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src={LogoImage} alt="EduFounder Logo" width={140} height={140} />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium ${
                pathname === link.path ? "text-black font-bold" : "text-gray-600 hover:text-black transition-colors"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Waitlist Button */}
          <Link
            href="/waitlist"
            className="rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white text-sm px-4 py-2 font-semibold hover:bg-blue-800 transition"
          >
            Join waitlist
          </Link>
        </div>
      </nav>
    </header>
  );
}
