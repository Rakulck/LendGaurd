"use client"
import { useState } from "react";
import { useAuth} from "../../../../usecontext/AuthContext";

export default function Auth() {  
  const { signUp, loading } = useAuth();
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

      // Basic form validation
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.jobPosition || !formData.officeLocation) {
        setError("All fields are required");
        return;
      }

      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError("Please enter a valid email address");
        return;
      }

      // Phone number validation (if provided)
      if (formData.phoneNumber && !/^\d+$/.test(formData.phoneNumber)) {
        setError("Phone number must contain only digits");
        return;
      }

      // Convert phone number to integer if provided
      const phoneInt = formData.phoneNumber ? parseInt(formData.phoneNumber, 10) : null;

      // Validate phone number conversion
      if (formData.phoneNumber && isNaN(phoneInt)) {
        setError("Phone number must be a valid number");
        return;
      }

      const { error: signUpError } = await signUp(formData);
      
      if (signUpError) {
        setError(signUpError.message);
        return;
      }

      alert('Please check your email for verification link!');
      window.location.href = '/dashboard';
      
    } catch (err) {
      console.error("Signup error:", err);
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
            disabled={loading}
            className="w-full bg-blue-500 text-white p-3 text-lg rounded-md hover:bg-blue-600 transition-colors disabled:bg-blue-300"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>

          <div className="text-center mt-4">
            <span className="text-gray-400 text-sm">
              Login temporarily disabled
            </span>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </div>
      </div>
    </div>
  );
}