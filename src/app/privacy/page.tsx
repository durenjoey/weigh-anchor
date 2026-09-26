import type { Metadata } from "next";
import { PolicyShell, Section, List, B, Lead, Mail, A, draftRobots } from "@/components/policy/Policy";

// DRAFT (policies-v2 branch). New page: weighanchor.com/privacy returned 404 before this.
export const metadata: Metadata = {
  title: "Privacy Notice | Weigh Anchor",
  description:
    "How Weigh Anchor LLC handles information from this website, its contact form, and our business communications.",
  alternates: { canonical: "/privacy" },
  robots: draftRobots,
};

export default function WeighAnchorPrivacyPage() {
  return (
    <PolicyShell
      title="Privacy Notice"
      subtitle={<>Weigh Anchor LLC &middot; Version 1 &middot; Effective [DATE TO BE SET ON APPROVAL]</>}
    >
      <Lead>
        Weigh Anchor LLC is a Washington limited liability company based in Snohomish, Washington
        (“Weigh Anchor”, “we”, “us”). This notice covers weighanchor.com, its contact form, and how we
        handle information in our business communications. Our software products are published under
        our trade name Construction Copilot and have their own policies, including the{" "}
        <A href="https://www.constructioncopilot.com/privacy">Daily Report Privacy Policy</A>.
      </Lead>

      <Section title="What we collect on this website">
        <List>
          <li>
            <B>Contact form.</B> If you use the contact form, we receive your name, email address, and
            message, plus your phone number, organization, and project type if you add them. The site
            sends them to our inbox as an email through our email provider (Resend), with your email
            set as the reply address. We do not email the address you enter.
          </li>
          <li>
            <B>Standard server data.</B> Our host (Vercel) receives your IP address and browser details
            to deliver pages and keeps standard request logs under its own policy. The contact form
            uses your IP address briefly, in memory, to limit repeated submissions.
          </li>
          <li>
            <B>Map.</B> The home page shows an interactive map from Mapbox. Your browser loads map
            data from Mapbox, which receives your IP address and browser details and may collect
            usage data about the map under its own policy.
          </li>
          <li>
            <B>Fonts.</B> Pages load fonts from Google Fonts, so Google receives your IP address and
            browser details when a page loads.
          </li>
        </List>
        <p>
          This site uses no analytics service, no advertising cookies, and no tracking pixels.
        </p>
      </Section>

      <Section title="Information in our business work">
        <p>
          When you work with us as a client, partner, subcontractor, or prospective client, we keep the
          contact details and records needed for that work: emails, proposals, contracts, invoices, and
          project documents. We use them to deliver the work, bill for it, meet our contract and legal
          duties, and keep business records. Information that clients share under a contract,
          including government and tribal project information, is handled as that contract requires,
          and those terms control over this notice.
        </p>
      </Section>

      <Section title="How we share information">
        <p>
          We do not sell personal information and do not use it for targeted advertising. We share it
          only with service providers that help us run the business (such as email, hosting, file
          storage, and accounting providers), with people you ask us to work with, or when the law
          requires it.
        </p>
      </Section>

      <Section title="How long we keep it">
        <p>
          We keep contact form messages and business records for as long as needed for the purpose
          they were collected for and for the records the law or our contracts require. [CONFIRM: a
          default period for inquiries that do not become work, for example two years.]
        </p>
      </Section>

      <Section title="Your choices and rights">
        <p>
          To ask what we hold about you, to correct it, or to have it deleted, email <Mail /> with
          “Privacy Request” in the subject line. We extend these rights to everyone, wherever you live,
          subject to records we must keep by law or contract. We may need to verify your identity.
        </p>
      </Section>

      <Section title="Children">
        <p>This site is for business audiences and is not directed to children under 18.</p>
      </Section>

      <Section title="Changes">
        <p>
          We will post updates here with a new version number and effective date. Version 1 is the
          first privacy notice for weighanchor.com.
        </p>
      </Section>

      <Section title="Contact">
        <p>Weigh Anchor LLC, Snohomish, Washington. Email <Mail />.</p>
      </Section>
    </PolicyShell>
  );
}
