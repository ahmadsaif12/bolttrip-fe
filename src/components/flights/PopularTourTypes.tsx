"use client";

import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/service/api";
import flightsData from "@/data/flights.json";

export default function PopularTourTypes() {
  const { tourTypes: fallbackTypes } = flightsData;

  const { data, isLoading } = useQuery({
    queryKey: ['tourTypes'],
    queryFn: () => apiClient.get('/tour-types/'),
  });

  const types = data?.data && data.data.length > 0 ? data.data : fallbackTypes;

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto bg-[#fafbfc] rounded-[40px] mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[#112338] mb-4">Popular Tour Types</h2>
        <p className="text-gray-500 font-medium">The most popular tour packages presented to you, explore diverse destinations</p>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-10">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-[#FF6D38] rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {types.map((type: any, idx: number) => (
            <div key={type.id || idx} className={`w-40 h-40 bg-white rounded-3xl flex flex-col items-center justify-center gap-4 ${idx === 0 ? 'border-2 border-[#FF6D38] shadow-[0_10px_30px_rgba(255,109,56,0.15)]' : 'border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer'}`}>
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${idx === 0 ? 'text-[#FF6D38]' : 'text-gray-800'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={type.path || fallbackTypes[idx % fallbackTypes.length].path} />
                </svg>
              </div>
              <span className={`font-bold text-center px-2 ${idx === 0 ? 'text-[#FF6D38]' : 'text-[#3E4D60]'}`}>
                {type.title || type.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
