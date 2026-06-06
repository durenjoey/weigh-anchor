import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Star } from "lucide-react";
import DarkNav from "@/components/DarkNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Construction Copilot GPT | Weigh Anchor",
  description:
    "The #1 construction GPT in the ChatGPT store. AI assistant for construction management — cost control, scheduling, earned value, and more. 25,000+ conversations.",
};

const GPT_URL = "https://chatgpt.com/g/g-oSieVvg1P-construction-copilot";

const STATS = [
  { value: "#1", label: "General Construction" },
  { value: "#2", label: "Overall Construction" },
  { value: "25K+", label: "Conversations" },
  { value: "4.3", label: "600+ Ratings" },
];

const STARTERS = [
  "How do I manage costs for my project?",
  "I need help with project scheduling, can you help?",
  "Explain earned value management.",
  "What are the stages of a construction project?",
];

export default function ConstructionCopilotGPTPage() {
  return (
    <div className="min-h-screen bg-[#0d0f13] text-zinc-300">
      <DarkNav />

      <section className="container mx-auto px-4 lg:px-6 py-16 lg:py-24">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-white uppercase tracking-widest font-mono mb-10"
        >
          <ArrowLeft className="h-3 w-3" /> Products
        </Link>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm border border-zinc-700 bg-zinc-900/90 text-xs text-zinc-400 mb-8 uppercase tracking-widest font-mono">
            ChatGPT &middot; By weighanchor.com
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]">
            Construction Copilot GPT
          </h1>
          <p className="mt-4 text-lg text-zinc-400">AI Assistant for Construction Management</p>
          <p className="mt-6 text-zinc-400 leading-relaxed">
            The most-used construction GPT in the ChatGPT store. Built by Weigh Anchor for project
            managers, superintendents, and estimators — ask it about cost control, scheduling,
            earned value management, contracts, and the realities of running a job.
          </p>

          <a
            href={GPT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold uppercase text-sm tracking-wider rounded-sm px-6 py-3 transition-colors"
          >
            Open in ChatGPT
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="relative rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-16 h-[2px] bg-gradient-to-r from-orange-600 to-transparent" />
              <div className="text-3xl font-bold text-white tracking-tight">{s.value}</div>
              <div className="mt-1 text-xs text-zinc-500 uppercase tracking-widest font-mono">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Rating note */}
        <div className="mt-6 flex items-center gap-2 text-sm text-zinc-500">
          <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
          4.3 average from 600+ ratings &middot; Productivity category
        </div>

        {/* Conversation starters */}
        <div className="mt-16">
          <h2 className="text-xs text-zinc-500 uppercase tracking-widest font-mono mb-4">
            Ask it anything
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {STARTERS.map((q) => (
              <div
                key={q}
                className="rounded-md border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-sm text-zinc-300"
              >
                {q}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
