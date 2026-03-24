"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/service/api";

export default function TrendingAdventures() {
  const fallbackTours = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80",
      title: "Rome: Trastevere & Campo de Fiori Street Food Walking Tour",
      days: 10,
      rating: 4.8,
      reviews: 70,
      originalPrice: 2700,
      price: 2430,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
      title: "Rome: Trastevere & Campo de Fiori Street Food Walking Tour",
      days: 7,
      rating: 4.1,
      reviews: 170,
      originalPrice: 2100,
      price: 2000,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
      title: "Rome: Trastevere & Campo de Fiori Street Food Walking Tour",
      days: 17,
      rating: 4.5,
      reviews: 100,
      originalPrice: 3500,
      price: 2500,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",
      title: "Rome: Trastevere & Campo de Fiori Street Food Walking Tour",
      days: 5,
      rating: 4.3,
      reviews: 70,
      originalPrice: 1500,
      price: 1000,
    },
  ];

  // Using a generic packages/tours endpoint. The API interceptor will handle it properly.
  const { data, isLoading } = useQuery({
    queryKey: ['tours', 'trending'],
    queryFn: () => apiClient.get('/packages/'),
  });

  const tours = data?.data && data.data.length > 0 ? data.data : fallbackTours;

  return (
    <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl font-extrabold text-[#111827]">Trending Adventures</h2>
        <div className="flex gap-4 items-center">
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
            <ChevronRight size={20} />
          </button>
          <button className="text-sm font-semibold text-[#004E89] hover:underline ml-2">
            View More
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-20">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-[#FF6D38] rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="flex overflow-x-auto gap-6 pb-6 no-scrollbar snap-x">
          {tours.map((tour: any, index: number) => (
            <div key={tour.id || index} className="min-w-[280px] md:min-w-[300px] bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 snap-start flex flex-col group cursor-pointer hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] transition-shadow">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={tour.image || tour.images?.[0] || fallbackTours[0].image} 
                  alt={tour.title || tour.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-base mb-3 leading-snug line-clamp-2">
                  {tour.title || tour.name || "Exciting Tour Package"}
                </h3>
                
                <div className="flex items-center text-sm mb-4">
                  <span className="text-gray-600">{tour.days || 7} days</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="font-bold text-gray-800">{tour.rating || "4.5"}</span>
                  <Star size={14} className="text-[#FF6D38] ml-1 fill-[#FF6D38]" />
                  <span className="text-[#FF6D38] ml-1">({tour.reviews || 100})</span>
                </div>
                
                <div className="mt-auto">
                  <p className="text-sm text-gray-500">
                    From <span className="line-through">${tour.originalPrice || tour.price + 50 || 1500}</span>{" "}
                    <span className="text-[#FF6D38] font-bold ml-1">${tour.price || 1000}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
