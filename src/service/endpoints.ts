export const ENDPOINTS = {
  auth: {
    // Base: `/api/users`
    register: "/api/users/register/",
    login: "/api/users/login/",
    tokenRefresh: "/api/users/token/refresh/",
    googleSync: "/api/users/google-sync/",
    requestOtp: "/api/users/request-otp/",
    verifyOtp: "/api/users/verify-otp/",
    resetPassword: "/api/users/reset-password/",
    resetPasswordConfirm: (uidb64: string, token: string) =>
      `/api/users/reset-password/confirm/${uidb64}/${token}/`,
    // Used for both authenticated change + "forgot password" flows depending on backend
    changePassword: "/api/users/change-password/",
  },

  // Auth
  REGISTER: "/register/",
  TOKEN: "/token/",
  TOKEN_REFRESH: "/token/refresh/",
  ACCOUNT: "/account/",
  PROFILES: "/profiles/",
  GUIDES: "/guides/",
  WISHLIST: "/wishlist/",
  NOTIFICATIONS: "/notifications/",

  // Hotels
  HOTELS: "/hotels/",
  HOTELS_DETAIL: (id: string | number) => `/hotels/${id}/`,
  HOTEL_AMENITIES: (id: string | number) => `/hotels/${id}/amenities/`,
  HOTEL_ROOMS: (id: string | number) => `/hotels/${id}/rooms/`,

  // Flights
  FLIGHTS: "/api/flights/",
  FLIGHTS_DETAIL: (id: string | number) => `/api/flights/${id}/`,
  AIRLINES: "/api/flights/airlines/",
  AIRPORTS: "/api/flights/airports/",
  ROUTES: "/api/flights/routes/",
  FLIGHT_SEARCHES: "/api/flights/searches/",

  // Bookings
  BOOKINGS: "/api/bookings/",
  BOOKING_PAYMENTS: "/api/bookings/payments/",
  BOOKING_TRAVELERS: "/api/bookings/travelers/",
};
