"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AdminRightSidebar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 3, 1)); // April 2025

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const days = Array.from({ length: daysInMonth(currentDate.getFullYear(), currentDate.getMonth()) }, (_, i) => i + 1);
  const emptySlots = Array.from({ length: startDay }, (_, i) => i);

  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <aside className="w-80 bg-white border-l border-gray-100 p-8 h-screen fixed right-0 top-0 overflow-y-auto hidden xl:block shadow-[-20px_0_60px_rgba(0,0,0,0.02)]">
      {/* Calendar Section */}
      <div className="mb-12 bg-[#0b3155] p-8 rounded-[40px] shadow-2xl shadow-blue-900/20 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
        
        <div className="flex items-center justify-between mb-8 relative z-10">
          <h3 className="text-lg font-black text-white">{monthName} {year}</h3>
          <div className="flex gap-2">
            <button 
              onClick={handlePrevMonth}
              className="p-2 bg-white/10 backdrop-blur-md rounded-xl text-white hover:bg-white hover:text-[#0b3155] transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={handleNextMonth}
              className="p-2 bg-white/10 backdrop-blur-md rounded-xl text-white hover:bg-white hover:text-[#0b3155] transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-1 mb-6 text-[9px] font-black text-white/40 uppercase text-center tracking-[0.2em] relative z-10">
          <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
        </div>
        
        <div className="grid grid-cols-7 gap-1 relative z-10">
          {emptySlots.map((i) => <div key={`empty-${i}`}></div>)}
          {days.map((day) => {
            const isToday = day === 13 && currentDate.getMonth() === 3; // April 13 highlight
            const isBooked = [13, 14, 15, 20, 21, 22, 27, 28, 29].includes(day);
            
            return (
              <div 
                key={day} 
                className={`h-9 flex items-center justify-center rounded-xl text-[11px] font-black cursor-pointer transition-all hover:scale-110 active:scale-90 ${
                  isToday ? "bg-[#FF6D38] text-white shadow-lg shadow-orange-500/40 rotate-12" : 
                  isBooked ? "bg-white/20 text-white" : "text-white/70 hover:bg-white/10"
                }`}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>

      {/* Feedback Section */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-lg font-black text-[#0b3155]">Recent Feedback</h3>
          <button className="text-[10px] font-bold text-[#005c97] uppercase tracking-widest border-b-2 border-[#005c97]">View All</button>
        </div>
        <div className="space-y-6">
          {[
            { location: "London, UK", rating: 5, time: "2h ago", text: "Amazing experience!" },
            { location: "Paris, France", rating: 4, time: "5h ago", text: "Great tour guide." },
            { location: "Bali, Indonesia", rating: 5, time: "1d ago", text: "Perfect holiday." },
            { location: "Rome, Italy", rating: 5, time: "2d ago", text: "Will visit again!" }
          ].map((item, i) => (
            <div key={i} className="group p-4 rounded-[24px] bg-white hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all cursor-pointer">
              <div className="flex gap-4 items-center mb-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm flex-shrink-0 border-2 border-white group-hover:scale-110 transition-transform">
                  <img 
                    src={`https://i.pravatar.cc/100?u=${i}`} 
                    alt="User" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-black text-gray-800">{item.location}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex text-orange-400">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <span key={j} className={`text-[10px] ${j < item.rating ? "text-orange-400" : "text-gray-200"}`}>★</span>
                      ))}
                    </div>
                    <span className="text-[9px] font-bold text-gray-300 uppercase">{item.time}</span>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-gray-500 font-medium line-clamp-1 group-hover:line-clamp-none transition-all">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
