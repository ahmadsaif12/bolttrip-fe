"use client";

import { MapPin, Search, ArrowRightLeft } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FlightsSearchBar() {
  const router = useRouter();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [traveler, setTraveler] = useState("1");
  const [activeTab, setActiveTab] = useState("Round Trip");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    if (!from || !to || !departureDate) return;
    setIsLoading(true);
    const params = new URLSearchParams({ from, to, departureDate, traveler, type: activeTab });
    if (returnDate) params.append("returnDate", returnDate);
    router.push(`/flights/results?${params.toString()}`);
    setIsLoading(false);
  };

  return (
    <div className="max-w-[1100px] mx-auto px-4 -mt-16 relative z-30 mb-20">
      <div className="flex justify-center mb-0 relative z-40">
        <div className="bg-[#FF6D38] p-1 flex rounded-full shadow-lg">
          {["One Way", "Round Trip", "Multi City"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === tab ? "bg-white text-[#FF6D38]" : "text-white hover:bg-[#e05b2a]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-[40px] p-6 shadow-2xl border border-gray-100 flex flex-col lg:flex-row items-center gap-4">
        <div className="flex flex-1 w-full items-center gap-0 relative">
          <div className="relative flex-1">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="From?"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full h-[60px] pl-12 pr-6 rounded-l-2xl border border-r-0 border-gray-200 focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>

          <button
            onClick={() => { const t = from; setFrom(to); setTo(t); }}
            className="absolute left-1/2 -translate-x-1/2 bg-white border border-gray-200 p-2 rounded-full shadow-sm z-10 hover:text-orange-500"
          >
            <ArrowRightLeft size={16} />
          </button>

          <div className="relative flex-1">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="To?"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full h-[60px] pl-12 pr-6 rounded-r-2xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>
        </div>

        <div className="flex flex-1 w-full gap-3">
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="flex-1 h-[60px] px-4 rounded-2xl border border-gray-200 outline-none"
          />
          {activeTab === "Round Trip" && (
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="flex-1 h-[60px] px-4 rounded-2xl border border-gray-200 outline-none"
            />
          )}
          <input
            type="number"
            value={traveler}
            onChange={(e) => setTraveler(e.target.value)}
            className="w-20 h-[60px] text-center rounded-2xl border border-gray-200 outline-none"
          />
        </div>

        <button
          onClick={handleSearch}
          disabled={isLoading}
          className="w-full lg:w-auto bg-[#FF6D38] text-white h-[60px] px-10 rounded-2xl font-bold text-lg hover:bg-orange-600 shadow-md"
        >
          {isLoading ? "..." : "Search"}
        </button>
      </div>
    </div>
  );
}