"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  ArrowLeft,
  Shield, 
  Zap,
  Users,
  Award,
  ExternalLink,
  MapPin,
  Building,
  Cpu,
  Globe
} from "lucide-react";
import Link from "next/link";
import { getTotalProjectCount, getUniqueStates } from "@/data/projects";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-electric-blue/20 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-electric-blue hover:bg-electric-blue/10">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  PROJECT ARD
                </Button>
              </Link>
              <div className="h-6 w-px bg-electric-blue/30"></div>
              <div>
                <h1 className="font-display text-xl text-arctic-white">ABOUT</h1>
                <p className="text-xs text-muted-foreground">ADVANCED REMOTE DEPLOYMENT</p>
              </div>
            </div>
            <Badge variant="outline" className="text-electric-blue border-electric-blue">
              <Target className="w-3 h-3 mr-1" />
              OPERATIONAL
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-display text-4xl md:text-6xl text-arctic-white mb-6 leading-tight">
                  ABOUT PROJECT ARD
                  <span className="block text-electric-blue text-2xl md:text-3xl mt-2">
                    Advanced Remote Deployment
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  From tundra accessible only by bush plane to Fortune 500 corporate campuses, Project ARD executes complex construction, engineering, and technology projects where precision and reliability are non-negotiable.
                </p>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-electric-blue">{getTotalProjectCount()}+</div>
                    <div className="text-sm text-muted-foreground">PROJECTS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-electric-blue">{getUniqueStates().length}</div>
                    <div className="text-sm text-muted-foreground">STATES</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-electric-blue">24/7</div>
                    <div className="text-sm text-muted-foreground">OPERATIONS</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                {/* Hero Image Placeholder */}
                <div className="bg-card/30 backdrop-blur-sm border border-electric-blue/20 rounded-lg p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-electric-blue mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      [HERO IMAGE]<br />
                      Bush plane in remote Alaska landscape<br />
                      Expedition team at remote construction site
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Capability */}
      <section className="py-20 bg-card/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl text-arctic-white mb-4">
                OUR CAPABILITY
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                As a nationally operating firm, we've delivered over {getTotalProjectCount()} projects across {getUniqueStates().length} states and territories. Our expertise spans remote infrastructure development, specialized engineering services, and cutting-edge business process automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative">
                {/* Capability Image Placeholder */}
                <div className="bg-card/30 backdrop-blur-sm border border-electric-blue/20 rounded-lg p-8 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <Building className="w-12 h-12 text-electric-blue mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      [CAPABILITY IMAGE]<br />
                      Remote construction site<br />
                      Technical infrastructure work
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                {/* Corporate Image Placeholder */}
                <div className="bg-card/30 backdrop-blur-sm border border-electric-blue/20 rounded-lg p-8 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="w-12 h-12 text-electric-blue mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      [CORPORATE IMAGE]<br />
                      Fortune 500 campus<br />
                      Professional team meeting
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-card/30 backdrop-blur-sm border-electric-blue/20">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We don't just adapt to challenging environments—we thrive in them. Our approach combines traditional construction management excellence with advanced technology solutions. We've developed{" "}
                  <a 
                    href="https://constructioncopilot.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-electric-blue hover:text-electric-blue/80 font-medium inline-flex items-center"
                  >
                    Construction Copilot
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                  , an AI-powered platform that automates critical project management functions, demonstrating our commitment to not just using technology, but building it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Innovation */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-arctic-white mb-6">
                  TECHNOLOGY INNOVATION
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our{" "}
                  <a 
                    href="https://constructioncopilot.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-electric-blue hover:text-electric-blue/80 font-medium inline-flex items-center"
                  >
                    Construction Copilot
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                  {" "}platform represents the cutting edge of construction project management automation. This AI-powered solution streamlines complex workflows, enhances decision-making, and ensures precision execution across all project phases.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Cpu className="w-5 h-5 text-electric-blue" />
                    <span className="text-muted-foreground">AI-powered project management automation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-electric-blue" />
                    <span className="text-muted-foreground">Real-time workflow optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-electric-blue" />
                    <span className="text-muted-foreground">Mission-critical reliability standards</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                {/* Technology Image Placeholder */}
                <div className="bg-card/30 backdrop-blur-sm border border-electric-blue/20 rounded-lg p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <Cpu className="w-16 h-16 text-electric-blue mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      [TECHNOLOGY IMAGE]<br />
                      Construction Copilot dashboard<br />
                      AI interface screenshots<br />
                      Technical workflow diagrams
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-card/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl text-arctic-white mb-4">
                WHO WE SERVE
              </h2>
              <p className="text-muted-foreground text-lg">
                From federal agencies to Fortune 500 enterprises, we deliver mission-critical execution
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/30 backdrop-blur-sm border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-electric-blue" />
                  </div>
                  <h3 className="font-display text-xl text-arctic-white mb-4">FEDERAL AGENCIES & GOVERNMENT</h3>
                  <p className="text-muted-foreground mb-4">
                    Department of Justice, Veterans Affairs, tribal nations
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• Secure facility construction</div>
                    <div>• Remote infrastructure development</div>
                    <div>• Compliance-critical projects</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/30 backdrop-blur-sm border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building className="w-8 h-8 text-electric-blue" />
                  </div>
                  <h3 className="font-display text-xl text-arctic-white mb-4">FORTUNE 500 ENTERPRISES</h3>
                  <p className="text-muted-foreground mb-4">
                    Pfizer, Seagen, and leading corporations requiring mission-critical execution
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• Business process automation</div>
                    <div>• Seismic engineering services</div>
                    <div>• Enterprise technology solutions</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/30 backdrop-blur-sm border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-electric-blue" />
                  </div>
                  <h3 className="font-display text-xl text-arctic-white mb-4">SPECIALIZED MARKETS</h3>
                  <p className="text-muted-foreground mb-4">
                    Technical projects in remote locations, seismic engineering, infrastructure automation
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• Extreme environment projects</div>
                    <div>• Technical engineering solutions</div>
                    <div>• Custom automation platforms</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Foundation */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-arctic-white mb-6">
                  OUR FOUNDATION
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Project ARD operates as a certified Service-Disabled Veteran-Owned Small Business (SDVOSB), Minority Business Enterprise (MBE), and Disadvantaged Business Enterprise (DBE). These certifications reflect our commitment to excellence and provide our clients with additional procurement advantages.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <Badge variant="outline" className="text-electric-blue border-electric-blue p-3 text-center">
                    <div className="font-mono text-xs">SDVOSB</div>
                  </Badge>
                  <Badge variant="outline" className="text-electric-blue border-electric-blue p-3 text-center">
                    <div className="font-mono text-xs">MBE</div>
                  </Badge>
                  <Badge variant="outline" className="text-electric-blue border-electric-blue p-3 text-center">
                    <div className="font-mono text-xs">DBE</div>
                  </Badge>
                </div>
              </div>
              <div className="relative">
                {/* Team Image Placeholder */}
                <div className="bg-card/30 backdrop-blur-sm border border-electric-blue/20 rounded-lg p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <Users className="w-16 h-16 text-electric-blue mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      [TEAM IMAGE]<br />
                      Professional expedition team<br />
                      Technical expertise in action<br />
                      Certification badges/awards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 bg-card/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-arctic-white mb-6">
              PRECISION. INNOVATION. RELIABILITY.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Whether coordinating complex logistics in roadless environments or delivering sophisticated automation solutions for enterprise clients, we bring the same standard of precision, innovation, and unwavering reliability to every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-electric-blue/20 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-3 h-3 bg-electric-blue rounded-full animate-pulse"></div>
              <span className="font-mono text-sm text-muted-foreground">
                PROJECT ARD • ADVANCED REMOTE DEPLOYMENT
              </span>
            </div>
            <div className="font-mono text-sm text-muted-foreground">
              SDVOSB • MBE • DBE CERTIFIED
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
