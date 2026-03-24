import React from "react";
import PackagesHero from "@/components/packages/PackagesHero";
import TopDestinations from "@/components/packages/TopDestinations";
import TopValues from "@/components/packages/TopValues";
import TravelPackages from "@/components/packages/TravelPackages";
import PromotionalBanner from "@/components/packages/PromotionalBanner";
import OurOffers from "@/components/packages/OurOffers";

export const metadata = {
  title: "Packages | BOLTTrip",
  description: "Explore our exclusive travel packages and find your next adventure.",
};

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <PackagesHero />

      {/* Top Destinations Section */}
      <div className="mt-20">
        <TopDestinations />
      </div>

      {/* Top Values Section */}
      <TopValues />

      {/* Travel Packages Section */}
      <TravelPackages />

      {/* Promotional Banner */}
      <PromotionalBanner />

      {/* Our Offers Section */}
      <OurOffers />
    </main>
  );
}
