"use client"

import { useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [officeLocation, setOfficeLocation] = useState("");

  const handleSignup = async () => {
    try {
      setError(null);

      // Basic form validation
      if (!firstName || !lastName || !email || !password || !jobPosition || !officeLocation) {
        setError("All fields are required");
        return;
      }

      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address");
        return;
      }

      // Phone number validation (if provided)
      if (phoneNumber && !/^\d+$/.test(phoneNumber)) {
        setError("Phone number must contain only digits");
        return;
      }

      // Convert phone number to integer if provided (matching int8 type in DB)
      const phoneInt = phoneNumber ? parseInt(phoneNumber, 10) : null;

      // Validate phone number conversion
      if (phoneNumber && isNaN(phoneInt)) {
        setError("Phone number must be a valid number");
        return;
      }

      // 1. Create auth user
      const { data, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName.trim(),
            last_name: lastName.trim(),
            ph_number: phoneInt,
            job_position: jobPosition.trim(),
            office_location: officeLocation.trim(),
          }
        }
      });

      if (authError) throw authError;
      if (!data?.user?.id) throw new Error("No user ID returned from signup");

      // Set the session for the new user
      const session = data.session;
      if (session) {
        supabase.auth.setSession(session);
      }

      alert("Success! Please check your email for the confirmation link.");
      
    } catch (err) {
      console.error("Signup error:", err);
      setError(err.message || "An error occurred during signup");
    }
  };

  const handleLogin = async () => {
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    
    });
    if (error) setError(error.message);
    else {
      window.location.href = '/dashboard';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-12 rounded-lg shadow-md w-[800px]">
        <h1 className="text-3xl font-bold mb-8 text-center">Create Account</h1>
        <div className="space-y-6">
          <div className="flex space-x-6">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-1/2 p-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-1/2 p-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Job Position"
            value={jobPosition}
            onChange={(e) => setJobPosition(e.target.value)}
            className="w-full p-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Office Location"
            value={officeLocation}
            onChange={(e) => setOfficeLocation(e.target.value)}
            className="w-full p-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={handleSignup}
            className="w-full bg-blue-500 text-white p-3 text-lg rounded-md hover:bg-blue-600 transition-colors"
          >
            Sign Up
          </button>

          <div className="text-center mt-4">
            <a 
              href="/login" 
              className="text-blue-500 hover:text-blue-600 text-sm"
            >
              Already have an account? Login
            </a>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </div>
      </div>
    </div>
  );
}
