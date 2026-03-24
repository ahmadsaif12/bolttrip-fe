import HotelsHero from "@/components/hotels/HotelsHero";
import HotelsSearchBar from "@/components/hotels/HotelsSearchBar";
import WeekendDeals from "@/components/home/WeekendDeals";

export default function HotelsPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-10 overflow-hidden">
      
      {/* Hero Section */}
      <HotelsHero />
      
      {/* Search Bar */}
      <HotelsSearchBar />

      {/* Reusing Weekend Deals below search bar as recommended hotels */}
      <WeekendDeals />

    </div>
  );
}
