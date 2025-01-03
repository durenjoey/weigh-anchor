'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed w-full z-50">
      <div className="bg-white/95 backdrop-blur-sm dark:bg-slate-900/95 border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center space-x-3">
                <div className="relative w-8 h-8">
                  <Image
                    src="/images/logo.png"
                    alt="Weigh Anchor Logo"
                    sizes="32px"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">Weigh Anchor</span>
              </Link>
              <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
                <Link 
                  href="/#services" 
                  className="border-transparent text-gray-500 dark:text-gray-300 hover:border-orange-500 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
                >
                  Services
                </Link>
                <Link 
                  href="/#technology" 
                  className="border-transparent text-gray-500 dark:text-gray-300 hover:border-orange-500 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
                >
                  Technology
                </Link>
                <Link 
                  href="/construction-copilot" 
                  className="border-transparent text-gray-500 dark:text-gray-300 hover:border-orange-500 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
                >
                  Construction Copilot
                </Link>
                <Link 
                  href="/about" 
                  className="border-transparent text-gray-500 dark:text-gray-300 hover:border-orange-500 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className="border-transparent text-gray-500 dark:text-gray-300 hover:border-orange-500 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div className="sm:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                >
                  {isOpen ? (
                    <X className="block h-6 w-6" />
                  ) : (
                    <Menu className="block h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/#services"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#technology"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Technology
            </Link>
            <Link
              href="/construction-copilot"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Construction Copilot
            </Link>
            <Link
              href="/about"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
