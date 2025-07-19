"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Shield
} from "lucide-react";
import Header from "@/components/Header";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-electric-blue" />
              </div>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl text-arctic-white mb-6 leading-tight">
              CONTACT US
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your next complex project? Let's explore how we can support your infrastructure and technology initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Information */}
              <div>
                <h2 className="font-display text-3xl text-arctic-white mb-8">
                  CONTACT INFORMATION
                </h2>
                
                <div className="space-y-8">
                  <Card className="bg-card/30 backdrop-blur-sm border-electric-blue/20">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-electric-blue/20 rounded-full flex items-center justify-center">
                          <Mail className="w-6 h-6 text-electric-blue" />
                        </div>
                        <div>
                          <h3 className="font-display text-lg text-arctic-white mb-1">EMAIL</h3>
                          <a 
                            href="mailto:info@projectard.com" 
                            className="text-electric-blue hover:text-electric-blue/80 font-mono"
                          >
                            info@projectard.com
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/30 backdrop-blur-sm border-electric-blue/20">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-electric-blue/20 rounded-full flex items-center justify-center">
                          <Phone className="w-6 h-6 text-electric-blue" />
                        </div>
                        <div>
                          <h3 className="font-display text-lg text-arctic-white mb-1">PHONE</h3>
                          <a 
                            href="tel:407-687-3792" 
                            className="text-electric-blue hover:text-electric-blue/80 font-mono"
                          >
                            407-687-3792
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/30 backdrop-blur-sm border-electric-blue/20">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-electric-blue/20 rounded-full flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-electric-blue" />
                        </div>
                        <div>
                          <h3 className="font-display text-lg text-arctic-white mb-1">HEADQUARTERS</h3>
                          <p className="text-muted-foreground">Bellevue, WA</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-electric-blue" />
                    <span className="text-muted-foreground">We respond to all inquiries within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-electric-blue" />
                    <span className="text-muted-foreground">All project discussions are confidential</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="font-display text-3xl text-arctic-white mb-8">
                  GET STARTED
                </h2>
                <p className="text-muted-foreground mb-8">
                  Connect with our team to discuss your project requirements.
                </p>

                <Card className="bg-card/30 backdrop-blur-sm border-electric-blue/20">
                  <CardContent className="p-8">
                    <h3 className="font-display text-xl text-arctic-white mb-6">CONTACT FORM</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-muted-foreground mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-background/50 border border-electric-blue/20 rounded-lg focus:outline-none focus:border-electric-blue text-arctic-white placeholder-muted-foreground"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-muted-foreground mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-background/50 border border-electric-blue/20 rounded-lg focus:outline-none focus:border-electric-blue text-arctic-white placeholder-muted-foreground"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-background/50 border border-electric-blue/20 rounded-lg focus:outline-none focus:border-electric-blue text-arctic-white placeholder-muted-foreground"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-background/50 border border-electric-blue/20 rounded-lg focus:outline-none focus:border-electric-blue text-arctic-white placeholder-muted-foreground"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project scope, timeline, and specific requirements"
                          className="w-full px-4 py-3 bg-background/50 border border-electric-blue/20 rounded-lg focus:outline-none focus:border-electric-blue text-arctic-white placeholder-muted-foreground resize-none"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-electric-blue hover:bg-electric-blue/80 text-arctic-white font-medium py-4"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-electric-blue/20 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-3 h-3 bg-electric-blue rounded-full animate-pulse"></div>
              <span className="font-mono text-sm text-muted-foreground">
                PROJECT ARD • ADVANCED REMOTE DEPLOYMENT
              </span>
            </div>
            <div className="font-mono text-sm text-muted-foreground">
              SDVOSB • MBE • DBE CERTIFIED
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
