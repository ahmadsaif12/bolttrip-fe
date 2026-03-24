import React from "react";
import OpsSidebar from "@/components/dashboard/OpsSidebar";
import OpsHeader from "@/components/dashboard/OpsHeader";
import OpsOverview from "@/components/dashboard/OpsOverview";
import RoomsStatus from "@/components/dashboard/RoomsStatus";
import { Info, User, Calendar } from "lucide-react";

export const metadata = {
  title: "Hotel Operations Dashboard | BOLTTrip",
  description: "Operational management for hotel properties.",
};

export default function OperationsDashboardPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <OpsSidebar />
      
      <main className="pl-64">
        <OpsHeader />
        
        <div className="p-10">
          <OpsOverview />
          <RoomsStatus />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Room Status Detail Cards */}
            <div className="lg:col-span-2 bg-white p-10 rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500">
              <h3 className="text-2xl font-black text-[#005c97] mb-10">Room status</h3>
              <div className="grid grid-cols-2 gap-16">
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 font-black uppercase text-[10px] tracking-[0.2em]">Occupied rooms</span>
                    <span className="text-3xl font-black text-[#005c97] tabular-nums">104</span>
                  </div>
                  <div className="space-y-6 pl-6 border-l-4 border-gray-50">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-gray-500">Clean</span>
                      <span className="text-lg font-black text-[#005c97]">90</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-gray-500">Dirty</span>
                      <span className="text-lg font-black text-red-400">4</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-gray-500">Inspected</span>
                      <span className="text-lg font-black text-[#005c97]">60</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 font-black uppercase text-[10px] tracking-[0.2em]">Available rooms</span>
                    <span className="text-3xl font-black text-[#005c97] tabular-nums">20</span>
                  </div>
                  <div className="space-y-6 pl-6 border-l-4 border-gray-50">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-gray-500">Clean</span>
                      <span className="text-lg font-black text-[#005c97]">30</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-gray-500">Dirty</span>
                      <span className="text-lg font-black text-orange-400">19</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-gray-500">Inspected</span>
                      <span className="text-lg font-black text-[#005c97]">30</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floor Status Chart Mockup */}
            <div className="bg-white p-10 rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500">
              <h3 className="w-full text-2xl font-black text-[#005c97] mb-10">Floor status</h3>
              <div className="relative w-52 h-52 flex items-center justify-center mb-10">
                 <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f8fafc" strokeWidth="12" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#005c97" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset={251.2 * 0.2} strokeLinecap="round" className="drop-shadow-sm" />
                 </svg>
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-black text-[#005c97]">80%</span>
                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest mt-1">Status</span>
                 </div>
              </div>
              <div className="w-full space-y-4">
                 <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.1em]">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-[#005c97]"></div>
                      <span className="text-gray-600">Competed</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="w-3 h-3 rounded-full bg-gray-100"></div>
                       <span className="text-gray-300">Target</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Occupancy Stats Bar Chart Mockup */}
            <div className="lg:col-span-2 bg-white p-10 rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500">
               <div className="flex items-center justify-between mb-10">
                  <h3 className="text-2xl font-black text-[#005c97]">Occupancy Statistics</h3>
                  <button className="bg-gray-50 border border-gray-100 text-[10px] font-black text-gray-400 px-6 py-2.5 rounded-xl flex items-center gap-3 uppercase tracking-widest hover:bg-white hover:shadow-sm transition-all">
                     <Calendar size={14} />
                     Monthly
                  </button>
               </div>
               <div className="flex items-end justify-between h-56 pt-6 px-4">
                  {[40, 65, 45, 85, 55, 95, 75, 80, 50, 70, 85, 60].map((h, i) => (
                    <div key={i} className="w-5 bg-[#005c97]/10 rounded-full h-full relative group/bar cursor-pointer">
                      <div 
                        className="absolute bottom-0 w-full bg-[#005c97] rounded-full transition-all duration-700 group-hover/bar:bg-[#FF6D38] group-hover/bar:shadow-lg group-hover/bar:shadow-orange-200" 
                        style={{ height: `${h}%` }}
                      >
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#005c97] text-white text-[10px] font-black px-2 py-1 rounded-lg opacity-0 group-hover/bar:opacity-100 transition-opacity">
                          {h}%
                        </div>
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Customers Feedback */}
            <div className="bg-white p-10 rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden relative">
              <h3 className="text-2xl font-black text-[#005c97] mb-10">Customer Reviews</h3>
              <div className="space-y-8">
                {[
                  { name: "Aruna", room: "A201", text: "Food could be better.", status: "Negative" },
                  { name: "Santosh", room: "B105", text: "Excellent service!", status: "Positive" },
                  { name: "Bibek", room: "C302", text: "View is amazing.", status: "Positive" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 p-6 rounded-[32px] bg-gray-50/50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all group/rev">
                    <div className="w-14 h-14 rounded-2xl bg-[#005c97] flex items-center justify-center text-white group-hover/rev:rotate-6 transition-all shadow-lg shadow-blue-900/10">
                       <User size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-base font-black text-[#005c97]">{item.name}</p>
                        <span className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter ${
                          item.status === "Positive" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-3">{item.room}</p>
                      <p className="text-xs text-gray-500 font-medium italic leading-relaxed">"{item.text}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
