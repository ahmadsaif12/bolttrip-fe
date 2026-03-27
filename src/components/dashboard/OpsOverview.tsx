"use client";

import { useQuery } from "@tanstack/react-query";
import { DashboardService } from "@/service/dashboard.service";
import dashboardData from "@/data/dashboard.json";

type OpsOverviewStat = {
  tag: string;
  label: string;
  value: string | number;
};

export default function OpsOverview() {
  const { data } = useQuery({
    queryKey: ['dashboard', 'ops'],
    queryFn: () => DashboardService.getDashboardData(),
  });

  const overview =
    (data?.data?.operations?.overview as OpsOverviewStat[] | undefined) ||
    (dashboardData.operations.overview as OpsOverviewStat[]);

  return (
    <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-[32px] lg:rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 mb-8 lg:mb-10 group">
      <h3 className="text-xl sm:text-2xl font-black text-[#005c97] mb-6 sm:mb-10 flex items-center gap-3 sm:gap-4">
        Overview 
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-10 lg:gap-12">
        {overview.map((stat: OpsOverviewStat, i: number) => (
          <div key={i} className="flex flex-col border-r border-gray-100 last:border-none pr-4 group/item">
            <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mb-3 group-hover/item:text-[#FF6D38] transition-colors">{`${stat.tag}'s`}</span>
            <p className="text-sm font-bold text-gray-400 mb-4">{stat.label}</p>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#004E89] tabular-nums tracking-tighter">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
