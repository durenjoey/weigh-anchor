import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import DarkNav from "@/components/DarkNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Daily Report Terms of Use | Weigh Anchor",
  description:
    "The terms for using Daily Report. The app runs on your device with no account, you own your reports, and you are the author of record on everything you send.",
  alternates: {
    canonical: "/products/daily-report/terms",
  },
};

export default function DailyReportTermsPage() {
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

        <h1 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">Terms of Use</h1>
        <p className="mt-3 text-sm text-zinc-500 uppercase tracking-widest font-mono">
          Daily Report &middot; Effective June 19, 2026
        </p>

        <div className="mt-10 space-y-8 text-zinc-400 leading-relaxed">
          <p className="text-lg text-zinc-300">
            These Terms are an agreement between you and Weigh Anchor LLC for the use of the Daily
            Report iOS app. By downloading or using the app, you agree to these Terms and to our{" "}
            <Link href="/products/daily-report/privacy" className="text-orange-500 hover:text-orange-400">
              Privacy Policy
            </Link>
            . If you do not agree, do not use the app.
          </p>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">1. What Daily Report is</h2>
            <p>
              Daily Report helps construction professionals create daily reports. You speak or type
              what happened on a jobsite and the app uses AI to organize your words into a structured
              report you can review, edit, sign, and export as a PDF. In this version the app runs on
              your device with no account and no login.
            </p>
            <p className="mt-3">
              The report structuring uses AI. When you are online (the default), the transcript of
              your words is sent to a cloud AI, currently Google Gemini, solely to process it into a
              structured report and return it to you; we do not sell your transcript or use it for
              advertising. When you are offline, or when you switch to on-device AI, the report is
              built entirely on your iPhone and nothing leaves the device. Either way, your recordings,
              photos, signature, GPS, and the report itself stay on your device. See the Privacy Policy
              for the full data picture.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">2. You own your reports and content</h2>
            <p>
              The reports, PDFs, text, recordings, photos, and signatures you create with the app
              belong to you (or to the employer or entity you create them for). We claim no ownership
              of them. We do not sell your content, and we do not use it for advertising. Cloud backup,
              sync, and team sharing are a future, separate,
              opt-in paid feature and are not part of this version, so in this version your reports are
              not stored on any Weigh Anchor server.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">3. You are the author. Review every report before you send it.</h2>
            <p>
              This is the most important term in this agreement. The AI in Daily Report is a drafting
              aid. <span className="text-zinc-300">You are the author of record and the final
              authority on every report you send.</span>
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>
                Before you send, share, sign, or submit any report or PDF, you are responsible for
                reviewing it and confirming that it is accurate and complete.
              </li>
              <li>
                If a draft does not say what you mean, edit it until it does, or do not send it. When
                you send a report, you are adopting its contents as your own.
              </li>
              <li>
                We are not responsible for the contents of any report you choose to send, for any
                decision made based on it, or for any consequence of an error you did not catch.
              </li>
            </ul>
            <p className="mt-3">
              AI can misunderstand speech, invent details that were not said, omit things that were
              said, or format information incorrectly. Treat every draft as a starting point that you,
              the human, must verify.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">4. AI disclaimer</h2>
            <p>
              Transcription, summarization, and organization in the app are machine-assisted and may
              contain errors. They are produced by automated systems, not by a human professional, and
              they are not guaranteed to be accurate, complete, or fit for any particular purpose. You
              must verify the result before relying on it.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">5. Not professional or legal advice</h2>
            <p>
              The app is a documentation tool. It does not provide legal, safety, engineering,
              insurance, accounting, or other professional advice, and using it does not create any
              professional relationship between you and Weigh Anchor. You remain solely responsible for
              compliance with all laws, codes, regulations, and safety requirements that apply to your
              work and your reports.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">6. A credible record, not a guarantee of admissibility</h2>
            <p>
              Daily Report is designed to produce credible, well-documented records, with an integrity
              layer (timestamp, GPS, signature, preserved recording, transcript, app version, and
              device model) intended to support the authenticity and reliability of a report. This
              describes how the app is designed. It is not a promise that any report will be admitted
              into evidence, accepted by any court, arbitrator, or agency, or treated as conclusive in
              any proceeding. We make no representation regarding the admissibility, evidentiary weight,
              or legal effect of any report. If you need a record for a legal proceeding, consult a
              qualified attorney.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">7. Acceptable use</h2>
            <p>You agree to use the app only for lawful purposes. You agree not to:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Use the app for any illegal, fraudulent, or deceptive purpose, including creating a report you know to be false.</li>
              <li>Record content you have no right to capture, or that violates the privacy or rights of another person.</li>
              <li>Reverse engineer, decompile, or attempt to derive the source code of the app, except where that restriction is prohibited by law.</li>
              <li>Use our name, logo, SDVOSB status, or branding without our prior written permission.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">8. Our intellectual property</h2>
            <p>
              The app and all of its software, designs, report templates, the integrity layer, and the
              underlying technology are owned by Weigh Anchor LLC or its licensors. &quot;Daily
              Report,&quot; &quot;Weigh Anchor,&quot; and our logos are our trademarks. We grant you a
              limited, personal, non-exclusive, revocable license to install and use the app for your
              own business documentation. For clarity: our IP is the software. The reports you create
              with it are yours, as described in Section 2.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">9. Disclaimers</h2>
            <p>
              The app is provided &quot;as is&quot; and &quot;as available&quot; without warranties of
              any kind. To the fullest extent permitted by law, Weigh Anchor disclaims all warranties,
              express or implied, including merchantability, fitness for a particular purpose (including
              any legal, evidentiary, regulatory, or safety purpose), and the accuracy or reliability of
              any AI output, transcription, or summary. AI systems are probabilistic and can produce
              incorrect or fabricated output, and you are responsible for reviewing all output before
              relying on it.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">10. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, Weigh Anchor LLC will not be liable for any
              indirect, incidental, special, consequential, or punitive damages, or for any loss of
              profits, data, or business, arising out of or related to your use of the app, any report
              or output (including any error in it or any content you chose to send), or any decision
              made based on a report. Our total aggregate liability arising out of or related to the
              app or these Terms will not exceed the greater of one hundred U.S. dollars ($100) or the
              total amount you paid us for the app in the twelve months before the event giving rise to
              the liability.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">11. Third-party services</h2>
            <p>
              The app relies on third-party providers, including Apple and Google (Google Gemini for
              cloud AI report structuring). Your use of features that depend on these providers may also
              be subject to their terms, and we are not responsible for the acts, omissions, or
              availability of third-party services. When the app shares a PDF, it does so through your
              device&apos;s share sheet to the destination you choose, and we are not responsible for
              what happens to a report after you send it.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">12. Governing law</h2>
            <p>
              These Terms are governed by the laws of the State of Washington, without regard to its
              conflict-of-laws rules. Any action arising out of or relating to these Terms or the app
              will be brought exclusively in the state or federal courts located in King County,
              Washington. Before starting any formal proceeding, you agree to contact us first and to
              attempt in good faith to resolve the dispute for at least 30 days.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">13. Apple</h2>
            <p>
              If you obtained the app through the Apple App Store, you acknowledge that these Terms are
              between you and Weigh Anchor LLC, not with Apple, and that Apple is not responsible for the
              app or any claims relating to it. Apple is a third-party beneficiary of these Terms solely
              for the purpose of enforcing this provision.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">14. Changes</h2>
            <p>
              We may update these Terms. We will post the updated Terms with a new effective date above.
              Your continued use of the app after the changes take effect is your acceptance of the
              updated Terms.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">15. Contact</h2>
            <p>
              Questions about these Terms? Email{" "}
              <a href="mailto:info@weighanchor.com" className="text-orange-500 hover:text-orange-400">
                info@weighanchor.com
              </a>
              .
            </p>
          </div>

          <p className="text-sm text-zinc-600">
            Daily Report is published by Weigh Anchor LLC, a Service-Disabled Veteran-Owned Small
            Business. See also our{" "}
            <Link href="/products/daily-report/privacy" className="text-zinc-400 underline hover:text-white">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
