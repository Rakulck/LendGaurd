import { GoogleMap, Marker } from '@react-google-maps/api';
import { useEffect, useState } from 'react';

const mapContainerStyle = {
  width: '100%',
  height: '120%',
};

const defaultCenter = {
  lat: 37.7749,
  lng: -122.4194
};

// Predefined coordinates for major cities
const cityCoordinates = {
  'New York': { lat: 40.7128, lng: -74.0060 },
  'Los Angeles': { lat: 34.0522, lng: -118.2437 },
  'Miami': { lat: 25.7617, lng: -80.1918 },
  'Chicago': { lat: 41.8781, lng: -87.6298 },
  'San Francisco': { lat: 37.7749, lng: -122.4194 }
};

const MapComponent = ({ address }) => {
  const [center, setCenter] = useState(defaultCenter);
  const [geocoder, setGeocoder] = useState(null);
  const [zoom, setZoom] = useState(4.5);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (window.google) {
      setGeocoder(new window.google.maps.Geocoder());
    }
  }, []);

  useEffect(() => {
    if (geocoder && address) {
      const geocodeAddress = async () => {
        try {
          // First try with the full address
          const fullAddressResponse = await new Promise((resolve, reject) => {
            geocoder.geocode({ address }, (results, status) => {
              if (status === 'OK') {
                resolve(results);
              } else {
                reject(new Error(`Geocoding failed: ${status}`));
              }
            });
          });

          if (fullAddressResponse && fullAddressResponse[0]) {
            const location = fullAddressResponse[0].geometry.location;
            setCenter({
              lat: location.lat(),
              lng: location.lng()
            });
            setZoom(15);
            setError(null);
            return;
          }
        } catch (error) {
          console.log('Full address geocoding failed, trying city-level...');
        }

        // If full address fails, try to find the city
        try {
          // Extract city name from address
          const addressParts = address.split(',');
          const cityPart = addressParts[addressParts.length - 2]?.trim();
          
          if (cityPart) {
            // Check if we have predefined coordinates for this city
            const cityKey = Object.keys(cityCoordinates).find(key => 
              cityPart.toLowerCase().includes(key.toLowerCase())
            );

            if (cityKey) {
              setCenter(cityCoordinates[cityKey]);
              setZoom(12);
              setError(`Showing approximate location for ${cityKey}`);
              return;
            }

            // If no predefined coordinates, try geocoding the city
            const cityResponse = await new Promise((resolve, reject) => {
              geocoder.geocode({ address: cityPart }, (results, status) => {
                if (status === 'OK') {
                  resolve(results);
                } else {
                  reject(new Error(`City geocoding failed: ${status}`));
                }
              });
            });

            if (cityResponse && cityResponse[0]) {
              const location = cityResponse[0].geometry.location;
              setCenter({
                lat: location.lat(),
                lng: location.lng()
              });
              setZoom(12);
              setError(`Showing approximate location for ${cityPart}`);
              return;
            }
          }
        } catch (error) {
          console.log('City geocoding failed, trying state-level...');
        }

        // If city fails, try with just the state
        try {
          const state = address.split(',').pop().trim();
          const stateResponse = await new Promise((resolve, reject) => {
            geocoder.geocode({ address: state }, (results, status) => {
              if (status === 'OK') {
                resolve(results);
              } else {
                reject(new Error(`State geocoding failed: ${status}`));
              }
            });
          });

          if (stateResponse && stateResponse[0]) {
            const location = stateResponse[0].geometry.location;
            setCenter({
              lat: location.lat(),
              lng: location.lng()
            });
            setZoom(6);
            setError(`Showing approximate location for ${state}`);
          }
        } catch (error) {
          console.error('State geocoding error:', error);
          setError('Could not find the location. Please check the address.');
        }
      };

      geocodeAddress();
    } else {
      setZoom(4.5);
      setError(null);
    }
  }, [address, geocoder]);

  return (
    <div className="relative h-full">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          zoomControl: true,
          gestureHandling: 'greedy'
        }}
      >
        <Marker 
          position={center}
          animation={window.google?.maps?.Animation?.DROP}
        />
      </GoogleMap>
      {error && (
        <div className="absolute top-4 left-4 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-2 rounded">
          {error}
        </div>
      )}
    </div>
  );
};

export default MapComponent; 