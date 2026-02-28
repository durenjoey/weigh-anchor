"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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

function BioCard({ image, name, title, intro, expanded }: {
  image: string;
  name: string;
  title: string;
  intro: string;
  expanded: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="relative rounded-lg border border-zinc-800 bg-zinc-900/50 overflow-hidden text-left w-full hover:border-zinc-700 transition-colors cursor-pointer"
    >
      <div className="absolute top-0 left-0 w-24 h-[2px] bg-gradient-to-r from-orange-600 to-transparent" />
      <div className="p-8">
        <div className="flex items-start gap-6 mb-6">
          <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border border-zinc-700">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">{name}</h3>
            <p className="text-orange-500 text-sm font-mono uppercase tracking-wider mt-1" dangerouslySetInnerHTML={{ __html: title }} />
          </div>
        </div>
        <p className="text-zinc-500 leading-relaxed text-sm">{intro}</p>

        <div className={`grid transition-all duration-500 ease-in-out ${open ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}>
          <div className="overflow-hidden">
            <div className="space-y-4">
              {expanded.map((text, i) => (
                <p key={i} className="text-zinc-600 leading-relaxed text-sm">{text}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-mono">
            {open ? "Show less" : "Read more"}
          </span>
          <svg className={`w-3 h-3 text-zinc-600 transition-transform duration-300 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </button>
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
                Construction services and automation. Veteran-owned.
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
                  It started with our founder deploying to these places himself — working alongside local teams to plan their projects in places where the nearest supply chain was a charter flight away. These were the projects that built our reputation. We slept in sleeping bags on facility floors, worked without cell service, and learned more about project delivery in those environments than most firms learn in a career.
                </p>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="relative rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 mt-12 overflow-hidden">
                  <div className="absolute top-0 left-0 w-24 h-[2px] bg-gradient-to-r from-orange-600 to-transparent" />
                  <p className="text-zinc-400 leading-relaxed italic">
                    Our name comes from the nautical command to raise the anchor — the moment a ship breaks free from what&apos;s holding it in place and begins to move. That&apos;s what we do for our clients. We find what&apos;s keeping them stuck, we aid in the lift, and we get things moving.
                  </p>
                  <p className="text-zinc-600 text-sm mt-4 font-mono">— Joey Duren</p>
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
                    We manage projects for government agencies, tribal nations, and private sector organizations.
                  </h2>
                  <p className="text-zinc-500 leading-relaxed">
                    We also automate the operations behind construction — the reporting, the workflows, the processes that run on people instead of systems.
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">Certification</p>
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    We&apos;re a certified Service-Disabled Veteran-Owned Small Business. It&apos;s where we come from and how we operate: with structure, accountability, and a bias toward action.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["SDVOSB", "Veteran-Owned", "MBE"].map((cert, i) => (
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
                  text: "We also automate the operations behind projects \u2014 cost tracking, reporting, document workflows. When we finish, we leave behind systems that keep working after we\u2019re gone.",
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

      {/* Leadership */}
      <section className="py-24 border-t-2 border-zinc-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="mb-16">
                <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">Leadership</p>
                <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight">Who runs it.</h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Joey */}
              <FadeIn delay={100}>
                <BioCard
                  image="/assets/team/ceo.jpeg"
                  name="Joseph Duren Lopez"
                  title="President &amp; CEO"
                  intro="U.S. Air Force veteran, Civil Engineering Squadron. Joey founded Weigh Anchor after military service and built the firm from the ground up — starting with the projects no one else wanted in the places no one else would go."
                  expanded={[
                    "He has personally managed and overseen projects across 17 states and territories, from federal courthouses to remote tribal infrastructure. He also leads the firm\u2019s automation practice, having delivered 55+ automation projects across multiple industries.",
                    "Prior to Weigh Anchor, Joey founded Alpha CREW, a disaster relief nonprofit that delivered over 100,000 pounds of aid to Puerto Rico following Hurricane Maria.",
                  ]}
                />
              </FadeIn>

              {/* Roxana */}
              <FadeIn delay={200}>
                <BioCard
                  image="/assets/team/cfo.png"
                  name="Roxana Forghani"
                  title="Chief Financial Officer"
                  intro="CPA and former Senior Manager at Deloitte. Roxana brings Fortune 500 financial leadership to a veteran-owned firm — managing financial operations, contract compliance, and the fiscal strategy behind Weigh Anchor\u2019s growth."
                  expanded={[
                    "She also leads Accountaholics, her own accounting practice serving businesses and individuals.",
                  ]}
                />
              </FadeIn>
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
                <span className="font-medium text-zinc-400 text-sm uppercase tracking-widest">
                  Weigh Anchor
                </span>
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
