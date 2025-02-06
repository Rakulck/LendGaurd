"use client";

import { useState, useEffect } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { FiUploadCloud, FiCheckCircle, FiAlertCircle, FiTrash2, FiFileText } from "react-icons/fi";
import { useAuth } from '../../../../context/AuthContext';
import { uploadFile, removeFile } from '../../../../utils/supabaseBucket';

const libraries = ["places"];
const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

if (!googleMapsApiKey) {
  throw new Error("Google Maps API key is missing");
}

export default function NewDoc() {
  const { user } = useAuth();
  const [uploadedFiles, setUploadedFiles] = useState({
    rentroll: [],
    t12: []
  });

  const [dealName, setDealName] = useState('');
  const [address, setAddress] = useState('');
  const [propertyDetails, setPropertyDetails] = useState({
    propertyName: '',
    yearBuilt: '',
    units: ''
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey,
    libraries,
  });

  const handleFileUpload = async (e, type) => {
    const files = Array.from(e.target.files);
    
    try {
      const uploadPromises = files.map(async (file) => {
        const folderName = type === 'rentroll' ? 'rentroll' : 't12';
        console.log('Uploading file to:', folderName);
        const { data, error } = await uploadFile(file, folderName, user.id);
        
        if (error) throw error;

        return {
          name: file.name,
          path: data.path,
          type: file.type,
          size: file.size
        };
      });

      const uploaded = await Promise.all(uploadPromises);
      setUploadedFiles(prev => ({
        ...prev,
        [type]: [...prev[type], ...uploaded]
      }));
    } catch (error) {
      console.error('Upload failed:', error);
      alert('File upload failed: ' + error.message);
    }
  };

  const handleRemoveFile = async (type, filePath) => {
    try {
      const { error } = await removeFile(filePath);
      if (error) throw error;

      setUploadedFiles(prev => ({
        ...prev,
        [type]: prev[type].filter(file => file.path !== filePath)
      }));
    } catch (error) {
      console.error('File removal failed:', error);
      alert('File removal failed: ' + error.message);
    }
  };

  useEffect(() => {
    if (isLoaded) {
      const input = document.getElementById("google-places-autocomplete");
      const autocomplete = new window.google.maps.places.Autocomplete(input, {
        types: ["address"],
        componentRestrictions: { country: "us" },
      });

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place.formatted_address) {
          setAddress(place.formatted_address);
          
          const addressComponents = place.address_components || [];
          const propertyName = place.name || "";
          
          setPropertyDetails(prev => ({
            ...prev,
            propertyName: propertyName,
          }));
        }
      });
    }
  }, [isLoaded]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="ml-8 mb-8">
        <Breadcrumbs
          items={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "New Deal Analysis", href: "#" },
          ]}
        />
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 transform transition-all hover:translate-y-[-2px]">
          <div className="bg-white rounded-xl p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-8">Create New Deal Analysis</h1>
            
            <div className="space-y-6">
              {/* Deal Name Input */}
              <div>
                <label className="block text-base font-medium text-gray-700 mb-2">
                  Deal Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter deal name"
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    onChange={(e) => setDealName(e.target.value)}
                  />
                </div>
              </div>

              {/* Address Autocomplete */}
              <div>
                <label className="block text-base font-medium text-gray-700 mb-2">
                  Property Address
                </label>
                <div className="relative">
                  <input
                    id="google-places-autocomplete"
                    type="text"
                    placeholder={isLoaded ? "Enter property address" : "Loading..."}
                    disabled={!isLoaded}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                  <FiFileText className="absolute right-3 top-3.5 text-gray-400 w-5 h-5" />
                </div>
              </div>

              {/* File Upload Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Rent Roll Upload */}
                <div className="border border-dashed border-gray-200 rounded-xl p-6">
                  <label className="block text-base font-medium text-gray-700 mb-4">
                    Rent Roll Documents
                  </label>
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="file"
                        multiple
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={(e) => handleFileUpload(e, 'rentroll')}
                      />
                      <div className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 border-dashed rounded-lg hover:border-blue-500 transition-colors">
                        <FiUploadCloud className="w-8 h-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600 text-center">
                          Drag & drop files or click to upload
                        </p>
                        <p className="text-xs text-gray-500 mt-1">PDF, Excel, CSV (Max 50MB)</p>
                      </div>
                    </div>
                    {uploadedFiles.rentroll.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <FiFileText className="text-gray-400 w-5 h-5" />
                          <span className="text-sm text-gray-700 truncate">{file.name}</span>
                        </div>
                        <button
                          onClick={() => handleRemoveFile('rentroll', file.path)}
                          className="text-gray-400 hover:text-red-600 transition-colors"
                        >
                          <FiTrash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* T12 Upload */}
                <div className="border border-dashed border-gray-200 rounded-xl p-6">
                  <label className="block text-base font-medium text-gray-700 mb-4">
                    T12 Financials
                  </label>
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="file"
                        multiple
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={(e) => handleFileUpload(e, 't12')}
                      />
                      <div className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 border-dashed rounded-lg hover:border-blue-500 transition-colors">
                        <FiUploadCloud className="w-8 h-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600 text-center">
                          Drag & drop files or click to upload
                        </p>
                        <p className="text-xs text-gray-500 mt-1">PDF, Excel, CSV (Max 50MB)</p>
                      </div>
                    </div>
                    {uploadedFiles.t12.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <FiFileText className="text-gray-400 w-5 h-5" />
                          <span className="text-sm text-gray-700 truncate">{file.name}</span>
                        </div>
                        <button
                          onClick={() => handleRemoveFile('t12', file.path)}
                          className="text-gray-400 hover:text-red-600 transition-colors"
                        >
                          <FiTrash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Property Details */}
              {address && (
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <DetailItem label="Address" value={address} />
                    <DetailItem label="Property Name" value={propertyDetails.propertyName} />
                    <DetailItem label="Year Built" value={propertyDetails.yearBuilt} />
                    <DetailItem label="Unit Count" value={propertyDetails.units} />
                  </div>
                </div>
              )}


              {/* Processing Status after submit

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center space-x-3 mb-4">
                  <FiCheckCircle className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-blue-800">Analysis in Progress</h3>
                </div>
                <p className="text-sm text-blue-700 mb-4">
                  Our AI is processing your documents. You'll receive a notification when your analysis is ready.
                </p>
                <div className="relative h-2 bg-blue-100 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-[loading_1.5s_ease-in-out_infinite]" />
                </div>
                <p className="text-xs text-blue-600 mt-3 text-center">
                  Typically completes within 15-20 minutes
                </p>
              </div> */}

              {/* Save Button */}
              <button
                className="group w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center space-x-2 relative overflow-hidden"
                onClick={() => console.log("Save Deal Analysis")}
              >
                <div className="absolute inset-0" />
                <FiCheckCircle className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(200%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}

const DetailItem = ({ label, value }) => (
  <div className="flex flex-col space-y-1">
    <span className="text-sm text-gray-500">{label}</span>
    <span className="text-base font-medium text-gray-900">
      {value || "Not available"}
    </span>
  </div>
);