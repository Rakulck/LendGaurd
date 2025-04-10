"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import GoogleMapsProvider from "../../../../../components/GoogleMapsProvider";
import MapComponent from "../../../../../components/MapComponent";
import { FiFileText } from "react-icons/fi";
// import Breadcrumbs from "../../../../../../../components/Breadcrumbs";

export default function DealDetails() {
  const params = useParams();
  const supabase = createClientComponentClient();
  const [deal, setDeal] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sample deal data - in a real app, this would come from your database
  const sampleDeals = {
    1: {
      id: 1,
      name: "The Manhattan Heights",
      address: "123 Main St, New York, NY",
      units: 24,
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&h=1440&q=80",
      description:
        "A luxurious residential complex in the heart of Manhattan, offering stunning views and premium amenities.",
      yearBuilt: 2015,
      propertyType: "Apartment Complex",
      amenities: [
        "Swimming Pool",
        "Fitness Center",
        "24/7 Security",
        "Parking Garage",
      ],
      financials: {
        purchasePrice: "$25,000,000",
        capRate: "6.5%",
        noi: "$1,625,000",
        occupancy: "95%",
      },
    },
    2: {
      id: 2,
      name: "Park Avenue Residences",
      address: "456 Park Ave, Los Angeles, CA",
      units: 36,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&h=1440&q=80",
      description:
        "Modern living spaces with state-of-the-art facilities in the vibrant Park Avenue district.",
      yearBuilt: 2018,
      propertyType: "Mixed-Use Development",
      amenities: [
        "Rooftop Garden",
        "Business Center",
        "Concierge Service",
        "EV Charging",
      ],
      financials: {
        purchasePrice: "$32,000,000",
        capRate: "7.2%",
        noi: "$2,304,000",
        occupancy: "92%",
      },
    },
    3: {
      id: 3,
      name: "Ocean View Apartments",
      address: "789 Ocean Dr, Miami, FL",
      units: 48,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&h=1440&q=80",
      description:
        "Beachfront property offering panoramic ocean views and resort-style living.",
      yearBuilt: 2020,
      propertyType: "Luxury Condominium",
      amenities: ["Private Beach Access", "Spa", "Restaurant", "Marina"],
      financials: {
        purchasePrice: "$45,000,000",
        capRate: "5.8%",
        noi: "$2,610,000",
        occupancy: "98%",
      },
    },
    4: {
      id: 4,
      name: "Lake Shore Towers",
      address: "321 Lake Shore Dr, Chicago, IL",
      units: 60,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&h=1440&q=80",
      description:
        "Iconic high-rise offering premium lakefront living in downtown Chicago.",
      yearBuilt: 2016,
      propertyType: "High-Rise Residential",
      amenities: [
        "Indoor Pool",
        "Sky Lounge",
        "Conference Rooms",
        "Valet Parking",
      ],
      financials: {
        purchasePrice: "$38,000,000",
        capRate: "6.8%",
        noi: "$2,584,000",
        occupancy: "94%",
      },
    },
    5: {
      id: 5,
      name: "Market Square Apartments",
      address: "654 Market St, San Francisco, CA",
      units: 42,
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&h=1440&q=80",
      description:
        "Contemporary living spaces in the heart of San Francisco's financial district.",
      yearBuilt: 2019,
      propertyType: "Urban Residential",
      amenities: [
        "Fitness Center",
        "Co-working Space",
        "Bike Storage",
        "Pet Spa",
      ],
      financials: {
        purchasePrice: "$35,000,000",
        capRate: "5.5%",
        noi: "$1,925,000",
        occupancy: "96%",
      },
    },
  };

  useEffect(() => {
    // In a real app, you would fetch the deal data from your database
    const dealId = parseInt(params.id);
    const dealData = sampleDeals[dealId];
    setDeal(dealData);
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!deal) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">Deal not found</div>
      </div>
    );
  }

  return (
    <GoogleMapsProvider>
      <div className="min-h-screen bg-white py-8 px-20">
        <div className="max-w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Required Documents Sidebar */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Required Documents
              </h2>
              <ul className="space-y-4">
                {[
                  { id: 1, name: "Property Appraisal" },
                  { id: 2, name: "Title Deed" },
                  { id: 3, name: "Financial Statements" },
                  { id: 4, name: "Insurance Documents" },
                  { id: 5, name: "Environmental Reports" },
                  { id: 6, name: "Lease Agreements" },
                  { id: 7, name: "Tax Returns" },
                  { id: 8, name: "Building Permits" },
                ].map((doc) => (
                  <li
                    key={doc.id}
                    className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-50 hover:shadow-sm"
                  >
                    <FiFileText className="text-gray-600 w-6 h-6" />
                    <span className="text-gray-800 font-medium">
                      {doc.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-4">
              {/* Header with Deal Name */}
              <div className="mb-8">
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent tracking-tight">
                  {deal.name}
                </h1>
                <p className="text-xl text-gray-600 mt-2">{deal.address}</p>
              </div>

              {/* Property Image and Basic Info */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-8">
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Description
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {deal.description}
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Amenities
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      {deal.amenities.map((amenity, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <svg
                            className="w-5 h-5 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-600">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Financial Overview and Map */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-2 bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Financial Overview
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Purchase Price</p>
                      <p className="text-xl font-semibold">
                        {deal.financials.purchasePrice}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Cap Rate</p>
                      <p className="text-xl font-semibold">
                        {deal.financials.capRate}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">NOI</p>
                      <p className="text-xl font-semibold">
                        {deal.financials.noi}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Occupancy</p>
                      <p className="text-xl font-semibold">
                        {deal.financials.occupancy}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Location
                  </h2>
                  <div className="h-[400px] w-full rounded-lg overflow-hidden">
                    <MapComponent address={deal.address} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GoogleMapsProvider>
  );
}
