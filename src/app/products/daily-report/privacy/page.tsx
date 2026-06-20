import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import DarkNav from "@/components/DarkNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Daily Report Privacy Policy | Weigh Anchor",
  description:
    "Daily Report runs on your device with no account. AI report structuring uses a no-retention cloud model when you are online, and stays fully on-device when you are offline. This is the app's full privacy policy.",
  alternates: {
    canonical: "/products/daily-report/privacy",
  },
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
          Daily Report &middot; Effective June 19, 2026
        </p>

        <div className="mt-10 space-y-8 text-zinc-400 leading-relaxed">
          <p className="text-lg text-zinc-300">
            Daily Report is built privacy-first. In this version there is no account and no login.
            There is no analytics, no advertising, and no third-party tracking. Your reports stay on
            your device. The one thing that can leave your device is the words of your report, sent
            to a no-retention cloud AI to structure them, and only when you are online and have not
            switched to on-device AI. Nothing is sent to Weigh Anchor servers, and nothing is sold.
          </p>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">What stays on your device</h2>
            <p>
              Everything you create (report text, the original voice recordings, photos, signatures,
              GPS location, and the generated PDFs) is stored locally on your iPhone. We have no
              servers that receive this information and no ability to access it. There is no account
              and no login in this version.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">How the AI structures your report</h2>
            <p>
              Daily Report turns your spoken or typed words into a structured report using AI. How
              that works depends on whether you are online:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>
                <span className="text-zinc-300">Online (default)</span>: the transcript of what you
                said or typed is sent to a no-retention cloud AI, currently Google Gemini, which
                processes it and sends back the structured report. The provider does not store your
                transcript and does not use it to train its models. The finished report is saved on
                your device.
              </li>
              <li>
                <span className="text-zinc-300">Offline, or on-device AI</span>: when you have no
                signal, or when you switch the app to on-device AI, the report is built entirely on
                your iPhone and nothing leaves the device.
              </li>
            </ul>
            <p className="mt-3">
              Either way, your voice recordings, photos, signature, GPS location, and the report
              itself stay on your device. Only the transcript text is ever sent for cloud structuring,
              and only in the online default mode.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Cloud backup and sync</h2>
            <p>
              Cloud backup, sync across devices, and team sharing are a future, separate, opt-in paid
              feature and are <span className="text-zinc-300">not part of this version</span>. In this
              version your reports are not backed up to any server. If you delete the app, the reports
              on your device go with it, so export anything you want to keep.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Permissions we use</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="text-zinc-300">Microphone &amp; Speech Recognition</span>: to record
                and transcribe your spoken report. Transcription runs on your device; the resulting
                transcript text is what gets sent for cloud structuring in the online default mode
                (see above).
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
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">No tracking, no selling, no other third parties</h2>
            <p>
              We do not track you, we do not run analytics, and we do not sell your data. The only
              third parties involved are the named cloud AI provider (Google Gemini) that structures
              your report when you are online, and Apple&apos;s WeatherKit when you use weather
              auto-fill. There is no other third-party AI and no advertising network.
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
            Daily Report is published by Weigh Anchor LLC. See also our{" "}
            <Link href="/products/daily-report/terms" className="text-zinc-400 underline hover:text-white">
              Terms of Use
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
