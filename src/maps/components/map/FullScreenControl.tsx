"use client";
import React, { useEffect, useState } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";

const FullscreenControl: React.FC = () => {
    const map = useMap();
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        const onChange = () => setIsFullscreen(!!document.fullscreenElement);
        document.addEventListener("fullscreenchange", onChange);
        return () => document.removeEventListener("fullscreenchange", onChange);
    }, []);

    const toggleFullscreen = () => {
        const mapContainer = map.getContainer();
        if (!document.fullscreenElement) {
            mapContainer.requestFullscreen?.();
        } else {
            document.exitFullscreen?.();
        }
    };

    // Create a Leaflet control
    useEffect(() => {
        const FullscreenBtn = L.Control.extend({
            options: { position: "topleft" },
            onAdd: function () {
                const button = L.DomUtil.create("button", "leaflet-bar leaflet-control");
                button.title = isFullscreen ? "Exit fullscreen" : "View fullscreen";
                button.innerHTML = isFullscreen ? "🡽" : "⛶";

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

        return () => {
            map.removeControl(control);
        };
    }, [map, isFullscreen]);

    return null;
};

export default FullscreenControl;
