"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Crosshair, 
  MapPin, 
  Zap, 
  Shield, 
  Satellite,
  ChevronRight,
  Activity,
  Globe
} from "lucide-react";
import { projects, getTotalProjectCount, getOpenProjectCount, getUniqueStates } from "@/data/projects";
import Link from "next/link";

export default function Home() {
  const [activeCoordinate, setActiveCoordinate] = useState(0);
  const [missionStatus, setMissionStatus] = useState("OPERATIONAL");

  const coordinates = [
    { lat: "71.0°N", lng: "156.8°W", location: "Northern Alaska" },
    { lat: "15.2°N", lng: "145.7°E", location: "Northern Mariana Islands" },
    { lat: "64.8°N", lng: "147.7°W", location: "Interior Alaska" },
    { lat: "19.7°N", lng: "155.1°W", location: "Hawaii Remote" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCoordinate((prev) => (prev + 1) % coordinates.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const statusInterval = setInterval(() => {
      setMissionStatus(prev => 
        prev === "OPERATIONAL" ? "SCANNING" : 
        prev === "SCANNING" ? "LOCKED" : "OPERATIONAL"
      );
    }, 2000);
    return () => clearInterval(statusInterval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Mission Control Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-electric-blue/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-electric-blue rounded-full flex items-center justify-center animate-pulse-glow">
                <Target className="w-4 h-4 text-arctic-white" />
              </div>
              <div>
                <h1 className="font-display text-xl text-arctic-white">PROJECT ARD</h1>
                <p className="text-xs text-muted-foreground">ADVANCED REMOTE DEPLOYMENT</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Badge variant="outline" className="text-electric-blue border-electric-blue">
                <Activity className="w-3 h-3 mr-1" />
                {missionStatus}
              </Badge>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">ACTIVE COORDINATES</p>
                <p className="font-mono text-sm text-electric-blue">
                  {coordinates[activeCoordinate].lat} {coordinates[activeCoordinate].lng}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Crosshair Animation */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <Crosshair className="w-16 h-16 text-electric-blue animate-crosshair" />
                <div className="absolute inset-0 w-16 h-16 border-2 border-electric-blue/30 rounded-full animate-ping"></div>
              </div>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 text-arctic-white leading-tight">
              WE GO WHERE
              <span className="block text-electric-blue">OTHERS CAN'T</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Advanced logistics coordination for the world's most remote construction projects.
              <span className="block mt-2 text-electric-blue font-medium">
                {getTotalProjectCount()} projects • {getUniqueStates().length} locations • Global reach
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-electric-blue hover:bg-electric-blue/80 text-arctic-white font-medium px-8 py-4 text-lg">
                <Satellite className="w-5 h-5 mr-2" />
                INITIATE MISSION
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Link href="/operations">
                <Button variant="outline" size="lg" className="border-electric-blue text-electric-blue hover:bg-electric-blue/10 px-8 py-4 text-lg">
                  <Globe className="w-5 h-5 mr-2" />
                  VIEW OPERATIONS
                </Button>
              </Link>
            </div>

            {/* Live Coordinates Display */}
            <Card className="bg-card/50 backdrop-blur-sm border-electric-blue/20 max-w-md mx-auto">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">CURRENT TARGET</span>
                  <MapPin className="w-4 h-4 text-signal-orange animate-pulse" />
                </div>
                <div className="font-mono text-lg text-electric-blue">
                  {coordinates[activeCoordinate].location}
                </div>
                <div className="font-mono text-sm text-muted-foreground">
                  {coordinates[activeCoordinate].lat} {coordinates[activeCoordinate].lng}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-electric-blue rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-signal-orange rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-electric-blue rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-arctic-white mb-4">
              MISSION CAPABILITIES
            </h2>
            <p className="text-muted-foreground text-lg">
              Precision deployment in impossible conditions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card/30 backdrop-blur-sm border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300 cursor-crosshair group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                  <Target className="w-8 h-8 text-electric-blue" />
                </div>
                <h3 className="font-display text-xl text-arctic-white mb-4">PRECISION LOGISTICS</h3>
                <p className="text-muted-foreground">
                  Coordinating complex supply chains across impossible terrain and weather conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/30 backdrop-blur-sm border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300 cursor-crosshair group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                  <Shield className="w-8 h-8 text-electric-blue" />
                </div>
                <h3 className="font-display text-xl text-arctic-white mb-4">EXTREME CONDITIONS</h3>
                <p className="text-muted-foreground">
                  Operating in environments where conventional methods fail. Arctic, tropical, remote.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/30 backdrop-blur-sm border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300 cursor-crosshair group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                  <Zap className="w-8 h-8 text-electric-blue" />
                </div>
                <h3 className="font-display text-xl text-arctic-white mb-4">RAPID DEPLOYMENT</h3>
                <p className="text-muted-foreground">
                  Gaming-level responsiveness in real-world logistics. Every decision optimized for speed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Status Footer */}
      <footer className="py-8 border-t border-electric-blue/20 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-3 h-3 bg-electric-blue rounded-full animate-pulse"></div>
              <span className="font-mono text-sm text-muted-foreground">
                SYSTEM STATUS: ALL OPERATIONS NOMINAL
              </span>
            </div>
            <div className="font-mono text-sm text-muted-foreground">
              PROJECT ARD © 2025 • CLASSIFIED OPERATIONS
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
