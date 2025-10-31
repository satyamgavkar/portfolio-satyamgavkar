import { Card } from "@/components/ui/card";
import { Code2, Smartphone, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About Me
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            I'm a passionate mobile application developer specializing in Dart and Flutter. 
            I create high-performance, beautiful cross-platform applications that deliver exceptional user experiences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <Card 
              className="p-6 text-center transition-all duration-300 border border-primary/20 hover:border-primary/60 animate-in fade-in slide-in-from-bottom-4 group"
              style={{ 
                background: 'var(--gradient-card)',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 relative overflow-hidden" style={{ background: 'var(--gradient-accent)', boxShadow: 'var(--shadow-glow)' }}>
                <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-110 transition-transform"></div>
                <Code2 className="h-8 w-8 relative z-10" style={{ color: 'hsl(var(--primary-foreground))' }} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
              <p className="text-muted-foreground">
                Writing maintainable, scalable, and efficient code following best practices
              </p>
            </Card>
            
            <Card 
              className="p-6 text-center transition-all duration-300 border border-primary/20 hover:border-primary/60 animate-in fade-in slide-in-from-bottom-4 delay-100 group"
              style={{ 
                background: 'var(--gradient-card)',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 relative overflow-hidden" style={{ background: 'var(--gradient-accent)', boxShadow: 'var(--shadow-glow)' }}>
                <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-110 transition-transform"></div>
                <Smartphone className="h-8 w-8 relative z-10" style={{ color: 'hsl(var(--primary-foreground))' }} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile First</h3>
              <p className="text-muted-foreground">
                Designing experiences optimized for mobile devices across iOS and Android
              </p>
            </Card>
            
            <Card 
              className="p-6 text-center transition-all duration-300 border border-primary/20 hover:border-primary/60 animate-in fade-in slide-in-from-bottom-4 delay-200 group"
              style={{ 
                background: 'var(--gradient-card)',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 relative overflow-hidden" style={{ background: 'var(--gradient-accent)', boxShadow: 'var(--shadow-glow)' }}>
                <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-110 transition-transform"></div>
                <Zap className="h-8 w-8 relative z-10" style={{ color: 'hsl(var(--primary-foreground))' }} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance</h3>
              <p className="text-muted-foreground">
                Building fast, responsive applications that users love to interact with
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
