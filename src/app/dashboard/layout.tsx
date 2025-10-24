
// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return <>{children}</>;

import { ReactNode } from 'react';
import DashboardHeader from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <DashboardHeader />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            {children}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}