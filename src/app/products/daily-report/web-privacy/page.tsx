import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import DarkNav from "@/components/DarkNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Daily Report Web & Cloud Accounts Privacy Policy | Weigh Anchor",
  description:
    "What the Daily Report web app and cloud accounts collect, store, and send, who at your company can see it, which service providers process it, how long we keep it, and how to ask us to delete it. We never sell your data.",
  alternates: {
    canonical: "/products/daily-report/web-privacy",
  },
};

// DRAFT MARKER. Every <Confirm> is a fact that could not be verified from the code and must be
// settled (and the marker removed) before this page is published. Remove the draft banner too.
function Confirm({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-sm text-amber-400">[CONFIRM: {children}]</span>
  );
}

export default function DailyReportWebPrivacyPage() {
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

        <div className="mb-8 rounded border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-300">
          Draft for review. Not yet in effect. Items marked [CONFIRM] are unverified.
        </div>

        <h1 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">
          Daily Report Web &amp; Cloud Accounts Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-zinc-500 uppercase tracking-widest font-mono">
          Daily Report Web &middot; Effective <Confirm>effective date</Confirm>
        </p>

        <div className="mt-10 space-y-8 text-zinc-400 leading-relaxed">
          <p className="text-lg text-zinc-300">
            Daily Report is a Construction Copilot product published by Weigh Anchor LLC, a Washington
            limited liability company based in Snohomish, Washington. This policy covers the Daily
            Report web app at daily.constructioncopilot.com and Daily Report cloud accounts, including
            company workspaces and cloud backup, wherever you sign in to them. It does not replace the{" "}
            <Link
              href="/products/daily-report/privacy"
              className="text-orange-500 hover:text-orange-400"
            >
              mobile app privacy policy
            </Link>
            , which still describes the phone apps used on their own, without an account. Unlike the
            phone apps used that way, a cloud account stores your data on our servers. This policy
            explains, in plain English, exactly what we collect, where it goes, who can see it, how
            long we keep it, and why.
          </p>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">The short version</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="text-zinc-300">Signing in creates an account.</span> Accounts use
                Clerk and your email address. Your name, if you add one, is shown to people in your
                company.
              </li>
              <li>
                <span className="text-zinc-300">Synced work is stored on our servers.</span> When
                you use cloud backup or a company workspace, your projects, reports, photos, voice
                recordings, signatures, locations, and signed PDFs are stored on our servers
                (Cloudflare) and linked to your account and your company.
              </li>
              <li>
                <span className="text-zinc-300">Your company can see company work.</span> Company
                admins can see every project and report in the company. Other members see the
                projects they have been given access to.
              </li>
              <li>
                <span className="text-zinc-300">AI sees your words to build your report.</span>{" "}
                Your recordings and report text are sent to our AI providers to transcribe and
                structure them. These requests are not tied to your account.
              </li>
              <li>
                <span className="text-zinc-300">We keep records.</span> We record usage of the
                service, and who did what and when, to improve the product and to keep a reliable
                record for you, your company, and us.
              </li>
              <li>
                <span className="text-zinc-300">We do not sell your data</span> and do not use it for
                advertising. Ever.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">What we collect, and why</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="text-zinc-300">Account information</span>: your email address
                (you sign in with a one-time email code), your name if you add it to your profile,
                and the companies you create or join, with each company&apos;s name and your role in
                it. Used to sign you in, to show who wrote and signed each report, and to control
                who can see what.
              </li>
              <li>
                <span className="text-zinc-300">Device records</span>: when you sign in, we register
                a random installation ID for your browser or phone, with its platform (for example,
                &quot;web&quot;), the app version, an optional device label, and when we first and
                last saw it. Used to run sync, to know which device sent what, and to let you remove
                a device.
              </li>
              <li>
                <span className="text-zinc-300">Synced report content</span>: when cloud backup or
                a company workspace is on, the projects and reports you create, with every field in
                them. This includes names, companies, and other details you speak or type, including
                details about other people (for example, visitors, inspectors, or crew). It also
                includes the report&apos;s integrity record: when it was created, the GPS location at
                creation and at signing, the signer&apos;s name and signature, the transcript, the app
                version, and the device model.
              </li>
              <li>
                <span className="text-zinc-300">Files</span>: signed PDFs, photos (with any location
                and timestamp attached to them), voice recordings, and the frozen presentation of a
                signed report, uploaded as part of a cloud backup, plus any photos added to a
                company gallery and any logo added to a company report template.
              </li>
              <li>
                <span className="text-zinc-300">Company workspace content</span>: projects and who
                is assigned to them, tasks, help desk tickets and their messages, and stakeholder
                contacts. Stakeholder contacts can include another person&apos;s name, organization,
                role, email address, phone number, and notes.
              </li>
              <li>
                <span className="text-zinc-300">Activity records</span>: for each change that
                reaches our servers, which account and which device made it, and when. Company
                administration (such as role changes and removals) and the history of tasks,
                stakeholders, and help desk tickets are recorded in the same way. We keep earlier
                revisions of each synced project and report, and a record when one is deleted.
              </li>
              <li>
                <span className="text-zinc-300">Service usage records</span>: for each AI request,
                operational details such as which AI model answered, how long it took, how many
                words (tokens) or seconds of audio it used, what it cost, and whether it failed.
                These records do not contain your report text or your audio.
              </li>
              <li>
                <span className="text-zinc-300">Optional diagnostics</span>: only if you turn it on
                (see below).
              </li>
              <li>
                <span className="text-zinc-300">Support messages</span>: what you write to us and
                the reply email you choose to give.
              </li>
            </ul>
            <p className="mt-3">
              We do not collect payment card numbers in the current version. Paid plans are not yet
              live; when they are, payments will be handled by a payment processor that we will name
              here before we charge anyone <Confirm>payment processor and what billing data we keep</Confirm>.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">What is linked to your account</h2>
            <p>
              Linked to you: your account information, your device records, your company memberships
              and project access, every report, project, file, task, ticket, and stakeholder you create
              or change (each records which account made it), and any support message you send while
              signed in.
            </p>
            <p className="mt-3">
              Not linked to you: AI transcription and report-structuring requests from the web app are
              sent without your account identity. Optional performance diagnostics use a separate
              random diagnostic ID that is not tied to your account, your email, or your company.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">What stays in your browser</h2>
            <p>
              The web app works in your browser first and keeps your work there: your projects,
              reports, settings, and sync state in the browser&apos;s local storage, and your photos,
              voice recordings, and PDFs in the browser&apos;s IndexedDB storage. Clerk keeps your
              sign-in session in browser cookies. We may also cache weather lookups in your browser.
              Anyone with access to your browser profile can see this data, so use your own
              browser profile on a shared computer.
            </p>
            <p className="mt-3">
              Browsers can clear site data on their own, for example when storage runs low, and
              clearing your browser data deletes the local copy. Work that has not been backed up to
              your cloud account cannot be recovered after that. The app asks the browser to keep its
              storage and warns you when it cannot, but you are responsible for exporting anything you
              need to keep.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">What leaves your browser, and why</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="text-zinc-300">Voice to text</span>: when you record, the web app
                sends the recording over an encrypted connection to our server (a Cloudflare Worker),
                which sends it to our transcription provider (Mistral) and returns only the text. Our
                server does not store the audio or the transcript from this request, and does not log
                their content.
              </li>
              <li>
                <span className="text-zinc-300">Building the report</span>: the web app sends your
                report text, the date, and the app&apos;s report instructions through our web host
                (Vercel) to our server, which sends it to Google Gemini to structure into report
                fields. If Google is slow or unavailable, the same request may go to Groq, and then
                to Cerebras, instead. The structured result comes back to your browser. Our server
                does not store the text from this request and does not log its content.
              </li>
              <li>
                <span className="text-zinc-300">Sync and backup</span>: when cloud backup or a
                company workspace is on, your projects, reports, and files are uploaded to our
                servers as described above, and changes made by others in your company are
                downloaded to your browser.
              </li>
              <li>
                <span className="text-zinc-300">Weather</span>: to fill in weather, the app sends the
                project&apos;s location (a place name to look it up, then its coordinates) and the
                report date to Open-Meteo, a weather service.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Service providers (subprocessors)</h2>
            <p>These are the companies that process data for us, what each one does, and what each one receives:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>
                <span className="text-zinc-300">Clerk</span>: accounts, sign-in, sessions, and
                company (organization) membership. Receives your email address, your name if you add
                it, your companies, and your sign-in sessions.
              </li>
              <li>
                <span className="text-zinc-300">Cloudflare</span>: runs our server (Cloudflare
                Workers) and stores our databases (D1) and files (R2). Holds all synced content,
                account-linked records, and service usage records. Our server&apos;s operational logs
                are kept by Cloudflare <Confirm>Cloudflare Workers Logs retention period</Confirm>. AI
                requests may pass through Cloudflare&apos;s AI Gateway on the way to the AI
                provider <Confirm>whether AI Gateway is enabled in production and whether it logs
                request content</Confirm>.
              </li>
              <li>
                <span className="text-zinc-300">Vercel</span>: hosts the web app. Report text sent
                for structuring passes through a Vercel function on its way to our server. Vercel
                receives your IP address to deliver the site and may keep standard request logs under
                its own policy.
              </li>
              <li>
                <span className="text-zinc-300">Mistral</span>: turns voice recordings into text{" "}
                <Confirm>Mistral API retention and training terms for our account</Confirm>.
              </li>
              <li>
                <span className="text-zinc-300">Google (Gemini API)</span>: structures report text
                into a report <Confirm>that our Gemini API use is on the paid tier, and Google&apos;s
                retention and no-training terms for it</Confirm>.
              </li>
              <li>
                <span className="text-zinc-300">Groq</span>: backup route for structuring report text
                when Google is unavailable <Confirm>Groq retention and training terms for our
                account (the mobile policy states up to 30 days of logging for troubleshooting or
                abuse only)</Confirm>.
              </li>
              <li>
                <span className="text-zinc-300">Cerebras</span>: second backup route for structuring
                report text <Confirm>Cerebras retention and training terms for our account</Confirm>.
              </li>
              <li>
                <span className="text-zinc-300">Open-Meteo</span>: weather and place-name lookup.
                Receives the project&apos;s location and the report date, not your account or report.
              </li>
            </ul>
            <p className="mt-3">
              Our server also holds credentials for other AI providers we evaluate. The features
              described in this policy do not send your content to them. If that changes, we will add
              them to this list first. There is no data broker and no advertising network involved.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Who at your company can see what</h2>
            <p>
              A company workspace belongs to the company. Work you save to a company workspace is
              company work, and the company decides who can see it.
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>
                <span className="text-zinc-300">Company admins</span> can see and manage every
                project in the company and everything in it: reports (including the signer&apos;s
                name, signature, GPS locations, transcript, and device model), photos, recordings,
                signed PDFs, tasks, help desk tickets, stakeholders, and gallery items. Admins can
                change members&apos; roles, suspend or remove members, and give or take away access
                to projects.
              </li>
              <li>
                <span className="text-zinc-300">Members</span> can see the projects they have been
                given access to. A viewer can read them; a contributor can also add and change
                reports.
              </li>
              <li>
                <span className="text-zinc-300">Other members of your company</span> can see your
                name and email address in the company&apos;s member list.
              </li>
            </ul>
            <p className="mt-3">
              If you leave a company, lose access to a project, or your company&apos;s plan ends,
              the company keeps the work you saved to it. Personal cloud backup, when you use it
              without a company, is visible only to you. Questions about what your company does with
              company work should go to your company.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">How we use data, including to improve the product</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To run the service: sign-in, sync, backup, AI features, and company controls.</li>
              <li>
                To improve the product: we look at how the service is used (for example, which
                features are used, how sync and AI requests perform, and where things fail) to fix
                problems and make Daily Report better. We do not currently copy report content into
                analytics or use it to train or tune AI <Confirm>whether report content may be used
                to improve the product, prospectively and with notice (paywall-design Q13)</Confirm>.
              </li>
              <li>
                To keep a reliable record: daily reports are evidence. We keep the record of who
                created, changed, signed, and deleted what, and when, so that you, your company, and
                we can rely on it. We may use these records to prevent misuse (such as shared logins
                or abuse of the service), to enforce our terms, and to establish or defend legal
                claims.
              </li>
              <li>To answer your support requests and to contact you about your account.</li>
              <li>When required by law, such as a valid subpoena or court order.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Optional diagnostics</h2>
            <p>
              Two settings are off unless you turn them on. Performance diagnostics send bounded
              events (such as app started or a sync that failed), timestamps, durations, outcomes,
              platform, and app version under a separate random diagnostic ID, with no report
              content, location, email, or account ID. These events are deleted after 30 days.
              &quot;Share report content for AI troubleshooting&quot; lets us keep the report text of
              supported AI requests from that device to investigate problems; that content is deleted
              after 7 days. You can turn either setting off at any time.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Support requests</h2>
            <p>
              When you send us a support request from the app, we receive what you write, the
              reply email you choose to give, and your platform and app version. Support requests are
              deleted one year after you send them.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Permissions the web app uses</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="text-zinc-300">Microphone</span>: to record your spoken report.
                Recordings are saved in your browser and sent for transcription as described above.
              </li>
              <li>
                <span className="text-zinc-300">Camera and photos</span>: to attach jobsite photos.
              </li>
              <li>
                <span className="text-zinc-300">Location</span>: to stamp a report with where it was
                signed and, where available, where a photo was taken. Your browser determines location
                under its own policy. The location is saved in the report and, if the report is
                synced, on our servers.
              </li>
            </ul>
            <p className="mt-3">
              Every permission is optional. You can decline any of them and still use the app; the
              related feature simply won&apos;t be available.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Update announcements</h2>
            <p>
              The web app does not check our announcements feed; it is always the current version
              when you load it. This site hosts the feed that the phone apps read, as described in
              the mobile app privacy policy.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Retention and deletion</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="text-zinc-300">Synced reports, files, and activity records</span>:
                kept for as long as the account or company exists. Because reports are evidence, they
                are built to be kept, not quietly changed or erased: when a report is deleted in the
                app, our servers keep a record of it and its earlier versions. Nothing is deleted
                when a plan lapses <Confirm>retention period after an account is deleted or a
                company&apos;s plan ends (paywall-design Q10)</Confirm>.
              </li>
              <li>
                <span className="text-zinc-300">Service usage records</span>: kept without a set
                deletion date <Confirm>retention period for AI usage records and device
                records</Confirm>.
              </li>
              <li>
                <span className="text-zinc-300">Optional content for AI troubleshooting</span>: 7
                days.
              </li>
              <li>
                <span className="text-zinc-300">Performance diagnostics</span>: 30 days.
              </li>
              <li>
                <span className="text-zinc-300">Support requests</span>: one year.
              </li>
              <li>
                <span className="text-zinc-300">Data in your browser</span>: until you or your
                browser clear it.
              </li>
            </ul>
            <p className="mt-3">
              To delete your account or request deletion of your data, email{" "}
              <a href="mailto:info@weighanchor.com" className="text-orange-500 hover:text-orange-400">
                info@weighanchor.com
              </a>{" "}
              with the subject line &quot;Privacy Request&quot;. The web app does not have a
              self-serve account deletion button in the current version. We will delete your account
              and the personal information we hold about you, except what we must keep by law, what
              we need to establish or defend legal claims, and work that belongs to a company
              workspace, which stays with the company <Confirm>exactly what is deleted on request,
              and within what time</Confirm>. Before you ask us to delete anything, export any report
              you need to keep. You can remove a device from your account on the Account screen.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Security</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>All traffic between the app and our servers is encrypted (HTTPS).</li>
              <li>
                Every request to your data is checked against your verified sign-in and your current
                company role and project access, at the moment it is made.
              </li>
              <li>
                Stored files are not public. There are no public links to them; they can only be
                read through our authenticated server.
              </li>
              <li>
                Every backed-up file is checked against a SHA-256 fingerprint, and our records of
                stored files and published backups cannot be edited or erased afterwards.
              </li>
              <li>AI provider keys live only on our server, never in the app.</li>
              <li>Our server applies rate limits to prevent abuse.</li>
              <li>
                Data is stored with Cloudflare <Confirm>encryption at rest for D1 and R2</Confirm>.
              </li>
            </ul>
            <p className="mt-3">
              No system is perfectly secure. Keep your email account secure, since it is how you sign
              in, and do not share your login: reports are signed under your account&apos;s name.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">No sale, no advertising</h2>
            <p>
              We do not sell your data, rent it, or give it to data brokers. We do not use it for
              advertising, and there are no advertising or third-party tracking tools in the web app.
              We share data only with the service providers listed above, to run the service, with
              your company as described above, or when required by law. If Weigh Anchor or Daily
              Report is ever sold or merged, your data would transfer under this policy, and we would
              tell you.
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
              Depending on where you live, including Washington and other US states with privacy
              laws, you may have the right to know what personal information we hold about you, to get
              a copy of it, to correct it, and to delete it. We voluntarily extend these rights to
              everyone, regardless of where you live. Email{" "}
              <a href="mailto:info@weighanchor.com" className="text-orange-500 hover:text-orange-400">
                info@weighanchor.com
              </a>{" "}
              with the subject line &quot;Privacy Request&quot; and we will respond within the time
              required by applicable law. We may need to verify your identity before acting on a
              request. If your request concerns work in a company workspace, we may refer it to that
              company, which controls it.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Washington health data</h2>
            <p>
              Daily Report is a professional construction documentation tool intended for use in a
              business and employment context. It is not designed to collect health information, and
              we do not sell or share consumer health data. If you choose to dictate or type
              health-related information into a report (for example, describing a jobsite injury),
              that information is part of your report. If the report is synced, it is stored on our
              servers with the rest of the report, visible to your company as described above, and
              used only to provide the service. We do not create, extract, or store any biometric
              identifier or voiceprint from your voice <Confirm>position under the Washington My
              Health My Data Act for synced reports, with counsel</Confirm>. Washington residents with
              questions can contact us at{" "}
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
              the Children&apos;s Online Privacy Protection Act (COPPA) does not apply to the service.
              If you believe a minor has provided us information, contact us at{" "}
              <a href="mailto:info@weighanchor.com" className="text-orange-500 hover:text-orange-400">
                info@weighanchor.com
              </a>{" "}
              and we will delete it.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">International users</h2>
            <p>
              We operate in the United States, and data is processed in the United States and in the
              locations where our service providers operate. The service is intended for users in the
              United States, and we do not target the European Union. Data protection laws in the
              United States may differ from those in your country.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Changes</h2>
            <p>
              We may update this policy to reflect changes in our practices, technology, or legal
              requirements. We will post the updated policy with a new effective date, and for
              material changes we will make reasonable efforts to provide notice (for example, in the
              app, on this site, or by email). We will update this policy before we start collecting a
              new kind of data, and any new use of data we already hold will apply only going forward,
              after notice. Your continued use after the changes take effect is your acceptance of the
              updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">Contact</h2>
            <p>
              Weigh Anchor LLC, Snohomish, Washington. Questions about privacy or the service? Email{" "}
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
            </Link>{" "}
            and the{" "}
            <Link href="/products/daily-report/privacy" className="text-zinc-400 underline hover:text-white">
              mobile app privacy policy
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
