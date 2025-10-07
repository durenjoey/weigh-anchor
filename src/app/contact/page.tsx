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
import Link from "next/link";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! We\'ll get back to you within one business day.'
        });
        // Clear form
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          projectType: "",
          message: ""
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Unable to send message. Please try again or call us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
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
              Where Do You Need Us?
            </h1>
            <p className="text-xl text-slate-600">
              Whether it's an isolated government site or Fortune 500 headquarters, our expert teams 
              deploy anywhere. Tell us about your impossible project.
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
                          Bellevue, WA
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
                      <div className="font-semibold">9LA92</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">UEI</div>
                      <div className="font-semibold">JU1LYRJGRWL9</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">NAICS Codes</div>
                      <div className="font-semibold">236220, 541330, 541511</div>
                    </div>
                    <div className="pt-3">
                      <div className="text-sm text-slate-500 mb-3">Certifications</div>
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <img 
                          src="/assets/logos/SDVOSB_Logo_White_2023_06_22.png.png" 
                          alt="SDVOSB Certified" 
                          className="h-10 w-auto bg-slate-800 p-2 rounded"
                        />
                        <img 
                          src="/assets/logos/dbe.png" 
                          alt="DBE Certified" 
                          className="h-10 w-auto bg-white p-1 rounded border border-slate-200"
                        />
                        <img 
                          src="/assets/logos/King county scs.png" 
                          alt="King County SCS" 
                          className="h-10 w-auto bg-white p-1 rounded border border-slate-200"
                        />
                        <img 
                          src="/assets/logos/OMWBE-Certified-Badge.png" 
                          alt="OMWBE MBE Certified" 
                          className="h-10 w-auto bg-white p-1 rounded border border-slate-200"
                        />
                      </div>
                    </div>
                    <div className="pt-3">
                      <a href="/assets/documents/Weigh Anchor Capability Statement  - 14May2024.pdf" target="_blank" rel="noopener noreferrer">
                        <Button 
                          variant="outline" 
                          className="w-full border-slate-300"
                        >
                          View Capability Statement
                        </Button>
                      </a>
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

                      {/* Status Message */}
                      {submitStatus.type && (
                        <div className={`p-4 rounded-lg ${
                          submitStatus.type === 'success' 
                            ? 'bg-green-50 text-green-800 border border-green-200' 
                            : 'bg-red-50 text-red-800 border border-red-200'
                        }`}>
                          {submitStatus.message}
                        </div>
                      )}

                      <div className="flex justify-end">
                        <Button 
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-orange hover:bg-orange-dark text-white px-8 disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Send Message
                            </>
                          )}
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
                    Bellevue, WA
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
          <div className="grid lg:grid-cols-4 gap-8 mb-8">
            <div className="flex items-center justify-center">
              <Link href="/">
                <img 
                  src="/assets/logos/WeighAnchor_Logowithwords_Transparent_Alt_2022_03_06.png.png" 
                  alt="Weigh Anchor" 
                  className="h-32 w-auto brightness-0 invert hover:scale-105 transition-transform cursor-pointer"
                />
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <p>Bellevue, WA</p>
                <p>(407) 687-3792</p>
                <p>info@weighanchor.com</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Certifications</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <p>SDVOSB Certified</p>
                <p>Service-Disabled Veteran-Owned</p>
                <p>Federal & Commercial Projects</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/services" className="block text-sm text-slate-400 hover:text-white">
                  Our Services
                </Link>
                <Link href="/about" className="block text-sm text-slate-400 hover:text-white">
                  About Us
                </Link>
                <Link href="/contact" className="block text-sm text-slate-400 hover:text-white">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
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