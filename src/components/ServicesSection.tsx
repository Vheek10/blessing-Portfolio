const services = [
  {
    icon: "videocam",
    title: "Cinematography",
    description:
      "High-end cinematic production with professional equipment, creative direction, and stunning visuals that tell your story.",
    features: ["4K/8K Production", "Aerial Footage", "Lighting Design"],
  },
  {
    icon: "movie",
    title: "Videography",
    description:
      "From corporate events to brand stories, capturing moments with precision and artistic vision.",
    features: ["Event Coverage", "Brand Videos", "Interviews"],
  },
  {
    icon: "edit",
    title: "Video Editing",
    description:
      "Post-production excellence including color grading, sound design, and visual effects to polish your content.",
    features: ["Color Grading", "Motion Graphics", "Sound Design"],
  },
  {
    icon: "campaign",
    title: "Social Media",
    description:
      "Strategic content creation and management that drives engagement and builds your online presence.",
    features: ["Content Strategy", "Platform Management", "Analytics"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm uppercase tracking-widest mb-4">
            Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            WHAT I OFFER
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive creative services tailored to elevate your visual content
            and achieve your goals.
          </p>
        </div>

        {/* Services Grid with 3D Perspective */}
        <div className="perspective-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-3d p-8 group opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* 3D Icon */}
                <div className="service-icon mb-6 group-hover:scale-110 float-3d" style={{ animationDelay: `${index * 0.5}s` }}>
                  <span className="material-icons text-primary text-3xl">
                    {service.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl text-foreground mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <span className="material-icons text-primary text-base">
                        check_circle
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
