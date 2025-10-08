"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useReactToPrint } from 'react-to-print';
import { 
  Building2,
  MapPin,
  Phone,
  Mail,
  Globe,
  Award,
  Users,
  TrendingUp,
  Download,
  Zap,
  Target,
  Shield,
  Activity,
  BarChart3,
  Cpu
} from "lucide-react";
import { getTotalProjectCount, getUniqueStates, getOpenProjectCount } from "@/data/projects";

export default function CapabilityStatementPage() {
  const [mounted, setMounted] = useState(false);
  const [animatedProjects, setAnimatedProjects] = useState(0);
  const [animatedStates, setAnimatedStates] = useState(0);
  const [animatedActive, setAnimatedActive] = useState(0);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const totalProjects = getTotalProjectCount();
  const activeProjects = getOpenProjectCount();
  const statesServed = getUniqueStates().length;

  useEffect(() => {
    setMounted(true);
    // Animate counters
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedProjects(Math.floor(totalProjects * progress));
      setAnimatedStates(Math.floor(statesServed * progress));
      setAnimatedActive(Math.floor(activeProjects * progress));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedProjects(totalProjects);
        setAnimatedStates(statesServed);
        setAnimatedActive(activeProjects);
      }
    }, increment);
    
    return () => clearInterval(timer);
  }, [totalProjects, activeProjects, statesServed]);

  const handlePrint = useReactToPrint({
    contentRef: contentRef,
    documentTitle: `Weigh-Anchor-Capability-Statement-${new Date().toISOString().split('T')[0]}`,
    onBeforePrint: () => {
      setIsGeneratingPdf(true);
    },
    onAfterPrint: () => {
      setIsGeneratingPdf(false);
    },
    pageStyle: `
      @page {
        size: A4;
        margin: 0.4in;
      }
      @media print {
        * {
          box-sizing: border-box !important;
        }
        body {
          -webkit-print-color-adjust: exact !important;
          color-adjust: exact !important;
          font-size: 12px !important;
          line-height: 1.3 !important;
        }
        /* Force proper grid layout */
        .lg\\:grid-cols-3 {
          display: grid !important;
          grid-template-columns: 2fr 1fr !important;
          gap: 1rem !important;
          align-items: start !important;
        }
        .lg\\:col-span-2 {
          grid-column: span 1 !important;
        }
        /* Fix all spacing */
        .space-y-6 > *:not(:first-child) {
          margin-top: 1rem !important;
        }
        .space-y-8 > *:not(:first-child) {
          margin-top: 1.25rem !important;
        }
        .gap-6 {
          gap: 0.75rem !important;
        }
        .gap-8 {
          gap: 1rem !important;
        }
        /* Card sizing and positioning */
        [class*="Card"], .card {
          break-inside: avoid !important;
          margin-bottom: 0.75rem !important;
          padding: 0.75rem !important;
          min-height: unset !important;
          height: auto !important;
        }
        .p-6 {
          padding: 0.75rem !important;
        }
        .p-8 {
          padding: 1rem !important;
        }
        .mb-6 {
          margin-bottom: 0.75rem !important;
        }
        .mb-12 {
          margin-bottom: 1rem !important;
        }
        /* Text sizing for print */
        .text-4xl { font-size: 1.5rem !important; line-height: 1.2 !important; }
        .text-3xl { font-size: 1.25rem !important; line-height: 1.2 !important; }
        .text-2xl { font-size: 1.125rem !important; line-height: 1.2 !important; }
        .text-xl { font-size: 1rem !important; line-height: 1.2 !important; }
        .text-lg { font-size: 0.9rem !important; line-height: 1.2 !important; }
        /* Grid layout specific fixes */
        .grid.md\\:grid-cols-2 {
          grid-template-columns: 1fr 1fr !important;
          gap: 0.5rem !important;
        }
        .grid.md\\:grid-cols-3 {
          grid-template-columns: 1fr 1fr 1fr !important;
          gap: 0.5rem !important;
        }
        /* Ensure content doesn't overflow */
        .container {
          max-width: 100% !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        /* Right column specific fixes */
        .space-y-6.h-full > * {
          margin-bottom: 0.75rem !important;
        }
        .space-y-6.h-full > *:last-child {
          margin-bottom: 0 !important;
        }
      }
    `
  });

  const naicsCodes = [
    { code: "236220", description: "Commercial and Institutional Building Construction", icon: Building2 },
    { code: "541330", description: "Engineering Services", icon: Cpu },
    { code: "541511", description: "Custom Computer Programming Services", icon: Activity }
  ];

  const capabilities = [
    { title: "Construction Management", icon: Building2, description: "Full-cycle construction oversight and project delivery" },
    { title: "Remote Project Delivery", icon: Globe, description: "Expert deployment anywhere, from arctic to tropical locations" },
    { title: "Technology Integration", icon: Cpu, description: "Proprietary tools and cutting-edge construction technology" },
    { title: "Owner's Representative", icon: Shield, description: "Protecting client interests throughout project lifecycle" },
    { title: "Project Management", icon: Target, description: "Comprehensive planning, scheduling, and execution oversight" },
    { title: "Construction Inspection", icon: Activity, description: "Quality assurance and compliance verification services" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Futuristic Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-4 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-12 w-1 h-1 bg-orange-400 rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-6 left-1/3 w-1.5 h-1.5 bg-orange-300 rounded-full animate-pulse delay-200"></div>
          <div className="absolute bottom-12 right-8 w-1 h-1 bg-orange-500 rounded-full animate-pulse delay-300"></div>
        </div>
        <div className="relative container mx-auto px-6 py-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                <img 
                  src="/assets/logos/WeighAnchor_Logoonly_Transparent_2023_08_16.png" 
                  alt="Weigh Anchor" 
                  className="relative h-20 w-auto brightness-0 invert"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">CAPABILITY STATEMENT</h1>
                <div className="flex items-center gap-2 text-orange-400">
                  <Zap className="h-4 w-4" />
                  <span className="text-lg">Professional Services, Any Location</span>
                </div>
                <div className="flex items-center gap-4 mt-2 text-slate-300 text-sm">
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Live Data Integration
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    Real-Time Metrics
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right space-y-2">
              <Button 
                size="lg"
                onClick={handlePrint}
                disabled={isGeneratingPdf}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/25 disabled:opacity-50"
              >
                <Download className="mr-2 h-4 w-4" />
                {isGeneratingPdf ? 'Preparing...' : 'Print/Save as PDF'}
              </Button>
              <div className="text-slate-400 text-sm">Generated: {new Date().toLocaleDateString()}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Header - Only visible in PDF */}
      <div className="hidden print:block bg-white p-8 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img 
              src="/assets/logos/WeighAnchor_Logoonly_Transparent_2023_08_16.png" 
              alt="Weigh Anchor" 
              className="h-16 w-auto"
            />
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-1">WEIGH ANCHOR</h1>
              <p className="text-orange-600 text-lg font-semibold">CAPABILITY STATEMENT</p>
              <p className="text-slate-600">Professional Services, Any Location</p>
            </div>
          </div>
          <div className="text-right text-sm text-slate-600">
            <p>Generated: {new Date().toLocaleDateString()}</p>
            <p>CAGE Code: 9LA92</p>
            <p>UEI: JU1LYRJGRWL9</p>
          </div>
        </div>
      </div>

      {/* Real-Time Metrics Dashboard */}
      <div ref={contentRef} className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm uppercase tracking-wide">Total Projects</p>
                  <p className="text-4xl font-bold">{mounted ? animatedProjects : 0}</p>
                </div>
                <div className="p-3 bg-white/20 rounded-full">
                  <BarChart3 className="h-8 w-8" />
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            </CardContent>
          </Card>
          
          <Card className="relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm uppercase tracking-wide">States Served</p>
                  <p className="text-4xl font-bold">{mounted ? animatedStates : 0}</p>
                </div>
                <div className="p-3 bg-white/20 rounded-full">
                  <Globe className="h-8 w-8" />
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            </CardContent>
          </Card>
          
          <Card className="relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm uppercase tracking-wide">Active Projects</p>
                  <p className="text-4xl font-bold">{mounted ? animatedActive : 0}</p>
                </div>
                <div className="p-3 bg-white/20 rounded-full">
                  <Activity className="h-8 w-8" />
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Company Statement */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 to-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-orange-500 rounded-lg">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">COMPANY OVERVIEW</h2>
                </div>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p className="text-lg font-medium">
                    Weigh Anchor provides professional construction management, owner's representative services, 
                    construction inspection, and project management to public and private sector clients nationwide.
                  </p>
                  <p>
                    <strong>Core Differentiator:</strong> We specialize in remote and challenging location projects 
                    where traditional contractors cannot operate effectively. Our teams deploy directly to project sites 
                    with no subcontractor dependencies, ensuring consistent quality and accountability.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 pt-4">
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-bold text-blue-900 mb-2">Project Experience</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Municipal infrastructure projects</li>
                        <li>• Commercial and institutional construction</li>
                        <li>• Federal and state government facilities</li>
                        <li>• Remote site development and management</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-bold text-green-900 mb-2">Service Delivery</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Direct employee deployment (no subs)</li>
                        <li>• Technology-enhanced project oversight</li>
                        <li>• Real-time reporting and communication</li>
                        <li>• Comprehensive risk management</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Core Competencies with Progress Bars */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 to-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-orange-500 rounded-lg">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">CORE CAPABILITIES</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {capabilities.map((capability, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <capability.icon className="h-5 w-5 text-orange-500" />
                        <span className="font-bold text-slate-900">{capability.title}</span>
                      </div>
                      <p className="text-slate-600 text-sm">{capability.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Detailed Services */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 to-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-slate-700 rounded-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">PROFESSIONAL SERVICES</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-orange-500" />
                      Construction Management
                    </h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 font-bold">•</span>
                        <span>Full project lifecycle oversight from planning to closeout</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 font-bold">•</span>
                        <span>Schedule development and critical path management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 font-bold">•</span>
                        <span>Budget control and cost tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 font-bold">•</span>
                        <span>Quality assurance and safety compliance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 font-bold">•</span>
                        <span>Contractor coordination and communication</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-blue-500" />
                      Owner's Representative
                    </h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>Independent advocacy for owner interests</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>Contract administration and change order review</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>Risk identification and mitigation strategies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>Progress monitoring and milestone verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>Final inspection and project handover</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Activity className="h-5 w-5 text-green-500" />
                      Construction Inspection
                    </h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">•</span>
                        <span>Daily field inspection and documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">•</span>
                        <span>Material testing coordination and verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">•</span>
                        <span>Code compliance verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">•</span>
                        <span>Photographic documentation and reporting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">•</span>
                        <span>Deficiency identification and resolution tracking</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Target className="h-5 w-5 text-purple-500" />
                      Project Management
                    </h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 font-bold">•</span>
                        <span>Integrated project delivery coordination</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 font-bold">•</span>
                        <span>Stakeholder communication and reporting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 font-bold">•</span>
                        <span>Resource allocation and optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 font-bold">•</span>
                        <span>Permit coordination and regulatory compliance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 font-bold">•</span>
                        <span>Technology implementation and training</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6 h-full">
            
            {/* NAICS Codes */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-indigo-50 to-cyan-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-500 rounded-lg">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">NAICS CODES</h3>
                </div>
                <div className="space-y-4">
                  {naicsCodes.map((naics, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg shadow-md border-l-4 border-indigo-500">
                      <div className="flex items-center gap-2 mb-2">
                        <naics.icon className="h-4 w-4 text-indigo-500" />
                        <div className="font-bold text-indigo-600 text-lg">{naics.code}</div>
                      </div>
                      <div className="text-sm text-slate-600">{naics.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-teal-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-500 rounded-lg">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">CERTIFICATIONS</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <img 
                      src="/assets/logos/SDVOSB_Logo_White_2023_06_22.png.png" 
                      alt="SDVOSB Certified" 
                      className="h-10 w-auto bg-slate-800 p-2 rounded mx-auto"
                    />
                  </div>
                  <div className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <img 
                      src="/assets/logos/dbe.png" 
                      alt="DBE Certified" 
                      className="h-10 w-auto mx-auto"
                    />
                  </div>
                  <div className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <img 
                      src="/assets/logos/King county scs.png" 
                      alt="King County SCS" 
                      className="h-10 w-auto mx-auto"
                    />
                  </div>
                  <div className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <img 
                      src="/assets/logos/OMWBE-Certified-Badge.png" 
                      alt="OMWBE MBE Certified" 
                      className="h-10 w-auto mx-auto"
                    />
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">CAGE Code:</span>
                    <span className="font-bold text-slate-900">9LA92</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">UEI:</span>
                    <span className="font-bold text-slate-900">JU1LYRJGRWL9</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <span className="text-emerald-600 font-semibold">✓ Service-Disabled Veteran-Owned Small Business</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project Scope & Geographic Reach */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500 rounded-lg">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">PROJECT SCOPE</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="font-bold text-blue-900 mb-2">Geographic Coverage</h4>
                    <p className="text-sm text-slate-600 mb-2">
                      Active in {statesServed} states
                    </p>
                    <div className="flex flex-wrap gap-1 text-xs">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Alaska</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Washington</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Oregon</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">California</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">+ {statesServed - 4} more</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="font-bold text-blue-900 mb-2">Project Values</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-600">Typical Range:</span>
                        <div className="font-bold">$50K - $5M</div>
                      </div>
                      <div>
                        <span className="text-slate-600">Largest Project:</span>
                        <div className="font-bold">$12M+</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="font-bold text-blue-900 mb-2">Sector Experience</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Federal, State & Municipal Government</li>
                      <li>• Educational Institutions & Healthcare</li>
                      <li>• Commercial & Industrial Facilities</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

        {/* Futuristic Contact Footer */}
        <div className="mt-12 relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-2 left-8 w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
            <div className="absolute top-6 right-16 w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse delay-75"></div>
            <div className="absolute bottom-4 left-1/4 w-1 h-1 bg-orange-300 rounded-full animate-pulse delay-150"></div>
          </div>
          <div className="relative p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-500 rounded-full blur-lg opacity-30"></div>
                  <img 
                    src="/assets/logos/WeighAnchor_Logoonly_Transparent_2023_08_16.png" 
                    alt="Weigh Anchor" 
                    className="relative h-16 w-auto brightness-0 invert"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-1">WEIGH ANCHOR</h2>
                  <p className="text-orange-400 text-lg">Professional Services, Any Location</p>
                  <p className="text-slate-400 text-sm mt-1">Where Others Say "Impossible," We Get Started</p>
                </div>
              </div>
              <div className="text-right space-y-3 text-white">
                <div className="flex items-center gap-3 justify-end">
                  <div className="p-2 bg-orange-500/20 rounded-lg">
                    <Phone className="h-5 w-5 text-orange-400" />
                  </div>
                  <span className="text-lg">(407) 687-3792</span>
                </div>
                <div className="flex items-center gap-3 justify-end">
                  <div className="p-2 bg-orange-500/20 rounded-lg">
                    <Mail className="h-5 w-5 text-orange-400" />
                  </div>
                  <span className="text-lg">info@weighanchor.com</span>
                </div>
                <div className="flex items-center gap-3 justify-end">
                  <div className="p-2 bg-orange-500/20 rounded-lg">
                    <MapPin className="h-5 w-5 text-orange-400" />
                  </div>
                  <span className="text-lg">Bellevue, WA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}