import Learn from "@/components/Learn";
import BuildSkills from "@/components/BuildSkills";

export default function LearnBuildSkills() {
  return (
    <div className="mx-auto max-w-[1240px] px-6 py-20">
      <div className="text-center">
        <h2 className="font-heading text-2xl font-extrabold text-solo-text md:text-3xl">
          Learn & Build Skills
        </h2>
        <p className="mt-3 text-solo-muted">
          Two stages, one flow — learn the concept, then build with it
          immediately.
        </p>
      </div>

      <div className="mt-12">
        <Learn />
        <BuildSkills />
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="#prove"
          className="rounded-lg bg-solo-orange px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          Move to Prove Skills
        </a>
      </div>
    </div>
  );
}
