"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// Badge component imported as BadgeUI to avoid naming conflict
import { Badge as BadgeUI } from "@/components/ui/badge";
import { 
  Shield, 
  Users,
  Award,
  MapPin,
  Building,
  Target,
  CheckCircle2,
  TrendingUp
} from "lucide-react";
import Link from "next/link";
import { getTotalProjectCount, getUniqueStates } from "@/data/projects";
import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  About Weigh Anchor
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  From complex infrastructure projects to Fortune 500 corporate campuses, Weigh Anchor 
                  delivers technology-enhanced construction management where precision and innovation 
                  drive exceptional outcomes.
                </p>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-orange mb-1">{getTotalProjectCount()}+</div>
                    <div className="text-sm text-slate-500">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange mb-1">{getUniqueStates().length}</div>
                    <div className="text-sm text-slate-500">States Served</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange mb-1">2020</div>
                    <div className="text-sm text-slate-500">Founded</div>
                  </div>
                </div>
              </div>
              
              {/* Company Stats Card */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-6">Our Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Federal Contracts</span>
                    <span className="font-bold text-slate-900">$30M+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Commercial Projects</span>
                    <span className="font-bold text-slate-900">$17M+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Team Members</span>
                    <span className="font-bold text-slate-900">200+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Client Retention</span>
                    <span className="font-bold text-slate-900">95%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Our Mission & Values
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange to-orange-dark rounded-xl flex items-center justify-center mb-6 shadow-md">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Precision</h3>
                  <p className="text-slate-600">
                    Meticulous attention to detail in every aspect of project delivery, 
                    from planning to execution.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
                    <Shield className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Integrity</h3>
                  <p className="text-slate-600">
                    Unwavering commitment to ethical practices and transparent 
                    communication with all stakeholders.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
                    <TrendingUp className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation</h3>
                  <p className="text-slate-600">
                    Leveraging cutting-edge technology to deliver superior outcomes 
                    and efficiency gains.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Our Foundation
                </h2>
                <div className="prose prose-lg text-slate-600">
                  <p className="mb-4">
                    Founded by USAF veteran <strong>Joseph Duren Lopez</strong>, Weigh Anchor began with a clear mission: 
                    to transform the construction industry through innovation and unwavering commitment to excellence.
                  </p>
                  <p className="mb-4">
                    Our name reflects our philosophy - helping clients break free from constraints that hold them back, 
                    just as a ship weighs anchor to set sail toward new horizons.
                  </p>
                  <p className="mb-4">
                    As a Service-Disabled Veteran-Owned Small Business (SDVOSB), we've built a strong foundation in 
                    construction project management, serving federal agencies, tribal organizations, and Fortune 500 companies.
                  </p>
                  <p>
                    Today, we're leading the charge in construction technology innovation. Our expertise in traditional 
                    construction management now fuels our technology innovations, creating solutions that address real-world 
                    challenges we've encountered in the field.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Where We Are Today</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Innovation Focus</span>
                    <span className="font-bold text-slate-900">Technology Leadership</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Market Position</span>
                    <span className="font-bold text-slate-900">Industry Pioneer</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Core Mission</span>
                    <span className="font-bold text-slate-900">Construction Innovation</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Value Proposition</span>
                    <span className="font-bold text-slate-900">Efficiency & Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Leadership Team
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder for leadership - replace with actual team */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">CEO & Founder</h3>
                  <p className="text-sm text-slate-600 mb-3">Service-Disabled Veteran</p>
                  <p className="text-sm text-slate-500">
                    20+ years construction and federal contracting experience
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Chief Technology Officer</h3>
                  <p className="text-sm text-slate-600 mb-3">Technology Innovation</p>
                  <p className="text-sm text-slate-500">
                    Former tech industry leader driving construction innovation
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">VP of Operations</h3>
                  <p className="text-sm text-slate-600 mb-3">Project Excellence</p>
                  <p className="text-sm text-slate-500">
                    15+ years managing complex federal construction projects
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Differentiators */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Our Foundation
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Weigh Anchor operates as a certified Service-Disabled Veteran-Owned Small Business 
                  (SDVOSB). This certification reflects our commitment to excellence and provides our 
                  clients with procurement advantages while honoring our military heritage.
                </p>
                <div className="flex gap-4">
                  <BadgeUI className="bg-orange-100 text-orange-700 border-orange-200 px-4 py-2">
                    <Award className="w-4 h-4 mr-2" />
                    SDVOSB Certified
                  </BadgeUI>
                  <BadgeUI className="bg-blue-100 text-blue-700 border-blue-200 px-4 py-2">
                    <Shield className="w-4 h-4 mr-2" />
                    Veteran Owned
                  </BadgeUI>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Why Weigh Anchor
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Remote Project Expertise</div>
                      <div className="text-sm text-slate-600">
                        Specialized capabilities for challenging and remote locations
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Technology Leadership</div>
                      <div className="text-sm text-slate-600">
                        Industry-leading efficiency through proprietary systems
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Federal Experience</div>
                      <div className="text-sm text-slate-600">
                        Proven track record with DOJ, VA, and tribal nations
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">24/7 Support</div>
                      <div className="text-sm text-slate-600">
                        Continuous monitoring and rapid response capabilities
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange/5 to-orange/10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Ready to Partner with Weigh Anchor?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Discover how our technology-forward approach and federal expertise 
              can transform your next construction project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8">
                  Contact Our Team
                </Button>
              </Link>
              <Link href="/capabilities">
                <Button size="lg" variant="outline" className="border-slate-300 px-8">
                  View Capabilities
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

