"use client";
import React, { useEffect, useState, useCallback } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";

const FullscreenControl: React.FC = () => {
  const map = useMap();
  const [isFullscreen, setIsFullscreen] = useState(false);

  // 🔄 Listen to fullscreen change globally
  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  // ✅ Stable fullscreen toggle using useCallback
  const toggleFullscreen = useCallback(() => {
    const mapContainer = map.getContainer();
    if (!document.fullscreenElement) {
      mapContainer.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }, [map]);

  // ✅ Add custom Leaflet control (button)
  useEffect(() => {
    const FullscreenBtn = L.Control.extend({
      options: { position: "topleft" },
      onAdd: function () {
        const button = L.DomUtil.create("button", "leaflet-bar leaflet-control");
        button.title = isFullscreen ? "Exit fullscreen" : "View fullscreen";
        button.innerHTML = isFullscreen ? "🡑" : "⛶";

        Object.assign(button.style, {
          background: "white",
          cursor: "pointer",
          fontSize: "18px",
          lineHeight: "22px",
          width: "30px",
          height: "30px",
          textAlign: "center",
          border: "none",
        });

        L.DomEvent.disableClickPropagation(button);
        L.DomEvent.on(button, "click", toggleFullscreen);

        return button;
      },
    });

    const control = new FullscreenBtn();
    map.addControl(control);

    // Cleanup on unmount
    return () => {
      map.removeControl(control);
    };
  }, [map, isFullscreen, toggleFullscreen]);

  return null;
};

export default FullscreenControl;
