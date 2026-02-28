import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Weigh Anchor",
  description:
    "Get in touch with Weigh Anchor for construction project management, automation services, or federal contracting inquiries. SDVOSB certified, veteran-owned.",
  openGraph: {
    title: "Contact | Weigh Anchor",
    description:
      "Get in touch with Weigh Anchor for construction services and automation. Veteran-owned, deployed across 17 states and territories.",
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
    title: "Contact | Weigh Anchor",
    description:
      "Get in touch with Weigh Anchor for construction project management, automation services, or federal contracting inquiries.",
    images: ["/assets/images/weigh-anchor-og-default.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
