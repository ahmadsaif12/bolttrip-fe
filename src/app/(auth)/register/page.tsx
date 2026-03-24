"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Mail, Lock, ArrowRight, Phone } from "lucide-react";
import { useRegister } from "@/features/auth/hooks/Useauth";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    re_password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const registerMutation = useRegister();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.re_password) {
      setErrorMsg("Passwords do not match");
      return;
    }
    
    registerMutation.mutate(formData as any, {
      onSuccess: () => {
        router.push("/login?registered=true");
      },
      onError: (err: any) => {
        setErrorMsg(err.message || "Failed to register account.");
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-[#111827]">
          Join BOLT Trip
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-[#FF6D38] hover:text-[#e05b2a]">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-10 px-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] sm:rounded-[30px] sm:px-10 border border-gray-100">
          <form className="space-y-6" onSubmit={handleRegister}>
            {errorMsg && (
              <div className="bg-red-50 text-red-500 p-3 rounded-xl text-sm font-medium border border-red-100">
                {errorMsg}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <div className="mt-2 relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <User size={18} />
                  </div>
                  <input
                    name="first_name"
                    type="text"
                    required
                    value={formData.first_name}
                    onChange={handleChange}
                    className="appearance-none block w-full pl-11 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-[#FF6D38] focus:border-[#FF6D38] sm:text-sm transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <div className="mt-2 relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <User size={18} />
                  </div>
                  <input
                    name="last_name"
                    type="text"
                    required
                    value={formData.last_name}
                    onChange={handleChange}
                    className="appearance-none block w-full pl-11 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-[#FF6D38] focus:border-[#FF6D38] sm:text-sm transition-colors"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <div className="mt-2 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Mail size={18} />
                </div>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none block w-full pl-11 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#FF6D38] focus:border-[#FF6D38] sm:text-sm transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <div className="mt-2 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Phone size={18} />
                </div>
                <input
                  name="phone_number"
                  type="tel"
                  required
                  value={formData.phone_number}
                  onChange={handleChange}
                  className="appearance-none block w-full pl-11 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#FF6D38] focus:border-[#FF6D38] sm:text-sm transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <div className="mt-2 relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Lock size={18} />
                  </div>
                  <input
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="appearance-none block w-full pl-11 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-[#FF6D38] focus:border-[#FF6D38] sm:text-sm transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <div className="mt-2 relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Lock size={18} />
                  </div>
                  <input
                    name="re_password"
                    type="password"
                    required
                    value={formData.re_password}
                    onChange={handleChange}
                    className="appearance-none block w-full pl-11 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-[#FF6D38] focus:border-[#FF6D38] sm:text-sm transition-colors"
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={registerMutation.isPending}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-lg font-bold text-white bg-[#FF6D38] hover:bg-[#e05b2a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6D38] transition-colors disabled:opacity-75 mt-6"
              >
                {registerMutation.isPending ? "Creating account..." : "Register"}
                {!registerMutation.isPending && <ArrowRight size={18} className="ml-2" />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}