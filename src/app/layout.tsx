import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.weighanchor.com"),
  title: "Weigh Anchor | Construction Project Management & Automation",
  description:
    "Enterprise construction project management and business automation for organizations ready to digitize and scale.",
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
      "Enterprise construction project management and business automation for organizations ready to digitize and scale.",
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
      "Enterprise construction project management and business automation for organizations ready to digitize and scale.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Weigh Anchor",
              url: "https://www.weighanchor.com",
              logo: "https://www.weighanchor.com/assets/logos/weigh_anchor_logo_v2.png",
              description: "Enterprise construction project management and business automation for organizations ready to digitize and scale.",
              telephone: "+1-407-687-3792",
              email: "info@weighanchor.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bellevue",
                addressRegion: "WA",
                addressCountry: "US",
              },
              sameAs: ["https://www.linkedin.com/company/weigh-anchor/"],
              knowsAbout: [
                "Construction Project Management",
                "Construction Program Management",
                "Business Process Automation",
                "Federal Government Contracting",
                "Tribal Nation Construction",
                "SDVOSB",
              ],
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                minValue: 2,
                maxValue: 10,
              },
              foundingDate: "2020",
              naics: "236220",
            }),
          }}
        />
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
