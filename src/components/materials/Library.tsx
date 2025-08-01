"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface StudyMaterial {
  id: string;
  title: string;
  subject: string;
  type: 'video' | 'document' | 'quiz';
  lastAccessed: string;
}

export default function Library() {
  const [materials, setMaterials] = useState<StudyMaterial[]>([
    {
      id: '1',
      title: 'Introduction to Calculus',
      subject: 'Mathematics',
      type: 'video',
      lastAccessed: '2024-02-19'
    },
    {
      id: '2',
      title: 'Physics Practice Problems',
      subject: 'Physics',
      type: 'document',
      lastAccessed: '2024-02-18'
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredMaterials = materials.filter(material =>
    material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    material.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Study Library</h2>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search materials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border rounded-md"
          />
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Add Material
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMaterials.map((material) => (
          <motion.div
            key={material.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium">{material.title}</h3>
                <p className="text-sm text-gray-500">{material.subject}</p>
              </div>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100">
                {material.type}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Last accessed: {new Date(material.lastAccessed).toLocaleDateString()}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}