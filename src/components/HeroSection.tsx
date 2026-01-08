import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video.mp4";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-container">
      {/* 3D Video Background */}
      <div className="absolute inset-0 parallax-3d">
        <video 
          src={heroVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 parallax-layer-back"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background parallax-layer-mid" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)] parallax-layer-front" />
      </div>

      {/* 3D Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Rotating Cube Frame */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rotate-3d opacity-30" />
        
        {/* Floating Orbs with 3D */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-primary/10 blur-2xl float-3d" />
        <div className="absolute bottom-1/3 left-1/5 w-24 h-24 rounded-full bg-pink/10 blur-2xl float-3d" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-10 w-16 h-16 rounded-full bg-purple/15 blur-xl float-3d" style={{ animationDelay: "1s" }} />
        
        {/* 3D Frame Elements */}
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 border border-primary/20 rounded-lg float-3d" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/3 left-1/4 w-28 h-28 border border-primary/15 rotate-45 float-3d" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Content with 3D Depth */}
      <div className="relative z-10 container mx-auto px-6 text-center depth-layer">
        <div className="max-w-4xl mx-auto">
          {/* Title with 3D Effect */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 opacity-0 animate-fade-in-up"
              style={{ textShadow: '0 10px 30px hsl(var(--primary) / 0.3)' }}>
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

          {/* CTA Buttons with 3D hover */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button variant="hero" size="xl" asChild className="tilt-3d">
              <a href="#portfolio">
                <span className="material-icons mr-2">play_circle</span>
                View Portfolio
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild className="tilt-3d">
              <a href="#contact">
                <span className="material-icons mr-2">mail</span>
                Get in Touch
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator with 3D float */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in float-3d"
          style={{ animationDelay: "1s" }}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center pt-2 glass-3d">
              <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
