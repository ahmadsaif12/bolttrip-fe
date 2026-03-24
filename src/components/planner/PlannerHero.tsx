"use client";

import packagesData from "@/data/planner.json";

export default function PlannerHero() {
  const { hero } = packagesData;

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-black text-[#0b3155] mb-8 leading-tight">
            {hero.title}
          </h1>
          <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {hero.subtitle}
          </p>
          <button className="bg-[#FF6D38] text-white font-bold px-10 py-4 rounded-xl hover:bg-[#e05b2a] transition-all shadow-xl hover:shadow-2xl">
            {hero.buttonText}
          </button>
        </div>

        {/* Right Illustration */}
        <div className="flex-1 relative w-full max-w-2xl aspect-square lg:aspect-auto h-[600px]">
          {/* Main Image (Bottom Left) */}
          <div className="absolute left-0 bottom-10 w-64 h-80 rounded-[40px] overflow-hidden shadow-2xl z-20 border-4 border-white">
            <img src={hero.images[0]} alt="Step 1" className="w-full h-full object-cover" />
          </div>

          {/* Top Right Image */}
          <div className="absolute right-0 top-0 w-64 h-48 rounded-[40px] overflow-hidden shadow-2xl z-10 border-4 border-white">
            <img src={hero.images[1]} alt="Step 2" className="w-full h-full object-cover" />
          </div>

          {/* Center Right Image */}
          <div className="absolute right-10 bottom-20 w-64 h-96 rounded-[40px] overflow-hidden shadow-2xl z-30 border-4 border-white">
            <img src={hero.images[2]} alt="Step 3" className="w-full h-full object-cover" />
          </div>

          {/* Decorative Path 1 */}
          <svg className="absolute top-1/4 left-1/4 w-1/2 h-1/2 -z-10 text-[#FF6D38] opacity-20" viewBox="0 0 200 200">
            <path d="M10,150 Q100,50 190,40" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="10,10" />
            <path d="M190,40 L180,35 M190,40 L185,50" fill="none" stroke="currentColor" strokeWidth="4" />
          </svg>

          {/* Decorative Path 2 */}
          <svg className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 -z-10 text-[#FF6D38] opacity-20" viewBox="0 0 200 200">
            <path d="M190,10 Q100,100 10,150" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="10,10" />
            <path d="M10,150 L20,155 M10,150 L15,140" fill="none" stroke="currentColor" strokeWidth="4" />
          </svg>
          
          {/* Floating Icons */}
          <div className="absolute top-20 left-1/4 bg-yellow-400 p-3 rounded-full shadow-lg z-40 text-white animate-bounce">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
          </div>
          <div className="absolute bottom-1/4 left-10 bg-blue-400 p-3 rounded-full shadow-lg z-40 text-white animate-pulse">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          </div>
        </div>
      </div>
    </section>
  );
}
