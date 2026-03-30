"use client";

import { MapPin, Calendar, Users, Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HotelsSearchBar() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState("1");
  const [rooms, setRooms] = useState("1");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!destination || !checkInDate || !checkOutDate) {
      alert("Please fill in all required fields");
      return;
    }

    setIsLoading(true);

    // Create search query parameters
    const params = new URLSearchParams({
      destination,
      checkInDate,
      checkOutDate,
      guests,
      rooms,
    });

    // Navigate to results page with search parameters
    router.push(`/hotels/results?${params.toString()}`);
    setIsLoading(false);
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

        {/* Check-in Date */}
        <div className="flex-1 w-full relative">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-800">
            <Calendar size={22} className="text-gray-900"/>
          </div>
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            className="w-full h-[70px] pl-14 pr-4 rounded-2xl border border-orange-300 focus:outline-none focus:border-[#FF6D38] text-base font-bold text-gray-800 placeholder-gray-600 shadow-sm"
          />
        </div>

        {/* Check-out Date */}
        <div className="flex-1 w-full relative">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-800">
            <Calendar size={22} className="text-gray-900"/>
          </div>
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            className="w-full h-[70px] pl-14 pr-4 rounded-2xl border border-orange-300 focus:outline-none focus:border-[#FF6D38] text-base font-bold text-gray-800 placeholder-gray-600 shadow-sm"
          />
        </div>

        {/* Guests */}
        <div className="flex-[0.8] w-full relative">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-800">
            <Users size={22} className="text-gray-900"/>
          </div>
          <input
            type="number"
            placeholder="Guests"
            min="1"
            max="9"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full h-[70px] pl-14 pr-4 rounded-2xl border border-orange-300 focus:outline-none focus:border-[#FF6D38] text-base font-bold text-gray-800 placeholder-gray-600 shadow-sm"
          />
        </div>

        {/* Rooms */}
        <div className="flex-[0.8] w-full relative">
          <input
            type="number"
            placeholder="Rooms"
            min="1"
            max="9"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            className="w-full h-[70px] px-4 rounded-2xl border border-orange-300 focus:outline-none focus:border-[#FF6D38] text-base font-bold text-gray-800 placeholder-gray-600 shadow-sm"
          />
        </div>

        {/* Search Button */}
        <button 
          onClick={handleSearch}
          disabled={isLoading}
          className="flex-shrink-0 bg-[#FF6D38] text-white h-[70px] px-10 rounded-2xl flex items-center justify-center hover:bg-[#e05b2a] transition-colors shadow-lg font-bold text-xl disabled:opacity-75"
        >
          {isLoading ? "Searching..." : "Search"}
        </button>

      </div>
    </div>
  );
}
