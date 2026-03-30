"use client";
import { use, useEffect, useState } from "react";
import { FlightsService } from "@/service/flights.service";

export default function FlightsHero() {
  const [flights, setFlights] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FlightsService.getFlights()
      .then((res) => setFlights(res.data.results))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="pt-16 pb-32 px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6">Available Flights</h1>
      {loading ? (
        <p className="text-gray-500">Loading flights...</p>
      ) : flights.length === 0 ? (
        <p className="text-gray-500">No flights available.</p>
      ) : (
        <ul className="text-gray-700">
          {flights.map((flight) => (
            <li key={flight.id} className="mb-2">
              {flight.airline.name} {flight.flight_number} — {flight.route.origin.iata_code} → {flight.route.destination.iata_code} | {flight.departure_time.split("T")[0]} → {flight.arrival_time.split("T")[0]}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}