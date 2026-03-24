export default function Home() {
  return (
    <div className="relative">
      <section className="pt-20 pb-32 px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="max-w-2xl text-left">
          <h1 className="text-7xl font-black text-gray-900 leading-tight tracking-tight">
            Explore Your <br />
            <span className="text-[#004E89]">Dream Destinations</span>
          </h1>
          <p className="mt-8 text-xl text-gray-600">
            Find personalized travel recommendations, book tours, and create memories.
          </p>
          <button className="mt-10 bg-[#FF6D38] text-white px-10 py-4 rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-transform active:scale-95">
            Book Now
          </button>
        </div>

        <div className="flex-1 w-full relative">
           {/* Replace this with your Image Grid Component */}
           <div className="w-full aspect-square bg-blue-50 rounded-[40px] flex items-center justify-center border-2 border-dashed border-blue-200 text-blue-400 font-bold">
              Image Grid Component Goes Here
           </div>
        </div>
      </section>
      
      {/* Personalized Recommendation Section from Screenshot 6 */}
      <section className="bg-white py-20 px-8">
        {/* Component content */}
      </section>
    </div>
  );
}