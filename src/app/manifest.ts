import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Weigh Anchor",
    short_name: "Weigh Anchor",
    description:
      "Enterprise construction project management and business automation for organizations ready to digitize and scale.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d0f13",
    theme_color: "#0d0f13",
    icons: [
      {
        src: "/favicon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
