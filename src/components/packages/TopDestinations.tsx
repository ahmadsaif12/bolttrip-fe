"use client";

import packagesData from "@/data/packages.json";

export default function TopDestinations() {
  const { topDestinations } = packagesData;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="text-[#0b3155] font-medium mb-2">{topDestinations.title}</p>
          <h2 className="text-4xl font-black text-gray-900 mb-8">{topDestinations.heading}</h2>
          
          <div className="flex flex-wrap items-center justify-between gap-6 border-b border-gray-100 pb-4">
            <div className="flex flex-wrap items-center gap-8">
              {topDestinations.categories.map((cat, i) => (
                <button 
                  key={cat} 
                  className={`text-base font-semibold transition-colors ${i === 0 ? 'text-[#0b3155] border-b-2 border-[#0b3155]' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  {cat}
                </button>
              ))}
              <button className="text-gray-400 font-semibold flex items-center gap-1">
                More 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>
            </div>
            <button className="bg-white border border-gray-200 text-gray-800 font-semibold px-6 py-2 rounded-full hover:bg-gray-50 transition-colors">
              Explore all destinations
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {topDestinations.items.map((dest) => (
            <div key={dest.name} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center">
              <div className="relative w-full h-72 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center w-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{dest.name}</h3>
                <button className="bg-[#FF6D38] text-white font-bold px-8 py-2.5 rounded-xl hover:bg-[#e05b2a] transition-all shadow-md">
                  Explore Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
