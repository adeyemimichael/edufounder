import type { Metadata, Viewport } from "next";
import './globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/hooks/useAuth";
import AICompanion from "@/components/AICompanion";

import ScrollToTop from "@/components/ui/ScrollToTop";
import { registerServiceWorker } from "@/lib/serviceWorker";

export const metadata: Metadata = {
  title: "EduFounder",
  description: "Your education companion",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "EduFounder"
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (typeof window !== 'undefined') {
    registerServiceWorker();
  }

  return (
    <html lang="en">
      <body className="">
        <AuthProvider>
          <ScrollToTop />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <AICompanion />
        </AuthProvider>
      </body>
    </html>
  );
}