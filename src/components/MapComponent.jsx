import { GoogleMap, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '120%',
};

const center = {
  lat: 37.7749,
  lng: -122.4194
};

const MapComponent = () => {
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={4.5}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default MapComponent; 