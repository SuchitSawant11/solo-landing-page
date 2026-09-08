
"use client";

const PROOF_FEATURES = [
  {
    title: "Badges & Credentials",
    description:
      "Earn badges and credentials that recognize the skills and milestones you achieve.",
  },
  {
    title: "Skills Profile",
    description:
      "Build a clear skills profile that highlights what you have learned and what you can do.",
  },
  {
    title: "Completed Projects",
    description:
      "Showcase practical projects that demonstrate how you apply your knowledge in real situations.",
  },
  {
    title: "Track Achievements",
    description:
      "Keep track of completed challenges, milestones, badges, and other achievements.",
  },
  {
    title: "Build Evidence",
    description:
      "Create meaningful evidence of your capabilities through projects, assessments, and completed work.",
  },
];

export default function ProveSkills() {
  return (
    <section id="prove" className="w-full bg-solo-bg">
      <div className="mx-auto max-w-[1180px] px-5 py-10 md:py-12">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-solo-orange">
            Step 04
          </span>

          <h2 className="mt-1 font-heading text-2xl font-extrabold text-solo-text md:text-3xl">
            Prove Your Skills
          </h2>

          <p className="mt-2 text-xs leading-5 text-solo-muted md:text-sm">
            Move beyond lessons and demonstrate what you have learned through
            projects, achievements, credentials, and real evidence of your
            capabilities.
          </p>
        </div>

        {/* Proof Preview */}
        <div className="mx-auto mt-7 max-w-5xl rounded-2xl border border-black/10 bg-white p-4 shadow-sm md:p-5">

          {/* Header */}
          <div className="flex flex-col gap-3 border-b border-black/10 pb-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-solo-orange">
                Skills & Evidence
              </p>

              <h3 className="mt-1 font-heading text-lg font-bold text-solo-text md:text-xl">
                Show What You Can Do.
              </h3>

              <p className="mt-1 max-w-xl text-xs leading-5 text-solo-muted">
                Turn your learning into visible proof through skills, projects,
                achievements, credentials, and practical evidence.
              </p>
            </div>

            <a
              href="#profile"
              className="group inline-flex w-fit items-center gap-1.5 rounded-lg border border-solo-orange px-4 py-2 text-xs font-semibold text-solo-orange transition-all duration-300 hover:-translate-y-1 hover:bg-solo-orange hover:text-white hover:shadow-md"
            >
              View Profile
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Features */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PROOF_FEATURES.map((feature, index) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-black/10 bg-solo-bg p-4 transition-all duration-300 hover:-translate-y-1 hover:border-solo-orange/30 hover:bg-white hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-bold text-solo-orange">
                    0{index + 1}
                  </span>

                  <span className="text-[10px] font-semibold text-solo-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Explore →
                  </span>
                </div>

                <h4 className="mt-3 font-heading text-sm font-bold text-solo-text">
                  {feature.title}
                </h4>

                <p className="mt-1 text-[11px] leading-4 text-solo-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-5 flex flex-col gap-3 rounded-xl border border-solo-orange/20 bg-solo-orange/5 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold text-solo-text">
                Your skills deserve proof.
              </p>

              <p className="mt-1 text-[11px] text-solo-muted">
                Build evidence that shows your progress and capabilities.
              </p>
            </div>

            <a
              href="#profile"
              className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-solo-orange px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
            >
              Continue to Growth & Showcase
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
