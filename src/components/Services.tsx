'use client';

import React from 'react';
import { Building2, Users, Cog } from 'lucide-react';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => (
  <div className="p-6 card-bg rounded-lg shadow-lg transition-colors hover:shadow-xl">
    <div className="w-12 h-12 bg-orange-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-orange-500" />
    </div>
    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

export const Services = () => (
  <section id="services" className="py-20 section-alt scroll-mt-44">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="text-orange-500">Professional</span> Services
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Decades of construction expertise enhanced by modern technology
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard 
          icon={Building2}
          title="Construction Management"
          description="Comprehensive oversight of construction projects from inception to completion."
        />
        <ServiceCard 
          icon={Users}
          title="Owner's Representative"
          description="Protecting owner interests throughout the project lifecycle."
        />
        <ServiceCard 
          icon={Cog}
          title="Technology Integration"
          description="Implementing cutting-edge solutions to enhance project delivery."
        />
      </div>
    </div>
  </section>
);

export default Services;
