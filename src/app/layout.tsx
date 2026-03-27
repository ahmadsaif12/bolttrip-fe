import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers/Providers"; 
import AppChrome from "@/components/layout/AppChrome";

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
    <html lang="en" className="h-full">
      <body className="flex min-h-screen flex-col bg-white">
        <Providers> 
          <AppChrome>{children}</AppChrome>
        </Providers>
      </body>
    </html>
  );
}
