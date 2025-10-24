"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const menuItems = [
  { name: 'Overview', path: '/dashboard', icon: '📊' },
  { name: 'Course Predictor', path: '/dashboard/course-predictor', icon: '🎯' },
  { name: 'Tutorial Centers', path: '/dashboard/tutorial-centers', icon: '🏫' },
  { name: 'Settings', path: '/dashboard/settings', icon: '⚙️' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-screen p-6 transition-colors duration-300">
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          
          return (
            <Link key={item.path} href={item.path}>
              <motion.div
                whileHover={{ x: 5 }}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                  isActive
                    ? 'bg-blue-600 dark:bg-blue-700 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <span>{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}