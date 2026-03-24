"use client";

import { Star, ShieldCheck, MapPin } from "lucide-react";
import packagesData from "@/data/guides.json";

export default function GuidesGrid() {
  const { guides } = packagesData;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#FF6D38] font-bold text-xs uppercase tracking-widest mb-2">Our Experts</p>
          <h2 className="text-4xl font-black text-[#0b3155]">Meet Our Professional Guides</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {guides.map((guide, i) => (
            <div key={i} className="group flex flex-col items-center text-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden mb-8 shadow-xl border-8 border-gray-50 transform group-hover:scale-105 transition-all">
                <img 
                  src={guide.image} 
                  alt={guide.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg text-[#FFB21E]">
                  <Star size={18} fill="currentColor" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-[#0b3155] mb-2">{guide.name}</h3>
              <p className="text-[#FF6D38] font-bold text-sm mb-4">{guide.specialty}</p>
              
              <div className="flex items-center gap-6 text-gray-400 text-sm font-semibold">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-[#005c97]" />
                  {guide.experience}
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={16} className="text-[#005c97]" />
                  Verified
                </div>
              </div>

              <button className="mt-8 bg-gray-50 text-[#0b3155] font-bold px-8 py-3 rounded-full hover:bg-[#FF6D38] hover:text-white transition-all shadow-sm">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
