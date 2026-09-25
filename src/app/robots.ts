import type { MetadataRoute } from "next";

// This file is the ONLY source of /robots.txt. (A static public/robots.txt is
// shadowed by this route and never ships, so don't reintroduce one.)
//
// AI answer engines are a discovery channel, so the reputable ones are named
// and allowed explicitly rather than left to the wildcard.
const AI_CRAWLERS = ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: "https://www.weighanchor.com/sitemap.xml",
  };
}
