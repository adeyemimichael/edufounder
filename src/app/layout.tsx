import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/hooks/useAuth";
import AICompanion from "@/components/AICompanion";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "EduFounder",
  description: "Your education companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className=""
      >
        <AuthProvider>
           <Navbar />  
           <main>{children}</main>
           <Footer />
           <AICompanion />
        </AuthProvider>
      </body>
    </html>
  );
}






