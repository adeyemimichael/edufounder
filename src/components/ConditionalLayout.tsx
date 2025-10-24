"use client";

import { usePathname } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import AICompanion from "@/components/AICompanion";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  
  // Check if current path is dashboard or any dashboard sub-route
  const isDashboard = pathname?.startsWith('/dashboard');
  
  // If it's a dashboard route, render children without navbar/footer
  if (isDashboard) {
    return <>{children}</>;
  }
  
  // For all other routes, render with navbar and footer
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      {/* <AICompanion /> */}
    </>
  );
}