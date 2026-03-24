"use client";

import { Play, MapPin, Users, Calendar } from "lucide-react";
import packagesData from "@/data/packages.json";

export default function PackagesHero() {
  const { hero } = packagesData;

  return (
    <section className="relative w-full h-[600px] flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url('${hero.backgroundImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {hero.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          {hero.subtitle}
        </p>

        {/* Watch Video */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all group">
            <Play className="fill-white text-white group-hover:scale-110 transition-transform" />
          </button>
          <span className="font-semibold text-lg">{hero.watchVideo}</span>
        </div>
      </div>

      {/* Search Bar Overlay */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6 z-20">
        <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-6 border border-gray-100">
          {/* Location */}
          <div className="flex flex-1 items-center gap-3 w-full border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0">
            <div className="p-2 bg-blue-50 rounded-lg text-[#005c97]">
              <MapPin size={20} />
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Location</label>
              <input 
                type="text" 
                placeholder="Search For A Destination"
                className="text-gray-900 font-semibold focus:outline-none placeholder:text-gray-300 w-full"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="flex flex-1 items-center gap-3 w-full border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0">
            <div className="p-2 bg-blue-50 rounded-lg text-[#005c97]">
              <Users size={20} />
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Guests</label>
              <input 
                type="text" 
                placeholder="How many Guests?"
                className="text-gray-900 font-semibold focus:outline-none placeholder:text-gray-300 w-full"
              />
            </div>
          </div>

          {/* Date */}
          <div className="flex flex-1 items-center gap-3 w-full pb-4 md:pb-0">
            <div className="p-2 bg-blue-50 rounded-lg text-[#005c97]">
              <Calendar size={20} />
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Date</label>
              <input 
                type="text" 
                placeholder="Pick a date"
                className="text-gray-900 font-semibold focus:outline-none placeholder:text-gray-300 w-full"
              />
            </div>
          </div>

          {/* Search Button */}
          <button className="bg-[#FF6D38] text-white font-bold px-10 py-4 rounded-xl hover:bg-[#e05b2a] transition-all shadow-lg hover:shadow-xl w-full md:w-auto">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
