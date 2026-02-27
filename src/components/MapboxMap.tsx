"use client";

import { useState, useEffect, useRef } from "react";
import { clients, Client } from "@/data/projects";

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MapboxMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-98.5795, 39.8283],
      zoom: 3.5,
      pitch: 0,
      bearing: 0,
      antialias: true,
      attributionControl: false
    });

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

  // Add client markers
  useEffect(() => {
    if (!map.current || !isMapLoaded) return;

    if (map.current.getSource('clients')) {
      map.current.removeLayer('clients-circles');
      map.current.removeLayer('clients-stroke');
      map.current.removeSource('clients');
    }

    const geojsonData = {
      type: 'FeatureCollection' as const,
      features: clients.map(client => ({
        type: 'Feature' as const,
        geometry: {
          type: 'Point' as const,
          coordinates: [client.coordinates.lng, client.coordinates.lat]
        },
        properties: {
          name: client.name,
          location: client.location,
          state: client.state,
          category: client.category
        }
      }))
    };

    map.current.addSource('clients', {
      type: 'geojson',
      data: geojsonData
    });

    // White stroke behind circles for contrast
    map.current.addLayer({
      id: 'clients-stroke',
      type: 'circle',
      source: 'clients',
      paint: {
        'circle-radius': 7,
        'circle-color': '#ffffff',
        'circle-opacity': 1
      }
    });

    // Blue circles for all clients
    map.current.addLayer({
      id: 'clients-circles',
      type: 'circle',
      source: 'clients',
      paint: {
        'circle-radius': 5,
        'circle-color': '#3b82f6',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
        'circle-opacity': 0.9
      }
    });

    // Popup
    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
      offset: 12
    });

    map.current.on('mouseenter', 'clients-circles', (e) => {
      map.current!.getCanvas().style.cursor = 'pointer';

      const feature = e.features![0];
      const coordinates = (feature.geometry as GeoJSON.Point).coordinates as [number, number];
      const props = feature.properties!;

      const popupContent = `
        <div style="
          background: white;
          color: #1e293b;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 14px;
          min-width: 180px;
        ">
          <div style="font-weight: 600; color: #0f172a; margin-bottom: 2px;">
            ${props.name}
          </div>
          <div style="color: #64748b; font-size: 12px;">
            ${props.location}, ${props.state}
          </div>
          <div style="color: #3b82f6; margin-top: 6px; font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">
            ${props.category}
          </div>
        </div>
      `;

      popup.setLngLat(coordinates)
        .setHTML(popupContent)
        .addTo(map.current!);
    });

    map.current.on('mouseleave', 'clients-circles', () => {
      map.current!.getCanvas().style.cursor = '';
      popup.remove();
    });

    // Click to zoom
    map.current.on('click', 'clients-circles', (e) => {
      const feature = e.features![0];
      const coordinates = (feature.geometry as GeoJSON.Point).coordinates as [number, number];

      map.current!.flyTo({
        center: coordinates,
        zoom: 8,
        duration: 1500
      });
    });

  }, [isMapLoaded]);

  return (
    <div
      ref={mapContainer}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0
      }}
    />
  );
}
