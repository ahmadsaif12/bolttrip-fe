"use client";

import packagesData from "@/data/packages.json";

export default function OurOffers() {
  const { ourOffers } = packagesData;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-black text-[#0b3155] mb-4">{ourOffers.heading}</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16 px-4">
          {ourOffers.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ourOffers.images.map((img, i) => (
            <div key={i} className="relative h-80 rounded-[40px] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500">
              <img 
                src={img} 
                alt={`Offer ${i + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
