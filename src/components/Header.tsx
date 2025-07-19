"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Activity,
  User,
  Briefcase,
  Shield,
  Mail
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-electric-blue/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-electric-blue rounded-full flex items-center justify-center animate-pulse-glow">
              <Target className="w-4 h-4 text-arctic-white" />
            </div>
            <div>
              <h1 className="font-display text-xl text-arctic-white">PROJECT ARD</h1>
              <p className="text-xs text-muted-foreground">ADVANCED REMOTE DEPLOYMENT</p>
            </div>
          </Link>
          
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/about">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`${
                    isActive('/about') 
                      ? 'text-electric-blue bg-electric-blue/10' 
                      : 'text-muted-foreground hover:text-electric-blue hover:bg-electric-blue/10'
                  }`}
                >
                  <User className="w-4 h-4 mr-2" />
                  About
                </Button>
              </Link>
              <Link href="/operations">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`${
                    isActive('/operations') 
                      ? 'text-electric-blue bg-electric-blue/10' 
                      : 'text-muted-foreground hover:text-electric-blue hover:bg-electric-blue/10'
                  }`}
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  Projects
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-muted-foreground hover:text-electric-blue hover:bg-electric-blue/10"
              >
                <Shield className="w-4 h-4 mr-2" />
                Capabilities
              </Button>
              <Link href="/contact">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`${
                    isActive('/contact') 
                      ? 'text-electric-blue bg-electric-blue/10' 
                      : 'text-muted-foreground hover:text-electric-blue hover:bg-electric-blue/10'
                  }`}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </Link>
            </nav>
            <Badge variant="outline" className="text-electric-blue border-electric-blue">
              <Activity className="w-3 h-3 mr-1" />
              ACTIVE
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
}
