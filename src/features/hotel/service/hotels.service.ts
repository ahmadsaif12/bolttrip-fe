import { apiClient } from "@/service/apiClient";
import { ENDPOINTS } from "@/service/endpoints";
import type {
  Hotel,
  HotelSearchParams,
  HotelBookingPayload,
  HotelBookingResponse,
} from "../types/hotel.types";

// Mock data for testing without backend
const MOCK_HOTELS: Hotel[] = [
  {
    id: 1,
    name: "Grand Plaza Hotel",
    location: "Downtown New York",
    rating: 4.8,
    reviews: 450,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500",
    price: 250,
    amenities: ["WiFi", "Restaurant", "Gym"],
    rooms: 5,
  },
  {
    id: 2,
    name: "Luxury Haven Resort",
    location: "Manhattan",
    rating: 4.9,
    reviews: 680,
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500",
    price: 350,
    amenities: ["WiFi", "Restaurant", "Gym"],
    rooms: 8,
  },
  {
    id: 3,
    name: "Budget Stay Inn",
    location: "Queens",
    rating: 4.2,
    reviews: 280,
    image: "https://images.unsplash.com/photo-1559627615-cd4628902d4a?w=500",
    price: 120,
    amenities: ["WiFi"],
    rooms: 12,
  },
  {
    id: 4,
    name: "Business Suite Hotel",
    location: "Midtown",
    rating: 4.5,
    reviews: 520,
    image: "https://images.unsplash.com/photo-1591825730675-c37ca97fc2d5?w=500",
    price: 200,
    amenities: ["WiFi", "Restaurant"],
    rooms: 6,
  },
];

export const hotelService = {
  /**
   * Search for hotels based on search parameters
   */
  searchHotels: async (params: HotelSearchParams) => {
    try {
      const response = await apiClient.get<Hotel[]>(ENDPOINTS.HOTELS, {
        params: {
          destination: params.destination,
          check_in_date: params.checkInDate,
          check_out_date: params.checkOutDate,
          guests: params.guests,
          rooms: params.rooms,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Hotel search error:", error);
      // Return mock data if backend fails
      console.log("Using mock hotel data for demo");
      return MOCK_HOTELS;
    }
  },

  /**
   * Get all available hotels
   */
  getHotels: async () => {
    try {
      const response = await apiClient.get<Hotel[]>(ENDPOINTS.HOTELS);
      return response.data;
    } catch (error) {
      console.error("Get hotels error:", error);
      throw error;
    }
  },

  /**
   * Get hotel details by ID
   */
  getHotelDetails: async (id: string | number) => {
    try {
      const response = await apiClient.get<Hotel>(ENDPOINTS.HOTELS_DETAIL(id));
      return response.data;
    } catch (error) {
      console.error("Get hotel details error:", error);
      throw error;
    }
  },

  /**
   * Book a hotel - creates a booking
   */
  bookHotel: async (bookingData: HotelBookingPayload) => {
    try {
      const response = await apiClient.post<HotelBookingResponse>(
        ENDPOINTS.BOOKINGS,
        bookingData
      );
      return response.data;
    } catch (error) {
      console.error("Hotel booking error:", error);
      throw error;
    }
  },

  /**
   * Get hotel amenities
   */
  getHotelAmenities: async (id: string | number) => {
    try {
      const response = await apiClient.get(ENDPOINTS.HOTEL_AMENITIES(id));
      return response.data;
    } catch (error) {
      console.error("Get hotel amenities error:", error);
      throw error;
    }
  },

  /**
   * Get hotel rooms
   */
  getHotelRooms: async (id: string | number) => {
    try {
      const response = await apiClient.get(ENDPOINTS.HOTEL_ROOMS(id));
      return response.data;
    } catch (error) {
      console.error("Get hotel rooms error:", error);
      throw error;
    }
  },
};

export default hotelService;
