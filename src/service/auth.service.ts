import { apiClient } from "./api";
import { ENDPOINTS } from "./endpoints";

export const AuthService = {
  register: (data: any) => apiClient.post(ENDPOINTS.REGISTER, data),
  login: (data: any) => apiClient.post(ENDPOINTS.TOKEN, data),
  refreshToken: (data: any) => apiClient.post(ENDPOINTS.TOKEN_REFRESH, data),
  getProfile: () => apiClient.get(ENDPOINTS.ACCOUNT),
  getProfiles: () => apiClient.get(ENDPOINTS.PROFILES),
  getGuides: () => apiClient.get(ENDPOINTS.GUIDES),
  getWishlist: () => apiClient.get(ENDPOINTS.WISHLIST),
  getNotifications: () => apiClient.get(ENDPOINTS.NOTIFICATIONS),
};
