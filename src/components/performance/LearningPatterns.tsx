"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface LearningPattern {
  category: string;
  metrics: {
    name: string;
    value: number;
    trend: 'up' | 'down' | 'stable';
  }[];
}

export default function LearningPatterns() {
  const [patterns] = useState<LearningPattern[]>([
    {
      category: 'Study Habits',
      metrics: [
        { name: 'Average Study Duration', value: 2.5, trend: 'up' },
        { name: 'Study Sessions per Week', value: 8, trend: 'stable' },
        { name: 'Break Frequency', value: 4, trend: 'down' }
      ]
    },
    {
      category: 'Learning Style',
      metrics: [
        { name: 'Visual Learning', value: 75, trend: 'up' },
        { name: 'Auditory Learning', value: 45, trend: 'stable' },
        { name: 'Kinesthetic Learning', value: 60, trend: 'up' }
      ]
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="grid gap-6">
        {patterns.map((pattern) => (
          <motion.div
            key={pattern.category}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg border"
          >
            <h3 className="text-lg font-medium mb-4">{pattern.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pattern.metrics.map((metric) => (
                <div
                  key={metric.name}
                  className="bg-gray-50 p-4 rounded-lg"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500">{metric.name}</p>
                      <p className="text-2xl font-semibold mt-1">
                        {metric.value}
                        {pattern.category === 'Study Habits' && metric.name === 'Average Study Duration'
                          ? ' hrs'
                          : pattern.category === 'Learning Style'
                          ? '%'
                          : ''}
                      </p>
                    </div>
                    <span className={`${
                      metric.trend === 'up'
                        ? 'text-green-500'
                        : metric.trend === 'down'
                        ? 'text-red-500'
                        : 'text-gray-500'
                    }`}>
                      {metric.trend === 'up' ? '↑' : metric.trend === 'down' ? '↓' : '→'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-medium mb-4">Recommendations</h3>
        <ul className="space-y-2">
          <li className="flex items-center text-sm text-gray-600">
            <span className="mr-2">💡</span>
            Consider increasing break frequency during long study sessions
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <span className="mr-2">💡</span>
            Your visual learning effectiveness has improved - continue using diagrams and charts
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <span className="mr-2">💡</span>
            Try incorporating more hands-on exercises to boost kinesthetic learning
          </li>
        </ul>
      </div>
    </div>
  );
}