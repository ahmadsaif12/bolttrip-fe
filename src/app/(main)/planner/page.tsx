import React from "react";
import PlannerHero from "@/components/planner/PlannerHero";
import HowItWorks from "@/components/planner/HowItWorks";

export const metadata = {
  title: "Planner | BOLTTrip",
  description: "Plan your trip in 3 easy steps with our interactive travel planner.",
};

export default function PlannerPage() {
  return (
    <main className="min-h-screen bg-white">
      <PlannerHero />
      <HowItWorks />
      
      {/* CTA Section */}
      <section className="py-20 bg-[#005c97] text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black mb-8">Ready to start planning?</h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">Join thousands of travelers who plan their perfect journeys with BOLTTrip every day.</p>
          <button className="bg-[#FF6D38] text-white font-bold px-12 py-4 rounded-xl hover:bg-white hover:text-[#FF6D38] transition-all shadow-2xl">
            Get Started Now
          </button>
        </div>
      </section>
    </main>
  );
}
