"use client";

import { Star, MapPin, Clock, Users } from "lucide-react";
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
        {/* Search Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Available Flights
          </h2>
          <p className="text-gray-600">
            {searchParams.from} → {searchParams.to} on {searchParams.departureDate}
          </p>
          <p className="text-sm text-gray-500">
            Travelers: {searchParams.traveler} | Trip: {searchParams.type}
          </p>
        </div>

        {/* Flight Results */}
        <div className="space-y-4">
          {flights.map((flight, index) => (
            <div
              key={flight.id || index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Airline & Times */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {flight.airline || "Flight"}
                  </h3>

                  <div className="flex items-center gap-4 mb-2">
                    {/* Departure */}
                    <div className="flex-1">
                      <p className="text-sm text-gray-500">Departure</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {flight.departure.time}
                      </p>
                      <p className="text-sm text-gray-600">
                        {flight.departure.airportCode}
                      </p>
                    </div>

                    {/* Duration & Stops */}
                    <div className="flex-1 text-center">
                      <p className="text-xs text-gray-500 mb-1">
                        {flight.duration}
                      </p>
                      <div className="w-8 h-[2px] bg-gray-300 mx-auto mb-1"></div>
                      <p className="text-xs text-gray-600">
                        {flight.stops === 0 ? "Nonstop" : `${flight.stops} stop`}
                      </p>
                    </div>

                    {/* Arrival */}
                    <div className="flex-1">
                      <p className="text-sm text-gray-500">Arrival</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {flight.arrival.time}
                      </p>
                      <p className="text-sm text-gray-600">
                        {flight.arrival.airportCode}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Price & Book Button */}
                <div className="flex flex-col items-end gap-4 md:border-l md:pl-6">
                  <div className="text-right">
                    {flight.originalPrice && (
                      <p className="text-sm text-gray-500 line-through">
                        ${flight.originalPrice}
                      </p>
                    )}
                    <p className="text-3xl font-bold text-[#FF6D38]">
                      ${flight.price}
                    </p>
                    <p className="text-xs text-gray-500">per person</p>
                  </div>

                  <button
                    onClick={() => handleBookClick(flight)}
                    className="bg-[#FF6D38] text-white px-6 py-3 rounded-lg hover:bg-[#e05b2a] transition-colors font-semibold whitespace-nowrap"
                  >
                    Book Now
                  </button>
                </div>
              </div>

              {/* Additional Info */}
              {flight.seats && (
                <div className="mt-4 pt-4 border-t border-gray-200 flex items-center gap-2 text-sm text-gray-600">
                  <Users size={16} />
                  <span>{flight.seats} seats available</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
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
