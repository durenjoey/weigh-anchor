"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  {
    label: "Services",
    children: [
      { href: "/services", label: "Construction Services" },
      { href: "/automation", label: "Automation Services" },
    ],
  },
  { href: "/about", label: "About" },
];

export default function DarkNav({ logo, logoHeight }: { logo?: string; logoHeight?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-[#0d0f13]/90 backdrop-blur-xl border-b border-zinc-800">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src={logo || "/assets/logos/weigh_anchor_logo_v2.png"}
              alt="Weigh Anchor"
              className={`${logoHeight || "h-14"} w-auto group-hover:scale-105 transition-transform`}
            />
            <span className="font-bold text-white text-lg tracking-tight uppercase">Weigh Anchor</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0">
            {/* Home */}
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className={`uppercase text-xs tracking-wider font-medium rounded-none ${
                  isActive("/") ? "text-white" : "text-zinc-500 hover:text-white hover:bg-white/5"
                }`}
              >
                Home
              </Button>
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-xs tracking-wider font-medium uppercase rounded-none transition-colors ${
                  NAV_ITEMS[0].children!.some((c) => isActive(c.href))
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
                    {NAV_ITEMS[0].children!.map((child) => (
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
                        {child.description && <div className="text-[10px] text-zinc-600 mt-0.5 font-mono uppercase tracking-wider">{child.description}</div>}
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
            {/* Home */}
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                isActive("/") ? "bg-zinc-800/50 text-white" : "text-zinc-400 hover:text-white hover:bg-zinc-900"
              }`}
            >
              Home
            </Link>

            {/* Services group */}
            <div className="px-3 py-3 text-sm font-medium text-zinc-500">
              Services
            </div>
            {NAV_ITEMS[0].children!.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={() => setMobileOpen(false)}
                className={`block pl-6 pr-3 py-3 rounded-md transition-colors ${
                  isActive(child.href)
                    ? "bg-zinc-800/50 text-white"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                }`}
              >
                <div className="text-sm font-medium">{child.label}</div>
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
