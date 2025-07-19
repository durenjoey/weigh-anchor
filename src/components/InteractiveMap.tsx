"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Target, 
  Shield, 
  Eye, 
  EyeOff,
  Zap,
  Building,
  Radio,
  Mountain
} from "lucide-react";
import { projects, Project, getProjectsByType, getTotalProjectCount } from "@/data/projects";

interface InteractiveMapProps {
  onProjectSelect?: (project: Project) => void;
}

export default function InteractiveMap({ onProjectSelect }: InteractiveMapProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleTypes, setVisibleTypes] = useState<Set<Project['type']>>(
    new Set(['tribal', 'sensitive', 'corporate', 'government'])
  );
  const [mapCenter, setMapCenter] = useState({ lat: 39.8283, lng: -98.5795 }); // Center of US

  const getProjectIcon = (project: Project) => {
    switch (project.category) {
      case 'remote': return Mountain;
      case 'infrastructure': return Building;
      case 'communications': return Radio;
      case 'automation': return Zap;
      default: return Target;
    }
  };

  const getProjectColor = (project: Project) => {
    switch (project.type) {
      case 'tribal': return 'text-blue-400 border-blue-400';
      case 'sensitive': return 'text-red-400 border-red-400';
      case 'corporate': return 'text-green-400 border-green-400';
      case 'government': return 'text-purple-400 border-purple-400';
      default: return 'text-electric-blue border-electric-blue';
    }
  };

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'active': return 'text-electric-blue border-electric-blue';
      case 'completed': return 'text-green-400 border-green-400';
      case 'planning': return 'text-signal-orange border-signal-orange';
      default: return 'text-muted-foreground border-muted-foreground';
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

  const visibleProjects = projects.filter(project => visibleTypes.has(project.type));

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    onProjectSelect?.(project);
  };

  // Group projects by state for Alaska clustering
  const alaskaProjects = visibleProjects.filter(p => p.state === 'Alaska');
  const otherProjects = visibleProjects.filter(p => p.state !== 'Alaska');

  return (
    <div className="w-full h-full">
      {/* Map Controls */}
      <div className="mb-6 flex flex-wrap gap-2">
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
      </div>

      <div className="grid lg:grid-cols-3 gap-6 h-full">
        {/* Map Visualization */}
        <div className="lg:col-span-2">
          <Card className="bg-card/30 backdrop-blur-sm border-electric-blue/20 h-full">
            <CardHeader>
              <CardTitle className="font-display text-electric-blue flex items-center">
                <Target className="w-5 h-5 mr-2" />
                GLOBAL OPERATIONS MAP
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {/* Simplified Map Representation */}
              <div className="relative bg-slate-800/80 rounded-lg p-8 h-96 overflow-hidden border border-electric-blue/30">
                {/* Grid Pattern */}
                <div className="absolute inset-0 grid-pattern opacity-20"></div>
                
                {/* US Outline */}
                <div className="absolute inset-0">
                  {/* Simplified US border outline */}
                  <svg className="w-full h-full opacity-30" viewBox="0 0 100 60">
                    <path
                      d="M10 45 L15 40 L20 35 L25 30 L30 25 L35 20 L40 18 L50 15 L60 18 L70 20 L80 25 L85 30 L88 35 L90 40 L88 45 L85 50 L80 52 L70 50 L60 48 L50 50 L40 52 L30 50 L20 48 L15 50 L10 45 Z"
                      stroke="rgba(96, 165, 250, 0.3)"
                      strokeWidth="0.5"
                      fill="rgba(96, 165, 250, 0.05)"
                    />
                  </svg>
                </div>
                
                {/* Alaska Cluster */}
                <div className="absolute top-4 left-8">
                  <div className="relative">
                    <div className="w-24 h-16 border-2 border-electric-blue/40 rounded-lg bg-electric-blue/10 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-xs text-electric-blue font-mono">ALASKA</div>
                        <div className="text-lg font-bold text-electric-blue">{alaskaProjects.length}</div>
                        <div className="text-xs text-muted-foreground">PROJECTS</div>
                      </div>
                    </div>
                    {/* Alaska project indicators */}
                    {alaskaProjects.slice(0, 8).map((project, index) => {
                      const Icon = getProjectIcon(project);
                      return (
                        <div
                          key={project.id}
                          className={`absolute w-3 h-3 rounded-full cursor-pointer transition-all hover:scale-150 ${
                            project.type === 'tribal' ? 'bg-blue-400' :
                            project.type === 'sensitive' ? 'bg-red-400' :
                            'bg-electric-blue'
                          }`}
                          style={{
                            top: `${10 + (index % 4) * 8}px`,
                            left: `${10 + Math.floor(index / 4) * 8}px`
                          }}
                          onClick={() => handleProjectClick(project)}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Continental US Projects */}
                {otherProjects.map((project, index) => {
                  const Icon = getProjectIcon(project);
                  // Simple positioning based on rough state coordinates
                  const getPosition = (state: string) => {
                    const positions: Record<string, { x: number; y: number }> = {
                      'Washington': { x: 15, y: 15 },
                      'California': { x: 8, y: 60 },
                      'Montana': { x: 35, y: 25 },
                      'North Dakota': { x: 45, y: 20 },
                      'Minnesota': { x: 55, y: 25 },
                      'Wisconsin': { x: 60, y: 30 },
                      'Michigan': { x: 65, y: 30 },
                      'Kansas': { x: 50, y: 50 },
                      'Nebraska': { x: 50, y: 40 },
                      'Oklahoma': { x: 50, y: 60 },
                      'Arizona': { x: 25, y: 65 },
                      'New Mexico': { x: 35, y: 65 },
                      'North Carolina': { x: 75, y: 60 },
                      'Louisiana': { x: 55, y: 75 },
                      'Northern Mariana Islands': { x: 90, y: 40 }
                    };
                    return positions[state] || { x: 50, y: 50 };
                  };

                  const position = getPosition(project.state);
                  return (
                    <div
                      key={project.id}
                      className={`absolute cursor-pointer transition-all hover:scale-150 ${
                        selectedProject?.id === project.id ? 'scale-150 animate-pulse-glow' : ''
                      }`}
                      style={{
                        left: `${position.x}%`,
                        top: `${position.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      onClick={() => handleProjectClick(project)}
                    >
                      <div className={`w-6 h-6 rounded-full border-2 shadow-lg ${getProjectColor(project)} ${
                        project.type === 'tribal' ? 'bg-blue-400/40 shadow-blue-400/50' :
                        project.type === 'sensitive' ? 'bg-red-400/40 shadow-red-400/50' :
                        project.type === 'corporate' ? 'bg-green-400/40 shadow-green-400/50' :
                        'bg-electric-blue/40 shadow-electric-blue/50'
                      } flex items-center justify-center backdrop-blur-sm`}>
                        {project.projectCount > 1 ? (
                          <span className="text-xs font-bold text-arctic-white">
                            {project.projectCount}
                          </span>
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-current opacity-80"></div>
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* Coordinate Grid */}
                <div className="absolute bottom-2 left-2 font-mono text-xs text-electric-blue/60">
                  LAT: {mapCenter.lat.toFixed(4)}° LNG: {mapCenter.lng.toFixed(4)}°
                </div>
              </div>
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
                    <div className={`text-sm font-mono ${getProjectColor(selectedProject).split(' ')[0]}`}>
                      {selectedProject.type.toUpperCase()}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground">STATUS</span>
                    <Badge variant="outline" className={`text-xs ${getStatusColor(selectedProject.status)}`}>
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
