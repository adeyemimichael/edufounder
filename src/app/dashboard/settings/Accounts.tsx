"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Accounts() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Student passionate about technology and education.',
    avatar: '/assets/avatar-1.png'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile update
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Image
            src={profile.avatar}
            alt="Profile"
            width={80}
            height={80}
            className="rounded-full"
          />
          <button className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full">
            📷
          </button>
        </div>
        <div>
          <h3 className="font-medium">Profile Picture</h3>
          <p className="text-sm text-gray-500">
            Update your profile picture
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Bio
          </label>
          <textarea
            value={profile.bio}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            rows={4}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-md font-medium"
        >
          Save Changes
        </motion.button>
      </form>
    </div>
  );
}