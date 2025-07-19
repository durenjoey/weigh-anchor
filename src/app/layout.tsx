import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project ARD | Mission Control",
  description: "Advanced Remote Deployment - Where precision meets impossible logistics",
  keywords: ["remote construction", "logistics", "mission control", "advanced deployment"],
  authors: [{ name: "Project ARD" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e293b", // deep charcoal
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistMono.variable} antialiased font-technical bg-deep-charcoal text-arctic-white min-h-screen`}
      >
        <div className="grid-pattern min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
