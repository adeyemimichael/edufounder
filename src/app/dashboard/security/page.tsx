"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import ActivityLog from '@/components/security/ActivityLog';
import DeviceManager from '@/components/security/DeviceManager';
import DataEncryption from '@/components/security/DataEncryption';

export default function SecurityPage() {
  const [activeTab, setActiveTab] = useState('activity');

  const tabs = [
    { id: 'activity', label: 'Activity Log', icon: '📋' },
    { id: 'devices', label: 'Device Management', icon: '📱' },
    { id: 'encryption', label: 'Data Encryption', icon: '🔒' }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Security & Management</h1>

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
            {activeTab === 'activity' && <ActivityLog />}
            {activeTab === 'devices' && <DeviceManager />}
            {activeTab === 'encryption' && <DataEncryption />}
          </motion.div>
        </div>
      </div>
    </div>
  );
}