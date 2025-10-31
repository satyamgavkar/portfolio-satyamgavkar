import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user types
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validate form data
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as keyof ContactFormData] = error.message;
        }
      });
      setErrors(fieldErrors);
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real application, you would send this data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden" style={{ background: 'var(--gradient-card)' }}>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Let's Work Together
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6 relative z-10">
              <Card 
                className="p-6 transition-all duration-300 border border-primary/20 hover:border-primary/60 group"
                style={{ 
                  background: 'var(--gradient-card)',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 relative overflow-hidden" style={{ background: 'var(--gradient-accent)' }}>
                  <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform"></div>
                  <Mail className="h-6 w-6 relative z-10" style={{ color: 'hsl(var(--primary-foreground))' }} />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">your.email@example.com</p>
              </Card>
              
              <Card 
                className="p-6 transition-all duration-300 border border-primary/20 hover:border-primary/60 group"
                style={{ 
                  background: 'var(--gradient-card)',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 relative overflow-hidden" style={{ background: 'var(--gradient-accent)' }}>
                  <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform"></div>
                  <Phone className="h-6 w-6 relative z-10" style={{ color: 'hsl(var(--primary-foreground))' }} />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
              </Card>
              
              <Card 
                className="p-6 transition-all duration-300 border border-primary/20 hover:border-primary/60 group"
                style={{ 
                  background: 'var(--gradient-card)',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 relative overflow-hidden" style={{ background: 'var(--gradient-accent)' }}>
                  <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform"></div>
                  <MapPin className="h-6 w-6 relative z-10" style={{ color: 'hsl(var(--primary-foreground))' }} />
                </div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground text-sm">Your City, Country</p>
              </Card>
            </div>

            {/* Contact Form */}
            <Card 
              className="lg:col-span-2 p-8 relative z-10 border border-primary/20"
              style={{ 
                background: 'var(--gradient-card)',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={`bg-background/50 border-primary/20 focus:border-primary ${errors.name ? 'border-destructive' : ''}`}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={`bg-background/50 border-primary/20 focus:border-primary ${errors.email ? 'border-destructive' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={`bg-background/50 border-primary/20 focus:border-primary ${errors.subject ? 'border-destructive' : ''}`}
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive">{errors.subject}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className={`bg-background/50 border-primary/20 focus:border-primary resize-none ${errors.message ? 'border-destructive' : ''}`}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message}</p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden group"
                  style={{ 
                    background: 'var(--gradient-accent)',
                    boxShadow: 'var(--shadow-glow)'
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
