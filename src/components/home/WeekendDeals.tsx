"use client";

import { useQuery } from "@tanstack/react-query";
import { HotelsService } from "@/service/hotels.service";
import hotelsData from "@/data/hotels.json";

export default function WeekendDeals() {
  const { deals: fallbackDeals } = hotelsData;

  const { data, isLoading } = useQuery({
    queryKey: ['hotels', 'deals'],
    queryFn: () => HotelsService.getHotels(),
  });

  // If backend is running and we have valid data, use it; otherwise fallback to static for display
  const deals = data?.data && data.data.length > 0 ? data.data : fallbackDeals;

  return (
    <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold text-[#111827] mb-8">Deals for the Weekend</h2>

      {isLoading ? (
        <div className="flex justify-center py-20">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-[#FF6D38] rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal: any, index: number) => (
            <div key={deal.id || index} className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col group cursor-pointer hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] transition-shadow">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={deal.image || deal.images?.[0] || fallbackDeals[0].image} 
                  alt={deal.title || deal.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-xl text-gray-900 mb-1">{deal.title || deal.name}</h3>
                <p className="text-sm text-gray-500 font-medium mb-4">{deal.location || deal.address || "Kathmandu, Nepal"}</p>
                
                <div className="flex items-center mb-6">
                  <span className="bg-[#004E89] text-white text-xs font-bold px-2 py-1 rounded">
                    {deal.rating || "7.5"}
                  </span>
                  <span className="ml-3 text-sm font-semibold text-gray-700">
                    {deal.ratingText || "Good"} <span className="text-gray-400 font-normal">({deal.reviews || "200"} reviews)</span>
                  </span>
                </div>
                
                <div className="mb-8">
                  <span className="bg-[#FF6D38] text-white text-xs font-bold px-4 py-2 rounded-full inline-block">
                    {deal.tag || "Limited Time to Deal"}
                  </span>
                </div>
                
                <div className="mt-auto flex justify-end items-end">
                  <span className="text-sm text-gray-500 font-medium mr-3 mb-1">{deal.nights || 2} nights</span>
                  <span className="text-gray-400 line-through text-lg mr-2">${deal.originalPrice || deal.price + 20 || 140}</span>
                  <span className="text-2xl font-black text-gray-900">${deal.price || 120}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center mt-12 gap-4 text-sm font-bold">
        <button className="bg-black text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Previous
        </button>
        
        <button className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center">
          1
        </button>
        <button className="text-gray-500 hover:text-black hover:bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center transition">
          2
        </button>
        
        <button className="bg-black text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800 transition">
          Next
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </section>
  );
}
