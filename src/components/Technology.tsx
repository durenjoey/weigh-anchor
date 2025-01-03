'use client';

import React from 'react';
import { ChevronRight, Star, MessageSquare, Users } from 'lucide-react';
import Link from 'next/link';

const StatCard = ({ icon: Icon, value, label }: { icon: React.ElementType; value: string; label: string }) => (
  <div className="card-bg p-6 rounded-lg shadow-lg transition-colors hover:shadow-xl">
    <div className="flex items-center space-x-4">
      <div className="p-2 bg-orange-100 dark:bg-slate-700 rounded-lg">
        <Icon className="h-6 w-6 text-orange-500" />
      </div>
      <div>
        <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
        <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
      </div>
    </div>
  </div>
);

export const Technology = () => (
  <section id="technology" className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="text-orange-500">Technology</span> Solutions
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Pioneering the future of construction automation
        </p>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <StatCard
                icon={MessageSquare}
                value="10,000+"
                label="Conversations"
              />
              <StatCard
                icon={Star}
                value="4.4/5"
                label="Star Rating"
              />
              <StatCard
                icon={Users}
                value="200+"
                label="Reviews"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Construction <span className="text-orange-500">Copilot</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our AI-powered construction management platform streamlines project delivery through automation. From scope creation to proposal review, we&apos;re revolutionizing how construction projects are managed.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 dark:bg-slate-700 flex items-center justify-center mt-0.5">
                  <span className="text-orange-500 text-sm">✓</span>
                </div>
                <p className="ml-3 text-gray-600 dark:text-gray-300">
                  <strong className="text-gray-900 dark:text-white">AI-Driven Scope Creation:</strong> Generate detailed project scopes in minutes
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 dark:bg-slate-700 flex items-center justify-center mt-0.5">
                  <span className="text-orange-500 text-sm">✓</span>
                </div>
                <p className="ml-3 text-gray-600 dark:text-gray-300">
                  <strong className="text-gray-900 dark:text-white">Smart Proposal Review:</strong> Automated analysis and risk assessment
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 dark:bg-slate-700 flex items-center justify-center mt-0.5">
                  <span className="text-orange-500 text-sm">✓</span>
                </div>
                <p className="ml-3 text-gray-600 dark:text-gray-300">
                  <strong className="text-gray-900 dark:text-white">Knowledge Repository:</strong> AI-organized lessons learned database
                </p>
              </li>
            </ul>
            <Link 
              href="/construction-copilot"
              className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors hover:translate-x-1"
            >
              Learn More <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Technology;
