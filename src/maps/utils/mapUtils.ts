import { Property } from "../types/map.types";
import { MapBounds } from "../types/map.types";

export const getPriceColor = (price: number): string => {
  if (price < 500000) return "#10b981"; // Green
  if (price < 1000000) return "#3b82f6"; // Blue
  if (price < 2000000) return "#f59e0b"; // Orange
  return "#ef4444"; // Red
};

export const formatPrice = (price: number): string => {
  if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(1)}M`;
  }
  return `$${(price / 1000).toFixed(0)}K`;
};

export const getPropertyIcon = (type: Property["type"]): string => {
  const icons = {
    house: "🏠",
    apartment: "🏢",
    land: "🌳",
    commercial: "🏪",
  };
  return icons[type] || "📍";
};

export const calculateBoundsFromCoordinates = (
  lat: number,
  lng: number,
  zoom: number
): MapBounds => {
  // Simplified calculation - in production, use more precise formulas
  const latRange = 180 / Math.pow(2, zoom);
  const lngRange = 360 / Math.pow(2, zoom);

  return {
    north: lat + latRange / 2,
    south: lat - latRange / 2,
    east: lng + lngRange / 2,
    west: lng - lngRange / 2,
    zoom,
  };
};
