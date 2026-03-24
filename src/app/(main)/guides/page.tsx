import React from "react";
import GuidesHero from "@/components/guides/GuidesHero";
import GuidesGrid from "@/components/guides/GuidesGrid";
import GuideServices from "@/components/guides/GuideServices";

export const metadata = {
  title: "Guides | BOLTTrip",
  description: "Our experienced professional guides will help you navigate the hidden gems and most beautiful landscapes.",
};

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuidesHero />
      <GuideServices />
      <GuidesGrid />

      {/* Trust Banner */}
      <section className="py-20 bg-[#005c97] text-white overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl font-black mb-6">Expertise you can trust</h2>
            <p className="text-lg opacity-90">All our guides are government licensed and have undergone rigorous safety and first-aid training. Your safety and satisfaction are our top priorities.</p>
          </div>
          <div className="flex gap-8">
            <div className="text-center">
              <div className="text-5xl font-black text-[#FF6D38] mb-2">100%</div>
              <div className="text-sm font-bold opacity-75">Certified</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-[#FF6D38] mb-2">50+</div>
              <div className="text-sm font-bold opacity-75">Local Experts</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
