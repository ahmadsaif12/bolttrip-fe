"use client";

import { MoreHorizontal } from "lucide-react";
import dashboardData from "@/data/dashboard.json";

export default function TripOverview() {
  const { tripOverview } = dashboardData.admin;

  return (
    <div className="flex-1 bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 flex flex-col items-center">
      <div className="w-full flex items-center justify-between mb-8">
        <h3 className="text-xl font-black text-[#0b3155]">Trip Overview</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Donut Chart Mockup */}
      <div className="relative w-48 h-48 flex items-center justify-center mb-10">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f3f4f6" strokeWidth="12" />
          <circle 
            cx="50" cy="50" r="40" fill="transparent" 
            stroke="#a78bfa" strokeWidth="12" 
            strokeDasharray="251.2" 
            strokeDashoffset={251.2 * 0.33} 
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-3xl font-black text-[#0b3155]">{tripOverview.total}</p>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total Trips</p>
        </div>
      </div>

      {/* Segments */}
      <div className="w-full grid grid-cols-3 gap-2">
        {tripOverview.segments.map((segment, i) => (
          <div key={i} className="flex flex-col items-center text-center p-3 rounded-2xl bg-gray-50/50">
            <span className="text-lg font-black text-[#0b3155]">{segment.value}</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{segment.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
