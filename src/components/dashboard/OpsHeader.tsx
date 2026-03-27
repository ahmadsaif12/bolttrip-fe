"use client";

import { Search, Bell } from "lucide-react";
import dashboardData from "@/data/dashboard.json";

export default function OpsHeader() {
  const { user } = dashboardData.admin; // Reusing user for now

  return (
    <header className="flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 py-6 lg:py-10 bg-transparent sticky top-0 z-40">
      {/* Search Bar */}
      <div className="flex-1 max-w-xl relative group hidden md:block">
        <input
          type="text"
          placeholder="Search for rooms, guests or offers..."
          className="w-full bg-white/60 backdrop-blur-xl border border-gray-100 rounded-[28px] py-4 pl-14 pr-6 text-xs font-black focus:ring-4 focus:ring-[#005c97]/5 focus:bg-white transition-all outline-none"
        />
        <Search size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#005c97] transition-colors" />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3 sm:gap-6 lg:gap-8">
        <button className="bg-[#005c97] text-white px-5 sm:px-8 py-3.5 sm:py-4 rounded-[20px] sm:rounded-[24px] text-xs font-black uppercase tracking-widest shadow-xl shadow-blue-900/10 hover:shadow-2xl hover:scale-105 transition-all">
           New Booking
        </button>

        <button className="p-3.5 sm:p-4 bg-white/60 backdrop-blur-xl border border-gray-100 rounded-2xl text-gray-400 hover:bg-white hover:shadow-2xl hover:shadow-gray-100 transition-all group">
          <Bell size={20} className="group-hover:rotate-12 transition-transform" />
        </button>

        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border-2 border-white shadow-2xl shadow-gray-200 group cursor-pointer hover:scale-110 transition-transform flex-shrink-0">
          <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
}
