import Hero from "@/components/Hero";
import Discover from "@/components/Discover";
import LearnBuildSkills from "@/components/LearnBuildSkills";
import ProveSkills from "@/components/ProveSkills";
import Profile from "@/components/Profile";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Hero />

      {/* Discover 
      <section id="discover" className="scroll-mt-20">
        <Discover />
      </section>*/}

      {/* Learn & Build Skills 
      <section id="learn" className="relative scroll-mt-20">
        <span id="build" aria-hidden="true" className="absolute -top-20" />
        <LearnBuildSkills />
      </section>*/}

      {/* Prove Skills 
      <section id="prove" className="scroll-mt-20">
        <ProveSkills />
      </section>*/}

      {/* Grow / Profile 
      <section id="profile" className="relative scroll-mt-20">
        <span id="grow" aria-hidden="true" className="absolute -top-20" />
        <Profile />
      </section>*/}

      <FinalCTA />
      <Footer />
    </main>
  );
}