import Contact from "@/components/Contact";
import FacilitiesSection from "@/components/FacilitiesSection";
import FacultySection from "@/components/FacultySection";
import Hero from "@/components/Hero";
import InsightsSection from "@/components/InsightsSection";
import ServiceSection from "@/components/ServiceSection";
import StatsSection from "@/components/StatsSection";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <FacilitiesSection />
      <StatsSection />
      <ServiceSection />
      <FacultySection />
      <InsightsSection />
      <Contact />
    </>
  );
}
