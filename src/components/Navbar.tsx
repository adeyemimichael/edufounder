"use client"; // Required if using client-side interactivity (e.g., dropdowns)
import Contact from "@/app/contact/page";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center  ">
        <h1 className="text-xl font-bold">EduFounder</h1>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href=" /contact">Contact</Link></li>
          <li><Link href="/dashboard">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}
