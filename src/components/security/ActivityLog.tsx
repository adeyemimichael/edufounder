"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ActivityEntry {
  id: string;
  action: string;
  timestamp: string;
  details: string;
  ipAddress: string;
  device: string;
  status: 'success' | 'warning' | 'error';
}

export default function ActivityLog() {
  const [activities] = useState<ActivityEntry[]>([
    {
      id: '1',
      action: 'Login',
      timestamp: '2024-02-20T10:30:00',
      details: 'Successful login from Chrome browser',
      ipAddress: '192.168.1.1',
      device: 'Windows PC',
      status: 'success'
    },
    {
      id: '2',
      action: 'File Download',
      timestamp: '2024-02-20T11:15:00',
      details: 'Downloaded study materials',
      ipAddress: '192.168.1.1',
      device: 'Windows PC',
      status: 'success'
    },
    {
      id: '3',
      action: 'Failed Login Attempt',
      timestamp: '2024-02-19T15:45:00',
      details: 'Invalid credentials',
      ipAddress: '192.168.1.100',
      device: 'Unknown',
      status: 'error'
    }
  ]);

  const [filter, setFilter] = useState('all');

  const filteredActivities = activities.filter(activity => {
    if (filter === 'success') return activity.status === 'success';
    if (filter === 'warning') return activity.status === 'warning';
    if (filter === 'error') return activity.status === 'error';
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Activity Log</h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="all">All Activities</option>
          <option value="success">Success</option>
          <option value="warning">Warnings</option>
          <option value="error">Errors</option>
        </select>
      </div>

      <div className="space-y-4">
        {filteredActivities.map((activity) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-4 rounded-lg border"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center">
                  <span className={`w-2 h-2 rounded-full mr-2 ${
                    activity.status === 'success' ? 'bg-green-500' :
                    activity.status === 'warning' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`} />
                  <h3 className="font-medium">{activity.action}</h3>
                </div>
                <p className="text-sm text-gray-500 mt-1">{activity.details}</p>
                <div className="flex space-x-4 mt-2 text-sm text-gray-500">
                  <span>{activity.device}</span>
                  <span>{activity.ipAddress}</span>
                </div>
              </div>
              <span className="text-sm text-gray-500">
                {new Date(activity.timestamp).toLocaleString()}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-gray-500">
          Activity logs are retained for 30 days. Export logs for longer retention.
        </p>
        <button className="mt-2 text-sm text-blue-600 hover:text-blue-800">
          Export Activity Log
        </button>
      </div>
    </div>
  );
}