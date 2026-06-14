"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import DarkNav from "@/components/DarkNav";
import Footer from "@/components/Footer";

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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0d0f13] text-zinc-300">

      <DarkNav />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16">
        {/* Subtle glow */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-orange-600/4 rounded-full blur-[160px]" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm border border-zinc-700 bg-zinc-900/90 text-xs text-zinc-400 mb-10 uppercase tracking-widest font-mono backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-sm shadow-orange-500/50" />
              About
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase">
              About
            </h1>

            <div className="flex gap-4 mt-8 mb-8">
              <div className="w-1 bg-gradient-to-b from-orange-500 to-orange-500/0 rounded-full flex-shrink-0" />
              <p className="text-zinc-400 max-w-xl leading-relaxed text-lg">
                Automation, AI, and construction services. Veteran-owned.
                Headquartered in Bellevue, WA. Deployed across 17 states and territories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story — the heart of the page */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">How We Got Here</p>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-12">Our Story</h2>
            </FadeIn>

            <div className="space-y-8">
              <FadeIn delay={100}>
                <p className="text-zinc-400 leading-relaxed text-lg">
                  We started by saying yes to the projects few firms would take.
                </p>
              </FadeIn>

              <FadeIn delay={200}>
                <p className="text-zinc-500 leading-relaxed">
                  Remote tribal communities in rural Alaska. Federal facilities on Pacific islands. Government sites so far from infrastructure that most contractors declined the work or subcontracted to whoever was local and available.
                </p>
              </FadeIn>

              <FadeIn delay={300}>
                <p className="text-zinc-500 leading-relaxed">
                  It started with our founder deploying to these places himself, working alongside local teams to plan their projects in places where the nearest supply chain was a charter flight away. These were the projects that built our reputation. We slept in sleeping bags on facility floors, worked without cell service, and learned more about project delivery in those environments than most firms learn in a career.
                </p>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="relative rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 mt-12 overflow-hidden">
                  <div className="absolute top-0 left-0 w-24 h-[2px] bg-gradient-to-r from-orange-600 to-transparent" />
                  <p className="text-zinc-400 leading-relaxed italic">
                    Our name comes from the nautical command to raise the anchor. The moment a ship breaks free from what&apos;s holding it in place and begins to move. That&apos;s what we do for our clients. We find what&apos;s keeping them stuck, we aid in the lift, and we get things moving.
                  </p>
                  <p className="text-zinc-600 text-sm mt-4 font-mono">- Joey Duren</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SDVOSB + What We Do — condensed intro strip */}
      <FadeIn>
        <section className="py-16 border-y-2 border-zinc-800 bg-zinc-900/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">Who We Are</p>
                  <h2 className="text-2xl font-bold text-white tracking-tight mb-6">
                    We engineer and automate the systems that run the built environment.
                  </h2>
                  <p className="text-zinc-500 leading-relaxed">
                    Workflow automation, AI implementation, and business process engineering for organizations whose operations have to work. We also manage construction projects across government, tribal, and private sector programs.
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">Certification</p>
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    We&apos;re a certified Service-Disabled Veteran-Owned Small Business. It&apos;s where we come from and how we operate: with structure, accountability, and a bias toward action.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["SDVOSB", "MBE", "King County SCS"].map((cert, i) => (
                      <div key={i} className="px-3 py-1.5 rounded-sm border border-zinc-700 bg-zinc-900/80 text-xs text-zinc-400 uppercase tracking-widest font-mono">
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* What Sets Us Apart */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="mb-16">
                <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">How We&apos;re Different</p>
                <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight">What Sets Us Apart</h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "We show up",
                  text: "Our teams go to the site, stay on the site, and own the outcome. From Arctic villages to pharmaceutical campuses, we show up with the people who are accountable for the result.",
                },
                {
                  title: "We've done the hard version",
                  text: "Managing a project in downtown Seattle is one thing. Managing one in a remote village accessible only by bush plane is another. That experience changes how you plan, communicate, and solve problems.",
                },
                {
                  title: "We build the systems, not just the buildings",
                  text: "We also automate the operations behind projects: cost tracking, reporting, document workflows. When we finish, we leave behind systems that keep working after we\u2019re gone.",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className="relative rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 overflow-hidden h-full">
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

      {/* Credentials */}
      <FadeIn>
        <section className="py-16 border-y-2 border-zinc-800 bg-zinc-900/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12">
                <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">Credentials</p>
                <h2 className="text-2xl font-bold text-white tracking-tight">Company details.</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Headquarters", value: "Bellevue, WA" },
                  { label: "Founded", value: "2022" },
                  { label: "Certifications", value: "SDVOSB, MBE" },
                  { label: "CAGE Code", value: "9LA92" },
                ].map((item, i) => (
                  <div key={i} className="relative rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 overflow-hidden">
                    <p className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-mono mb-2">{item.label}</p>
                    <p className="text-white font-bold tracking-tight">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

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
              Ready to talk?
            </h2>
            <Link href="/contact">
              <Button size="lg" className="bg-orange-600 text-white hover:bg-orange-500 font-bold text-sm px-10 uppercase tracking-wider rounded-sm shadow-lg shadow-orange-600/20">
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
