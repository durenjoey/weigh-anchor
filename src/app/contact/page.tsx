"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  Send,
  Building2
} from "lucide-react";
import Header from "@/components/Header";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    projectType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-slate-600">
              Ready to discuss your next project? Our team is here to help you navigate 
              complex construction challenges with innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-6">
                
                {/* Quick Contact */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Get in Touch</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <a href="tel:+14076873792" className="flex items-start gap-3 group">
                      <Phone className="h-5 w-5 text-orange mt-0.5" />
                      <div>
                        <div className="font-semibold group-hover:text-orange transition-colors">
                          (407) 687-3792
                        </div>
                        <div className="text-sm text-slate-500">Main Office</div>
                      </div>
                    </a>
                    
                    <a href="mailto:info@weighanchor.com" className="flex items-start gap-3 group">
                      <Mail className="h-5 w-5 text-orange mt-0.5" />
                      <div>
                        <div className="font-semibold group-hover:text-orange transition-colors">
                          info@weighanchor.com
                        </div>
                        <div className="text-sm text-slate-500">General Inquiries</div>
                      </div>
                    </a>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-orange mt-0.5" />
                      <div>
                        <div className="font-semibold">Headquarters</div>
                        <div className="text-sm text-slate-600">
                          10900 NE 4th Street<br />
                          Suite 2300<br />
                          Bellevue, WA 98004
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-orange mt-0.5" />
                      <div>
                        <div className="font-semibold">Business Hours</div>
                        <div className="text-sm text-slate-600">
                          Monday - Friday<br />
                          8:00 AM - 6:00 PM PST
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Federal Contracting Info */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100">
                  <CardHeader>
                    <CardTitle className="text-lg">Federal Contracting</CardTitle>
                    <CardDescription>For government procurement inquiries</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="text-sm text-slate-500">CAGE Code</div>
                      <div className="font-semibold">Available upon request</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">UEI</div>
                      <div className="font-semibold">Available upon request</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">NAICS Codes</div>
                      <div className="font-semibold">236220, 541330, 541511</div>
                    </div>
                    <div className="pt-3">
                      <Button 
                        variant="outline" 
                        className="w-full border-slate-300"
                      >
                        Download Capability Statement
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <CardDescription>
                      We typically respond within one business day
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-slate-700">
                            Full Name *
                          </label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-slate-700">
                            Email Address *
                          </label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-slate-700">
                            Phone Number
                          </label>
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(555) 123-4567"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-slate-700">
                            Organization
                          </label>
                          <Input
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            placeholder="Agency or Company"
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-slate-700">
                          Project Type
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                          <option value="">Select a project type</option>
                          <option value="federal">Federal Construction</option>
                          <option value="commercial">Commercial Construction</option>
                          <option value="tribal">Tribal Projects</option>
                          <option value="owners-rep">Owner's Representative</option>
                          <option value="consulting">Consulting Services</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-slate-700">
                          Message *
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project needs..."
                          rows={6}
                          required
                          className="mt-1"
                        />
                      </div>

                      <div className="flex justify-end">
                        <Button 
                          type="submit"
                          className="bg-orange hover:bg-orange-dark text-white px-8"
                        >
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Our Locations
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Building2 className="h-6 w-6 text-orange" />
                    <CardTitle>Headquarters</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    10900 NE 4th Street, Suite 2300<br />
                    Bellevue, WA 98004
                  </p>
                  <p className="text-sm text-slate-500">
                    Primary operations center for all federal and commercial projects
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Building2 className="h-6 w-6 text-orange" />
                    <CardTitle>Project Operations</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Nationwide Coverage
                  </p>
                  <p className="text-sm text-slate-500">
                    Active project sites across {getUniqueStates().length} states with rapid 
                    deployment capabilities
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-400">
              © 2025 Weigh Anchor. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-slate-300">Proudly Veteran Owned</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">SDVOSB Certified</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Import for getUniqueStates
import { getUniqueStates } from "@/data/projects";