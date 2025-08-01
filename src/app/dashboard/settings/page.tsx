<<<<<<< HEAD
export default function Settings() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
      <p className="text-gray-600">Settings page coming soon...</p>
=======
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Accounts from './Accounts';
import Security from './Security';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('accounts');

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            {['accounts', 'security'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
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
            {activeTab === 'accounts' ? <Accounts /> : <Security />}
          </motion.div>
        </div>
      </div>
>>>>>>> 8cdc669686965ceac5ad1d2c04696bbf4d278aa7
    </div>
  );
}