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
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
