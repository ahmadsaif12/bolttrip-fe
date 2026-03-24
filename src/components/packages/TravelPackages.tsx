"use client";

import { Star, Clock, MapPin } from "lucide-react";
import packagesData from "@/data/packages.json";

export default function TravelPackages() {
  const { travelPackages } = packagesData;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="text-[#FF6D38] font-bold text-xs uppercase tracking-widest mb-2">{travelPackages.tagline}</p>
          <h2 className="text-4xl font-black text-[#0b3155] flex items-center gap-3">
            {travelPackages.heading}
            <span className="text-3xl">✈️</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelPackages.items.map((pkg, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-gray-500 text-sm font-semibold">
                    <Clock size={16} className="text-[#FF6D38]" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(pkg.rating)].map((_, j) => (
                      <Star key={j} size={14} className="fill-[#FFB21E] text-[#FFB21E]" />
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight flex-1">
                  {pkg.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                  <MapPin size={16} />
                  {pkg.location}
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-xs line-through mb-1">From {pkg.oldPrice}</span>
                    <span className="text-[#FF6D38] text-xl font-black">From {pkg.newPrice}</span>
                  </div>
                  <button className="bg-[#FF6D38] text-white font-bold px-6 py-2.5 rounded-xl hover:bg-[#e05b2a] transition-all shadow-md group-hover:shadow-lg">
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
