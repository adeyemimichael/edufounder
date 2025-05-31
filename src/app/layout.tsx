import type { Metadata } from "next";
import './globals.css'; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollToTop from "@/components/ui/ScrollToTop";

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