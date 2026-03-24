import { apiClient } from "./api";
import { ENDPOINTS } from "./endpoints";

export const HotelsService = {
  getHotels: () => apiClient.get(ENDPOINTS.HOTELS),
  createHotel: (data: any) => apiClient.post(ENDPOINTS.HOTELS, data),
  getHotelDetails: (id: string | number) => apiClient.get(ENDPOINTS.HOTELS_DETAIL(id)),
  updateHotel: (id: string | number, data: any) => apiClient.patch(ENDPOINTS.HOTELS_DETAIL(id), data),
  deleteHotel: (id: string | number) => apiClient.delete(ENDPOINTS.HOTELS_DETAIL(id)),
  
  getHotelAmenities: (id: string | number) => apiClient.get(ENDPOINTS.HOTEL_AMENITIES(id)),
  addHotelAmenity: (id: string | number, data: any) => apiClient.post(ENDPOINTS.HOTEL_AMENITIES(id), data),
  
  getHotelRooms: (id: string | number) => apiClient.get(ENDPOINTS.HOTEL_ROOMS(id)),
  addHotelRoom: (id: string | number, data: any) => apiClient.post(ENDPOINTS.HOTEL_ROOMS(id), data),
};
