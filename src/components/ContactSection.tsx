/** @format */

import { useState } from "react";
import { Button } from "@/components/ui/button";

const socialLinks = [
	{ icon: "mail", label: "Email", href: "mailto:abbablessing075@gmail.com" },
	{
		icon: "photo_camera",
		label: "Instagram",
		href: "https://www.instagram.com/_bless.official",
	},
	{ icon: "smart_display", label: "Vimeo", href: "#" },
	{
		icon: "work",
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/blessing-abba-aa9633345/",
	},
];

export function ContactSection() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Form submission logic
		console.log("Form submitted:", formData);
	};

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<section
			id="contact"
			className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background scroll-mt-16 sm:scroll-mt-[4.5rem] md:scroll-mt-20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20">
					{/* Left - Info */}
					<div className="order-2 lg:order-1">
						<span className="inline-block px-3 sm:px-4 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
							Contact
						</span>
						<h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 sm:mb-6 leading-tight">
							LET'S CREATE TOGETHER
						</h2>
						<p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
							Have a project in mind? I'd love to hear about it. Whether you're
							looking for a complete production or need help with a specific
							aspect of your visual content, let's discuss how we can bring your
							vision to life.
						</p>

						{/* Contact Info */}
						<div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
							<div className="flex items-center gap-3 sm:gap-4">
								<div className="w-10 h-10 sm:w-12 sm:h-12 min-w-[40px] min-h-[40px] rounded-full bg-card border border-border flex items-center justify-center flex-shrink-0">
									<span className="material-icons text-primary text-lg sm:text-xl">
										mail
									</span>
								</div>
								<div className="min-w-0">
									<div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
										Email
									</div>
									<a
										href="mailto:hello@alexrivera.com"
										className="text-sm sm:text-base text-foreground hover:text-primary transition-colors break-all">
										abbablessing075@gmail.com
									</a>
								</div>
							</div>

							<div className="flex items-center gap-3 sm:gap-4">
								<div className="w-10 h-10 sm:w-12 sm:h-12 min-w-[40px] min-h-[40px] rounded-full bg-card border border-border flex items-center justify-center flex-shrink-0">
									<span className="material-icons text-primary text-lg sm:text-xl">
										location_on
									</span>
								</div>
								<div className="min-w-0">
									<div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
										Location
									</div>
									<span className="text-sm sm:text-base text-foreground">
										Remote
									</span>
								</div>
							</div>
						</div>

						{/* Social Links */}
						<div className="flex gap-2 sm:gap-3">
							{socialLinks.map((link) => (
								<a
									key={link.label}
									href={link.href}
									className="social-icon w-10 h-10 sm:w-11 sm:h-11 min-w-[44px] min-h-[44px] touch-manipulation"
									aria-label={link.label}>
									<span className="material-icons text-lg sm:text-xl">
										{link.icon}
									</span>
								</a>
							))}
						</div>
					</div>

					{/* Right - Form */}
					<div className="card-elevated p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl order-1 lg:order-2">
						<form
							onSubmit={handleSubmit}
							className="space-y-4 sm:space-y-5 md:space-y-6">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
								<div>
									<label
										htmlFor="name"
										className="block text-xs sm:text-sm uppercase tracking-wider text-muted-foreground mb-2">
										Your Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										className="form-input min-h-[44px] text-sm sm:text-base"
										placeholder="Full Name"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-xs sm:text-sm uppercase tracking-wider text-muted-foreground mb-2">
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										className="form-input min-h-[44px] text-sm sm:text-base"
										placeholder="name@example.com"
										required
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="subject"
									className="block text-xs sm:text-sm uppercase tracking-wider text-muted-foreground mb-2">
									Project Type
								</label>
								<select
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									className="form-input min-h-[44px] text-sm sm:text-base"
									required>
									<option value="">Select a service</option>
									<option value="cinematography">Cinematography</option>
									<option value="videography">Videography</option>
									<option value="editing">Video Editing</option>
									<option value="social">Social Media Management</option>
									<option value="other">Other</option>
								</select>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-xs sm:text-sm uppercase tracking-wider text-muted-foreground mb-2">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									rows={5}
									className="form-input resize-none text-sm sm:text-base min-h-[120px]"
									placeholder="Tell me about your project..."
									required
								/>
							</div>

							<Button
								type="submit"
								variant="hero"
								className="w-full min-h-[48px] text-sm sm:text-base touch-manipulation">
								<span className="material-icons mr-2 text-lg sm:text-xl">
									send
								</span>
								Send Message
							</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
