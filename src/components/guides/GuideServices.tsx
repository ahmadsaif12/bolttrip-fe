"use client";

import packagesData from "@/data/guides.json";

export default function GuideServices() {
  const { services } = packagesData;

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-12 rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-16 h-1 bg-[#FF6D38] mb-8 group-hover:w-full transition-all duration-500"></div>
              <h3 className="text-2xl font-black text-[#0b3155] mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
