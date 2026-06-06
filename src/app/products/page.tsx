import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageSquare, ClipboardList } from "lucide-react";
import DarkNav from "@/components/DarkNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Products | Construction Copilot | Weigh Anchor",
  description:
    "Construction Copilot removes the administrative burden of construction. The #1 construction GPT and Daily Report, an offline voice-to-AI daily reporting app.",
};

const PRODUCTS = [
  {
    href: "/products/construction-copilot-gpt",
    eyebrow: "ChatGPT",
    name: "Construction Copilot GPT",
    blurb:
      "The AI assistant for construction management. #1 in general construction in the ChatGPT store, with 25,000+ conversations and a 4.3 rating from 600+ reviews.",
    icon: MessageSquare,
    cta: "Explore the GPT",
  },
  {
    href: "/products/daily-report",
    eyebrow: "iOS App",
    name: "Daily Report",
    blurb:
      "Speak your daily report; on-device AI turns it into a structured, signed PDF. Fully offline, private, and built for the field. Coming soon to the App Store.",
    icon: ClipboardList,
    cta: "See the app",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#0d0f13] text-zinc-300">
      <DarkNav />

      {/* Hero / mission */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm border border-zinc-700 bg-zinc-900/90 text-xs text-zinc-400 mb-8 uppercase tracking-widest font-mono">
              Construction Copilot
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]">
              Remove the administrative burden of construction.
            </h1>
            <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
              Construction Copilot is Weigh Anchor&apos;s suite of AI tools for the people who run
              construction. The mission is simple: take the administrative burden off their plate, so
              their time goes to the work instead of the paperwork.
            </p>
          </div>
        </div>
      </section>

      {/* Product cards */}
      <section className="border-t border-zinc-800 bg-zinc-900/20">
        <div className="container mx-auto px-4 lg:px-6 py-16">
          <div className="grid md:grid-cols-2 gap-6">
            {PRODUCTS.map((p) => {
              const Icon = p.icon;
              return (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group relative rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 overflow-hidden hover:border-zinc-600 transition-colors"
                >
                  <div className="absolute top-0 left-0 w-24 h-[2px] bg-gradient-to-r from-orange-600 to-transparent" />
                  <Icon className="h-8 w-8 text-orange-500 mb-6" />
                  <div className="text-xs text-zinc-500 uppercase tracking-widest font-mono mb-2">
                    {p.eyebrow}
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight">{p.name}</h2>
                  <p className="mt-3 text-zinc-400 leading-relaxed">{p.blurb}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-orange-500 text-sm font-medium uppercase tracking-wider">
                    {p.cta}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
