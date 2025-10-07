"use client";

import { useState, useEffect, useRef } from "react";
import { projects, Project } from "@/data/projects";

// Import Mapbox GL JS
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapboxMapProps {
  onProjectSelect?: (project: Project) => void;
}

export default function MapboxMap({ onProjectSelect }: MapboxMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Mapbox access token - you'll need to get this from Mapbox
  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

  const getProjectColor = (project: Project) => {
    switch (project.type) {
      case 'tribal-government': return '#3b82f6'; // blue
      case 'corporate': return '#10b981'; // green
      default: return '#ff8c42'; // orange
    }
  };

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-98.5795, 39.8283], // Center of US
      zoom: 3.5,
      pitch: 0,
      bearing: 0,
      antialias: true,
      attributionControl: false
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      setIsMapLoaded(true);
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [MAPBOX_TOKEN]);

  // Add project markers
  useEffect(() => {
    if (!map.current || !isMapLoaded) return;

    // Clear existing markers
    const existingMarkers = document.querySelectorAll('.mapbox-marker');
    existingMarkers.forEach(marker => marker.remove());

    // Add markers for all projects
    projects.forEach((project) => {
      // Create marker element
      const markerEl = document.createElement('div');
      markerEl.className = 'mapbox-marker';
      
      const size = project.projectCount > 5 ? '28px' : project.projectCount > 1 ? '24px' : '20px';
      markerEl.style.cssText = `
        width: ${size};
        height: ${size};
        border-radius: 50%;
        background-color: ${getProjectColor(project)};
        border: 2px solid white;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        font-weight: bold;
        color: white;
        transition: all 0.2s ease;
      `;

      // Add project count if > 1
      if (project.projectCount > 1) {
        markerEl.textContent = project.projectCount.toString();
      }

      // Add hover effect
      markerEl.addEventListener('mouseenter', () => {
        markerEl.style.transform = 'scale(1.2)';
        markerEl.style.zIndex = '1000';
      });

      markerEl.addEventListener('mouseleave', () => {
        markerEl.style.transform = 'scale(1)';
        markerEl.style.zIndex = '1';
      });

      // Add click handler
      markerEl.addEventListener('click', () => {
        if (onProjectSelect) {
          onProjectSelect(project);
        }
        
        // Fly to location
        if (map.current) {
          map.current.flyTo({
            center: [project.coordinates.lng, project.coordinates.lat],
            zoom: 8,
            duration: 2000
          });
        }
      });

      // Create marker
      new mapboxgl.Marker(markerEl)
        .setLngLat([project.coordinates.lng, project.coordinates.lat])
        .addTo(map.current!);

      // Add popup on hover
      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: 25
      });

      markerEl.addEventListener('mouseenter', () => {
        const popupContent = `
          <div style="
            background: white;
            color: #1e293b;
            padding: 12px;
            border-radius: 8px;
            font-size: 14px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            max-width: 250px;
          ">
            <div style="font-weight: bold; color: ${getProjectColor(project)}; margin-bottom: 4px;">
              ${project.name}
            </div>
            <div style="color: #64748b; font-size: 12px;">
              ${project.location}, ${project.state}
            </div>
            <div style="color: #94a3b8; margin-top: 4px; font-size: 11px;">
              ${project.type.replace('-', ' ').toUpperCase()} • ${project.status.toUpperCase()}
            </div>
            ${project.projectCount > 1 ? `
              <div style="color: ${getProjectColor(project)}; margin-top: 4px; font-size: 12px; font-weight: 600;">
                ${project.projectCount} projects at this location
              </div>
            ` : ''}
          </div>
        `;

        popup.setLngLat([project.coordinates.lng, project.coordinates.lat])
          .setHTML(popupContent)
          .addTo(map.current!);
      });

      markerEl.addEventListener('mouseleave', () => {
        popup.remove();
      });
    });
  }, [isMapLoaded, onProjectSelect]);

  return (
    <div 
      ref={mapContainer}
      className="w-full h-full"
      style={{ minHeight: '100%' }}
    />
  );
}