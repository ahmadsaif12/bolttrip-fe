import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers/Providers"; 
import AppChrome from "@/components/layout/AppChrome";

export const metadata: Metadata = {
  title: "BOLTTrip",
  description: "Explore Your Dream Destinations",
};

import Script from "next/script";

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
        <Script
          src="https://khalti.s3.amazonaws.com/KPG/dist/2020.12.17.0.0.0/khalti-checkout.iffe.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
