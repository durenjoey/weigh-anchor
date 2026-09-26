import type { Metadata } from "next";
import { PolicyShell, Section, List, B, Mail, A, draftRobots } from "@/components/policy/Policy";

// Version 1, effective September 26, 2026 (approved by Joey 9/26).
export const metadata: Metadata = {
  title: "Website Terms of Use | Weigh Anchor",
  description: "The terms for using weighanchor.com.",
  alternates: { canonical: "/terms" },
  robots: draftRobots,
};

export default function WeighAnchorTermsPage() {
  return (
    <PolicyShell
      title="Website Terms of Use"
      subtitle={<>Weigh Anchor LLC &middot; Version 1 &middot; Effective September 26, 2026</>}
    >
      <p className="text-lg text-zinc-300">
        These terms apply to your use of weighanchor.com (the “site”), run by Weigh Anchor LLC, a
        Washington limited liability company based in Snohomish, Washington (“Weigh Anchor”, “we”,
        “us”). By using the site you agree to them.
      </p>

      <Section title="1. The site is information, not an offer">
        <p>
          The site describes our company, services, and past work. It is general information, not
          professional, legal, engineering, or financial advice, and not an offer to contract. Our
          consulting and program management services are provided only under a signed agreement or
          purchase order, and that agreement controls the work.
        </p>
      </Section>

      <Section title="2. Our software products">
        <p>
          Our software products, including Daily Report, are published under our trade name
          Construction Copilot and have their own terms, such as the{" "}
          <A href="https://www.constructioncopilot.com/terms">Daily Report Terms of Use</A>. Those terms,
          not these, govern the products.
        </p>
      </Section>

      <Section title="3. Accuracy">
        <p>
          We try to keep the site accurate and current, including project descriptions, figures, and
          certifications, but we do not guarantee it is complete or up to date. Certification status
          (such as SDVOSB, MWBE, or small business designations) is confirmed by the certifying agency,
          not by this site.
        </p>
      </Section>

      <Section title="4. Our content">
        <p>
          The site’s text, graphics, logos, and design belong to Weigh Anchor or its licensors. You may
          view and share pages for your own reference. You may not copy, republish, or use our name,
          logo, or certification status to suggest an endorsement or relationship without our written
          permission.
        </p>
      </Section>

      <Section title="5. Acceptable use">
        <List>
          <li>Do not use the site or its contact form to send spam, malware, or unlawful content.</li>
          <li>Do not try to break, overload, or get unauthorized access to the site or its systems.</li>
          <li>Do not scrape the site in a way that burdens it.</li>
        </List>
      </Section>

      <Section title="6. Links to other sites">
        <p>
          The site links to other sites, including our product site and third-party services such as
          Mapbox. We are not responsible for their content or practices.
        </p>
      </Section>

      <Section title="7. Disclaimers and limitation of liability">
        <p>
          The site is provided “as is,” without warranties of any kind. To the fullest extent the law
          allows, Weigh Anchor is not liable for any indirect, incidental, or consequential damages
          arising from your use of the site, and our total liability for any claim about the site is
          limited to one hundred U.S. dollars ($100). This section does not limit anything in a signed
          services agreement, which has its own terms.
        </p>
      </Section>

      <Section title="8. Privacy">
        <p>
          Our <A href="/privacy">Privacy Notice</A> explains what the site collects, including through
          the contact form.
        </p>
      </Section>

      <Section title="9. Governing law">
        <p>
          Washington law governs these terms. Any dispute about the site must be brought in the state or
          federal courts located in Snohomish County, Washington.
        </p>
      </Section>

      <Section title="10. Changes">
        <p>
          We will post updates here with a new version number and effective date. Version 1 is the
          first set of website terms for weighanchor.com.
        </p>
      </Section>

      <Section title="11. Contact">
        <p>
          Weigh Anchor LLC, Snohomish, Washington. Email <Mail />. <B>Construction Copilot</B> is a
          trade name of Weigh Anchor LLC.
        </p>
      </Section>
    </PolicyShell>
  );
}
