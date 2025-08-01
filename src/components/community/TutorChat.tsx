"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  isCurrentUser: boolean;
}

export default function TutorChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'John Doe',
      content: 'Hello! How can I help you with your studies today?',
      timestamp: new Date().toISOString(),
      isCurrentUser: false
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      sender: 'You',
      content: newMessage,
      timestamp: new Date().toISOString(),
      isCurrentUser: true
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="h-[600px] flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.isCurrentUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-4 ${
                message.isCurrentUser
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-black'
              }`}
            >
              <div className="font-medium mb-1">{message.sender}</div>
              <div>{message.content}</div>
              <div className="text-xs mt-2">
                {new Date(message.timestamp).toLocaleTimeString()}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <form onSubmit={sendMessage} className="p-4 border-t">
        <div className="flex space-x-4">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border rounded-lg"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-lg"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}