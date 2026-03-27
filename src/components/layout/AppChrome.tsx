"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  if (isDashboard) {
    return (
      <main className="flex-1" suppressHydrationWarning>
        {children}
      </main>
    );
  }

  return (
    <div suppressHydrationWarning className="contents">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
