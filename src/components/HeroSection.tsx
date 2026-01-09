/** @format */

import { Button } from "@/components/ui/button";
export function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-container pt-16 sm:pt-[4.5rem] md:pt-20">
			{/* 3D Video Background */}
			<div className="absolute inset-0 parallax-3d">
				<video
					src="/videos/hero-video.mp4"
					autoPlay
					loop
					muted
					playsInline
					preload="auto"
					className="absolute inset-0 w-full h-full object-cover opacity-60 parallax-layer-back"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background parallax-layer-mid" />
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)] parallax-layer-front" />
			</div>

			{/* 3D Floating Geometric Shapes */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				{/* Rotating Cube Frame - Hidden on mobile for performance */}
				<div className="hidden sm:block absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rotate-3d opacity-30" />

				{/* Floating Orbs with 3D - Reduced on mobile */}
				<div className="absolute top-1/4 right-1/4 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-primary/10 blur-2xl float-3d" />
				<div
					className="hidden md:block absolute bottom-1/3 left-1/5 w-24 h-24 rounded-full bg-pink/10 blur-2xl float-3d"
					style={{ animationDelay: "2s" }}
				/>
				<div
					className="absolute top-1/2 right-4 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-purple/15 blur-xl float-3d"
					style={{ animationDelay: "1s" }}
				/>

				{/* 3D Frame Elements - Hidden on mobile */}
				<div
					className="hidden lg:block absolute bottom-1/4 right-1/3 w-40 h-40 border border-primary/20 rounded-lg float-3d"
					style={{ animationDelay: "3s" }}
				/>
				<div
					className="hidden md:block absolute top-1/3 left-1/4 w-28 h-28 border border-primary/15 rotate-45 float-3d"
					style={{ animationDelay: "1.5s" }}
				/>
			</div>

			{/* Content with 3D Depth */}
			<div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center depth-layer w-full">
				<div className="max-w-4xl mx-auto pt-8 sm:pt-12 md:pt-16 pb-20 sm:pb-24">
					{/* Title with 3D Effect */}
					<h1
						className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-4 sm:mb-6 px-2 opacity-0 animate-fade-in-up leading-tight sm:leading-none"
						style={{ textShadow: "0 10px 30px hsl(var(--primary) / 0.3)" }}>
						BLESSING ABBA
					</h1>

					{/* Subtitle */}
					<p
						className="font-body text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-primary tracking-wide sm:tracking-widest mb-6 sm:mb-8 px-2 opacity-0 animate-fade-in-up leading-relaxed"

						style={{ animationDelay: "0.2s" }}>
						CINEMATOGRAPHER | VIDEOGRAPHER
						<br className="sm:hidden" /> VIDEO EDITOR | SOCIAL MEDIA MANAGER
					</p>

					{/* Tagline */}
					<p
						className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4 opacity-0 animate-fade-in-up leading-relaxed"
						style={{ animationDelay: "0.4s" }}>
						Crafting visual stories that captivate, inspire, and leave lasting
						impressions. From concept to screen, bringing your vision to life.
					</p>

					{/* CTA Buttons with 3D hover */}
					<div
						className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 opacity-0 animate-fade-in-up"
						style={{ animationDelay: "0.6s" }}>
						<Button
							variant="hero"
							size="xl"
							asChild
							className="tilt-3d w-full sm:w-auto min-h-[48px] touch-manipulation">
							<a href="#portfolio">
								<span className="material-icons mr-2 text-lg sm:text-xl">
									play_circle
								</span>
								View Portfolio
							</a>
						</Button>
						<Button
							variant="outline"
							size="xl"
							asChild
							className="tilt-3d w-full sm:w-auto min-h-[48px] touch-manipulation">
							<a href="#contact">
								<span className="material-icons mr-2 text-lg sm:text-xl">
									mail
								</span>
								Get in Touch
							</a>
						</Button>
					</div>
				</div>

				{/* Scroll Indicator with 3D float */}
				<div
					className="absolute bottom-0 sm:bottom-4 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in float-3d z-20"
					style={{ animationDelay: "1s" }}>
					<div className="flex flex-col items-center gap-2 text-muted-foreground">
						<span className="text-xs uppercase tracking-widest">Scroll</span>
						<div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center pt-1.5 sm:pt-2 glass-3d">
							<div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-primary rounded-full animate-bounce" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
