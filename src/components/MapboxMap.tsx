"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Target, 
  Eye, 
  EyeOff,
  Layers,
  Satellite,
  Map as MapIcon
} from "lucide-react";
import { projects, Project, getProjectsByType, getTotalProjectCount } from "@/data/projects";

// Import Mapbox GL JS
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapboxMapProps {
  onProjectSelect?: (project: Project) => void;
}

export default function MapboxMap({ onProjectSelect }: MapboxMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleTypes, setVisibleTypes] = useState<Set<Project['type']>>(
    new Set(['tribal', 'sensitive', 'corporate', 'government'])
  );
  const [mapStyle, setMapStyle] = useState<'satellite' | 'dark' | 'terrain'>('dark');
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Mapbox access token - you'll need to get this from Mapbox
  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

  const getProjectColor = (project: Project) => {
    switch (project.type) {
      case 'tribal': return '#60a5fa'; // blue-400
      case 'sensitive': return '#f87171'; // red-400
      case 'corporate': return '#4ade80'; // green-400
      case 'government': return '#a78bfa'; // purple-400
      default: return '#3b82f6'; // electric-blue
    }
  };

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'active': return '#3b82f6'; // electric-blue
      case 'completed': return '#4ade80'; // green-400
      case 'planning': return '#f97316'; // signal-orange
      default: return '#6b7280'; // muted
    }
  };

  const getMapStyle = (style: string) => {
    switch (style) {
      case 'satellite':
        return 'mapbox://styles/mapbox/satellite-v9';
      case 'terrain':
        return 'mapbox://styles/mapbox/outdoors-v12';
      case 'dark':
      default:
        return 'mapbox://styles/mapbox/dark-v11';
    }
  };

  const toggleTypeVisibility = (type: Project['type']) => {
    const newVisible = new Set(visibleTypes);
    if (newVisible.has(type)) {
      newVisible.delete(type);
    } else {
      newVisible.add(type);
    }
    setVisibleTypes(newVisible);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    onProjectSelect?.(project);
    
    // Fly to project location
    if (map.current) {
      map.current.flyTo({
        center: [project.coordinates.lng, project.coordinates.lat],
        zoom: 8,
        duration: 2000
      });
    }
  };

  const visibleProjects = projects.filter(project => visibleTypes.has(project.type));

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: getMapStyle(mapStyle),
      center: [-98.5795, 39.8283], // Center of US
      zoom: 3.5,
      pitch: 0,
      bearing: 0,
      antialias: true,
      attributionControl: false
    });

    // Add custom controls
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
  }, []);

  // Update map style
  useEffect(() => {
    if (map.current && isMapLoaded) {
      map.current.setStyle(getMapStyle(mapStyle));
    }
  }, [mapStyle, isMapLoaded]);

  // Add project markers
  useEffect(() => {
    if (!map.current || !isMapLoaded) return;

    // Clear existing markers
    const existingMarkers = document.querySelectorAll('.mapbox-marker');
    existingMarkers.forEach(marker => marker.remove());

    // Add new markers for visible projects
    visibleProjects.forEach((project) => {
      // Create marker element
      const markerEl = document.createElement('div');
      markerEl.className = 'mapbox-marker';
      markerEl.style.cssText = `
        width: ${project.projectCount > 1 ? '32px' : '24px'};
        height: ${project.projectCount > 1 ? '32px' : '24px'};
        border-radius: 50%;
        background-color: ${getProjectColor(project)};
        border: 2px solid rgba(255, 255, 255, 0.8);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px ${getProjectColor(project)}40;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        font-weight: bold;
        color: white;
        transition: all 0.3s ease;
        backdrop-filter: blur(4px);
      `;

      // Add project count or dot
      if (project.projectCount > 1) {
        markerEl.textContent = project.projectCount.toString();
      } else {
        const dot = document.createElement('div');
        dot.style.cssText = `
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: currentColor;
          opacity: 0.9;
        `;
        markerEl.appendChild(dot);
      }

      // Add hover effects
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
        handleProjectClick(project);
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
            background: rgba(15, 23, 42, 0.95);
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 12px;
            border: 1px solid rgba(59, 130, 246, 0.3);
            backdrop-filter: blur(8px);
          ">
            <div style="font-weight: bold; color: ${getProjectColor(project)};">
              ${project.securityLevel === 'classified' ? 'CLASSIFIED OPERATION' : project.name}
            </div>
            <div style="opacity: 0.8; margin-top: 2px;">
              ${project.location}, ${project.state}
            </div>
            <div style="opacity: 0.6; margin-top: 2px; font-size: 10px;">
              ${project.type.toUpperCase()} • ${project.status.toUpperCase()}
            </div>
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
  }, [visibleProjects, isMapLoaded]);

  return (
    <div className="w-full h-full">
      {/* Map Controls */}
      <div className="mb-6 flex flex-wrap gap-2 items-center">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <span>FILTER:</span>
        </div>
        {(['tribal', 'sensitive', 'corporate', 'government'] as const).map((type) => (
          <Button
            key={type}
            variant="outline"
            size="sm"
            onClick={() => toggleTypeVisibility(type)}
            className={`${
              visibleTypes.has(type) 
                ? 'bg-electric-blue/20 border-electric-blue text-electric-blue' 
                : 'border-muted text-muted-foreground'
            } transition-all`}
          >
            {visibleTypes.has(type) ? <Eye className="w-3 h-3 mr-1" /> : <EyeOff className="w-3 h-3 mr-1" />}
            {type.toUpperCase()} ({getProjectsByType(type).length})
          </Button>
        ))}
        
        <div className="h-4 w-px bg-electric-blue/30 mx-2"></div>
        
        {/* Map Style Controls */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">VIEW:</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setMapStyle('dark')}
            className={`${
              mapStyle === 'dark' 
                ? 'bg-electric-blue/20 border-electric-blue text-electric-blue' 
                : 'border-muted text-muted-foreground'
            } transition-all`}
          >
            <MapIcon className="w-3 h-3 mr-1" />
            TACTICAL
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setMapStyle('satellite')}
            className={`${
              mapStyle === 'satellite' 
                ? 'bg-electric-blue/20 border-electric-blue text-electric-blue' 
                : 'border-muted text-muted-foreground'
            } transition-all`}
          >
            <Satellite className="w-3 h-3 mr-1" />
            SATELLITE
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setMapStyle('terrain')}
            className={`${
              mapStyle === 'terrain' 
                ? 'bg-electric-blue/20 border-electric-blue text-electric-blue' 
                : 'border-muted text-muted-foreground'
            } transition-all`}
          >
            <Layers className="w-3 h-3 mr-1" />
            TERRAIN
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 h-full">
        {/* Mapbox Map */}
        <div className="lg:col-span-2">
          <Card className="bg-card/30 backdrop-blur-sm border-electric-blue/20 h-full">
            <CardHeader>
              <CardTitle className="font-display text-electric-blue flex items-center">
                <Target className="w-5 h-5 mr-2" />
                GLOBAL OPERATIONS MAP
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div 
                ref={mapContainer}
                className="w-full h-96 rounded-lg border border-electric-blue/30 overflow-hidden"
                style={{ minHeight: '400px' }}
              />
            </CardContent>
          </Card>
        </div>

        {/* Project Details Panel */}
        <div className="space-y-4">
          {/* Stats Card */}
          <Card className="bg-card/30 backdrop-blur-sm border-electric-blue/20">
            <CardHeader>
              <CardTitle className="font-display text-electric-blue text-sm">MISSION STATS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Projects:</span>
                <span className="text-electric-blue font-mono">{getTotalProjectCount()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Active Locations:</span>
                <span className="text-electric-blue font-mono">{visibleProjects.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">States/Territories:</span>
                <span className="text-electric-blue font-mono">{new Set(visibleProjects.map(p => p.state)).size}</span>
              </div>
            </CardContent>
          </Card>

          {/* Selected Project Details */}
          {selectedProject && (
            <Card className="bg-card/30 backdrop-blur-sm border-electric-blue/20">
              <CardHeader>
                <CardTitle className="font-display text-electric-blue text-sm flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  PROJECT DETAILS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-display text-arctic-white mb-2">
                    {selectedProject.securityLevel === 'classified' ? 'CLASSIFIED OPERATION' : selectedProject.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{selectedProject.location}, {selectedProject.state}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs text-muted-foreground">TYPE</span>
                    <div className="text-sm font-mono" style={{ color: getProjectColor(selectedProject) }}>
                      {selectedProject.type.toUpperCase()}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground">STATUS</span>
                    <Badge variant="outline" className="text-xs" style={{ 
                      color: getStatusColor(selectedProject.status),
                      borderColor: getStatusColor(selectedProject.status)
                    }}>
                      {selectedProject.status.toUpperCase()}
                    </Badge>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-muted-foreground">COORDINATES</span>
                  <div className="font-mono text-sm text-electric-blue">
                    {selectedProject.coordinates.lat.toFixed(4)}°N {Math.abs(selectedProject.coordinates.lng).toFixed(4)}°{selectedProject.coordinates.lng < 0 ? 'W' : 'E'}
                  </div>
                </div>

                {selectedProject.clientName && (
                  <div>
                    <span className="text-xs text-muted-foreground">CLIENT</span>
                    <div className="text-sm text-arctic-white">{selectedProject.clientName}</div>
                  </div>
                )}

                {selectedProject.description && (
                  <div>
                    <span className="text-xs text-muted-foreground">DESCRIPTION</span>
                    <p className="text-sm text-muted-foreground">{selectedProject.description}</p>
                  </div>
                )}

                <div>
                  <span className="text-xs text-muted-foreground">PROJECT COUNT</span>
                  <div className="text-lg font-bold text-electric-blue">{selectedProject.projectCount}</div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
