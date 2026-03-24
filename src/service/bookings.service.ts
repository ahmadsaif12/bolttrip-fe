import { apiClient } from "./api";
import { ENDPOINTS } from "./endpoints";

export const BookingsService = {
  createBooking: (data: any) => apiClient.post(ENDPOINTS.BOOKINGS, data),
  createPayment: (data: any) => apiClient.post(ENDPOINTS.BOOKING_PAYMENTS, data),
  addTravelers: (data: any) => apiClient.post(ENDPOINTS.BOOKING_TRAVELERS, data),
};
