import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Mobile App",
    description: "Full-featured shopping app with payment integration, real-time inventory, and order tracking.",
    tags: ["Flutter", "Firebase", "Stripe"],
    image: "📱",
  },
  {
    title: "Fitness Tracker",
    description: "Health and fitness application with workout plans, calorie tracking, and progress analytics.",
    tags: ["Dart", "SQLite", "Charts"],
    image: "💪",
  },
  {
    title: "Social Media Platform",
    description: "Real-time messaging, posts, stories, and community features with cloud synchronization.",
    tags: ["Flutter", "WebSocket", "Cloud"],
    image: "💬",
  },
  {
    title: "Food Delivery App",
    description: "Location-based restaurant discovery, real-time order tracking, and payment processing.",
    tags: ["Maps API", "Firebase", "Flutter"],
    image: "🍕",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Some of my recent work
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="group transition-all duration-300 border border-primary/20 hover:border-primary/60 animate-in fade-in slide-in-from-bottom-4 relative overflow-hidden"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  background: 'var(--gradient-card)',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: 'var(--shadow-hover)' }}></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-center w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 text-7xl relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative z-10 drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]">{project.image}</span>
                  </div>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
