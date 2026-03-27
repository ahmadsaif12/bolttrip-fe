"use client";

import { Calendar, Users, DollarSign, TrendingUp, TrendingDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { DashboardService } from "@/service/dashboard.service";
import dashboardData from "@/data/dashboard.json";

type Stat = {
  label: string;
  value?: string | number | null;
  trend?: string | null;
  trendUp?: boolean | null;
};

const iconMap: Record<string, LucideIcon> = {
  "Total Booking": Calendar,
  "Total New Customers": Users,
  "Total Earnings": DollarSign,
};

function normalizeLabel(label: string) {
  const key = label.trim().toLowerCase();
  if (key === "total booking" || key === "total bookings" || key === "bookings") return "Total Booking";
  if (
    key === "total new customers" ||
    key === "new customers" ||
    key === "total customers" ||
    key === "customers"
  )
    return "Total New Customers";
  if (key === "total earnings" || key === "earnings" || key === "total revenue" || key === "revenue")
    return "Total Earnings";
  return label;
}

export default function StatCards() {
  const { data } = useQuery({
    queryKey: ['dashboard', 'admin'],
    queryFn: () => DashboardService.getDashboardData(),
  });

  const stats =
    (data?.data?.admin?.stats as Stat[] | undefined) ||
    (dashboardData.admin.stats as Stat[]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-6 lg:px-10 mb-8 lg:mb-10">
      {stats.map((stat: Stat) => {
        const label = normalizeLabel(stat.label);
        const Icon = iconMap[label];
        const value = stat.value ?? "--";
        const trend = stat.trend ?? "";
        const trendUp = Boolean(stat.trendUp);

        return (
          <div
            key={stat.label}
            className="bg-white px-6 py-5 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-14 h-14 rounded-2xl bg-[#005c97] flex items-center justify-center shrink-0 shadow-sm">
                  {Icon ? <Icon size={26} className="text-white" /> : null}
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-gray-400 leading-none mb-2 truncate">
                    {label}
                  </p>
                  <h3 className="text-4xl font-black text-[#0b3155] tabular-nums tracking-tight leading-none">
                    {value}
                  </h3>
                </div>
              </div>

              <div
                className={`self-end inline-flex items-center gap-1 px-3 py-1 rounded-lg text-[10px] font-black whitespace-nowrap ${
                  trendUp ? "bg-orange-50 text-orange-600" : "bg-red-50 text-red-600"
                }`}
              >
                {trendUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {trend}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
