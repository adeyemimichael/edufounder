'use client';

import { useState } from 'react';

export default function WaitlistPage() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-6">
      {/* Form Section */}
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Get early access!</h2>
        <p className="text-gray-600 mb-6">Be one of the first to create a profile and claim a premium username.</p>
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className="w-1/2 p-3 border rounded-lg"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className="w-1/2 p-3 border rounded-lg"
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-lg"
            onChange={handleChange}
            required
          />
          <button type="submit" className="w-full bg-blue-400 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
            Join waitlist
          </button>
        </form>
      </div>
      
      {/* Profile Preview Section */}
      <div className="w-full md:w-1/2 p-6 flex justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-80">
          <div className="h-20 w-full bg-gradient-to-r from-orange-500 to-red-500 rounded-t-lg"></div>
          <div className="-mt-10 flex justify-center">
            <img
              src="/profile-pic.jpg"
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
