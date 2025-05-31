import type { Metadata } from "next";
import './globals.css'; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { registerServiceWorker } from "@/lib/serviceWorker";

export const metadata: Metadata = {
  title: "EduFounder",
  description: "Your education companion",
  manifest: "/manifest.json",
  themeColor: "#000000",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "EduFounder"
  },
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
        <CustomCursor />
        <ScrollToTop />
        <Navbar />  
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}