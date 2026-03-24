import React from "react";
import ActivitiesHero from "@/components/activities/ActivitiesHero";
import ActivityCategories from "@/components/activities/ActivityCategories";
import FeaturedActivities from "@/components/activities/FeaturedActivities";

export const metadata = {
  title: "Activities | BOLTTrip",
  description: "Discover unforgettable activities from high-altitude trekking to serene lake rowing.",
};

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <ActivitiesHero />
      <ActivityCategories />
      <FeaturedActivities />
      
      {/* Newsletter Section */}
      <section className="py-24 bg-[#0b3155] text-white">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <h2 className="text-4xl font-black mb-6">Stay updated on new activities</h2>
          <p className="text-gray-300 mb-10 max-w-2xl">Subscribe to our newsletter and be the first to know about new adventure packages and exclusive offers.</p>
          <div className="w-full max-w-xl flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-8 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all"
            />
            <button className="bg-[#FF6D38] text-white font-bold px-10 py-4 rounded-2xl hover:bg-[#e05b2a] transition-all shadow-xl">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
