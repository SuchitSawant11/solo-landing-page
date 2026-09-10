
import Hero from "./components/Hero";
import Discover from "@/components/Discover";
import LearnBuildSkills from "@/components/LearnBuildSkills";
import ProveSkills from "@/components/ProveSkills";
import Profile from "@/components/Profile";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Discover 
      <section id="discover">
        <Discover />
      </section>*/}

      {/* Learn & Build Skills 
      <section id="learn">
        <LearnBuildSkills />
      </section>*/}

      {/* Prove Skills 
      <section id="prove">
        <ProveSkills />
      </section>*/}

      {/* Grow / Profile 
      <section id="profile">
        <Profile />
      </section>*/}

      {/* Final Call To Action */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </>
  );
}

