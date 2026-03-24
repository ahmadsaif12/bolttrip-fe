"use client";

import { Zap, Leaf, Globe, Waves } from "lucide-react";
import packagesData from "@/data/activities.json";

const iconMap: Record<string, any> = {
  Zap: Zap,
  Leaf: Leaf,
  Globe: Globe,
  Waves: Waves,
};

export default function ActivityCategories() {
  const { categories } = packagesData;

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {categories.map((cat, i) => {
            const IconComponent = iconMap[cat.icon];
            return (
              <button 
                key={cat.name} 
                className="flex flex-col items-center gap-4 group transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-[#FF6D38] group-hover:bg-[#FF6D38] group-hover:text-white transition-all shadow-sm">
                  {IconComponent && <IconComponent size={28} />}
                </div>
                <span className="font-bold text-gray-700 group-hover:text-[#FF6D38]">{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
