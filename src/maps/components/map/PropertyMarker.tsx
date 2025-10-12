"use client";

import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Property } from "../../types/map.types";
import { getPriceColor, formatPrice, getPropertyIcon } from "../../utils/mapUtils";

interface PropertyMarkerProps {
  property: Property;
  onClick?: (property: Property) => void;
}

const PropertyMarker: React.FC<PropertyMarkerProps> = ({ property, onClick }) => {
  const createCustomIcon = () => {
    const color = getPriceColor(property.price);
    const icon = getPropertyIcon(property.type);

    return L.divIcon({
      html: `
        <div style="
          background-color: ${color};
          color: white;
          border-radius: 50% 50% 50% 0;
          padding: 8px;
          transform: rotate(-45deg);
          border: 2px solid white;
          box-shadow: 0 2px 5px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 35px;
          height: 35px;
        ">
          <span style="transform: rotate(45deg); font-size: 18px;">${icon}</span>
        </div>
      `,
      iconSize: [35, 35],
      iconAnchor: [17.5, 35],
      popupAnchor: [0, -35],
      className: "custom-property-marker",
    });
  };

  return (
    <Marker
      position={[property.latitude, property.longitude]}
      icon={createCustomIcon()}
      eventHandlers={{
        click: () => onClick?.(property),
      }}
    >
      <Popup>
        <div className="property-popup" style={{ minWidth: "200px" }}>
          <h3 style={{ margin: "0 0 8px 0", fontSize: "16px", fontWeight: "bold" }}>
            {formatPrice(property.price)}
          </h3>
          <p style={{ margin: "4px 0", fontSize: "14px" }}>{property.address}</p>
          {property.bedrooms && (
            <p style={{ margin: "4px 0", fontSize: "12px" }}>
              {property.bedrooms} beds • {property.bathrooms} baths • {property.sqft} sqft
            </p>
          )}
          {property.acres && (
            <p style={{ margin: "4px 0", fontSize: "12px" }}>{property.acres} acres</p>
          )}
          <span
            style={{
              display: "inline-block",
              padding: "2px 8px",
              borderRadius: "4px",
              fontSize: "11px",
              backgroundColor:
                property.status === "for-sale"
                  ? "#10b981"
                  : property.status === "pending"
                    ? "#f59e0b"
                    : "#6b7280",
              color: "white",
              marginTop: "4px",
            }}
          >
            {property.status.replace("-", " ").toUpperCase()}
          </span>
        </div>
      </Popup>
    </Marker>
  );
};

export default PropertyMarker;
