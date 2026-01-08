import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Import portfolio images
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const categories = [
  { id: "all", label: "All Work", icon: "apps" },
  { id: "cinematography", label: "Cinematography", icon: "videocam" },
  { id: "videography", label: "Videography", icon: "movie" },
  { id: "editing", label: "Video Editing", icon: "edit" },
  { id: "social", label: "Social Media", icon: "campaign" },
];

const projects = [
  {
    id: 1,
    title: "Mountain Documentary",
    category: "cinematography",
    description: "Feature-length documentary on alpine exploration",
    image: portfolio1,
  },
  {
    id: 2,
    title: "Brand Launch Campaign",
    category: "videography",
    description: "Product launch video for tech startup",
    image: portfolio2,
  },
  {
    id: 3,
    title: "Music Video Edit",
    category: "editing",
    description: "Post-production for indie artist",
    image: portfolio3,
  },
  {
    id: 4,
    title: "Social Media Series",
    category: "social",
    description: "30-day content campaign for fashion brand",
    image: portfolio4,
  },
  {
    id: 5,
    title: "Wedding Cinematography",
    category: "cinematography",
    description: "Cinematic wedding film in Tuscany",
    image: portfolio1,
  },
  {
    id: 6,
    title: "Corporate Documentary",
    category: "videography",
    description: "Company culture and brand story",
    image: portfolio2,
  },
  {
    id: 7,
    title: "Short Film Post",
    category: "editing",
    description: "Color grading and VFX for indie film",
    image: portfolio3,
  },
  {
    id: 8,
    title: "Instagram Reels",
    category: "social",
    description: "Viral content strategy for lifestyle brand",
    image: portfolio4,
  },
];

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const handlePortfolioFilter = (event: CustomEvent<{ filterId: string }>) => {
      setActiveFilter(event.detail.filterId);
      // Smooth scroll to portfolio section
      const portfolioSection = document.getElementById("portfolio");
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    window.addEventListener("portfolio-filter", handlePortfolioFilter as EventListener);
    return () => {
      window.removeEventListener("portfolio-filter", handlePortfolioFilter as EventListener);
    };
  }, []);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background scroll-mt-16 sm:scroll-mt-[4.5rem] md:scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
            Portfolio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-3 sm:mb-4 px-2 leading-tight">
            SELECTED WORKS
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            A curated collection of projects showcasing expertise across cinematography,
            videography, editing, and social media management.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 px-2 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={cn("filter-btn flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 min-h-[40px] sm:min-h-[44px] text-xs sm:text-sm touch-manipulation whitespace-nowrap", {
                active: activeFilter === cat.id,
              })}
            >
              <span className="material-icons text-base sm:text-lg flex-shrink-0">{cat.icon}</span>
              <span className="hidden min-[375px]:inline sm:hidden md:inline">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid with 3D Perspective */}
        <div className="perspective-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="portfolio-item group aspect-[4/3] cursor-pointer opacity-0 animate-scale-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />

              {/* Play Overlay */}
              <div className="play-overlay group-hover:opacity-100 z-10 flex items-center justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-transform group-hover:scale-110">
                  <span className="material-icons text-primary-foreground text-xl sm:text-2xl md:text-3xl">
                    play_arrow
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-display text-lg sm:text-xl text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-foreground/70 line-clamp-2">{project.description}</p>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20">
                <span className="px-2 py-0.5 sm:py-1 bg-background/80 backdrop-blur-sm text-[10px] sm:text-xs uppercase tracking-wider rounded-full text-foreground/80">
                  {categories.find((c) => c.id === project.category)?.label}
                </span>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
