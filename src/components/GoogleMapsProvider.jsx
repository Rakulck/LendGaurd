import { LoadScript } from '@react-google-maps/api';
import { useMemo } from 'react';

export default function GoogleMapsProvider({ children }) {
  const libraries = useMemo(() => ['places'], []);

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
      preventGoogleFontsLoading={true}
      loadingElement={<div>Loading...</div>}
    >
      {children}
    </LoadScript>
  );
} 