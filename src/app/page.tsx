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
  Activity,
  Download,
  Award,
  CheckCircle2,
  Briefcase,
  Star,
  MessageCircle
} from "lucide-react";
import { getTotalProjectCount, getOpenProjectCount, getUniqueStates } from "@/data/projects";
import Link from "next/link";
import Header from "@/components/Header";
import MapboxMap from "@/components/MapboxMap";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [totalProjects, setTotalProjects] = useState(0);
  const [states, setStates] = useState(0);

  useEffect(() => {
    setMounted(true);
    // Animate numbers on mount
    const projectTarget = getTotalProjectCount();
    const statesTarget = getUniqueStates().length;
    
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setTotalProjects(Math.floor(projectTarget * progress));
      setStates(Math.floor(statesTarget * progress));
      
      if (currentStep === steps) {
        clearInterval(timer);
        setTotalProjects(projectTarget);
        setStates(statesTarget);
      }
    }, increment);
    
    return () => clearInterval(timer);
  }, []);

  const capabilities = [
    {
      icon: Building2,
      title: "Construction Professional Services",
      description: "Comprehensive construction management, owner's representation, and project oversight services",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Globe2,
      title: "Remote Project Delivery",
      description: "Specialized expertise delivering complex projects in challenging locations from arctic tundra to remote tropical islands",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Cpu,
      title: "Technology-Enhanced Delivery",
      description: "Industry-leading efficiency through proprietary technology and data analytics",
      color: "from-purple-500 to-purple-600"
    }
  ];

  // Client sectors we serve
  const clientLogos = [
    { name: "Federal Government", type: "federal" },
    { name: "Tribal Nations", type: "tribal" },
    { name: "Municipal Governments", type: "municipal" },
    { name: "Private Sector", type: "corporate" }
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
              Where Construction
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Meets Innovation</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-3xl leading-relaxed">
              Professional services for public and private clients in any location - from arctic tundra 
              to corporate boardrooms, powered by cutting-edge technology.
            </p>

            {/* Performance Metrics */}
            <div className="mt-10 flex flex-wrap gap-8 items-center justify-start">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">{mounted ? totalProjects : 0}+</div>
                  <div className="text-sm text-slate-500">Project Portfolio</div>
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
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Award className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">SDVOSB</div>
                  <div className="text-sm text-slate-500">Certified</div>
                </div>
              </div>
            </div>

            {/* Professional Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange hover:bg-orange-dark text-white">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-slate-300">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Our Services
                </Button>
              </Link>
              <a href="/assets/documents/Weigh Anchor Capability Statement  - 14May2024.pdf" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-slate-300">
                  <Download className="mr-2 h-4 w-4" />
                  Capability Statement
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Project Map Section */}
        <div className="relative mt-8">
          <div className="container mx-auto px-4 lg:px-6 pb-12">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-slate-900">Project Coverage</h2>
              <p className="text-slate-600">Federal, tribal, and commercial projects across the nation</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900" style={{ height: '600px' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10 pointer-events-none"></div>
              <MapboxMap />
              
              {/* Map Legend */}
              <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl">
                <div className="text-sm font-semibold text-slate-600 mb-2">Project Types</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-xs text-slate-700">Federal/Tribal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs text-slate-700">Commercial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    <span className="text-xs text-slate-700">Technology</span>
                  </div>
                </div>
              </div>

              {/* Stats Overlay */}
              <div className="absolute bottom-6 right-6 z-20 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl">
                <div className="text-2xl font-bold text-slate-900">
                  {getUniqueStates().length} States • {getTotalProjectCount()}+ Project Portfolio
                </div>
                <div className="text-sm text-slate-600">
                  Federal, Tribal & Commercial Projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Trust Bar */}
      <section className="py-12 bg-slate-100 border-y border-slate-200">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="text-center">
              <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Our Clients</h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
              {clientLogos.map((client, index) => (
                <div key={index} className="text-slate-400 hover:text-slate-600 transition-colors">
                  <div className="text-sm font-medium">{client.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Core Capabilities
            </h2>
            <p className="text-lg text-slate-600">
              Solutions for your construction challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {capabilities.map((capability, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${capability.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}>
                </div>
                
                <div className="relative p-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${capability.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <capability.icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {capability.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {capability.description}
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

      {/* Qualifications and Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Qualifications and Certifications
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Business Certifications</div>
                      <div className="text-sm text-slate-600">SDVOSB | MBE | DBE | King County SCS</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">NAICS Codes</div>
                      <div className="text-sm text-slate-600">236220, 541330, 541511, 541512</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">CAGE Code</div>
                      <div className="text-sm text-slate-600">9LA92</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">UEI</div>
                      <div className="text-sm text-slate-600">JU1LYRJGRWL9</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Differentiators
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                    <div>
                      <div className="font-semibold text-slate-900">Remote Project Expertise</div>
                      <div className="text-sm text-slate-600">Specialized in challenging, remote locations</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                    <div>
                      <div className="font-semibold text-slate-900">Technology-Forward Operations</div>
                      <div className="text-sm text-slate-600">40% efficiency gains through proprietary systems</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                    <div>
                      <div className="font-semibold text-slate-900">Government Experience</div>
                      <div className="text-sm text-slate-600">Federal, tribal, and local government projects</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                    <div>
                      <div className="font-semibold text-slate-900">Project Oversight</div>
                      <div className="text-sm text-slate-600">Comprehensive project visibility and tracking</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Advantage Section */}
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
                The Technology <span className="text-orange-500">Advantage</span>
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Our mission is to become the industry's most technology-forward construction firm. 
                We deliver superior results through proprietary systems and data-driven insights. 
                Our clients benefit from enhanced efficiency, improved project visibility, and 
                intelligent project management—all while maintaining complete data ownership in our systems.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-800/50 backdrop-blur rounded-lg p-4">
                  <div className="text-3xl font-bold text-orange-500 mb-1">10,000+</div>
                  <div className="text-sm text-slate-400">AI Conversations</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-500 mb-1">4.4/5</div>
                  <div className="text-sm text-slate-400">Client Rating</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-500 mb-1">40%</div>
                  <div className="text-sm text-slate-400">Efficiency Gain</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur rounded-lg p-4">
                  <div className="text-3xl font-bold text-purple-500 mb-1">100%</div>
                  <div className="text-sm text-slate-400">Data Ownership</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Shield className="h-4 w-4" />
                <span>All project data remains proprietary and secure within our systems</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 p-8 shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl font-bold text-orange-500 mb-4">200+</div>
                  <div className="text-xl text-slate-300 mb-2">Project Reviews</div>
                  <div className="text-sm text-slate-400">Consistently delivering exceptional results</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-4 gap-8 mb-8">
            <div className="flex items-center justify-center">
              <Link href="/">
                <img 
                  src="/assets/logos/WeighAnchor_Logowithwords_Transparent_Alt_2022_03_06.png.png" 
                  alt="Weigh Anchor" 
                  className="h-32 w-auto brightness-0 invert hover:scale-105 transition-transform cursor-pointer"
                />
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <p>Bellevue, WA</p>
                <p>(407) 687-3792</p>
                <p>info@weighanchor.com</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Certifications</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <p>SDVOSB Certified</p>
                <p>Service-Disabled Veteran-Owned</p>
                <p>Federal & Commercial Projects</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/services" className="block text-sm text-slate-400 hover:text-white">
                  Our Services
                </Link>
                <Link href="/about" className="block text-sm text-slate-400 hover:text-white">
                  About Us
                </Link>
                <Link href="/contact" className="block text-sm text-slate-400 hover:text-white">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
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

