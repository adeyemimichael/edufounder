'use client';

import { useState } from 'react';
import Image from 'next/image';
import TubeImage from "@/assets/tube.png"
import avatarImage from "@/assets/avatar-2.png"
export default function WaitlistPage() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-6 py-12">
      {/* Form Section */}
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get early access!</h2>
        <p className="text-gray-600 mb-6">Be one of the first to create a profile and claim a premium username.</p>
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 space-y-4">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className="w-full md:w-1/2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
              required
              aria-label="First name"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className="w-full md:w-1/2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
              required
              aria-label="Last name"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            required
            aria-label="Email address"
          />
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold transition duration-300 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400">
            Join waitlist
          </button>
        </form>
      </div>
      
      {/* Profile Preview Section */}
      {/* Profile Preview Section */}
<div className="relative w-full md:w-1/2 p-6 flex justify-center">
  {/* Background Image Extending from Left */}
  <Image 
    src={TubeImage}
    alt="Side Illustration"
    className="absolute -left-10 md:-left-20 top-1/2 transform -translate-y-1/2 w-32 md:w-48 h-auto"
  />

  <div className="bg-white shadow-lg rounded-lg p-6 w-80 relative z-10">
    <div className="h-20 w-full bg-gradient-to-r from-orange-500 to-red-500 rounded-t-lg"></div>
    <div className="-mt-10 flex justify-center">
      <Image
        src={avatarImage}
        alt="Profile"
        className="h-20 w-20 rounded-full border-4 border-white"
      />
    </div>
    <h3 className="text-center text-xl font-semibold mt-2">Olivia Rhye</h3>
    <p className="text-center text-gray-500">@olivia</p>
    <p className="text-gray-600 text-center mt-2">I'm a Product Designer based in Melbourne, Australia.</p>
  </div>
</div>

    </div>
  );
}
