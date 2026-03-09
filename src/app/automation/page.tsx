"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Search,
  Cog,
  Bot,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import DarkNav from "@/components/DarkNav";
import Footer from "@/components/Footer";

// --- Subtle animated particle background ---
function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    // Particles
    const count = 90;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * w(),
      y: Math.random() * h(),
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.8,
    }));

    const connectDist = 180;

    function draw() {
      ctx!.clearRect(0, 0, w(), h());

      // Update positions
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w()) p.vx *= -1;
        if (p.y < 0 || p.y > h()) p.vy *= -1;
      }

      // Draw connections
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectDist) {
            const alpha = (1 - dist / connectDist) * 0.15;
            ctx!.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
            ctx!.lineWidth = 0.5;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }

      // Draw dots
      for (const p of particles) {
        ctx!.fillStyle = "rgba(34, 211, 238, 0.3)";
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fill();
      }

      animationRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  useEffect(() => {
    const cleanup = init();
    return cleanup;
  }, [init]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
    />
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

// --- Service Typewriter ---
const SERVICE_LINES = [
  {
    command: "AI IMPLEMENTATION",
    text: "AI workflows, document processing, and automated reporting deployed into your operation.",
  },
  {
    command: "AUTOMATION & DIGITIZATION",
    text: "Paper to digital. Manual to automated. Spreadsheets to dashboards.",
  },
  {
    command: "PROCESS MAPPING",
    text: "We document how work actually flows and find where the time and money go.",
  },
  {
    command: "SUPPORT & TRAINING",
    text: "Your team gets trained on everything we build. We stay on as needs evolve.",
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
        <span className="text-cyan-400 text-lg select-none font-bold">&gt;_</span>
        <div role="presentation" className="text-4xl lg:text-6xl font-black text-cyan-400 tracking-tighter uppercase">
          {displayCmd}
          {phase === "typing-cmd" && (
            <span className={`inline-block w-[4px] h-[0.85em] bg-cyan-400 ml-1 align-baseline translate-y-[0.05em] ${showCursor ? "opacity-100" : "opacity-0"}`} />
          )}
        </div>
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

export default function AutomationServicesPage() {
  return (
    <div className="min-h-screen bg-[#0d0f13] text-zinc-300">

      <DarkNav />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "75vh" }}>
        {/* Animated particle background */}
        <div className="absolute inset-0">
          <ParticleBackground />
        </div>

        {/* Gradient overlays — matches homepage/services style */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #0d0f13 0%, #0d0f13e6 30%, #0d0f1399 55%, #0d0f1340 75%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, #0d0f13 0%, transparent 20%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #0d0f13 0%, transparent 25%)",
          }}
        />

        <div className="relative container mx-auto px-4 lg:px-6 pt-28 pb-24" style={{ minHeight: "75vh", display: "flex", alignItems: "center" }}>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm border border-zinc-700 bg-zinc-900/90 text-xs text-zinc-400 uppercase tracking-widest font-mono mb-10 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-sm shadow-cyan-400/50" />
              Automation Services
            </div>

            <h1 className="sr-only">Business Process Automation &amp; AI Implementation Services</h1>

            {/* Typewriter */}
            <div className="min-h-[260px] md:min-h-[200px]">
              <ServiceTypewriter />
            </div>

            {/* Static descriptor */}
            <div className="flex gap-4 mt-6 mb-8">
              <div className="w-1 bg-gradient-to-b from-cyan-400 to-cyan-400/0 rounded-full flex-shrink-0" />
              <p className="text-zinc-600 max-w-xl leading-relaxed">
                Every solution is built around how your operation actually runs.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-cyan-500 text-white hover:bg-cyan-400 font-bold uppercase tracking-wider text-sm rounded-sm shadow-lg shadow-cyan-500/20">
                  Get in Touch
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
                  <div className="group relative rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 h-full hover:border-cyan-500/30 transition-all duration-500 overflow-hidden">
                    <div className="absolute top-0 left-0 w-24 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent" />
                    <span className="text-cyan-400/20 font-mono text-5xl font-black absolute top-4 right-6 select-none">0{i + 1}</span>
                    <div className="relative z-10 pr-12">
                      <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                      <p className="text-zinc-500 leading-relaxed text-sm">{item.text}</p>
                    </div>
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

            <div className="space-y-4">
              {[
                {
                  icon: Search,
                  title: "Process Mapping & Improvement",
                  description: "We sit down with your team and document how work actually flows. Where the time goes, where the bottlenecks are, what's manual that shouldn't be. This is always step one.",
                },
                {
                  icon: Cog,
                  title: "Automation & Digitization",
                  description: "Paper forms become digital. Manual handoffs become automated. Spreadsheets become dashboards. We build systems that handle the repetitive work so your people can focus on the work that matters.",
                },
                {
                  icon: Bot,
                  title: "AI Implementation",
                  description: "Document processing, automated reporting, intelligent workflows. We deploy AI into your actual operation — trained on your data, integrated with your tools, used by your team.",
                },
                {
                  icon: GraduationCap,
                  title: "Ongoing Support & Training",
                  description: "We don't hand you a system and disappear. Your team gets trained on everything we build. We stay on for maintenance, improvements, and new builds as your needs evolve.",
                },
              ].map((service, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <div className="group relative rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden">
                    <div className="absolute top-0 left-0 w-24 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent" />
                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 rounded-md bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <service.icon className="h-5 w-5 text-cyan-400" />
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

      {/* Testimonials */}
      <FadeIn>
        <section className="py-16 border-y-2 border-zinc-800 bg-zinc-900/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-5xl mx-auto">
              <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-8">What Our Clients Say</p>
              <div className="max-w-2xl mx-auto">
                <div className="relative rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 overflow-hidden">
                  <div className="absolute top-0 left-0 w-16 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent" />
                  <div className="text-cyan-400/20 text-6xl font-black leading-none mb-4">&ldquo;</div>
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    We knew we needed to modernize but didn&apos;t know where to start.
                    Weigh Anchor mapped our workflows, built the systems, and trained our team.
                    Now we spend our time on operations instead of administration.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                      <span className="text-cyan-400 font-bold text-sm">RF</span>
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">Roya Forghani</div>
                      <div className="text-zinc-600 text-xs">CEO &amp; Founder — Royal Real Estate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* FAQ — structured for AI extraction */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="mb-16">
                <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">Common Questions</p>
                <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight">Frequently Asked</h2>
              </div>
            </FadeIn>

            <div className="space-y-6">
              {[
                {
                  q: "What is business process automation?",
                  a: "It's converting the manual, repetitive parts of your operation into digital systems that run automatically. Paper forms become digital. Spreadsheet tracking becomes real-time dashboards. Email handoffs become automated workflows. The goal is to free your team from administrative overhead so they can focus on actual work.",
                },
                {
                  q: "How long does it take to implement automation?",
                  a: "It depends on scope, but most engagements start producing results within 4-8 weeks. We begin with process mapping to understand how your operation actually runs, then build and deploy systems incrementally — you start seeing value before the full engagement is complete.",
                },
                {
                  q: "Do we need to be tech-savvy to work with you?",
                  a: "No. Most of our clients are operations-focused teams, not technology companies. We build systems around how your team already works, train everyone on what we deploy, and stay on for ongoing support. If your team can use email, they can use what we build.",
                },
                {
                  q: "What does a typical automation engagement look like?",
                  a: "We start by mapping your current processes — where time goes, what's manual, where things fall through cracks. Then we design and build the automation, deploy it into your environment, and train your team. After launch, we provide ongoing support and iterate as your needs evolve.",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <div className="relative rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 overflow-hidden">
                    <div className="absolute top-0 left-0 w-16 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent" />
                    <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{item.q}</h3>
                    <p className="text-zinc-500 leading-relaxed text-sm">{item.a}</p>
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
      <Footer />
    </div>
  );
}
