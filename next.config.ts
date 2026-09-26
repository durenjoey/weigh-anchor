import type { NextConfig } from "next";

// upgrade-insecure-requests breaks http://localhost previews in Safari and the
// iOS Simulator (every asset gets upgraded to a nonexistent https://localhost),
// so it only ships when the site is actually deployed. Vercel sets VERCEL=1.
// (Same gate as constructioncopilot.com.)
const isDeployed = !!process.env.VERCEL;

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
              ...(isDeployed ? ["upgrade-insecure-requests"] : []),
            ].join("; "),
          },
        ],
      },
    ];
  },
  async redirects() {
    // The apps now live on constructioncopilot.com (the app home). Redirect the
    // WA marketing product pages there. Privacy + Terms moved there too; these
    // 308s keep the old URLs (App Store / Play listings) working.
    return [
      { source: "/products/daily-report/privacy", destination: "https://www.constructioncopilot.com/privacy", permanent: true },
      { source: "/products/daily-report/terms", destination: "https://www.constructioncopilot.com/terms", permanent: true },
      { source: "/products", destination: "https://www.constructioncopilot.com", permanent: true },
      { source: "/products/daily-report", destination: "https://www.constructioncopilot.com/daily-report", permanent: true },
      { source: "/products/construction-copilot-gpt", destination: "https://www.constructioncopilot.com", permanent: true },
      // Legacy routes from the pre-redesign site (deleted pages that Search
      // Console may still have indexed).
      { source: "/construction-copilot", destination: "https://www.constructioncopilot.com", permanent: true },
      { source: "/construction-copilot/:path*", destination: "https://www.constructioncopilot.com", permanent: true },
      { source: "/copilot", destination: "/automation", permanent: true },
      { source: "/technology", destination: "/automation", permanent: true },
      { source: "/operations", destination: "/services", permanent: true },
      { source: "/capability-statement", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
