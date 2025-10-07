"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2,
  Shield, 
  Cpu,
  CheckCircle2,
  ArrowRight,
  Users,
  Activity,
  TrendingUp,
  Clock,
  Award,
  Globe2
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

export default function ServicesPage() {
  const services = [
    {
      icon: Globe2,
      title: "Remote Project Delivery",
      subtitle: "Specialized expertise for challenging and isolated locations",
      description: "When others say impossible, we deploy. From arctic installations to tropical island construction, isolated government sites to extreme terrain—you can get us anywhere.",
      features: [
        "Arctic installations and cold-weather construction",
        "Tropical island and coastal project delivery",
        "Isolated government sites and remote facilities",
        "Extreme terrain and challenging access logistics",
        "Remote supply chain and resource management",
        "Specialized deployment and mobilization capabilities"
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: Building2,
      title: "Construction Professional Services",
      subtitle: "Full-service capabilities, regardless of location complexity",
      description: "Construction Management, Owner's Representative, Project Management, and Construction Inspection services delivered with the same expertise whether you're in downtown Seattle or the middle of Alaska.",
      features: [
        "Construction Management and oversight",
        "Owner's Representative and advocacy services",
        "Project Management and coordination",
        "Construction Inspection and quality assurance",
        "Consulting services and strategic advisory",
        "Contract administration and change management"
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100"
    },
    {
      icon: Cpu,
      title: "Technology-Enhanced Solutions",
      subtitle: "Tech-augmented professionals delivering faster results",
      description: "Our technology capabilities and tools augment our team's expertise, enabling enhanced efficiency and accurate project delivery regardless of location.",
      features: [
        "Proprietary AI platform for construction intelligence",
        "Drone surveying and aerial inspection services",
        "Remote site surveys and assessments",
        "Digital drafting and design services",
        "Digital twin creation and modeling",
        "Data analytics and project reporting"
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100"
    }
  ];

  const differentiators = [
    {
      icon: Users,
      title: "Direct Deployment",
      description: "We deploy our own expert teams rather than relying on local subcontractors"
    },
    {
      icon: Globe2,
      title: "Geographic Reach",
      description: "Arctic tundra to tropical islands—you can get us anywhere"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "40% average efficiency gains through technology-enhanced delivery"
    },
    {
      icon: Clock,
      title: "Rapid Mobilization",
      description: "Quick deployment capabilities for urgent and remote project needs"
    },
    {
      icon: Award,
      title: "SDVOSB Certified",
      description: "Service-Disabled Veteran-Owned Small Business certification"
    },
    {
      icon: Cpu,
      title: "Tech-Augmented Teams",
      description: "Internal software tools that enhance our team's efficiency in any environment"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              When Others Say "Impossible Location," 
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> We Say "Let's Get Started"</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Our mission: becoming the most remote, most tech-forward construction company. Professional services 
              delivered anywhere—from arctic installations to tropical island projects.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <Card className={`border-0 shadow-xl bg-gradient-to-br ${service.bgColor}`}>
                      <CardContent className="p-8">
                        <div className="text-center">
                          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                            <service.icon className="h-10 w-10 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-3">
                            {service.title}
                          </h3>
                          <p className="text-slate-600 mb-6">
                            {service.subtitle}
                          </p>
                          <Link href="/contact">
                            <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                              Get Started
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Weigh Anchor */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Why This Matters
              </h2>
              <p className="text-lg text-slate-600">
                Others subcontract to local firms. We deploy our own experts.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentiators.map((item, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange/5 to-orange/10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Ready to Transform Your Next Project?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Discover how our technology-enhanced approach can deliver exceptional 
              results for your construction project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-orange hover:bg-orange-dark text-white px-8">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-slate-300 px-8">
                  Learn About Us
                </Button>
              </Link>
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
