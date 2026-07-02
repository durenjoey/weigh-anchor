import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import DarkNav from "@/components/DarkNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Daily Report Privacy Policy | Weigh Anchor",
  description:
    "Daily Report has no account, no ads, no analytics, and no tracking. Your reports stay on your device; only what is needed to build your report is sent, and our server stores nothing. This is the app's full privacy policy.",
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
          Daily Report &middot; Effective July 2, 2026
        </p>

        <div className="mt-10 space-y-8 text-zinc-400 leading-relaxed">
          <p className="text-lg text-zinc-300">
            Daily Report is a Construction Copilot product published by Weigh Anchor LLC, a Washington
            limited liability company based in Bellevue, Washington. This policy covers the Daily
            Report mobile app for iOS and Android. We built it on a simple principle: your data is
            yours. The app is free, has no accounts, no ads, no analytics, and no tracking. Your
            reports live on your device, not on our servers. This policy explains, in plain English,
            exactly what leaves your device, where it goes, why, and what happens to it.
          </p>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">The short version</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="text-zinc-300">Your reports stay on your device.</span> Reports,
                photos, voice recordings, signatures, GPS locations, and PDFs are stored only on your
                phone. We keep no copy and have no ability to access or recover them.
              </li>
              <li>
                <span className="text-zinc-300">No account, no tracking.</span> The current version
                has no account, no sign-in, no advertising, no analytics, and no third-party tracking.
              </li>
              <li>
                <span className="text-zinc-300">Cloud AI sends your report text, for one purpose.</span>{" "}
                When Cloud AI is on (the default) and you are online, the text of your report is sent
                over an encrypted connection solely to structure it into a report and return it to
                your device.
              </li>
              <li>
                <span className="text-zinc-300">Audio is platform-specific.</span> On iPhone, your
                audio never leaves your device; speech-to-text runs on the phone itself. On Android,
                when Cloud AI is on and you are online, your voice recording is sent to our
                transcription provider solely to convert it to text; otherwise Android&apos;s built-in
                speech recognition is used (details below).
              </li>
              <li>
                <span className="text-zinc-300">Our server stores nothing.</span> Our processing
                server is stateless: it keeps no copies and does not log the content of requests.
              </li>
              <li>
                <span className="text-zinc-300">No training.</span> Our AI providers do not use your
                content to train or improve their models (see the AI providers section).
              </li>
              <li>
                <span className="text-zinc-300">We do not sell your data</span> and do not use it for
                advertising. Ever.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">What stays on your device</h2>
            <p>
              Everything you create in the app is stored locally on your phone and is not collected by
              us: your reports and their fields, the voice recordings you make, the photos you attach,
              the signatures you capture, the GPS location stamped into a report, the generated PDFs,
              and your app settings. The report&apos;s integrity layer (timestamp, GPS, signature,
              preserved recording, transcript, app version, device model) is written into your report
              on your device and is not transmitted to us. There is no account and no sign-in in the
              current version of the app.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">What leaves your device, and why</h2>
            <p>
              The app uses AI to turn your spoken or typed words into a structured report. What leaves
              your device depends on your platform and your settings.
            </p>
            <p className="mt-3">
              On iPhone, your audio never leaves your device; speech-to-text runs on the phone itself.
              On Android, when Cloud AI is on and you are online, your voice recording is sent over an
              encrypted connection to our transcription provider (Groq) solely to convert it to text;
              transcription requests are not retained by default and may be temporarily logged by the
              provider for up to 30 days solely for troubleshooting or abuse investigation. When Cloud
              AI is off or you are offline, Android instead transcribes with the device&apos;s built-in
              speech recognition (see the on-device section below). On both platforms, only when Cloud
              AI is on and you are online, the resulting text is sent to be structured into your report.
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>
                <span className="text-zinc-300">On iPhone (Cloud AI on, online)</span>: speech-to-text
                runs on the phone and your audio never leaves the device. The app sends the following,
                and only the following, over HTTPS to our stateless processing server (a Cloudflare
                Worker), which forwards it to Google Gemini: your report text (the transcript), the
                date, and the app&apos;s static report template. A structured report comes back and is
                saved on your device. Never sent from iPhone: your audio recordings, your GPS
                location, your signature, your photos, your device identifier, or any account
                information (there is no account).
              </li>
              <li>
                <span className="text-zinc-300">On Android (Cloud AI on, online)</span>: to convert
                your voice to text, the app sends your voice recording over an encrypted connection to
                our processing server, which forwards it to our transcription provider (Groq) solely
                to transcribe it. The resulting text then follows the same path as on iPhone: text,
                date, and static template to Google Gemini for structuring, and the structured report
                returns to your device. Never sent from Android: your GPS location, your signature,
                your photos, your device identifier, or any account information.
              </li>
            </ul>
            <p className="mt-3">
              On both platforms, the report text can incidentally contain names, companies, or other
              details you spoke or typed. It is sent solely to build your report and is returned to
              your device. We do not sell it and do not use it for advertising. Our App Store privacy
              label reflects this: the report text sent for cloud processing is declared as Other
              Data, used for App Functionality, not linked to your identity, and not used for
              tracking. We do not track.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">The AI providers we use</h2>
            <p>
              These are the only third parties that can receive your content in the current version of
              the app, what each one does, and what each one keeps:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>
                <span className="text-zinc-300">Cloudflare</span> operates our stateless processing
                server (a Cloudflare Worker). It relays your request to the AI provider and returns
                the result. It keeps no copies, does not store or log the content of requests (only
                operational metadata such as timestamps), and applies per-IP rate limiting to prevent
                abuse. The AI providers&apos; API keys live only on this server; they are never in the
                app.
              </li>
              <li>
                <span className="text-zinc-300">Google (Gemini API, paid tier)</span> structures your
                report text into a report, on both platforms.
              </li>
              <li>
                <span className="text-zinc-300">Groq</span> transcribes your voice recording into
                text, on Android only.
              </li>
            </ul>
            <p className="mt-3">
              On retention and training: We use Google&apos;s paid Gemini API, whose terms state that
              Google does not use API prompts or responses to train or improve its models. Google may
              retain prompts and responses for a limited period solely to detect abuse and enforce its
              use policies, and Groq may temporarily log requests for up to 30 days only to
              troubleshoot errors or investigate suspected abuse. Neither provider retains your
              content beyond these limited purposes, and neither uses it for training or advertising.
              Our own server stores nothing and does not log the content of requests.
            </p>
            <p className="mt-3">
              There is no other third-party AI, no data broker, and no advertising network involved.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">On-device mode and working offline</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="text-zinc-300">On iPhone</span>, you can switch off Cloud AI in
                Settings and run the AI entirely on your phone (On-device mode, available on iPhone 15
                Pro or newer with Apple Intelligence). In On-device mode nothing leaves your device at
                all. On-device mode also runs automatically when you are offline on a supported
                iPhone. On-device AI is fully private but less accurate, so review your report before
                signing.
              </li>
              <li>
                <span className="text-zinc-300">On Android</span>, when Cloud AI is off or you are
                offline, your voice is transcribed by Android&apos;s built-in speech recognition
                instead of our provider. On modern Android versions this runs on the device; on some
                older devices, Android&apos;s speech service may process audio under Google&apos;s or
                your device maker&apos;s policies, which we do not control. You can always build,
                edit, sign, and export reports by hand, online or offline.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Retention and deletion</h2>
            <p>
              All of your report data lives only on your device; we keep no copy on any server.
              Deleting the app deletes everything in it: your reports, photos, recordings, and PDFs go
              with it, and we cannot recover any of it. You are responsible for backups, so export or
              back up any report you need to keep before deleting the app or replacing your device.
              Because your content never reaches our servers, there is nothing server-side for us to
              retain, and nothing for us to delete or hand over.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Permissions we use</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="text-zinc-300">Microphone &amp; Speech Recognition</span>: to record
                your spoken report and, on iPhone, transcribe it on the device. On Android the
                recording is transcribed by our provider when Cloud AI is on and you are online, or
                by Android&apos;s built-in speech recognition otherwise (see above).
              </li>
              <li>
                <span className="text-zinc-300">Camera &amp; Photos</span>: to attach jobsite photos
                to a report, stored only on your device.
              </li>
              <li>
                <span className="text-zinc-300">Location</span>: to stamp a finished report with where
                it was created and, if you use it, to look up local weather. Location is stored in
                your report on your device and is not sent to us.
              </li>
            </ul>
            <p className="mt-3">
              Every permission is optional. You can decline any of them and still use the app; the
              related feature simply won&apos;t be available.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Weather</h2>
            <p>
              If you use the weather auto-fill, the app sends your approximate location to a weather
              service solely to retrieve current conditions for your report. On iPhone this is
              Apple&apos;s WeatherKit, handled by Apple under its own privacy policy. Weather lookups
              are used only to fill in the weather fields of your report and are not stored by us.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Sharing is your choice</h2>
            <p>
              When you sign a report, the app creates a PDF and opens your device&apos;s share sheet
              so you can send it however you like (email, messages, files). What you send, and to
              whom, is entirely up to you. We are not involved in that transfer and are not
              responsible for what happens to a report after you send it.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Your privacy rights</h2>
            <p>
              We do not sell or share personal information as those terms are defined by the
              California Consumer Privacy Act (CCPA/CPRA), and we do not use personal information for
              targeted advertising or profiling. You will not be discriminated against for exercising
              any privacy right.
            </p>
            <p className="mt-3">
              Because your reports never reach our servers, your data is under your exclusive control
              on your device; in most cases there is nothing we hold to access, correct, or delete. If
              you believe we hold any personal information about you (for example, an email you sent
              us), we voluntarily extend access, correction, and deletion rights to everyone,
              regardless of where you live. Email{" "}
              <a href="mailto:info@weighanchor.com" className="text-orange-500 hover:text-orange-400">
                info@weighanchor.com
              </a>{" "}
              with the subject line &quot;Privacy Request&quot; and we will respond within the time
              required by applicable law. We may need to verify your identity before acting on a
              request.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Washington health data</h2>
            <p>
              Daily Report is a professional construction documentation tool intended for use in a
              business and employment context. It is not designed to collect health information, and
              we do not collect, sell, or share consumer health data. If you choose to dictate or type
              health-related information into a report (for example, describing a jobsite injury),
              that information is part of your report: it belongs to you, it stays on your device, and
              it is not collected, stored, or retained by Weigh Anchor. We do not create, extract, or
              store any biometric identifier or voiceprint from your voice; on iPhone your audio never
              leaves the device, and on Android it is transcribed transiently as described above and
              is not used to identify anyone. Washington residents with questions about the My Health
              My Data Act can contact us at{" "}
              <a href="mailto:info@weighanchor.com" className="text-orange-500 hover:text-orange-400">
                info@weighanchor.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Children</h2>
            <p>
              Daily Report is a professional tool intended for users 18 and older and is not directed
              to children. We do not knowingly collect personal information from anyone under 18, and
              the Children&apos;s Online Privacy Protection Act (COPPA) does not apply to the app. If
              you believe a minor has provided us information, contact us at{" "}
              <a href="mailto:info@weighanchor.com" className="text-orange-500 hover:text-orange-400">
                info@weighanchor.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Future features</h2>
            <p>
              Everything in this policy describes the current version of the app. We may later offer
              optional features such as accounts, cloud backup and sync, team sharing, and paid
              subscriptions billed through Apple or Google. If and when we do, those features will be
              opt-in, we will name any additional service providers involved, and we will update this
              policy before any such feature collects anything. Nothing in the current version of the
              app creates an account or stores your reports on our servers or anyone else&apos;s.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">International users</h2>
            <p>
              We operate in the United States, and requests from the app are processed in the United
              States and in the locations where our service providers operate. The app is intended for
              users in the United States, and we do not target the European Union. Data protection
              laws in the United States may differ from those in your country.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Changes</h2>
            <p>
              We may update this policy to reflect changes in our practices, technology, or legal
              requirements. We will post the updated policy with a new effective date, and for
              material changes we will make reasonable efforts to provide notice (for example, in the
              app or on this site). Your continued use after the changes take effect is your
              acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Contact</h2>
            <p>
              Weigh Anchor LLC, Bellevue, Washington. Questions about privacy or the app? Email{" "}
              <a href="mailto:info@weighanchor.com" className="text-orange-500 hover:text-orange-400">
                info@weighanchor.com
              </a>
              . For privacy requests, please include &quot;Privacy Request&quot; in the subject line.
            </p>
          </div>

          <p className="text-sm text-zinc-600">
            Daily Report is published by Weigh Anchor LLC, a Service-Disabled Veteran-Owned Small
            Business. See also our{" "}
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
