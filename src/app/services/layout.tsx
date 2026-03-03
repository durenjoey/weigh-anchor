import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Project Management Services | Weigh Anchor",
  description:
    "Construction project management, project controls, program management, and field operations across 17 states and territories. Veteran-owned. Remote deployment capable.",
  openGraph: {
    title: "Construction Project Management Services | Weigh Anchor",
    description:
      "Construction project management, project controls, program management, and field operations across 17 states and territories.",
    images: [
      {
        url: "/assets/images/construction-project-management-services-weigh-anchor.jpg",
        width: 1920,
        height: 1280,
        alt: "Construction project management services — Weigh Anchor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Project Management Services | Weigh Anchor",
    description:
      "Construction project management, project controls, program management, and field operations across 17 states and territories. Veteran-owned.",
    images: ["/assets/images/construction-project-management-services-weigh-anchor.jpg"],
  },
};

export default function ServicesLayout({
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
                name: "What does construction project management include?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We handle the full project lifecycle — procurement, scheduling, budget management, contractor oversight, quality assurance, and closeout. You get a single point of accountability for your entire project.",
                },
              },
              {
                "@type": "Question",
                name: "Do you work with small and mid-size businesses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We built our systems managing large federal and tribal nation programs, and we bring that same rigor to smaller organizations. Our productized packages make enterprise-grade project management accessible to teams of any size.",
                },
              },
              {
                "@type": "Question",
                name: "What types of projects do you manage?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Government facilities, tribal housing and infrastructure, commercial construction, and private sector builds. We've delivered across 17 states and territories, including remote communities in rural Alaska and Pacific islands.",
                },
              },
              {
                "@type": "Question",
                name: "How is Weigh Anchor different from other PM firms?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We pair construction project management with automation. That means your reporting, cost tracking, and project controls are digitized from day one — not manual spreadsheets passed around by email.",
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
