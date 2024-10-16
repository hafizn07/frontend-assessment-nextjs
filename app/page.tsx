import FacilitiesSection from "@/components/FacilitiesSection";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <FacilitiesSection />
      <StatsSection />
    </>
  );
}
