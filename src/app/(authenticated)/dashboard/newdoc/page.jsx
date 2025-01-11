"use client";

import { useState, useEffect } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Breadcrumbs from "../../../../components/Breadcrumbs";

const libraries = ["places"];
// Get API key from env and ensure it exists
const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

if (!googleMapsApiKey) {
  throw new Error(
    "Google Maps API key is missing. Please add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your .env.local file"
  );
}

export default function NewDoc() {
  const [inputValue, setInputValue] = useState("");
  const [address, setAddress] = useState("");
  const [propertyDetails, setPropertyDetails] = useState({
    propertyName: "",
    yearBuilt: "",
    units: "",
  });
  const [isBrowser, setIsBrowser] = useState(false);
  const [dealName, setDealName] = useState("");

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey,
    libraries,
    preventGoogleFontsLoading: true,
    version: "weekly",
  });

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    if (!isLoaded || loadError || !isBrowser) return;

    const autocomplete = new window.google.maps.places.Autocomplete(
      document.getElementById("google-places-autocomplete"),
      {
        types: ["address"],
        componentRestrictions: { country: "us" },
        fields: [
          "formatted_address",
          "name",
          "address_components",
          "geometry",
          "types",
        ],
      }
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      setAddress(place.formatted_address);

      // Extract property details
      const details = {
        propertyName: place.name || "",
        yearBuilt: "",
        units: "Not available",
      };

      setPropertyDetails(details);
    });

    return () => {
      if (autocomplete) {
        google.maps.event.clearInstanceListeners(autocomplete);
      }
    };
  }, [isLoaded, loadError, isBrowser]);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFileUpload = (e) => {
    // Handle file upload
  };

  if (!isBrowser || loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="p-8">
      <Breadcrumbs
        items={[
          { label: "Menu", href: "/dashboard" },
          { label: "Add New Document" },
        ]}
      />

      <div className="max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Enter deal name"
          className="w-full p-4 text-xl border-2 border-b-black rounded-lg mb-6"
          onChange={(e) => setDealName(e.target.value)}
        />
        <input
          id="google-places-autocomplete"
          type="text"
          placeholder="Enter your address"
          className="w-full p-4 text-xl border-2 border-b-black rounded-lg mb-6"
        />
        <div className="flex flex-row gap-6">
          <div>
            <label className="block text-gray-600 text-xl mb-3">
              Upload Rent Roll
            </label>
            <input
              type="file"
              multiple
              className="w-full p-4 text-lg border-2 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-lg file:bg-blue-500 file:text-white hover:file:bg-blue-600"
              onChange={(e) => handleFileUpload(e)}
            />
          </div>
          <div>
            <label className="block text-gray-600 text-xl mb-3">
              Upload T12
            </label>
            <input
              type="file"
              multiple
              className="w-full p-4 text-lg border-2 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-lg file:bg-blue-500 file:text-white hover:file:bg-blue-600"
              onChange={(e) => handleFileUpload(e)}
            />
          </div>
        </div>
        {address && (
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
            <h2 className="text-2xl font-semibold mb-6">Property Details</h2>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-gray-600 text-lg mb-1">Address:</span>
                <span className="font-medium text-xl">{address}</span>
              </div>

              <div className="flex flex-col">
                <span className="text-gray-600 text-lg mb-1">
                  Property Name:
                </span>
                <span className="font-medium text-xl">
                  {propertyDetails.propertyName || "Not available"}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-gray-600 text-lg mb-1">Year Built:</span>
                <span className="font-medium text-xl">
                  {propertyDetails.yearBuilt || "Not available"}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-gray-600 text-lg mb-1">
                  Number of Levels:
                </span>
                <span className="font-medium text-xl">
                  {propertyDetails.units || "Not available"}
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 mb-6 p-4 rounded-lg">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-lg font-medium text-center mb-3">
            AI is processing it, we will let you know when it's ready
          </div>
          <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-[loading_1.5s_ease-in-out_infinite]"></div>
          </div>
          <div className="text-sm text-gray-500 text-center mt-3">
            This process typically takes about 20 minutes
          </div>
          <style jsx>{`
            @keyframes loading {
              0% {
                transform: translateX(-100%);
              }
              50% {
                transform: translateX(200%);
              }
              100% {
                transform: translateX(-100%);
              }
            }
          `}</style>
        </div>

        <button
          className="w-full mt-6 p-4 bg-blue-500 text-white text-xl rounded-lg hover:bg-blue-600 transition-colors"
          onClick={() => {
            // TODO: Implement save functionality
            console.log("Saving:", {
              dealName,
              address,
              propertyDetails,
            });
          }}
        >
          Save Document
        </button>
      </div>
    </div>
  );
}
