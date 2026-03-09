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
    "construction program management",
    "OVC DOJ grants",
    "tribal construction",
    "business process automation",
    "MWBE contractor",
    "SDVOB certified",
  ],
  authors: [{ name: "Weigh Anchor LLC" }],
  creator: "Weigh Anchor LLC",
  publisher: "Weigh Anchor LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.weighanchor.com",
  },
  category: "construction",
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
              legalName: "Weigh Anchor LLC",
              url: "https://www.weighanchor.com",
              logo: "https://www.weighanchor.com/assets/logos/weigh_anchor_logo_v2.png",
              description: "Enterprise construction project management and business automation for organizations ready to digitize and scale.",
              telephone: "+1-407-687-3792",
              email: "info@weighanchor.com",
              founder: {
                "@type": "Person",
                name: "Joey Duren",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bellevue",
                addressRegion: "WA",
                addressCountry: "US",
              },
              sameAs: ["https://www.linkedin.com/company/weigh-anchor/"],
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "certification",
                  name: "MWBE Certified",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "certification",
                  name: "SDVOB Certified",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "certification",
                  name: "King County Small Contractor & Supplier",
                },
              ],
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Construction Project Management",
                    description: "End-to-end project management for federal, tribal, and commercial construction projects across the United States.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Construction Program Management",
                    description: "Multi-project program oversight including OVC/DOJ grant-funded construction for tribal nations.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Business Process Automation",
                    description: "Digital transformation and workflow automation for construction and professional services organizations.",
                  },
                },
              ],
              knowsAbout: [
                "Construction Project Management",
                "Construction Program Management",
                "Business Process Automation",
                "Federal Government Contracting",
                "Tribal Nation Construction",
                "SDVOSB",
                "OVC DOJ Grant Administration",
                "Remote Site Construction",
                "Environmental Compliance",
                "Digital Transformation",
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
              isicV4: "4100",
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
