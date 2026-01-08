import profilePhoto from "@/assets/profile-photo.jpg";

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-card overflow-hidden scroll-mt-16 sm:scroll-mt-[4.5rem] md:scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center perspective-container">
          {/* Image with 3D Effect */}
          <div className="relative opacity-0 animate-slide-in-left order-2 lg:order-1" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-xl sm:rounded-2xl overflow-hidden tilt-3d glass-3d">
              <img 
                src={profilePhoto} 
                alt="Alex Rivera - Cinematographer" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            
            {/* 3D Floating Frame Elements - Hidden on mobile */}
            <div className="hidden md:block absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-2 border-primary/40 rounded-lg float-3d pointer-events-none" />
            <div className="hidden lg:block absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 border-2 border-primary/20 rounded-lg float-3d pointer-events-none" style={{ animationDelay: "1s" }} />
            <div className="hidden md:block absolute top-1/2 -right-4 sm:-right-6 md:-right-8 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary/20 rounded-full blur-xl float-3d pointer-events-none" style={{ animationDelay: "2s" }} />
          </div>

          {/* Content */}
          <div className="opacity-0 animate-slide-in-right depth-layer order-1 lg:order-2" style={{ animationDelay: "0.4s" }}>
            <span className="inline-block px-3 sm:px-4 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
              About Me
            </span>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 sm:mb-6 leading-tight">
              VISUAL STORYTELLER
            </h2>

            <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
<<<<<<< HEAD
                With over 8 years of experience in the creative industry, I specialize in 
=======
                With over 3 years of experience in the creative industry, I specialize in 
>>>>>>> d76c475 (my updates)
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

            {/* Stats with 3D Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-border">
              {[
<<<<<<< HEAD
                { value: "8+", label: "Years Experience" },
                { value: "150+", label: "Projects" },
                { value: "50+", label: "Happy Clients" },
=======
                { value: "3+", label: "Years Experience" },
                { value: "40+", label: "Projects" },
                { value: "20+", label: "Happy Clients" },
>>>>>>> d76c475 (my updates)
              ].map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="card-3d p-3 sm:p-4 text-center"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="font-display text-2xl sm:text-3xl md:text-4xl text-primary mb-1">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
