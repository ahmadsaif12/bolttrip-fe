"use client";

import { Calendar, Users, DollarSign, TrendingUp, TrendingDown } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { DashboardService } from "@/service/dashboard.service";
import dashboardData from "@/data/dashboard.json";

const iconMap: Record<string, any> = {
  "Total Booking": Calendar,
  "Total New Customers": Users,
  "Total Earnings": DollarSign,
};

export default function StatCards() {
  const { data, isLoading } = useQuery({
    queryKey: ['dashboard', 'admin'],
    queryFn: () => DashboardService.getDashboardData(),
  });

  const stats = data?.data?.admin?.stats || dashboardData.admin.stats;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 mb-10">
      {stats.map((stat: any) => {
        const Icon = iconMap[stat.label];
        return (
          <div key={stat.label} className="bg-white p-8 rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 flex items-center justify-between hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] transition-all duration-500 group cursor-pointer">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-3xl bg-[#0b3155] flex items-center justify-center text-white group-hover:bg-[#FF6D38] group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-blue-900/10">
                <Icon size={34} />
              </div>
              <div>
                <p className="text-gray-400 font-black text-[10px] uppercase tracking-[0.15em] mb-2">{stat.label}</p>
                <h3 className="text-5xl font-black text-[#0b3155] tabular-nums tracking-tighter">{stat.value}</h3>
              </div>
            </div>
            
            <div className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold ${
              stat.trendUp ? "bg-orange-50 text-orange-600" : "bg-red-50 text-red-600"
            }`}>
              {stat.trendUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
              {stat.trend}
            </div>
          </div>
        );
      })}
    </div>
  );
}
