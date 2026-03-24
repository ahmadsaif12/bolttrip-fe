"use client";

import { Search, Bell } from "lucide-react";
import dashboardData from "@/data/dashboard.json";

export default function AdminHeader() {
  const { user } = dashboardData.admin;

  return (
    <header className="flex items-center justify-between px-10 py-10 bg-transparent sticky top-0 z-40">
      {/* Welcome Message */}
      <div className="flex items-center gap-4 bg-white/60 backdrop-blur-xl px-8 py-4 rounded-[28px] shadow-sm border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-gray-100 transition-all cursor-default group">
        <span className="text-3xl group-hover:rotate-12 transition-transform">👏</span>
        <div>
           <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-0.5">Welcome Back</p>
           <h1 className="text-xl font-black text-[#0b3155]">Hello, Mr. {user.name}</h1>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-8">
        <div className="relative group">
          <input
            type="text"
            placeholder="Search for everything..."
            className="w-80 bg-white/60 backdrop-blur-xl border border-gray-100 rounded-[28px] py-4 pl-14 pr-6 text-xs font-black focus:ring-4 focus:ring-[#0b3155]/5 focus:bg-white transition-all outline-none"
          />
          <Search size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#0b3155] transition-colors" />
        </div>

        <button className="relative p-4 bg-white/60 backdrop-blur-xl border border-gray-100 rounded-2xl text-gray-400 hover:bg-white hover:shadow-2xl hover:shadow-gray-100 transition-all group">
          <Bell size={20} className="group-hover:rotate-12 transition-transform" />
          <span className="absolute top-4 right-4 w-2.5 h-2.5 bg-[#FF6D38] border-2 border-white rounded-full"></span>
        </button>

        <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-2xl shadow-gray-200 group cursor-pointer hover:scale-110 transition-transform">
          <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
}
