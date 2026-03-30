"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, Suspense } from "react";
import HotelResults from "@/features/hotel/components/HotelResults";
import { hotelService } from "@/features/hotel/service/hotels.service";
import type { HotelSearchParams } from "@/features/hotel/types/hotel.types";

function HotelResultsContent() {
  const searchParams = useSearchParams();
  const [searchData, setSearchData] = useState<HotelSearchParams | null>(null);

  useEffect(() => {
    const destination = searchParams.get("destination");
    const checkInDate = searchParams.get("checkInDate");
    const checkOutDate = searchParams.get("checkOutDate");
    const guests = searchParams.get("guests");
    const rooms = searchParams.get("rooms");

    if (destination && checkInDate && checkOutDate) {
      setSearchData({
        destination,
        checkInDate,
        checkOutDate,
        guests: parseInt(guests || "1"),
        rooms: parseInt(rooms || "1"),
      });
    }
  }, [searchParams]);

  const { data: hotels = [], isLoading, error } = useQuery({
    queryKey: ["hotels", searchData],
    queryFn: () => hotelService.searchHotels(searchData!),
    enabled: !!searchData,
  });

  if (!searchData) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">No search parameters provided.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500">Error loading hotels. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <HotelResults
        hotels={hotels}
        searchParams={searchData}
        isLoading={isLoading}
      />
    </div>
  );
}

export default function HotelResultsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading results...</div>}>
      <HotelResultsContent />
    </Suspense>
  );
}
