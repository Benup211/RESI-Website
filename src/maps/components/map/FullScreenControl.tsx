"use client";
import React, { useEffect, useState, useCallback } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import { Expand, Shrink } from "lucide-react";

const FullscreenControl: React.FC = () => {
  const map = useMap();
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const toggleFullscreen = useCallback(() => {
    const mapContainer = map.getContainer();
    if (!document.fullscreenElement) {
      mapContainer.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }, [map]);

  useEffect(() => {
    const FullscreenBtn = L.Control.extend({
      options: { position: "bottomright" },
      onAdd: function () {
        const button = L.DomUtil.create("button", "leaflet-bar leaflet-control");
        button.title = isFullscreen ? "Exit fullscreen" : "View fullscreen";

        // ✅ Create Lucide icon
        const icon = isFullscreen
          ? React.createElement(Shrink, { size: 18 })
          : React.createElement(Expand, { size: 18 });

        const iconContainer = document.createElement("div");
        import("react-dom/client").then((ReactDOMClient) => {
          const root = ReactDOMClient.createRoot(iconContainer);
          root.render(icon);
          button.appendChild(iconContainer);
        });

        // ✅ Center icon perfectly
        Object.assign(button.style, {
          background: "white",
          cursor: "pointer",
          width: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          borderRadius: "4px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
        });

        // Optional: make sure inner div doesn’t shift layout
        Object.assign(iconContainer.style, {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        });

        L.DomEvent.disableClickPropagation(button);
        L.DomEvent.on(button, "click", toggleFullscreen);

        return button;
      },
    });

    const control = new FullscreenBtn();
    map.addControl(control);

    return () => {
      map.removeControl(control);
    };
  }, [map, isFullscreen, toggleFullscreen]);

  return null;
};

export default FullscreenControl;
