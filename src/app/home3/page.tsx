"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  Bot,
  Terminal,
  Zap,
  Shield,
  ChevronRight,
} from "lucide-react";
import { VERIFIED_STATS } from "@/data/projects";
import Link from "next/link";
import MapboxMap from "@/components/MapboxMap";

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
        <span className="text-[#F4B223] text-lg select-none">$</span>
        <h1 className="text-5xl lg:text-7xl font-bold text-[#F4B223] tracking-tight">
          {displayCmd}
          {phase === "typing-cmd" && (
            <span className={`inline-block w-[3px] h-[0.85em] bg-[#F4B223] ml-1 align-baseline translate-y-[0.05em] ${showCursor ? "opacity-100" : "opacity-0"}`} />
          )}
        </h1>
      </div>
      <div className="mt-3 min-h-[2rem]">
        {(phase === "typing-text" || phase === "pause") && (
          <p className="text-xl text-slate-400 tracking-wide">
            {displayText}
            {phase === "typing-text" && (
              <span className={`inline-block w-[2px] h-[1em] bg-slate-500 ml-0.5 align-baseline translate-y-[0.1em] ${showCursor ? "opacity-100" : "opacity-0"}`} />
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
    <div ref={ref} className="font-mono text-4xl lg:text-5xl font-bold">
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

export default function Home3() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* Nav — minimal dark */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/home3" className="flex items-center gap-3 group">
              <img
                src="/assets/logos/WeighAnchor_Logoonly_Transparent_2023_08_16.png"
                alt="Weigh Anchor"
                className="h-8 w-auto brightness-0 invert group-hover:scale-105 transition-transform"
              />
              <span className="font-semibold text-white text-lg">Weigh Anchor</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {[
                { href: "/services", label: "Services" },
                { href: "/copilot", label: "Copilot" },
                { href: "/about", label: "About" },
              ].map(item => (
                <Link key={item.href} href={item.href}>
                  <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-white/5">
                    {item.label}
                  </Button>
                </Link>
              ))}
              <Link href="/contact">
                <Button size="sm" className="ml-4 bg-white text-black hover:bg-slate-200 font-medium">
                  Contact
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[40%] -left-[20%] w-[60%] h-[80%] bg-[#F4B223]/10 rounded-full blur-[120px]" />
          <div className="absolute -bottom-[20%] -right-[10%] w-[40%] h-[60%] bg-blue-500/8 rounded-full blur-[120px]" />
        </div>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        <div className="relative container mx-auto px-4 lg:px-6 pt-24 pb-20">
          <div className="max-w-5xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-slate-400 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#F4B223] animate-pulse" />
              SDVOSB Certified • Veteran-Owned
            </div>

            {/* Terminal */}
            <div className="min-h-[140px] lg:min-h-[160px]">
              <TerminalHero />
            </div>

            {/* Descriptor */}
            <p className="mt-8 text-lg text-slate-500 max-w-2xl leading-relaxed">
              We manage construction projects and automate operations for
              government agencies and Fortune 500 companies.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-black hover:bg-slate-200 font-medium">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/copilot">
                <Button size="lg" variant="outline" className="border-white/10 text-slate-300 hover:bg-white/5 hover:text-white">
                  <Terminal className="mr-2 h-4 w-4" />
                  Construction Copilot
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats dashboard strip */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
            {[
              { value: VERIFIED_STATS.activeProjects, suffix: "+", label: "Active Projects" },
              { value: VERIFIED_STATS.statesAndTerritories, suffix: "", label: "States & Territories" },
              { value: 55, suffix: "+", label: "Automations at Pfizer" },
              { value: "10→4", suffix: "", label: "Employees after automation" },
            ].map((stat, i) => (
              <div key={i} className="py-10 px-6 text-center">
                <div className="text-[#F4B223]">
                  {typeof stat.value === "number" ? (
                    <Counter target={stat.value} suffix={stat.suffix} />
                  ) : (
                    <div className="font-mono text-4xl lg:text-5xl font-bold">{stat.value}</div>
                  )}
                </div>
                <div className="text-sm text-slate-500 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service lines */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Two ways we solve your problems</h2>
                <p className="text-slate-500 text-lg">Pick one. Or both.</p>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Construction */}
              <FadeIn delay={100}>
                <Link href="/services" className="group block h-full">
                  <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-orange-500/30 hover:bg-orange-500/[0.03] transition-all duration-500 overflow-hidden">
                    {/* Glow on hover */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
                        <Building2 className="h-6 w-6 text-orange-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">Construction Services</h3>
                      <p className="text-slate-400 leading-relaxed mb-6">
                        Construction management, project controls, PMO, and owner&apos;s
                        representation — from remote tribal communities to Fortune 500 campuses.
                      </p>
                      <div className="space-y-3 mb-8">
                        {["Construction Management", "Project Management & Controls", "Program Management Office", "Owner's Representation"].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
                            <ChevronRight className="h-3 w-3 text-orange-500" />
                            {item}
                          </div>
                        ))}
                      </div>
                      <span className="inline-flex items-center text-sm font-medium text-orange-400 group-hover:text-orange-300 transition-colors">
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>

              {/* Copilot */}
              <FadeIn delay={200}>
                <Link href="/copilot" className="group block h-full">
                  <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-blue-500/30 hover:bg-blue-500/[0.03] transition-all duration-500 overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                        <Bot className="h-6 w-6 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">Construction Copilot</h3>
                      <span
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open("https://chatgpt.com/g/g-oSieVvg1P-construction-copilot", "_blank"); }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs text-blue-400 mb-4 hover:bg-blue-500/10 transition-colors cursor-pointer"
                      >
                        <Zap className="h-3 w-3" />
                        #1 Rated Construction GPT • 25K+ conversations
                        <ArrowRight className="h-3 w-3" />
                      </span>
                      <p className="text-slate-400 leading-relaxed mb-6">
                        Business process automation for teams running high-volume workflows
                        with too many people and too little technology.
                      </p>
                      <div className="space-y-3 mb-8">
                        {["Operational Audit & Workflow Mapping", "Automation Implementation", "Ongoing Support & Training", "$5K/month — everything included"].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
                            <ChevronRight className="h-3 w-3 text-blue-500" />
                            {item}
                          </div>
                        ))}
                      </div>
                      <span className="inline-flex items-center text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <FadeIn>
        <section className="py-12 border-y border-white/5">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-slate-600 text-sm font-medium">
              <span>Organizations we&apos;ve supported</span>
              <span className="text-slate-400">Pfizer</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">Department of Justice</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">Department of Veterans Affairs</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">40+ Tribal Nations</span>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Map */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <FadeIn>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white">Where We Work</h2>
              <p className="text-slate-500 mt-1">
                Government agencies, tribal nations, Fortune 500 companies, and local businesses
                across {VERIFIED_STATS.statesAndTerritories} states and territories.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="rounded-2xl border border-white/10 overflow-hidden" style={{ height: '500px', width: '100%', position: 'relative' }}>
              <MapboxMap />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#F4B223]/10 rounded-full blur-[120px]" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to talk?
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
              Whether you need boots on the ground or systems that replace them —
              let&apos;s figure it out.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-slate-200 font-medium text-base px-8">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/home3" className="flex items-center gap-2 mb-4">
                <img
                  src="/assets/logos/WeighAnchor_Logoonly_Transparent_2023_08_16.png"
                  alt="Weigh Anchor"
                  className="h-8 w-auto brightness-0 invert"
                />
                <span className="font-semibold text-white">Weigh Anchor</span>
              </Link>
              <p className="text-sm text-slate-600">Hard problems. Done right.</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-400 mb-4 text-sm">Contact</h3>
              <div className="space-y-2 text-sm text-slate-600">
                <p>Bellevue, WA</p>
                <p>(407) 687-3792</p>
                <p>info@weighanchor.com</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-slate-400 mb-4 text-sm">Company</h3>
              <div className="space-y-2">
                <Link href="/services" className="block text-sm text-slate-600 hover:text-white transition-colors">Construction Services</Link>
                <Link href="/copilot" className="block text-sm text-slate-600 hover:text-white transition-colors">Construction Copilot</Link>
                <Link href="/about" className="block text-sm text-slate-600 hover:text-white transition-colors">About</Link>
                <Link href="/contact" className="block text-sm text-slate-600 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-slate-400 mb-4 text-sm">Certifications</h3>
              <div className="space-y-2 text-sm text-slate-600">
                <p>SDVOSB Certified</p>
                <p>Service-Disabled Veteran-Owned</p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-700">© 2026 Weigh Anchor. All rights reserved.</div>
            <div className="text-xs text-slate-700">Proudly Veteran Owned</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
