"use client";

import { Star, Clock, Tag } from "lucide-react";
import packagesData from "@/data/activities.json";

export default function FeaturedActivities() {
  const { items } = packagesData;

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[#FF6D38] font-bold text-xs uppercase tracking-widest mb-2">Featured Adventures</p>
            <h2 className="text-4xl font-black text-[#0b3155]">Top Rated Activities</h2>
          </div>
          <button className="text-[#005c97] font-bold border-b-2 border-[#005c97] hover:text-[#FF6D38] hover:border-[#FF6D38] transition-all">
            See all activities
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl font-black text-[#FF6D38] shadow-lg">
                  {item.price}
                </div>
              </div>
              <div className="p-10">
                <div className="flex items-center gap-4 mb-4 text-sm font-semibold text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <Clock size={16} className="text-[#005c97]" />
                    {item.duration}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                    {item.rating}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-[#0b3155] mb-6 leading-tight group-hover:text-[#FF6D38] transition-colors">
                  {item.title}
                </h3>
                <button className="w-full bg-[#005c97] text-white font-bold py-4 rounded-2xl hover:bg-[#FF6D38] transition-all shadow-md group-hover:shadow-lg">
                  Book This Activity
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
