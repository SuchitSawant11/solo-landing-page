import Hero from "@/components/Hero";
import WhySolo from "@/components/WhySolo";
import JourneyPath from "@/components/JourneyPath";
import Discover from "@/components/Discover";
import LearnBuildSkills from "@/components/LearnBuildSkills";
import ProveSkills from "@/components/ProveSkills";
import CareerGrowth from "@/components/CareerGrowth";
import Profile from "@/components/Profile";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <WhySolo />

      {/* Interactive 6-stage preview, 4 clickable groups */}
      <JourneyPath />

      <section id="discover">
        <Discover />
      </section>

      <section id="learn">
        <LearnBuildSkills />
      </section>

      <section id="prove">
        <ProveSkills />
      </section>

      <section id="profile">
        <CareerGrowth />
        <Profile />
      </section>

      <Testimonials />
      <FinalCTA />
      <Footer />
    </>
  );
}
