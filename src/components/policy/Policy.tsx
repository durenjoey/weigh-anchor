import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import DarkNav from "@/components/DarkNav";
import Footer from "@/components/Footer";

// DRAFT SWITCH for the policies-v2 review. While true, every page built on
// PolicyShell shows a "not in effect" banner and asks search engines not to
// index it. Set to false only when Joey approves the text for publication.
export const POLICY_DRAFT = false;

export const draftRobots = POLICY_DRAFT ? { index: false, follow: false } : undefined;

export function PolicyShell({
  title,
  subtitle,
  back = { href: "/", label: "Weigh Anchor" },
  notInEffect,
  children,
}: {
  title: string;
  subtitle: ReactNode;
  back?: { href: string; label: string };
  /** Always show the banner, even after publication (for outlines that are not in effect). */
  notInEffect?: string;
  children: ReactNode;
}) {
  const banner =
    notInEffect ??
    (POLICY_DRAFT
      ? "Draft for review. Not yet in effect. The version currently in effect is the one on the live site."
      : null);
  return (
    <div className="min-h-screen bg-[#0d0f13] text-zinc-300">
      <DarkNav />
      <section className="container mx-auto px-4 lg:px-6 py-16 lg:py-24 max-w-3xl">
        <Link
          href={back.href}
          className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-white uppercase tracking-widest font-mono mb-10"
        >
          <ArrowLeft className="h-3 w-3" /> {back.label}
        </Link>
        {banner && (
          <p
            role="note"
            className="mb-8 rounded-md border border-orange-500/50 bg-orange-500/10 px-4 py-3 text-sm text-orange-300"
          >
            {banner}
          </p>
        )}
        <h1 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">{title}</h1>
        <p className="mt-3 text-sm text-zinc-500 uppercase tracking-widest font-mono">{subtitle}</p>
        <div className="mt-10 space-y-8 text-zinc-400 leading-relaxed">{children}</div>
      </section>
      <Footer />
    </div>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-white text-xl font-bold tracking-tight mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

export function List({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-5 space-y-2">{children}</ul>;
}

export function B({ children }: { children: ReactNode }) {
  return <span className="text-zinc-300">{children}</span>;
}

export function Lead({ children }: { children: ReactNode }) {
  return <p className="text-lg text-zinc-300">{children}</p>;
}

export function Mail({ to = "info@weighanchor.com" }: { to?: string }) {
  return (
    <a href={`mailto:${to}`} className="text-orange-500 hover:text-orange-400">
      {to}
    </a>
  );
}

export function A({ href, children }: { href: string; children: ReactNode }) {
  const cls = "text-orange-500 hover:text-orange-400";
  return href.startsWith("/") ? (
    <Link href={href} className={cls}>
      {children}
    </Link>
  ) : (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}
