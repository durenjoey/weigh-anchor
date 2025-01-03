'use client';

import React from 'react';
import { Navigation } from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Technology from '../components/Technology';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <div className="section-alt">
        <Technology />
      </div>
      <Footer />
    </main>
  );
}
