"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
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
              Your competitors are automating.<br />
              <span className="text-cyan-400">We&apos;ll help you catch up.</span>
            </h1>

            <div className="flex gap-4 mt-2 mb-8">
              <div className="w-1 bg-gradient-to-b from-cyan-400 to-cyan-400/0 rounded-full flex-shrink-0" />
              <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
                We built our automation practice internally, then Pfizer hired us to do the same for them.
                Now we bring AI implementation, workflow automation, and digitization to construction organizations,
                government agencies, and tribal nations. We build it, deploy it, and train your team on it.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-cyan-500 text-white hover:bg-cyan-400 font-bold uppercase tracking-wider text-sm rounded-sm shadow-lg shadow-cyan-500/20">
                  Get a Free Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-white hover:border-zinc-600 rounded-sm uppercase tracking-wider text-sm font-medium">
                  See Construction Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="py-24 border-y-2 border-zinc-800 bg-zinc-900/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="mb-16">
                <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">The Reality</p>
                <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
                  Most companies know they need to modernize. They just don&apos;t know where to start.
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "AI is everywhere — but what does it mean for you?",
                  text: "Every vendor is pitching AI. Every conference is talking about it. But nobody is explaining what it actually looks like inside a construction company, a tribal organization, or a government agency. We can — because we've done it.",
                },
                {
                  title: "Your team is the system",
                  text: "Work orders tracked in spreadsheets. Project updates passed through email chains. Scheduling done by a coordinator who keeps it all in their head. When that person leaves, the knowledge goes with them.",
                },
                {
                  title: "Software hasn't helped",
                  text: "You've probably tried off-the-shelf tools that promised to fix everything. Most of them created more work — new logins, new data entry, new things to maintain. The problem isn't software. It's that nobody mapped your actual operations first.",
                },
                {
                  title: "You're not behind — you just haven't had the right partner",
                  text: "The gap between where you are and where you could be isn't as big as it feels. Most of the value comes from automating the 20% of work that eats 80% of your team's time. We find it, build the solution, and train your people on it.",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 h-full">
                    <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-zinc-500 leading-relaxed text-sm">{item.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="mb-16">
                <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">What We Do</p>
                <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
                  We figure out what to automate, build it, and teach your team how to use it.
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Process Mapping & Improvement",
                  description: "We sit down with your team and document how work actually flows. Where the time goes, where the bottlenecks are, what's manual that shouldn't be. This is always step one.",
                },
                {
                  title: "Automation & Digitization",
                  description: "Paper forms become digital. Manual handoffs become automated. Spreadsheets become dashboards. We build systems that handle the repetitive work so your people can focus on the work that matters.",
                },
                {
                  title: "AI Implementation",
                  description: "Document processing, automated reporting, intelligent workflows. We deploy AI into your actual operation — trained on your data, integrated with your tools, used by your team.",
                },
                {
                  title: "Ongoing Support & Training",
                  description: "We don't hand you a system and disappear. Your team gets trained on everything we build. We stay on for maintenance, improvements, and new builds as your needs evolve.",
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

      {/* Case studies */}
      <FadeIn>
        <section className="py-16 border-y-2 border-zinc-800 bg-zinc-900/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-5xl mx-auto">
              <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">Where We&apos;ve Done This</p>
              <p className="text-zinc-500 text-lg max-w-2xl mb-12">
                We built our automation practice managing our own federal construction program — 350 projects a year across 17 states.
                Then our clients started asking us to do the same for them.
              </p>
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-8">
                  <div className="text-sm text-cyan-400 font-mono uppercase tracking-wider mb-4">Federal Grants Program</div>
                  <div className="font-mono text-5xl font-black text-white tracking-tight mb-2">10 → 4</div>
                  <p className="text-zinc-600 text-sm mb-4">team members needed for the same workload</p>
                  <p className="text-zinc-500 leading-relaxed">
                    350 construction projects per year, managed by a team of 10 doing manual coordination — emails, spreadsheets, phone calls.
                    We automated the reporting, scheduling, and document management. Same throughput, less than half the headcount.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-8">
                  <div className="text-sm text-cyan-400 font-mono uppercase tracking-wider mb-4">Pfizer</div>
                  <div className="font-mono text-5xl font-black text-white tracking-tight mb-2">55+</div>
                  <p className="text-zinc-600 text-sm mb-4">automation projects deployed</p>
                  <p className="text-zinc-500 leading-relaxed">
                    Pfizer retained us to automate construction and facilities operations workflows.
                    What started as a few projects became an ongoing engagement — 55+ automations deployed and growing.
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
              Not sure what you need? That&apos;s fine.
            </h2>
            <p className="text-lg text-zinc-500 mb-10 max-w-2xl mx-auto">
              Most of our clients didn&apos;t know exactly what to ask for when they first reached out.
              We&apos;ll walk through your operations together, show you where the opportunities are,
              and you can decide what makes sense from there. No commitment, no pitch.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-cyan-500 text-white hover:bg-cyan-400 font-bold text-sm px-10 uppercase tracking-wider rounded-sm shadow-lg shadow-cyan-500/20">
                Get in Touch
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
                <span className="font-medium text-zinc-400 text-sm uppercase tracking-widest">Weigh Anchor</span>
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
                <Link href="/services" className="block text-sm text-zinc-600 hover:text-white transition-colors">Construction Services</Link>
                <Link href="/automation" className="block text-sm text-zinc-600 hover:text-white transition-colors">Automation Services</Link>
                <Link href="/about" className="block text-sm text-zinc-600 hover:text-white transition-colors">About</Link>
                <Link href="/contact" className="block text-sm text-zinc-600 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-zinc-500 mb-4 text-[10px] uppercase tracking-[0.2em]">Certifications</h3>
              <div className="space-y-2 text-sm text-zinc-600">
                <p>SDVOSB</p>
                <p>Veteran-Owned</p>
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
