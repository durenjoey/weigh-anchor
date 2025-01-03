'use client';

import React from 'react';
import Link from 'next/link';

export const Hero = () => (
  <div className="relative overflow-hidden card-bg pt-16">
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <h1 className="text-6xl font-bold leading-tight text-gray-900 dark:text-white">
              Where Construction
              <span className="block text-orange-500 mt-2">Meets Innovation</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Breaking free from traditional constraints through technology-enhanced construction management.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-all hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
              <a 
                href="#services" 
                className="px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-lg font-medium hover:bg-orange-50 dark:hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-0.5"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/20 blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/20 blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  </div>
);

export default Hero;
