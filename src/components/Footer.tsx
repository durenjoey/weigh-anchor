'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => (
  <footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-white">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* SDVOSB Section */}
        <div className="md:col-span-4 bg-slate-800/50 p-6 rounded-lg">
          <h4 className="text-xl font-bold mb-4 text-orange-500">Proudly American Owned</h4>
          <div className="flex items-start space-x-4">
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src="/images/sdvosb-logo.png"
                alt="SDVOSB Certification"
                sizes="80px"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Service-Disabled Veteran-Owned<br />Small Business (SDVOSB)
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-4 bg-slate-800/50 p-6 rounded-lg">
          <h4 className="text-xl font-bold mb-6 text-orange-500">Quick Links</h4>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex flex-col items-center space-y-4">
              <Link href="/" className="text-gray-400 hover:text-orange-500 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors">
                About
              </Link>
              <Link href="/#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                Services
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Link href="/#technology" className="text-gray-400 hover:text-orange-500 transition-colors">
                Technology
              </Link>
              <Link href="/construction-copilot" className="text-gray-400 hover:text-orange-500 transition-colors">
                Construction Copilot
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="md:col-span-4 bg-slate-800/50 p-6 rounded-lg">
          <h4 className="text-xl font-bold mb-6 text-orange-500">Contact</h4>
          <div className="flex flex-col items-start space-y-4">
            <p className="text-gray-400">Bellevue, WA</p>
            <p className="text-gray-400">407-687-3792</p>
            <a 
              href="mailto:info@weighanchor.com" 
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              info@weighanchor.com
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-700/50">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Weigh Anchor Logo"
              width={24}
              height={24}
              className="dark:invert"
            />
            <span className="text-lg font-semibold">Weigh Anchor</span>
          </div>
          <p className="text-center text-gray-400">&copy; {new Date().getFullYear()} Weigh Anchor. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
