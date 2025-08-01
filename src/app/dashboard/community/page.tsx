"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import TutorChat from '@/components/community/TutorChat';
import DiscussionForum from '@/components/community/DiscussionForum';
import QASection from '@/components/community/QASection';
import MentorConnect from '@/components/community/MentorConnect';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('chat');

  const tabs = [
    { id: 'chat', label: 'Tutorial Center Chat', icon: '💬' },
    { id: 'forum', label: 'Discussion Forum', icon: '👥' },
    { id: 'qa', label: 'Q&A Platform', icon: '❓' },
    { id: 'mentor', label: 'Find a Mentor', icon: '🎓' }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Community</h1>

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
            {activeTab === 'chat' && <TutorChat />}
            {activeTab === 'forum' && <DiscussionForum />}
            {activeTab === 'qa' && <QASection />}
            {activeTab === 'mentor' && <MentorConnect />}
          </motion.div>
        </div>
      </div>
    </div>
  );
}