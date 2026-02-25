"use client";
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface MapProps {
  lat: number;
  lng: number;
}

export default function EmergencyMap({ lat, lng }: MapProps) {
  const [icon, setIcon] = useState<L.Icon | null>(null);

  useEffect(() => {
    // Fix for Leaflet default icon issues in Next.js
    // We define this inside useEffect so it only runs in the browser
    const customIcon = new L.Icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });
    setIcon(customIcon);
  }, []);

  if (!icon) return <div className="h-full w-full bg-slate-100 animate-pulse" />;

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={15}
      scrollWheelZoom={false}
      className="h-full w-full z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <Marker position={[lat, lng]} icon={icon}>
        <Popup>
          <div className="font-bold text-xs uppercase font-sans">
            SOS Location: Amit Kumar
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}