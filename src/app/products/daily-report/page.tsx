import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mic, WifiOff, FileSignature, Camera, ShieldCheck, Mail } from "lucide-react";
import DarkNav from "@/components/DarkNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Daily Report — Construction Copilot | Weigh Anchor",
  description:
    "Speak your daily report; on-device AI turns it into a structured, signed PDF. Fully offline, private, built for the field. Coming soon to the App Store.",
};

const FEATURES = [
  {
    icon: Mic,
    title: "Voice to report",
    body: "Talk through your day like you'd text your PM. On-device AI sorts it into manpower, work, delays, safety, and more — or type it, same pipeline.",
  },
  {
    icon: WifiOff,
    title: "Works offline",
    body: "Everything that matters runs on your phone — no signal required. Perfect for the dead zones real jobsites live in.",
  },
  {
    icon: Camera,
    title: "Photos + signature",
    body: "Attach jobsite photos with time and location, then sign and export a clean, professional PDF.",
  },
  {
    icon: FileSignature,
    title: "A court-credible record",
    body: "Timestamp, GPS, and your preserved words make each report a contemporaneous, legal-grade daily log.",
  },
  {
    icon: ShieldCheck,
    title: "Private by design",
    body: "No account, no cloud, no tracking. Your reports stay on your device unless you choose to send them.",
  },
];

export default function DailyReportPage() {
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
            iOS App &middot; Construction Copilot
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]">
            Daily Report
          </h1>
          <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
            You run the job, it runs the paperwork. Speak your daily report and on-device AI turns it
            into a structured, signed PDF — fully offline, fully private, built for the field.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-sm border border-orange-600/40 bg-orange-600/10 px-5 py-3 text-sm text-orange-300 uppercase tracking-wider font-mono">
            Coming soon to the App Store
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="relative rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-16 h-[2px] bg-gradient-to-r from-orange-600 to-transparent" />
                <Icon className="h-6 w-6 text-orange-500 mb-4" />
                <h3 className="text-lg font-bold text-white tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{f.body}</p>
              </div>
            );
          })}
        </div>

        {/* Device requirement */}
        <div className="mt-12 rounded-lg border border-zinc-800 bg-zinc-900/30 p-6">
          <h3 className="text-xs text-zinc-500 uppercase tracking-widest font-mono mb-2">
            Device requirements
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            The on-device AI features (voice-to-report) require an iPhone 15 Pro or newer with Apple
            Intelligence. On other iPhones you can still build, sign, and export reports by hand.
          </p>
        </div>

        {/* Contact / support */}
        <div className="mt-6 rounded-lg border border-zinc-800 bg-zinc-900/30 p-6">
          <h3 className="text-xs text-zinc-500 uppercase tracking-widest font-mono mb-3">
            Questions or need a hand?
          </h3>
          <a
            href="mailto:info@weighanchor.com"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium"
          >
            <Mail className="h-4 w-4" />
            info@weighanchor.com
          </a>
          <p className="mt-3 text-sm text-zinc-500">
            Read our{" "}
            <Link href="/products/daily-report/privacy" className="text-zinc-300 underline hover:text-white">
              privacy policy
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
