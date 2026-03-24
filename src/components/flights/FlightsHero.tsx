import flightsData from "@/data/flights.json";

export default function FlightsHero() {
  const { hero } = flightsData;

  return (
    <section className="relative pt-16 pb-32 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 bg-white">
      {/* Left Content */}
      <div className="max-w-xl text-center lg:text-left z-10 w-full lg:w-1/2">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-black leading-tight tracking-tight mb-6">
          {hero.title.split(',').map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && <>, <br className="hidden lg:block"/></>}
            </span>
          ))}
        </h1>

        <p className="text-base sm:text-lg text-gray-500 font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
          {hero.subtitle}
        </p>

        <button className="mt-8 bg-[#FF6D38] text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-orange-500/30 hover:scale-105 transition-transform active:scale-95">
          {hero.buttonText}
        </button>
      </div>

      {/* Right Content - Images floating */}
      <div className="flex-1 w-full lg:w-1/2 flex justify-end items-center relative h-[450px] sm:h-[550px]">
        {/* Top Right large image */}
        <div className="absolute top-0 right-10 w-[240px] h-[200px] sm:w-[320px] sm:h-[240px] rounded-tl-[120px] rounded-tr-[40px] rounded-bl-[120px] rounded-br-[120px] overflow-hidden shadow-2xl z-20">
          <img
            src={hero.images[0]}
            alt="Family boarding plane"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top far right small image */}
        <div className="absolute top-10 -right-4 lg:-right-10 w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] rounded-[60px] overflow-hidden shadow-xl z-10">
          <img
            src={hero.images[1]}
            alt="Airplane cabin"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Middle far right square-ish image */}
        <div className="absolute top-[210px] sm:top-[260px] -right-4 w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-[60px] overflow-hidden shadow-xl z-10">
          <img
            src={hero.images[2]}
            alt="Airplane wing in sky"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom center large image */}
        <div className="absolute bottom-0 right-32 sm:right-48 w-[240px] h-[220px] sm:w-[320px] sm:h-[280px] rounded-tl-[140px] rounded-tr-[140px] rounded-bl-[100px] rounded-br-[40px] overflow-hidden shadow-2xl z-20">
          <img
            src={hero.images[3]}
            alt="Woman boarding plane"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom far right small image */}
        <div className="absolute bottom-10 -right-4 lg:-right-10 w-[160px] h-[140px] sm:w-[200px] sm:h-[180px] rounded-[60px] overflow-hidden shadow-xl z-10">
          <img
            src={hero.images[4]}
            alt="Airplane landing over city"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
