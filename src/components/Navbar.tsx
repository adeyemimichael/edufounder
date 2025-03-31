"use client";
import Image from "next/image";
import LogoImage from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 backdrop-blur-md z-40 text-black p-4">
      <nav className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Image src={LogoImage} alt="My Image" width={200} height={200} />

        {/* Navigation Links */}
        <ul className="flex flex-row space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Waitlist", path: "/waitlist" },
          ].map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={pathname === link.path ? "font-bold" : "btn"}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
