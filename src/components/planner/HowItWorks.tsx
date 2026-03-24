"use client";

import packagesData from "@/data/planner.json";

export default function HowItWorks() {
  const { steps } = packagesData;

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#0b3155] mb-4">How It Works</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Planning your dream trip has never been easier with our streamlined process.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center text-2xl font-black text-[#FF6D38] mb-8 group-hover:bg-[#FF6D38] group-hover:text-white transition-all transform group-hover:scale-110">
                0{i + 1}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
