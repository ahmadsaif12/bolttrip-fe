"use client";

import { Search, Bell } from "lucide-react";
import dashboardData from "@/data/dashboard.json";

export default function AdminHeader() {
  const { user } = dashboardData.admin;

  return (
    <header className="px-4 sm:px-6 lg:px-10 pt-6 lg:pt-8 sticky top-0 z-40">
      <div className="bg-white/90 backdrop-blur-xl border border-gray-100 rounded-[28px] shadow-sm">
        <div className="flex items-center gap-4 px-6 sm:px-8 py-4">
          {/* Welcome */}
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-2xl">👋</span>
            <p className="text-sm sm:text-base font-black text-[#0b3155] truncate">
              Hello! Mr. {user.name}
            </p>
          </div>

          {/* Search */}
          <div className="flex-1 hidden md:flex justify-center">
            <div className="relative w-full max-w-md group">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-white border border-gray-200 rounded-2xl py-3 pl-10 pr-4 text-xs font-bold text-gray-600 placeholder:text-gray-400 focus:ring-4 focus:ring-[#0b3155]/5 focus:border-[#0b3155]/20 transition-all outline-none"
              />
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#0b3155] transition-colors" />
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4 sm:gap-6 ml-auto">
            <button className="relative p-3 rounded-2xl text-gray-500 hover:bg-gray-50 transition-colors">
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-[#FF6D38] border-2 border-white rounded-full"></span>
            </button>

            <div className="hidden sm:block w-px h-8 bg-gray-200" />

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
              </div>
              <div className="hidden sm:block leading-tight">
                <p className="text-sm font-black text-[#0b3155]">{user.name}</p>
                <p className="text-[11px] font-bold text-gray-400">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
