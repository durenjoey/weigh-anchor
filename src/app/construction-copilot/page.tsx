"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  MessageSquare,
  BookOpen,
  FileText,
  Star,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Shield,
  Zap
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

export default function ConstructionCopilotPage() {
  const features = [
    {
      title: "AI CONSTRUCTION CHAT",
      icon: MessageSquare,
      description: "Get instant answers to construction questions with our intelligent AI assistant",
      benefits: [
        "24/7 availability for instant support",
        "Trained on construction best practices",
        "Multi-language support",
        "Context-aware responses"
      ]
    },
    {
      title: "SMART LESSONS LEARNED",
      icon: BookOpen,
      description: "Capture and search project insights to prevent repeated mistakes",
      benefits: [
        "AI-powered categorization",
        "Intelligent search capabilities",
        "Cross-project insights",
        "Team knowledge sharing"
      ]
    },
    {
      title: "DAILY REPORTER",
      icon: FileText,
      description: "Streamline daily reporting with AI-assisted documentation",
      benefits: [
        "Voice-to-text capability",
        "Auto-generated summaries",
        "Photo integration",
        "Weather data inclusion"
      ]
    }
  ];

  const stats = [
    { value: "10,000+", label: "AI Conversations" },
    { value: "4.4/5", label: "Star Rating" },
    { value: "200+", label: "Active Reviews" },
    { value: "95%", label: "User Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-20 h-20 bg-electric-blue/20 rounded-full flex items-center justify-center animate-pulse-glow">
                  <Bot className="w-10 h-10 text-electric-blue" />
                </div>
                <div className="absolute -inset-2 w-24 h-24 border-2 border-electric-blue/30 rounded-full animate-ping"></div>
              </div>
            </div>
            
            <Badge className="text-signal-orange border-signal-orange mb-6">
              AI-POWERED CONSTRUCTION PLATFORM
            </Badge>
            
            <h1 className="font-display text-4xl md:text-6xl text-arctic-white mb-6 leading-tight">
              CONSTRUCTION COPILOT
              <span className="block text-electric-blue">YOUR AI SITE ASSISTANT</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              The intelligent construction management platform that learns, adapts, and helps your team 
              build smarter. Powered by advanced AI to transform how construction teams work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://constructioncopilot.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-signal-orange hover:bg-signal-orange/80 text-arctic-white">
                  TRY CONSTRUCTION COPILOT FREE
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue/10">
                  REQUEST ENTERPRISE DEMO
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-signal-orange rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-electric-blue rounded-full animate-pulse"></div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-electric-blue/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-electric-blue mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-arctic-white mb-6">
              INTELLIGENT FEATURES
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three powerful AI tools that work together to revolutionize your construction workflow
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-blue/20 to-signal-orange/20 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-electric-blue" />
                  </div>
                  <CardTitle className="font-display text-2xl text-arctic-white mb-3">
                    {feature.title}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-signal-orange mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-background via-electric-blue/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl text-arctic-white mb-6">
                HOW IT WORKS
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get started in minutes and see immediate results
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl font-bold text-electric-blue">1</div>
                </div>
                <h3 className="font-display text-xl text-arctic-white mb-3">
                  SIGN UP FREE
                </h3>
                <p className="text-muted-foreground">
                  Create your account in seconds. No credit card required for the free tier.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl font-bold text-electric-blue">2</div>
                </div>
                <h3 className="font-display text-xl text-arctic-white mb-3">
                  INVITE YOUR TEAM
                </h3>
                <p className="text-muted-foreground">
                  Add team members and start collaborating immediately with shared insights.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl font-bold text-electric-blue">3</div>
                </div>
                <h3 className="font-display text-xl text-arctic-white mb-3">
                  START BUILDING SMARTER
                </h3>
                <p className="text-muted-foreground">
                  Ask questions, capture lessons, and generate reports with AI assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-arctic-white mb-6">
                  WHY CONSTRUCTION TEAMS LOVE COPILOT
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-signal-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-signal-orange" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-arctic-white mb-2">
                        INSTANT ANSWERS
                      </h3>
                      <p className="text-muted-foreground">
                        No more searching through manuals or waiting for expert advice. Get accurate construction guidance instantly.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-signal-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-signal-orange" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-arctic-white mb-2">
                        CONTINUOUS IMPROVEMENT
                      </h3>
                      <p className="text-muted-foreground">
                        Learn from every project. AI helps you identify patterns and prevent repeated mistakes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-signal-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-signal-orange" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-arctic-white mb-2">
                        ENTERPRISE SECURITY
                      </h3>
                      <p className="text-muted-foreground">
                        Your data is protected with bank-level encryption and never used to train public models.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Card className="bg-gradient-to-br from-signal-orange/20 to-electric-blue/20 border-signal-orange/30 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <Star className="w-5 h-5 text-signal-orange fill-signal-orange" />
                        <Star className="w-5 h-5 text-signal-orange fill-signal-orange" />
                        <Star className="w-5 h-5 text-signal-orange fill-signal-orange" />
                        <Star className="w-5 h-5 text-signal-orange fill-signal-orange" />
                        <Star className="w-5 h-5 text-signal-orange" />
                      </div>
                      <p className="text-lg text-arctic-white italic">
                        "Construction Copilot has transformed how our team handles daily operations. 
                        The AI chat alone saves us hours every week."
                      </p>
                      <div>
                        <p className="font-display text-arctic-white">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">Project Manager, BuildTech Inc.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-signal-orange/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-electric-blue/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card className="bg-gradient-to-r from-electric-blue/20 to-signal-orange/20 border-electric-blue/30 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="font-display text-3xl text-arctic-white mb-6">
                READY TO BUILD SMARTER?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of construction professionals using AI to work more efficiently and effectively.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://constructioncopilot.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-signal-orange hover:bg-signal-orange/80 text-arctic-white">
                    START FREE TRIAL
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue/10">
                    TALK TO SALES
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Free forever for small teams • No credit card required
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-electric-blue/20 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-3 h-3 bg-electric-blue rounded-full animate-pulse"></div>
              <span className="font-mono text-sm text-muted-foreground">
                WEIGH ANCHOR • CONSTRUCTION INNOVATION
              </span>
            </div>
            <div className="font-mono text-sm text-muted-foreground">
              PROUDLY VETERAN OWNED • SDVOSB CERTIFIED
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
