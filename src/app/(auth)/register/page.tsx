"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");

      // Sign in automatically after successful registration
      await signIn("credentials", {
        redirect: true,
        email: formData.email,
        password: formData.password,
        callbackUrl: "/",
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-[40px] p-10 shadow-2xl border border-gray-100 text-center">
        <div className="mb-10">
          <h2 className="text-3xl font-black text-[#004E8C] tracking-tight">Create Account</h2>
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-2">
            Start your journey with BoltTrip
          </p>
        </div>

        {error && (
          <div className="mb-6 w-full p-4 bg-red-50 text-red-600 text-xs font-bold rounded-2xl border border-red-100 text-left">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="flex flex-col gap-4 w-full text-left">
          <div className="space-y-1">
            <label className="text-[10px] font-black text-gray-400 uppercase ml-4">Username</label>
            <input
              type="text"
              placeholder="johndoe123"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              required
              className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-[20px] outline-none focus:ring-2 focus:ring-blue-500/20 transition-all font-medium"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black text-gray-400 uppercase ml-4">Email Address</label>
            <input
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-[20px] outline-none focus:ring-2 focus:ring-blue-500/20 transition-all font-medium"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black text-gray-400 uppercase ml-4">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-[20px] outline-none focus:ring-2 focus:ring-blue-500/20 transition-all font-medium"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-5 bg-[#004E8C] text-white rounded-[20px] font-black uppercase tracking-widest hover:bg-[#003d6e] transition-all disabled:opacity-50 mt-4 shadow-lg shadow-blue-900/20"
          >
            {loading ? "Registering..." : "Create Account"}
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-100"></span></div>
          <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest">
            <span className="bg-white px-4 text-gray-300">Or</span>
          </div>
        </div>

        <button 
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center gap-3 py-4 px-6 border-2 border-gray-50 rounded-[20px] hover:bg-gray-50 transition-all font-bold text-gray-700"
        >
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>

        <p className="mt-8 text-sm font-bold text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-[#004E8C] hover:underline ml-1">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}