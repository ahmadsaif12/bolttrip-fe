"use client";

import Link from "next/link";
import { 
  LayoutDashboard, Package, Calendar, Users, Map, 
  Image as ImageIcon, MessageSquare, BookOpen, Trophy, 
  LifeBuoy, Settings, LogOut 
} from "lucide-react";
import { usePathname } from "next/navigation";

const primaryItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard/admin" },
  { icon: Package, label: "Packages", href: "/dashboard/admin/packages" },
  { icon: Calendar, label: "Bookings", href: "/dashboard/admin/bookings" },
  { icon: Calendar, label: "Calendar", href: "/dashboard/admin/calendar" },
  { icon: Users, label: "Travelers", href: "/dashboard/admin/travelers" },
  { icon: Map, label: "Guides", href: "/dashboard/admin/guides" },
  { icon: ImageIcon, label: "Gallery", href: "/dashboard/admin/gallery" },
  { icon: MessageSquare, label: "Feedback", href: "/dashboard/admin/feedback" },
];

const secondaryItems = [
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
  const safePathname = pathname || "";

  const linkClass = (isActive: boolean) =>
    `flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-colors ${
      isActive ? "bg-white text-[#0b3155] shadow-sm" : "text-white/90 hover:bg-white/10"
    }`;

  const iconClass = (isActive: boolean) =>
    `${isActive ? "text-[#0b3155]" : "text-white/90"} transition-colors shrink-0`;

  return (
    <aside
      className="w-56 bg-[#005c97] flex flex-col h-screen fixed left-0 top-0 z-50"
      suppressHydrationWarning
    >
      <div className="p-6 pb-5">
        <Link href="/" className="text-2xl font-black tracking-tight text-white">
          BOLTTrip
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto no-scrollbar">
        {primaryItems.map((item) => {
          const isActive = safePathname === item.href;
          return (
            <Link key={item.label} href={item.href} className={linkClass(isActive)}>
              <item.icon size={18} className={iconClass(isActive)} />
              <span className="text-[13px] font-semibold">{item.label}</span>
            </Link>
          );
        })}

        <div className="pt-4">
          <div className="h-px bg-white/15 my-3" />
          {secondaryItems.map((item) => {
            const isActive = safePathname === item.href;
            return (
              <Link key={item.label} href={item.href} className={linkClass(isActive)}>
                <item.icon size={18} className={iconClass(isActive)} />
                <span className="text-[13px] font-semibold">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t border-white/10 space-y-1">
        {bottomItems.map((item) => {
          const isActive = safePathname === item.href;
          return (
            <Link key={item.label} href={item.href} className={linkClass(isActive)}>
              <item.icon size={18} className={iconClass(isActive)} />
              <span className="text-[13px] font-semibold">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
