"use client"
import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useRouter } from 'next/navigation';
// import { UserService } from "../../../services/user-service";

export default function Auth() {  
  const router = useRouter();
  const { signUp, loading: authLoading, error: authError } = useAuth();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    jobPosition: "",
    officeLocation: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async () => {
    try {
      setError(null);
      
      const { error } = await signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            phone_number: formData.phoneNumber,
            job_position: formData.jobPosition,
            office_location: formData.officeLocation
          }
        }
      });

      if (error) throw error;

      alert('Please check your email for verification link!');
      router.push('/login');
    } catch (err) {
      console.error('Signup error:', err);
      setError(err.message || "An error occurred during signup");
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
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-1/2 p-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-1/2 p-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="jobPosition"
            placeholder="Job Position"
            value={formData.jobPosition}
            onChange={handleChange}
            className="w-full p-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="officeLocation"
            placeholder="Office Location"
            value={formData.officeLocation}
            onChange={handleChange}
            className="w-full p-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={handleSignup}
            disabled={authLoading}
            className="w-full bg-blue-500 text-white p-3 text-lg rounded-md hover:bg-blue-600 transition-colors disabled:bg-blue-300"
          >
            {authLoading ? "Signing up..." : "Sign Up"}
          </button>

          {(error || authError) && (
            <p className="text-red-500 text-sm text-center mt-2">
              {error || authError}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}