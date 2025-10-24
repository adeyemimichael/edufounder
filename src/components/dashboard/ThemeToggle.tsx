"use client";

import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Toggle Circle */}
      <motion.div
        className="w-4 h-4 bg-white dark:bg-gray-300 rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: theme === 'dark' ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        {/* Icon */}
        <span className="text-xs">
          {theme === 'dark' ? '🌙' : '☀️'}
        </span>
      </motion.div>

      {/* Background Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1 pointer-events-none">
        <span className="text-xs text-yellow-500 opacity-70">☀️</span>
        <span className="text-xs text-blue-400 opacity-70">🌙</span>
      </div>
    </motion.button>
  );
}