"use client";

import Link from "next/link";
import { 
  LayoutDashboard, Package, Calendar, Users, Map, 
  Image as ImageIcon, MessageSquare, BookOpen, Trophy, 
  LifeBuoy, Settings, LogOut 
} from "lucide-react";
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard/admin" },
  { icon: Package, label: "Packages", href: "/dashboard/admin/packages" },
  { icon: Calendar, label: "Bookings", href: "/dashboard/admin/bookings" },
  { icon: Calendar, label: "Calendar", href: "/dashboard/admin/calendar" },
  { icon: Users, label: "Travelers", href: "/dashboard/admin/travelers" },
  { icon: Map, label: "Guides", href: "/dashboard/admin/guides" },
  { icon: ImageIcon, label: "Gallery", href: "/dashboard/admin/gallery" },
  { icon: MessageSquare, label: "Feedback", href: "/dashboard/admin/feedback" },
  { icon: BookOpen, label: "Travel Stories", href: "/dashboard/admin/stories" },
  { icon: Trophy, label: "Achievements", href: "/dashboard/admin/achievements" },
];

const bottomItems = [
  { icon: LifeBuoy, label: "Support", href: "/dashboard/support" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  { icon: LogOut, label: "Logout", href: "/logout" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col h-screen fixed left-0 top-0 z-50 shadow-[10px_0_40px_rgba(0,0,0,0.01)]">
      <div className="p-8 mb-4">
        <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-1">
          <span className="text-[#0b3155]">BOLT</span>
          <span className="text-[#FF6D38]">Trip</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto no-scrollbar">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all group ${
                isActive 
                  ? "bg-[#0b3155] text-white shadow-xl shadow-blue-900/20" 
                  : "text-gray-400 hover:bg-gray-50 hover:text-[#0b3155]"
              }`}
            >
              <item.icon size={18} className={`${isActive ? "text-[#FF6D38]" : "text-gray-300 group-hover:text-[#0b3155]"} transition-colors`} />
              <span className="text-xs font-black uppercase tracking-[0.1em]">{item.label}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#FF6D38] animate-pulse"></div>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-50 space-y-1.5">
        {bottomItems.map((item) => {
           const isActive = pathname === item.href;
           return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all group ${
                isActive 
                  ? "bg-[#0b3155] text-white shadow-xl shadow-blue-900/20" 
                  : "text-gray-400 hover:bg-gray-50 hover:text-[#0b3155]"
              }`}
            >
              <item.icon size={18} className={`${isActive ? "text-[#FF6D38]" : "text-gray-300 group-hover:text-[#0b3155]"} transition-colors`} />
              <span className="text-xs font-black uppercase tracking-[0.1em]">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
