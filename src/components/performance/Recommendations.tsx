"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Recommendation {
  id: string;
  category: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  implemented: boolean;
}

export default function Recommendations() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([
    {
      id: '1',
      category: 'Study Technique',
      title: 'Implement Active Recall',
      description: 'Use flashcards and practice tests to strengthen memory retention',
      priority: 'high',
      implemented: false
    },
    {
      id: '2',
      category: 'Time Management',
      title: 'Pomodoro Technique',
      description: '25 minutes of focused study followed by 5-minute breaks',
      priority: 'medium',
      implemented: true
    }
  ]);

  const toggleImplementation = (id: string) => {
    setRecommendations(recommendations.map(rec =>
      rec.id === id ? { ...rec, implemented: !rec.implemented } : rec
    ));
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        {recommendations.map((rec) => (
          <motion.div
            key={rec.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`bg-white p-6 rounded-lg border ${
              rec.implemented ? 'bg-gray-50' : ''
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={rec.implemented}
                    onChange={() => toggleImplementation(rec.id)}
                    className="mr-3 h-5 w-5"
                  />
                  <div>
                    <span className="text-sm font-medium text-gray-500">
                      {rec.category}
                    </span>
                    <h3 className="font-medium">{rec.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {rec.description}
                    </p>
                  </div>
                </div>
              </div>
              <span className={`px-2 py-1 rounded text-sm ${
                rec.priority === 'high'
                  ? 'bg-red-100 text-red-800'
                  : rec.priority === 'medium'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-green-100 text-green-800'
              }`}>
                {rec.priority}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="font-medium mb-4">Implementation Progress</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Recommendations Implemented</span>
            <span>
              {recommendations.filter(r => r.implemented).length} / {recommendations.length}
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-black rounded-full"
              style={{
                width: `${(recommendations.filter(r => r.implemented).length / recommendations.length) * 100}%`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}