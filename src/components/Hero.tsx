'use client';

import React from 'react';
import Link from 'next/link';

export const Hero = () => (
  <div className="relative overflow-hidden pt-16">
    <div 
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url(/images/hero-background.jpg)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[1px]"></div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-md">
              Where Construction
              <span className="block text-orange-500 mt-2">Meets Innovation</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-200 drop-shadow max-w-2xl mx-auto">
              Technology-Enhanced Construction Management
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-8 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-all hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5 text-center"
              >
                Contact Us
              </Link>
              <a 
                href="#services" 
                className="w-full sm:w-auto px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all hover:shadow-lg hover:shadow-white/10 hover:-translate-y-0.5 text-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden mix-blend-soft-light">
        <div className="absolute -top-40 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-orange-400 to-orange-500 blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-orange-400 to-orange-500 blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  </div>
);

export default Hero;
