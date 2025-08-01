"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface CourseEvent {
  id: string;
  title: string;
  date: string;
  type: 'class' | 'assignment' | 'exam';
  completed: boolean;
}

export default function Timeline() {
  const [events, setEvents] = useState<CourseEvent[]>([
    {
      id: '1',
      title: 'Introduction to Programming',
      date: '2024-02-20',
      type: 'class',
      completed: true
    },
    {
      id: '2',
      title: 'First Assignment Due',
      date: '2024-02-25',
      type: 'assignment',
      completed: false
    },
    {
      id: '3',
      title: 'Midterm Exam',
      date: '2024-03-15',
      type: 'exam',
      completed: false
    }
  ]);

  const toggleEventCompletion = (eventId: string) => {
    setEvents(events.map(event => 
      event.id === eventId ? { ...event, completed: !event.completed } : event
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Course Timeline</h2>
        <button className="bg-black text-white px-4 py-2 rounded-md">
          Add Event
        </button>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center space-x-4 p-4 rounded-lg border ${
              event.completed ? 'bg-gray-50' : 'bg-white'
            }`}
          >
            <input
              type="checkbox"
              checked={event.completed}
              onChange={() => toggleEventCompletion(event.id)}
              className="h-5 w-5 rounded border-gray-300"
            />
            <div className="flex-1">
              <h3 className="font-medium">{event.title}</h3>
              <p className="text-sm text-gray-500">
                {new Date(event.date).toLocaleDateString()}
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100">
              {event.type}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}