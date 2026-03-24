"use client";

import { MoreVertical } from "lucide-react";
import dashboardData from "@/data/dashboard.json";

export default function RoomsStatus() {
  const { rooms } = dashboardData.operations;

  return (
    <div className="mb-12">
      <h3 className="text-xl font-black text-[#005c97] mb-8">Rooms</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {rooms.map((room, i) => (
          <div key={i} className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
            <div className="flex items-center justify-between mb-6">
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                room.deals !== "0 Deals" ? "bg-green-50 text-green-600" : "bg-gray-50 text-gray-400"
              }`}>
                {room.deals}
              </span>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical size={16} />
              </button>
            </div>
            
            <h4 className="text-sm font-bold text-gray-500 mb-4">{room.type}</h4>
            <div className="flex items-end gap-2 mb-6 text-[#004E89]">
              <span className="text-2xl font-black">{room.count.split('/')[0]}</span>
              <span className="text-gray-400 font-bold mb-1">/{room.count.split('/')[1]}</span>
            </div>

            <p className="text-xl font-black text-[#005c97]">
              {room.price} <span className="text-gray-400 text-xs font-bold uppercase tracking-widest ml-1">/ day</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
