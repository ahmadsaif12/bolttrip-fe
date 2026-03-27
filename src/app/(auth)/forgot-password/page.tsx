"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, ArrowRight, KeyRound } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { publicClient } from "@/service/apiClient";
import { ENDPOINTS } from "@/service/endpoints";

type RequestOtpPayload = { email: string };
type ForgotPasswordPayload = {
  email: string;
  otp: string;
  new_password: string;
  confirm_password: string;
};

export default function ForgotPasswordPage() {
  const router = useRouter();

  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const canSubmitStep2 = useMemo(() => {
    if (!email || !otp || !newPassword || !confirmPassword) return false;
    return newPassword === confirmPassword;
  }, [confirmPassword, email, newPassword, otp]);

  const requestOtpMutation = useMutation({
    mutationFn: (payload: RequestOtpPayload) =>
      publicClient.post(ENDPOINTS.auth.requestOtp, payload),
    onSuccess: () => {
      setErrorMsg("");
      setMessage("OTP sent. Please check your email.");
      setStep(2);
    },
    onError: (err: unknown) => {
      setMessage("");
      const axiosErr = err as AxiosError<{ message?: string }>;
      setErrorMsg(
        axiosErr?.response?.data?.message ||
          (err instanceof Error ? err.message : "") ||
          "Failed to send OTP."
      );
    },
  });

  const changePasswordMutation = useMutation({
    mutationFn: (payload: ForgotPasswordPayload) =>
      publicClient.post(ENDPOINTS.auth.changePassword, payload),
    onSuccess: () => {
      setErrorMsg("");
      setMessage("Password updated. Redirecting to login...");
      setTimeout(() => router.push("/login"), 700);
    },
    onError: (err: unknown) => {
      setMessage("");
      const axiosErr = err as AxiosError<{ message?: string }>;
      setErrorMsg(
        axiosErr?.response?.data?.message ||
          (err instanceof Error ? err.message : "") ||
          "Failed to update password."
      );
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-[#111827]">
          Forgot your password?
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {step === 1
            ? "Enter your email to receive an OTP."
            : "Enter the OTP and your new password."}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] sm:rounded-[30px] sm:px-10 border border-gray-100">
          {(errorMsg || message) && (
            <div
              className={[
                "p-3 rounded-xl text-sm font-medium border",
                errorMsg
                  ? "bg-red-50 text-red-500 border-red-100"
                  : "bg-green-50 text-green-700 border-green-100",
              ].join(" ")}
            >
              {errorMsg || message}
            </div>
          )}

          {step === 1 ? (
            <form
              className="space-y-6 mt-6"
              onSubmit={(e) => {
                e.preventDefault();
                requestOtpMutation.mutate({ email });
              }}
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">Email address</label>
                <div className="mt-2 relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full pl-11 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#FF6D38] focus:border-[#FF6D38] sm:text-sm transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={requestOtpMutation.isPending}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-lg font-bold text-white bg-[#FF6D38] hover:bg-[#e05b2a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6D38] transition-colors disabled:opacity-75"
              >
                {requestOtpMutation.isPending ? "Sending..." : "Send OTP"}
                {!requestOtpMutation.isPending && <ArrowRight size={18} className="ml-2" />}
              </button>

              <div className="text-sm text-center">
                <Link href="/login" className="font-medium text-[#004E89] hover:underline">
                  Back to login
                </Link>
              </div>
            </form>
          ) : (
            <form
              className="space-y-6 mt-6"
              onSubmit={(e) => {
                e.preventDefault();
                setMessage("");
                if (newPassword !== confirmPassword) {
                  setErrorMsg("Passwords do not match.");
                  return;
                }
                changePasswordMutation.mutate({
                  email,
                  otp,
                  new_password: newPassword,
                  confirm_password: confirmPassword,
                });
              }}
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">Email address</label>
                <div className="mt-2 relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full pl-11 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#FF6D38] focus:border-[#FF6D38] sm:text-sm transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">OTP</label>
                <div className="mt-2 relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <KeyRound size={18} />
                  </div>
                  <input
                    type="text"
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="appearance-none block w-full pl-11 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#FF6D38] focus:border-[#FF6D38] sm:text-sm transition-colors"
                    placeholder="Enter OTP"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">New password</label>
                <div className="mt-2 relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Lock size={18} />
                  </div>
                  <input
                    type="password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="appearance-none block w-full pl-11 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#FF6D38] focus:border-[#FF6D38] sm:text-sm transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm new password
                </label>
                <div className="mt-2 relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Lock size={18} />
                  </div>
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="appearance-none block w-full pl-11 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#FF6D38] focus:border-[#FF6D38] sm:text-sm transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setErrorMsg("");
                    setMessage("");
                    setStep(1);
                  }}
                  className="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm text-lg font-bold text-gray-800 bg-white hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={changePasswordMutation.isPending || !canSubmitStep2}
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-lg font-bold text-white bg-[#FF6D38] hover:bg-[#e05b2a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6D38] transition-colors disabled:opacity-75"
                >
                  {changePasswordMutation.isPending ? "Updating..." : "Update password"}
                  {!changePasswordMutation.isPending && <ArrowRight size={18} className="ml-2" />}
                </button>
              </div>

              <div className="text-sm text-center">
                <button
                  type="button"
                  onClick={() => requestOtpMutation.mutate({ email })}
                  className="font-medium text-[#004E89] hover:underline"
                  disabled={requestOtpMutation.isPending || !email}
                >
                  Resend OTP
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
