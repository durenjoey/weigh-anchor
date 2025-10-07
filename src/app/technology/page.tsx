"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain,
  Smartphone,
  Database,
  Cloud,
  Shield,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Zap
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

export default function TechnologyPage() {
  const technologies = [
    {
      title: "AI & MACHINE LEARNING",
      icon: Brain,
      description: "Predictive analytics and intelligent automation for construction",
      features: [
        "Risk prediction algorithms",
        "Resource optimization AI",
        "Quality control automation",
        "Predictive maintenance"
      ]
    },
    {
      title: "MOBILE FIELD SOLUTIONS",
      icon: Smartphone,
      description: "Real-time data capture and communication from the field",
      features: [
        "Digital daily reports",
        "Photo documentation",
        "Offline capability",
        "Instant sync technology"
      ]
    },
    {
      title: "DATA ANALYTICS",
      icon: BarChart3,
      description: "Transform construction data into actionable insights",
      features: [
        "Real-time dashboards",
        "Custom KPI tracking",
        "Trend analysis",
        "Automated reporting"
      ]
    },
    {
      title: "CLOUD INFRASTRUCTURE",
      icon: Cloud,
      description: "Secure, scalable technology foundation",
      features: [
        "99.9% uptime guarantee",
        "Global accessibility",
        "Automatic backups",
        "Enterprise security"
      ]
    },
    {
      title: "IoT INTEGRATION",
      icon: Zap,
      description: "Connected job sites with smart sensors",
      features: [
        "Equipment tracking",
        "Environmental monitoring",
        "Safety compliance",
        "Real-time alerts"
      ]
    },
    {
      title: "CYBERSECURITY",
      icon: Shield,
      description: "Military-grade protection for your project data",
      features: [
        "End-to-end encryption",
        "Multi-factor authentication",
        "Compliance management",
        "Security auditing"
      ]
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
                TECHNOLOGY SOLUTIONS
              </Badge>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl text-arctic-white mb-6 leading-tight">
              CONSTRUCTION TECHNOLOGY
              <span className="block text-electric-blue">COMMAND CENTER</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Advanced digital solutions that transform construction management. 
              Real-time visibility, predictive insights, and seamless collaboration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/construction-copilot">
                <Button size="lg" className="bg-electric-blue hover:bg-electric-blue/80 text-arctic-white">
                  EXPLORE CONSTRUCTION COPILOT
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue/10">
                  SCHEDULE DEMO
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-electric-blue rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-signal-orange rounded-full animate-pulse"></div>
      </section>

      {/* Technology Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-arctic-white mb-6">
              TECHNOLOGY STACK
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade solutions designed for the unique challenges of construction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {technologies.map((tech, index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 bg-electric-blue/20 rounded-full flex items-center justify-center mb-4">
                    <tech.icon className="w-7 h-7 text-electric-blue" />
                  </div>
                  <CardTitle className="font-display text-xl text-arctic-white">
                    {tech.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {tech.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {tech.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-electric-blue flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gradient-to-b from-background via-electric-blue/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-arctic-white mb-6">
                  SEAMLESS INTEGRATION
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Our technology ecosystem is designed to work with your existing tools and workflows. 
                  No disruption, just enhancement.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-electric-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Database className="w-6 h-6 text-electric-blue" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-arctic-white mb-2">
                        API-FIRST ARCHITECTURE
                      </h3>
                      <p className="text-muted-foreground">
                        Connect with any system through our comprehensive REST APIs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-electric-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Cloud className="w-6 h-6 text-electric-blue" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-arctic-white mb-2">
                        CLOUD-NATIVE DESIGN
                      </h3>
                      <p className="text-muted-foreground">
                        Scale effortlessly as your projects grow
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-electric-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-electric-blue" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-arctic-white mb-2">
                        ENTERPRISE SECURITY
                      </h3>
                      <p className="text-muted-foreground">
                        Bank-level encryption and compliance standards
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Card className="bg-gradient-to-br from-electric-blue/20 to-signal-orange/20 border-electric-blue/30 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-electric-blue mb-4">95%</div>
                      <div className="text-xl text-arctic-white mb-2">EFFICIENCY GAIN</div>
                      <p className="text-muted-foreground">
                        Average improvement in project delivery times with our technology stack
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-electric-blue/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-signal-orange/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card className="bg-card/30 backdrop-blur-sm border-electric-blue/20 max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="font-display text-3xl text-arctic-white mb-6">
                READY TO DIGITALLY TRANSFORM YOUR CONSTRUCTION OPERATIONS?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join forward-thinking construction companies leveraging technology for competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-electric-blue hover:bg-electric-blue/80 text-arctic-white">
                    GET STARTED
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue/10">
                    VIEW SERVICES
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
