import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md border-b border-primary/20"
          : "bg-transparent"
      }`}
      style={
        isScrolled
          ? { background: "hsl(var(--background) / 0.8)" }
          : undefined
      }
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            Portfolio
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="relative overflow-hidden group"
              style={{
                background: "var(--gradient-accent)",
                boxShadow: "var(--shadow-glow)",
              }}
            >
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden border-t border-primary/20 animate-in slide-in-from-top-5 duration-300"
          style={{ background: "hsl(var(--background) / 0.95)" }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left py-3 px-4 hover:bg-primary/10 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="mt-2"
              style={{ background: "var(--gradient-accent)" }}
            >
              Hire Me
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
