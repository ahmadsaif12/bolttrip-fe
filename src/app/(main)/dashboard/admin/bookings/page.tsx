"use client";

import AdminSidebar from "@/components/dashboard/AdminSidebar";
import AdminHeader from "@/components/dashboard/AdminHeader";
import DataTable from "@/components/dashboard/DataTable";
import dashboardData from "@/data/dashboard.json";
import AdminRightSidebar from "@/components/dashboard/AdminRightSidebar";

export default function BookingsTablePage() {
  const columns = [
    { key: "id" as const, label: "Booking ID" },
    { key: "customer" as const, label: "Customer" },
    { key: "package" as const, label: "Package" },
    { key: "date" as const, label: "Date" },
    { key: "amount" as const, label: "Amount" },
    { 
      key: "status" as const, 
      label: "Status",
      render: (val: string) => (
        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
          val === "Confirmed" ? "bg-green-50 text-green-600" : 
          val === "Pending" ? "bg-orange-50 text-orange-600" : "bg-red-50 text-red-600"
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
          <DataTable title="All Bookings" columns={columns as any} data={dashboardData.bookings} />
        </div>
      </main>
      <AdminRightSidebar />
    </div>
  );
}
