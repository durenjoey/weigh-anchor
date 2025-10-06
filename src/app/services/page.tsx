"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Shield, 
  Cpu,
  CheckCircle,
  ArrowRight,
  Target,
  Users,
  BarChart3,
  Clock
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

export default function ServicesPage() {
  const services = [
    {
      title: "CONSTRUCTION MANAGEMENT",
      icon: Building2,
      description: "End-to-end project oversight powered by technology",
      features: [
        "Real-time project tracking and reporting",
        "AI-powered risk assessment and mitigation",
        "Digital document management and collaboration",
        "Automated scheduling and resource optimization",
        "Quality control with digital inspections",
        "Budget tracking with predictive analytics"
      ],
      cta: "Learn More About CM Services"
    },
    {
      title: "OWNER'S REPRESENTATIVE",
      icon: Shield,
      description: "Protecting your interests with data-driven oversight",
      features: [
        "Independent project verification and validation",
        "Contract compliance monitoring",
        "Technology-enhanced vendor management",
        "Real-time budget and schedule analysis",
        "Risk identification and mitigation strategies",
        "Stakeholder communication management"
      ],
      cta: "Explore Owner's Rep Services"
    },
    {
      title: "TECHNOLOGY INTEGRATION",
      icon: Cpu,
      description: "Digital transformation for construction excellence",
      features: [
        "Construction Copilot AI implementation",
        "Custom workflow automation",
        "IoT sensor deployment and monitoring",
        "Data analytics and reporting dashboards",
        "Mobile field solutions deployment",
        "Legacy system integration and modernization"
      ],
      cta: "Discover Tech Solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Badge className="text-electric-blue border-electric-blue mb-4">
                PROFESSIONAL SERVICES
              </Badge>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl text-arctic-white mb-6 leading-tight">
              CONSTRUCTION SERVICES
              <span className="block text-electric-blue">ENHANCED BY TECHNOLOGY</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Traditional construction expertise amplified by cutting-edge technology. 
              We deliver projects smarter, faster, and with unprecedented transparency.
            </p>

            <Link href="/contact">
              <Button size="lg" className="bg-electric-blue hover:bg-electric-blue/80 text-arctic-white">
                START YOUR PROJECT
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-electric-blue rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-signal-orange rounded-full animate-pulse"></div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-card/30 backdrop-blur-sm border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mb-6 animate-pulse-glow">
                      <service.icon className="w-8 h-8 text-electric-blue" />
                    </div>
                    <CardTitle className="font-display text-2xl text-arctic-white mb-3">
                      {service.title}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-electric-blue mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-electric-blue text-electric-blue hover:bg-electric-blue/10">
                        {service.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Weigh Anchor Section */}
      <section className="py-20 bg-gradient-to-b from-background via-electric-blue/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-arctic-white mb-6">
              THE WEIGH ANCHOR ADVANTAGE
            </h2>
            <p className="text-xl text-muted-foreground">
              What sets us apart in construction management and technology integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-electric-blue" />
              </div>
              <h3 className="font-display text-lg text-arctic-white mb-2">PRECISION EXECUTION</h3>
              <p className="text-sm text-muted-foreground">
                Technology-driven accuracy in every phase of construction
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-electric-blue" />
              </div>
              <h3 className="font-display text-lg text-arctic-white mb-2">VETERAN LEADERSHIP</h3>
              <p className="text-sm text-muted-foreground">
                Military precision applied to construction excellence
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-electric-blue" />
              </div>
              <h3 className="font-display text-lg text-arctic-white mb-2">DATA-DRIVEN INSIGHTS</h3>
              <p className="text-sm text-muted-foreground">
                Real-time analytics for informed decision making
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-electric-blue" />
              </div>
              <h3 className="font-display text-lg text-arctic-white mb-2">24/7 MONITORING</h3>
              <p className="text-sm text-muted-foreground">
                Continuous project oversight through digital platforms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card className="bg-gradient-to-r from-electric-blue/20 to-signal-orange/20 border-electric-blue/30 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="font-display text-3xl text-arctic-white mb-6">
                READY TO TRANSFORM YOUR CONSTRUCTION PROJECT?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our technology-enhanced services can deliver exceptional results for your next project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-electric-blue hover:bg-electric-blue/80 text-arctic-white">
                    SCHEDULE CONSULTATION
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/construction-copilot">
                  <Button size="lg" variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue/10">
                    EXPLORE TECHNOLOGY
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-electric-blue/20 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-3 h-3 bg-electric-blue rounded-full animate-pulse"></div>
              <span className="font-mono text-sm text-muted-foreground">
                WEIGH ANCHOR • CONSTRUCTION INNOVATION
              </span>
            </div>
            <div className="font-mono text-sm text-muted-foreground">
              PROUDLY VETERAN OWNED • SDVOSB CERTIFIED
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
