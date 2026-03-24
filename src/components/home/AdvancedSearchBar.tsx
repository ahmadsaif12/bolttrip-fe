"use client";

import { Calendar, Users, Briefcase, Search } from "lucide-react";
import { useState } from "react";
import { FlightsService } from "@/service/flights.service";
import { useMutation } from "@tanstack/react-query";

export default function AdvancedSearchBar() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [budget, setBudget] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [travelStyle, setTravelStyle] = useState("");

  const searchMutation = useMutation({
    mutationFn: (searchData: any) => FlightsService.searchFlights(searchData),
    onSuccess: (data) => {
      console.log("Search results:", data);
      // Handle navigation to search results page
    },
    onError: (error) => {
      console.error("Search failed:", error);
    }
  });

  const handleSearch = () => {
    searchMutation.mutate({
      destination,
      date,
      budget,
      groupSize,
      travelStyle
    });
  };

  return (
    <div className="max-w-[1000px] mx-auto px-6 -mt-10 relative z-30 mb-20">
      <div className="bg-white rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Where are you going? */}
        <div className="flex-1 w-full relative">
          <input
            type="text"
            placeholder="Where are you going?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full h-14 pl-6 pr-4 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 text-sm font-medium text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Choose Date */}
        <div className="flex-[0.8] w-full relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800">
            <Calendar size={18} />
          </div>
          <input
            type="text"
            placeholder="Choose Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 text-sm font-medium text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Budget */}
        <div className="flex-[0.8] w-full relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800 font-bold">
            $
          </div>
          <input
            type="text"
            placeholder="Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full h-14 pl-10 pr-4 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 text-sm font-medium text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Group Size */}
        <div className="flex-[0.8] w-full relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800">
            <Users size={18} />
          </div>
          <input
            type="text"
            placeholder="Group Size"
            value={groupSize}
            onChange={(e) => setGroupSize(e.target.value)}
            className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 text-sm font-medium text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Travel Style */}
        <div className="flex-[0.8] w-full relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800">
            <Briefcase size={18} />
          </div>
          <input
            type="text"
            placeholder="Travel Style"
            value={travelStyle}
            onChange={(e) => setTravelStyle(e.target.value)}
            className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 text-sm font-medium text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Search Button */}
        <button 
          onClick={handleSearch}
          disabled={searchMutation.isPending}
          className="flex-shrink-0 bg-[#FF6D38] text-white h-14 w-14 rounded-xl flex items-center justify-center hover:bg-[#e05b2a] transition-colors shadow-md disabled:opacity-70"
        >
          {searchMutation.isPending ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <Search size={22} />
          )}
        </button>

      </div>
    </div>
  );
}
