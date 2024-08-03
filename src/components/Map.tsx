'use client';

import { GoogleMap } from '@react-google-maps/api';
import { defaultTheme } from '@/lib/theme';

const defaultMapContainerStyle = {
  width: '100%',
  height: '30vh',
  minWidth: '300px',
  borderRadius: '8px',
};

const defaultMapZoom = 5;

const defaultOptions = {
  streetViewControl: false,
  rotateControl: false,
  styles: defaultTheme,
};

export const MapComponent = ({
  mapCenter,
}: {
  mapCenter: { lat: number; lng: number };
}) => {
  return (
    <div className="w-50 d-flex justify-content-center">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={mapCenter}
        zoom={defaultMapZoom}
        options={defaultOptions}
      ></GoogleMap>
    </div>
  );
};
