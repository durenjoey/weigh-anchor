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
      icon: Building2,
      title: "Construction Management",
      subtitle: "Comprehensive oversight of construction projects from inception to completion",
      description: "End-to-end project oversight enhanced by our proprietary technology platform and decades of industry expertise.",
      features: [
        "Project planning and scheduling optimization",
        "Real-time progress monitoring and reporting",
        "Quality control and safety management",
        "Budget tracking and cost control",
        "Subcontractor coordination and management",
        "Risk assessment and mitigation strategies"
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100"
    },
    {
      icon: Shield,
      title: "Owner's Representative",
      subtitle: "Protecting owner interests throughout the project lifecycle",
      description: "Strategic advisory services ensuring your project investment is protected with expert guidance and advocacy.",
      features: [
        "Independent project oversight and advocacy",
        "Contract review and negotiation support",
        "Design and construction quality assurance",
        "Change order evaluation and approval",
        "Vendor and contractor performance monitoring",
        "Project milestone and deliverable validation"
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: Cpu,
      title: "Technology Integration",
      subtitle: "Implementing cutting-edge solutions to enhance project delivery",
      description: "Industry-leading efficiency through proprietary technology, automation, and data-driven insights that transform construction delivery.",
      features: [
        "AI-powered project analytics and insights",
        "Automated reporting and documentation",
        "Digital workflow optimization",
        "IoT sensor integration and monitoring",
        "Predictive analytics and forecasting",
        "Performance optimization algorithms"
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100"
    }
  ];

  const differentiators = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Decades of combined experience in federal and commercial construction"
    },
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description: "24/7 project visibility with instant alerts and automated reporting"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "40% average efficiency gains through technology-enhanced delivery"
    },
    {
      icon: Clock,
      title: "Rapid Response",
      description: "Quick deployment capabilities for urgent project needs"
    },
    {
      icon: Award,
      title: "SDVOSB Certified",
      description: "Service-Disabled Veteran-Owned Small Business certification"
    },
    {
      icon: Globe2,
      title: "National Reach",
      description: "Project delivery capabilities across all 50 states"
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
              Our Services
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Comprehensive construction solutions enhanced by cutting-edge technology 
              and decades of industry expertise.
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
                Why Choose Weigh Anchor
              </h2>
              <p className="text-lg text-slate-600">
                What sets us apart in the construction management industry
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
