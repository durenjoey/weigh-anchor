"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  ArrowLeft,
  Activity,
  Globe,
  Satellite
} from "lucide-react";
import Link from "next/link";
import MapboxMap from "@/components/MapboxMap";
import { Project, getTotalProjectCount, getOpenProjectCount, getUniqueStates } from "@/data/projects";
import Header from "@/components/Header";

// Client-only time component to prevent hydration issues
const TimeDisplay = dynamic(() => Promise.resolve(function TimeDisplay() {
  const [missionTime, setMissionTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setMissionTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatMissionTime = (date: Date) => {
    return date.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
  };

  return (
    <p className="font-mono text-sm text-electric-blue">
      {formatMissionTime(missionTime)}
    </p>
  );
}), { ssr: false });

export default function OperationsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Operations Dashboard */}
      <main className="container mx-auto px-6 py-8">
        {/* Mission Brief */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-display text-3xl text-arctic-white mb-2">
                PROJECT PORTFOLIO OVERVIEW
              </h2>
              <p className="text-muted-foreground">
                Real-time monitoring of all active projects and critical infrastructure
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-electric-blue">{getTotalProjectCount()}</div>
                <div className="text-xs text-muted-foreground">TOTAL PROJECTS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-electric-blue">{getUniqueStates().length}</div>
                <div className="text-xs text-muted-foreground">LOCATIONS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-signal-orange">24/7</div>
                <div className="text-xs text-muted-foreground">MONITORING</div>
              </div>
            </div>
          </div>

          {/* Mission Status Bar */}
          <div className="flex items-center space-x-4 p-4 bg-card/20 rounded-lg border border-electric-blue/20">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-electric-blue rounded-full animate-pulse"></div>
              <span className="font-mono text-sm text-electric-blue">ALL SYSTEMS OPERATIONAL</span>
            </div>
            <div className="h-4 w-px bg-electric-blue/30"></div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Global Coverage Active</span>
            </div>
            <div className="h-4 w-px bg-electric-blue/30"></div>
            <div className="flex items-center space-x-2">
              <Satellite className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Satellite Uplink Stable</span>
            </div>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="min-h-[600px]">
          <MapboxMap onProjectSelect={setSelectedProject} />
        </div>

        {/* Mission Footer */}
        <div className="mt-8 pt-6 border-t border-electric-blue/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Target className="w-5 h-5 text-electric-blue" />
              <span className="font-mono text-sm text-muted-foreground">
                PROJECT CONTROL CENTER • REAL-TIME DATA FEED
              </span>
            </div>
            <div className="flex items-center space-x-6 text-xs text-muted-foreground">
              <span>LAST UPDATE: <TimeDisplay /></span>
              <span>•</span>
              <span>ACCESS LEVEL: AUTHORIZED PERSONNEL ONLY</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
