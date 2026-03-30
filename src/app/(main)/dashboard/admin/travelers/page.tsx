"use client";

import AdminSidebar from "@/components/dashboard/AdminSidebar";
import AdminHeader from "@/components/dashboard/AdminHeader";
import DataTable from "@/components/dashboard/DataTable";
import dashboardData from "@/data/dashboard.json";
import AdminRightSidebar from "@/components/dashboard/AdminRightSidebar";

export default function TravelersTablePage() {
  const columns = [
    { key: "id" as const, label: "Traveler ID" },
    { key: "name" as const, label: "Full Name" },
    { key: "email" as const, label: "Email Address" },
    { key: "bookings" as const, label: "Total Bookings" },
    { 
      key: "status" as const, 
      label: "Tier Status",
      render: (val: string) => (
        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
          val === "Diamond" ? "bg-purple-50 text-purple-600" : 
          val === "Gold" ? "bg-yellow-50 text-yellow-600" : "bg-slate-50 text-slate-600"
        }`}>
          {val}
        </span>
      )
    },
  ] as const;

  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <AdminSidebar />
      <main className="pl-64 pr-0 xl:pr-80">
        <AdminHeader />
        <div className="p-10">
          <DataTable title="Our Travelers" columns={columns as any} data={dashboardData.travelers} />
        </div>
      </main>
      <AdminRightSidebar />
    </div>
  );
}
