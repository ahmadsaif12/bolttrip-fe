import FlightsHero from "@/components/flights/FlightsHero";
import FlightsSearchBar from "@/components/flights/FlightsSearchBar";
import PopularTourTypes from "@/components/flights/PopularTourTypes";
import FAQ from "@/components/flights/FAQ";

export default function FlightsPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-10">
      <FlightsHero />
      <FlightsSearchBar />
      <PopularTourTypes />
      <FAQ />
    </div>
  );
}