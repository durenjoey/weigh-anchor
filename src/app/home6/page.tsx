"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  Bot,
  Terminal,
  Zap,
  ChevronRight,
  HardHat,
} from "lucide-react";
import { VERIFIED_STATS } from "@/data/projects";
import Link from "next/link";
import MapboxMap from "@/components/MapboxMap";
import DarkNav from "@/components/DarkNav";

// Palette: High Tech x Heavy Industrial
// Background: #0d0f13 (dark steel)
// Primary: #f97316 (safety orange — welding sparks, warning lights)
// Secondary: #22d3ee (industrial cyan — HUD, monitoring, tech overlays)
// Construction card: #f97316 orange
// Copilot card: #22d3ee cyan
// Borders: harsh, angular — rounded-lg not rounded-2xl
// Text: #d4d4d8 (zinc-300), #71717a (zinc-500)
// Surface: zinc tones, not slate — colder, more metallic

// --- Terminal Typewriter ---
const LINES = [
  { command: "MANAGE", text: "Construction projects across 17 states and territories" },
  { command: "AUTOMATE", text: "Operations running on headcount instead of systems" },
  { command: "DELIVER", text: "Hard problems. Done right." },
];

function TerminalHero() {
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
    const line = LINES[lineIndex];

    if (phase === "typing-cmd") {
      if (charIndex < line.command.length) {
        const timer = setTimeout(() => {
          setDisplayCmd(line.command.slice(0, charIndex + 1));
          setCharIndex(c => c + 1);
        }, 80);
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
        }, 25);
        return () => clearTimeout(timer);
      } else {
        setPhase("pause");
      }
    }

    if (phase === "pause") {
      const timer = setTimeout(() => setPhase("clearing"), 2800);
      return () => clearTimeout(timer);
    }

    if (phase === "clearing") {
      setDisplayCmd("");
      setDisplayText("");
      setCharIndex(0);
      setLineIndex((lineIndex + 1) % LINES.length);
      setPhase("typing-cmd");
    }
  }, [phase, charIndex, lineIndex]);

  return (
    <div className="font-mono">
      <div className="flex items-baseline gap-3">
        <span className="text-orange-500 text-lg select-none font-bold">&gt;_</span>
        <h1 className="text-5xl lg:text-7xl font-black text-orange-500 tracking-tighter uppercase">
          {displayCmd}
          {phase === "typing-cmd" && (
            <span className={`inline-block w-[4px] h-[0.85em] bg-orange-500 ml-1 align-baseline translate-y-[0.05em] ${showCursor ? "opacity-100" : "opacity-0"}`} />
          )}
        </h1>
      </div>
      <div className="mt-3 min-h-[2rem]">
        {(phase === "typing-text" || phase === "pause") && (
          <p className="text-xl text-zinc-500 tracking-wide font-mono">
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

// --- Animated counter ---
function Counter({ target, suffix = "" }: { target: number | string; suffix?: string }) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof target !== "number") return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started, target]);

  useEffect(() => {
    if (!started || typeof target !== "number") return;
    const duration = 1500;
    const steps = 40;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setValue(Math.floor(target * (step / steps)));
      if (step === steps) { clearInterval(timer); setValue(target); }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div ref={ref} className="font-mono text-4xl lg:text-5xl font-black tracking-tight">
      {typeof target === "number" ? value : target}{suffix}
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

export default function Home6() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="min-h-screen bg-[#0d0f13] text-zinc-300">

      <DarkNav logo="/assets/logos/weigh_anchor_logo_v2.png" logoHeight="h-14" />

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Industrial ambient — orange heat glow top, cyan tech glow bottom */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[60%] bg-orange-600/8 rounded-full blur-[160px]" />
          <div className="absolute -bottom-[30%] -right-[15%] w-[45%] h-[50%] bg-cyan-500/5 rounded-full blur-[160px]" />
        </div>
        {/* Engineering grid — heavier, more industrial */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
        {/* Subtle cross-hatching overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />

        <div className="relative container mx-auto px-4 lg:px-6 pt-28 pb-24">
          <div className="max-w-5xl">
            {/* Badge — industrial status indicator */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm border border-zinc-700 bg-zinc-900/80 text-xs text-zinc-400 mb-10 uppercase tracking-widest font-mono">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-sm shadow-orange-500/50" />
              SDVOSB Certified &bull; Veteran-Owned
            </div>

            {/* Terminal */}
            <div className="min-h-[140px] lg:min-h-[160px]">
              <TerminalHero />
            </div>

            {/* Descriptor — with left accent bar */}
            <div className="mt-10 flex gap-4">
              <div className="w-1 bg-gradient-to-b from-orange-500 to-orange-500/0 rounded-full flex-shrink-0" />
              <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
                We manage construction projects and automate operations for
                government agencies and Fortune 500 companies.
              </p>
            </div>

            {/* CTAs — angular, industrial */}
            <div className="mt-12 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-600 text-white hover:bg-orange-500 font-bold uppercase tracking-wider text-sm rounded-sm shadow-lg shadow-orange-600/20">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/copilot">
                <Button size="lg" variant="outline" className="border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-white hover:border-zinc-600 rounded-sm uppercase tracking-wider text-sm font-medium">
                  <Terminal className="mr-2 h-4 w-4" />
                  Construction Copilot
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats — industrial control panel */}
      <section className="border-y-2 border-zinc-800 bg-zinc-900/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x-2 divide-zinc-800">
            {[
              { value: VERIFIED_STATS.activeProjects, suffix: "+", label: "ACTIVE PROJECTS" },
              { value: VERIFIED_STATS.statesAndTerritories, suffix: "", label: "STATES & TERRITORIES" },
              { value: 55, suffix: "+", label: "AUTOMATIONS AT PFIZER" },
              { value: "10→4", suffix: "", label: "HEADCOUNT AFTER AUTOMATION" },
            ].map((stat, i) => (
              <div key={i} className="py-10 px-6 text-center">
                <div className="text-orange-500">
                  {typeof stat.value === "number" ? (
                    <Counter target={stat.value} suffix={stat.suffix} />
                  ) : (
                    <div className="font-mono text-4xl lg:text-5xl font-black tracking-tight">{stat.value}</div>
                  )}
                </div>
                <div className="text-[10px] text-zinc-600 mt-3 uppercase tracking-[0.2em] font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service lines — industrial panels */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">Service Lines</p>
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 tracking-tight">Two ways we solve your problems</h2>
                <p className="text-zinc-600 text-lg">Pick one. Or both.</p>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Construction — orange industrial panel */}
              <FadeIn delay={100}>
                <Link href="/services" className="group block h-full">
                  <div className="relative h-full rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 hover:border-orange-500/40 transition-all duration-500 overflow-hidden">
                    {/* Top accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-600 via-orange-500 to-transparent" />
                    {/* Glow on hover */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/8 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      <div className="w-12 h-12 rounded-md bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
                        <Building2 className="h-6 w-6 text-orange-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Construction Services</h3>
                      <p className="text-zinc-500 leading-relaxed mb-6">
                        Construction management, project controls, PMO, and owner&apos;s
                        representation — from remote tribal communities to Fortune 500 campuses.
                      </p>
                      <div className="space-y-3 mb-8">
                        {["Construction Management", "Project Management & Controls", "Program Management Office", "Owner's Representation"].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm text-zinc-500">
                            <div className="w-1 h-1 bg-orange-500 rounded-full" />
                            {item}
                          </div>
                        ))}
                      </div>
                      <span className="inline-flex items-center text-sm font-bold text-orange-500 group-hover:text-orange-400 transition-colors uppercase tracking-wider">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>

              {/* Copilot — cyan tech panel */}
              <FadeIn delay={200}>
                <Link href="/copilot" className="group block h-full">
                  <div className="relative h-full rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 hover:border-cyan-500/40 transition-all duration-500 overflow-hidden">
                    {/* Top accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 via-cyan-400 to-transparent" />
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/8 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      <div className="w-12 h-12 rounded-md bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                        <Bot className="h-6 w-6 text-cyan-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Construction Copilot</h3>
                      <span
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open("https://chatgpt.com/g/g-oSieVvg1P-construction-copilot", "_blank"); }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-cyan-500/20 bg-cyan-500/5 text-xs text-cyan-400 mb-4 hover:bg-cyan-500/10 transition-colors cursor-pointer font-mono"
                      >
                        <Zap className="h-3 w-3" />
                        #1 Rated Construction GPT &bull; 25K+ conversations
                        <ArrowRight className="h-3 w-3" />
                      </span>
                      <p className="text-zinc-500 leading-relaxed mb-6">
                        Business process automation for teams running high-volume workflows
                        with too many people and too little technology.
                      </p>
                      <div className="space-y-3 mb-8">
                        {["Operational Audit & Workflow Mapping", "Automation Implementation", "Ongoing Support & Training", "$5K/month — everything included"].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm text-zinc-500">
                            <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                            {item}
                          </div>
                        ))}
                      </div>
                      <span className="inline-flex items-center text-sm font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors uppercase tracking-wider">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof — industrial ticker style */}
      <FadeIn>
        <section className="py-10 border-y-2 border-zinc-800 bg-zinc-900/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-mono">
              <span className="text-[10px] text-zinc-600 uppercase tracking-[0.2em]">Organizations we&apos;ve supported</span>
              <span className="text-zinc-400 font-medium">Pfizer</span>
              <span className="text-zinc-700">|</span>
              <span className="text-zinc-400 font-medium">Department of Justice</span>
              <span className="text-zinc-700">|</span>
              <span className="text-zinc-400 font-medium">Department of Veterans Affairs</span>
              <span className="text-zinc-700">|</span>
              <span className="text-zinc-400 font-medium">40+ Tribal Nations</span>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Map */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <FadeIn>
            <div className="mb-8">
              <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-2">Operations Map</p>
              <h2 className="text-2xl font-bold text-white tracking-tight">Where We Work</h2>
              <p className="text-zinc-600 mt-1">
                Government agencies, tribal nations, Fortune 500 companies, and local businesses
                across {VERIFIED_STATS.statesAndTerritories} states and territories.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="rounded-lg border-2 border-zinc-800 overflow-hidden" style={{ height: '500px', width: '100%', position: 'relative' }}>
              <MapboxMap />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA — industrial slab */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/6 rounded-full blur-[160px]" />
        </div>
        {/* Cross-hatch in CTA */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '16px 16px'
        }} />
        <div className="relative container mx-auto px-4 lg:px-6 text-center">
          <FadeIn>
            <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-6">Get Started</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
              Ready to talk?
            </h2>
            <p className="text-lg text-zinc-500 mb-10 max-w-xl mx-auto">
              Whether you need boots on the ground or systems that replace them —
              let&apos;s figure it out.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-orange-600 text-white hover:bg-orange-500 font-bold text-sm px-10 uppercase tracking-wider rounded-sm shadow-lg shadow-orange-600/20">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Footer — heavy industrial base */}
      <footer className="py-12 border-t-2 border-zinc-800 bg-[#0a0c10]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/home6" className="flex items-center gap-2 mb-4">
                <img
                  src="/assets/logos/weigh_anchor_logo_v2.png"
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
                <Link href="/services" className="block text-sm text-zinc-600 hover:text-white transition-colors">Construction Services</Link>
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
