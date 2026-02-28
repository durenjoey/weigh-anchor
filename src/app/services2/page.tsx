"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ClipboardList,
  BarChart3,
  Users,
  HardHat,
} from "lucide-react";
import { VERIFIED_STATS } from "@/data/projects";
import Link from "next/link";
import DarkNav from "@/components/DarkNav";

// --- Service Typewriter ---
const SERVICE_LINES = [
  {
    command: "PROJECT MANAGEMENT",
    text: "Full lifecycle oversight from procurement through closeout. One point of accountability for your entire project.",
  },
  {
    command: "PROJECT CONTROLS",
    text: "Budget tracking, schedule forecasting, and change order management. You always know where things stand.",
  },
  {
    command: "PROGRAM MANAGEMENT",
    text: "Standardized reporting, resource allocation, and risk management across your entire portfolio.",
  },
  {
    command: "FIELD OPERATIONS",
    text: "Site inspections, quality assurance, and contractor oversight. Boots on the ground, eyes on every detail.",
  },
];

function ServiceTypewriter() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<"typing-cmd" | "typing-text" | "pause" | "clearing">("typing-cmd");
  const [displayCmd, setDisplayCmd] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor(c => !c), 530);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    const line = SERVICE_LINES[lineIndex];

    if (phase === "typing-cmd") {
      if (charIndex < line.command.length) {
        const timer = setTimeout(() => {
          setDisplayCmd(line.command.slice(0, charIndex + 1));
          setCharIndex(c => c + 1);
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setCharIndex(0);
        setPhase("typing-text");
      }
    }

    if (phase === "typing-text") {
      if (charIndex < line.text.length) {
        const timer = setTimeout(() => {
          setDisplayText(line.text.slice(0, charIndex + 1));
          setCharIndex(c => c + 1);
        }, 18);
        return () => clearTimeout(timer);
      } else {
        setPhase("pause");
      }
    }

    if (phase === "pause") {
      const timer = setTimeout(() => setPhase("clearing"), 3500);
      return () => clearTimeout(timer);
    }

    if (phase === "clearing") {
      setDisplayCmd("");
      setDisplayText("");
      setCharIndex(0);
      setLineIndex((lineIndex + 1) % SERVICE_LINES.length);
      setPhase("typing-cmd");
    }
  }, [phase, charIndex, lineIndex]);

  return (
    <div className="font-mono">
      <div className="flex items-baseline gap-3">
        <span className="text-orange-500 text-lg select-none font-bold">&gt;_</span>
        <h1 className="text-4xl lg:text-6xl font-black text-orange-500 tracking-tighter uppercase">
          {displayCmd}
          {phase === "typing-cmd" && (
            <span className={`inline-block w-[4px] h-[0.85em] bg-orange-500 ml-1 align-baseline translate-y-[0.05em] ${showCursor ? "opacity-100" : "opacity-0"}`} />
          )}
        </h1>
      </div>
      <div className="mt-4 min-h-[3rem]">
        {(phase === "typing-text" || phase === "pause") && (
          <p className="text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-2xl">
            {displayText}
            {phase === "typing-text" && (
              <span className={`inline-block w-[2px] h-[1em] bg-zinc-600 ml-0.5 align-baseline translate-y-[0.1em] ${showCursor ? "opacity-100" : "opacity-0"}`} />
            )}
          </p>
        )}
      </div>
    </div>
  );
}

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

const SERVICES = [
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "We oversee your project from procurement through closeout. You get a single point of accountability for scope, schedule, and budget. When something shifts, you hear it from us before it becomes a problem.",
  },
  {
    icon: BarChart3,
    title: "Project Controls",
    description: "Cost tracking, schedule forecasting, change order management. You get real numbers. If a project is trending over budget, you'll know why and what the options are.",
  },
  {
    icon: Users,
    title: "Program Management",
    description: "Standardized reporting, resource allocation, and risk management across your entire portfolio. For organizations running dozens or hundreds of projects simultaneously across multiple locations.",
  },
  {
    icon: HardHat,
    title: "Field Operations",
    description: "Site inspections, quality assurance, contractor oversight. We walk the site, verify the work, and flag issues before they become change orders. Your eyes and ears in the field.",
  },
];

const PROOF_POINTS = [
  { stat: `${VERIFIED_STATS.activeProjects}+`, label: "Active Projects" },
  { stat: `${VERIFIED_STATS.statesAndTerritories}`, label: "States & Territories" },
  { stat: "40+", label: "Tribal Nations Served" },
  { stat: "20+", label: "Years Experience" },
];

export default function Services2Page() {
  return (
    <div className="min-h-screen bg-[#0d0f13] text-zinc-300">

      <DarkNav />

      {/* Hero — typewriter cycling through services */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[60%] bg-orange-600/6 rounded-full blur-[160px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />

        <div className="relative container mx-auto px-4 lg:px-6 pt-24 pb-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm border border-zinc-700 bg-zinc-900/80 text-xs text-zinc-400 mb-10 uppercase tracking-widest font-mono">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-sm shadow-orange-500/50" />
              Owner&apos;s Representation Across Every Phase
            </div>

            {/* Typewriter */}
            <div className="min-h-[180px] lg:min-h-[200px]">
              <ServiceTypewriter />
            </div>

            {/* Static descriptor */}
            <div className="flex gap-4 mt-6 mb-8">
              <div className="w-1 bg-gradient-to-b from-orange-500 to-orange-500/0 rounded-full flex-shrink-0" />
              <p className="text-zinc-600 max-w-xl leading-relaxed">
                We represent the owner across every phase of the project.
                {' '}{VERIFIED_STATS.activeProjects}+ active projects across {VERIFIED_STATS.statesAndTerritories} states and territories.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-600 text-white hover:bg-orange-500 font-bold uppercase tracking-wider text-sm rounded-sm shadow-lg shadow-orange-600/20">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/copilot">
                <Button size="lg" variant="outline" className="border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-white hover:border-zinc-600 rounded-sm uppercase tracking-wider text-sm font-medium">
                  See Construction Copilot
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <section className="border-y-2 border-zinc-800 bg-zinc-900/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x-2 divide-zinc-800">
            {PROOF_POINTS.map((item, i) => (
              <div key={i} className="py-8 px-6 text-center">
                <div className="font-mono text-3xl lg:text-4xl font-black text-orange-500 tracking-tight">{item.stat}</div>
                <div className="text-[10px] text-zinc-600 mt-2 uppercase tracking-[0.2em] font-mono">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — stacked panels */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="mb-16">
                <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">What We Do</p>
                <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight">Core Services</h2>
              </div>
            </FadeIn>

            <div className="space-y-4">
              {SERVICES.map((service, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <div className="group relative rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 hover:border-orange-500/30 transition-all duration-500 overflow-hidden">
                    <div className="absolute top-0 left-0 w-24 h-[2px] bg-gradient-to-r from-orange-600 to-transparent" />

                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 rounded-md bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <service.icon className="h-5 w-5 text-orange-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>
                        <p className="text-zinc-500 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Track record */}
      <FadeIn>
        <section className="py-16 border-y-2 border-zinc-800 bg-zinc-900/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">Track Record</p>
                  <h2 className="text-2xl font-bold text-white tracking-tight mb-6">Where we&apos;ve delivered.</h2>
                  <p className="text-zinc-500 leading-relaxed mb-6">
                    Federal agencies, Fortune 500 companies, and tribal nations across the country.
                    Every engagement runs on our proprietary reporting and risk detection systems —
                    you get consistent visibility into every project.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["SDVOSB", "MBE", "Veteran-Owned"].map((cert, i) => (
                      <div key={i} className="px-3 py-1.5 rounded-sm border border-zinc-700 bg-zinc-900/80 text-xs text-zinc-400 uppercase tracking-widest font-mono">
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">Organizations We&apos;ve Supported</p>
                  <div className="space-y-4">
                    {[
                      { name: "Pfizer", detail: "Fortune 500 pharmaceutical — construction & automation" },
                      { name: "Department of Justice", detail: "Federal construction program management" },
                      { name: "Department of Veterans Affairs", detail: "Federal facility projects" },
                      { name: "40+ Tribal Nations", detail: "Remote community construction across 17 states" },
                    ].map((client, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1 h-1 bg-orange-500 rounded-full mt-2.5 flex-shrink-0" />
                        <div>
                          <span className="text-zinc-300 font-medium">{client.name}</span>
                          <span className="text-zinc-600 text-sm ml-2">— {client.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* What you get */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="mb-16">
                <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">Why Us</p>
                <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight">
                  What you get.
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "One point of contact",
                  text: "You get a dedicated project lead who owns the outcome. Not a rotation of junior staff. Not a shared resource across 15 accounts.",
                },
                {
                  title: "Veteran-led operations",
                  text: "Founded by a U.S. Air Force Civil Engineering veteran. The company runs on structure, accountability, and clear communication — up and down the chain.",
                },
                {
                  title: "Technology built in",
                  text: "Systems for reporting, cost tracking, and risk detection. Dashboards, automated alerts. You see what we see.",
                },
                {
                  title: "We deploy anywhere",
                  text: "17 states and territories — including rural Alaska, Pacific islands, and tribal communities with complex logistics. We handle mobilization, not just management.",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className="relative rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 overflow-hidden">
                    <div className="absolute top-0 left-0 w-16 h-[2px] bg-gradient-to-r from-orange-600 to-transparent" />
                    <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-zinc-500 leading-relaxed text-sm">{item.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/6 rounded-full blur-[160px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '16px 16px'
        }} />
        <div className="relative container mx-auto px-4 lg:px-6 text-center">
          <FadeIn>
            <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-6">Get Started</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
              Let&apos;s talk about your project.
            </h2>
            <p className="text-lg text-zinc-500 mb-10 max-w-xl mx-auto">
              Tell us the scope, the location, and the timeline. We&apos;ll tell you how we&apos;d staff it.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-orange-600 text-white hover:bg-orange-500 font-bold text-sm px-10 uppercase tracking-wider rounded-sm shadow-lg shadow-orange-600/20">
                Start a Conversation
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
              <Link href="/home4" className="flex items-center gap-2 mb-4">
                <img
                  src="/assets/logos/weigh_anchor_new_logo.png"
                  alt="Weigh Anchor"
                  className="h-8 w-auto"
                />
                <span className="font-bold text-white uppercase tracking-tight">Weigh Anchor</span>
              </Link>
              <p className="text-sm text-zinc-700 font-mono">Hard problems. Done right.</p>
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
                <Link href="/copilot" className="block text-sm text-zinc-600 hover:text-white transition-colors">Construction Copilot</Link>
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
