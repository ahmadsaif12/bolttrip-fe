"use client";

import AdminSidebar from "@/components/dashboard/AdminSidebar";
import AdminHeader from "@/components/dashboard/AdminHeader";
import DataTable from "@/components/dashboard/DataTable";
import dashboardData from "@/data/dashboard.json";
import AdminRightSidebar from "@/components/dashboard/AdminRightSidebar";

export default function BookingsTablePage() {
  const columns = [
    { key: "id", label: "Booking ID" },
    { key: "customer", label: "Customer" },
    { key: "package", label: "Package" },
    { key: "date", label: "Date" },
    { key: "amount", label: "Amount" },
    { 
      key: "status", 
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
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <AdminSidebar />
      <main className="pl-64 pr-0 xl:pr-80">
        <AdminHeader />
        <div className="p-10">
          <DataTable title="All Bookings" columns={columns} data={dashboardData.bookings} />
        </div>
      </main>
      <AdminRightSidebar />
    </div>
  );
}
