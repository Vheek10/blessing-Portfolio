import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.15)_0%,transparent_70%)]" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Video Reel Mockup */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-full max-w-6xl aspect-video border-2 border-primary/30 rounded-2xl flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center animate-pulse-glow">
            <span className="material-icons text-primary text-4xl">play_arrow</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 opacity-0 animate-fade-in-up">
            ALEX RIVERA
          </h1>

          {/* Subtitle */}
          <p
            className="font-display text-xl md:text-2xl lg:text-3xl text-primary tracking-widest mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            CINEMATOGRAPHER | VIDEOGRAPHER | VIDEO EDITOR | SOCIAL MEDIA MANAGER
          </p>

          {/* Tagline */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Crafting visual stories that captivate, inspire, and leave lasting impressions.
            From concept to screen, bringing your vision to life.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#portfolio">
                <span className="material-icons mr-2">play_circle</span>
                View Portfolio
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#contact">
                <span className="material-icons mr-2">mail</span>
                Get in Touch
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center pt-2">
              <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
