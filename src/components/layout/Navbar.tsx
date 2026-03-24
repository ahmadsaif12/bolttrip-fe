"use client";

import Link from "next/link";
import { Search, ShoppingCart, Heart } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";

export default function Navbar() {
  return (
    <header className="w-full bg-[#004E89] sticky top-0 z-[100] shadow-md">
      <div className="px-8 py-4 flex items-center justify-between gap-8 max-w-[1920px] mx-auto">
        <Link href="/" className="text-3xl font-black tracking-tighter shrink-0 text-white no-underline">
          BoltTrip
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-2xl relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" strokeWidth={2} />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#003d6b] border border-[#005ba0] rounded-full py-2.5 pl-12 pr-4 text-sm text-white outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
          />
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-8 shrink-0 text-white">
          <ProfileDropdown />
          
          <div className="flex flex-col items-center cursor-pointer hover:text-blue-200 transition-colors">
            <ShoppingCart size={20} strokeWidth={2} />
            <span className="text-[10px] uppercase font-bold mt-1 tracking-wider">Cart</span>
          </div>
          
          <div className="flex flex-col items-center cursor-pointer hover:text-blue-200 transition-colors">
            <Heart size={20} strokeWidth={2} />
            <span className="text-[10px] uppercase font-bold mt-1 tracking-wider">Wishlist</span>
          </div>
        </div>
      </div>
      
      <nav className="bg-[#004E89] border-t border-[#005ba0] px-8 py-3">
        <div className="flex items-center justify-center gap-10 text-white overflow-x-auto no-scrollbar">
          {["Flights", "Hotels", "Packages", "Guides", "Planner", "Activities"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="text-sm font-bold hover:text-blue-200 no-underline text-white whitespace-nowrap">
              {item}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}