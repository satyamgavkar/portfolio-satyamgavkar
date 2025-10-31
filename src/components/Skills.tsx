import { Card } from "@/components/ui/card";

const skills = [
  { name: "Dart", level: 95, icon: "🎯" },
  { name: "Flutter", level: 90, icon: "📱" },
  { name: "Firebase", level: 85, icon: "🔥" },
  { name: "REST APIs", level: 88, icon: "🔌" },
  { name: "Git", level: 82, icon: "📦" },
  { name: "UI/UX Design", level: 80, icon: "🎨" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden" style={{ background: 'var(--gradient-card)' }}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Technical Skills
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Technologies and tools I work with
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name}
                className="p-6 transition-all duration-300 border border-primary/20 hover:border-primary/60 animate-in fade-in slide-in-from-bottom-4 relative overflow-hidden group"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  background: 'var(--gradient-card)',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <span className="text-4xl drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">{skill.icon}</span>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                      <span className="text-primary font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden backdrop-blur-sm">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out relative"
                        style={{ 
                          width: `${skill.level}%`,
                          background: 'var(--gradient-accent)',
                          boxShadow: '0 0 10px hsl(var(--primary) / 0.5)'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
