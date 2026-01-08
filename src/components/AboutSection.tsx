import profilePhoto from "@/assets/profile-photo.jpg";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative opacity-0 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden card-elevated">
              <img 
                src={profilePhoto} 
                alt="Alex Rivera - Cinematographer" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            
            {/* Floating Frame Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/40 rounded-lg" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-primary/20 rounded-lg" />
          </div>

          {/* Content */}
          <div className="opacity-0 animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm uppercase tracking-widest mb-4">
              About Me
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              VISUAL STORYTELLER
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 8 years of experience in the creative industry, I specialize in 
                transforming ideas into compelling visual narratives. My journey began behind 
                the lens, capturing moments that matter, and has evolved into a comprehensive 
                approach to visual storytelling.
              </p>
              <p>
                From cinematic productions and brand videos to social media campaigns that 
                drive engagement, I bring a unique blend of technical expertise and creative 
                vision to every project. My work has been featured in major film festivals, 
                advertising campaigns, and digital platforms reaching millions of viewers.
              </p>
              <p>
                I believe that every frame tells a story, and my mission is to ensure that 
                story resonates with your audience. Whether you're a brand looking to make 
                an impact or an individual with a vision to share, I'm here to bring it to life.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-border">
              <div>
                <div className="font-display text-4xl text-primary mb-1">8+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <div className="font-display text-4xl text-primary mb-1">150+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Projects</div>
              </div>
              <div>
                <div className="font-display text-4xl text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
