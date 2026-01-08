import { Logo } from "@/components/Logo";

const footerLinks = {
  navigation: [
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  social: [
    { icon: "mail", label: "Email", href: "mailto:abbablessing075@gmail.com" },
    { icon: "photo_camera", label: "Instagram", href: "https://www.instagram.com/_bless.official" },
    { icon: "smart_display", label: "Vimeo", href: "#" },
    { icon: "work", label: "LinkedIn", href: "https://www.linkedin.com/in/blessing-abba-aa9633345/" },

  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-10 md:py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Logo */}
          <Logo variant="footer" />


          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6">
            {footerLinks.navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-xs sm:text-sm hover-underline min-h-[44px] flex items-center touch-manipulation"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-2 sm:gap-3">
            {footerLinks.social.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="social-icon w-9 h-9 sm:w-10 sm:h-10 min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px] touch-manipulation"
                aria-label={link.label}
              >
                <span className="material-icons text-base sm:text-lg">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-border text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {currentYear} Blessing Abba. All rights reserved.

          </p>
        </div>
      </div>
    </footer>
  );
}
