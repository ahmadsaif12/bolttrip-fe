"use client";

import Link from "next/link";
import { Search, User, ShoppingCart, Heart } from "lucide-react";

const navLinks = [
  { name: "Flights", href: "/flights" },
  { name: "Hotels", href: "/hotels" },
  { name: "Packages", href: "/packages" },
  { name: "Guides", href: "/guides" },
  { name: "Planner", href: "/planner" },
  { name: "Activities", href: "/activities" },
];

export default function Navbar() {
  return (
    <header className="w-full flex flex-col sticky top-0 z-50 shadow-md">
      <div className="bg-[#004E89] text-white px-8 py-4 flex items-center justify-between gap-8">
        <Link href="/" className="text-3xl font-black tracking-tighter shrink-0">
          BoltTrip
        </Link>

        <div className="hidden md:flex flex-1 max-w-2xl relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300" strokeWidth={2.5} />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#003d6b] border border-[#005ba0] rounded-full py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
          />
        </div>

        <div className="flex items-center gap-8 shrink-0">
          <button className="flex flex-col items-center hover:text-blue-200 transition-colors">
            <User size={20} strokeWidth={2.5} />
            <span className="text-[10px] uppercase font-bold mt-1 tracking-wider">Profile</span>
          </button>
          <button className="flex flex-col items-center hover:text-blue-200 transition-colors">
            <ShoppingCart size={20} strokeWidth={2.5} />
            <span className="text-[10px] uppercase font-bold mt-1 tracking-wider">Cart</span>
          </button>
          <button className="flex flex-col items-center hover:text-blue-200 transition-colors">
            <Heart size={20} strokeWidth={2.5} />
            <span className="text-[10px] uppercase font-bold mt-1 tracking-wider">Wishlist</span>
          </button>
        </div>
      </div>

      <nav className="bg-[#004E89] border-t border-[#005ba0] px-8 py-3 overflow-x-auto no-scrollbar">
        <div className="flex justify-center items-center gap-10 min-w-max mx-auto">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-white text-sm font-bold hover:text-blue-200">
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}