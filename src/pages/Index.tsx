import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import FeaturedSection from "@/components/FeaturedSection";
import VideoSection from "@/components/VideoSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const Index = () => (
  <div className="relative min-h-screen bg-background overflow-x-hidden">
    <CursorGlow />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    {/* <ProjectsSection /> */}
    <FeaturedSection />
    <VideoSection />
    <ExperienceSection />
    <ProcessSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
