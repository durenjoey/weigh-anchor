import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Weigh Anchor",
  description:
    "Get in touch with Weigh Anchor for construction project management, automation services, or federal contracting inquiries. SDVOSB certified, veteran-owned.",
  openGraph: {
    title: "Contact | Weigh Anchor",
    description:
      "Get in touch with Weigh Anchor for construction services and automation. Veteran-owned, deployed across 17 states and territories.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
