"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  Bot,
} from "lucide-react";
import { VERIFIED_STATS } from "@/data/projects";
import Link from "next/link";
import Header from "@/components/Header";
import MapboxMap from "@/components/MapboxMap";

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

  // Cursor blink
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
        // Command done, start typing text
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
        // Text done, pause
        setPhase("pause");
      }
    }

    if (phase === "pause") {
      const timer = setTimeout(() => {
        setPhase("clearing");
      }, 2800);
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
      {/* Command line */}
      <div className="flex items-baseline gap-3">
        <span className="text-orange-500 text-lg select-none">&gt;</span>
        <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight">
          {displayCmd}
          {phase === "typing-cmd" && (
            <span className={`inline-block w-[3px] h-[0.85em] bg-orange-500 ml-1 align-baseline translate-y-[0.05em] ${showCursor ? "opacity-100" : "opacity-0"}`} />
          )}
        </h1>
      </div>
      {/* Subtitle line */}
      <div className="mt-3 min-h-[2rem]">
        {(phase === "typing-text" || phase === "pause") && (
          <p className="text-xl text-slate-500 tracking-wide">
            {displayText}
            {phase === "typing-text" && (
              <span className={`inline-block w-[2px] h-[1em] bg-slate-400 ml-0.5 align-baseline translate-y-[0.1em] ${showCursor ? "opacity-100" : "opacity-0"}`} />
            )}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Home2() {
  const [mounted, setMounted] = useState(false);
  const [projects, setProjects] = useState(0);
  const [states, setStates] = useState(0);

  useEffect(() => {
    setMounted(true);
    const pTarget = VERIFIED_STATS.activeProjects;
    const sTarget = VERIFIED_STATS.statesAndTerritories;
    const duration = 2000;
    const steps = 60;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const p = step / steps;
      setProjects(Math.floor(pTarget * p));
      setStates(Math.floor(sTarget * p));
      if (step === steps) {
        clearInterval(timer);
        setProjects(pTarget);
        setStates(sTarget);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative bg-white">
        <div className="container mx-auto px-4 lg:px-6 pt-20 pb-16">
          <div className="max-w-5xl">

            {/* Terminal animation */}
            <div className="min-h-[140px] lg:min-h-[160px]">
              <TerminalHero />
            </div>

            {/* Static descriptor */}
            <p className="mt-8 text-lg text-slate-600 max-w-2xl leading-relaxed">
              Veteran-owned firm managing construction projects and automating
              operations for government agencies and Fortune 500 companies.
            </p>

            {/* Stats row */}
            <div className="mt-10 flex flex-wrap gap-10">
              <div>
                <div className="text-3xl font-bold text-slate-900 font-mono">{mounted ? projects : 0}+</div>
                <div className="text-sm text-slate-500 mt-1">Active Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 font-mono">{mounted ? states : 0}</div>
                <div className="text-sm text-slate-500 mt-1">States & Territories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 font-mono">SDVOSB</div>
                <div className="text-sm text-slate-500 mt-1">Veteran-Owned</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange hover:bg-orange-dark text-white">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Two service lines */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">

              {/* Construction Services */}
              <Link href="/services" className="group">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 h-full hover:shadow-lg hover:border-orange-200 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6">
                    <Building2 className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    Construction Services
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Construction management, project controls, PMO, and owner&apos;s
                    representation — from remote tribal communities to Fortune 500 campuses.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      Construction Management
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      Project Management & Controls
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      Program Management Office (PMO)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      Owner&apos;s Representation
                    </li>
                  </ul>
                  <span className="inline-flex items-center text-sm font-semibold text-orange-600 group-hover:text-orange-700 transition-colors">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>

              {/* Construction Copilot */}
              <Link href="/copilot" className="group">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 h-full hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6">
                    <Bot className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    Construction Copilot
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Business process automation for construction and operations teams
                    running high-volume workflows with too many people and too little technology.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      Operational Audit & Workflow Mapping
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      Automation Implementation
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      Ongoing Support & Training
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      $5K/month — everything included
                    </li>
                  </ul>
                  <span className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Proof — the map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Where We Work</h2>
            <p className="text-slate-500 mt-1">Tribal nations, federal agencies, Fortune 500 companies, and local businesses across {mounted ? states : '—'} states and territories.</p>
          </div>
          <div style={{ height: '500px', width: '100%', position: 'relative' }}>
            <MapboxMap />
          </div>
        </div>
      </section>

      {/* Proof points */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2 font-mono">10 → 4</div>
                <div className="text-slate-400 text-sm">Employees needed after automating a 350-project/year program</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2 font-mono">55+</div>
                <div className="text-slate-400 text-sm">Active automations running at Pfizer</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2 font-mono">20+ yrs</div>
                <div className="text-slate-400 text-sm">Combined construction and federal program experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-4 gap-8 mb-8">
            <div className="flex items-center justify-center">
              <Link href="/">
                <img
                  src="/assets/logos/WeighAnchor_Logowithwords_Transparent_Alt_2022_03_06.png.png"
                  alt="Weigh Anchor"
                  className="h-32 w-auto brightness-0 invert hover:scale-105 transition-transform cursor-pointer"
                />
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <p>Bellevue, WA</p>
                <p>(407) 687-3792</p>
                <p>info@weighanchor.com</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Certifications</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <p>SDVOSB Certified</p>
                <p>Service-Disabled Veteran-Owned</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/services" className="block text-sm text-slate-400 hover:text-white">
                  Construction Services
                </Link>
                <Link href="/copilot" className="block text-sm text-slate-400 hover:text-white">
                  Construction Copilot
                </Link>
                <Link href="/about" className="block text-sm text-slate-400 hover:text-white">
                  About Us
                </Link>
                <Link href="/contact" className="block text-sm text-slate-400 hover:text-white">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-400">
              © 2026 Weigh Anchor. All rights reserved.
            </div>
            <div className="text-sm text-slate-400">
              Proudly Veteran Owned • SDVOSB Certified
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
