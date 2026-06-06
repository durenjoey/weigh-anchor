"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavChild = { href: string; label: string };
type NavItem = { label: string; href?: string; children?: NavChild[] };

const NAV_ITEMS: NavItem[] = [
  {
    label: "Services",
    children: [
      { href: "/automation", label: "Automation & AI" },
      { href: "/services", label: "Construction" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { href: "/products/construction-copilot-gpt", label: "Construction Copilot GPT" },
      { href: "/products/daily-report", label: "Daily Report" },
    ],
  },
  { href: "/about", label: "About" },
];

export default function DarkNav({ logo, logoHeight }: { logo?: string; logoHeight?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  const groupActive = (item: NavItem) =>
    (item.href ? pathname.startsWith(item.href) : false) ||
    (item.children?.some((c) => isActive(c.href)) ?? false);

  const triggerClass = (active: boolean) =>
    `flex items-center gap-1 px-3 py-2 text-xs tracking-wider font-medium uppercase rounded-none transition-colors ${
      active ? "text-white" : "text-zinc-500 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-[#0d0f13]/90 backdrop-blur-xl border-b border-zinc-800">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src={logo || "/assets/logos/weigh_anchor_logo_v2.png"}
              alt="Weigh Anchor"
              width={56}
              height={56}
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

            {NAV_ITEMS.map((item) =>
              item.children ? (
                // Dropdown (Services, Products). If the item has its own href, the trigger
                // navigates on click AND opens the menu on hover (so a quick click still works).
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  {item.href ? (
                    <Link href={item.href} className={triggerClass(groupActive(item))}>
                      {item.label}
                      <ChevronDown className={`h-3 w-3 transition-transform ${openMenu === item.label ? "rotate-180" : ""}`} />
                    </Link>
                  ) : (
                    <button className={triggerClass(groupActive(item))}>
                      {item.label}
                      <ChevronDown className={`h-3 w-3 transition-transform ${openMenu === item.label ? "rotate-180" : ""}`} />
                    </button>
                  )}

                  {openMenu === item.label && (
                    <div className="absolute top-full left-0 pt-1 w-72">
                      <div className="rounded-md border border-zinc-800 bg-[#0d0f13] shadow-xl shadow-black/40 overflow-hidden">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpenMenu(null)}
                            className={`block px-4 py-3 transition-colors border-b border-zinc-800/50 last:border-0 ${
                              isActive(child.href)
                                ? "bg-zinc-800/50 text-white"
                                : "hover:bg-zinc-900 text-zinc-400 hover:text-white"
                            }`}
                          >
                            <div className="text-sm font-medium">{child.label}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
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
              )
            )}

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
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
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

            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-3 text-sm font-medium text-zinc-300 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="px-3 py-3 text-sm font-medium text-zinc-500">{item.label}</div>
                  )}
                  {item.children.map((child) => (
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
                </div>
              ) : (
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
              )
            )}

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
