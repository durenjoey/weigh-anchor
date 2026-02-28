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
};

export default function AutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
