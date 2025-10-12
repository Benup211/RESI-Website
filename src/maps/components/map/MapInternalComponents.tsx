"use client";

import React, { useEffect, useState } from "react";
import { useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";
import { MapBounds } from "../../types/map.types";

// Current Location Marker Component
export const CurrentLocationMarker: React.FC<{
  position: [number, number];
  label?: string;
}> = ({ position, label = "Current Location" }) => {
  const map = useMap();
  
  useEffect(() => {
    const icon = L.divIcon({
      html: `
        <div style="
          position: relative;
          width: 20px;
          height: 20px;
        ">
          <div style="
            position: absolute;
            width: 20px;
            height: 20px;
            background: #4285F4;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          "></div>
          <div style="
            position: absolute;
            width: 40px;
            height: 40px;
            top: -10px;
            left: -10px;
            background: rgba(66, 133, 244, 0.2);
            border-radius: 50%;
            animation: pulse 2s infinite;
          "></div>
        </div>
      `,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
      className: "current-location-marker"
    });
    
    const marker = L.marker(position, { icon, zIndexOffset: 1000 })
      .bindPopup(label)
      .addTo(map);
    
    return () => {
      marker.remove();
    };
  }, [map, position, label]);
  
  return null;
};

// Map Event Listener
export const MapEventListener: React.FC<{
  onBoundsChange: (bounds: MapBounds) => void;
}> = ({ onBoundsChange }) => {
  const map = useMapEvents({
    moveend: () => {
      const bounds = map.getBounds();
      const zoom = map.getZoom();
      onBoundsChange({
        north: bounds.getNorth(),
        south: bounds.getSouth(),
        east: bounds.getEast(),
        west: bounds.getWest(),
        zoom
      });
    },
    zoomend: () => {
      const bounds = map.getBounds();
      const zoom = map.getZoom();
      onBoundsChange({
        north: bounds.getNorth(),
        south: bounds.getSouth(),
        east: bounds.getEast(),
        west: bounds.getWest(),
        zoom
      });
    }
  });
  
  return null;
};

// Layer Control Component with Better UI
export const LayerControl: React.FC<{
  onLayerChange: (layer: "street" | "satellite") => void;
}> = ({ onLayerChange }) => {
  const [activeLayer, setActiveLayer] = useState<"street" | "satellite">("street");
  
  const handleLayerChange = (layer: "street" | "satellite") => {
    setActiveLayer(layer);
    onLayerChange(layer);
  };
  
  return (
    <div style={{
      position: "absolute",
      top: "10px",
      right: "10px",
      zIndex: 1000,
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      display: "flex",
      padding: "4px"
    }}>
      <button
        onClick={() => handleLayerChange("street")}
        style={{
          padding: "8px 16px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "500",
          backgroundColor: activeLayer === "street" ? "#3b82f6" : "transparent",
          color: activeLayer === "street" ? "white" : "#666",
          transition: "all 0.2s",
          marginRight: "4px"
        }}
      >
        Maps
      </button>
      <button
        onClick={() => handleLayerChange("satellite")}
        style={{
          padding: "8px 16px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "500",
          backgroundColor: activeLayer === "satellite" ? "#3b82f6" : "transparent",
          color: activeLayer === "satellite" ? "white" : "#666",
          transition: "all 0.2s"
        }}
      >
        Satellite
      </button>
    </div>
  );
};