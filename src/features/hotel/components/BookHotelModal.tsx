"use client";

import { X, AlertCircle, CheckCircle, CreditCard } from "lucide-react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { hotelService } from "../service/hotels.service";
import type { Hotel, HotelSearchParams } from "../types/hotel.types";

interface BookHotelModalProps {
  hotel: Hotel;
  searchParams: HotelSearchParams;
  nights: number;
  onClose: () => void;
}

interface GuestInfo {
  name: string;
  email: string;
  phone: string;
}

declare global {
  interface Window {
    KhaltiCheckout?: any;
  }
}

export default function BookHotelModal({
  hotel,
  searchParams,
  nights,
  onClose,
}: BookHotelModalProps) {
  const [step, setStep] = useState<"guest" | "confirmation" | "payment" | "success">(
    "guest"
  );
  const [guestInfo, setGuestInfo] = useState<GuestInfo>({
    name: "",
    email: "",
    phone: "",
  });

  const totalPrice = hotel.price * nights;

  const bookingMutation = useMutation({
    mutationFn: async () => {
      const bookingData = {
        hotel_id: hotel.id,
        check_in_date: searchParams.checkInDate,
        check_out_date: searchParams.checkOutDate,
        guests: searchParams.guests,
        rooms: searchParams.rooms,
        guest_name: guestInfo.name,
        guest_email: guestInfo.email,
        guest_phone: guestInfo.phone,
        total_price: totalPrice,
      };
      return hotelService.bookHotel(bookingData);
    },
    onSuccess: () => {
      setStep("success");
    },
    onError: (error: any) => {
      console.error("Booking failed:", error);
      alert(error?.response?.data?.message || "Booking failed. Please try again.");
    },
  });

  const handleKhaltiPayment = () => {
    if (!window.KhaltiCheckout) {
      alert("Khalti payment system is not loaded. Please refresh the page.");
      return;
    }

    const config = {
      publicKey: "test_public_key_dc74e0fd57cb46cd93832aee0a390234", // Replace with your actual public key
      productIdentity: `hotel-${hotel.id}`,
      productName: `${hotel.name} Hotel Booking`,
      productUrl: window.location.href,
      amount: totalPrice * 100, // Khalti expects amount in paisa (multiply by 100)
      eventHandler: {
        onSuccess: (payload: any) => {
          console.log("Payment successful:", payload);
          // After payment success, proceed with booking
          bookingMutation.mutate();
        },
        onError: (error: any) => {
          console.log("Payment failed:", error);
          alert("Payment failed. Please try again.");
        },
        onClose: () => {
          console.log("Payment widget closed");
        },
      },
      paymentPreference: ["KHALTI", "EBANKING", "MOBILE_BANKING", "CONNECT_IPS", "SCT"],
    };

    const checkout = new window.KhaltiCheckout(config);
    checkout.show({ amount: totalPrice * 100 });
  };

  const updateGuestInfo = (field: keyof GuestInfo, value: string) => {
    setGuestInfo((prev) => ({ ...prev, [field]: value }));
  };

  const isGuestInfoComplete = guestInfo.name && guestInfo.email && guestInfo.phone;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Book Your Hotel</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === "guest" && (
            <>
              {/* Hotel Summary */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {hotel.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {hotel.location}
                    </p>
                    <p className="text-sm text-gray-600">
                      Check-in: {searchParams.checkInDate}
                    </p>
                    <p className="text-sm text-gray-600">
                      Check-out: {searchParams.checkOutDate}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-1">
                      ${hotel.price} × {nights} night{nights !== 1 ? "s" : ""}
                    </p>
                    <p className="text-2xl font-bold text-[#FF6D38]">
                      ${hotel.price * nights}
                    </p>
                  </div>
                </div>
              </div>

              {/* Guest Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Guest Information
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={guestInfo.name}
                      onChange={(e) => updateGuestInfo("name", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6D38]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={guestInfo.email}
                      onChange={(e) => updateGuestInfo("email", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6D38]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={guestInfo.phone}
                      onChange={(e) => updateGuestInfo("phone", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6D38]"
                    />
                  </div>
                </div>
              </div>

              {/* Booking Summary */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6 mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Guests</p>
                    <p className="font-semibold text-gray-900">
                      {searchParams.guests}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Rooms</p>
                    <p className="font-semibold text-gray-900">
                      {searchParams.rooms}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Nights</p>
                    <p className="font-semibold text-gray-900">{nights}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Total</p>
                    <p className="font-bold text-[#FF6D38]">
                      ${hotel.price * nights}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setStep("confirmation")}
                  disabled={!isGuestInfoComplete}
                  className="flex-1 px-4 py-3 bg-[#FF6D38] text-white rounded-lg hover:bg-[#e05b2a] transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue to Confirmation
                </button>
              </div>
            </>
          )}

          {step === "confirmation" && (
            <>
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Confirm Your Booking
                </h3>

                {/* Hotel Details */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Hotel Details
                  </h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <strong>Hotel:</strong> {hotel.name}
                    </p>
                    <p>
                      <strong>Location:</strong> {hotel.location}
                    </p>
                    <p>
                      <strong>Check-in:</strong> {searchParams.checkInDate}
                    </p>
                    <p>
                      <strong>Check-out:</strong> {searchParams.checkOutDate}
                    </p>
                    <p>
                      <strong>Duration:</strong> {nights} night
                      {nights !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>

                {/* Guest Details */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Guest Information
                  </h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <strong>Name:</strong> {guestInfo.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {guestInfo.email}
                    </p>
                    <p>
                      <strong>Phone:</strong> {guestInfo.phone}
                    </p>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Base Price × {nights} night{nights !== 1 ? "s" : ""}</span>
                      <span>${hotel.price} × {nights}</span>
                    </div>
                    <div className="border-t border-blue-200 pt-2 mt-2 flex justify-between font-bold">
                      <span>Total</span>
                      <span className="text-[#FF6D38] text-lg">
                        ${hotel.price * nights}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setStep("guest")}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => bookingMutation.mutate()}
                    disabled={bookingMutation.isPending}
                    className="flex-1 px-4 py-3 bg-[#FF6D38] text-white rounded-lg hover:bg-[#e05b2a] transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {bookingMutation.isPending ? "Processing..." : "Complete Booking"}
                  </button>
                </div>

                {bookingMutation.isError && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    <AlertCircle size={18} />
                    <span>
                      {(bookingMutation.error as any)?.response?.data
                        ?.message || "Booking failed"}
                    </span>
                  </div>
                )}
              </div>
            </>
          )}

          {step === "success" && (
            <div className="text-center py-8">
              <div className="mb-4 flex justify-center">
                <CheckCircle size={64} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Booking Confirmed!
              </h3>
              <p className="text-gray-600 mb-6">
                Your hotel booking has been confirmed. A confirmation email has
                been sent to {guestInfo.email}.
              </p>
              <button
                onClick={onClose}
                className="w-full px-4 py-3 bg-[#FF6D38] text-white rounded-lg hover:bg-[#e05b2a] transition-colors font-semibold"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
