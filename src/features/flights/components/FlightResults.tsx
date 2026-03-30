"use client";

import { Users } from "lucide-react";
import { useState } from "react";
import type { Flight, FlightSearchParams } from "../types/flight.types";
import BookFlightModal from "./BookFlightModal";

interface FlightResultsProps {
  flights: Flight[];
  searchParams: FlightSearchParams;
  isLoading: boolean;
}

export default function FlightResults({
  flights,
  searchParams,
  isLoading,
}: FlightResultsProps) {
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-[#FF6D38] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!flights || flights.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">No flights found for your search.</p>
      </div>
    );
  }

  const handleBookClick = (flight: Flight) => {
    setSelectedFlight(flight);
    setShowBookingModal(true);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Available Flights</h2>
          <p className="text-gray-600">
            {searchParams.from} → {searchParams.to} on {searchParams.departureDate}
          </p>
          <p className="text-sm text-gray-500">
            Travelers: {searchParams.traveler} | Trip: {searchParams.type}
          </p>
        </div>

        <div className="space-y-4">
          {flights.map((flight, index) => (
            <div
              key={flight.id || index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-4 flex flex-col gap-4">
                {/* Top Row: Tags and Save */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-500"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                      Save
                    </button>
                    <div className="flex items-center gap-2 ml-4">
                      <span className="px-3 py-1 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 whitespace-nowrap">
                        Self-transfer hack
                      </span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium whitespace-nowrap">
                        Best
                      </span>
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-sm font-medium whitespace-nowrap">
                        Cheapest
                      </span>
                    </div>
                  </div>
                </div>

                {/* Main Row: Flight Info and Price */}
                <div className="flex flex-col lg:flex-row lg:items-center">
                  <div className="flex-1 flex flex-col md:flex-row md:items-center gap-6 py-2">
                    {/* Checkbox and Airline Logo */}
                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded border-gray-300 text-[#FF6D38] focus:ring-[#FF6D38]"
                      />
                      <div className="w-10 h-10 relative flex-shrink-0">
                        {flight.image ? (
                          <img
                            src={flight.image}
                            alt={flight.airline}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <div className="w-full h-full bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
                            {flight.airline?.substring(0, 2).toUpperCase()}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Time and Airport */}
                    <div className="min-w-[120px]">
                      <p className="text-xl font-bold text-gray-900 leading-none mb-1">
                        {flight.departure.time} – {flight.arrival.time}
                      </p>
                      <p className="text-sm text-gray-500 truncate max-w-[180px]">
                        {flight.departure.airport} – {flight.arrival.airport}
                      </p>
                    </div>

                    {/* Stops */}
                    <div className="flex-1 flex flex-col items-center md:items-start lg:px-4">
                      <p className="text-sm font-semibold text-gray-900">
                        {flight.stops === 0 ? "Nonstop" : `${flight.stops} stop${flight.stops > 1 ? "s" : ""}`}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {flight.stops > 0 && (
                          <span className="px-1.5 py-0.5 bg-orange-50 text-orange-700 text-[10px] font-bold rounded uppercase">
                            {flight.arrival.airportCode}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="hidden md:block">
                      <p className="text-sm text-gray-900 font-medium">{flight.duration}</p>
                    </div>
                  </div>

                  {/* Right: Price and Select */}
                  <div className="flex-shrink-0 flex items-center justify-between lg:justify-end lg:pl-6 lg:border-l border-gray-100 gap-4 md:gap-8 mt-4 lg:mt-0 min-w-0 lg:min-w-[220px]">
                    <div className="text-left lg:text-right">
                      <p className="text-[24px] md:text-[28px] font-bold text-gray-900 leading-none tracking-tight">
                        ${flight.price.toLocaleString()}
                      </p>
                      <p className="text-xs md:text-sm text-gray-500 mt-1">Economy Cabin</p>
                    </div>
                    <button
                      onClick={() => handleBookClick(flight)}
                      className="bg-[#FF6D38] text-white px-6 md:px-10 py-3 rounded-lg hover:bg-[#e05b2a] transition-colors font-bold text-base md:text-lg"
                    >
                      Select
                    </button>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                  <span>Multiple airlines</span>
                  {flight.seats && (
                    <div className="flex items-center gap-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      <span>{flight.seats} seats left at this price</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedFlight && showBookingModal && (
        <BookFlightModal
          flight={selectedFlight}
          searchParams={searchParams}
          onClose={() => {
            setShowBookingModal(false);
            setSelectedFlight(null);
          }}
        />
      )}
    </>
  );
}