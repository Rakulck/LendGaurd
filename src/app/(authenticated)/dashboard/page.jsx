"use client";

import { useState, useEffect } from "react";

import { FaEdit, FaTrash, FaSearch, FaPlus, FaEllipsisV } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const FileItem = ({ file, onEdit, onDelete, onClick }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      className="flex items-center justify-between p-4 mb-6 border-2 border-black-300 rounded-2xl hover:bg-gray-200 cursor-pointer relative"
      onClick={(e) => {
        if (e.target === e.currentTarget || e.target.tagName === "SPAN") {
          onClick(file.id);
        }
      }}
    >
      <span className="text-lg font-medium">{file.name}</span>
      <div className="flex gap-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit(file.id);
          }}
          className="text-blue-500 hover:text-blue-700 text-lg"
        >
          <FaEdit />
        </button>
        <div className="relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowDropdown(!showDropdown);
            }}
            className="text-gray-500 hover:text-gray-700 text-lg"
          >
            <FaEllipsisV />
          </button>
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
              <div className="py-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(file.id);
                    setShowDropdown(false);
                  }}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 flex items-center gap-2"
                >
                  Delete <FaTrash />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Client() {
  const supabase = createClientComponentClient()
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  // Example files array - replace with your actual data source
  const [files, setFiles] = useState([
    { id: 1, name: "document1.pdf" },
    { id: 2, name: "report2023.doc" },
    { id: 3, name: "report2023.doc" },
    { id: 4, name: "report2023.doc" },
    { id: 5, name: "report2023.doc" },
    { id: 6, name: "report2023.doc" },
    { id: 7, name: "report2023.doc" },
    { id: 8, name: "report2023.doc" },
    { id: 9, name: "report2023.doc" },
    { id: 10, name: "report2023.doc" },
    // ... more files
  ]);

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    setFiles(files.filter((file) => file.id !== id));
  };

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log("Edit file:", id);
  };

  const handleAddNew = () => {
    router.push("/dashboard/newdoc");
  };

  const handleDocumentClick = (id) => {
    window.open(`/dashboard/document/${id}`, '_blank');
  };

  // const breadcrumbItems = [
  //   { label: "Home", href: "/" },
  //   { label: "Client Dashboard" },
  // ];

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        if (user) {
          const { data, error } = await supabase
            .from('profiles')
            .select('first_name')
            .eq('id', user.id)
            .single()

          if (error) throw error
          if (data) setUserName(data.first_name)
        }
      } catch (error) {
        console.error('Error fetching user name:', error)
      }
    }

    fetchUserName()
  }, [])

  // if (loadError) return <div>Error loading maps</div>;
  // if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="p-4 relative">
      {/* File List Container */}
      <div className="mb-6 rounded-lg p-4">
        {/* Header with Search and Add Button */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search files..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 p-3 border rounded text-lg"
            />
          </div>
          <button
            onClick={handleAddNew}
            className="bg-green-500 text-white flex flex-row gap-2 hover:bg-green-700 text-2xl p-2 rounded"
          >
            Add new Deal <FaPlus />
          </button>
        </div>

        {/* Files List */}
        <div className="rounded-lg overflow-hidden divide-y">
          {filteredFiles.map((file) => (
            <FileItem
              key={file.id}
              file={file}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onClick={handleDocumentClick}
            />
          ))}
        </div>
      </div>

      {/* Existing Address Input */}
    </div>
  );
}
