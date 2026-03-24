"use client";

import { MapPin, ShieldCheck, CreditCard } from "lucide-react";
import packagesData from "@/data/packages.json";

const iconMap: Record<string, any> = {
  MapPin: MapPin,
  ShieldCheck: ShieldCheck,
  CreditCard: CreditCard,
};

export default function TopValues() {
  const { topValues } = packagesData;

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="flex flex-col justify-center">
            <p className="text-[#FF6D38] font-bold text-xs uppercase tracking-widest mb-2">{topValues.tagline}</p>
            <h2 className="text-4xl font-black text-[#0b3155] leading-tight">{topValues.heading}</h2>
            <p className="mt-4 text-gray-500">{topValues.description}</p>
          </div>
          
          {topValues.items.map((v) => {
            const IconComponent = iconMap[v.icon];
            return (
              <div key={v.title} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-lg transition-all">
                <div className="mb-6 p-4 bg-orange-50 rounded-2xl group-hover:bg-[#FF6D38]/10 transition-colors">
                  {IconComponent && <IconComponent className="text-[#FF6D38]" size={32} />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
