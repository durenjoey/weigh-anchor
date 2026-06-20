import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=(), browsing-topics=()",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://api.mapbox.com blob:",
              "style-src 'self' 'unsafe-inline' https://api.mapbox.com https://fonts.googleapis.com",
              "img-src 'self' data: blob: https://api.mapbox.com https://*.mapbox.com",
              "font-src 'self' data: https://fonts.gstatic.com",
              "connect-src 'self' https://api.mapbox.com https://*.mapbox.com https://events.mapbox.com",
              "worker-src 'self' blob:",
              "child-src blob:",
              "media-src 'self'",
              "manifest-src 'self'",
              "object-src 'none'",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ];
  },
  async redirects() {
    // The apps now live on constructioncopilot.com (the app home). Redirect the
    // WA marketing product pages there. Privacy + Terms stay on this domain
    // (App Store listing links to them).
    return [
      { source: "/products", destination: "https://constructioncopilot.com", permanent: true },
      { source: "/products/daily-report", destination: "https://constructioncopilot.com/daily-report", permanent: true },
      { source: "/products/construction-copilot-gpt", destination: "https://constructioncopilot.com", permanent: true },
    ];
  },
};

export default nextConfig;
