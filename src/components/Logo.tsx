/** @format */

import { cn } from "@/lib/utils";
import { useTypingEffect } from "@/hooks/useTypingEffect";

interface LogoProps {
	className?: string;
	variant?: "default" | "footer";
}

export function Logo({ className, variant = "default" }: LogoProps) {
	const isFooter = variant === "footer";
	const { displayedText, isComplete } = useTypingEffect("BLESSING", 100, 300);

	return (
		<a
			href="#"
			className={cn(
				"flex items-center gap-3 group transition-all duration-300",
				className,
			)}>
			{/* Cinematic Icon - Film Reel / Lens Aperture Hybrid */}
			<div className="relative flex-shrink-0">
				<div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
				<svg
					width={isFooter ? "32" : "40"}
					height={isFooter ? "32" : "40"}
					viewBox="0 0 40 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="relative transition-transform duration-500 group-hover:rotate-90 group-hover:scale-105">
					
					{/* Outer Ring */}
					<circle cx="20" cy="20" r="18" className="stroke-primary/30 stroke-[1.5]" />
					
					{/* Film Sprockets */}
					<path 
						d="M20 4V8 M36 20H32 M20 36V32 M4 20H8" 
						className="stroke-primary/50 stroke-[2] stroke-linecap-round"
					/>
					
					{/* Center Aperture / Lens */}
					<circle cx="20" cy="20" r="8" className="fill-primary/10 stroke-primary stroke-[1.5]" />
					<path 
						d="M20 12L24 20L20 28L16 20L20 12Z" 
						className="fill-primary/80" 
					/>
				</svg>
			</div>

			{/* Cinematic Text */}
			<div className="flex flex-col">
				<span
					className={cn(
						"font-body font-bold tracking-[0.2em] leading-none bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/80 to-white bg-[length:200%_auto] group-hover:bg-[100%_0] transition-all duration-700",
						isFooter ? "text-xl" : "text-2xl sm:text-3xl",
					)}>
					{displayedText}
					{!isComplete && <span className="animate-pulse">|</span>}
				</span>
				{!isFooter && (
					<span className="text-[0.5rem] uppercase tracking-[0.4em] text-muted-foreground ml-0.5 group-hover:text-primary/70 transition-colors duration-300">
						Portfolio
					</span>
				)}
			</div>
		</a>
	);
}
