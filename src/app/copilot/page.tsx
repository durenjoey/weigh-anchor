"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bot,
  Terminal,
  Zap,
  ChevronRight,
  Search,
  Wrench,
  Headphones,
  DollarSign,
  TrendingDown,
  Users,
  BarChart3,
  Clock,
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

// --- Animated counter ---
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
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
    <span ref={ref}>{value}{suffix}</span>
  );
}

export default function CopilotPage() {
  return (
    <div className="min-h-screen bg-[#0d0f13] text-zinc-300">

      <DarkNav />

      {/* Hero — wake-up call */}
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
            <div className="flex items-center gap-4 mb-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm border border-zinc-700 bg-zinc-900/80 text-xs text-zinc-400 uppercase tracking-widest font-mono">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-sm shadow-cyan-400/50" />
                Construction Copilot
              </div>
              <span
                onClick={() => window.open("https://chatgpt.com/g/g-oSieVvg1P-construction-copilot", "_blank")}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-sm border border-cyan-500/20 bg-cyan-500/5 text-xs text-cyan-400 hover:bg-cyan-500/10 transition-colors cursor-pointer font-mono"
              >
                <Zap className="h-3 w-3" />
                #1 Rated Construction GPT
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight mb-6">
              You&apos;re paying six figures<br />
              <span className="text-cyan-400">for work that shouldn&apos;t require people.</span>
            </h1>

            <div className="flex gap-4 mt-2 mb-8">
              <div className="w-1 bg-gradient-to-b from-cyan-400 to-cyan-400/0 rounded-full flex-shrink-0" />
              <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
                Dispatchers. Coordinators. People manually copying data between systems,
                chasing down updates, and scheduling what a system should schedule for them.
                If your operation runs on headcount instead of systems, we fix that.
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

      {/* Proof strip — the hard numbers */}
      <section className="border-y-2 border-zinc-800 bg-zinc-900/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x-2 divide-zinc-800">
            {[
              { top: "350", bottom: "projects/year program", color: "text-cyan-400" },
              { top: "10 → 4", bottom: "employees after automation", color: "text-cyan-400" },
              { top: "55+", bottom: "automations at Pfizer", color: "text-cyan-400" },
              { top: "25K+", bottom: "GPT conversations", color: "text-cyan-400" },
            ].map((stat, i) => (
              <div key={i} className="py-8 px-6 text-center">
                <div className={`font-mono text-3xl lg:text-4xl font-black tracking-tight ${stat.color}`}>{stat.top}</div>
                <div className="text-[10px] text-zinc-600 mt-2 uppercase tracking-[0.2em] font-mono">{stat.bottom}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The math — ROI section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="mb-16">
                <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">The Math</p>
                <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-6">
                  The ROI is obvious.
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                {/* Cost of a dispatcher */}
                <div className="rounded-lg border-2 border-zinc-800 bg-zinc-900/50 p-8 text-center">
                  <div className="w-12 h-12 rounded-md bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-5 w-5 text-red-400" />
                  </div>
                  <div className="font-mono text-3xl font-black text-red-400 mb-2">$95K+</div>
                  <div className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-mono mb-3">Per Employee / Year</div>
                  <p className="text-zinc-600 text-sm">Salary, benefits, overhead, management time, mistakes, turnover</p>
                </div>

                {/* vs */}
                <div className="rounded-lg border-2 border-cyan-500/20 bg-cyan-500/[0.03] p-8 text-center">
                  <div className="w-12 h-12 rounded-md bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                    <Bot className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div className="font-mono text-3xl font-black text-cyan-400 mb-2">$60K</div>
                  <div className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-mono mb-3">Construction Copilot / Year</div>
                  <p className="text-zinc-600 text-sm">$5K/month. Everything included. No surprises.</p>
                </div>

                {/* Savings */}
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

      {/* How it works — the process */}
      <section className="py-24 border-y-2 border-zinc-800 bg-zinc-900/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="mb-16">
                <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">How It Works</p>
                <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight">
                  Three steps. No fluff.
                </h2>
              </div>
            </FadeIn>

            <div className="space-y-0">
              {[
                {
                  step: "01",
                  icon: Search,
                  title: "Free Operational Audit",
                  description: "We walk in, map your workflows, and identify where you're bleeding money on manual processes. You walk away with a report showing exactly how much you can save — whether you hire us or not.",
                  tag: "FREE",
                  tagColor: "text-green-400 border-green-500/20 bg-green-500/5",
                },
                {
                  step: "02",
                  icon: Wrench,
                  title: "Implementation",
                  description: "Process mapping, elimination of unnecessary steps, automation build-out. We question every step, throw away what's unnecessary, automate what remains, then optimize for speed. Typically 60-90 days for the first round.",
                  tag: "60-90 DAYS",
                  tagColor: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
                },
                {
                  step: "03",
                  icon: Headphones,
                  title: "$5K/Month — Everything Included",
                  description: "Maintenance, support, training, continuous improvement, exploration of new areas to automate. All requests handled one at a time until complete. On-call support when things break. No surprise invoices. No scope creep charges.",
                  tag: "ONGOING",
                  tagColor: "text-orange-400 border-orange-500/20 bg-orange-500/5",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className="relative flex gap-8 py-10">
                    {/* Connector line */}
                    {i < 2 && (
                      <div className="absolute left-[23px] top-[80px] bottom-0 w-px bg-zinc-800" />
                    )}

                    {/* Step number */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-md bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center font-mono text-sm font-bold text-cyan-400">
                        {item.step}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-white tracking-tight">{item.title}</h3>
                        <span className={`px-2 py-0.5 rounded-sm border text-[10px] uppercase tracking-widest font-mono ${item.tagColor}`}>
                          {item.tag}
                        </span>
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

      {/* Who this is for */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="mb-16">
                <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">Ideal Client</p>
                <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
                  Is this you?
                </h2>
                <p className="text-zinc-500 text-lg max-w-2xl">
                  If any of these sound familiar, we should talk.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "You process hundreds of work orders or projects per year",
                "You have dispatchers or coordinators doing repetitive scheduling",
                "Your team copies data between spreadsheets, emails, and systems",
                "You manage a JOC, small works, or high-volume program",
                "Your operation runs on people instead of systems",
                "Turnover keeps resetting your institutional knowledge",
                "You know you're overstaffed but don't know where to cut",
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

            <FadeIn delay={400}>
              <div className="mt-12 rounded-lg border border-zinc-800 bg-zinc-900/50 p-8">
                <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">Target Industries</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Municipal Utilities",
                    "Facility Maintenance",
                    "JOC / Small Works",
                    "Property Management",
                    "Construction Programs",
                    "Infrastructure Operations",
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

      {/* Case study — the proof */}
      <FadeIn>
        <section className="py-16 border-y-2 border-zinc-800 bg-zinc-900/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-5xl mx-auto">
              <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-8">Battle-Tested</p>
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-8">
                  <div className="text-sm text-cyan-400 font-mono uppercase tracking-wider mb-4">Case: Federal Program</div>
                  <div className="font-mono text-5xl font-black text-white tracking-tight mb-2">10 → 4</div>
                  <p className="text-zinc-600 text-sm mb-4">employees needed</p>
                  <p className="text-zinc-500 leading-relaxed">
                    A 350-project-per-year federal program was running on 10 people doing manual coordination.
                    We mapped every process, eliminated the unnecessary, automated the rest.
                    Same throughput. Less than half the headcount. Zero loss.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-8">
                  <div className="text-sm text-cyan-400 font-mono uppercase tracking-wider mb-4">Case: Pfizer</div>
                  <div className="font-mono text-5xl font-black text-white tracking-tight mb-2">55+</div>
                  <p className="text-zinc-600 text-sm mb-4">active automations</p>
                  <p className="text-zinc-500 leading-relaxed">
                    Pfizer retained us to automate construction and facilities operations workflows.
                    55+ automation projects running and growing. Ongoing engagement. The kind of client
                    that stays because the value is undeniable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CTA — the audit */}
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
              Free operational audit.<br />
              <span className="text-cyan-400">No strings attached.</span>
            </h2>
            <p className="text-lg text-zinc-500 mb-4 max-w-2xl mx-auto">
              We walk in, map your workflows, and show you exactly where you&apos;re
              spending money on work that shouldn&apos;t require people. You get the report
              whether you hire us or not.
            </p>
            <p className="text-sm text-zinc-600 mb-10 max-w-lg mx-auto">
              If the math works, we start. If it doesn&apos;t, you still walk away with a
              roadmap you can use on your own. No pitch. No pressure.
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
