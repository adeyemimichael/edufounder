"use client";

import { useCallback, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { TutorialCenter } from '@/types/tutorialCenter';

interface MapProps {
  centers: TutorialCenter[];
  onCenterSelect: (center: TutorialCenter) => void;
}

const defaultCenter = { lat: 9.0820, lng: 8.6753 }; // Nigeria's center coordinates

export default function Map({ centers, onCenterSelect }: MapProps) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap
      mapContainerClassName="w-full h-[600px] rounded-lg"
      center={defaultCenter}
      zoom={6}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {centers.map((center) => (
        <Marker
          key={center.id}
          position={center.location}
          onClick={() => onCenterSelect(center)}
          title={center.name}
        />
      ))}
    </GoogleMap>
  );
}