export interface Hotel {
  id: string | number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  image?: string;
  price: number;
  originalPrice?: number;
  description?: string;
  amenities?: string[];
  rooms?: number;
}

export interface HotelSearchParams {
  destination: string;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
  rooms: number;
}

export interface HotelBookingPayload {
  hotel_id: string | number;
  check_in_date: string;
  check_out_date: string;
  guests: number;
  rooms: number;
  guest_name: string;
  guest_email: string;
  guest_phone: string;
  total_price: number;
}

export interface HotelBookingResponse {
  id: number;
  booking_id: string;
  hotel_id: number;
  user_id: number;
  status: string;
  check_in_date: string;
  check_out_date: string;
  total_price: number;
  created_at: string;
}
