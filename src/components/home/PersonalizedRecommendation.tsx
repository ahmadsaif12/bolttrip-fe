export default function PersonalizedRecommendation() {
  return (
    <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 bg-[#fafafa] rounded-3xl my-8 border border-gray-100">
      
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#111827] leading-tight max-w-md">
          Personalized <br /> Recommendation
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Let us help you plan your next journey.
        </p>
      </div>

      <div className="flex-1 w-full max-w-md space-y-6">
        <div>
          <label className="block text-sm font-bold text-gray-800 mb-2">Your Interests</label>
          <input 
            type="text" 
            placeholder="E.g. Beaches, Mountains"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <p className="text-xs text-gray-400 mt-2">Separate by commas</p>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-800 mb-2">Budget</label>
          <input 
            type="text" 
            placeholder="Enter your estimated budget"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <p className="text-xs text-gray-400 mt-2">Currency</p>
        </div>

        <button className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors">
          Get Recommendations
        </button>
      </div>
      
    </section>
  );
}
