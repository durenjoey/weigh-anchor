import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation & AI Implementation Services | Weigh Anchor",
  description:
    "AI implementation, workflow automation, and digitization for construction organizations, government agencies, and tribal nations. We build it, deploy it, and train your team on it.",
  openGraph: {
    title: "Automation & AI Implementation Services | Weigh Anchor",
    description:
      "AI implementation, workflow automation, and digitization. We build it, deploy it, and train your team on it.",
    images: [
      {
        url: "/assets/images/automation-ai-implementation-services-weigh-anchor.jpg",
        width: 1920,
        height: 1280,
        alt: "AI and automation implementation services — Weigh Anchor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automation & AI Implementation Services | Weigh Anchor",
    description:
      "AI implementation, workflow automation, and digitization for construction organizations, government agencies, and tribal nations.",
    images: ["/assets/images/automation-ai-implementation-services-weigh-anchor.jpg"],
  },
};

export default function AutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is business process automation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It's converting the manual, repetitive parts of your operation into digital systems that run automatically. Paper forms become digital. Spreadsheet tracking becomes real-time dashboards. Email handoffs become automated workflows. The goal is to free your team from administrative overhead so they can focus on actual work.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to implement automation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It depends on scope, but most engagements start producing results within 4-8 weeks. We begin with process mapping to understand how your operation actually runs, then build and deploy systems incrementally — you start seeing value before the full engagement is complete.",
                },
              },
              {
                "@type": "Question",
                name: "Do we need to be tech-savvy to work with you?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Most of our clients are operations-focused teams, not technology companies. We build systems around how your team already works, train everyone on what we deploy, and stay on for ongoing support. If your team can use email, they can use what we build.",
                },
              },
              {
                "@type": "Question",
                name: "What does a typical automation engagement look like?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We start by mapping your current processes — where time goes, what's manual, where things fall through cracks. Then we design and build the automation, deploy it into your environment, and train your team. After launch, we provide ongoing support and iterate as your needs evolve.",
                },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
