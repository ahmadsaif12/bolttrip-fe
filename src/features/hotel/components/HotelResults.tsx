"use client";

import { Star, MapPin, Users, Wifi, UtensilsCrossed, Dumbbell } from "lucide-react";
import { useState } from "react";
import type { Hotel, HotelSearchParams } from "../types/hotel.types";
import BookHotelModal from "./BookHotelModal";

interface HotelResultsProps {
  hotels: Hotel[];
  searchParams: HotelSearchParams;
  isLoading: boolean;
}

const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi size={18} className="text-gray-600" />,
  restaurant: <UtensilsCrossed size={18} className="text-gray-600" />,
  gym: <Dumbbell size={18} className="text-gray-600" />,
};

export default function HotelResults({
  hotels,
  searchParams,
  isLoading,
}: HotelResultsProps) {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-[#FF6D38] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!hotels || hotels.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">No hotels found for your search.</p>
      </div>
    );
  }

  const handleBookClick = (hotel: Hotel) => {
    setSelectedHotel(hotel);
    setShowBookingModal(true);
  };

  const nights = Math.ceil(
    (new Date(searchParams.checkOutDate).getTime() -
      new Date(searchParams.checkInDate).getTime()) /
      (1000 * 60 * 60 * 24)
  );

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Search Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Available Hotels
          </h2>
          <p className="text-gray-600">
            {searchParams.destination} - {nights} night
            {nights !== 1 ? "s" : ""}
          </p>
          <p className="text-sm text-gray-500">
            {searchParams.guests} guest(s) | {searchParams.rooms} room(s)
          </p>
        </div>

        {/* Hotel Results */}
        <div className="space-y-4">
          {hotels.map((hotel, index) => (
            <div
              key={hotel.id || index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row gap-4">
                {/* Image */}
                <div className="md:w-48 h-48 flex-shrink-0 bg-gray-300 relative overflow-hidden">
                  {hotel.image ? (
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <MapPin size={48} className="text-gray-400" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {hotel.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 flex items-center gap-1">
                      <MapPin size={16} />
                      {hotel.location}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={
                              i < Math.floor(hotel.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-gray-900">
                        {hotel.rating}
                      </span>
                      <span className="text-sm text-gray-600">
                        ({hotel.reviews} reviews)
                      </span>
                    </div>

                    {/* Amenities */}
                    {hotel.amenities && hotel.amenities.length > 0 && (
                      <div className="flex gap-3 mb-4 flex-wrap">
                        {hotel.amenities.slice(0, 3).map((amenity, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-1 text-sm text-gray-600"
                          >
                            {amenityIcons[amenity.toLowerCase()] || (
                              <div className="w-4 h-4" />
                            )}
                            {amenity}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Description */}
                    {hotel.description && (
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {hotel.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Price & Book */}
                <div className="md:w-56 p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-gray-200">
                  <div>
                    {hotel.originalPrice && (
                      <p className="text-sm text-gray-500 line-through mb-1">
                        ${hotel.originalPrice}
                      </p>
                    )}
                    <p className="text-3xl font-bold text-[#FF6D38] mb-1">
                      ${hotel.price}
                    </p>
                    <p className="text-xs text-gray-600">per night</p>
                    {nights > 1 && (
                      <p className="text-sm text-gray-600 mt-2">
                        Total: ${hotel.price * nights}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => handleBookClick(hotel)}
                    className="bg-[#FF6D38] text-white px-6 py-3 rounded-lg hover:bg-[#e05b2a] transition-colors font-semibold w-full"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {selectedHotel && showBookingModal && (
        <BookHotelModal
          hotel={selectedHotel}
          searchParams={searchParams}
          nights={nights}
          onClose={() => {
            setShowBookingModal(false);
            setSelectedHotel(null);
          }}
        />
      )}
    </>
  );
}
