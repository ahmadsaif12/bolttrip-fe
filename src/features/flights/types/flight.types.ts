export interface Flight {
  id: string | number;
  airline: string;
  airlineCode?: string;
  departure: {
    time: string;
    airport: string;
    airportCode: string;
  };
  arrival: {
    time: string;
    airport: string;
    airportCode: string;
  };
  duration: string;
  stops: number;
  price: number;
  originalPrice?: number;
  seats?: number;
  image?: string;
}

export interface FlightSearchParams {
  from: string;
  to: string;
  departureDate: string;
  returnDate?: string;
  traveler: number | string;
  type: "One Way" | "Round Trip" | "Multi City";
}

export interface FlightBookingPayload {
  flight_id: string | number;
  passengers: PassengerInfo[];
  departure_date: string;
  return_date?: string;
  total_price: number;
}

export interface PassengerInfo {
  name: string;
  email: string;
  phone: string;
  passport_number?: string;
  date_of_birth?: string;
}

export interface BookingResponse {
  id: number;
  booking_id: string;
  flight_id: number;
  user_id: number;
  status: string;
  total_price: number;
  created_at: string;
}
