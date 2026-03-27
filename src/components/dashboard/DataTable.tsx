"use client";

import { MoreHorizontal, Search, Filter } from "lucide-react";
import type { ReactNode } from "react";

type ColumnDef<T extends Record<string, unknown>> = {
  key: keyof T & string;
  label: string;
  render?: (val: T[keyof T], row: T) => ReactNode;
};

interface DataTableProps<T extends Record<string, unknown>> {
  title: string;
  columns: ColumnDef<T>[];
  data: T[];
}

export default function DataTable<T extends Record<string, unknown>>({
  title,
  columns,
  data,
}: DataTableProps<T>) {
  return (
    <div className="bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.02)] border border-gray-100 overflow-hidden group/table translate-y-0 hover:-translate-y-1 transition-all duration-500">
      <div className="p-6 sm:p-8 lg:p-10 border-b border-gray-50 flex items-center justify-between gap-4 bg-white relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#0b3155]"></div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0b3155] tracking-tighter">{title}</h3>
        
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="relative group/search hidden md:block">
            <input 
              type="text" 
              placeholder="Search data..." 
              className="bg-gray-50/50 border border-gray-100 rounded-2xl py-3.5 pl-14 pr-6 text-xs font-black focus:ring-4 focus:ring-[#0b3155]/5 focus:bg-white focus:border-[#0b3155]/20 transition-all outline-none w-64 lg:w-80"
            />
            <Search size={16} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within/search:text-[#0b3155] transition-colors" />
          </div>
          <button className="p-3.5 sm:p-4 bg-gray-50/50 border border-gray-100 rounded-2xl text-gray-400 hover:bg-white hover:shadow-xl transition-all group/filter">
            <Filter size={20} className="group-hover/filter:rotate-90 transition-transform" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto px-5 pb-5">
        <table className="w-full text-left border-separate border-spacing-y-3">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="px-6 sm:px-8 py-4 sm:py-6 text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] first:pl-6 sm:first:pl-10">
                  {col.label}
                </th>
              ))}
              <th className="px-6 sm:px-8 py-4 sm:py-6"></th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((row, i) => (
              <tr key={i} className="group/row transition-all hover:scale-[1.01] duration-300">
                {columns.map((col) => (
                  <td key={col.key} className="px-6 sm:px-8 py-6 sm:py-8 text-sm font-black text-[#0b3155]/80 bg-gray-50/30 group-hover/row:bg-white group-hover/row:shadow-[0_10px_30px_rgba(0,0,0,0.03)] first:rounded-l-[24px] first:pl-6 sm:first:pl-10 last:rounded-r-[24px] transition-all">
                    {col.render ? col.render(row[col.key], row) : (row[col.key] as ReactNode)}
                  </td>
                ))}
                <td className="px-6 sm:px-8 py-6 sm:py-8 text-right bg-gray-50/30 group-hover/row:bg-white group-hover/row:shadow-[0_10px_30px_rgba(0,0,0,0.03)] last:rounded-r-[24px] transition-all">
                  <button className="p-3 text-gray-200 hover:text-[#FF6D38] opacity-0 group-hover/row:opacity-100 transition-all hover:bg-orange-50 rounded-xl">
                    <MoreHorizontal size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-6 sm:p-8 lg:p-10 border-t border-gray-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gray-50/30">
        <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Page 1 of 1 • {data.length} Total items</p>
        <div className="flex gap-4">
           <button className="px-8 py-3.5 bg-white border border-gray-200 text-[10px] font-black text-gray-400 rounded-2xl hover:bg-gray-50 hover:text-[#0b3155] hover:shadow-md transition-all uppercase tracking-widest">Previous</button>
           <button className="px-8 py-3.5 bg-[#0b3155] text-[10px] font-black text-white rounded-2xl shadow-xl shadow-blue-900/20 hover:scale-105 transition-all uppercase tracking-widest">Next Page</button>
        </div>
      </div>
    </div>
  );
}
