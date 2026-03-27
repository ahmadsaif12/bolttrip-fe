import AdminSidebar from "@/components/dashboard/AdminSidebar";
import AdminHeader from "@/components/dashboard/AdminHeader";
import StatCards from "@/components/dashboard/StatCards";
import RevenueOverview from "@/components/dashboard/RevenueOverview";
import TripOverview from "@/components/dashboard/TripOverview";
import TravelPackages from "@/components/packages/TravelPackages";
import AdminRightSidebar from "@/components/dashboard/AdminRightSidebar";
import DashboardFooter from "@/components/dashboard/DashboardFooter";

export const metadata = {
  title: "Admin Dashboard | BOLTTrip",
  description: "Management dashboard for BOLTTrip travel portal.",
};

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <AdminSidebar />
      
      <main className="pl-56 pr-0 xl:pr-80">
        <AdminHeader />
        
        <div className="px-4 sm:px-6 lg:px-10">
          <h2 className="text-3xl lg:text-4xl font-black text-[#0b3155] tracking-tight mb-6 lg:mb-8">
            Dashboard
          </h2>
        </div>

        <StatCards />

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 px-4 sm:px-6 lg:px-10 mb-8 lg:mb-10">
          <RevenueOverview />
          <TripOverview />
        </div>

        <div className="px-4 sm:px-6 lg:px-10 pb-10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-[#0b3155]">Travel Packages</h3>
            <button className="text-[#005c97] font-bold border-b-2 border-[#005c97] hover:border-[#FF6D38] hover:text-[#FF6D38] transition-all">
              See All Packages
            </button>
          </div>
          <TravelPackages />
        </div>

        <DashboardFooter />
      </main>

      <AdminRightSidebar />
    </div>
  );
}
