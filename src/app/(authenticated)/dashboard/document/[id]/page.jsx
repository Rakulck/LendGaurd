"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Breadcrumbs from "../../../../../../../components/Breadcrumbs";

export default function DocumentDetails() {
  const params = useParams();
  const documentId = params.id;
  const [documentName, setDocumentName] = useState("");
  // const [address, setAddress] = useState("");
  const [dealName, setDealName] = useState("");
  const [timestamp, setTimestamp] = useState(new Date().toLocaleString());
  const [createdAt, setCreatedAt] = useState(new Date().toLocaleString());

  const breadcrumbItems = [
    { label: "Menu", href: "/dashboard" },
    { label: "Document", href: `/client/document/${documentId}` },
  ];

  useEffect(() => {
    // Replace this with your actual document data fetching logic
    const fetchDocumentDetails = () => {
      // Temporary example - replace with real data fetch
      setDocumentName(`${documentId}`);
      // Add fetching of address and deal name here
    };

    fetchDocumentDetails();
    document.title = `LenGuard - ${documentName}`;
  }, [documentName]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="mt-8 max-w-3xl mx-auto">
          <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="dealName" className="block text-sm font-medium text-gray-700 mb-1">
                  Deal Name
                </label>
                <input
                  type="text"
                  id="dealName"
                  placeholder="Enter deal name"
                  value={dealName}
                  onChange={(e) => setDealName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg transition-colors"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Property Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter property address"
                  // value={address}
                  // onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg transition-colors"
                />
              </div>
            </div>
          </div>

          {documentId && (
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                Document Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Document ID</h3>
                  <p className="text-lg font-medium text-gray-900">{documentId}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Created At</h3>
                  <p className="text-lg font-medium text-gray-900">{createdAt}</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Last Updated</h3>
                  <p className="text-lg font-medium text-gray-900">{timestamp}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
