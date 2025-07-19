"use client";

import { useState, useEffect } from "react";
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

export default function OperationsPage() {
  const [missionTime, setMissionTime] = useState(new Date());
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
    <div className="min-h-screen bg-background">
      {/* Mission Control Header */}
      <header className="border-b border-electric-blue/20 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-electric-blue hover:bg-electric-blue/10">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  MISSION CONTROL
                </Button>
              </Link>
              <div className="h-6 w-px bg-electric-blue/30"></div>
              <div>
                <h1 className="font-display text-xl text-arctic-white">OPERATIONS CENTER</h1>
                <p className="text-xs text-muted-foreground">GLOBAL PROJECT MONITORING</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Badge variant="outline" className="text-electric-blue border-electric-blue">
                <Activity className="w-3 h-3 mr-1" />
                OPERATIONAL
              </Badge>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">MISSION TIME</p>
                <p className="font-mono text-sm text-electric-blue">
                  {formatMissionTime(missionTime)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Operations Dashboard */}
      <main className="container mx-auto px-6 py-8">
        {/* Mission Brief */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-display text-3xl text-arctic-white mb-2">
                GLOBAL OPERATIONS OVERVIEW
              </h2>
              <p className="text-muted-foreground">
                Real-time monitoring of all active deployments and mission-critical infrastructure
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
                OPERATIONS CENTER • REAL-TIME DATA FEED
              </span>
            </div>
            <div className="flex items-center space-x-6 text-xs text-muted-foreground">
              <span>LAST UPDATE: {formatMissionTime(missionTime)}</span>
              <span>•</span>
              <span>SECURITY LEVEL: AUTHORIZED PERSONNEL ONLY</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
