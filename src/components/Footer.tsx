import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 border-t-2 border-zinc-800 bg-[#0a0c10]">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="block mb-4">
              <Image
                src="/assets/logos/weigh_anchor_logo_v2.png"
                alt="Weigh Anchor"
                width={120}
                height={80}
                className="h-20 w-auto mb-3"
              />
              <span className="font-medium text-zinc-400 text-sm uppercase tracking-widest">
                Weigh Anchor
              </span>
            </Link>
          </div>
          <div>
            <h3 className="font-bold text-zinc-500 mb-4 text-[10px] uppercase tracking-[0.2em]">
              Contact
            </h3>
            <div className="space-y-2 text-sm text-zinc-600">
              <p>Bellevue, WA</p>
              <p>(407) 687-3792</p>
              <a href="mailto:info@weighanchor.com" className="hover:text-white transition-colors">info@weighanchor.com</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-zinc-500 mb-4 text-[10px] uppercase tracking-[0.2em]">
              Company
            </h3>
            <div className="space-y-2">
              <Link
                href="/services"
                className="block text-sm text-zinc-600 hover:text-white transition-colors"
              >
                Construction Services
              </Link>
              <Link
                href="/automation"
                className="block text-sm text-zinc-600 hover:text-white transition-colors"
              >
                Automation Services
              </Link>
              <Link
                href="/about"
                className="block text-sm text-zinc-600 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-zinc-600 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-zinc-500 mb-4 text-[10px] uppercase tracking-[0.2em]">
              Certifications
            </h3>
            <div className="space-y-2 text-sm text-zinc-600">
              <p>SDVOSB</p>
              <p>Veteran-Owned</p>
              <p>MBE</p>
              <p>King County SCS</p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-800 font-mono">
            &copy; 2026 Weigh Anchor. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/weigh-anchor/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <div className="text-xs text-zinc-800 font-mono">
              Proudly Veteran Owned
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
