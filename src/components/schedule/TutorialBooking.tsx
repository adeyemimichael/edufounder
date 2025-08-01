"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface TutorialSession {
  id: string;
  subject: string;
  tutor: string;
  date: string;
  time: string;
  duration: number;
  mode: 'online' | 'in-person';
  status: 'pending' | 'confirmed' | 'completed';
}

export default function TutorialBooking() {
  const [sessions, setSessions] = useState<TutorialSession[]>([
    {
      id: '1',
      subject: 'Chemistry',
      tutor: 'Dr. Johnson',
      date: '2024-02-25',
      time: '15:00',
      duration: 60,
      mode: 'online',
      status: 'confirmed'
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newSession, setNewSession] = useState<Partial<TutorialSession>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSession.subject && newSession.date) {
      setSessions([
        ...sessions,
        { ...newSession, id: Date.now().toString(), status: 'pending' } as TutorialSession
      ]);
      setNewSession({});
      setShowForm(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Tutorial Booking</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          {showForm ? 'Cancel' : 'Book Tutorial'}
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
              value={newSession.subject || ''}
              onChange={(e) => setNewSession({ ...newSession, subject: e.target.value })}
            />
            <input
              type="text"
              placeholder="Tutor"
              className="p-2 border rounded"
              value={newSession.tutor || ''}
              onChange={(e) => setNewSession({ ...newSession, tutor: e.target.value })}
            />
            <input
              type="date"
              className="p-2 border rounded"
              value={newSession.date || ''}
              onChange={(e) => setNewSession({ ...newSession, date: e.target.value })}
            />
            <input
              type="time"
              className="p-2 border rounded"
              value={newSession.time || ''}
              onChange={(e) => setNewSession({ ...newSession, time: e.target.value })}
            />
            <input
              type="number"
              placeholder="Duration (minutes)"
              className="p-2 border rounded"
              value={newSession.duration || ''}
              onChange={(e) => setNewSession({ ...newSession, duration: parseInt(e.target.value) })}
            />
            <select
              className="p-2 border rounded"
              value={newSession.mode || ''}
              onChange={(e) => setNewSession({ ...newSession, mode: e.target.value as 'online' | 'in-person' })}
            >
              <option value="">Select Mode</option>
              <option value="online">Online</option>
              <option value="in-person">In-person</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 bg-black text-white px-4 py-2 rounded-md w-full"
          >
            Book Session
          </button>
        </motion.form>
      )}

      <div className="grid gap-4">
        {sessions.map((session) => (
          <motion.div
            key={session.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg border"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{session.subject}</h3>
                <p className="text-sm text-gray-500">
                  with {session.tutor}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(session.date).toLocaleDateString()} at {session.time}
                </p>
                <p className="text-sm text-gray-500">
                  Duration: {session.duration} minutes
                </p>
                <p className="text-sm text-gray-500">
                  Mode: {session.mode}
                </p>
              </div>
              <span className={`px-2 py-1 rounded text-sm ${
                session.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                session.status === 'completed' ? 'bg-gray-100 text-gray-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}