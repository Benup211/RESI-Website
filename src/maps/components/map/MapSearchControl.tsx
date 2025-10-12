"use client";

import React, { useState, useCallback, forwardRef, useImperativeHandle, useMemo } from "react";
import debounce from "lodash.debounce";
import { OpenStreetMapPlace } from "@/maps/types/map.types";

export interface MapSearchRef {
  clearSearch: () => void;
  setSearchValue: (value: string) => void;
}

interface MapSearchControlProps {
  onSearch: (lat: number, lng: number, address: string) => void;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MapSearchControl = forwardRef<MapSearchRef, MapSearchControlProps>(
  (
    {
      onSearch,
      placeholder = "Search address, city, state, or ZIP...",
      className = "",
      style = {},
    },
    ref
  ) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState<OpenStreetMapPlace[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    useImperativeHandle(ref, () => ({
      clearSearch: () => {
        setSearchQuery("");
        setSuggestions([]);
      },
      setSearchValue: (value: string) => {
        setSearchQuery(value);
      },
    }));

    // Using Nominatim (OpenStreetMap) for free geocoding
    // Works for worldwide addresses but optimized for US
    const debouncedSearch = useMemo(() =>
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
      [setSuggestions, setIsSearching]); // add actual state setters if defined outside

    // Use it like this:
    const searchLocation = useCallback((query: string) => {
      debouncedSearch(query);
    }, [debouncedSearch]);

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
        className={`map-search-control ${className}`}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "400px",
          ...style,
        }}
      >
        <div
          style={{
            position: "relative",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "12px 40px 12px 12px",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              outline: "none",
            }}
          />
          <span
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "18px",
              color: "#666",
            }}
          >
            🔍
          </span>
        </div>

        {isSearching && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              marginTop: "4px",
              padding: "8px",
              fontSize: "12px",
              color: "#666",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            Searching...
          </div>
        )}

        {suggestions.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              marginTop: "4px",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              maxHeight: "300px",
              overflow: "auto",
              zIndex: 1000,
            }}
          >
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                style={{
                  padding: "10px 12px",
                  fontSize: "13px",
                  cursor: "pointer",
                  borderBottom: index < suggestions.length - 1 ? "1px solid #eee" : "none",
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
  }
);

MapSearchControl.displayName = "MapSearchControl";

export default MapSearchControl;
