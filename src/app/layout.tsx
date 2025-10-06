import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weigh Anchor | Construction Innovation",
  description: "Technology-Enhanced Construction Management for the Modern Era",
  keywords: ["construction management", "technology", "innovation", "project management"],
  authors: [{ name: "Weigh Anchor" }],
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
