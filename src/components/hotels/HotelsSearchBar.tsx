"use client";

import { MapPin, Calendar, Users, Search } from "lucide-react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { HotelsService } from "@/service/hotels.service";

export default function HotelsSearchBar() {
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [travelers, setTravelers] = useState("");

  const searchMutation = useMutation({
    mutationFn: (searchData: any) => HotelsService.getHotels(), // Fetch hotels with query
    onSuccess: (data) => console.log("Hotel search results:", data.data),
    onError: (error) => console.error("Hotel search failed:", error)
  });

  const handleSearch = () => {
    searchMutation.mutate({ destination, dates, travelers });
  };

  return (
    <div className="max-w-[1000px] mx-auto px-6 -mt-10 relative z-30 mb-20 bg-transparent">
      
      {/* Main Bar */}
      <div className="bg-white rounded-[32px] p-6 shadow-[0_10px_40px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Where To? */}
        <div className="flex-[1.2] w-full relative">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-800">
            <MapPin size={22} className="text-gray-900"/>
          </div>
          <input
            type="text"
            placeholder="Where To?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full h-[70px] pl-14 pr-4 rounded-2xl border border-orange-300 focus:outline-none focus:border-[#FF6D38] text-base font-bold text-gray-800 placeholder-gray-600 shadow-sm"
          />
        </div>

        {/* Dates */}
        <div className="flex-1 w-full relative">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-800">
            <Calendar size={22} className="text-gray-900"/>
          </div>
          <input
            type="text"
            placeholder="Dates"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
            className="w-full h-[70px] pl-14 pr-4 rounded-2xl border border-orange-300 focus:outline-none focus:border-[#FF6D38] text-base font-bold text-gray-800 placeholder-gray-600 shadow-sm"
          />
        </div>

        {/* Travelers */}
        <div className="flex-1 w-full relative">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-800">
            <Users size={22} className="text-gray-900"/>
          </div>
          <input
            type="text"
            placeholder="Travelers"
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
            className="w-full h-[70px] pl-14 pr-4 rounded-2xl border border-orange-300 focus:outline-none focus:border-[#FF6D38] text-base font-bold text-gray-800 placeholder-gray-600 shadow-sm"
          />
        </div>

        {/* Search Button */}
        <button 
          onClick={handleSearch}
          disabled={searchMutation.isPending}
          className="flex-shrink-0 bg-[#FF6D38] text-white h-[70px] px-10 rounded-2xl flex items-center justify-center hover:bg-[#e05b2a] transition-colors shadow-lg font-bold text-xl disabled:opacity-75"
        >
          {searchMutation.isPending ? "Searching..." : "Search"}
        </button>

      </div>
    </div>
  );
}
