"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Class {
  id: string;
  subject: string;
  time: string;
  duration: number;
  room: string;
  instructor: string;
  recurring: boolean;
}

export default function ClassScheduler() {
  const [classes, setClasses] = useState<Class[]>([
    {
      id: '1',
      subject: 'Mathematics',
      time: '09:00',
      duration: 60,
      room: 'Room 101',
      instructor: 'Dr. Smith',
      recurring: true
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newClass, setNewClass] = useState<Partial<Class>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newClass.subject && newClass.time) {
      setClasses([...classes, { ...newClass, id: Date.now().toString() } as Class]);
      setNewClass({});
      setShowForm(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Class Schedule</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          {showForm ? 'Cancel' : 'Add Class'}
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
              value={newClass.subject || ''}
              onChange={(e) => setNewClass({ ...newClass, subject: e.target.value })}
            />
            <input
              type="time"
              className="p-2 border rounded"
              value={newClass.time || ''}
              onChange={(e) => setNewClass({ ...newClass, time: e.target.value })}
            />
            <input
              type="number"
              placeholder="Duration (minutes)"
              className="p-2 border rounded"
              value={newClass.duration || ''}
              onChange={(e) => setNewClass({ ...newClass, duration: parseInt(e.target.value) })}
            />
            <input
              type="text"
              placeholder="Room"
              className="p-2 border rounded"
              value={newClass.room || ''}
              onChange={(e) => setNewClass({ ...newClass, room: e.target.value })}
            />
            <input
              type="text"
              placeholder="Instructor"
              className="p-2 border rounded"
              value={newClass.instructor || ''}
              onChange={(e) => setNewClass({ ...newClass, instructor: e.target.value })}
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={newClass.recurring || false}
                onChange={(e) => setNewClass({ ...newClass, recurring: e.target.checked })}
              />
              <label>Recurring weekly</label>
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 bg-black text-white px-4 py-2 rounded-md w-full"
          >
            Add Class
          </button>
        </motion.form>
      )}

      <div className="grid gap-4">
        {classes.map((cls) => (
          <motion.div
            key={cls.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg border"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{cls.subject}</h3>
                <p className="text-sm text-gray-500">
                  {cls.time} • {cls.duration} minutes • {cls.room}
                </p>
                <p className="text-sm text-gray-500">
                  Instructor: {cls.instructor}
                </p>
              </div>
              <span className={`px-2 py-1 rounded text-sm ${
                cls.recurring ? 'bg-green-100 text-green-800' : 'bg-gray-100'
              }`}>
                {cls.recurring ? 'Weekly' : 'One-time'}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}