"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import PerformanceTrends from '@/components/performance/PerformanceTrends';
import LearningPatterns from '@/components/performance/LearningPatterns';
import Recommendations from '@/components/performance/Recommendations';
import TimeTracking from '@/components/performance/TimeTracking';

export default function PerformancePage() {
  const [activeTab, setActiveTab] = useState('trends');

  const tabs = [
    { id: 'trends', label: 'Performance Trends', icon: '📈' },
    { id: 'patterns', label: 'Learning Patterns', icon: '🧠' },
    { id: 'recommendations', label: 'Recommendations', icon: '💡' },
    { id: 'time', label: 'Time Tracking', icon: '⏱️' }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Performance Analytics</h1>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'trends' && <PerformanceTrends />}
            {activeTab === 'patterns' && <LearningPatterns />}
            {activeTab === 'recommendations' && <Recommendations />}
            {activeTab === 'time' && <TimeTracking />}
          </motion.div>
        </div>
      </div>
    </div>
  );
}