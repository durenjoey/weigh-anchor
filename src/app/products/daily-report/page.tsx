import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mic, WifiOff, FileSignature, Camera, ShieldCheck, Mail, Apple } from "lucide-react";
import DarkNav from "@/components/DarkNav";
import Footer from "@/components/Footer";

const APP_STORE_URL = "https://apps.apple.com/us/app/daily-report-construction-ai/id6777528347";

export const metadata: Metadata = {
  title: "Daily Report | Construction Copilot | Weigh Anchor",
  description:
    "Speak your daily report; AI turns it into a structured, signed PDF. No account, private by design, and it works offline. Now on the App Store.",
  alternates: {
    canonical: "/products/daily-report",
  },
};

const SHOTS = [
  { src: "/assets/products/daily-report/dr-01-speak.png", alt: "Speak your day, get the report" },
  { src: "/assets/products/daily-report/dr-02-justtalk.png", alt: "Just talk, the AI sorts it" },
  { src: "/assets/products/daily-report/dr-03-photos.png", alt: "Photos from every trade" },
  { src: "/assets/products/daily-report/dr-04-pdf.png", alt: "Sign and send a professional PDF" },
  { src: "/assets/products/daily-report/dr-05-offline.png", alt: "Built for the field, works offline" },
  { src: "/assets/products/daily-report/dr-06-credibility.png", alt: "Built by builders, tested on real jobs" },
];

const STATS = [
  { value: "Free", label: "On the App Store" },
  { value: "Offline", label: "Works in dead zones" },
  { value: "On-device", label: "Private AI" },
];

const FEATURES = [
  {
    icon: Mic,
    title: "Voice to report",
    body: "Talk through your day like you'd text your PM. On-device AI sorts it into manpower, work, delays, safety, and more. Or type it, same pipeline.",
  },
  {
    icon: WifiOff,
    title: "Works offline",
    body: "Everything that matters runs on your phone, no signal required. Perfect for the dead zones real jobsites live in.",
  },
  {
    icon: Camera,
    title: "Photos + signature",
    body: "Attach jobsite photos with time and location, then sign and export a clean, professional PDF.",
  },
  {
    icon: FileSignature,
    title: "A record you can rely on",
    body: "Each report captures the time, location, and your own words, so you have a clear, accurate account of the day.",
  },
  {
    icon: ShieldCheck,
    title: "Private by design",
    body: "No account, no tracking. Online, your words are sent solely to build the report and returned to you; offline, it all runs on your phone. Your reports stay on your device unless you choose to send them.",
  },
];

function AppStoreButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-sm border border-orange-600 bg-orange-600 px-6 py-3 text-sm font-semibold text-white uppercase tracking-wider font-mono transition-colors hover:bg-orange-500 ${className}`}
    >
      <Apple className="h-4 w-4" />
      Download on the App Store
    </a>
  );
}

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

        {/* Hero */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm border border-zinc-700 bg-zinc-900/90 text-xs text-zinc-400 mb-8 uppercase tracking-widest font-mono">
            iOS App &middot; Construction Copilot
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]">
            Daily Report
          </h1>
          <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
            You run the job, it runs the paperwork. Speak your daily report and on-device AI turns it
            into a structured, signed PDF. Fully offline, fully private, built for the field.
          </p>

          <AppStoreButton className="mt-8" />

          {/* Credibility stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-xl">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                <div className="text-2xl lg:text-3xl font-bold text-orange-500">{s.value}</div>
                <div className="mt-1 text-xs text-zinc-500 uppercase tracking-wider font-mono leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshot showcase */}
        <div className="mt-20">
          <h2 className="text-xs text-zinc-500 uppercase tracking-widest font-mono mb-6">
            Take a look
          </h2>
          <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 lg:-mx-6 lg:px-6">
            {SHOTS.map((shot) => (
              <div key={shot.src} className="snap-start shrink-0">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={1284}
                  height={2778}
                  sizes="(max-width: 768px) 75vw, 280px"
                  className="h-[480px] lg:h-[600px] w-auto rounded-2xl border border-zinc-800"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
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

        {/* Built by builders band */}
        <div className="mt-20 rounded-2xl border border-zinc-800 bg-black overflow-hidden">
          <div className="flex flex-col items-center text-center px-6 py-14">
            <Image
              src="/assets/products/daily-report/logo-lockup.png"
              alt="Daily Report by Construction Copilot"
              width={1254}
              height={1254}
              sizes="320px"
              className="w-[280px] h-auto"
            />
            <p className="mt-6 max-w-2xl text-lg text-zinc-300 leading-relaxed">
              Daily Report is built by Construction Copilot, the technology arm of Weigh Anchor, a
              working construction firm. We make the tools we wish we had, and we test them on our
              own jobsites before they reach yours.
            </p>
            <p className="mt-4 text-orange-500 font-semibold uppercase tracking-wider font-mono text-sm">
              Built by builders. Tested on real jobs.
            </p>
            <AppStoreButton className="mt-8" />
          </div>
        </div>

        {/* Device requirement */}
        <div className="mt-12 rounded-lg border border-zinc-800 bg-zinc-900/30 p-6">
          <h3 className="text-xs text-zinc-500 uppercase tracking-widest font-mono mb-2">
            Device requirements
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Voice-to-report works on any supported iPhone when you are online, using a cloud AI that
            structures your report and returns it to you. The fully offline on-device AI requires an
            iPhone 15 Pro or newer with Apple Intelligence. On other iPhones you can still build, sign,
            and export reports by hand when offline.
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
            </Link>{" "}
            and{" "}
            <Link href="/products/daily-report/terms" className="text-zinc-300 underline hover:text-white">
              terms of use
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
