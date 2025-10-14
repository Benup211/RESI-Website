"use client";

import React, { useState, useCallback, useMemo } from "react";
import debounce from "lodash.debounce";
import { OpenStreetMapPlace } from "@/maps/types/map.types";

interface MapSearchProps {
  onSearch: (lat: number, lng: number, address: string) => void;
}

const MapSearch: React.FC<MapSearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<OpenStreetMapPlace[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Using Nominatim (OpenStreetMap) for free geocoding
  const debouncedSearch = useMemo(
    () =>
      debounce(async (query: string) => {
        if (query.length < 3) {
          setSuggestions([]);
          return;
        }

        setIsSearching(true);
        try {
          const response = await fetch(
            "https://nominatim.openstreetmap.org/search?" +
              `format=json&q=${encodeURIComponent(query)}&countrycodes=us&limit=5`
          );
          const data = await response.json();
          setSuggestions(data);
        } catch (error) {
          console.error("Geocoding error:", error);
          setSuggestions([]);
        } finally {
          setIsSearching(false);
        }
      }, 500),
    [setSuggestions, setIsSearching]
  ); // add actual state setters if defined outside

  // Use it like this:
  const searchLocation = useCallback(
    (query: string) => {
      debouncedSearch(query);
    },
    [debouncedSearch]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    searchLocation(query);
  };

  const handleSuggestionClick = (suggestion: OpenStreetMapPlace) => {
    const lat = parseFloat(suggestion.lat);
    const lng = parseFloat(suggestion.lon);
    const address = suggestion.display_name;

    setSearchQuery(address);
    setSuggestions([]);
    onSearch(lat, lng, address);
  };

  return (
    <div
      className="map-search"
      style={{
        position: "absolute",
        top: "10px",
        left: "50px",
        zIndex: 1000,
        backgroundColor: "white",
        borderRadius: "4px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        width: "300px",
      }}
    >
      <input
        type="text"
        placeholder="Search location..."
        value={searchQuery}
        onChange={handleInputChange}
        style={{
          width: "100%",
          padding: "10px",
          border: "none",
          borderRadius: "4px",
          fontSize: "14px",
        }}
      />
      {isSearching && (
        <div style={{ padding: "8px", fontSize: "12px", color: "#666" }}>Searching...</div>
      )}
      {suggestions.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "white",
            borderRadius: "0 0 4px 4px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            maxHeight: "200px",
            overflow: "auto",
          }}
        >
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{
                padding: "8px 10px",
                fontSize: "13px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f5f5f5")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
            >
              {suggestion.display_name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MapSearch;
