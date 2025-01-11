"use client"

import { useState } from "react";
import { supabase } from "../../../../supabaseClient";

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
    // Basic validations
    if (!firstName || !lastName || !email || !password || !jobPosition || !officeLocation) {
      setError("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Add phone number validation
    if (phoneNumber && !/^\d+$/.test(phoneNumber)) {
      setError("Phone number must contain only digits");
      return;
    }

    try {
      // Sign up with Supabase Auth
      const { data: { user }, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) throw signUpError;

      // Insert additional user data into User table
      const { error: profileError } = await supabase
        .from('User')
        .insert([
          {
            user_id: user.id,
            first_name: firstName.trim(),
            last_name: lastName.trim(),
            mail_id: email.trim(),
            ph_number: phoneNumber ? parseInt(phoneNumber) : null,
            job_position: jobPosition.trim(),
            office_location: officeLocation.trim(),
            created_at: new Date().toISOString(),
          }
        ]);

      if (profileError) throw profileError;

      alert("Check your email for a confirmation link!");
    } catch (err) {
      setError(err.message);
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
