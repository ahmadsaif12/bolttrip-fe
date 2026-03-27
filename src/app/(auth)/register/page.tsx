"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { useRegister } from "@/features/auth/hooks/Useauth";

export default function RegisterPage() {
  const [isSubmitted, setIsSubmitted] = useState(false); 
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (formData.password !== formData.re_password) {
      setErrorMsg("Passwords do not match");
      return;
    }
    
    const payload = {
      name: `${formData.first_name} ${formData.last_name}`.trim(),
      email: formData.email,
      phone: formData.phone_number,
      password: formData.password,
      user_type: "traveler", 
    };

    registerMutation.mutate(payload as any, {
      onSuccess: () => {
        setIsSubmitted(true); 
      },
      onError: (err: any) => {
        setErrorMsg(err.response?.data?.detail || "Registration failed.");
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h2 className="mt-6 text-3xl font-extrabold text-[#111827]">
          {isSubmitted ? "Check Your Inbox" : "Join BOLT Trip"}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-10 px-6 shadow-xl sm:rounded-[30px] border border-gray-100">
          
          {errorMsg && (
            <div className="mb-4 bg-red-50 text-red-500 p-3 rounded-xl text-sm border border-red-100">
              {errorMsg}
            </div>
          )}

          {!isSubmitted ? (
            <form className="space-y-5" onSubmit={handleRegister}>
              <div className="grid grid-cols-2 gap-4">
                <input name="first_name" placeholder="First Name" required onChange={handleChange} className="p-3 border rounded-xl w-full" />
                <input name="last_name" placeholder="Last Name" required onChange={handleChange} className="p-3 border rounded-xl w-full" />
              </div>
              <input name="email" type="email" placeholder="Email Address" required onChange={handleChange} className="p-3 border rounded-xl w-full" />
              <input name="phone_number" placeholder="Phone Number" required onChange={handleChange} className="p-3 border rounded-xl w-full" />
              <div className="grid grid-cols-2 gap-4">
                <input name="password" type="password" placeholder="Password" required onChange={handleChange} className="p-3 border rounded-xl w-full" />
                <input name="re_password" type="password" placeholder="Confirm Password" required onChange={handleChange} className="p-3 border rounded-xl w-full" />
              </div>
              <button type="submit" disabled={registerMutation.isPending} className="w-full bg-[#FF6D38] text-white py-3 rounded-xl font-bold flex items-center justify-center transition-all hover:bg-[#e85a2a]">
                {registerMutation.isPending ? "Creating Account..." : "Create Account"} <ArrowRight className="ml-2" size={18} />
              </button>
              <p className="text-center text-sm text-gray-500">
                Already have an account? <Link href="/login" className="text-[#FF6D38] font-medium">Sign in</Link>
              </p>
            </form>
          ) : (
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="bg-green-50 p-6 rounded-full">
                  <Mail size={50} className="text-green-500 animate-bounce" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">Verification Link Sent!</h3>
                <p className="text-gray-500">
                  We've sent a verification link to{" "}
                  <span className="font-semibold text-gray-800">{formData.email}</span>.
                </p>
                <p className="text-sm text-gray-400">
                  Click the link in the email to activate your account, then come back here to sign in.
                </p>
              </div>
              <Link
                href="/login"
                className="inline-flex w-full items-center justify-center rounded-xl bg-[#FF6D38] py-3 font-bold text-white transition-all hover:bg-[#e85a2a]"
              >
                Go to Sign In <ArrowRight className="ml-2" size={18} />
              </Link>
              <button 
                onClick={() => setIsSubmitted(false)} 
                className="text-[#FF6D38] text-sm font-medium hover:underline"
              >
                Entered wrong email? Change it here
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
