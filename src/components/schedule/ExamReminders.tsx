"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Exam {
  id: string;
  subject: string;
  date: string;
  time: string;
  location: string;
  type: 'quiz' | 'midterm' | 'final';
  notifyBefore: number;
}

export default function ExamReminders() {
  const [exams, setExams] = useState<Exam[]>([
    {
      id: '1',
      subject: 'Mathematics',
      date: '2024-03-15',
      time: '10:00',
      location: 'Main Hall',
      type: 'midterm',
      notifyBefore: 24
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newExam, setNewExam] = useState<Partial<Exam>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newExam.subject && newExam.date) {
      setExams([...exams, { ...newExam, id: Date.now().toString() } as Exam]);
      setNewExam({});
      setShowForm(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Exam Reminders</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          {showForm ? 'Cancel' : 'Add Exam'}
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
              value={newExam.subject || ''}
              onChange={(e) => setNewExam({ ...newExam, subject: e.target.value })}
            />
            <input
              type="date"
              className="p-2 border rounded"
              value={newExam.date || ''}
              onChange={(e) => setNewExam({ ...newExam, date: e.target.value })}
            />
            <input
              type="time"
              className="p-2 border rounded"
              value={newExam.time || ''}
              onChange={(e) => setNewExam({ ...newExam, time: e.target.value })}
            />
            <input
              type="text"
              placeholder="Location"
              className="p-2 border rounded"
              value={newExam.location || ''}
              onChange={(e) => setNewExam({ ...newExam, location: e.target.value })}
            />
            <select
              className="p-2 border rounded"
              value={newExam.type || ''}
              onChange={(e) => setNewExam({ ...newExam, type: e.target.value as Exam['type'] })}
            >
              <option value="">Select Type</option>
              <option value="quiz">Quiz</option>
              <option value="midterm">Midterm</option>
              <option value="final">Final</option>
            </select>
            <select
              className="p-2 border rounded"
              value={newExam.notifyBefore || ''}
              onChange={(e) => setNewExam({ ...newExam, notifyBefore: parseInt(e.target.value) })}
            >
              <option value="">Notification</option>
              <option value="24">24 hours before</option>
              <option value="48">48 hours before</option>
              <option value="72">72 hours before</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 bg-black text-white px-4 py-2 rounded-md w-full"
          >
            Add Exam
          </button>
        </motion.form>
      )}

      <div className="grid gap-4">
        {exams.map((exam) => (
          <motion.div
            key={exam.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg border"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{exam.subject}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(exam.date).toLocaleDateString()} at {exam.time}
                </p>
                <p className="text-sm text-gray-500">
                  Location: {exam.location}
                </p>
              </div>
              <span className={`px-2 py-1 rounded text-sm ${
                exam.type === 'final' ? 'bg-red-100 text-red-800' :
                exam.type === 'midterm' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {exam.type.charAt(0).toUpperCase() + exam.type.slice(1)}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Notification: {exam.notifyBefore} hours before
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}