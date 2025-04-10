import { FaSearch, FaBuilding } from "react-icons/fa";

export default function LeftPanel({ files, searchTerm, onDelete, onEdit, onDocumentClick, onSearch }) {
  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-1/3 pr-4">
      {/* Search Bar - Outside of scrollable area */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search properties..."
            className="w-full px-4 py-3 pl-10 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black"
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="bg-white rounded-lg shadow-sm p-6 h-[calc(100vh-16rem)] overflow-y-auto">
        <div className="space-y-4">
          {filteredFiles.map((file) => (
            <div 
              key={file.id} 
              className="flex flex-col p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
              onClick={() => onDocumentClick(file.id)}
            >
              <div className="flex items-center gap-4 mb-2">
                <img src={file.image} alt="Property" className="w-32 h-32 rounded-lg object-cover" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">{file.name}</h3>
                  <p className="text-base text-gray-600 mt-1">{file.address}</p>
                  <p className="text-base text-gray-600 font-medium">{file.units} units</p>
                </div>
              </div>
              <div className="flex justify-end mt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDocumentClick(file.id);
                  }}
                  className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
                >
                  Deal Room
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 