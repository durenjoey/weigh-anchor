"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Building2,
  Shield, 
  Cpu,
  ArrowRight,
  TrendingUp,
  Globe2,
  Users,
  Activity
} from "lucide-react";
import { getTotalProjectCount, getOpenProjectCount, getUniqueStates } from "@/data/projects";
import Link from "next/link";
import Header from "@/components/Header";
import MapboxMap from "@/components/MapboxMap";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeProjects, setActiveProjects] = useState(0);
  const [totalProjects, setTotalProjects] = useState(0);
  const [states, setStates] = useState(0);

  useEffect(() => {
    setMounted(true);
    // Animate numbers on mount
    const projectTarget = getTotalProjectCount();
    const activeTarget = getOpenProjectCount();
    const statesTarget = getUniqueStates().length;
    
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setTotalProjects(Math.floor(projectTarget * progress));
      setActiveProjects(Math.floor(activeTarget * progress));
      setStates(Math.floor(statesTarget * progress));
      
      if (currentStep === steps) {
        clearInterval(timer);
        setTotalProjects(projectTarget);
        setActiveProjects(activeTarget);
        setStates(statesTarget);
      }
    }, increment);
    
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: Building2,
      title: "Construction Management",
      description: "End-to-end project oversight powered by AI and real-time analytics",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "Owner's Representative",
      description: "Strategic advisory services protecting your investment interests",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Cpu,
      title: "Technology Solutions",
      description: "Construction Copilot AI platform for next-gen project management",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-transparent to-blue-50 opacity-60"></div>
        
        <div className="relative container mx-auto px-4 lg:px-6 pt-16 pb-8">
          <div className="max-w-5xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
              Building Tomorrow's
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Infrastructure</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-3xl leading-relaxed">
              Technology-enhanced construction management delivering exceptional results 
              across the nation's most complex projects.
            </p>

            {/* Live Stats Bar */}
            <div className="mt-10 flex flex-wrap gap-8 items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">{mounted ? totalProjects : 0}+</div>
                  <div className="text-sm text-slate-500">Projects Delivered</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Activity className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">{mounted ? activeProjects : 0}</div>
                  <div className="text-sm text-slate-500">Active Projects</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Globe2 className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">{mounted ? states : 0}</div>
                  <div className="text-sm text-slate-500">States Served</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">24/7</div>
                  <div className="text-sm text-slate-500">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section - Full Width */}
        <div className="relative">
          <div className="container mx-auto px-4 lg:px-6 pb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900" style={{ height: '600px' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10 pointer-events-none"></div>
              <MapboxMap />
              
              {/* Map Overlay Stats */}
              <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl">
                <div className="text-sm font-semibold text-slate-600 mb-1">Project Coverage</div>
                <div className="text-2xl font-bold text-slate-900">
                  {getUniqueStates().length} States • {getTotalProjectCount()}+ Projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Core Capabilities
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive solutions engineered for the construction industry's evolving challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}>
                </div>
                
                <div className="relative p-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <Link href="/services" className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, #ff8c42 0%, transparent 50%), radial-gradient(circle at 80% 80%, #3b82f6 0%, transparent 50%)'
          }}></div>
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Powered by <span className="text-orange-500">Innovation</span>
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Our proprietary Construction Copilot AI platform transforms how teams collaborate, 
                analyze data, and deliver projects. Experience the future of construction management 
                with real-time insights, predictive analytics, and intelligent automation.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-800/50 backdrop-blur rounded-lg p-4">
                  <div className="text-3xl font-bold text-orange-500 mb-1">10K+</div>
                  <div className="text-sm text-slate-400">AI Conversations</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-500 mb-1">99.9%</div>
                  <div className="text-sm text-slate-400">Uptime SLA</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur rounded-lg p-4">
                  <div className="text-3xl font-bold text-purple-500 mb-1">40%</div>
                  <div className="text-sm text-slate-400">Efficiency Gain</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-500 mb-1">200+</div>
                  <div className="text-sm text-slate-400">Active Teams</div>
                </div>
              </div>
              
              <Link href="/technology">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white shadow-xl">
                  Explore Technology
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 p-8 shadow-2xl">
                <div className="h-full rounded-xl bg-slate-900/50 flex items-center justify-center">
                  <Cpu className="h-32 w-32 text-orange-500/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Next Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join industry leaders who trust Weigh Anchor for their most critical construction initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90 shadow-xl px-8 py-6 text-lg font-semibold">
                  Start Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-400">
              © 2025 Weigh Anchor. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-slate-300">Proudly Veteran Owned</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">SDVOSB Certified</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}