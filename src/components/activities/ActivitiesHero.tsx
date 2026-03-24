"use client";

import packagesData from "@/data/activities.json";

export default function ActivitiesHero() {
  const { hero } = packagesData;

  return (
    <section className="relative w-full h-[500px] flex flex-col items-center justify-center text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('${hero.backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          {hero.title}
        </h1>
        <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
          {hero.subtitle}
        </p>
      </div>
    </section>
  );
}
