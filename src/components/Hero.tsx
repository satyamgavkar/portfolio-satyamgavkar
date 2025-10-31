import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16" style={{ background: 'var(--gradient-hero)' }}>
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold">Mobile Application Developer</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(56,189,248,0.5)]">
              Building Beautiful Mobile Experiences
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            Specialized in Dart & Flutter development, crafting seamless cross-platform applications
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button 
              size="lg" 
              className="relative overflow-hidden group"
              style={{ 
                background: 'var(--gradient-accent)',
                boxShadow: 'var(--shadow-glow)'
              }}
            >
              <span className="relative z-10 flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToProjects}
              className="border-primary/50 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]"
            >
              View Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <a href="#" className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:scale-110">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:scale-110">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:scale-110">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
