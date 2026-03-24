import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BOLTTrip",
  description: "Explore Your Dream Destinations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="flex min-h-screen flex-col bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="bg-[#F8F9FA] border-t py-12 mt-20">
          <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Leadmark Info Sys. All Rights Reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}