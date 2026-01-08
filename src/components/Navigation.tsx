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
import { Logo } from "@/components/Logo";

const navLinks = [
  { 
    label: "ABOUT", 
    href: "#about"
  },
  { 
    label: "PORTFOLIO", 

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
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
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

  const toggleSubmenu = (href: string) => {
    setOpenSubmenu(openSubmenu === href ? null : href);
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
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    {link.submenu ? (
                      <>
                        <NavigationMenuTrigger className="h-12 px-4 text-sm font-medium font-body uppercase tracking-wider text-foreground/90 hover:text-primary bg-transparent hover:bg-accent/50 data-[state=open]:bg-accent/50 data-[state=open]:text-primary">
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-[280px] sm:w-[300px] p-3 sm:p-4">
                            <div className="flex flex-col gap-1 sm:gap-2">
                              {link.submenu.map((subItem) => (
                                <a
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="block px-3 py-2 text-sm font-body uppercase tracking-wider rounded-md hover:bg-accent hover:text-accent-foreground transition-colors min-h-[36px] flex items-center"
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
                        className="h-12 px-4 flex items-center text-sm font-medium font-body uppercase tracking-wider text-foreground/90 hover:text-primary hover:bg-accent/50 rounded-md transition-colors"
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
              className="ml-4 px-6 py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-semibold font-body uppercase tracking-wider hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
            >
              Get Started
            </a>

            {/* Theme Toggle */}
            <button
              onClick={cycleTheme}
              className="ml-2 w-10 h-10 sm:w-11 sm:h-11 rounded-md flex items-center justify-center hover:text-primary transition-all duration-200 touch-manipulation"
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
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-md flex items-center justify-center hover:text-primary transition-colors touch-manipulation"
              aria-label="Toggle theme"
            >
              <span className="material-icons text-xl">
                {getThemeIcon()}
              </span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-md flex items-center justify-center hover:text-primary transition-colors touch-manipulation"
              aria-label="Toggle menu"
            >
              <span className="material-icons text-xl">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={cn(
            "lg:hidden absolute top-full right-0 bg-background border-b border-l border-border shadow-lg transition-all duration-300 ease-in-out overflow-hidden z-40 max-w-sm w-full",
            isMobileMenuOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col p-6 space-y-6 overflow-y-auto max-h-[80vh]">
            {navLinks.map((link) => (
              <div key={link.href} className="flex flex-col space-y-3">
                {link.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(link.href)}
                      className="font-body text-xl font-medium uppercase tracking-wider text-foreground hover:text-primary transition-colors flex items-center justify-between w-full text-left"
                    >
                      {link.label}
                      <span className={cn(
                        "material-icons transition-transform duration-200",
                        openSubmenu === link.href ? "rotate-180" : ""
                      )}>
                        expand_more
                      </span>
                    </button>
                    
                    {/* Submenu - Only show when open */}
                    {openSubmenu === link.href && (
                      <div className="flex flex-col pl-4 space-y-3 border-l-2 border-border/50 animate-in slide-in-from-top-2 duration-200">
                        {link.submenu.map((subItem) => (
                          <a
                            key={subItem.href}
                            href={subItem.href}
                            className="font-body text-base uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setOpenSubmenu(null);
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
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="font-body text-xl font-medium uppercase tracking-wider text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}

            <div className="pt-6 border-t border-border flex flex-col gap-6">
              <a
                href="#contact"
                className="font-body font-semibold uppercase tracking-wider text-center w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
              
              <div className="flex justify-center gap-6">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <span className="material-icons">email</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <span className="material-icons">camera_alt</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <span className="material-icons">videocam</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
