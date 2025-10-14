"use client";

import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Property } from "../../types/map.types";
import { getPriceColor, formatPrice } from "../../utils/mapUtils";

interface PropertyMarkerProps {
  property: Property;
  onClick?: (property: Property) => void;
}

const PropertyMarker: React.FC<PropertyMarkerProps> = ({ property, onClick }) => {
  const createCustomIcon = () => {
    const color = getPriceColor(property.price);
    const formattedPrice = formatPrice(property.price);

    return L.divIcon({
      html: `
        <div style="
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        ">
          <div style="
            background: ${color};
            color: white;
            padding: 6px 12px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 13px;
            white-space: nowrap;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          ">
            ${formattedPrice}
          </div>
          <div style="
            width: 0;
            height: 0;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-top: 10px solid ${color};
            margin-top: 2px;
          "></div>
        </div>
      `,
      iconSize: [100, 40],
      iconAnchor: [50, 40],
      popupAnchor: [0, -40],
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
