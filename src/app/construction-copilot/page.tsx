"use client";

import React from "react";
import { Navigation } from "../../components/Navigation";
import Footer from "../../components/Footer";
import { FileText, CheckSquare, ClipboardList, BookOpen, ArrowRight } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <div className="card-bg p-6 rounded-lg shadow-lg transition-colors hover:shadow-xl">
    <div className="w-12 h-12 bg-orange-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-orange-500" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const TimelineItem = ({ date, title, description }: { date: string; title: string; description: string }) => (
  <div className="flex items-start mb-8">
    <div className="flex-shrink-0">
      <div className="w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
      <div className="w-0.5 h-full bg-orange-200 dark:bg-orange-900/20 ml-1.5 -mt-2"></div>
    </div>
    <div className="ml-6">
      <div className="text-sm text-orange-500 font-medium mb-1">{date}</div>
      <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </div>
);

const ConstructionCopilotPage = () => {
  return (
    <main className="min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 sm:pt-44 pb-12 sm:pb-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                Construction Copilot
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
                Automating construction management to empower teams, streamline workflows, and deliver projects with unprecedented efficiency.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="mailto:admin@weighanchor.com?subject=Construction Copilot Beta Access Request&body=Hi,%0A%0AI'd like to request beta access for Construction Copilot.%0A%0AThank you" 
                  className="px-8 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-all hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5"
                >
                  Request Beta Access
                </a>
                <a 
                  href="#features" 
                  className="px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-lg font-medium hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-0.5"
                >
                  Explore Features
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">Why Construction Copilot?</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Built by construction professionals, for construction professionals. We&apos;ve automated the tedious tasks so you can focus on what matters most - building.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="card-bg p-6 rounded-lg shadow-lg text-center transition-colors hover:shadow-xl">
                <div className="text-4xl font-bold text-orange-500 mb-2">60%</div>
                <div className="text-gray-600 dark:text-gray-300">Time Saved on Documentation</div>
              </div>
              <div className="card-bg p-6 rounded-lg shadow-lg text-center transition-colors hover:shadow-xl">
                <div className="text-4xl font-bold text-orange-500 mb-2">45%</div>
                <div className="text-gray-600 dark:text-gray-300">Faster Project Setup</div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section id="features" className="py-12 sm:py-20 section-alt scroll-mt-32 sm:scroll-mt-44">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Core Features</h2>
              <p className="text-gray-600 dark:text-gray-300">From office planning to field execution</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 max-w-6xl mx-auto">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white">Planning & Analysis</h3>
                <div className="space-y-8">
                  <FeatureCard 
                    icon={FileText}
                    title="Smart Scope Creator"
                    description="Generate comprehensive project scopes in minutes using our intelligent templates and industry best practices."
                  />
                  <FeatureCard 
                    icon={CheckSquare}
                    title="Proposal Reviewer"
                    description="Streamline proposal analysis and ensure alignment with project requirements, making review processes more efficient."
                  />
                  <FeatureCard 
                    icon={BookOpen}
                    title="Lessons Learned Repository"
                    description="Capture and organize valuable project insights, making institutional knowledge accessible and actionable for future projects."
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white">Field Operations</h3>
                <div className="space-y-8">
                  <FeatureCard 
                    icon={ClipboardList}
                    title="Daily Reporter"
                    description="Simplify daily reporting with automated documentation and progress tracking, keeping all stakeholders informed."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Product Roadmap</h2>
              <p className="text-gray-600 dark:text-gray-300">Continuously evolving to meet your needs</p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <TimelineItem 
                date="January 2025"
                title="Daily Reports Module"
                description="Comprehensive daily reporting system with automated documentation and progress tracking."
              />
              <TimelineItem 
                date="February 2025"
                title="Quality Assurance Module"
                description="Advanced QA/QC tools integrated with field operations and reporting."
              />
              <TimelineItem 
                date="March 2025"
                title="Earned Value Management"
                description="Sophisticated project performance tracking and forecasting capabilities."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-20 section-alt">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Transform Your Project Delivery?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Join our beta program and be among the first to experience the future of construction management.
              </p>
              <a 
                href="mailto:admin@weighanchor.com?subject=Construction Copilot Beta Access Request&body=Hi,%0A%0AI'd like to request beta access for Construction Copilot.%0A%0AThank you" 
                className="inline-flex items-center px-8 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-all hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        <Footer />
    </main>
  );
};

export default ConstructionCopilotPage;
