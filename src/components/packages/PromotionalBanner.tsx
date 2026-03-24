"use client";

import packagesData from "@/data/packages.json";

export default function PromotionalBanner() {
  const { promotionalBanner } = packagesData;

  return (
    <section className="py-20 w-full px-6 container mx-auto mb-10">
      <div className="relative w-full h-[400px] rounded-[40px] overflow-hidden group shadow-2xl">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-105"
          style={{ 
            backgroundImage: `url('${promotionalBanner.backgroundImage}')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-start lg:px-24 md:px-12 px-8">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight max-w-xl">
              {promotionalBanner.title.split('30% off').map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="text-[#FF6D38]">30% off</span>}
                </span>
              ))}
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-lg">
              {promotionalBanner.subtitle}
            </p>
            <button className="bg-white text-gray-900 font-bold px-12 py-4 rounded-xl hover:bg-[#e05b2a] hover:text-white transition-all shadow-xl hover:shadow-2xl">
              {promotionalBanner.buttonText}
            </button>
        </div>
      </div>
    </section>
  );
}
