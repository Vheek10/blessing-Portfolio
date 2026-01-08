const footerLinks = {
  navigation: [
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  social: [
    { icon: "photo_camera", label: "Instagram", href: "#" },
    { icon: "smart_display", label: "Vimeo", href: "#" },
    { icon: "work", label: "LinkedIn", href: "#" },
    { icon: "mail", label: "Email", href: "mailto:hello@alexrivera.com" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-2xl tracking-wider text-foreground hover:text-primary transition-colors"
          >
            ALEX RIVERA
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-xs hover-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-3">
            {footerLinks.social.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="social-icon"
                aria-label={link.label}
              >
                <span className="material-icons text-lg">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Alex Rivera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
