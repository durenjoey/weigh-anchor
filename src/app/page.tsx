"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Crosshair, 
  Zap, 
  Shield, 
  Satellite,
  ChevronRight,
  Globe,
  Target
} from "lucide-react";
import { getTotalProjectCount, getOpenProjectCount, getUniqueStates } from "@/data/projects";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header />

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
              Professional services for construction, engineering, and technology projects in the world's most challenging locations.
              <span className="block mt-2 text-electric-blue font-medium">
                {getTotalProjectCount()} projects • {getUniqueStates().length} locations • Global reach
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-electric-blue hover:bg-electric-blue/80 text-arctic-white font-medium px-8 py-4 text-lg">
                <Satellite className="w-5 h-5 mr-2" />
                START PROJECT
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Link href="/operations">
                <Button variant="outline" size="lg" className="border-electric-blue text-electric-blue hover:bg-electric-blue/10 px-8 py-4 text-lg">
                  <Globe className="w-5 h-5 mr-2" />
                  PROJECT PORTFOLIO
                </Button>
              </Link>
            </div>

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
              SERVICE CAPABILITIES
            </h2>
            <p className="text-muted-foreground text-lg">
              Precision execution in challenging environments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card/30 backdrop-blur-sm border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300 cursor-crosshair group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                  <Target className="w-8 h-8 text-electric-blue" />
                </div>
                <h3 className="font-display text-xl text-arctic-white mb-4">CONSTRUCTION PROJECT MANAGEMENT</h3>
                <p className="text-muted-foreground">
                  Remote infrastructure projects for tribal nations and government agencies in impossible locations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/30 backdrop-blur-sm border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300 cursor-crosshair group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                  <Shield className="w-8 h-8 text-electric-blue" />
                </div>
                <h3 className="font-display text-xl text-arctic-white mb-4">ENGINEERING SERVICES</h3>
                <p className="text-muted-foreground">
                  Specialized technical and seismic engineering for complex corporate and government projects.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/30 backdrop-blur-sm border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300 cursor-crosshair group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                  <Zap className="w-8 h-8 text-electric-blue" />
                </div>
                <h3 className="font-display text-xl text-arctic-white mb-4">TECHNOLOGY & AUTOMATION</h3>
                <p className="text-muted-foreground">
                  Business process automation and digital transformation for enterprise clients.
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
                ACTIVE PROJECTS: {getOpenProjectCount()}
              </span>
            </div>
            <div className="font-mono text-sm text-muted-foreground">
              PROJECT ARD © 2025 • ENTERPRISE PROJECTS
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
