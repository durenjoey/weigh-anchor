import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Weigh Anchor",
  description:
    "Veteran-owned construction services and automation firm. We deploy our own teams to remote and challenging project sites across 17 states and territories.",
  openGraph: {
    title: "About | Weigh Anchor",
    description:
      "Veteran-owned construction services and automation firm deploying to remote and challenging project sites across 17 states and territories.",
    images: [
      {
        url: "/assets/images/weigh-anchor-og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Weigh Anchor — Construction Project Management & Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Weigh Anchor",
    description:
      "Veteran-owned construction services and automation firm deploying to remote and challenging project sites across 17 states and territories.",
    images: ["/assets/images/weigh-anchor-og-default.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
