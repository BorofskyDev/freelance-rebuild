import AboutSection from "./sections/about/AboutSection";
import ContactSection from "./sections/contact/ContactSection";
import HeroSection from "./sections/hero/HeroSection";
import ProjectsSection from "./sections/projects/ProjectsSection";
import StackSection from "./sections/stack/StackSection";

export default function SplashPageComponent() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <StackSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    )
}