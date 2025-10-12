export interface Property {
  id: string;
  type: "house" | "land" | "apartment" | "commercial";
  latitude: number;
  longitude: number;
  price: number;
  address: string;
  bedrooms?: number;
  bathrooms?: number;
  sqft?: number;
  acres?: number;
  status: "for-sale" | "pending" | "sold";
  imageUrl?: string;
  description?: string;
}

export interface MapBounds {
  north: number;
  south: number;
  east: number;
  west: number;
  zoom: number;
}

export interface StateData {
  name: string;
  abbreviation: string;
  bounds: [[number, number], [number, number]];
  center: [number, number];
  // geometry?: any; // GeoJSON geometry
}

export interface MapEventHandlers {
  onBoundsChange?: (bounds: MapBounds) => void;
  onPropertyClick?: (property: Property) => void;
  onStateClick?: (state: StateData) => void;
  onSearchLocation?: (lat: number, lng: number, address: string) => void;
}

// search suggestion

export interface OpenStreetMapPlace {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  class: string;
  type: string;
  place_rank: number;
  importance: number;
  addresstype: string;
  name: string;
  display_name: string;
  boundingbox: [string, string, string, string];
}
