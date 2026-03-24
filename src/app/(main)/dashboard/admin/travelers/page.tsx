"use client";

import AdminSidebar from "@/components/dashboard/AdminSidebar";
import AdminHeader from "@/components/dashboard/AdminHeader";
import DataTable from "@/components/dashboard/DataTable";
import dashboardData from "@/data/dashboard.json";
import AdminRightSidebar from "@/components/dashboard/AdminRightSidebar";

export default function TravelersTablePage() {
  const columns = [
    { key: "id", label: "Traveler ID" },
    { key: "name", label: "Full Name" },
    { key: "email", label: "Email Address" },
    { key: "bookings", label: "Total Bookings" },
    { 
      key: "status", 
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
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <AdminSidebar />
      <main className="pl-64 pr-0 xl:pr-80">
        <AdminHeader />
        <div className="p-10">
          <DataTable title="Our Travelers" columns={columns} data={dashboardData.travelers} />
        </div>
      </main>
      <AdminRightSidebar />
    </div>
  );
}
