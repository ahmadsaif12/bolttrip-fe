"use client";

import Link from "next/link";
import { 
  LayoutDashboard, ClipboardList, Users, DoorOpen, 
  Tag, BarChart3, ChevronRight 
} from "lucide-react";
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard/operations" },
  { icon: ClipboardList, label: "Front desk", href: "/dashboard/front-desk" },
  { icon: Users, label: "Guest", href: "/dashboard/guest" },
  { icon: DoorOpen, label: "Rooms", href: "/dashboard/rooms" },
  { icon: Tag, label: "Deal", href: "/dashboard/deal" },
  { icon: BarChart3, label: "Rate", href: "/dashboard/rate" },
];

export default function OpsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col h-screen fixed left-0 top-0 z-50 shadow-[10px_0_40px_rgba(0,0,0,0.01)]">
      <div className="p-8 mb-4">
        <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-1">
          <span className="text-[#005c97]">BOLT</span>
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
              className={`flex items-center justify-between px-5 py-3.5 rounded-2xl transition-all group ${
                isActive 
                  ? "bg-[#005c97] text-white shadow-xl shadow-blue-900/10" 
                  : "text-gray-400 hover:bg-gray-50 hover:text-[#005c97]"
              }`}
            >
              <div className="flex items-center gap-4">
                <item.icon size={18} className={`${isActive ? "text-[#FF6D38]" : "text-gray-300 group-hover:text-[#005c97]"} transition-colors`} />
                <span className="text-xs font-black uppercase tracking-[0.1em]">{item.label}</span>
              </div>
              {isActive && (
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF6D38] animate-pulse"></div>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-8 border-t border-gray-50">
        <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50">
           <p className="text-[10px] font-black text-[#005c97] uppercase tracking-widest mb-1 text-center">Hotel Management</p>
           <p className="text-[8px] font-bold text-gray-400 uppercase tracking-tighter text-center">Version 1.0.4 Premium</p>
        </div>
      </div>
    </aside>
  );
}
