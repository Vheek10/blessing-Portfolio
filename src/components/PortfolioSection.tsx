import { useState } from "react";
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

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm uppercase tracking-widest mb-4">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            SELECTED WORKS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated collection of projects showcasing expertise across cinematography,
            videography, editing, and social media management.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={cn("filter-btn flex items-center gap-2", {
                active: activeFilter === cat.id,
              })}
            >
              <span className="material-icons text-lg">{cat.icon}</span>
              <span className="hidden sm:inline">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="portfolio-item group aspect-[4/3] cursor-pointer opacity-0 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Play Overlay */}
              <div className="play-overlay group-hover:opacity-100 z-10">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
                  <span className="material-icons text-primary-foreground text-3xl">
                    play_arrow
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-display text-xl text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/70">{project.description}</p>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-2 py-1 bg-background/80 backdrop-blur-sm text-xs uppercase tracking-wider rounded-full text-foreground/80">
                  {categories.find((c) => c.id === project.category)?.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
