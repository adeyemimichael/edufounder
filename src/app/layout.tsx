import type { Metadata, Viewport } from "next";
import './globals.css';
import { AuthProvider } from "@/hooks/useAuth";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { registerServiceWorker } from "@/lib/serviceWorker";
import ConditionalLayout from "@/components/ConditionalLayout";

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
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </AuthProvider>
      </body>
    </html>
  );
}