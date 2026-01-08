import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navLinks = [
  { 
    label: "About", 
    href: "#about"
  },
  { 
    label: "Portfolio", 
    href: "#portfolio",
    submenu: [
      { label: "All Work", href: "#portfolio", filterId: "all" },
      { label: "Cinematography", href: "#portfolio", filterId: "cinematography" },
      { label: "Videography", href: "#portfolio", filterId: "videography" },
      { label: "Video Editing", href: "#portfolio", filterId: "editing" },
      { label: "Social Media", href: "#portfolio", filterId: "social" },
    ]
  },
  { 
    label: "Services", 
    href: "#services",
    submenu: [
      { label: "Cinematography", href: "#services" },
      { label: "Videography", href: "#services" },
      { label: "Video Editing", href: "#services" },
      { label: "Social Media", href: "#services" },
    ]
  },
  { 
    label: "Contact", 
    href: "#contact"
  },
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

  const handlePortfolioFilter = (filterId?: string) => {
    if (filterId) {
      // Dispatch custom event for portfolio filtering
      window.dispatchEvent(
        new CustomEvent("portfolio-filter", { detail: { filterId } })
      );
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm"
          : "bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[4.5rem] md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground hover:text-primary transition-colors duration-200"
          >
            STUDIO
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    {link.submenu ? (
                      <>
                        <NavigationMenuTrigger className="h-12 px-4 text-sm font-medium text-foreground/90 hover:text-primary bg-transparent hover:bg-accent/50 data-[state=open]:bg-accent/50 data-[state=open]:text-primary">
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-[280px] sm:w-[300px] p-3 sm:p-4">
                            <div className="flex flex-col gap-1 sm:gap-2">
                              {link.submenu.map((subItem) => (
                                <a
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="block px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors min-h-[36px] flex items-center"
                                  onClick={(e) => {
                                    if ("filterId" in subItem && subItem.filterId) {
                                      handlePortfolioFilter(subItem.filterId);
                                    }
                                  }}
                                >
                                  {subItem.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <a
                        href={link.href}
                        className="h-12 px-4 flex items-center text-sm font-medium text-foreground/90 hover:text-primary hover:bg-accent/50 rounded-md transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Button */}
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-semibold hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
            >
              Get Started
            </a>

            {/* Theme Toggle */}
            <button
              onClick={cycleTheme}
              className="ml-2 w-10 h-10 sm:w-11 sm:h-11 rounded-md bg-card border border-border flex items-center justify-center hover:bg-accent hover:border-primary/50 transition-all duration-200 touch-manipulation"
              aria-label="Toggle theme"
            >
              <span className="material-icons text-lg sm:text-xl">
                {getThemeIcon()}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={cycleTheme}
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-md bg-card border border-border flex items-center justify-center hover:bg-accent transition-colors touch-manipulation"
              aria-label="Toggle theme"
            >
              <span className="material-icons text-xl">
                {getThemeIcon()}
              </span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-md bg-card border border-border flex items-center justify-center hover:bg-accent transition-colors touch-manipulation"
              aria-label="Toggle menu"
            >
              <span className="material-icons text-xl">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/98 backdrop-blur-md max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="container px-4 py-4 sm:py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <a
                    href={link.href}
                    className="block px-4 py-3 sm:py-4 min-h-[44px] text-base sm:text-lg font-medium text-foreground/90 hover:text-primary hover:bg-accent/50 rounded-md transition-colors touch-manipulation"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                  {link.submenu && (
                    <div className="pl-4 sm:pl-6 mt-1 flex flex-col gap-1">
                      {link.submenu.map((subItem) => (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2.5 sm:py-3 min-h-[44px] text-sm sm:text-base text-muted-foreground hover:text-primary hover:bg-accent/30 rounded-md transition-colors touch-manipulation"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            if ("filterId" in subItem && subItem.filterId) {
                              handlePortfolioFilter(subItem.filterId);
                            }
                          }}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="#contact"
                className="mt-3 sm:mt-4 px-4 py-3.5 sm:py-4 min-h-[44px] bg-primary text-primary-foreground rounded-md text-base sm:text-lg font-semibold text-center hover:bg-primary/90 transition-colors touch-manipulation"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
