"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';
import { 
  HeartIcon, 
  BarChartIcon, 
  LightningBoltIcon, 
  UploadIcon, 
  ArrowLeftIcon, 
  FileTextIcon 
} from '@radix-ui/react-icons';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: string;
  action: () => void;
}

export default function CoursePredictorPage() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showInitialView, setShowInitialView] = useState(true);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickActions: QuickAction[] = [
    {
      id: 'passion',
      title: "Start from your passion",
      description: "Explore courses based on your interests",
      icon: "heart",
      action: () => handleQuickAction("I'd like to explore courses based on my passions and interests")
    },
    {
      id: 'grades',
      title: "Your best grades",
      description: "Find courses matching your strengths",
      icon: "chart",
      action: () => handleQuickAction("I want to find courses that match my best academic performance")
    },
    {
      id: 'suggestions',
      title: "Get suggestions",
      description: "Receive personalized recommendations",
      icon: "lightbulb",
      action: () => handleQuickAction("Please give me personalized course suggestions")
    }
  ];

  const handleQuickAction = (message: string) => {
    setShowInitialView(false);
    sendMessage(message);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setShowInitialView(false);
      sendMessage(`I've uploaded my academic results: ${file.name}. Please analyze them and provide course recommendations.`);
    }
  };

  const resetToStart = () => {
    setShowInitialView(true);
    setMessages([]);
    setUploadedFile(null);
    setInputValue('');
  };

  const renderIcon = (iconType: string, className: string = "w-6 h-6") => {
    switch (iconType) {
      case 'heart':
        return <HeartIcon className={className} />;
      case 'chart':
        return <BarChartIcon className={className} />;
      case 'lightbulb':
        return <LightningBoltIcon className={className} />;
      case 'upload':
        return <UploadIcon className={className} />;
      case 'back':
        return <ArrowLeftIcon className={className} />;
      case 'file':
        return <FileTextIcon className={className} />;
      default:
        return null;
    }
  };

  const sendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(content);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userMessage: string): string => {
    const responses = {
      passion: "That's wonderful! Understanding your passions is the first step to finding the right course. Could you tell me more about what subjects or activities make you feel most excited and engaged? For example, do you enjoy creative work, problem-solving, working with people, or perhaps scientific research?",
      grades: "Great approach! Your academic strengths can definitely guide us toward suitable courses. Could you share which subjects you've performed best in? Also, what grade level are you currently at, and what are your strongest subject areas?",
      suggestions: "I'd be happy to provide personalized suggestions! To give you the most relevant recommendations, I'll need to understand you better. Could you share: 1) Your current academic level, 2) Your strongest subjects, 3) What you're passionate about, and 4) Any career goals you have in mind?",
      default: "I understand you're looking for course guidance. I'm here to help you find the perfect educational path! Whether you want to explore based on your passions, academic strengths, or get general suggestions, I'm here to provide personalized advice. What would you like to focus on first?"
    };

    if (userMessage.toLowerCase().includes('passion')) return responses.passion;
    if (userMessage.toLowerCase().includes('grade') || userMessage.toLowerCase().includes('academic')) return responses.grades;
    if (userMessage.toLowerCase().includes('suggestion') || userMessage.toLowerCase().includes('recommend')) return responses.suggestions;
    return responses.default;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      if (showInitialView) setShowInitialView(false);
      sendMessage(inputValue);
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const userName = user ? `${user.firstName} ${user.lastName}`.trim() || 'there' : 'there';

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      
      {/* Chat Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-semibold text-sm">AI</span>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white">Course Advisor</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Your personal education guide</p>
            </div>
          </div>
          
          {!showInitialView && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={resetToStart}
              className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              {renderIcon('back', 'w-4 h-4')}
              <span>Start Over</span>
            </motion.button>
          )}
        </div>
      </div>

      {/* Chat Content */}
      <div className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          {showInitialView ? (
            <motion.div
              key="initial"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center h-full p-8"
            >
              {/* Greeting Section */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🎓</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {getGreeting()}, {userName}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                  I'm here for any counsel you need regarding your educational journey. 
                  Let's find the perfect course that aligns with your goals and aspirations.
                </p>
              </div>

              {/* Quick Action Cards */}
              <div className="grid md:grid-cols-3 gap-4 max-w-3xl w-full mb-6">
                {quickActions.map((action, index) => (
                  <motion.button
                    key={action.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={action.action}
                    className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group hover:scale-105"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg mb-3 mx-auto group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                      {renderIcon(action.icon, "w-5 h-5 text-blue-600 dark:text-blue-400")}
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {action.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">
                      {action.description}
                    </p>
                  </motion.button>
                ))}
              </div>

              {/* Upload Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full max-w-md"
              >
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Or upload your academic results</p>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full bg-gray-50 dark:bg-gray-700 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-6 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center space-y-2">
                    {renderIcon('upload', "w-8 h-8 text-gray-400 group-hover:text-blue-500 transition-colors")}
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      Upload Results
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      PDF, Image, or Document
                    </span>
                  </div>
                </button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col h-full"
            >
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 rounded-xl">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-3 max-w-3xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      {/* Avatar */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.type === 'user' 
                          ? 'bg-blue-600' 
                          : 'bg-gradient-to-r from-green-500 to-blue-600'
                      }`}>
                        {message.type === 'user' ? (
                          <span className="text-white text-sm font-semibold">
                            {userName.charAt(0).toUpperCase()}
                          </span>
                        ) : (
                          <span className="text-white text-sm">👨‍🏫</span>
                        )}
                      </div>
                      
                      {/* Message Bubble */}
                      <div className={`px-4 py-3 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700'
                      }`}>
                        <p className="text-sm leading-relaxed">{message.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-start space-x-3 max-w-3xl">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center">
                        <span className="text-white text-sm">👨‍🏫</span>
                      </div>
                      <div className="bg-white dark:bg-gray-800 px-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-700">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Area */}
      <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4">
        <form onSubmit={handleSubmit} className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me about courses, career paths, or anything else..."
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
          <motion.button
            type="submit"
            disabled={!inputValue.trim()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <span className="text-white text-xl">↑</span>
          </motion.button>
        </form>
      </div>
    </div>
  );
}