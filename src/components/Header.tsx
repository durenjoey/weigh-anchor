"use client";

import { Button } from "@/components/ui/button";
import { 
  Menu,
  X,
  Phone,
  Mail
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
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 border-b border-gray-200">
      {/* Top Bar with Contact Info */}
      <div className="hidden md:block bg-slate-900 text-white py-2">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-end text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+14076873792" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                <Phone className="h-3 w-3" />
                (407) 687-3792
              </a>
              <span className="text-slate-400">•</span>
              <a href="mailto:info@weighanchor.com" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                <Mail className="h-3 w-3" />
                info@weighanchor.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img 
              src="/assets/logos/WeighAnchor_Logoonly_Transparent_2023_08_16.png" 
              alt="Weigh Anchor" 
              className="h-10 w-auto group-hover:scale-105 transition-transform"
            />
            <div>
              <span className="font-display text-xl font-semibold text-slate-900">Weigh Anchor</span>
              <span className="hidden lg:block text-xs text-slate-500">Professional Services, Any Location</span>
            </div>
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
                      : 'text-slate-700 hover:text-orange hover:bg-orange/5'
                  }`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            
            {/* Download Capability Statement */}
            <Button 
              variant="outline"
              size="sm"
              className="ml-4 border-slate-300 text-slate-700 hover:bg-slate-50"
            >
              Capability Statement
            </Button>
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
              
              {/* Mobile Contact Info */}
              <div className="pt-4 mt-4 border-t border-gray-200 space-y-3">
                <a href="tel:+14076873792" className="flex items-center gap-2 text-sm text-slate-600 px-3">
                  <Phone className="h-4 w-4" />
                  (407) 687-3792
                </a>
                <a href="mailto:info@weighanchor.com" className="flex items-center gap-2 text-sm text-slate-600 px-3">
                  <Mail className="h-4 w-4" />
                  info@weighanchor.com
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}