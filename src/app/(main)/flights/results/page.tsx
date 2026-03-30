"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, Suspense } from "react";
import FlightResults from "@/features/flights/components/FlightResults";
import { flightService } from "@/features/flights/service/flights.service";
import type { FlightSearchParams } from "@/features/flights/types/flight.types";

function FlightResultsContent() {
  const searchParams = useSearchParams();
  const [searchData, setSearchData] = useState<FlightSearchParams | null>(null);

  useEffect(() => {
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const departureDate = searchParams.get("departureDate");
    const returnDate = searchParams.get("returnDate");
    const traveler = searchParams.get("traveler");
    const type = (searchParams.get("type") as any) || "One Way";

    if (from && to && departureDate) {
      setSearchData({
        from,
        to,
        departureDate,
        returnDate: returnDate || undefined,
        traveler: parseInt(traveler || "1"),
        type,
      });
    }
  }, [searchParams]);

  const { data: flights = [], isLoading, error } = useQuery({
    queryKey: ["flights", searchData],
    queryFn: () => flightService.searchFlights(searchData!),
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
        <p className="text-red-500">Error loading flights. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <FlightResults
        flights={flights}
        searchParams={searchData}
        isLoading={isLoading}
      />
    </div>
  );
}

export default function FlightResultsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading results...</div>}>
      <FlightResultsContent />
    </Suspense>
  );
}
