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
                  Where Construction 
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Meets Innovation</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Our mission: becoming the most remote, most tech-forward construction company. 
                  When others say "impossible location," we deploy our experts with cutting-edge 
                  technology to deliver exceptional results anywhere.
                </p>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-orange mb-1">{getTotalProjectCount()}+</div>
                    <div className="text-sm text-slate-500">Project Portfolio</div>
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
              
              {/* Our Approach Card */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Our Approach</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Deployment Model</span>
                    <span className="font-bold text-slate-900">Direct Expert Teams</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Geographic Reach</span>
                    <span className="font-bold text-slate-900">Anywhere, Anytime</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Technology Edge</span>
                    <span className="font-bold text-slate-900">Proprietary AI Platform</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Core Difference</span>
                    <span className="font-bold text-slate-900">We Go Where Others Won't</span>
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
                  Our Story
                </h2>
                <div className="prose prose-lg text-slate-600">
                  <p className="mb-4">
                    We discovered our niche when others wouldn't go: the impossible locations. Arctic installations, 
                    remote tropical islands, isolated government sites—places where traditional construction companies 
                    subcontract to local firms or simply decline the work.
                  </p>
                  <p className="mb-4">
                    Our name reflects our philosophy - helping clients break free from constraints that hold them back, 
                    just as a ship weighs anchor to set sail toward new horizons.
                  </p>
                  <p className="mb-4">
                    Instead of saying "we can't," we built the capabilities to deploy our own expert teams anywhere. 
                    We developed proprietary technology, specialized logistics, and remote project delivery systems 
                    that work where others fail.
                  </p>
                  <p>
                    Our founder's background combines military precision with hands-on experience in challenging 
                    environments—from scuba diving across 4 continents to mountain climbing in 3. This isn't just 
                    business strategy; it's personal expertise that translates directly into our ability to deploy 
                    teams and execute projects where others see only obstacles.
                  </p>
                  <p>
                    Today, we're on a mission to become the most remote, most tech-forward construction company. 
                    Our field expertise fuels our technology innovations, creating solutions that address real-world 
                    challenges we've encountered in the most demanding environments. When we say "you can get us anywhere," 
                    we mean it—because we've already been there.
                  </p>
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
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* CEO & Founder */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-orange-100">
                    <img 
                      src="/assets/team/ceo.jpeg" 
                      alt="Joseph Duren Lopez" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Joseph Duren Lopez</h3>
                  <p className="text-sm text-orange-600 font-semibold mb-2">CEO & Founder</p>
                  <p className="text-sm text-slate-600 mb-3">Service-Disabled Veteran, USAF</p>
                  <p className="text-sm text-slate-500">
                    20+ years construction and federal contracting experience. Transforming the industry through innovation and military precision.
                  </p>
                </CardContent>
              </Card>

              {/* CFO */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-orange-100">
                    <img 
                      src="/assets/team/cfo.png" 
                      alt="Roxana Forghani" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Roxana Forghani</h3>
                  <p className="text-sm text-orange-600 font-semibold mb-2">Chief Financial Officer</p>
                  <p className="text-sm text-slate-600 mb-3">Former Fortune 500 Leader, CPA</p>
                  <p className="text-sm text-slate-500">
                    Financial innovation and disruptor with extensive Fortune 500 experience driving growth and operational excellence.
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
                <div className="space-y-6">
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
                  <div className="pt-4">
                    <div className="text-sm text-slate-600 mb-4">Official Certifications</div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <img 
                        src="/assets/logos/SDVOSB_Logo_White_2023_06_22.png.png" 
                        alt="SDVOSB Certified" 
                        className="h-14 w-auto bg-slate-800 p-2 rounded-lg"
                      />
                      <img 
                        src="/assets/logos/dbe.png" 
                        alt="DBE Certified" 
                        className="h-14 w-auto bg-white p-2 rounded-lg border border-slate-200"
                      />
                      <img 
                        src="/assets/logos/King county scs.png" 
                        alt="King County SCS" 
                        className="h-14 w-auto bg-white p-2 rounded-lg border border-slate-200"
                      />
                      <img 
                        src="/assets/logos/OMWBE-Certified-Badge.png" 
                        alt="OMWBE MBE Certified" 
                        className="h-14 w-auto bg-white p-2 rounded-lg border border-slate-200"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-slate-500 text-xs">CAGE Code</div>
                        <div className="font-semibold text-slate-900">9LA92</div>
                      </div>
                      <div>
                        <div className="text-slate-500 text-xs">UEI</div>
                        <div className="font-semibold text-slate-900">JU1LYRJGRWL9</div>
                      </div>
                    </div>
                  </div>
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
                      <div className="font-semibold text-slate-900">Government Experience</div>
                      <div className="text-sm text-slate-600">
                        Proven track record with federal, tribal, and local governments
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Fortune 500 Clients</div>
                      <div className="text-sm text-slate-600">
                        Enterprise-scale projects for major corporations including Pfizer
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Rapid Response</div>
                      <div className="text-sm text-slate-600">
                        Quick deployment and response capabilities for urgent project needs
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

