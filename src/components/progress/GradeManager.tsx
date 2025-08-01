"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Grade {
  id: string;
  subject: string;
  score: number;
  maxScore: number;
  date: string;
}

export default function GradeManager() {
  const [grades, setGrades] = useState<Grade[]>([
    {
      id: '1',
      subject: 'Mathematics',
      score: 85,
      maxScore: 100,
      date: '2024-02-15'
    },
    {
      id: '2',
      subject: 'Physics',
      score: 92,
      maxScore: 100,
      date: '2024-02-18'
    }
  ]);

  const calculateGPA = () => {
    const totalScore = grades.reduce((acc, grade) => acc + (grade.score / grade.maxScore) * 4, 0);
    return (totalGPA / grades.length).toFixed(2);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Grade Management</h2>
        <button className="bg-black text-white px-4 py-2 rounded-md">
          Add Grade
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-4">Current GPA</h3>
          <div className="text-4xl font-bold">{calculateGPA()}</div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-4">Total Subjects</h3>
          <div className="text-4xl font-bold">{grades.length}</div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subject
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Score
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {grades.map((grade) => (
              <motion.tr
                key={grade.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <td className="px-6 py-4 whitespace-nowrap">{grade.subject}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {grade.score}/{grade.maxScore}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(grade.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}