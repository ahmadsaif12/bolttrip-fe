"use client";
export default function Home() {
  return (
    <div className="relative">
      <section className="pt-20 pb-24 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight">
            Explore Your <br />
            <span className="text-[#004E89]">Dream Destinations</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-600">
            Find personalized travel recommendations, book tours, and create memories.
          </p>

          <button className="mt-8 bg-[#FF6D38] text-white px-8 py-3 lg:px-10 lg:py-4 rounded-2xl font-bold text-base lg:text-lg shadow-lg hover:scale-105 transition-transform active:scale-95">
            Book Now
          </button>
        </div>

        <div className="flex-1 w-full flex justify-center items-center">
          <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px]">

            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
              alt="Beach"
              className="absolute top-0 left-0 w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 object-cover rounded-2xl shadow-lg"
            />

            <img
              src="https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?auto=format&fit=crop&w=800&q=80"
              alt="Nepal Mountains"
              className="absolute top-0 right-0 w-28 h-20 sm:w-36 sm:h-24 lg:w-40 lg:h-28 object-cover rounded-2xl shadow-lg"
            />

            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
              alt="Temple"
              className="absolute bottom-0 left-6 sm:left-8 w-28 h-32 sm:w-36 sm:h-40 lg:w-40 lg:h-44 object-cover rounded-2xl shadow-lg"
            />

            <img
              src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"
              alt="Mosque"
              className="absolute bottom-0 right-0 w-32 h-40 sm:w-40 sm:h-48 lg:w-44 lg:h-56 object-cover rounded-2xl shadow-lg"
            />

            <div className="absolute bottom-3 right-3 bg-blue-500 text-white p-2 rounded-full shadow-md text-sm">
              📍
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6 lg:px-8"></section>
    </div>
  );
}