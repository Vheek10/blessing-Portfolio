import { ThemeProvider } from "@/hooks/useTheme";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { Suspense, lazy } from "react";

const AboutSection = lazy(() => import("@/components/AboutSection").then(module => ({ default: module.AboutSection })));
const PortfolioSection = lazy(() => import("@/components/PortfolioSection").then(module => ({ default: module.PortfolioSection })));
const ServicesSection = lazy(() => import("@/components/ServicesSection").then(module => ({ default: module.ServicesSection })));
const ContactSection = lazy(() => import("@/components/ContactSection").then(module => ({ default: module.ContactSection })));
const Footer = lazy(() => import("@/components/Footer").then(module => ({ default: module.Footer })));

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground font-body">
        <Navigation />
        <main>
          <HeroSection />
          <Suspense fallback={<div className="h-20" />}>
            <AboutSection />
            <PortfolioSection />
            <ServicesSection />
            <ContactSection />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  );
};

export default Index;
