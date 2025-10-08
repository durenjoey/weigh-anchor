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

  // Debug logging
  useEffect(() => {
    console.log('MapboxMap render - Token exists:', !!MAPBOX_TOKEN);
    console.log('MapboxMap render - Projects count:', projects.length);
  }, [MAPBOX_TOKEN]);

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

  // Add project markers using map sources and layers instead of DOM markers
  useEffect(() => {
    console.log('Projects useEffect triggered - isMapLoaded:', isMapLoaded, 'onProjectSelect:', !!onProjectSelect);
    if (!map.current || !isMapLoaded) return;

    console.log('Adding project layers...');
    // Remove existing source and layers if they exist
    if (map.current.getSource('projects')) {
      console.log('Removing existing layers...');
      map.current.removeLayer('projects-circles');
      map.current.removeLayer('projects-labels');
      map.current.removeSource('projects');
    }

    // Create GeoJSON data from projects
    const geojsonData = {
      type: 'FeatureCollection' as const,
      features: projects.map(project => ({
        type: 'Feature' as const,
        geometry: {
          type: 'Point' as const,
          coordinates: [project.coordinates.lng, project.coordinates.lat]
        },
        properties: {
          name: project.name,
          location: project.location,
          state: project.state,
          type: project.type,
          status: project.status,
          projectCount: project.projectCount,
          color: getProjectColor(project)
        }
      }))
    };

    // Add source
    map.current.addSource('projects', {
      type: 'geojson',
      data: geojsonData
    });

    // Add circles layer
    map.current.addLayer({
      id: 'projects-circles',
      type: 'circle',
      source: 'projects',
      paint: {
        'circle-radius': [
          'case',
          ['>', ['get', 'projectCount'], 5], 14,
          ['>', ['get', 'projectCount'], 1], 12,
          10
        ],
        'circle-color': ['get', 'color'],
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
        'circle-opacity': 0.9
      }
    });

    // Add labels layer for project counts > 1
    map.current.addLayer({
      id: 'projects-labels',
      type: 'symbol',
      source: 'projects',
      filter: ['>', ['get', 'projectCount'], 1],
      layout: {
        'text-field': ['get', 'projectCount'],
        'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
        'text-size': 11
      },
      paint: {
        'text-color': '#ffffff'
      }
    });

    // Create popup
    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
      offset: 15
    });

    // Add hover events
    map.current.on('mouseenter', 'projects-circles', (e) => {
      console.log('Hover enter:', e.features![0].properties!.name);
      map.current!.getCanvas().style.cursor = 'pointer';
      
      const feature = e.features![0];
      const coordinates = (feature.geometry as GeoJSON.Point).coordinates as [number, number];
      const props = feature.properties!;
      
      const popupContent = `
        <div style="
          background: white;
          color: #1e293b;
          padding: 12px;
          border-radius: 8px;
          font-size: 14px;
          max-width: 250px;
        ">
          <div style="font-weight: bold; color: ${props.color}; margin-bottom: 4px;">
            ${props.name}
          </div>
          <div style="color: #64748b; font-size: 12px;">
            ${props.location}, ${props.state}
          </div>
          <div style="color: #94a3b8; margin-top: 4px; font-size: 11px;">
            ${props.type.replace('-', ' ').toUpperCase()} • ${props.status.toUpperCase()}
          </div>
          ${props.projectCount > 1 ? `
            <div style="color: ${props.color}; margin-top: 4px; font-size: 12px; font-weight: 600;">
              ${props.projectCount} projects at this location
            </div>
          ` : ''}
        </div>
      `;

      popup.setLngLat(coordinates)
        .setHTML(popupContent)
        .addTo(map.current!);
    });

    map.current.on('mouseleave', 'projects-circles', () => {
      map.current!.getCanvas().style.cursor = '';
      popup.remove();
    });

    // Add click events
    map.current.on('click', 'projects-circles', (e) => {
      const feature = e.features![0];
      const coordinates = (feature.geometry as GeoJSON.Point).coordinates as [number, number];
      
      if (onProjectSelect) {
        // Find the original project object
        const project = projects.find(p => 
          p.coordinates.lng === coordinates[0] && 
          p.coordinates.lat === coordinates[1]
        );
        if (project) {
          onProjectSelect(project);
        }
      }
      
      // Fly to location
      map.current!.flyTo({
        center: coordinates,
        zoom: 8,
        duration: 1500
      });
    });

  }, [isMapLoaded, onProjectSelect]);

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