import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CourseSilla",
  description: "Find courses on courseSilla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-900 min-h-screen flex flex-col`}
      >
        {/* Header */}
        <header className="w-full bg-white shadow-md py-4 px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold tracking-tight">My Courses</h1>
    
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 px-6 py-8 max-w-5xl mx-auto w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full bg-white border-t py-4 mt-auto text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Shivani • All rights reserved
        </footer>
      </body>
    </html>
  );
}
