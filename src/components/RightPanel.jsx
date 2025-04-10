import MapComponent from './MapComponent';

export default function RightPanel() {
  return (
    <div className="w-2/3">
      <div className="bg-white rounded-lg border-2 shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Map</h2>
        <div className="w-full h-[600px]">
          <MapComponent />
        </div>
      </div>
    </div>
  );
} 