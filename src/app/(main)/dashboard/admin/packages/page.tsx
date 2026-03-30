"use client";

import AdminSidebar from "@/components/dashboard/AdminSidebar";
import AdminHeader from "@/components/dashboard/AdminHeader";
import DataTable from "@/components/dashboard/DataTable";
import dashboardData from "@/data/dashboard.json";
import AdminRightSidebar from "@/components/dashboard/AdminRightSidebar";

export default function PackagesTablePage() {
  const columns = [
    { key: "id" as const, label: "Package ID" },
    { key: "name" as const, label: "Package Name" },
    { key: "destination" as const, label: "Destination" },
    { key: "price" as const, label: "Price" },
    { key: "duration" as const, label: "Duration" },
    { 
      key: "status" as const, 
      label: "Status",
      render: (val: string) => (
        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
          val === "Active" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
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
          <DataTable title="All Packages" columns={columns as any} data={dashboardData.packages} />
        </div>
      </main>
      <AdminRightSidebar />
    </div>
  );
}
