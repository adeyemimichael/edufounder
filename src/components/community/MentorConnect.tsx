"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Mentor {
  id: string;
  name: string;
  expertise: string[];
  experience: string;
  rating: number;
  availability: string;
  image: string;
}

export default function MentorConnect() {
  const [mentors, setMentors] = useState<Mentor[]>([
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      expertise: ['Mathematics', 'Physics'],
      experience: '10+ years teaching experience',
      rating: 4.8,
      availability: 'Available for sessions',
      image: '/assets/avatar-1.png'
    }
  ]);

  const [selectedExpertise, setSelectedExpertise] = useState('');

  const filteredMentors = selectedExpertise
    ? mentors.filter(mentor => mentor.expertise.includes(selectedExpertise))
    : mentors;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Find a Mentor</h2>
        <select
          value={selectedExpertise}
          onChange={(e) => setSelectedExpertise(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="">All Subjects</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredMentors.map((mentor) => (
          <motion.div
            key={mentor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start space-x-4">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-medium">{mentor.name}</h3>
                <p className="text-sm text-gray-600">{mentor.experience}</p>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i < mentor.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {mentor.rating}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                {mentor.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-green-600">{mentor.availability}</span>
              <button className="bg-black text-white px-4 py-2 rounded-md">
                Connect
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}