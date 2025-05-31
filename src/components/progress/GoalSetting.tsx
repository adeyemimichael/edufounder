"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Goal {
  id: string;
  title: string;
  deadline: string;
  progress: number;
  priority: 'high' | 'medium' | 'low';
}

export default function GoalSetting() {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: '1',
      title: 'Complete Programming Fundamentals',
      deadline: '2024-03-30',
      progress: 60,
      priority: 'high'
    },
    {
      id: '2',
      title: 'Achieve 3.5 GPA this semester',
      deadline: '2024-06-15',
      progress: 75,
      priority: 'medium'
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Study Goals</h2>
        <button className="bg-black text-white px-4 py-2 rounded-md">
          Add Goal
        </button>
      </div>

      <div className="grid gap-4">
        {goals.map((goal) => (
          <motion.div
            key={goal.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg border"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-medium">{goal.title}</h3>
                <p className="text-sm text-gray-500">
                  Due: {new Date(goal.deadline).toLocaleDateString()}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  goal.priority === 'high'
                    ? 'bg-red-100 text-red-800'
                    : goal.priority === 'medium'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                }`}
              >
                {goal.priority}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{goal.progress}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-black rounded-full"
                  style={{ width: `${goal.progress}%` }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}