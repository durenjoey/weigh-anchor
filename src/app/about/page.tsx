"use client";

import React from "react";
import Image from "next/image";
import { Navigation } from "../../components/Navigation";
import Footer from "../../components/Footer";

const AboutPage = () => {
  return (
    <main className="min-h-screen">
        <Navigation />
        
        <main className="pt-32 sm:pt-44 pb-12 sm:pb-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900 dark:text-white">Our Story</h1>
            
            <div className="max-w-3xl mx-auto space-y-8 sm:space-y-12">
              <section>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-orange-500">Foundation & Vision</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Founded by USAF veteran Joseph Duren Lopez, Weigh Anchor began with a clear mission: to transform the construction industry through innovation and unwavering commitment to excellence. Our name reflects our philosophy - helping clients break free from constraints that hold them back, just as a ship weighs anchor to set sail toward new horizons.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-orange-500">Where We Are Today</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  As a Service-Disabled Veteran-Owned Small Business (SDVOSB), we&apos;ve built a strong foundation in construction project management, serving federal agencies, tribal organizations, and Fortune 500 companies. Our expertise in traditional construction management now fuels our technology innovations, creating solutions that address real-world challenges we&apos;ve encountered in the field.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-orange-500">Innovation Focus</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Today, we&apos;re leading the charge in construction technology innovation. Our Construction Copilot platform and emerging robotics solutions represent our commitment to automating and enhancing construction processes. We&apos;re not just managing projects - we&apos;re revolutionizing how they&apos;re delivered.
                </p>
              </section>

              <section className="card-bg p-4 sm:p-8 rounded-lg shadow-lg transition-colors">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-orange-500">SDVOSB Certification</h2>
                <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0">
                  <Image 
                    src="/images/sdvosb-logo.png" 
                    alt="SDVOSB Certification"
                    width={128}
                    height={128}
                    className="w-24 sm:w-32 h-24 sm:h-32 object-contain"
                  />
                  <p className="text-gray-600 dark:text-gray-300 font-medium text-center sm:text-left">
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
