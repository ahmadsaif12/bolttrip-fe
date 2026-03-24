"use client";

import Link from "next/link";
import { Search, User, ShoppingCart, Heart, LogOut } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import navbarData from "@/data/navbar.json";

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const navLinks = [
    { href: "/flights", label: "Flights" },
    { href: "/hotels", label: "Hotels" },
    { href: "/packages", label: "Packages" },
    { href: "/guides", label: "Guides" },
    { href: "/planner", label: "Planner" },
    { href: "/activities", label: "Activities" },
  ];

  return (
    <header className="w-full">
      {/* Top Navbar */}
      <div className="bg-[#0b3155] text-white px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-3xl font-black tracking-tight flex items-center gap-1">
          <span className="text-white">BOLT</span>
          <span className="text-white">Trip</span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8 relative hidden md:block">
          <div className="relative flex items-center w-full h-11 rounded-full bg-transparent border border-gray-400 focus-within:border-white overflow-hidden transition-colors">
            <div className="pl-4 pr-3 text-gray-400">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search Destinations, Hotels..."
              className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none h-full pr-4 text-sm"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          {session ? (
            <>
              {/* Authenticated State */}
              <button className="flex flex-col items-center gap-1 text-[#FF6D38] hover:text-[#e05b2a] transition-colors">
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#FF6D38]">
                  <img 
                    src={navbarData.profileImage} 
                    alt={navbarData.profileName} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[10px] font-medium">{session?.user?.name || "Profile"}</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-white hover:text-gray-300 transition-colors">
                <Heart size={20} />
                <span className="text-[10px] font-medium">Wishlist</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-white hover:text-gray-300 transition-colors">
                <ShoppingCart size={20} />
                <span className="text-[10px] font-medium">Cart</span>
              </button>
              <button 
                onClick={() => signOut({ callbackUrl: '/' })}
                className="flex flex-col items-center gap-1 text-white hover:text-red-400 transition-colors"
              >
                <LogOut size={20} />
                <span className="text-[10px] font-medium">Log out</span>
              </button>
            </>
          ) : (
            <>
              {/* Unauthenticated State */}
              <div className="flex items-center gap-4">
                <button className="flex flex-col items-center gap-1 text-white hover:text-gray-300 transition-colors">
                  <Heart size={20} />
                  <span className="text-[10px] font-medium">Wishlist</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-white hover:text-gray-300 transition-colors">
                  <ShoppingCart size={20} />
                  <span className="text-[10px] font-medium">Cart</span>
                </button>
                <Link href="/login" className="flex flex-col items-center gap-1 text-white hover:text-gray-300 transition-colors">
                  <User size={20} />
                  <span className="text-[10px] font-medium">Sign in</span>
                </Link>
                <Link href="/register" className="bg-[#FF6D38] text-white text-sm font-bold px-4 py-2 flex items-center justify-center rounded-lg hover:bg-[#e05b2a] transition-colors shadow-md">
                  Register
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Sub Navbar */}
      <div className="bg-[#005c97] text-white overflow-x-auto no-scrollbar border-t border-[#0b3155]/20 shadow-sm">
        <ul className="flex items-center justify-center min-w-max px-6 py-4 gap-12 text-sm font-semibold">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <li key={link.href} className="relative group">
                <Link 
                  href={link.href} 
                  className={`transition-colors flex items-center gap-2 ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                >
                  {link.label}
                </Link>
                {/* Active Indicator Underline */}
                {isActive && (
                  <div className="absolute -bottom-4 left-0 w-full h-[3px] bg-[#FF6D38] rounded-t-md shrink-0"></div>
                )}
                {/* Hover Underline Effect */}
                {!isActive && (
                  <div className="absolute -bottom-4 left-1/2 w-0 h-[3px] bg-white rounded-t-md shrink-0 transition-all duration-300 group-hover:left-0 group-hover:w-full opacity-50"></div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}