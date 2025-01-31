"use client";

import { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaSearch, FaPlus, FaEllipsisV } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const FileItem = ({ file, onEdit, onDelete, onClick, isLast }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <div
        className="flex items-center justify-between p-5 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-all cursor-pointer"
        onClick={(e) => {
          if (e.target === e.currentTarget || e.target.tagName === "SPAN") {
            onClick(file.id);
          }
        }}
      >
        <span className="text-xl font-semibold text-gray-800">{file.name}</span>
        <div className="flex gap-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit(file.id);
            }}
            className="text-blue-500 hover:text-blue-700 text-xl"
          >
            <FaEdit />
          </button>
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowDropdown(!showDropdown);
              }}
              className="text-gray-500 hover:text-gray-700 text-xl"
            >
              <FaEllipsisV />
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white border border-gray-200 z-10">
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
      {/* Spacing between documents */}
      {!isLast && <div className="my-3"></div>}
    </>
  );
};

export default function Client() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
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
  ]);

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    setFiles(files.filter((file) => file.id !== id));
  };

  const handleEdit = (id) => {
    console.log("Edit file:", id);
  };

  const handleAddNew = () => {
    router.push("/dashboard/newdoc");
  };

  const handleDocumentClick = (id) => {
    window.open(`/dashboard/document/${id}`, '_blank');
  };

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          const { data, error } = await supabase
            .from('profiles')
            .select('first_name')
            .eq('id', user.id)
            .single();

          if (error) throw error;
          if (data) setUserName(data.first_name);
        }
      } catch (error) {
        console.error('Error fetching user name:', error);
      }
    };

    fetchUserName();
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b-2 border-gray-200 pb-6">
          <h1 className="text-3xl font-bold text-gray-900">Client Dashboard</h1>
          {/* Add New Deal Button */}
          <button
            onClick={handleAddNew}
            className="bg-blue-600 text-white flex items-center justify-center gap-2 hover:bg-blue-700 text-lg font-semibold px-6 py-3 rounded-lg transition-colors border-2 border-blue-600 hover:border-blue-700"
          >
            Add New Deal <FaPlus />
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative w-full">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search files..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 p-4 border-2 border-gray-300 rounded-lg text-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Files List */}
        <div className="bg-white rounded-lg border-2 shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Files</h2>
          <div className="space-y-4 border-2 border-blue rounded-lg p-4">
            {filteredFiles.map((file, index) => (
              <FileItem
                className="border-2 border-blue rounded-lg p-4" 
                key={file.id}
                file={file}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onClick={handleDocumentClick}
                isLast={index === filteredFiles.length - 1}
              />

            ))}
          </div>
        </div>
      </div>
    </div>
  );
}