"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative flex flex-col items-center min-w-[64px]" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-gray-100 transition-all active:scale-95"
      >
        <span className="text-xl">👤</span>
      </button>
      
      <span className="text-[10px] font-bold text-white uppercase mt-1 tracking-wider">
        Profile
      </span>

      {mounted && open && (
        <div className="absolute right-0 top-full mt-3 w-72 bg-white rounded-[24px] shadow-2xl overflow-hidden border border-gray-100 z-[100] animate-in fade-in zoom-in duration-200">
          <Link 
            href="/login" 
            onClick={() => setOpen(false)} 
            className="px-6 py-5 hover:bg-gray-50 flex items-center gap-4 no-underline group transition-colors text-left"
          >
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-xl">
              ↩️
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-800 leading-none">Sign In / Register</span>
              <span className="text-[10px] font-bold text-gray-400 uppercase mt-1">One account for Nepal</span>
            </div>
          </Link>

          <div className="h-[1px] bg-gray-50 mx-6" />

          {/* Settings Options */}
          <button className="w-full px-6 py-4 hover:bg-gray-50 flex items-center gap-4 text-gray-700 text-left border-none bg-transparent cursor-pointer">
            <span className="text-xl">🎨</span>
            <span className="text-md font-medium">Appearance</span>
          </button>

          <button className="w-full px-6 py-4 hover:bg-gray-50 flex items-center gap-4 text-gray-700 text-left border-none bg-transparent cursor-pointer">
            <span className="text-xl">🌐</span>
            <span className="text-md font-medium">Language</span>
          </button>
        </div>
      )}
    </div>
  );
}