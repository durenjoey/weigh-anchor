"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, FlaskConical } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  {
    label: "Services",
    children: [
      { href: "/services2", label: "Construction Services", description: "CM, Owner's Rep, Controls, PMO" },
      { href: "/copilot", label: "Construction Copilot", description: "Business process automation — $5K/mo" },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/capability-statement", label: "Capabilities" },
];

const VARIANT_PAGES = [
  { href: "/", label: "Original Homepage" },
  { href: "/home2", label: "Home 2 — Light + Typewriter" },
  { href: "/home3", label: "Home 3 — Dark + Gold" },
  { href: "/home4", label: "Home 4 — Industrial" },
  { href: "/home5", label: "Home 5 — Orange Logo" },
  { href: "/home6", label: "Home 6 — V2 Logo" },
  { href: "/home7", label: "Home 7 — White Logo" },
  { href: "/home8", label: "Home 8 — Map Hero" },
  { href: "/services", label: "Services — Original" },
  { href: "/services2", label: "Services 2 — Industrial" },
  { href: "/construction-copilot", label: "Copilot — Original" },
  { href: "/copilot", label: "Copilot — Industrial" },
];

export default function DarkNav({ logo, logoHeight }: { logo?: string; logoHeight?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [variantsOpen, setVariantsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-[#0d0f13]/90 backdrop-blur-xl border-b border-zinc-800">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/home4" className="flex items-center gap-3 group">
            <img
              src={logo || "/assets/logos/weigh_anchor_new_logo.png"}
              alt="Weigh Anchor"
              className={`${logoHeight || "h-7"} w-auto group-hover:scale-105 transition-transform`}
            />
            <span className="font-bold text-white text-lg tracking-tight uppercase">Weigh Anchor</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0">
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-xs tracking-wider font-medium uppercase rounded-none transition-colors ${
                  NAV_ITEMS[0].children.some((c) => isActive(c.href))
                    ? "text-white"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                Services
                <ChevronDown className={`h-3 w-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 pt-1 w-72">
                  <div className="rounded-md border border-zinc-800 bg-[#0d0f13] shadow-xl shadow-black/40 overflow-hidden">
                    {NAV_ITEMS[0].children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setServicesOpen(false)}
                        className={`block px-4 py-3 transition-colors border-b border-zinc-800/50 last:border-0 ${
                          isActive(child.href)
                            ? "bg-zinc-800/50 text-white"
                            : "hover:bg-zinc-900 text-zinc-400 hover:text-white"
                        }`}
                      >
                        <div className="text-sm font-medium">{child.label}</div>
                        <div className="text-[10px] text-zinc-600 mt-0.5 font-mono uppercase tracking-wider">{child.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Regular nav items */}
            {NAV_ITEMS.slice(1).map((item) => (
              <Link key={item.href} href={item.href!}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`uppercase text-xs tracking-wider font-medium rounded-none ${
                    isActive(item.href!) ? "text-white" : "text-zinc-500 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}

            <div className="w-px h-6 bg-zinc-800 mx-2" />

            {/* Variants dropdown — dev navigation */}
            <div
              className="relative"
              onMouseEnter={() => setVariantsOpen(true)}
              onMouseLeave={() => setVariantsOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 px-3 py-2 text-xs tracking-wider font-medium rounded-none transition-colors text-zinc-600 hover:text-violet-400`}
              >
                <FlaskConical className="h-3 w-3" />
                Variants
                <ChevronDown className={`h-3 w-3 transition-transform ${variantsOpen ? "rotate-180" : ""}`} />
              </button>

              {variantsOpen && (
                <div className="absolute top-full right-0 pt-1 w-64">
                  <div className="rounded-md border border-zinc-800 bg-[#0d0f13] shadow-xl shadow-black/40 overflow-hidden max-h-[400px] overflow-y-auto">
                    {VARIANT_PAGES.map((page) => (
                      <Link
                        key={page.href}
                        href={page.href}
                        onClick={() => setVariantsOpen(false)}
                        className={`block px-4 py-2.5 transition-colors border-b border-zinc-800/50 last:border-0 text-sm ${
                          isActive(page.href)
                            ? "bg-violet-500/10 text-violet-300 border-l-2 border-l-violet-500"
                            : "hover:bg-zinc-900 text-zinc-500 hover:text-zinc-300"
                        }`}
                      >
                        {page.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="w-px h-6 bg-zinc-800 mx-2" />

            <Link href="/contact">
              <Button
                size="sm"
                className={`font-bold uppercase text-xs tracking-wider rounded-sm ${
                  isActive("/contact")
                    ? "bg-orange-500 text-white"
                    : "bg-orange-600 text-white hover:bg-orange-500"
                }`}
              >
                Contact
              </Button>
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-[#0d0f13]">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {/* Services */}
            <div className="px-3 py-2 text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-mono">
              Services
            </div>
            {NAV_ITEMS[0].children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-3 rounded-md transition-colors ${
                  isActive(child.href)
                    ? "bg-zinc-800/50 text-white"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                }`}
              >
                <div className="text-sm font-medium">{child.label}</div>
                <div className="text-[10px] text-zinc-600 mt-0.5 font-mono uppercase tracking-wider">{child.description}</div>
              </Link>
            ))}

            {/* Regular items */}
            {NAV_ITEMS.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href!}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href!) ? "bg-zinc-800/50 text-white" : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Variants section */}
            <div className="pt-3 mt-3 border-t border-zinc-800">
              <div className="px-3 py-2 text-[10px] text-violet-500/70 uppercase tracking-[0.2em] font-mono flex items-center gap-2">
                <FlaskConical className="h-3 w-3" />
                Page Variants
              </div>
              {VARIANT_PAGES.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2.5 rounded-md text-sm transition-colors ${
                    isActive(page.href)
                      ? "bg-violet-500/10 text-violet-300"
                      : "text-zinc-600 hover:text-zinc-400 hover:bg-zinc-900"
                  }`}
                >
                  {page.label}
                </Link>
              ))}
            </div>

            <div className="pt-3">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                <Button className="w-full bg-orange-600 text-white hover:bg-orange-500 font-bold uppercase text-xs tracking-wider rounded-sm">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
