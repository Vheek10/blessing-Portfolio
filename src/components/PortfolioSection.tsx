import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Import portfolio images (using as placeholders for video thumbnails)
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import { VideoPlayer } from "@/components/VideoPlayer";

import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const categories = [
  { id: "all", label: "All Work", icon: "apps" },
  { id: "cinematography", label: "Cinematography", icon: "videocam" },
  { id: "videography", label: "Videography", icon: "movie" },
  { id: "editing", label: "Video Editing", icon: "edit" },
  { id: "social", label: "Social Media", icon: "campaign" },
];

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  videoSrc: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Beaver Health",
    category: "cinematography",
    description: "Cinematic health documentary piece",
    image: portfolio1,
    videoSrc: "/videos/Beaver health.mp4"
  },
  {
    id: 2,
    title: "FCS Thanksgiving Highlights",
    category: "videography",
    description: "Event coverage and highlights",
    image: portfolio2,
    videoSrc: "/videos/FCS Thanksgiving Highlights.mp4"
  },
  {
    id: 3,
    title: "Inans Studio Christmas",
    category: "editing",
    description: "Holiday themed studio production",
    image: portfolio3,
    videoSrc: "/videos/Inans Studio Christmas Video.mp4"
  },
  {
    id: 4,
    title: "Joy Efurhievwe's Project",
    category: "social",
    description: "Oral literature project presentation",
    image: portfolio4,
    videoSrc: "/videos/Joy Efurhievwe's Oral lit Project"
  },
  {
    id: 5,
    title: "FCS Singles Weekend",
    category: "videography",
    description: "Event countdown and promo",
    image: portfolio1,
    videoSrc: "/videos/FCS Singles Weekend {3 days to go}.mp4"
  },
  {
    id: 6,
    title: "FCS Invite Video",
    category: "videography",
    description: "Event invitation and teaser",
    image: portfolio2,
    videoSrc: "/videos/FCS Invite Video.mp4"
  },
  {
    id: 8,
    title: "FCS FYB Award Night",
    category: "social",
    description: "Award ceremony coverage",
    image: portfolio4,
    videoSrc: "/videos/FCS FYB Award Night.mp4"
  },
  {
    id: 9,
    title: "FCS Variety Weekend",
    category: "videography",
    description: "Special event invitation",
    image: portfolio1,
    videoSrc: "/videos/FCS Variety Weekend Invite.mp4"
  }
];

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// ... imports remain same ...

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState<Project | null>(null);


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
        {/* Marquee Wrapper */}
        <div className="perspective-container overflow-hidden group/marquee pause-on-hover -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="animate-marquee flex gap-4 sm:gap-6 py-8">
            {/* First Set of Projects */}
            {filteredProjects.map((project, index) => (
              <div
                key={`${project.id}-first`}
                className="portfolio-item group/item aspect-[4/3] cursor-pointer opacity-0 animate-slide-in-left relative overflow-hidden bg-black rounded-xl border-2 border-white/5 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[6px_6px_0px_0px_rgba(var(--primary),0.2)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 flex-shrink-0 w-[75vw] sm:w-[350px] lg:w-[400px]"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedVideo(project)}
              >
                <video
                  src={project.videoSrc}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onMouseEnter={(e) => {
                    const video = e.currentTarget;
                    if (video.paused) {
                      video.currentTime = 0;
                      video.play().catch(error => console.log("Play failed:", error));
                    }
                  }}
                  onMouseLeave={(e) => {
                    const video = e.currentTarget;
                    video.pause();
                    video.currentTime = 0;
                  }}
                />
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none group-hover/item:opacity-0 transition-opacity duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg">
                    <span className="material-icons text-white text-2xl sm:text-4xl ml-1 opacity-90">
                      play_arrow
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover/item:bg-transparent transition-colors duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-20 translate-y-4 opacity-0 group-hover/item:translate-y-0 group-hover/item:opacity-100 transition-all duration-300 pointer-events-none">
                  <h3 className="font-display text-lg sm:text-xl text-white mb-1 shadow-sm">
                    {project.title}
                  </h3>
                </div>
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 pointer-events-none">
                  <span className="px-2 py-0.5 sm:py-1 bg-background/80 backdrop-blur-sm text-[10px] sm:text-xs uppercase tracking-wider rounded-full text-foreground/80 shadow-sm">
                    {categories.find((c) => c.id === project.category)?.label}
                  </span>
                </div>
              </div>
            ))}

            {/* Duplicated Set for Infinite Loop */}
            {filteredProjects.map((project, index) => (
              <div
                key={`${project.id}-second`}
                className="portfolio-item group/item aspect-[4/3] cursor-pointer opacity-0 animate-slide-in-left relative overflow-hidden bg-black rounded-xl border-2 border-white/5 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[6px_6px_0px_0px_rgba(var(--primary),0.2)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 flex-shrink-0 w-[75vw] sm:w-[350px] lg:w-[400px]"
                style={{ animationDelay: `${(index + filteredProjects.length) * 0.1}s` }}
                onClick={() => setSelectedVideo(project)}
              >
                <video
                  src={project.videoSrc}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onMouseEnter={(e) => {
                    const video = e.currentTarget;
                    if (video.paused) {
                      video.currentTime = 0;
                      video.play().catch(error => console.log("Play failed:", error));
                    }
                  }}
                  onMouseLeave={(e) => {
                    const video = e.currentTarget;
                    video.pause();
                    video.currentTime = 0;
                  }}
                />
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none group-hover/item:opacity-0 transition-opacity duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg">
                    <span className="material-icons text-white text-2xl sm:text-4xl ml-1 opacity-90">
                      play_arrow
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover/item:bg-transparent transition-colors duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-20 translate-y-4 opacity-0 group-hover/item:translate-y-0 group-hover/item:opacity-100 transition-all duration-300 pointer-events-none">
                  <h3 className="font-display text-lg sm:text-xl text-white mb-1 shadow-sm">
                    {project.title}
                  </h3>
                </div>
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 pointer-events-none">
                  <span className="px-2 py-0.5 sm:py-1 bg-background/80 backdrop-blur-sm text-[10px] sm:text-xs uppercase tracking-wider rounded-full text-foreground/80 shadow-sm">
                    {categories.find((c) => c.id === project.category)?.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* More Projects Button */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <a
            href="https://drive.google.com/drive/folders/1NsfMhSvzhO3kcRXUKHwBsjTDA7KeyQd6"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold uppercase tracking-wider rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
          >
            <span className="material-icons text-xl">open_in_new</span>
            Click Here to See My Other Projects
            <span className="material-icons text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>
      </div>

      <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
        <DialogContent className="max-w-6xl p-0 bg-zinc-950 border-zinc-800 overflow-hidden text-white sm:rounded-xl">
          <DialogHeader className="sr-only">
             <DialogTitle>{selectedVideo?.title}</DialogTitle>
          </DialogHeader>
          
          {selectedVideo && (
            <div className="flex flex-col">
              {/* Video Container */}
              <div className="relative aspect-video w-full bg-black group">
                 <VideoPlayer
                  src={selectedVideo.videoSrc}
                  autoPlay={true}
                  title={selectedVideo.title}
                />
              </div>

              {/* Project Details */}
              <div className="p-6 sm:p-8 bg-zinc-900/50 backdrop-blur-xl border-t border-zinc-800/50">
                <div className="flex flex-col sm:flex-row gap-6 justify-between items-start">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 mb-2">
                       <span className="px-2 py-1 text-[10px] uppercase font-medium tracking-wider bg-primary/20 text-primary rounded-md border border-primary/20">
                          {categories.find((c) => c.id === selectedVideo.category)?.label}
                       </span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl text-zinc-100">
                      {selectedVideo.title}
                    </h3>
                    <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl">
                      {selectedVideo.description}
                    </p>
                  </div>
                  
                  {/* Share/Action placeholder or just layout balance */}
                  <div className="hidden sm:block">
                     {/* Could add share buttons here later */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
