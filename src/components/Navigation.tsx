'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    const updateHash = () => {
      const hash = window.location.hash;
      setCurrentHash(hash);
    };
    
    // Initial hash
    updateHash();
    
    // Update hash on navigation
    window.addEventListener('hashchange', updateHash);
    if (typeof window !== 'undefined') {
      window.addEventListener('load', updateHash);
    }
    
    return () => {
      window.removeEventListener('hashchange', updateHash);
      if (typeof window !== 'undefined') {
        window.removeEventListener('load', updateHash);
      }
    };
  }, []);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/' && !currentHash;
    }
    if (path.startsWith('/#')) {
      const expectedHash = path.substring(1); // Remove the leading /
      return pathname === '/' && currentHash === expectedHash;
    }
    return pathname.startsWith(path);
  };
  
  return (
    <nav className="fixed w-full z-50">
      <div className="bg-orange-100/95 sm:bg-orange-100/80 backdrop-blur-sm dark:bg-slate-800/95 border-b border-orange-200 dark:border-slate-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 sm:h-36 pb-4">
            <Link href="/" className="flex-shrink-0 -mb-4 sm:-mb-8">
              <div className="relative w-[200px] sm:w-[400px] h-24 sm:h-36">
                <Image
                  src="/images/logo-with-text.png"
                  alt="Weigh Anchor"
                  sizes="400px"
                  fill
                  className="object-contain dark:invert"
                  priority
                />
              </div>
            </Link>
            <div className="hidden sm:flex sm:space-x-16 flex-1 justify-center mt-4">
                <Link 
                  href="/" 
                  className={`${
                    isActive('/') 
                      ? 'border-orange-500 text-gray-900 dark:text-white' 
                      : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-orange-500 hover:text-gray-700 dark:hover:text-white'
                  } inline-flex items-center px-1 pt-2 border-b-2 text-base font-medium transition-colors`}
                >
                  Home
                </Link>
                <Link 
                  href="/#services" 
                  className={`${
                    isActive('/#services')
                      ? 'border-orange-500 text-gray-900 dark:text-white'
                      : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-orange-500 hover:text-gray-700 dark:hover:text-white'
                  } inline-flex items-center px-1 pt-2 border-b-2 text-base font-medium transition-colors`}
                >
                  Services
                </Link>
                <Link 
                  href="/#technology" 
                  className={`${
                    isActive('/#technology')
                      ? 'border-orange-500 text-gray-900 dark:text-white'
                      : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-orange-500 hover:text-gray-700 dark:hover:text-white'
                  } inline-flex items-center px-1 pt-2 border-b-2 text-base font-medium transition-colors`}
                >
                  Technology
                </Link>
                <Link 
                  href="/construction-copilot" 
                  className={`${
                    isActive('/construction-copilot')
                      ? 'border-orange-500 text-gray-900 dark:text-white'
                      : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-orange-500 hover:text-gray-700 dark:hover:text-white'
                  } inline-flex items-center px-1 pt-2 border-b-2 text-base font-medium transition-colors`}
                >
                  Construction Copilot
                </Link>
                <Link 
                  href="/about" 
                  className={`${
                    isActive('/about')
                      ? 'border-orange-500 text-gray-900 dark:text-white'
                      : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-orange-500 hover:text-gray-700 dark:hover:text-white'
                  } inline-flex items-center px-1 pt-2 border-b-2 text-base font-medium transition-colors`}
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className={`${
                    isActive('/contact')
                      ? 'border-orange-500 text-gray-900 dark:text-white'
                      : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-orange-500 hover:text-gray-700 dark:hover:text-white'
                  } inline-flex items-center px-1 pt-2 border-b-2 text-base font-medium transition-colors`}
                >
                  Contact
                </Link>
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
        <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden fixed inset-x-0 top-24 bg-orange-100/95 dark:bg-slate-800/95 border-b border-orange-200 dark:border-slate-700 shadow-lg`}>
          <div className="pt-2 pb-3 space-y-1 max-h-[calc(100vh-6rem)] overflow-y-auto">
            <Link
              href="/"
              className={`block pl-3 pr-4 py-2 text-base font-medium ${
                isActive('/') 
                  ? 'text-orange-500 bg-orange-50 dark:bg-slate-700'
                  : 'text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
              } transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#services"
              className={`block pl-3 pr-4 py-2 text-base font-medium ${
                isActive('/#services')
                  ? 'text-orange-500 bg-orange-50 dark:bg-slate-700'
                  : 'text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
              } transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#technology"
              className={`block pl-3 pr-4 py-2 text-base font-medium ${
                isActive('/#technology')
                  ? 'text-orange-500 bg-orange-50 dark:bg-slate-700'
                  : 'text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
              } transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              Technology
            </Link>
            <Link
              href="/construction-copilot"
              className={`block pl-3 pr-4 py-2 text-base font-medium ${
                isActive('/construction-copilot')
                  ? 'text-orange-500 bg-orange-50 dark:bg-slate-700'
                  : 'text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
              } transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              Construction Copilot
            </Link>
            <Link
              href="/about"
              className={`block pl-3 pr-4 py-2 text-base font-medium ${
                isActive('/about')
                  ? 'text-orange-500 bg-orange-50 dark:bg-slate-700'
                  : 'text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
              } transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`block pl-3 pr-4 py-2 text-base font-medium ${
                isActive('/contact')
                  ? 'text-orange-500 bg-orange-50 dark:bg-slate-700'
                  : 'text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
              } transition-colors`}
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
