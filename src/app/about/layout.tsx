import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Weigh Anchor",
  description:
    "Veteran-owned construction services and automation firm. We deploy our own teams to remote and challenging project sites across 17 states and territories.",
  openGraph: {
    title: "About | Weigh Anchor",
    description:
      "Veteran-owned construction services and automation firm deploying to remote and challenging project sites across 17 states and territories.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
