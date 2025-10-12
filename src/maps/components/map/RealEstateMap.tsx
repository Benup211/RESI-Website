"use client";

import React, { useState, useRef, useCallback } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import debounce from "lodash.debounce";
import PropertyMarker from "./PropertyMarker";
import { CurrentLocationMarker, MapEventListener, LayerControl } from "./MapInternalComponents";
import { Property, MapBounds, StateData, MapEventHandlers } from "../../types/map.types";
import { mockProperties } from "../../data/mockProperties";

// Initialize Leaflet icons only on client side
if (typeof window !== "undefined") {
  // Extend prototype type safely
  const DefaultIcon = L.Icon.Default.prototype as L.Icon.Default & { _getIconUrl?: () => string };
  delete DefaultIcon._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });
}


interface RealEstateMapProps {
  properties?: Property[];
  eventHandlers?: MapEventHandlers;
  initialCenter?: [number, number];
  initialZoom?: number;
  showCurrentLocation?: boolean;
  currentLocationLabel?: string;
  height?: string | number;
  width?: string | number;
  className?: string;
  mapRef?: React.MutableRefObject<L.Map | null>;
}

const RealEstateMap: React.FC<RealEstateMapProps> = ({
  properties = mockProperties,
  eventHandlers = {},
  initialCenter = [39.8283, -98.5795], // Center of USA
  initialZoom = 5,
  showCurrentLocation = true,
  currentLocationLabel = "You are here",
  height = "600px",
  width = "100%",
  className = "",
  mapRef: externalMapRef
}) => {
  const [mapLayer, setMapLayer] = useState<"street" | "satellite">("street");
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [currentBounds, setCurrentBounds] = useState<MapBounds | null>(null);
  // const [hoveredState, setHoveredState] = useState<string | null>(null);
  const internalMapRef = useRef<L.Map | null>(null);
  const mapRef = externalMapRef || internalMapRef;

  // Cache for API calls
  const boundsCache = useRef<Map<string, Property[]>>(new Map());

  // Debounced bounds change handler
  const debouncedBoundsChange = useCallback(
    debounce((bounds: MapBounds) => {
      setCurrentBounds(bounds);

      if (eventHandlers.onBoundsChange) {
        eventHandlers.onBoundsChange(bounds);
      }

      // Filter properties based on bounds
      const filtered = properties.filter(prop =>
        prop.latitude >= bounds.south &&
        prop.latitude <= bounds.north &&
        prop.longitude >= bounds.west &&
        prop.longitude <= bounds.east
      );
      setFilteredProperties(filtered);
    }, 500),
    [properties, eventHandlers]
  );

  const handlePropertyClick = (property: Property) => {
    if (eventHandlers.onPropertyClick) {
      eventHandlers.onPropertyClick(property);
    }
  };

  const handleStateClick = (state: StateData) => {
    if (mapRef.current && state.bounds) {
      mapRef.current.fitBounds(state.bounds);
    }
    if (eventHandlers.onStateClick) {
      eventHandlers.onStateClick(state);
    }
  };

  // Tile layer URLs (Fixed satellite URL)
  const tileLayers = {
    street: {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a>"
    },
    satellite: {
      url: "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
      attribution: "&copy; Google"
    }
  };

  // Simple US states GeoJSON for hover effect (you should load this from a proper file)
  // const statesGeoJSON: any = {
  //   type: "FeatureCollection",
  //   features: [] // Load actual state boundaries from a GeoJSON file
  // };

  // const onEachState = (feature: any, layer: any) => {
  //   if (currentBounds && currentBounds.zoom <= 6) {
  //     layer.on({
  //       mouseover: (e: any) => {
  //         setHoveredState(feature.properties.name);
  //         e.target.setStyle({
  //           weight: 3,
  //           color: "#3b82f6",
  //           fillOpacity: 0.2
  //         });
  //       },
  //       mouseout: (e: any) => {
  //         setHoveredState(null);
  //         e.target.setStyle({
  //           weight: 1,
  //           color: "#666",
  //           fillOpacity: 0
  //         });
  //       },
  //       click: () => handleStateClick(feature.properties)
  //     });
  //   }
  // };

  return (
    <div
      className={`map-container ${className}`}
      style={{
        height: typeof height === "number" ? `${height}px` : height,
        width: typeof width === "number" ? `${width}px` : width,
        position: "relative"
      }}
    >
      <MapContainer
        center={initialCenter}
        zoom={initialZoom}
        style={{ height: "100%", width: "100%" }}
        ref={mapRef}
      >
        <TileLayer
          attribution={tileLayers[mapLayer].attribution}
          url={tileLayers[mapLayer].url}
        />

        {/* Current Location Marker */}
        {showCurrentLocation && (
          <CurrentLocationMarker
            position={initialCenter}
            label={currentLocationLabel}
          />
        )}

        {/* State boundaries (only visible at zoom <= 6) */}
        {/* {currentBounds && currentBounds.zoom <= 6 && statesGeoJSON.features.length > 0 && (
          <GeoJSON
            data={statesGeoJSON}
            style={{
              weight: 1,
              color: "#666",
              fillOpacity: 0,
              fillColor: "transparent"
            }}
            onEachFeature={onEachState}
          />
        )} */}

        {/* Property markers */}
        {filteredProperties.map(property => (
          <PropertyMarker
            key={property.id}
            property={property}
            onClick={handlePropertyClick}
          />
        ))}

        <MapEventListener onBoundsChange={debouncedBoundsChange} />
        <LayerControl onLayerChange={setMapLayer} />
      </MapContainer>

      {/* Property stats overlay */}
      <div style={{
        position: "absolute",
        bottom: "20px",
        left: "20px",
        backgroundColor: "white",
        padding: "12px 16px",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        zIndex: 1000,
        fontSize: "14px"
      }}>
        <div>Properties in view: <strong>{filteredProperties.length}</strong></div>
        {currentBounds && (
          <div style={{ fontSize: "12px", color: "#666", marginTop: "4px" }}>
            Zoom: {currentBounds.zoom}
          </div>
        )}
      </div>
    </div>
  );
};

export default RealEstateMap;