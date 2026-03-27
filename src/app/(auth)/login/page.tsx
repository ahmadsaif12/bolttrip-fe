"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLogin } from "@/features/auth/hooks/Useauth";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const verified = searchParams.get("verified");
  const error = searchParams.get("error");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const loginMutation = useLogin();

  const banner = useMemo(() => {
    if (verified === "1") return { type: "success" as const, text: "Email verified. You can sign in now." };
    if (error === "CredentialsSignin") return { type: "error" as const, text: "Invalid email or password." };
    if (error === "unverified") return { type: "error" as const, text: "Please verify your email first." };
    return null;
  }, [error, verified]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    loginMutation.mutate(
      { email, password },
      {
        onSuccess: () => router.push("/dashboard"),
        onError: (err: any) => setErrorMsg(err?.message || "Login failed."),
      }
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h2 className="mt-6 text-3xl font-extrabold text-[#111827]">Sign In</h2>
        <p className="mt-2 text-sm text-gray-500">
          New here?{" "}
          <Link href="/register" className="text-[#FF6D38] font-medium">
            Create an account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-6 shadow-xl sm:rounded-[30px] border border-gray-100">
          {banner && (
            <div
              className={[
                "mb-4 p-3 rounded-xl text-sm border",
                banner.type === "success"
                  ? "bg-green-50 text-green-700 border-green-100"
                  : "bg-red-50 text-red-600 border-red-100",
              ].join(" ")}
            >
              {banner.text}
            </div>
          )}

          {errorMsg && (
            <div className="mb-4 bg-red-50 text-red-500 p-3 rounded-xl text-sm border border-red-100">
              {errorMsg}
            </div>
          )}

          <form className="space-y-5" onSubmit={onSubmit}>
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border rounded-xl w-full"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 border rounded-xl w-full"
            />

            <button
              type="submit"
              disabled={loginMutation.isPending}
              className="w-full bg-[#FF6D38] text-white py-3 rounded-xl font-bold flex items-center justify-center transition-all hover:bg-[#e85a2a]"
            >
              {loginMutation.isPending ? "Signing In..." : "Sign In"} <ArrowRight className="ml-2" size={18} />
            </button>

            <div className="flex items-center justify-between text-sm">
              <Link href="/forgot-password" className="text-gray-500 hover:text-gray-700">
                Forgot password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
