"use client";

import React from "react";
import { Navigation } from "../../components/Navigation";
import Footer from "../../components/Footer";

const AboutPage = () => {
  return (
    <main className="min-h-screen">
        <Navigation />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Story</h1>
            
            <div className="max-w-3xl mx-auto space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-orange-500">Foundation & Vision</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Founded by USAF veteran Joseph Duren Lopez, Weigh Anchor began with a clear mission: to transform the construction industry through innovation and unwavering commitment to excellence. Our name reflects our philosophy - helping clients break free from constraints that hold them back, just as a ship weighs anchor to set sail toward new horizons.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-orange-500">Where We Are Today</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  As a Service-Disabled Veteran-Owned Small Business (SDVOSB), we've built a strong foundation in construction project management, serving federal agencies, tribal organizations, and Fortune 500 companies. Our expertise in traditional construction management now fuels our technology innovations, creating solutions that address real-world challenges we've encountered in the field.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-orange-500">Innovation Focus</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Today, we're leading the charge in construction technology innovation. Our Construction Copilot platform and emerging robotics solutions represent our commitment to automating and enhancing construction processes. We're not just managing projects - we're revolutionizing how they're delivered.
                </p>
              </section>

              <section className="card-bg p-8 rounded-lg shadow-lg transition-colors">
                <h2 className="text-2xl font-bold mb-4 text-orange-500">SDVOSB Certification</h2>
                <div className="flex items-center space-x-6">
                  <img 
                    src="/images/sdvosb-logo.png" 
                    alt="SDVOSB Certification"
                    className="w-32 h-32 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://placehold.co/128x128/orange/white?text=SDVOSB';
                    }}
                  />
                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    Certified Service-Disabled Veteran-Owned Small Business
                  </p>
                </div>
              </section>
            </div>
          </div>
        </main>

        <Footer />
    </main>
  );
};

export default AboutPage;
