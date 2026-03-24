import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-24 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left Content */}
      <div className="max-w-2xl text-center lg:text-left z-10 w-full lg:w-1/2 mt-12 lg:mt-0">
        <h1 className="text-5xl sm:text-6xl lg:text-[70px] font-bold text-gray-900 leading-[1.1] tracking-tight">
          Explore Your Dream <br />
          Destinations
        </h1>

        <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-500 font-medium">
          Find personalized travel recommendations, book tours, and create memories.
        </p>

        <button className="mt-8 bg-[#FF6D38] text-white px-8 py-3.5 rounded-xl font-bold text-base lg:text-lg shadow-lg hover:scale-105 transition-transform active:scale-95">
          Book Now
        </button>
      </div>

      {/* Right Content - Images floating */}
      <div className="flex-1 w-full lg:w-1/2 flex justify-center items-center relative h-[350px] sm:h-[450px] lg:h-[550px] mt-10 lg:mt-0">
        <div className="relative w-full h-full max-w-[500px]">
          {/* Top Left Image */}
          <div className="absolute top-[10%] left-[5%] w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-[30px] overflow-hidden shadow-xl z-20">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
              alt="Beach"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top Right Image */}
          <div className="absolute top-[0%] right-[5%] w-[180px] h-[120px] sm:w-[220px] sm:h-[150px] rounded-[30px] overflow-hidden shadow-xl z-10">
            <img
              src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"
              alt="Temple"
              className="w-full h-full object-cover"
            />
            {/* Play Button decoration */}
            <div className="absolute -top-3 -left-3 bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
               </svg>
            </div>
          </div>

          {/* Bottom Left Image */}
          <div className="absolute bottom-[10%] left-[5%] w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-[30px] overflow-hidden shadow-xl z-10">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
              alt="City"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Right Image */}
          <div className="absolute bottom-[5%] right-[5%] w-[180px] h-[220px] sm:w-[220px] sm:h-[280px] rounded-[40px] overflow-hidden shadow-xl z-20">
            <img
              src="https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?auto=format&fit=crop&w=800&q=80"
              alt="Istanbul"
              className="w-full h-full object-cover"
            />
            {/* Location dot decoration */}
            <div className="absolute -bottom-2 -left-3 bg-[#1ca9e0] w-10 h-10 rounded-full flex items-center justify-center shadow-lg text-white border-4 border-white">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
               </svg>
            </div>
          </div>

          {/* Dashed Flight path decorative SVG would go here */}
        </div>
      </div>
    </section>
  );
}
