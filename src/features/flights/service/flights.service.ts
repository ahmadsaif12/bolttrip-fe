import axios from "axios";
import { apiClient } from "@/service/apiClient";
import { ENDPOINTS } from "@/service/endpoints";
import type {
  Flight,
  FlightSearchParams,
  FlightBookingPayload,
  BookingResponse,
} from "../types/flight.types";

const publicClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
});

function transformFlight(raw: any): Flight {
  const dep = new Date(raw.departure_time);
  const arr = new Date(raw.arrival_time);

  return {
    id: raw.id,
    airline: raw.airline?.name ?? "Unknown",
    departure: {
      time: dep.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      airport: raw.origin?.city ?? "",
      airportCode: raw.origin?.iata_code ?? "",
    },
    arrival: {
      time: arr.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      airport: raw.destination?.city ?? "",
      airportCode: raw.destination?.iata_code ?? "",
    },
    duration:
      raw.duration_minutes >= 60
        ? `${Math.floor(raw.duration_minutes / 60)}h ${raw.duration_minutes % 60}m`
        : `${raw.duration_minutes}m`,
    stops: 0,
    price: parseFloat(raw.base_price),
    originalPrice: undefined,
    seats: raw.seats_available,
    flight_number: raw.flight_number,
  };
}

export const flightService = {
  searchFlights: async (params: FlightSearchParams) => {
    const response = await publicClient.get<any>(ENDPOINTS.FLIGHTS, {
      params: {
        search: `${params.from} ${params.to}`,
        departure_date: params.departureDate,
        ...(params.returnDate && { return_date: params.returnDate }),
        travelers: params.traveler,
        type: params.type,
      },
    });
    const results = Array.isArray(response.data) ? response.data : response.data.results || [];
    return results.map(transformFlight);
  },

  getFlights: async () => {
    const response = await publicClient.get<any>(ENDPOINTS.FLIGHTS);
    const results = Array.isArray(response.data) ? response.data : response.data.results || [];
    return results.map(transformFlight);
  },

  getFlightDetails: async (id: string | number) => {
    const response = await publicClient.get<any>(ENDPOINTS.FLIGHTS_DETAIL(id));
    return transformFlight(response.data);
  },

  bookFlight: async (bookingData: FlightBookingPayload) => {
    const response = await apiClient.post<BookingResponse>(
      ENDPOINTS.BOOKINGS,
      bookingData
    );
    return response.data;
  },

  getAirlines: async () => {
    const response = await publicClient.get(ENDPOINTS.AIRLINES);
    return response.data;
  },

  getAirports: async () => {
    const response = await publicClient.get(ENDPOINTS.AIRPORTS);
    return response.data;
  },

  getRoutes: async () => {
    const response = await publicClient.get(ENDPOINTS.ROUTES);
    return response.data;
  },
};

export default flightService;