"use client";

import AdminSidebar from "@/components/dashboard/AdminSidebar";
import AdminHeader from "@/components/dashboard/AdminHeader";
import DataTable from "@/components/dashboard/DataTable";
import dashboardData from "@/data/dashboard.json";
import AdminRightSidebar from "@/components/dashboard/AdminRightSidebar";

export default function PackagesTablePage() {
  const columns = [
    { key: "id", label: "Package ID" },
    { key: "name", label: "Package Name" },
    { key: "destination", label: "Destination" },
    { key: "price", label: "Price" },
    { key: "duration", label: "Duration" },
    { 
      key: "status", 
      label: "Status",
      render: (val: string) => (
        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
          val === "Active" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
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
          <DataTable title="All Packages" columns={columns} data={dashboardData.packages} />
        </div>
      </main>
      <AdminRightSidebar />
    </div>
  );
}
