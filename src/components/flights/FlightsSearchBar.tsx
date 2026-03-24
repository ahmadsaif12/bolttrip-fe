"use client";

import { MapPin, Search, ArrowRightLeft } from "lucide-react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { FlightsService } from "@/service/flights.service";

export default function FlightsSearchBar() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [traveler, setTraveler] = useState("");
  const [activeTab, setActiveTab] = useState("Round Trip");

  const searchMutation = useMutation({
    mutationFn: (searchData: any) => FlightsService.searchFlights(searchData),
    onSuccess: (data) => console.log("Flight search results:", data),
    onError: (error) => console.error("Search failed:", error)
  });

  const handleSearch = () => {
    searchMutation.mutate({
      from, to, departureDate, returnDate, traveler, type: activeTab
    });
  };

  return (
    <div className="max-w-[1000px] mx-auto px-6 -mt-20 relative z-30 mb-20">
      
      {/* Tabs */}
      <div className="flex justify-center ml-24">
        <div className="bg-[#FF6D38] text-white flex rounded-t-3xl overflow-hidden shadow-lg">
          <button 
            onClick={() => setActiveTab("One Way")}
            className={`px-8 py-4 font-semibold text-sm border-r border-[#FF8F66] transition-colors ${activeTab === 'One Way' ? 'bg-white text-[#FF6D38] rounded-tr-3xl shadow-[0_-4px_10px_rgba(0,0,0,0.1)] relative z-10' : 'bg-[#FF6D38]'}`}
          >
            One Way
          </button>
          <button 
            onClick={() => setActiveTab("Round Trip")}
            className={`px-12 py-4 font-bold text-sm transition-colors ${activeTab === 'Round Trip' ? 'bg-white text-[#FF6D38] rounded-t-3xl shadow-[0_-4px_10px_rgba(0,0,0,0.1)] relative z-10' : 'bg-[#FF6D38] font-semibold'}`}
          >
            Round Trip
          </button>
          <button 
            onClick={() => setActiveTab("Multi City")}
            className={`px-8 py-4 font-semibold text-sm border-l border-[#FF8F66] transition-colors ${activeTab === 'Multi City' ? 'bg-white text-[#FF6D38] rounded-tl-3xl shadow-[0_-4px_10px_rgba(0,0,0,0.1)] relative z-10' : 'bg-[#FF6D38]'}`}
          >
            Multi City
          </button>
        </div>
      </div>

      {/* Main Bar */}
      <div className="bg-white rounded-[32px] p-4 shadow-[0_10px_40px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-3 relative z-20">
        
        {/* From -> To */}
        <div className="flex-1 w-full flex items-center relative gap-2">
          {/* From */}
          <div className="flex-1 relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800">
              <MapPin size={20} />
            </div>
            <input
              type="text"
              placeholder="From?"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full h-[60px] pl-12 pr-4 rounded-2xl border border-gray-300 focus:outline-none focus:border-[#FF6D38] text-base font-medium text-gray-800 placeholder-gray-500"
            />
          </div>

          {/* Swap icon */}
          <div 
            onClick={() => { const temp = from; setFrom(to); setTo(temp); }}
            className="w-8 h-8 rounded-full border border-orange-300 bg-white shadow-sm flex items-center justify-center text-[#FF6D38] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer hover:bg-orange-50"
          >
            <ArrowRightLeft size={16} />
          </div>

          {/* To */}
          <div className="flex-1 relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800">
              <MapPin size={20} />
            </div>
            <input
              type="text"
              placeholder="To?"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full h-[60px] pl-12 pr-4 rounded-2xl border border-gray-300 focus:outline-none focus:border-[#FF6D38] text-base font-medium text-gray-800 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Departure Date */}
        <div className="flex-[0.5] w-full">
          <input
            type="text"
            placeholder="Departure Date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="w-full h-[60px] px-6 rounded-2xl border border-gray-300 focus:outline-none focus:border-[#FF6D38] text-base font-medium text-gray-800 placeholder-gray-500 text-center"
          />
        </div>

        {/* Return Date */}
        <div className="flex-[0.5] w-full">
          <input
            type="text"
            placeholder="Return Date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="w-full h-[60px] px-6 rounded-2xl border border-gray-300 focus:outline-none focus:border-[#FF6D38] text-base font-medium text-gray-800 placeholder-gray-500 text-center"
          />
        </div>

        {/* Traveler */}
        <div className="flex-[0.5] w-full">
          <input
            type="text"
            placeholder="Traveler"
            value={traveler}
            onChange={(e) => setTraveler(e.target.value)}
            className="w-full h-[60px] px-6 rounded-2xl border border-gray-300 focus:outline-none focus:border-[#FF6D38] text-base font-medium text-gray-800 placeholder-gray-500 text-center"
          />
        </div>

        {/* Search Button */}
        <button 
          onClick={handleSearch}
          disabled={searchMutation.isPending}
          className="flex-shrink-0 bg-[#FF6D38] text-white h-[60px] px-8 rounded-2xl flex items-center justify-center hover:bg-[#e05b2a] transition-colors shadow-lg font-bold text-lg disabled:opacity-75"
        >
          {searchMutation.isPending ? "Searching..." : (
            <>Search Flights <Search size={20} className="ml-2" /></>
          )}
        </button>

      </div>
    </div>
  );
}
