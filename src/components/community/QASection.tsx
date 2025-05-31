"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Question {
  id: string;
  title: string;
  content: string;
  author: string;
  timestamp: string;
  answers: number;
  solved: boolean;
}

export default function QASection() {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: '1',
      title: 'How to solve quadratic equations?',
      content: 'I\'m struggling with the quadratic formula. Can someone explain step by step?',
      author: 'Math Student',
      timestamp: '2024-02-19T09:00:00Z',
      answers: 2,
      solved: false
    }
  ]);

  const [filter, setFilter] = useState('all');

  const filteredQuestions = questions.filter(question => {
    if (filter === 'solved') return question.solved;
    if (filter === 'unsolved') return !question.solved;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Q&A Platform</h2>
        <button className="bg-black text-white px-4 py-2 rounded-md">
          Ask Question
        </button>
      </div>

      <div className="flex space-x-4 mb-6">
        {['all', 'solved', 'unsolved'].map((option) => (
          <button
            key={option}
            onClick={() => setFilter(option)}
            className={`px-4 py-2 rounded-md ${
              filter === option
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredQuestions.map((question) => (
          <motion.div
            key={question.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg border"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-medium mb-2">{question.title}</h3>
                <p className="text-gray-600 mb-4">{question.content}</p>
              </div>
              {question.solved && (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Solved
                </span>
              )}
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <span>{question.author}</span>
                <span>•</span>
                <span>{new Date(question.timestamp).toLocaleDateString()}</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <span>✍️</span>
                <span>{question.answers} answers</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}