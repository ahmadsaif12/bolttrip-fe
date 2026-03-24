import { apiClient } from "./api";
import { ENDPOINTS } from "./endpoints";

export const FlightsService = {
  getFlights: () => apiClient.get(ENDPOINTS.FLIGHTS),
  createFlight: (data: any) => apiClient.post(ENDPOINTS.FLIGHTS, data),
  getFlightDetails: (id: string | number) => apiClient.get(ENDPOINTS.FLIGHTS_DETAIL(id)),
  
  getAirlines: () => apiClient.get(ENDPOINTS.AIRLINES),
  getAirports: () => apiClient.get(ENDPOINTS.AIRPORTS),
  getRoutes: () => apiClient.get(ENDPOINTS.ROUTES),
  
  searchFlights: (data: any) => apiClient.post(ENDPOINTS.FLIGHT_SEARCHES, data),
};
