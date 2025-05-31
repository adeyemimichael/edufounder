"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface SharedResource {
  id: string;
  title: string;
  author: string;
  subject: string;
  sharedAt: string;
  likes: number;
}

export default function ResourceSharing() {
  const [resources, setResources] = useState<SharedResource[]>([
    {
      id: '1',
      title: 'Chemistry Study Guide',
      author: 'John Doe',
      subject: 'Chemistry',
      sharedAt: '2024-02-19',
      likes: 15
    },
    {
      id: '2',
      title: 'Physics Formula Sheet',
      author: 'Jane Smith',
      subject: 'Physics',
      sharedAt: '2024-02-18',
      likes: 23
    }
  ]);

  const handleLike = (resourceId: string) => {
    setResources(resources.map(resource =>
      resource.id === resourceId
        ? { ...resource, likes: resource.likes + 1 }
        : resource
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Shared Resources</h2>
        <button className="bg-black text-white px-4 py-2 rounded-md">
          Share Resource
        </button>
      </div>

      <div className="grid gap-4">
        {resources.map((resource) => (
          <motion.div
            key={resource.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg border"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{resource.title}</h3>
                <p className="text-sm text-gray-500">
                  by {resource.author} • {resource.subject}
                </p>
                <p className="text-sm text-gray-500">
                  Shared: {new Date(resource.sharedAt).toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={() => handleLike(resource.id)}
                className="flex items-center space-x-1 text-gray-500 hover:text-black"
              >
                <span>❤️</span>
                <span>{resource.likes}</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}