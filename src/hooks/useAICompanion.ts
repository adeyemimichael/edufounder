import { useState, useCallback } from 'react';
import { useAuth } from './useAuth';
import { aiCompanionService } from '@/services/aiService';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

interface AICompanionState {
  messages: Message[];
  isTyping: boolean;
  isListening: boolean;
  conversationContext: string[];
}

export function useAICompanion() {
  const { user } = useAuth();
  const [state, setState] = useState<AICompanionState>({
    messages: [
      {
        id: '1',
        type: 'ai',
        content: `Hi${user?.firstName ? ` ${user.firstName}` : ''}! 👋 I'm EduBot, your personal career companion. I'm here to help you navigate your educational and career journey with personalized guidance. How can I assist you today?`,
        timestamp: new Date(),
        suggestions: [
          "Help me plan my career path",
          "Review my profile and give feedback",
          "What skills should I develop?",
          "Help me prepare for interviews"
        ]
      }
    ],
    isTyping: false,
    isListening: false,
    conversationContext: []
  });

  const sendMessage = useCallback(async (userMessage: string) => {
    if (!userMessage.trim()) return;

    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: userMessage,
      timestamp: new Date()
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMsg],
      isTyping: true,
      conversationContext: [...prev.conversationContext, userMessage]
    }));

    try {
      // Generate AI response
      const response = await aiCompanionService.generateResponse(userMessage, {
        user,
        previousMessages: state.conversationContext,
        userProfile: null // TODO: Add user profile data
      });

      // Add AI response
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: response.content,
        timestamp: new Date(),
        suggestions: response.suggestions
      };

      setState(prev => ({
        ...prev,
        messages: [...prev.messages, aiMsg],
        isTyping: false
      }));

    } catch (error) {
      console.error('AI response error:', error);
      
      // Fallback response
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: "I apologize, but I'm having trouble processing that right now. Could you try rephrasing your question?",
        timestamp: new Date()
      };

      setState(prev => ({
        ...prev,
        messages: [...prev.messages, errorMsg],
        isTyping: false
      }));
    }
  }, [user, state.conversationContext]);

  const startVoiceRecognition = useCallback(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Speech recognition not supported in this browser');
      return;
    }

    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    
    recognition.onstart = () => {
      setState(prev => ({ ...prev, isListening: true }));
    };
    
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      sendMessage(transcript);
      setState(prev => ({ ...prev, isListening: false }));
    };
    
    recognition.onerror = () => {
      setState(prev => ({ ...prev, isListening: false }));
    };
    
    recognition.onend = () => {
      setState(prev => ({ ...prev, isListening: false }));
    };
    
    recognition.start();
  }, [sendMessage]);

  const clearConversation = useCallback(() => {
    setState({
      messages: [
        {
          id: '1',
          type: 'ai',
          content: `Hi${user?.firstName ? ` ${user.firstName}` : ''}! 👋 I'm EduBot, your personal career companion. How can I help you today?`,
          timestamp: new Date(),
          suggestions: [
            "Help me plan my career path",
            "Review my profile and give feedback",
            "What skills should I develop?",
            "Help me prepare for interviews"
          ]
        }
      ],
      isTyping: false,
      isListening: false,
      conversationContext: []
    });
  }, [user]);

  return {
    messages: state.messages,
    isTyping: state.isTyping,
    isListening: state.isListening,
    sendMessage,
    startVoiceRecognition,
    clearConversation
  };
}