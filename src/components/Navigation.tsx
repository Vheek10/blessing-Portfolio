import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, cycleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getThemeIcon = () => {
    switch (theme) {
      case "purple":
        return "auto_awesome";
      case "teal":
        return "water_drop";
      case "orange":
        return "local_fire_department";
      default:
        return "dark_mode";
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-2xl tracking-wider text-foreground hover:text-primary transition-colors"
          >
            STUDIO
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link hover-underline"
              >
                {link.label}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={cycleTheme}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
              aria-label="Toggle theme"
            >
              <span className="material-icons theme-toggle-icon text-xl">
                {getThemeIcon()}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <span className="material-icons">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border animate-fade-in">
            <div className="container px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link text-lg py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={cycleTheme}
                className="flex items-center gap-3 py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="material-icons">{getThemeIcon()}</span>
                <span className="uppercase tracking-wider text-sm font-medium">
                  Change Theme
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
