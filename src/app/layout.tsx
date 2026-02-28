import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.weighanchor.com"),
  title: "Weigh Anchor | Construction Project Management & Automation",
  description:
    "Veteran-owned construction project management and business automation serving federal agencies, tribal nations, and private sector clients across 17 states. SDVOSB certified.",
  keywords: [
    "SDVOSB construction management",
    "veteran-owned construction",
    "federal construction project management",
    "tribal nation construction contractor",
    "construction automation",
    "remote site construction management",
    "government construction PM",
  ],
  authors: [{ name: "Weigh Anchor" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Weigh Anchor | Construction Project Management & Automation",
    description:
      "Veteran-owned construction project management and business automation serving federal agencies, tribal nations, and private sector clients across 17 states.",
    images: [
      {
        url: "/assets/images/weigh-anchor-og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Weigh Anchor — Construction Project Management & Automation",
      },
    ],
    type: "website",
    siteName: "Weigh Anchor",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weigh Anchor | Construction Project Management & Automation",
    description:
      "Veteran-owned construction project management and business automation serving federal agencies, tribal nations, and private sector clients across 17 states.",
    images: ["/assets/images/weigh-anchor-og-default.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-background text-foreground min-h-screen">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
