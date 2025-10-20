// "use client";
// import { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useAICompanion } from '@/hooks/useAICompanion';

// export default function AICompanion() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [inputMessage, setInputMessage] = useState('');
//   const messagesEndRef = useRef<HTMLDivElement>(null);
  
//   const {
//     messages,
//     isTyping,
//     isListening,
//     sendMessage,
//     startVoiceRecognition,
//     clearConversation
//   } = useAICompanion();

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const handleSendMessage = async () => {
//     if (!inputMessage.trim()) return;
    
//     await sendMessage(inputMessage);
//     setInputMessage('');
//   };



//   const handleSuggestionClick = (suggestion: string) => {
//     setInputMessage(suggestion);
//   };

//   return (
//     <>
//       {/* AI Companion Toggle Button */}
//       <motion.button
//         onClick={() => setIsOpen(!isOpen)}
//         className={`fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg z-50 flex items-center justify-center transition-all ${
//           isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'
//         }`}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         {isOpen ? (
//           <span className="text-white text-2xl">×</span>
//         ) : (
//           <div className="text-white">
//             <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
//             </svg>
//           </div>
//         )}
//       </motion.button>

//       {/* AI Companion Chat Window */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 100, scale: 0.8 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 100, scale: 0.8 }}
//             className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-40 flex flex-col border"
//           >
//             {/* Header */}
//             <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl">
//               <div className="flex items-center space-x-3">
//                 <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
//                   <span className="text-lg">🤖</span>
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="font-semibold">EduBot</h3>
//                   <p className="text-sm opacity-90">Your Career Companion</p>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//                   <button
//                     onClick={clearConversation}
//                     className="p-1 hover:bg-white/20 rounded-full transition-colors"
//                     title="Clear conversation"
//                   >
//                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Messages */}
//             <div className="flex-1 overflow-y-auto p-4 space-y-4">
//               {messages.map((message) => (
//                 <motion.div
//                   key={message.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
//                 >
//                   <div className="flex flex-col">
//                     <div
//                       className={`max-w-[80%] p-3 rounded-2xl ${
//                         message.type === 'user'
//                           ? 'bg-blue-600 text-white ml-auto'
//                           : 'bg-gray-100 text-gray-800'
//                       }`}
//                     >
//                       <p className="text-sm">{message.content}</p>
//                       <p className="text-xs opacity-70 mt-1">
//                         {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                       </p>
//                     </div>
                    
//                     {/* Suggestions for AI messages */}
//                     {message.type === 'ai' && message.suggestions && message.suggestions.length > 0 && (
//                       <div className="mt-2 flex flex-wrap gap-2">
//                         {message.suggestions.map((suggestion, index) => (
//                           <button
//                             key={index}
//                             onClick={() => handleSuggestionClick(suggestion)}
//                             className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors border border-blue-200"
//                           >
//                             {suggestion}
//                           </button>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </motion.div>
//               ))}
              
//               {isTyping && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="flex justify-start"
//                 >
//                   <div className="bg-gray-100 p-3 rounded-2xl">
//                     <div className="flex space-x-1">
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//               <div ref={messagesEndRef} />
//             </div>

//             {/* Input */}
//             <div className="p-4 border-t">
//               <div className="flex space-x-2">
//                 <input
//                   type="text"
//                   value={inputMessage}
//                   onChange={(e) => setInputMessage(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//                   placeholder="Ask me anything about your career..."
//                   className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <button
//                   onClick={startVoiceRecognition}
//                   disabled={isListening}
//                   className={`p-2 rounded-full transition ${
//                     isListening 
//                       ? 'bg-red-500 text-white animate-pulse' 
//                       : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
//                   }`}
//                 >
//                   🎤
//                 </button>
//                 <button
//                   onClick={handleSendMessage}
//                   disabled={!inputMessage.trim()}
//                   className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }