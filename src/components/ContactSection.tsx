import { useState } from "react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: "mail", label: "Email", href: "mailto:hello@alexrivera.com" },
  { icon: "photo_camera", label: "Instagram", href: "#" },
  { icon: "smart_display", label: "Vimeo", href: "#" },
  { icon: "work", label: "LinkedIn", href: "#" },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <div>
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm uppercase tracking-widest mb-4">
              Contact
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              LET'S CREATE TOGETHER
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Have a project in mind? I'd love to hear about it. Whether you're 
              looking for a complete production or need help with a specific aspect 
              of your visual content, let's discuss how we can bring your vision to life.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center">
                  <span className="material-icons text-primary">mail</span>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    Email
                  </div>
                  <a
                    href="mailto:hello@alexrivera.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    hello@alexrivera.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center">
                  <span className="material-icons text-primary">location_on</span>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    Location
                  </div>
                  <span className="text-foreground">Los Angeles, CA</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="social-icon"
                  aria-label={link.label}
                >
                  <span className="material-icons text-xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="card-elevated p-8 md:p-10 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm uppercase tracking-wider text-muted-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm uppercase tracking-wider text-muted-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm uppercase tracking-wider text-muted-foreground mb-2"
                >
                  Project Type
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="cinematography">Cinematography</option>
                  <option value="videography">Videography</option>
                  <option value="editing">Video Editing</option>
                  <option value="social">Social Media Management</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm uppercase tracking-wider text-muted-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="form-input resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <Button type="submit" variant="hero" className="w-full">
                <span className="material-icons mr-2">send</span>
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
