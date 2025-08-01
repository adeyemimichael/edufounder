"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface StudySession {
  id: string;
  subject: string;
  date: string;
  startTime: string;
  duration: number;
  topics: string[];
  completed: boolean;
}

export default function StudyPlanner() {
  const [sessions, setSessions] = useState<StudySession[]>([
    {
      id: '1',
      subject: 'Physics',
      date: '2024-02-20',
      startTime: '14:00',
      duration: 120,
      topics: ['Kinematics', 'Forces'],
      completed: false
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newSession, setNewSession] = useState<Partial<StudySession>>({
    topics: []
  });
  const [newTopic, setNewTopic] = useState('');

  const handleAddTopic = () => {
    if (newTopic.trim()) {
      setNewSession({
        ...newSession,
        topics: [...(newSession.topics || []), newTopic.trim()]
      });
      setNewTopic('');
    }
  };

  const handleRemoveTopic = (index: number) => {
    setNewSession({
      ...newSession,
      topics: (newSession.topics || []).filter((_, i) => i !== index)
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSession.subject && newSession.date) {
      setSessions([
        ...sessions,
        { ...newSession, id: Date.now().toString(), completed: false } as StudySession
      ]);
      setNewSession({ topics: [] });
      setShowForm(false);
    }
  };

  const toggleCompletion = (id: string) => {
    setSessions(sessions.map(session =>
      session.id === id ? { ...session, completed: !session.completed } : session
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Study Planner</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          {showForm ? 'Cancel' : 'Plan Session'}
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
              type="date"
              className="p-2 border rounded"
              value={newSession.date || ''}
              onChange={(e) => setNewSession({ ...newSession, date: e.target.value })}
            />
            <input
              type="time"
              className="p-2 border rounded"
              value={newSession.startTime || ''}
              onChange={(e) => setNewSession({ ...newSession, startTime: e.target.value })}
            />
            <input
              type="number"
              placeholder="Duration (minutes)"
              className="p-2 border rounded"
              value={newSession.duration || ''}
              onChange={(e) => setNewSession({ ...newSession, duration: parseInt(e.target.value) })}
            />
          </div>

          <div className="mt-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add topic"
                className="flex-1 p-2 border rounded"
                value={newTopic}
                onChange={(e) => setNewTopic(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTopic())}
              />
              <button
                type="button"
                onClick={handleAddTopic}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Add
              </button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {newSession.topics?.map((topic, index) => (
                <span
                  key={index}
                  className="bg-gray-200 px-2 py-1 rounded-full text-sm flex items-center"
                >
                  {topic}
                  <button
                    type="button"
                    onClick={() => handleRemoveTopic(index)}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 bg-black text-white px-4 py-2 rounded-md w-full"
          >
            Create Study Session
          </button>
        </motion.form>
      )}

      <div className="grid gap-4">
        {sessions.map((session) => (
          <motion.div
            key={session.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`bg-white p-6 rounded-lg border ${
              session.completed ? 'bg-gray-50' : ''
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={session.completed}
                    onChange={() => toggleCompletion(session.id)}
                    className="mr-3 h-5 w-5"
                  />
                  <div>
                    <h3 className="font-medium">{session.subject}</h3>
                    <p className="text-sm text-gray-500">
                      {new Date(session.date).toLocaleDateString()} at {session.startTime}
                    </p>
                    <p className="text-sm text-gray-500">
                      Duration: {session.duration} minutes
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {session.topics.map((topic, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 px-2 py-1 rounded-full text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}