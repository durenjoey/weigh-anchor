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
  Map,
  X,
} from "lucide-react";
import { VERIFIED_STATS, clients } from "@/data/projects";
import Link from "next/link";
import DarkNav from "@/components/DarkNav";
import Footer from "@/components/Footer";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// --- Dark Map Hero Background ---
function DarkMapBackground() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    const isMobile = window.innerWidth < 768;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: isMobile ? [-117, 39] : [-96, 38],
      zoom: isMobile ? 1.8 : 4,
      pitch: 0,
      bearing: 0,
      antialias: true,
      attributionControl: false,
      interactive: true,
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({ showCompass: false }),
      "bottom-right"
    );

    map.current.on("load", () => setIsMapLoaded(true));

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [MAPBOX_TOKEN]);

  // Add markers
  useEffect(() => {
    if (!map.current || !isMapLoaded) return;

    if (map.current.getSource("clients")) {
      map.current.removeLayer("clients-glow");
      map.current.removeLayer("clients-circles");
      map.current.removeSource("clients");
    }

    const geojsonData = {
      type: "FeatureCollection" as const,
      features: clients.map((client) => ({
        type: "Feature" as const,
        geometry: {
          type: "Point" as const,
          coordinates: [client.coordinates.lng, client.coordinates.lat],
        },
        properties: {
          name: client.name,
          location: client.location,
          state: client.state,
          category: client.category,
        },
      })),
    };

    map.current.addSource("clients", { type: "geojson", data: geojsonData });

    // Soft glow behind dots
    map.current.addLayer({
      id: "clients-glow",
      type: "circle",
      source: "clients",
      paint: {
        "circle-radius": 12,
        "circle-color": "#f97316",
        "circle-opacity": 0.15,
        "circle-blur": 1,
      },
    });

    // Orange dots
    map.current.addLayer({
      id: "clients-circles",
      type: "circle",
      source: "clients",
      paint: {
        "circle-radius": 4,
        "circle-color": "#f97316",
        "circle-stroke-width": 1.5,
        "circle-stroke-color": "rgba(249, 115, 22, 0.25)",
        "circle-opacity": 0.9,
      },
    });

    // Dark popup
    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
      offset: 12,
      className: "dark-map-popup",
    });

    map.current.on("mouseenter", "clients-circles", (e) => {
      map.current!.getCanvas().style.cursor = "pointer";
      const feature = e.features![0];
      const coordinates = (feature.geometry as GeoJSON.Point)
        .coordinates as [number, number];
      const props = feature.properties!;

      popup
        .setLngLat(coordinates)
        .setHTML(
          `<div style="background:#18181b;color:#d4d4d8;padding:10px 14px;border-radius:6px;font-size:13px;border:1px solid #27272a;min-width:160px;">
            <div style="font-weight:600;color:#fff;margin-bottom:2px;">${props.name}</div>
            <div style="color:#71717a;font-size:11px;">${props.location}, ${props.state}</div>
            <div style="color:#f97316;margin-top:5px;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">${props.category}</div>
          </div>`
        )
        .addTo(map.current!);
    });

    map.current.on("mouseleave", "clients-circles", () => {
      map.current!.getCanvas().style.cursor = "";
      popup.remove();
    });

    map.current.on("click", "clients-circles", (e) => {
      const feature = e.features![0];
      const coordinates = (feature.geometry as GeoJSON.Point)
        .coordinates as [number, number];
      map.current!.flyTo({ center: coordinates, zoom: 8, duration: 1500 });
    });
  }, [isMapLoaded]);

  return (
    <div
      ref={mapContainer}
      className="absolute inset-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

// --- Terminal Typewriter ---
const LINES = [
  {
    command: "CONSTRUCTION",
    text: "Project management, controls, and program management in 17 states and territories",
  },
  {
    command: "AUTOMATION",
    text: "Business process automation for teams running on headcount instead of systems",
  },
];

function TerminalHero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<
    "typing-cmd" | "typing-text" | "pause" | "clearing"
  >("typing-cmd");
  const [displayCmd, setDisplayCmd] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    const line = LINES[lineIndex];

    if (phase === "typing-cmd") {
      if (charIndex < line.command.length) {
        const timer = setTimeout(() => {
          setDisplayCmd(line.command.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
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
          setCharIndex((c) => c + 1);
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
        <span className="text-orange-500 text-lg select-none font-bold">
          &gt;_
        </span>
        <div role="presentation" className="text-5xl lg:text-7xl font-black text-orange-500 tracking-tighter uppercase">
          {displayCmd}
          {phase === "typing-cmd" && (
            <span
              className={`inline-block w-[4px] h-[0.85em] bg-orange-500 ml-1 align-baseline translate-y-[0.05em] ${showCursor ? "opacity-100" : "opacity-0"}`}
            />
          )}
        </div>
      </div>
      <div className="mt-3 min-h-[2rem]">
        {(phase === "typing-text" || phase === "pause") && (
          <p className="text-xl text-zinc-400 tracking-wide font-mono">
            {displayText}
            {phase === "typing-text" && (
              <span
                className={`inline-block w-[2px] h-[1em] bg-zinc-600 ml-0.5 align-baseline translate-y-[0.1em] ${showCursor ? "opacity-100" : "opacity-0"}`}
              />
            )}
          </p>
        )}
      </div>
    </div>
  );
}

// --- Animated counter ---
function Counter({
  target,
  suffix = "",
}: {
  target: number | string;
  suffix?: string;
}) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof target !== "number") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
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
      if (step === steps) {
        clearInterval(timer);
        setValue(target);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div
      ref={ref}
      className="font-mono text-4xl lg:text-5xl font-black tracking-tight"
    >
      {typeof target === "number" ? value : target}
      {suffix}
    </div>
  );
}

// --- Fade in on scroll ---
function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
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

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [mapExplore, setMapExplore] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0f13] text-zinc-300">
      <style jsx global>{`
        .dark-map-popup .mapboxgl-popup-content {
          background: transparent !important;
          padding: 0 !important;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5) !important;
          border-radius: 6px !important;
        }
        .dark-map-popup .mapboxgl-popup-tip {
          border-top-color: #18181b !important;
          border-bottom-color: #18181b !important;
        }
        .mapboxgl-ctrl-group {
          background: #18181b !important;
          border: 1px solid #27272a !important;
          border-radius: 4px !important;
        }
        .mapboxgl-ctrl-group button {
          border-color: #27272a !important;
        }
        .mapboxgl-ctrl-group button + button {
          border-top-color: #27272a !important;
        }
        .mapboxgl-ctrl-group button span {
          filter: invert(1) !important;
        }
        .mapboxgl-ctrl-bottom-left {
          display: none !important;
        }
      `}</style>

      <DarkNav
        logo="/assets/logos/weigh_anchor_logo_v2.png"
        logoHeight="h-14"
      />

      {/* Fullscreen map explore — mobile only */}
      {mapExplore && (
        <div className="fixed inset-0 z-50 bg-[#0d0f13]">
          <DarkMapBackground />
          <div className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-4">
            <span className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-mono bg-zinc-900/80 px-4 py-2 rounded-full border border-zinc-800 backdrop-blur-sm">
              Explore Our Project Locations
            </span>
            <button
              onClick={() => setMapExplore(false)}
              className="p-3 rounded-full bg-zinc-900/90 border border-zinc-700 text-white backdrop-blur-sm shadow-lg"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="fixed bottom-6 left-0 right-0 text-center">
            <span className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-mono bg-zinc-900/80 px-4 py-2 rounded-full border border-zinc-800 backdrop-blur-sm">
              Pinch to zoom &bull; Drag to explore
            </span>
          </div>
        </div>
      )}

      {/* Hero with Map Background */}
      <section className="relative overflow-hidden" style={{ minHeight: "75vh" }}>
        {/* Map background — non-interactive on mobile until explore mode */}
        <div className="absolute inset-0 pointer-events-none md:pointer-events-auto">
          <DarkMapBackground />
        </div>

        {/* Gradient overlays to make text readable */}
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

        {/* Hero content */}
        <div
          className="relative container mx-auto px-4 lg:px-6 pt-28 pb-24 pointer-events-none"
          style={{ minHeight: "75vh", display: "flex", alignItems: "center" }}
        >
          <div className="max-w-2xl pointer-events-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm border border-zinc-700 bg-zinc-900/90 text-xs text-zinc-400 mb-10 uppercase tracking-widest font-mono backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-sm shadow-orange-500/50" />
              SDVOSB Certified &bull; Veteran-Owned
            </div>

            <h1 className="sr-only">
              Veteran-Owned Construction Project Management &amp; Business Automation
            </h1>

            {/* Terminal */}
            <div className="min-h-[220px] md:min-h-[160px]">
              <TerminalHero />
            </div>

            {/* Descriptor */}
            <div className="mt-10 flex gap-4">
              <div className="w-1 bg-gradient-to-b from-orange-500 to-orange-500/0 rounded-full flex-shrink-0" />
              <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
                We manage construction projects and automate operations
                across public and private sectors.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-12 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-orange-600 text-white hover:bg-orange-500 font-bold uppercase tracking-wider text-sm rounded-sm shadow-lg shadow-orange-600/20"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/automation">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-white hover:border-zinc-600 rounded-sm uppercase tracking-wider text-sm font-medium backdrop-blur-sm"
                >
                  <Terminal className="mr-2 h-4 w-4" />
                  Automation Services
                </Button>
              </Link>
            </div>

            {/* Capability Statements */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/assets/documents/Weigh-Anchor-Construction-Capability-Statement.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-zinc-600 uppercase tracking-[0.15em] font-mono hover:text-orange-500 transition-colors"
              >
                Construction Capability Statement &darr;
              </a>
              <span className="text-zinc-800">|</span>
              <a
                href="/assets/documents/Weigh-Anchor-Automation-Capability-Statement.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-zinc-600 uppercase tracking-[0.15em] font-mono hover:text-cyan-400 transition-colors"
              >
                Automation Capability Statement &darr;
              </a>
            </div>

            {/* Explore map button */}
            <button
              onClick={() => setMapExplore(true)}
              className="mt-8 flex items-center gap-2 text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-mono hover:text-orange-500 transition-colors cursor-pointer"
            >
              <Map className="h-3.5 w-3.5" />
              Explore our project locations
            </button>
          </div>
        </div>
      </section>

      {/* Stats — industrial control panel */}
      <section className="border-y-2 border-zinc-800 bg-zinc-900/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-3 divide-x-2 divide-zinc-800">
            {[
              {
                value: VERIFIED_STATS.activeProjects,
                suffix: "+",
                label: "CONSTRUCTION PROJECTS",
              },
              {
                value: VERIFIED_STATS.statesAndTerritories,
                suffix: "",
                label: "STATES & TERRITORIES",
              },
              { value: 55, suffix: "+", label: "AUTOMATION PROJECTS" },
            ].map((stat, i) => (
              <div key={i} className="py-10 px-6 text-center">
                <div className="text-orange-500">
                  {typeof stat.value === "number" ? (
                    <Counter target={stat.value} suffix={stat.suffix} />
                  ) : (
                    <div className="font-mono text-4xl lg:text-5xl font-black tracking-tight">
                      {stat.value}
                    </div>
                  )}
                </div>
                <div className="text-[10px] text-zinc-600 mt-3 uppercase tracking-[0.2em] font-mono">
                  {stat.label}
                </div>
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
                <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">
                  Service Lines
                </p>
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 tracking-tight">
                  Two ways we solve your problems
                </h2>
                <p className="text-zinc-600 text-lg">Pick one. Or both.</p>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Construction — orange industrial panel */}
              <FadeIn delay={100}>
                <Link href="/services" className="group block h-full">
                  <div className="relative h-full rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 hover:border-orange-500/40 transition-all duration-500 overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-600 via-orange-500 to-transparent" />
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/8 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      <div className="w-12 h-12 rounded-md bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
                        <Building2 className="h-6 w-6 text-orange-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                        Construction Services
                      </h3>
                      <p className="text-zinc-500 leading-relaxed mb-6">
                        Project management, project controls, and program
                        management for government agencies, tribal nations,
                        and private sector organizations.
                      </p>
                      <div className="space-y-3 mb-8">
                        {[
                          "Project Management",
                          "Project Controls",
                          "Program Management",
                          "Field Operations",
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 text-sm text-zinc-500"
                          >
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

              {/* Automation — cyan tech panel */}
              <FadeIn delay={200}>
                <Link href="/automation" className="group block h-full">
                  <div className="relative h-full rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 hover:border-cyan-500/40 transition-all duration-500 overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 via-cyan-400 to-transparent" />
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/8 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      <div className="w-12 h-12 rounded-md bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                        <Bot className="h-6 w-6 text-cyan-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                        Automation Services
                      </h3>
                      <p className="text-zinc-500 leading-relaxed mb-6">
                        AI implementation, workflow automation, and digitization
                        for construction organizations. We build it, deploy it,
                        and train your team on it.
                      </p>
                      <div className="space-y-3 mb-8">
                        {[
                          "Process Mapping & Improvement",
                          "Automation & Digitization",
                          "AI Implementation",
                          "Ongoing Support & Training",
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 text-sm text-zinc-500"
                          >
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

      {/* Social proof — stacked cards */}
      <FadeIn>
        <section className="py-16 border-y-2 border-zinc-800 bg-zinc-900/30">
          <div className="container mx-auto px-4 lg:px-6">
            <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-8 text-center">
              Organizations we&apos;ve supported
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { name: "Pfizer", desc: "Pharmaceutical — construction & automation" },
                { name: "Department of Justice", desc: "Federal construction program management" },
                { name: "Dept. of Veterans Affairs", desc: "Federal facility projects" },
                { name: "40+ Tribal Nations", desc: "Remote community construction across 17 states" },
              ].map((org, i) => (
                <div key={i} className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5">
                  <div className="text-sm font-bold text-white mb-1">{org.name}</div>
                  <div className="text-xs text-zinc-600 leading-relaxed">{org.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CTA — industrial slab */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/6 rounded-full blur-[160px]" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "16px 16px",
          }}
        />
        <div className="relative container mx-auto px-4 lg:px-6 text-center">
          <FadeIn>
            <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-6">
              Get Started
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
              Ready to talk?
            </h2>
            <div className="mb-10" />
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-orange-600 text-white hover:bg-orange-500 font-bold text-sm px-10 uppercase tracking-wider rounded-sm shadow-lg shadow-orange-600/20"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
