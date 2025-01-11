"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Breadcrumbs from "../../../../../components/Breadcrumbs";

export default function DocumentDetails() {
  const params = useParams();
  const documentId = params.id;
  const [documentName, setDocumentName] = useState("");
  const [address, setAddress] = useState("");
  const [dealName, setDealName] = useState("");

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
    <div className="p-8">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="max-w-2xl mx-auto">
        <input
          type="text"
          id="dealName"
          placeholder="Enter deal name"
          value={dealName}
          onChange={(e) => setDealName(e.target.value)}
          className="w-full p-4 text-xl border-2 rounded-lg mb-6"
        />

        <input
          type="text"
          id="address"
          placeholder="Enter property address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-4 text-xl border-2 rounded-lg mb-6"
        />

        {documentId && (
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
            <h2 className="text-2xl font-semibold mb-6">Document Details</h2>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-gray-600 text-lg mb-1">Document ID:</span>
                <span className="font-medium text-xl">{documentId}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
