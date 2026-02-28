"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import DarkNav from "@/components/DarkNav";

// --- Fade in on scroll ---
function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

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
    } catch {
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
    <div className="min-h-screen bg-[#0d0f13] text-zinc-300">

      <DarkNav />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16">
        {/* Subtle glow */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-orange-600/4 rounded-full blur-[160px]" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm border border-zinc-700 bg-zinc-900/90 text-xs text-zinc-400 mb-10 uppercase tracking-widest font-mono backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-sm shadow-orange-500/50" />
              Contact
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase">
              Get in Touch
            </h1>

            <div className="flex gap-4 mt-8">
              <div className="w-1 bg-gradient-to-b from-orange-500 to-orange-500/0 rounded-full flex-shrink-0" />
              <p className="text-zinc-400 max-w-xl leading-relaxed text-lg">
                Tell us about your project. We typically respond within one business day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact info strip */}
      <FadeIn>
        <section className="border-y-2 border-zinc-800 bg-zinc-900/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x-2 divide-zinc-800">
              {[
                { icon: Phone, label: "Phone", value: "(407) 687-3792", href: "tel:+14076873792" },
                { icon: Mail, label: "Email", value: "info@weighanchor.com", href: "mailto:info@weighanchor.com" },
                { icon: MapPin, label: "Headquarters", value: "Bellevue, WA" },
                { icon: Clock, label: "Hours", value: "Mon\u2013Fri, 8\u20136 PST" },
              ].map((item, i) => (
                <div key={i} className="py-8 px-6">
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className="h-4 w-4 text-orange-500" />
                    <span className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-mono">{item.label}</span>
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-zinc-300 hover:text-white transition-colors font-medium">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm text-zinc-300 font-medium">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Form + sidebar */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">

              {/* Form */}
              <div className="lg:col-span-2">
                <FadeIn>
                  <div className="mb-10">
                    <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">Send a Message</p>
                    <h2 className="text-3xl font-black text-white tracking-tight">Tell us about your project.</h2>
                  </div>
                </FadeIn>

                <FadeIn delay={100}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-mono mb-2 block">
                          Full Name *
                        </label>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          required
                          className="w-full h-10 rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-300 placeholder:text-zinc-700 focus:outline-none focus:ring-1 focus:ring-orange-500/50 focus:border-orange-500/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-mono mb-2 block">
                          Email Address *
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          required
                          className="w-full h-10 rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-300 placeholder:text-zinc-700 focus:outline-none focus:ring-1 focus:ring-orange-500/50 focus:border-orange-500/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-mono mb-2 block">
                          Phone Number
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                          className="w-full h-10 rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-300 placeholder:text-zinc-700 focus:outline-none focus:ring-1 focus:ring-orange-500/50 focus:border-orange-500/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-mono mb-2 block">
                          Organization
                        </label>
                        <input
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          placeholder="Agency or Company"
                          className="w-full h-10 rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-300 placeholder:text-zinc-700 focus:outline-none focus:ring-1 focus:ring-orange-500/50 focus:border-orange-500/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-mono mb-2 block">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full h-10 rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-300 focus:outline-none focus:ring-1 focus:ring-orange-500/50 focus:border-orange-500/50 transition-colors appearance-none"
                      >
                        <option value="" className="bg-zinc-900 text-zinc-500">Select a project type</option>
                        <option value="federal" className="bg-zinc-900">Federal Construction</option>
                        <option value="commercial" className="bg-zinc-900">Commercial Construction</option>
                        <option value="tribal" className="bg-zinc-900">Tribal Projects</option>
                        <option value="automation" className="bg-zinc-900">Automation Services</option>
                        <option value="consulting" className="bg-zinc-900">Consulting Services</option>
                        <option value="other" className="bg-zinc-900">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-mono mb-2 block">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project needs..."
                        rows={6}
                        required
                        className="w-full rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-300 placeholder:text-zinc-700 focus:outline-none focus:ring-1 focus:ring-orange-500/50 focus:border-orange-500/50 transition-colors resize-none"
                      />
                    </div>

                    {/* Status Message */}
                    {submitStatus.type && (
                      <div className={`p-4 rounded-lg border text-sm ${
                        submitStatus.type === 'success'
                          ? 'bg-green-900/20 text-green-400 border-green-800'
                          : 'bg-red-900/20 text-red-400 border-red-800'
                      }`}>
                        {submitStatus.message}
                      </div>
                    )}

                    <div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-orange-600 text-white hover:bg-orange-500 font-bold text-sm px-10 uppercase tracking-wider rounded-sm shadow-lg shadow-orange-600/20 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </FadeIn>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <FadeIn delay={200}>
                  <div className="relative rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 overflow-hidden">
                    <div className="absolute top-0 left-0 w-24 h-[2px] bg-gradient-to-r from-orange-600 to-transparent" />
                    <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">Federal Contracting</p>
                    <div className="space-y-4">
                      {[
                        { label: "CAGE Code", value: "9LA92" },
                        { label: "UEI", value: "JU1LYRJGRWL9" },
                        { label: "NAICS", value: "236220, 541330, 541511" },
                      ].map((item, i) => (
                        <div key={i}>
                          <p className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-mono">{item.label}</p>
                          <p className="text-zinc-300 font-medium text-sm">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={300}>
                  <div className="relative rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 overflow-hidden">
                    <div className="absolute top-0 left-0 w-16 h-[2px] bg-gradient-to-r from-orange-600 to-transparent" />
                    <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">Certifications</p>
                    <div className="flex flex-wrap gap-2">
                      {["SDVOSB", "Veteran-Owned", "MBE", "DBE", "King County SCS"].map((cert, i) => (
                        <div key={i} className="px-3 py-1.5 rounded-sm border border-zinc-700 bg-zinc-900/80 text-xs text-zinc-400 uppercase tracking-widest font-mono">
                          {cert}
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={400}>
                  <div className="relative rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 overflow-hidden">
                    <div className="absolute top-0 left-0 w-16 h-[2px] bg-gradient-to-r from-orange-600 to-transparent" />
                    <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono mb-4">Capability Statement</p>
                    <p className="text-zinc-500 text-sm mb-4 leading-relaxed">Download our full capability statement for procurement purposes.</p>
                    <a href="/assets/documents/Weigh Anchor — Capability Statement 2026.pdf" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-white hover:border-zinc-600 rounded-sm uppercase tracking-wider text-xs font-medium">
                        Download PDF
                      </Button>
                    </a>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t-2 border-zinc-800 bg-[#0a0c10]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="block mb-4">
                <img
                  src="/assets/logos/weigh_anchor_logo_v2.png"
                  alt="Weigh Anchor"
                  className="h-20 w-auto mb-3"
                />
                <span className="font-medium text-zinc-400 text-sm uppercase tracking-widest">
                  Weigh Anchor
                </span>
              </Link>
            </div>
            <div>
              <h3 className="font-bold text-zinc-500 mb-4 text-[10px] uppercase tracking-[0.2em]">Contact</h3>
              <div className="space-y-2 text-sm text-zinc-600">
                <p>Bellevue, WA</p>
                <p>(407) 687-3792</p>
                <p>info@weighanchor.com</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-zinc-500 mb-4 text-[10px] uppercase tracking-[0.2em]">Company</h3>
              <div className="space-y-2">
                <Link href="/services" className="block text-sm text-zinc-600 hover:text-white transition-colors">Construction Services</Link>
                <Link href="/automation" className="block text-sm text-zinc-600 hover:text-white transition-colors">Automation Services</Link>
                <Link href="/about" className="block text-sm text-zinc-600 hover:text-white transition-colors">About</Link>
                <Link href="/contact" className="block text-sm text-zinc-600 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-zinc-500 mb-4 text-[10px] uppercase tracking-[0.2em]">Certifications</h3>
              <div className="space-y-2 text-sm text-zinc-600">
                <p>SDVOSB</p>
                <p>Veteran-Owned</p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-zinc-800 font-mono">&copy; 2026 Weigh Anchor. All rights reserved.</div>
            <div className="text-xs text-zinc-800 font-mono">Proudly Veteran Owned</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
