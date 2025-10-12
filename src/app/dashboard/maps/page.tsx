"use client";
import React, { useRef } from "react";
import { RealEstateMapComponent, MapSearchControl } from "@/maps/components/map";
import type { MapSearchRef } from "@/maps/components/map";
import type { Property, MapBounds } from "@/maps/components/map";

export default function PropertiesPage() {
  const mapRef = useRef<L.Map | null>(null);
  const searchRef = useRef<MapSearchRef>(null);

  const handleSearch = (lat: number, lng: number, address: string) => {
    // console.log("Searched:", { lat, lng, address });
    // Move map to searched location
    if (mapRef.current) {
      mapRef.current.setView([lat, lng], 13);
    }
  };

  const handlePropertyClick = (property: Property) => {
    console.log("Property clicked:", property);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with search */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Find Properties</h1>
            {/* Standalone search component */}
            <MapSearchControl
              ref={searchRef}
              onSearch={handleSearch}
              placeholder="Search by address, city, or ZIP..."
            />
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full" style={{ height: "500px" }}>
        <RealEstateMapComponent
          mapRef={mapRef}
          height="100%"
          width="100%"
          showCurrentLocation={true}
          currentLocationLabel="Your Location"
          eventHandlers={{
            onPropertyClick: handlePropertyClick,
            onBoundsChange: (bounds: MapBounds) => {
              // console.log("Bounds changed:", bounds);
            },
          }}
        />
      </div>

      {/* Other content below */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4">Featured Properties</h2>
        {/* Property cards */}
      </div>
    </div>
  );
}
