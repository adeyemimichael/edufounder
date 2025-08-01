"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface TimeEntry {
  id: string;
  subject: string;
  duration: number;
  date: string;
  type: 'study' | 'practice' | 'revision';
}

export default function TimeTracking() {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([
    {
      id: '1',
      subject: 'Mathematics',
      duration: 120,
      date: '2024-02-20',
      type: 'study'
    },
    {
      id: '2',
      subject: 'Physics',
      duration: 90,
      date: '2024-02-20',
      type: 'practice'
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newEntry, setNewEntry] = useState<Partial<TimeEntry>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEntry.subject && newEntry.duration) {
      setTimeEntries([
        ...timeEntries,
        { ...newEntry, id: Date.now().toString(), date: new Date().toISOString().split('T')[0] } as TimeEntry
      ]);
      setNewEntry({});
      setShowForm(false);
    }
  };

  const totalTime = timeEntries.reduce((acc, entry) => acc + entry.duration, 0);
  const timeBySubject = timeEntries.reduce((acc, entry) => {
    acc[entry.subject] = (acc[entry.subject] || 0) + entry.duration;
    return acc;
  }, {} as Record<string, number>);

  const chartData = {
    labels: Object.keys(timeBySubject),
    datasets: [
      {
        data: Object.values(timeBySubject),
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Time Tracking</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          {showForm ? 'Cancel' : 'Log Time'}
        </button>
      </div>

      {showForm && (
        <motion.form
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-50 p-6 rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Subject"
              className="p-2 border rounded"
              value={newEntry.subject || ''}
              onChange={(e) => setNewEntry({ ...newEntry, subject: e.target.value })}
            />
            <input
              type="number"
              placeholder="Duration (minutes)"
              className="p-2 border rounded"
              value={newEntry.duration || ''}
              onChange={(e) => setNewEntry({ ...newEntry, duration: parseInt(e.target.value) })}
            />
            <select
              className="p-2 border rounded"
              value={newEntry.type || ''}
              onChange={(e) => setNewEntry({ ...newEntry, type: e.target.value as TimeEntry['type'] })}
            >
              <option value="">Select Type</option>
              <option value="study">Study</option>
              <option value="practice">Practice</option>
              <option value="revision">Revision</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 bg-black text-white px-4 py-2 rounded-md w-full"
          >
            Log Time
          </button>
        </motion.form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-medium mb-4">Time Distribution</h3>
          <div className="aspect-square">
            <Doughnut data={chartData} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-medium mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {timeEntries.map((entry) => (
              <div
                key={entry.id}
                className="flex justify-between items-center p-3 bg-gray-50 rounded"
              >
                <div>
                  <p className="font-medium">{entry.subject}</p>
                  <p className="text-sm text-gray-500">
                    {entry.type} • {entry.duration} minutes
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  {new Date(entry.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="font-medium mb-4">Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-500">Total Study Time</p>
            <p className="text-2xl font-semibold">{totalTime} minutes</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Most Studied Subject</p>
            <p className="text-2xl font-semibold">
              {Object.entries(timeBySubject).sort((a, b) => b[1] - a[1])[0]?.[0]}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Study Sessions</p>
            <p className="text-2xl font-semibold">{timeEntries.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}