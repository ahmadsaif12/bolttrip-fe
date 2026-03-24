import HeroSection from "@/components/home/HeroSection";
import AdvancedSearchBar from "@/components/home/AdvancedSearchBar";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TrendingAdventures from "@/components/home/TrendingAdventures";
import PersonalizedRecommendation from "@/components/home/PersonalizedRecommendation";
import WeekendDeals from "@/components/home/WeekendDeals";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-20">
      {/* 
        Container for Hero and Search Bar has a subtle background 
        or we can just keep it white. 
      */}
      <div className="bg-[#fafafa]">
        <HeroSection />
      </div>
      
      {/* Search Bar sits immediately below Hero, slightly overlapping */}
      <AdvancedSearchBar />

      {/* Main content sections */}
      <WhyChooseUs />
      
      <TrendingAdventures />
      
      <PersonalizedRecommendation />
      
      <WeekendDeals />
    </div>
  );
}