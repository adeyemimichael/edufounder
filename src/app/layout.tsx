import type { Metadata } from "next";
import './globals.css'; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
<<<<<<< HEAD
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
=======
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { registerServiceWorker } from "@/lib/serviceWorker";
>>>>>>> 8cdc669686965ceac5ad1d2c04696bbf4d278aa7

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
<<<<<<< HEAD
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
=======
      <body className="">
        <CustomCursor />
        <ScrollToTop />
        <Navbar />  
        <main>{children}</main>
        <Footer />
>>>>>>> 8cdc669686965ceac5ad1d2c04696bbf4d278aa7
      </body>
    </html>
  );
}