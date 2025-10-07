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
  const [activeProjects, setActiveProjects] = useState(0);
  const [totalProjects, setTotalProjects] = useState(0);
  const [states, setStates] = useState(0);
  const [contractValue, setContractValue] = useState(0);

  useEffect(() => {
    setMounted(true);
    // Animate numbers on mount
    const projectTarget = getTotalProjectCount();
    const activeTarget = getOpenProjectCount();
    const statesTarget = getUniqueStates().length;
    const contractTarget = 47; // $47M in contract value
    
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
      setContractValue(Math.floor(contractTarget * progress));
      
      if (currentStep === steps) {
        clearInterval(timer);
        setTotalProjects(projectTarget);
        setActiveProjects(activeTarget);
        setStates(statesTarget);
        setContractValue(contractTarget);
      }
    }, increment);
    
    return () => clearInterval(timer);
  }, []);

  const capabilities = [
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
      title: "Technology-Enhanced Delivery",
      description: "Industry-leading efficiency through proprietary technology and data analytics",
      color: "from-purple-500 to-purple-600"
    }
  ];

  // Placeholder client logos - replace with actual logos when provided
  const clientLogos = [
    { name: "Department of Justice", type: "federal" },
    { name: "Veterans Affairs", type: "federal" },
    { name: "Tribal Nations", type: "tribal" },
    { name: "Fortune 500", type: "corporate" }
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
              Technology-Enhanced Construction Management delivering exceptional results 
              across federal, tribal, and commercial projects nationwide.
            </p>

            {/* Performance Metrics */}
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
                <div className="p-2 bg-green-100 rounded-lg">
                  <Activity className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">${mounted ? contractValue : 0}M+</div>
                  <div className="text-sm text-slate-500">Contract Value</div>
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
              <Button size="lg" variant="outline" className="border-slate-300">
                <Download className="mr-2 h-4 w-4" />
                Capability Statement
              </Button>
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
                  {getUniqueStates().length} States • {getTotalProjectCount()}+ Projects
                </div>
                <div className="text-sm text-slate-600">
                  {getOpenProjectCount()} Active Engagements
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Trust Bar */}
      <section className="py-12 bg-slate-100 border-y border-slate-200">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Trusted By</h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
              {clientLogos.map((client, index) => (
                <div key={index} className="text-slate-400 hover:text-slate-600 transition-colors">
                  <div className="text-sm font-medium">{client.name}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Badge className="bg-orange-100 text-orange-700 border-orange-200 px-3 py-1">
                SDVOSB
              </Badge>
              <Badge className="bg-blue-100 text-blue-700 border-blue-200 px-3 py-1">
                CAGE: XXXXX
              </Badge>
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
              Comprehensive solutions engineered for federal and commercial construction challenges
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

          {/* Technology Advantage Metrics */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">The Technology Advantage</h3>
              <p className="text-slate-600">Our proprietary construction technology delivers measurable results</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">10,000+</div>
                  <div className="text-sm text-slate-600">AI Conversations</div>
                  <div className="text-xs text-slate-500 mt-1">Construction guidance & support</div>
                </div>
              </Card>
              
              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">4.4/5</div>
                  <div className="text-sm text-slate-600">Client Rating</div>
                  <div className="text-xs text-slate-500 mt-1">Based on 200+ reviews</div>
                </div>
              </Card>
              
              <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">40%</div>
                  <div className="text-sm text-slate-600">Efficiency Gain</div>
                  <div className="text-xs text-slate-500 mt-1">Technology-driven savings</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Vehicles & Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Contract Vehicles & Certifications
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">SDVOSB Certified</div>
                      <div className="text-sm text-slate-600">Service-Disabled Veteran-Owned Small Business</div>
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
                      <div className="text-sm text-slate-600">Available upon request</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">UEI</div>
                      <div className="text-sm text-slate-600">Available upon request</div>
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
                      <div className="font-semibold text-slate-900">Federal Experience</div>
                      <div className="text-sm text-slate-600">DOJ, VA, and tribal nation projects</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                    <div>
                      <div className="font-semibold text-slate-900">24/7 Support</div>
                      <div className="text-sm text-slate-600">Round-the-clock project monitoring</div>
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
                As the industry's most technology-forward construction firm, we deliver superior 
                results through proprietary systems and data-driven insights. Our clients benefit 
                from unmatched efficiency, real-time visibility, and predictive project intelligence—all 
                while their data remains secure in our closed-loop systems.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-800/50 backdrop-blur rounded-lg p-4">
                  <div className="text-3xl font-bold text-orange-500 mb-1">40%</div>
                  <div className="text-sm text-slate-400">Cost Efficiency</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-500 mb-1">50%</div>
                  <div className="text-sm text-slate-400">Faster Delivery</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur rounded-lg p-4">
                  <div className="text-3xl font-bold text-purple-500 mb-1">100%</div>
                  <div className="text-sm text-slate-400">Data Security</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-500 mb-1">24/7</div>
                  <div className="text-sm text-slate-400">Real-Time Visibility</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Shield className="h-4 w-4" />
                <span>All project data remains proprietary and secure within our systems</span>
              </div>
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

      {/* Footer */}
      <footer className="py-12 bg-slate-950 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Weigh Anchor</h3>
              <p className="text-sm text-slate-400">
                Technology-enhanced construction management for federal and commercial projects.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <p>10900 NE 4th Street, Suite 2300</p>
                <p>Bellevue, WA 98004</p>
                <p>(425) 289-0030</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Certifications</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <p>SDVOSB Certified</p>
                <p>CAGE: XXXXX</p>
                <p>UEI: XXXXXXXXX</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <div className="space-y-2">
                <Link href="/capabilities" className="block text-sm text-slate-400 hover:text-white">
                  Capabilities
                </Link>
                <Link href="/past-performance" className="block text-sm text-slate-400 hover:text-white">
                  Past Performance
                </Link>
                <a href="#" className="block text-sm text-slate-400 hover:text-white">
                  Capability Statement (PDF)
                </a>
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
              <span className="text-slate-300">Serving Federal & Commercial Clients Nationwide</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Badge component for certifications
function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-medium ${className}`}>
      {children}
    </span>
  );
}