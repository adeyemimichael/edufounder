'use client';

import { useState } from 'react';
import Image from 'next/image';
import TubeImage from "@/assets/tube.png";
import avatarImage from "@/assets/avatar-2.png";

export default function WaitlistPage() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({ firstName: '', lastName: '', email: '' });
      } else {
        setError(result.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-6">
      {/* Main Content */}
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-6">
        
        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-6 flex flex-col items-center space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">Get Early Access</h2>
          <p className="text-gray-600 text-center">Be one of the first to create your profile and claim a premium username.</p>

          {success ? (
            <div className="w-full max-w-sm bg-green-50 border border-green-200 p-8 rounded-lg text-center">
              <div className="text-green-600 text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">You're on the list!</h3>
              <p className="text-green-600">We'll notify you when EduFounder launches.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                  {error}
                </div>
              )}
              
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    onChange={handleChange}
                    required
                    aria-label="First name"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    onChange={handleChange}
                    required
                    aria-label="Last name"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  onChange={handleChange}
                  required
                  aria-label="Email address"
                />
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold transition duration-300 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? 'Joining...' : 'Join the Waitlist'}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Profile Preview Section */}
        <div className="w-full lg:w-1/2 p-6 flex justify-center items-center relative">
          {/* Background Image */}
          <Image 
            src={TubeImage}
            alt="Side Illustration"
            className="absolute left-0 -top-20 md:-top-10 transform -translate-y-1/2 w-36 md:w-48 h-auto opacity-30"
          />
          {/* Profile Card */}
          <div className="relative w-80 bg-white shadow-xl rounded-lg p-6 z-10">
            <div className="h-24 w-full bg-gradient-to-r from-orange-500 to-red-500 rounded-t-lg"></div>
            <div className="-mt-12 flex justify-center">
              <Image
                src={avatarImage}
                alt="Profile"
                className="h-24 w-24 rounded-full border-4 border-white"
              />
            </div>
            <h3 className="text-center text-xl font-semibold mt-4">Olivia Rhye</h3>
            <p className="text-center text-gray-500">@olivia</p>
            <p className="text-gray-600 text-center mt-2">I'm a Product Designer based in Melbourne, Australia.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
