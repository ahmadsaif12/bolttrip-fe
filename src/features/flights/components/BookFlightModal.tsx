"use client";

import { X, AlertCircle, CheckCircle, CreditCard } from "lucide-react";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { flightService } from "../service/flights.service";
import type { Flight, FlightSearchParams, PassengerInfo } from "../types/flight.types";

interface BookFlightModalProps {
  flight: Flight;
  searchParams: FlightSearchParams;
  onClose: () => void;
}

declare global {
  interface Window {
    KhaltiCheckout?: any;
  }
}

export default function BookFlightModal({
  flight,
  searchParams,
  onClose,
}: BookFlightModalProps) {
  const [step, setStep] = useState<"passengers" | "confirmation" | "payment" | "success">("passengers");
  const [passengers, setPassengers] = useState<PassengerInfo[]>(
    Array(Number(searchParams.traveler) || 1).fill(null).map(() => ({
      name: "",
      email: "",
      phone: "",
      passport_number: "",
      date_of_birth: "",
    }))
  );

  const totalPrice = flight.price * (Number(searchParams.traveler) || 1);

  const bookingMutation = useMutation({
    mutationFn: async () => {
      const bookingData = {
        flight_id: flight.id,
        passengers,
        departure_date: searchParams.departureDate,
        return_date: searchParams.returnDate,
        total_price: totalPrice,
      };
      return flightService.bookFlight(bookingData);
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
      productIdentity: `flight-${flight.id}`,
      productName: `${flight.airline} Flight`,
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

  const updatePassenger = (index: number, field: keyof PassengerInfo, value: string) => {
    const updated = [...passengers];
    updated[index] = { ...updated[index], [field]: value };
    setPassengers(updated);
  };

  const allPassengersComplete = passengers.every(
    (p) => p.name && p.email && p.phone
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Book Your Flight</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === "passengers" && (
            <>
              {/* Flight Summary */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-600">{flight.airline}</p>
                    <p className="font-bold text-gray-900">
                      {flight.departure.time} → {flight.arrival.time}
                    </p>
                    <p className="text-sm text-gray-600">
                      {flight.departure.airportCode} → {flight.arrival.airportCode}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-[#FF6D38]">
                      ${flight.price}
                    </p>
                    <p className="text-sm text-gray-600">per person</p>
                  </div>
                </div>
              </div>

              {/* Passenger Form */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Enter Passenger Details
                </h3>
                {passengers.map((passenger, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-4">
                      Passenger {index + 1}
                    </h4>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Full Name *"
                        value={passenger.name}
                        onChange={(e) =>
                          updatePassenger(index, "name", e.target.value)
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6D38]"
                      />
                      <input
                        type="email"
                        placeholder="Email *"
                        value={passenger.email}
                        onChange={(e) =>
                          updatePassenger(index, "email", e.target.value)
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6D38]"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number *"
                        value={passenger.phone}
                        onChange={(e) =>
                          updatePassenger(index, "phone", e.target.value)
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6D38]"
                      />
                      <input
                        type="text"
                        placeholder="Passport Number (optional)"
                        value={passenger.passport_number}
                        onChange={(e) =>
                          updatePassenger(index, "passport_number", e.target.value)
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6D38]"
                      />
                      <input
                        type="date"
                        placeholder="Date of Birth (optional)"
                        value={passenger.date_of_birth}
                        onChange={(e) =>
                          updatePassenger(index, "date_of_birth", e.target.value)
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6D38]"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Booking Summary */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700">
                    {Number(searchParams.traveler)} passenger(s) × ${flight.price}
                  </span>
                  <span className="font-bold text-gray-900">
                    Total: ${flight.price * (Number(searchParams.traveler) || 1)}
                  </span>
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
                  disabled={!allPassengersComplete}
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

                {/* Flight Details */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Flight Details
                  </h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <strong>Airline:</strong> {flight.airline}
                    </p>
                    <p>
                      <strong>Date:</strong> {searchParams.departureDate}
                      {searchParams.returnDate &&
                        ` - ${searchParams.returnDate}`}
                    </p>
                    <p>
                      <strong>Route:</strong> {flight.departure.airportCode} →{" "}
                      {flight.arrival.airportCode}
                    </p>
                    <p>
                      <strong>Duration:</strong> {flight.duration} (
                      {flight.stops === 0 ? "Nonstop" : `${flight.stops} stop`})
                    </p>
                  </div>
                </div>

                {/* Passengers Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Passenger Details
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    {passengers.map((p, i) => (
                      <p key={i}>
                        <strong>P{i + 1}:</strong> {p.name} ({p.email})
                      </p>
                    ))}
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Base Price × {searchParams.traveler}</span>
                      <span>
                        ${flight.price} ×{" "}
                        {searchParams.traveler}
                      </span>
                    </div>
                    <div className="border-t border-blue-200 pt-2 mt-2 flex justify-between font-bold">
                      <span>Total</span>
                      <span className="text-[#FF6D38] text-lg">
                        ${flight.price * (Number(searchParams.traveler) || 1)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setStep("passengers")}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep("payment")}
                    className="flex-1 px-4 py-3 bg-[#FF6D38] text-white rounded-lg hover:bg-[#e05b2a] transition-colors font-semibold"
                  >
                    Proceed to Payment
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

          {step === "payment" && (
            <>
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Payment Details
                </h3>

                {/* Payment Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Payment Summary
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Flight Booking</span>
                      <span>${totalPrice}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between font-bold">
                      <span>Total Amount</span>
                      <span className="text-[#FF6D38] text-lg">${totalPrice}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CreditCard size={20} />
                    Pay with Khalti
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Secure payment powered by Khalti. Multiple payment options available.
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-purple-500 rounded"></div>
                      <span>Khalti Wallet</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      <span>eBanking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <span>Mobile Banking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-orange-500 rounded"></div>
                      <span>Connect IPS</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setStep("confirmation")}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleKhaltiPayment}
                    disabled={bookingMutation.isPending}
                    className="flex-1 px-4 py-3 bg-[#FF6D38] text-white rounded-lg hover:bg-[#e05b2a] transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {bookingMutation.isPending ? "Processing..." : "Pay Now"}
                  </button>
                </div>

                {bookingMutation.isError && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    <AlertCircle size={18} />
                    <span>
                      {(bookingMutation.error as any)?.response?.data
                        ?.message || "Payment failed"}
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
                Your flight booking has been confirmed. Check your email for
                booking details.
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
