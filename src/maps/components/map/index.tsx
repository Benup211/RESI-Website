"use client";

import dynamic from "next/dynamic";
import MapSearchControl from "./MapSearchControl";

// Export the map component with SSR disabled
export const RealEstateMapComponent = dynamic(
  () => import("./RealEstateMap"),
  { 
    ssr: false,
    loading: () => (
      <div style={{ 
        height: "100%", 
        width: "100%", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        backgroundColor: "#f3f4f6"
      }}>
        <div>Loading map...</div>
      </div>
    )
  }
);

// Re-export the search component
export { MapSearchControl };

// Re-export types
export type { Property, MapBounds, StateData, MapEventHandlers } from "../../types/map.types";
export type { MapSearchRef } from "./MapSearchControl";