import { Play, MapPin } from "lucide-react";
import hotelsData from "@/data/hotels.json";

export default function HotelsHero() {
  const { hero } = hotelsData;

  return (
    <section className="relative pt-16 pb-32 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 bg-white overflow-visible">
      
      {/* Left Content */}
      <div className="max-w-xl text-center lg:text-left z-10 w-full lg:w-[45%]">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-[#111827] leading-[1.1] mb-6">
          Hotel for <span className="font-serif italic text-teal-600 font-medium">memorable</span><br/>
          moments rich<br/>
          in <span className="relative">
            emotions
            <span className="absolute -right-4 top-1/2 w-8 h-8 rounded-full bg-teal-100/60 -z-10 mix-blend-multiply"></span>
          </span>
        </h1>

        <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
          {hero.subtitle}
        </p>

        <div className="mt-10 flex items-center justify-center lg:justify-start">
          <button className="flex items-center gap-4 group">
            <div className="w-14 h-14 bg-white rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex items-center justify-center text-[#FF6D38] group-hover:scale-110 transition-transform relative z-10">
              <Play fill="currentColor" size={20} className="ml-1" />
            </div>
            <div className="bg-[#FF6D38] text-white px-8 py-3 rounded-r-full -ml-8 font-bold text-sm shadow-md hover:bg-[#e05b2a] transition-colors">
              {hero.buttonText}
            </div>
          </button>
        </div>
      </div>

      {/* Right Content - Abstract Building Image */}
      <div className="flex-1 w-full lg:w-[55%] flex justify-end items-center relative h-[450px] sm:h-[600px] mt-12 lg:mt-0 right-0">
        <div className="absolute -right-10 top-0 w-[450px] sm:w-[600px] lg:w-[800px] h-full z-0 overflow-hidden transform translate-x-10 translate-y-10 lg:translate-x-20">
          {/* We skew the container slightly or just put the image slanted as designed */}
          <div className="w-[120%] h-[120%] -rotate-6 scale-110 origin-bottom-right">
             <img
                src={hero.mainImage}
                alt="Modern Hotel Building"
                className="w-full h-full object-cover rounded-tl-[100px]"
             />
          </div>
        </div>

        {/* Map Location bubble */}
        <div className="absolute top-[30%] left-0 sm:left-[10%] w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl z-20">
          <img src={hero.locationImage} alt="Map View" className="w-full h-full object-cover scale-150" />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
            Location
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-600">
            <MapPin size={24} fill="currentColor" className="text-white"/>
          </div>
        </div>

        {/* Pink Badge */}
        <div className="absolute top-[15%] right-[10%] bg-[#FF6B98] text-white p-3 rounded-2xl shadow-xl z-20 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"/>
            </svg>
          </div>
          <div className="text-xs font-bold leading-tight">
            {hero.badgeText}
          </div>
        </div>
      </div>
      
    </section>
  );
}
