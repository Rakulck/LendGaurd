"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import {
  FiUploadCloud,
  FiFileText,
  FiCheckCircle,
  FiDownload,
} from "react-icons/fi";

export default function NewDeal() {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [selectedDocType, setSelectedDocType] = useState("rentRoll");
  const [formData, setFormData] = useState({
    dealName: "",
    address: "",
    name: "",
    units: "",
    image: "",
    yearBuilt: "",
    propertyType: "",
    description: "",
    offeringMemorandum: null,
    rentRoll: null,
    t12: null,
    leaseAbstracts: null,
    sitePlans: null,
    environmental: null,
    engineering: null,
    underwriting: null,
    purchaseAgreement: null,
  });

  const [uploadedFiles, setUploadedFiles] = useState({
    offeringMemorandum: null,
    rentRoll: null,
    t12: null,
    leaseAbstracts: null,
    sitePlans: null,
    environmental: null,
    engineering: null,
    underwriting: null,
    purchaseAgreement: null,
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [processedFiles, setProcessedFiles] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const documentTypes = [
    { id: "offeringMemorandum", name: "Offering Memorandum (OM)" },
    { id: "rentRoll", name: "Rent Roll" },
    { id: "t12", name: "Trailing 12 (T-12)" },
    { id: "leaseAbstracts", name: "Lease Abstracts" },
    { id: "sitePlans", name: "Site Plans & Floor Plates" },
    { id: "environmental", name: "Environmental Reports" },
    { id: "engineering", name: "Engineering Reports" },
    { id: "underwriting", name: "Argus/Excel Underwriting Models" },
    { id: "purchaseAgreement", name: "Purchase & Sale Agreement" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDocTypeChange = (e) => setSelectedDocType(e.target.value);

  const handleFileUpload = (e, type) => {
    const files = e.target.files;
    if (files) {
      if (type === "photos") {
        setUploadedFiles((prev) => ({
          ...prev,
          photos: [...prev.photos, ...Array.from(files)],
        }));
      } else {
        setUploadedFiles((prev) => ({ ...prev, [type]: files[0] }));
      }
    }
  };

  const removePhoto = (index) => {
    setUploadedFiles((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 10000));
      setIsLoading(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error creating new deal:", error);
      setIsLoading(false);
    }
  };

  const handleContinue = () => {
    const currentIndex = documentTypes.findIndex(
      (doc) => doc.id === selectedDocType
    );
    if (currentIndex < documentTypes.length - 1) {
      setSelectedDocType(documentTypes[currentIndex + 1].id);
    } else {
      handleSubmit();
    }
  };

  const renderUploadWidget = () => {
    const baseStyle =
      "border-2 border-dashed border-gray-200 rounded-xl p-8 hover:border-gray-400 transition-all duration-300 bg-white shadow-md hover:shadow-lg";
    const uploadContent = (text, subtext, type, accept) => (
      <div className={baseStyle}>
        <div className="relative">
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={(e) => handleFileUpload(e, type)}
            accept={accept}
            multiple={type === "photos"}
          />
          <div className="flex flex-col items-center justify-center p-4">
            <FiUploadCloud className="w-14 h-14 text-gray-500 mb-3 animate-bounce" />
            <p className="text-base font-medium text-gray-700">{text}</p>
            <p className="text-xs text-gray-400 mt-1">{subtext}</p>
          </div>
        </div>
      </div>
    );

    switch (selectedDocType) {
      case "rentRoll":
        return uploadContent(
          "Upload Rent Roll Document",
          "PDF, Excel, CSV (Max 50MB)",
          "rentRoll",
          ".pdf,.xlsx,.xls,.csv"
        );
      case "t12":
        return uploadContent(
          "Upload T12 Financials",
          "PDF, Excel, CSV (Max 50MB)",
          "t12",
          ".pdf,.xlsx,.xls,.csv"
        );
      case "photos":
        return (
          <div className={baseStyle}>
            <div className="relative">
              <input
                type="file"
                multiple
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => handleFileUpload(e, "photos")}
                accept=".jpg,.jpeg,.png"
              />
              <div className="flex flex-col items-center justify-center p-4">
                <FiUploadCloud className="w-14 h-14 text-gray-500 mb-3 animate-bounce" />
                <p className="text-base font-medium text-gray-700">
                  Upload Property Photos
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  JPG, PNG (Max 10MB each)
                </p>
              </div>
            </div>
            {uploadedFiles.photos.length > 0 && (
              <div className="mt-6 grid grid-cols-3 gap-4">
                {uploadedFiles.photos.map((photo, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt={`Property photo ${index + 1}`}
                      className="w-full h-36 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                    />
                    <button
                      onClick={() => removePhoto(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-red-600"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      case "survey":
        return uploadContent(
          "Upload Property Survey",
          "PDF only (Max 50MB)",
          "survey",
          ".pdf"
        );
      case "appraisal":
        return uploadContent(
          "Upload Property Appraisal",
          "PDF only (Max 50MB)",
          "appraisal",
          ".pdf"
        );
      case "environmental":
        return uploadContent(
          "Upload Environmental Report",
          "PDF only (Max 50MB)",
          "environmental",
          ".pdf"
        );
      default:
        return (
          <div className={baseStyle}>Select a document type to upload</div>
        );
    }
  };

  return (
    <div className="p-12 bg-white min-h-screen flex flex-col">
      <div className="mx-auto flex-1 w-full max-w-7xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 border-b-2 border-gray-200 pb-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.push("/dashboard")}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
            <div>
              <h1 className="text-4xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent tracking-tight">
                {formData.dealName || "Add New Deal"}
              </h1>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-gray-600">Progress:</span>
            <div className="flex space-x-2">
              {documentTypes.map((doc, index) => (
                <div
                  key={doc.id}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    documentTypes.findIndex((d) => d.id === selectedDocType) >=
                    index
                      ? "bg-gradient-to-r from-gray-900 to-gray-600 scale-110"
                      : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Split Layout */}
        <div className="flex gap-10">
          {/* Left Side - Document List */}
          <div className="w-2/5">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 transition-all duration-300 hover:shadow-xl">
              <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Deal Information
              </h2>
              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Deal Name
                  </label>
                  <input
                    type="text"
                    name="dealName"
                    value={formData.dealName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg bg-white text-gray-800 placeholder-gray-400"
                    placeholder="Enter deal name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg bg-white text-gray-800 placeholder-gray-400"
                    placeholder="Enter property address"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Required Documents
              </h2>
              <ul className="space-y-4">
                {documentTypes.map((doc) => (
                  <li
                    key={doc.id}
                    className={`flex items-center space-x-4 p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedDocType === doc.id
                        ? "border-gray-500 bg-gray-50 shadow-md"
                        : "border-gray-200 hover:bg-gray-50 hover:shadow-sm"
                    }`}
                    onClick={() => setSelectedDocType(doc.id)}
                  >
                    <FiFileText className="text-gray-600 w-6 h-6" />
                    <span className="text-gray-800 font-medium">
                      {doc.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side - Upload Area */}
          <div className="w-3/5">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 transition-all duration-300 hover:shadow-xl">
              <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Upload Document
              </h2>
              <div className="space-y-6">
                {renderUploadWidget()}

                {uploadedFiles[selectedDocType] &&
                  selectedDocType !== "photos" && (
                    <div className="mt-4 flex items-center space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-200 hover:bg-gray-100">
                      <FiFileText className="text-gray-600 w-6 h-6" />
                      <span className="text-sm font-medium text-gray-700">
                        {uploadedFiles[selectedDocType].name}
                      </span>
                    </div>
                  )}

                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => router.push("/dashboard")}
                    className="px-5 py-2 text-gray-600 font-medium rounded-lg hover:text-gray-800 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  {!isSubmitted && (
                    <button
                      type="button"
                      onClick={handleContinue}
                      className="px-6 py-2 bg-gradient-to-r from-gray-900 to-gray-600 text-white font-medium rounded-lg hover:from-gray-800 hover:to-gray-500 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      {documentTypes.findIndex(
                        (doc) => doc.id === selectedDocType
                      ) ===
                      documentTypes.length - 1
                        ? "Submit"
                        : "Continue"}
                    </button>
                  )}
                </div>

                {/* Loading and Success Messages */}
                {isLoading && (
                  <div className="mt-6 bg-white rounded-xl p-6 border border-gray-200 shadow-md">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 w-full">
                        <div className="flex items-center space-x-3 mb-4">
                          <FiCheckCircle className="w-6 h-6 text-blue-600" />
                          <h3 className="text-lg font-semibold text-blue-800">
                            Processing your deal...
                          </h3>
                        </div>
                        <p className="text-sm text-blue-700 mb-4">
                          Our AI is processing your documents. Please wait...
                        </p>
                        <div className="relative h-2 bg-blue-100 rounded-full overflow-hidden">
                          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-[loading_10s_linear_forwards]" />
                        </div>
                        <p className="text-xs text-blue-600 mt-3 text-center">
                          Processing will complete in 10 seconds
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {isSubmitted && (
                  <div className="mt-6 bg-white rounded-xl p-6 border border-gray-200 shadow-md animate-fade-in">
                    <div className="flex items-center space-x-4 mb-4">
                      <FiCheckCircle className="w-8 h-8 text-green-500" />
                      <h3 className="text-xl font-bold text-gray-900">
                        Success!
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Your deal has been created successfully. You can now view
                      it in your dashboard.
                    </p>
                    <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center space-x-3">
                        <FiFileText className="w-6 h-6 text-gray-600" />
                        <span className="text-gray-700 font-medium">
                          Next Chapter-UW.xlsx
                        </span>
                        <a
                          href="/Next_Chapter-UW.xlsx"
                          download="Next_Chapter-UW.xlsx"
                          className="ml-auto flex items-center space-x-2 px-3 py-1.5 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                        >
                          <FiDownload className="w-4 h-4" />
                          <span>Download</span>
                        </a>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-4">
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-4 py-2 text-gray-600 font-medium rounded-lg hover:text-gray-800 transition-colors duration-200"
                      >
                        Close
                      </button>
                      <button
                        onClick={() => router.push("/dashboard")}
                        className="px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-md"
                      >
                        Go to Dashboard
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
