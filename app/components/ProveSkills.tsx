const PROOF_FEATURES = [
  {
    number: "01",
    title: "Badges & Credentials",
    description:
      "Earn badges and credentials that recognize the skills and milestones you achieve.",
    accent: "border-solo-gold/30 bg-solo-gold/10",
    numberColor: "text-solo-gold",
  },
  {
    number: "02",
    title: "Skills Profile",
    description:
      "Build a clear skills profile that highlights what you have learned and what you can do.",
    accent: "border-solo-orange/25 bg-solo-orange/5",
    numberColor: "text-solo-orange",
  },
  {
    number: "03",
    title: "Completed Projects",
    description:
      "Showcase practical projects that demonstrate how you apply your knowledge in real situations.",
    accent: "border-solo-blue/25 bg-solo-blue/5",
    numberColor: "text-solo-blue",
  },
  {
    number: "04",
    title: "Track Achievements",
    description:
      "Keep track of completed challenges, milestones, badges, and other achievements.",
    accent: "border-solo-orange/25 bg-solo-orange/5",
    numberColor: "text-solo-orange",
  },
  {
    number: "05",
    title: "Build Evidence",
    description:
      "Create meaningful evidence of your capabilities through projects, assessments, and completed work.",
    accent: "border-solo-blue/25 bg-solo-blue/5",
    numberColor: "text-solo-blue",
  },
];

export default function ProveSkills() {
  return (
    <section id="prove" className="relative overflow-hidden bg-solo-bg">
      {/* Light background decoration */}
      <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-solo-gold/15 blur-3xl" />
      <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-solo-orange/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1180px] px-5 py-16 md:py-24">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-solo-text md:text-5xl">
            Prove your skills
            <span className="text-solo-orange"> with real evidence.</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-solo-muted md:text-base">
            Move beyond lessons and demonstrate what you have learned through
            projects, achievements, credentials, and real evidence of your
            capabilities.
          </p>
        </div>

        {/* Evidence dashboard */}
        <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_24px_80px_rgba(23,20,18,0.08)]">
          {/* Top information bar */}
          <div className="grid border-b border-black/10 lg:grid-cols-[1fr_auto]">
            <div className="p-5 md:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-orange">
                Skills & Evidence
              </p>

              <h3 className="mt-2 font-heading text-2xl font-extrabold text-solo-text md:text-3xl">
                Show What You Can Do.
              </h3>

              <p className="mt-3 max-w-2xl text-xs leading-5 text-solo-muted md:text-sm">
                Turn your learning into visible proof through skills, projects,
                achievements, credentials, and practical evidence.
              </p>
            </div>

            <div className="flex items-center border-t border-black/10 bg-solo-orange/5 p-5 lg:border-l lg:border-t-0 md:p-7">
              <a
                href="#profile"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-solo-orange bg-white px-5 py-3 text-xs font-bold text-solo-orange transition-all duration-300 hover:-translate-y-1 hover:bg-solo-orange hover:text-white hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-solo-orange lg:w-auto"
              >
                View Profile

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Main board */}
          <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
            {/* Left proof outcome */}
            <aside className="relative overflow-hidden border-b border-black/10 bg-solo-blue/5 p-6 md:p-7 lg:border-b-0 lg:border-r">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-solo-blue/10 blur-2xl" />
              <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-solo-gold/20 blur-2xl" />

              <div className="relative">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-blue">
                  Your Proof System
                </p>

                <h3 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-solo-text">
                  Learning is stronger when you can show it.
                </h3>

                <p className="mt-4 text-xs leading-5 text-solo-muted">
                  Each completed activity becomes visible evidence of your
                  effort, growth, and capability.
                </p>

                <div className="mt-8 rounded-2xl border border-solo-blue/20 bg-white p-5 shadow-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-blue">
                    Evidence Progress
                  </p>

                  <div className="mt-3 flex items-end justify-between">
                    <p className="font-heading text-4xl font-extrabold text-solo-text">
                      05
                    </p>

                    <span className="rounded-full bg-solo-blue/10 px-3 py-1.5 text-[10px] font-bold text-solo-blue">
                      Proof Areas
                    </span>
                  </div>

                  <div className="mt-5 flex gap-1.5">
                    <span className="h-2 flex-1 rounded-full bg-solo-gold" />
                    <span className="h-2 flex-1 rounded-full bg-solo-orange" />
                    <span className="h-2 flex-1 rounded-full bg-solo-blue" />
                    <span className="h-2 flex-1 rounded-full bg-solo-orange" />
                    <span className="h-2 flex-1 rounded-full bg-solo-blue" />
                  </div>

                  <p className="mt-3 text-[10px] leading-4 text-solo-muted">
                    Credentials, skills, projects, achievements, and evidence.
                  </p>
                </div>

                <div className="mt-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-orange">
                    Your outcome
                  </p>

                  <p className="mt-2 font-heading text-lg font-bold text-solo-text">
                    A profile that shows more than marks.
                  </p>
                </div>
              </div>
            </aside>

            {/* Right evidence cards */}
            <div className="p-5 md:p-7">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-orange">
                  Build Your Evidence
                </p>

                <h3 className="mt-1 font-heading text-xl font-extrabold text-solo-text">
                  Five ways to prove your growth
                </h3>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {PROOF_FEATURES.map((feature, index) => (
                  <article
                    key={feature.title}
                    className={`group relative overflow-hidden rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${feature.accent} ${
                      index === 4 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className={`text-[10px] font-extrabold ${feature.numberColor}`}
                      >
                        {feature.number}
                      </span>

                      <span className="rounded-full border border-black/5 bg-white/70 px-2 py-1 text-[9px] font-bold text-solo-muted">
                        Evidence
                      </span>
                    </div>

                    <h4 className="mt-8 font-heading text-base font-bold text-solo-text">
                      {feature.title}
                    </h4>

                    <p className="mt-2 max-w-md text-[11px] leading-5 text-solo-muted">
                      {feature.description}
                    </p>

                    <div
                      className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full ${
                        index === 0
                          ? "bg-solo-gold"
                          : index === 2 || index === 4
                          ? "bg-solo-blue"
                          : "bg-solo-orange"
                      }`}
                    />
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="flex flex-col gap-4 border-t border-black/10 bg-solo-orange/5 p-5 sm:flex-row sm:items-center sm:justify-between md:px-7 md:py-6">
            <div>
              <p className="font-heading text-base font-bold text-solo-text">
                Your skills deserve proof.
              </p>

              <p className="mt-1 text-xs text-solo-muted">
                Build evidence that shows your progress and capabilities.
              </p>
            </div>

            <a
              href="#profile"
              className="group inline-flex w-fit items-center gap-2 rounded-xl bg-solo-orange px-5 py-3 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-solo-orange"
            >
              Continue to Growth & Showcase

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}