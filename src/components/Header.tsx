"use client";

import { Button } from "@/components/ui/button";
import { 
  Anchor,
  Menu,
  X
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/technology", label: "Technology" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 border-b border-gray-200">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 bg-orange rounded-lg flex items-center justify-center group-hover:bg-orange/90 transition-colors">
              <Anchor className="w-4 h-4 text-white" />
            </div>
            <span className="font-display text-xl font-semibold text-slate-gray">Weigh Anchor</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={`font-medium ${
                    isActive(item.href) 
                      ? 'text-orange bg-orange/10' 
                      : 'text-slate-gray hover:text-orange hover:bg-orange/5'
                  }`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <Link href="/contact">
              <Button 
                size="sm"
                className="ml-4 bg-orange hover:bg-orange/90 text-white"
              >
                Get Started
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-orange/5 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-slate-gray" />
            ) : (
              <Menu className="w-5 h-5 text-slate-gray" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`w-full justify-start font-medium ${
                      isActive(item.href)
                        ? 'text-orange bg-orange/10'
                        : 'text-slate-gray hover:text-orange hover:bg-orange/5'
                    }`}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  size="sm"
                  className="w-full mt-4 bg-orange hover:bg-orange/90 text-white"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}