import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import DarkNav from "@/components/DarkNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Daily Report Privacy Policy | Weigh Anchor",
  description:
    "Daily Report collects nothing. Your reports, photos, and recordings stay on your device. This is the app's full privacy policy.",
};

export default function DailyReportPrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0d0f13] text-zinc-300">
      <DarkNav />

      <section className="container mx-auto px-4 lg:px-6 py-16 lg:py-24 max-w-3xl">
        <Link
          href="/products/daily-report"
          className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-white uppercase tracking-widest font-mono mb-10"
        >
          <ArrowLeft className="h-3 w-3" /> Daily Report
        </Link>

        <h1 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">Privacy Policy</h1>
        <p className="mt-3 text-sm text-zinc-500 uppercase tracking-widest font-mono">
          Daily Report &middot; Effective June 6, 2026
        </p>

        <div className="mt-10 space-y-8 text-zinc-400 leading-relaxed">
          <p className="text-lg text-zinc-300">
            Daily Report is built privacy-first. The app does not collect, transmit, or sell your
            data. There is no account, no analytics, no advertising, and no third-party tracking.
            Your reports stay on your device unless you choose to share them.
          </p>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">What stays on your device</h2>
            <p>
              Everything you create (report text, the original voice recordings, photos, signatures,
              and the generated PDFs) is stored locally on your iPhone. We have no servers that
              receive this information and no ability to access it.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">On-device AI</h2>
            <p>
              Voice transcription and the AI that organizes your words into a report run entirely on
              your device using Apple&apos;s on-device models. Your recordings and report content are
              never uploaded for processing.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Permissions we use</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="text-zinc-300">Microphone &amp; Speech Recognition</span>: to record
                and transcribe your spoken report, on-device.
              </li>
              <li>
                <span className="text-zinc-300">Camera &amp; Photos</span>: to attach jobsite photos
                to a report, stored only on your device.
              </li>
              <li>
                <span className="text-zinc-300">Location</span>: to stamp a finished report with where
                it was created (proof it was made on site), and to look up local weather. Location is
                stored in your report on your device.
              </li>
            </ul>
            <p className="mt-3">
              You can decline any permission and still use the app; the related feature simply
              won&apos;t be available.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Weather</h2>
            <p>
              If you use the weather auto-fill, the app sends your location to Apple&apos;s WeatherKit
              service to retrieve current conditions. This is handled by Apple under its own privacy
              policy; Weigh Anchor does not receive or store that request.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Sharing is your choice</h2>
            <p>
              When you sign a report, the app creates a PDF and opens the iOS share sheet so you can
              send it however you like (email, messages, files). What you send, and to whom, is
              entirely up to you. We are not involved in that transfer.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Children</h2>
            <p>Daily Report is a professional tool and is not directed to children.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Changes</h2>
            <p>
              If this policy changes, we&apos;ll update this page and the effective date above.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Contact</h2>
            <p>
              Questions about privacy or the app? Email{" "}
              <a href="mailto:info@weighanchor.com" className="text-orange-500 hover:text-orange-400">
                info@weighanchor.com
              </a>
              .
            </p>
          </div>

          <p className="text-sm text-zinc-600">
            Daily Report is published by Weigh Anchor LLC.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
