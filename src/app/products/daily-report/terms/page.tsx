import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import DarkNav from "@/components/DarkNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Daily Report Terms of Use | Weigh Anchor",
  description:
    "The terms for using Daily Report on iOS and Android. Your reports live on your device, you own them, and you are the author of record on everything you send.",
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
          Daily Report &middot; Effective July 2, 2026
        </p>

        <div className="mt-10 space-y-8 text-zinc-400 leading-relaxed">
          <p className="text-lg text-zinc-300">
            These Terms of Use are a binding agreement between you and Weigh Anchor LLC, a Washington
            limited liability company based in Bellevue, Washington, for the use of the Daily Report
            mobile app for iOS and Android and any optional cloud features we may later offer
            (together, the &quot;Service&quot;). Daily Report is a Construction Copilot product. By
            downloading, installing, or using the Service, you agree to these Terms and to our{" "}
            <Link href="/products/daily-report/privacy" className="text-orange-500 hover:text-orange-400">
              Privacy Policy
            </Link>
            . If you do not agree, do not use the Service and delete the app from your device. If you
            are accepting these Terms on behalf of an employer, company, or other legal entity, you
            represent that you have the authority to bind that entity, and &quot;you&quot; refers to
            that entity.
          </p>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">1. What Daily Report is</h2>
            <p>
              Daily Report helps construction professionals create daily reports. You speak or type
              what happened on a jobsite, and the app uses AI to organize your words into a structured
              daily report that you can review, edit, sign, and export as a PDF. A finished report can
              carry an integrity layer (timestamp, GPS location, your signature, the preserved voice
              recording, the transcript, the app version, and the device model) intended to make your
              reports more credible and harder to dispute. It is a design goal, not a legal guarantee;
              see Section 7.
            </p>
            <p className="mt-3">
              The report structuring uses AI. When Cloud AI is on (the default) and you are online,
              the text of your report is sent over an encrypted connection through our stateless
              server to a cloud AI (Google Gemini, paid API tier) solely to structure it into a report
              and return it to your device. On iPhone, speech-to-text runs on the device and your
              audio never leaves it; on Android, your voice recording is sent to our transcription
              provider (Groq) solely to convert it to text, and it is not retained by default (the
              provider may temporarily log requests for up to 30 days solely for troubleshooting or
              abuse investigation). Our server stores nothing and does not log the content of
              requests, and neither provider uses your content to train its models. On iPhone you can
              switch to on-device mode in Settings, which runs the AI entirely on your device;
              on-device mode also runs automatically when you are offline on a supported iPhone. We do
              not sell your content and do not use it for advertising. See the Privacy Policy for the
              full data picture.
            </p>
            <p className="mt-3">
              The current version of the app has no account and no sign-in. Daily Report is made in
              America by a veteran-owned company.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">2. Eligibility and future accounts</h2>
            <p>
              You must be at least 18 years old and able to form a binding contract to use the
              Service. The Service is intended for business and professional use, not for personal,
              family, or household use. The current version of the app does not have accounts. If we
              later offer optional cloud features that require an account, you will be responsible for
              providing accurate account information, keeping your credentials confidential, and all
              activity under your account, and you should notify us promptly at{" "}
              <a href="mailto:info@weighanchor.com" className="text-orange-500 hover:text-orange-400">
                info@weighanchor.com
              </a>{" "}
              of any suspected unauthorized use. We will never ask you for your password by email,
              text, phone, or any other channel.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">3. You own your reports and content</h2>
            <p>
              The daily reports, PDFs, text, recordings, photos, signatures, and other content you
              create with the Service belong to you (or to the employer or entity you create them
              for). We claim no ownership of them. You grant us only the limited, non-exclusive
              license we need to operate the Service for you: in the current version, that means
              processing your content through the AI providers named in the Privacy Policy, at your
              direction, so the app can build your report and return it to you. If you later turn on a
              future cloud feature (such as backup, sync, or team sharing), the same limited license
              would cover storing and sharing your content as that feature requires. This license
              exists only to deliver the Service to you, and it ends when you delete the content,
              except for records we are legally required to keep for a limited time. We do not sell
              your content, we do not use it for advertising, and we do not permit our AI providers to
              use it to train their models.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">4. You are the author. Review every report before you send it.</h2>
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
                If a draft does not say what you mean, edit it until it does, or do not send it.
                Sending a report is your decision and your statement. When you send a report, you are
                adopting its contents as your own.
              </li>
              <li>
                We are not responsible or liable for the contents of any report you choose to send,
                for any decision made based on it, or for any consequence of an error you did not
                catch before sending.
              </li>
            </ul>
            <p className="mt-3">
              The app may make mistakes. AI can misunderstand speech, invent details that were not
              said, omit things that were said, or format information incorrectly. Treat every draft
              as a starting point that you, the human, must verify.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">5. AI and translation disclaimer</h2>
            <p>
              Transcription, summarization, organization, and any translation in the Service are
              machine-assisted and may contain errors. They are produced by automated systems, not by
              a human professional, and they are not guaranteed to be accurate, complete, or fit for
              any particular purpose. The app converts your speech to text and helps organize it; the
              result can contain transcription errors and AI-generated content that does not match
              what you said or meant, and you must verify it (Section 4).
            </p>
            <p className="mt-3">
              If and when the Service offers translation of Spanish-language voice input into an
              English-language report, any such translation is machine-assisted and is NOT a certified
              human translation. It may contain errors, including errors that change meaning. The
              original Spanish transcript and the original audio recording are preserved as the source
              of record; where there is any question, doubt, or dispute, the original Spanish
              transcript and audio control, not the English translation. You are responsible for
              verifying the accuracy of any translated report before relying on it or sending it, with
              particular attention to anything involving safety, hazards, instructions, quantities,
              dates, money, or contractual terms. If a precise or legally operative translation is
              required, obtain a certified human translation; the Service does not provide one.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">6. Not professional or legal advice</h2>
            <p>
              The Service is a documentation tool. It does not provide legal, safety, engineering,
              insurance, accounting, or other professional advice, and using it does not create any
              professional relationship between you and Weigh Anchor. Nothing the app generates is a
              substitute for the judgment of a qualified professional or for your own obligations
              under contracts, codes, regulations, and safety requirements. You remain solely
              responsible for compliance with all laws and standards that apply to your work and your
              reports.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">7. A credible record, not a guarantee of admissibility</h2>
            <p>
              Daily Report is designed to produce credible, well-documented records, with an integrity
              layer intended to support the authenticity and reliability of a report. This describes
              how the app is designed. It is not a promise that any report will be admitted into
              evidence, accepted by any court, arbitrator, agency, or other tribunal, or treated as
              conclusive in any proceeding. Whether a record is admissible or persuasive depends on
              the rules of the forum, the facts of the matter, the conduct of the parties, and many
              factors outside our control. We make no representation or warranty regarding the
              admissibility, evidentiary weight, or legal effect of any report. If you need a record
              for a legal proceeding, consult a qualified attorney.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">8. Your records live on your device. Keeping them is your responsibility.</h2>
            <p>
              Your reports, photos, recordings, and PDFs are stored only on your device. We keep no
              copy and have no ability to recover them. You are solely responsible for exporting,
              backing up, and preserving any report you may need for a project record, claim, audit,
              or legal proceeding, including compliance with any document-retention or litigation-hold
              obligation that applies to you. Deleting the app, losing the device, or a device failure
              will permanently destroy your reports, and Weigh Anchor has no liability for that loss.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">9. Pricing and future subscriptions</h2>
            <p>
              The app is free in its current version. Optional paid plans (for example, cloud backup,
              sync, and team features) may be offered later as subscriptions. Any purchase would be
              processed by Apple (App Store) or Google (Google Play) through in-app purchase; your
              payment and the subscription terms would be handled by the applicable app store, and its
              terms apply to the transaction. We do not receive or store your full payment card
              details. For any subscription we offer, we commit to honest billing: the price and
              billing period shown clearly before you buy; a plain disclosure that subscriptions renew
              automatically unless you cancel at least 24 hours before the period ends; cancellation
              anytime in your Apple ID or Google Play settings, effective at the end of the current
              paid period; no price increase without the consent the app store requires; and refunds
              handled by Apple or Google under their policies. Free trials, where offered, convert to
              a paid subscription at the end of the trial unless you cancel before it ends, with the
              conversion terms disclosed up front.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">10. Acceptable use</h2>
            <p>You agree to use the Service only for lawful purposes. You agree not to:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Use the Service for any illegal, fraudulent, deceptive, or unauthorized purpose, including creating a report you know to be false.</li>
              <li>Upload or record content you have no right to capture, or that violates the privacy or rights of another person (for example, recording someone where you are not permitted to).</li>
              <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the Service, except where that restriction is prohibited by law.</li>
              <li>Copy, modify, distribute, sell, sublicense, rent, or create derivative works from the Service or its software (this applies to our software, not to your own reports and content).</li>
              <li>Use any robot, scraper, or automated means to access the Service in a way that burdens or interferes with it.</li>
              <li>Attempt to gain unauthorized access to any account, system, or network, or interfere with the security or integrity of the Service.</li>
              <li>Introduce viruses, malware, or other harmful code, or remove or alter any copyright, trademark, or proprietary notice.</li>
              <li>Use our name, logo, SDVOSB status, or branding without our prior written permission.</li>
            </ul>
            <p className="mt-3">
              We may suspend or terminate access for conduct that violates this Section, with or
              without notice, and may report unlawful activity to authorities.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">11. Our intellectual property</h2>
            <p>
              The Service, including all software, designs, report templates, the integrity layer, and
              the underlying technology, is owned by Weigh Anchor LLC or its licensors and is
              protected by United States and international intellectual property laws. &quot;Daily
              Report,&quot; &quot;Construction Copilot,&quot; &quot;Weigh Anchor,&quot; and our logos
              are our trademarks. We grant you a limited, personal, non-exclusive, non-transferable,
              revocable license to install and use the app for your own business documentation
              purposes, subject to these Terms. We reserve all rights not expressly granted. For
              clarity: our IP is the software. The reports and content you create with it are yours,
              as described in Section 3.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">12. Disclaimers and warranties</h2>
            <p>
              The Service is provided &quot;as is&quot; and &quot;as available&quot; without
              warranties of any kind, express or implied. To the fullest extent permitted by law,
              Weigh Anchor LLC disclaims all warranties, including merchantability, fitness for a
              particular purpose (including any legal, evidentiary, regulatory, or safety purpose),
              non-infringement and title, the accuracy, completeness, or timeliness of any content,
              transcription, summary, or translation the Service produces, that the Service will be
              uninterrupted, secure, timely, or error-free, that defects will be corrected, or that AI
              output will be accurate or reliable. AI systems are probabilistic and can produce
              incorrect or fabricated output, and you are responsible for reviewing all output before
              relying on it (Sections 4 and 5). Some jurisdictions do not allow the exclusion of
              certain warranties, so some of the above exclusions may not apply to you.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">13. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Weigh Anchor LLC, its owners,
              members, employees, contractors, agents, and affiliates will not be liable for any
              indirect, incidental, special, consequential, punitive, or exemplary damages, or for any
              loss of profits, revenue, data, goodwill, or business opportunity, arising out of or
              related to your use of or inability to use the Service; any report, PDF, transcription,
              translation, or other output (including any error in it or any content you chose to
              send); any decision, action, dispute, claim, fine, or loss based on a report or on the
              Service; any determination regarding the admissibility or weight of a report; loss of or
              unauthorized access to your content or data, including loss described in Section 8; or
              any interruption, failure, or security incident affecting the Service or any third-party
              service it relies on.
            </p>
            <p className="mt-3">
              In no event shall Weigh Anchor LLC&apos;s total aggregate liability arising out of or
              related to the Service or these Terms exceed the greater of (a) one hundred U.S. dollars
              ($100) or (b) the total amount you paid us for the Service in the twelve (12) months
              preceding the event giving rise to the liability. These limitations apply even if a
              remedy fails of its essential purpose and even if we were advised of the possibility of
              such damages. Some jurisdictions do not allow the limitation or exclusion of certain
              damages, so some of the above may not apply to you; in those jurisdictions, our
              liability is limited to the maximum extent permitted by law.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">14. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Weigh Anchor LLC, its owners, members,
              employees, contractors, agents, and affiliates from and against any and all claims,
              liabilities, damages, losses, costs, and expenses (including reasonable attorneys&apos;
              fees) arising from or related to the content of any report you create, send, share,
              sign, or submit; your use of or access to the Service; your violation of these Terms;
              your violation of any law or of the rights of any third party, including privacy,
              recording, or labor-related rights; or any data or content you submit through the
              Service. This obligation survives termination of these Terms and your use of the
              Service.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">15. Third-party services</h2>
            <p>
              The Service relies on third-party providers, currently including Apple, Google
              (including the paid Google Gemini API for cloud report structuring), Cloudflare (which
              runs our stateless processing server), and, on Android, Groq (voice transcription). A
              future cloud tier would add providers, which we would name in the Privacy Policy before
              launch. Your use of features that depend on these providers may also be subject to their
              terms, and we are not responsible for the acts, omissions, content, or availability of
              third-party services. When the app shares a PDF, it does so through your device&apos;s
              share sheet to the destination you choose, and we are not responsible for what happens
              to a report after you send it.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">16. Termination</h2>
            <p>
              You may stop using the Service at any time and may delete the app from your device (see
              Section 8: deleting the app permanently deletes your reports). We may suspend or
              terminate your access to the Service or any part of it, with or without notice, if you
              violate these Terms, if required by law, or if we discontinue the Service. Termination
              does not relieve you of obligations accrued before termination. Sections 3, 4, 5, 6, 7,
              8, and 11 through 18 survive termination.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">17. Governing law and dispute resolution</h2>
            <p>
              These Terms, and any dispute arising out of or relating to them or to the Service, are
              governed by the laws of the State of Washington, without regard to its conflict-of-laws
              rules. Before starting any formal proceeding, you agree to contact us at{" "}
              <a href="mailto:info@weighanchor.com" className="text-orange-500 hover:text-orange-400">
                info@weighanchor.com
              </a>{" "}
              with a description of the dispute and to attempt in good faith to resolve it for at
              least 30 days. Any action or proceeding arising out of or relating to these Terms or the
              Service shall be brought exclusively in the state or federal courts located in King
              County, Washington, and you consent to the personal jurisdiction and venue of those
              courts. To the extent permitted by law, any dispute resolution will be conducted only on
              an individual basis and not as a class, consolidated, or representative action.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">18. General provisions</h2>
            <p>
              <span className="text-zinc-300">Changes to these Terms.</span> We may modify these Terms
              from time to time. Material changes take effect when we post the updated Terms with a
              new effective date, and, where a change is significant, we will make reasonable efforts
              to provide notice (for example, in the app or on this site). Your continued use of the
              Service after the changes take effect is your acceptance of the updated Terms; if you do
              not agree, stop using the Service.
            </p>
            <p className="mt-3">
              <span className="text-zinc-300">Everything else.</span> These Terms and the Privacy
              Policy are the entire agreement between you and Weigh Anchor LLC regarding the Service
              and supersede prior agreements on that subject. If any provision is held invalid or
              unenforceable, it will be limited or removed to the minimum extent necessary and the
              rest will remain in full effect. Our failure to enforce a provision is not a waiver. You
              may not assign these Terms without our written consent; we may assign them, for example
              in connection with a merger, acquisition, or sale of assets. We are not liable for
              delays or failures due to causes beyond our reasonable control. The Service is operated
              from the United States and is intended for use in the United States, and you agree to
              comply with all applicable United States export control and sanctions laws in your use
              of the Service. These Terms are for the benefit of you and Weigh Anchor LLC only, except
              as stated in the next paragraph. Section headings are for convenience only.
            </p>
            <p className="mt-3">
              <span className="text-zinc-300">Apple and Google.</span> If you obtained the app through
              the Apple App Store or Google Play, you acknowledge that these Terms are between you and
              Weigh Anchor LLC, not with Apple or Google, and that Apple and Google are not
              responsible for the app or for any claims relating to it. Apple and its subsidiaries are
              third-party beneficiaries of these Terms solely for the purpose of enforcing this
              provision as to App Store distribution.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">19. Contact</h2>
            <p>
              Weigh Anchor LLC, Bellevue, Washington. Questions, concerns, or notices regarding these
              Terms? Email{" "}
              <a href="mailto:info@weighanchor.com" className="text-orange-500 hover:text-orange-400">
                info@weighanchor.com
              </a>
              . For legal notices, please include &quot;Legal - Daily Report Terms&quot; in the
              subject line.
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
