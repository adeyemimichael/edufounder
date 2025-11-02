"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { DashboardIcon, TargetIcon, HomeIcon, GearIcon } from '@radix-ui/react-icons';

const menuItems = [
  { name: 'Overview', path: '/dashboard', icon: 'dashboard' },
  { name: 'Course Predictor', path: '/dashboard/course-predictor', icon: 'target' },
  { name: 'Tutorial Centers', path: '/dashboard/tutorial-centers', icon: 'home' },
  { name: 'Settings', path: '/dashboard/settings', icon: 'gear' },
];

const renderIcon = (iconType: string, className: string = "w-5 h-5") => {
  switch (iconType) {
    case 'dashboard':
      return <DashboardIcon className={className} />;
    case 'target':
      return <TargetIcon className={className} />;
    case 'home':
      return <HomeIcon className={className} />;
    case 'gear':
      return <GearIcon className={className} />;
    default:
      return null;
  }
};

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
                {renderIcon(item.icon, `w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`)}
                <span className="font-medium">{item.name}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}