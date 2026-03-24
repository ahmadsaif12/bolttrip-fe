export const ENDPOINTS = {
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