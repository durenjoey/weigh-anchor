"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bot,
  Zap,
  ChevronRight,
  Search,
  Trash2,
  Minimize2,
  Cog,
  Rocket,
  Users,
  TrendingDown,
} from "lucide-react";
import Link from "next/link";
import DarkNav from "@/components/DarkNav";

// --- Fade in on scroll ---
function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function AutomationServicesPage() {
  return (
    <div className="min-h-screen bg-[#0d0f13] text-zinc-300">

      <DarkNav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[30%] -right-[10%] w-[50%] h-[60%] bg-cyan-500/5 rounded-full blur-[160px]" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[40%] h-[50%] bg-cyan-600/4 rounded-full blur-[160px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />

        <div className="relative container mx-auto px-4 lg:px-6 pt-24 pb-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm border border-zinc-700 bg-zinc-900/80 text-xs text-zinc-400 uppercase tracking-widest font-mono mb-10">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-sm shadow-cyan-400/50" />
              Automation Services
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight mb-6">
              Map it. Eliminate it. Simplify it.<br />
              <span className="text-cyan-400">Automate what&apos;s left.</span>
            </h1>

            <div className="flex gap-4 mt-2 mb-8">
              <div className="w-1 bg-gradient-to-b from-cyan-400 to-cyan-400/0 rounded-full flex-shrink-0" />
              <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
                  Automation, AI implementation, digitization, and process engineering —
                built with your team, not around them. Whether you need a custom dashboard
                or a full AI workflow, we build it and we build it fast.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-cyan-500 text-white hover:bg-cyan-400 font-bold uppercase tracking-wider text-sm rounded-sm shadow-lg shadow-cyan-500/20">
                  Get a Free Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services2">
                <Button size="lg" variant="outline" className="border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-white hover:border-zinc-600 rounded-sm uppercase tracking-wider text-sm font-medium">
                  See Construction Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Playbook — 5 steps */}
      <section className="py-24 border-y-2 border-zinc-800 bg-zinc-900/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="mb-16">
                <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">The Playbook</p>
                <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
                  Five steps. Every engagement.
                </h2>
                <p className="text-zinc-500 text-lg max-w-2xl">
                  Before we automate anything, we make sure there&apos;s something worth automating.
                </p>
              </div>
            </FadeIn>

            <div className="space-y-0">
              {[
                {
                  step: "01",
                  icon: Search,
                  title: "Map",
                  description: "We sit down with your team and document every process, every handoff, every system. We need to understand how work actually flows — not how anyone thinks it flows. This is the audit, and we do it together.",
                  color: "text-cyan-400",
                  borderColor: "border-cyan-500/20",
                  bgColor: "bg-cyan-500/10",
                },
                {
                  step: "02",
                  icon: Trash2,
                  title: "Eliminate",
                  description: "The fastest process is one that doesn't exist. Your team knows where the waste is — they just haven't been asked. We identify duplicate approvals, unnecessary reports, and steps that exist because \"we've always done it that way.\"",
                  color: "text-red-400",
                  borderColor: "border-red-500/20",
                  bgColor: "bg-red-500/10",
                },
                {
                  step: "03",
                  icon: Minimize2,
                  title: "Simplify",
                  description: "What's left gets streamlined. Consolidate tools, reduce handoffs, standardize formats. We make every remaining process as lean as possible before writing a single line of code.",
                  color: "text-orange-400",
                  borderColor: "border-orange-500/20",
                  bgColor: "bg-orange-500/10",
                },
                {
                  step: "04",
                  icon: Cog,
                  title: "Automate",
                  description: "Now we build. AI workflows, automated reporting, system integrations, custom dashboards, digitized forms — even a website if that's what you need. We write the code, train the models, and deploy it into your operation.",
                  color: "text-cyan-400",
                  borderColor: "border-cyan-500/20",
                  bgColor: "bg-cyan-500/10",
                },
                {
                  step: "05",
                  icon: Rocket,
                  title: "Accelerate",
                  description: "Optimize for speed. Monitor performance, find the next bottleneck, repeat the cycle. Your team learns the systems as we build them — this is a partnership, not a handoff.",
                  color: "text-green-400",
                  borderColor: "border-green-500/20",
                  bgColor: "bg-green-500/10",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <div className="relative flex gap-8 py-8">
                    {i < 4 && (
                      <div className="absolute left-[23px] top-[72px] bottom-0 w-px bg-zinc-800" />
                    )}
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-md ${item.bgColor} border ${item.borderColor} flex items-center justify-center`}>
                        <item.icon className={`h-5 w-5 ${item.color}`} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`font-mono text-sm font-bold ${item.color}`}>{item.step}</span>
                        <h3 className="text-xl font-bold text-white tracking-tight">{item.title}</h3>
                      </div>
                      <p className="text-zinc-500 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we actually do */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="mb-16">
                <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">Services</p>
                <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
                  What this looks like in practice
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "AI & Automation",
                  description: "AI-powered workflows, automated reporting, intelligent document processing, predictive analytics. We build and deploy AI that actually saves money — not demos, production systems.",
                },
                {
                  title: "Digitization",
                  description: "Paper forms to digital. Spreadsheets to dashboards. Tribal websites to modern platforms. If it's analog and it shouldn't be, we digitize it — fast.",
                },
                {
                  title: "Process Engineering",
                  description: "We work with your team to map, redesign, and optimize your operations. Collaborative — we don't disappear into a back room and hand you a report. We build it together.",
                },
                {
                  title: "Ongoing Support",
                  description: "$5K/month. Maintenance, training, continuous improvement, and new builds. All requests handled one at a time until complete. Your team gets trained on everything we deploy.",
                },
              ].map((service, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 h-full">
                    <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{service.title}</h3>
                    <p className="text-zinc-500 leading-relaxed text-sm">{service.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-24 border-y-2 border-zinc-800 bg-zinc-900/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="mb-16">
                <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">Ideal Client</p>
                <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
                  Is this you?
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "You process hundreds of work orders or projects per year",
                "Your team copies data between spreadsheets, emails, and systems",
                "You have dispatchers or coordinators doing repetitive scheduling",
                "Your operation runs on people instead of systems",
                "Turnover keeps resetting your institutional knowledge",
                "You've tried software solutions that created more work, not less",
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 50}>
                  <div className="flex items-start gap-3 py-3 px-4 rounded-md border border-zinc-800/50 bg-zinc-900/30">
                    <ChevronRight className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-400 text-sm">{item}</span>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={300}>
              <div className="mt-12 rounded-lg border border-zinc-800 bg-zinc-900/50 p-8">
                <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">Industries We Serve</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Government Agencies",
                    "Tribal Nations",
                    "Municipal Utilities",
                    "Facility Maintenance",
                    "Construction Programs",
                    "Property Management",
                  ].map((industry, i) => (
                    <div key={i} className="px-4 py-2 rounded-sm border border-zinc-700 bg-zinc-800/50 text-sm text-zinc-400 font-mono">
                      {industry}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The ROI */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="mb-16">
                <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">The Math</p>
                <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight">
                  The ROI is straightforward.
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="rounded-lg border-2 border-zinc-800 bg-zinc-900/50 p-8 text-center">
                  <div className="w-12 h-12 rounded-md bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-5 w-5 text-red-400" />
                  </div>
                  <div className="font-mono text-3xl font-black text-red-400 mb-2">$95K+</div>
                  <div className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-mono mb-3">Per Employee / Year</div>
                  <p className="text-zinc-600 text-sm">Salary, benefits, overhead, management time, mistakes, turnover</p>
                </div>

                <div className="rounded-lg border-2 border-cyan-500/20 bg-cyan-500/[0.03] p-8 text-center">
                  <div className="w-12 h-12 rounded-md bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                    <Bot className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div className="font-mono text-3xl font-black text-cyan-400 mb-2">$60K</div>
                  <div className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-mono mb-3">Automation Services / Year</div>
                  <p className="text-zinc-600 text-sm">$5K/month. Everything included. No surprises.</p>
                </div>

                <div className="rounded-lg border-2 border-zinc-800 bg-zinc-900/50 p-8 text-center">
                  <div className="w-12 h-12 rounded-md bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <TrendingDown className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="font-mono text-3xl font-black text-green-400 mb-2">Day 1</div>
                  <div className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-mono mb-3">ROI Timeline</div>
                  <p className="text-zinc-600 text-sm">Replace one coordinator and the subscription pays for itself immediately</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <FadeIn>
        <section className="py-16 border-y-2 border-zinc-800 bg-zinc-900/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-5xl mx-auto">
              <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-8">Results</p>
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-8">
                  <div className="text-sm text-cyan-400 font-mono uppercase tracking-wider mb-4">Federal Grants Program</div>
                  <div className="font-mono text-5xl font-black text-white tracking-tight mb-2">10 → 4</div>
                  <p className="text-zinc-600 text-sm mb-4">employees needed</p>
                  <p className="text-zinc-500 leading-relaxed">
                    350 projects per year. 10 people doing manual coordination.
                    We mapped every process, eliminated the unnecessary, automated the rest.
                    Same throughput. Less than half the headcount.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-8">
                  <div className="text-sm text-cyan-400 font-mono uppercase tracking-wider mb-4">Pfizer</div>
                  <div className="font-mono text-5xl font-black text-white tracking-tight mb-2">55+</div>
                  <p className="text-zinc-600 text-sm mb-4">active automations</p>
                  <p className="text-zinc-500 leading-relaxed">
                    Retained to automate construction and facilities operations workflows.
                    55+ automation projects running and growing. Ongoing engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/6 rounded-full blur-[160px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '16px 16px'
        }} />
        <div className="relative container mx-auto px-4 lg:px-6 text-center">
          <FadeIn>
            <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-6">Start Here</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
              Free operational audit.
            </h2>
            <p className="text-lg text-zinc-500 mb-4 max-w-2xl mx-auto">
              We map your workflows and show you exactly where you&apos;re
              spending money on work that shouldn&apos;t require people.
              You get the report whether you hire us or not.
            </p>
            <p className="text-sm text-zinc-600 mb-10 max-w-lg mx-auto">
              If the math works, we start. If it doesn&apos;t, you walk away
              with a roadmap you can execute on your own.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-cyan-500 text-white hover:bg-cyan-400 font-bold text-sm px-10 uppercase tracking-wider rounded-sm shadow-lg shadow-cyan-500/20">
                Request Your Free Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t-2 border-zinc-800 bg-[#0a0c10]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="block mb-4">
                <img
                  src="/assets/logos/weigh_anchor_logo_v2.png"
                  alt="Weigh Anchor"
                  className="h-20 w-auto mb-3"
                />
                <span className="font-bold text-white text-lg uppercase tracking-tight">Weigh Anchor</span>
              </Link>
            </div>
            <div>
              <h3 className="font-bold text-zinc-500 mb-4 text-[10px] uppercase tracking-[0.2em]">Contact</h3>
              <div className="space-y-2 text-sm text-zinc-600">
                <p>Bellevue, WA</p>
                <p>(407) 687-3792</p>
                <p>info@weighanchor.com</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-zinc-500 mb-4 text-[10px] uppercase tracking-[0.2em]">Company</h3>
              <div className="space-y-2">
                <Link href="/services2" className="block text-sm text-zinc-600 hover:text-white transition-colors">Construction Services</Link>
                <Link href="/copilot" className="block text-sm text-zinc-600 hover:text-white transition-colors">Automation Services</Link>
                <Link href="/about" className="block text-sm text-zinc-600 hover:text-white transition-colors">About</Link>
                <Link href="/contact" className="block text-sm text-zinc-600 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-zinc-500 mb-4 text-[10px] uppercase tracking-[0.2em]">Certifications</h3>
              <div className="space-y-2 text-sm text-zinc-600">
                <p>SDVOSB Certified</p>
                <p>Service-Disabled Veteran-Owned</p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-zinc-800 font-mono">&copy; 2026 Weigh Anchor. All rights reserved.</div>
            <div className="text-xs text-zinc-800 font-mono">Proudly Veteran Owned</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
