"use client";

import { MoreHorizontal } from "lucide-react";
import dashboardData from "@/data/dashboard.json";

export default function RevenueOverview() {
  const { revenueData } = dashboardData.admin;
  
  // Simple calculation for SVG path
  const maxRevenue = Math.max(...revenueData.map(d => d.revenue));
  const height = 150;
  const width = 600;
  const points = revenueData.map((d, i) => {
    const x = (i / (revenueData.length - 1)) * width;
    const y = height - (d.revenue / maxRevenue) * height;
    return `${x},${y}`;
  }).join(" ");

  return (
    <div className="flex-[1.5] bg-white p-8 rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col relative group hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h3 className="text-2xl font-black text-[#0b3155]">Revenue Overview</h3>
          <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1 text-[#FF6D38]">Jan 2025 - Aug 2025</p>
        </div>
        <div className="relative">
          <select className="bg-gray-50 border border-gray-100 rounded-xl text-xs font-black text-gray-500 px-6 py-2.5 focus:ring-2 focus:ring-[#0b3155]/10 cursor-pointer appearance-none pr-10">
            <option>Last 8 Months</option>
            <option>Last Year</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <MoreHorizontal size={14} className="text-gray-400 rotate-90" />
          </div>
        </div>
      </div>

      <div className="relative h-48 flex items-end justify-between px-2">
        {/* SVG Chart */}
        <svg viewBox={`0 0 ${width} ${height + 20}`} className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d={`M 0,${height} ${points.replace(/,/g, ' ')} L ${width},${height} Z`}
            fill="url(#gradient)"
          />
          <polyline
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={points}
          />
          {/* Points */}
          {revenueData.map((d, i) => {
            const x = (i / (revenueData.length - 1)) * width;
            const y = height - (d.revenue / maxRevenue) * height;
            return (
              <circle key={i} cx={x} cy={y} r="5" fill="white" stroke="#8b5cf6" strokeWidth="2" className="drop-shadow-sm" />
            );
          })}
        </svg>
      </div>

      {/* X Axis */}
      <div className="flex justify-between mt-4 px-2">
        {revenueData.map((d) => (
          <span key={d.month} className="text-[10px] font-black text-gray-400 uppercase">{d.month}</span>
        ))}
      </div>

      {/* Floating Info */}
      <div className="absolute top-[35%] left-[30%] bg-white p-3 rounded-2xl shadow-2xl border border-gray-100 z-10 hidden group-hover:block transition-all">
        <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Total Revenue</p>
        <p className="text-lg font-black text-[#0b3155]">$76,483</p>
      </div>
    </div>
  );
}
