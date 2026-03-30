import { apiClient } from "@/service/apiClient";
import { ENDPOINTS } from "@/service/endpoints";
import type {
  Flight,
  FlightSearchParams,
  FlightBookingPayload,
  BookingResponse,
} from "../types/flight.types";

// Mock data for testing without backend
const MOCK_FLIGHTS: Flight[] = [
  {
    id: 1,
    airline: "United Airlines",
    departure: { time: "08:00 AM", airport: "New York", airportCode: "JFK" },
    arrival: { time: "11:30 AM", airport: "Los Angeles", airportCode: "LAX" },
    duration: "5h 30m",
    stops: 0,
    price: 450,
    originalPrice: 600,
    seats: 5,
  },
  {
    id: 2,
    airline: "American Airlines",
    departure: { time: "10:15 AM", airport: "New York", airportCode: "JFK" },
    arrival: { time: "01:45 PM", airport: "Los Angeles", airportCode: "LAX" },
    duration: "5h 30m",
    stops: 1,
    price: 350,
    seats: 12,
  },
  {
    id: 3,
    airline: "Delta Airlines",
    departure: { time: "02:00 PM", airport: "New York", airportCode: "JFK" },
    arrival: { time: "05:30 PM", airport: "Los Angeles", airportCode: "LAX" },
    duration: "5h 30m",
    stops: 0,
    price: 520,
    originalPrice: 650,
    seats: 3,
  },
];

export const flightService = {
  /**
   * Search for flights based on search parameters
   */
  searchFlights: async (params: FlightSearchParams) => {
    try {
      const response = await apiClient.get<Flight[]>(ENDPOINTS.FLIGHT_SEARCHES, {
        params: {
          from: params.from,
          to: params.to,
          departure_date: params.departureDate,
          return_date: params.returnDate,
          travelers: params.traveler,
          type: params.type,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Flight search error:", error);
      // Return mock data if backend fails
      console.log("Using mock flight data for demo");
      return MOCK_FLIGHTS;
    }
  },

  /**
   * Get available flights
   */
  getFlights: async () => {
    try {
      const response = await apiClient.get<Flight[]>(ENDPOINTS.FLIGHTS);
      return response.data;
    } catch (error) {
      console.error("Get flights error:", error);
      throw error;
    }
  },

  /**
   * Get flight details by ID
   */
  getFlightDetails: async (id: string | number) => {
    try {
      const response = await apiClient.get<Flight>(ENDPOINTS.FLIGHTS_DETAIL(id));
      return response.data;
    } catch (error) {
      console.error("Get flight details error:", error);
      throw error;
    }
  },

  /**
   * Book a flight - creates a booking
   */
  bookFlight: async (bookingData: FlightBookingPayload) => {
    try {
      const response = await apiClient.post<BookingResponse>(
        ENDPOINTS.BOOKINGS,
        bookingData
      );
      return response.data;
    } catch (error) {
      console.error("Flight booking error:", error);
      throw error;
    }
  },

  /**
   * Get airlines
   */
  getAirlines: async () => {
    try {
      const response = await apiClient.get(ENDPOINTS.AIRLINES);
      return response.data;
    } catch (error) {
      console.error("Get airlines error:", error);
      throw error;
    }
  },

  /**
   * Get airports
   */
  getAirports: async () => {
    try {
      const response = await apiClient.get(ENDPOINTS.AIRPORTS);
      return response.data;
    } catch (error) {
      console.error("Get airports error:", error);
      throw error;
    }
  },

  /**
   * Get routes
   */
  getRoutes: async () => {
    try {
      const response = await apiClient.get(ENDPOINTS.ROUTES);
      return response.data;
    } catch (error) {
      console.error("Get routes error:", error);
      throw error;
    }
  },
};

export default flightService;
