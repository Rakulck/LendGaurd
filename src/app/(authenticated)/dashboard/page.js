"use client";

import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import LeftPanel from "../../../components/LeftPanel";
import RightPanel from "../../../components/RightPanel";
import FooterSection from "../../sections/FooterSection";
import GoogleMapsProvider from "../../../components/GoogleMapsProvider";

export default function DealRoom() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [files, setFiles] = useState([
    {
      id: 1,
      name: "The Next Chapter",
      address: "75 E Armory Ave, Champaign, IL",
      units: 4,
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&h=1440&q=80",
    },
    {
      id: 2,
      name: "Park Avenue Residences",
      address: "456 Park Ave, Los Angeles, CA",
      units: 36,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&h=1440&q=80",
    },
    {
      id: 3,
      name: "Ocean View Apartments",
      address: "789 Ocean Dr, Miami, FL",
      units: 48,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&h=1440&q=80",
    },
    {
      id: 4,
      name: "Lake Shore Towers",
      address: "321 Lake Shore Dr, Chicago, IL",
      units: 60,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&h=1440&q=80",
    },
    {
      id: 5,
      name: "Market Square Apartments",
      address: "654 Market St, San Francisco, CA",
      units: 42,
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&h=1440&q=80",
    },
  ]);

  const handleDelete = (id) => {
    setFiles(files.filter((file) => file.id !== id));
  };

  const handleEdit = (id) => {
    console.log("Edit file:", id);
  };

  const handleAddNew = () => {
    router.push("/dashboard/new-deal");
  };

  const handleCardClick = (id) => {
    const deal = files.find((file) => file.id === id);
    setSelectedDeal(deal);
  };

  const handleDealRoomClick = (id) => {
    window.open(`/dashboard/document/${id}`, "_blank");
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (user) {
          const { data, error } = await supabase
            .from("profiles")
            .select("first_name")
            .eq("id", user.id)
            .single();

          if (error) throw error;
          if (data) setUserName(data.first_name);
        }
      } catch (error) {
        console.error("Error fetching user name:", error);
      }
    };

    fetchUserName();
  }, []);

  return (
    <GoogleMapsProvider>
      <div className="p-10 bg-gray-50 min-h-screen flex flex-col mb-20">
        <div className="mx-auto flex-1 w-full">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 border-b-2 border-gray-200 pb-6">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600 tracking-tight">
              LendGuard Deal Room
            </h1>
            {/* Add New Deal Button */}
            <button
              onClick={handleAddNew}
              className="bg-gradient-to-r from-black via-gray-900 to-gray-400 text-white flex items-center justify-center gap-2 hover:from-black hover:via-gray-800 hover:to-gray-300 text-lg font-semibold px-6 py-3 rounded-lg transition-colors border-2 border-transparent hover:border-gray-700"
            >
              Add New Deal <FaPlus />
            </button>
          </div>

          {/* Main Content */}
          <div className="flex">
            <LeftPanel
              files={files}
              searchTerm={searchTerm}
              onDelete={handleDelete}
              onEdit={handleEdit}
              onCardClick={handleCardClick}
              onDealRoomClick={handleDealRoomClick}
              onSearch={handleSearch}
            />
            <RightPanel selectedDeal={selectedDeal} />
          </div>
        </div>
      </div>
      <FooterSection />
    </GoogleMapsProvider>
  );
}
