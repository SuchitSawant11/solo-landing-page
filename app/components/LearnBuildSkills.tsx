const LEARNING_FEATURES = [
  {
    number: "01",
    title: "Structured Learning Pathways",
    description:
      "Follow structured learning pathways that guide you through concepts and skills step by step.",
    accent: "border-solo-orange/25 bg-solo-orange/5",
    numberColor: "text-solo-orange",
  },
  {
    number: "02",
    title: "Learning Activities",
    description:
      "Complete practical activities and exercises that help you understand and apply what you learn.",
    accent: "border-solo-gold/30 bg-solo-gold/10",
    numberColor: "text-solo-gold",
  },
  {
    number: "03",
    title: "Progressive Learning",
    description:
      "Build your knowledge progressively by moving from foundational concepts to more advanced skills.",
    accent: "border-solo-blue/25 bg-solo-blue/5",
    numberColor: "text-solo-blue",
  },
  {
    number: "04",
    title: "Track Learning Progress",
    description:
      "Monitor your learning progress and see how your skills develop as you complete different activities.",
    accent: "border-solo-orange/25 bg-solo-orange/5",
    numberColor: "text-solo-orange",
  },
  {
    number: "05",
    title: "Explore Learning Areas",
    description:
      "Explore different areas of learning and discover subjects that match your interests and career goals.",
    accent: "border-solo-blue/25 bg-solo-blue/5",
    numberColor: "text-solo-blue",
  },
];

const PATHWAY_STEPS = [
  {
    number: "01",
    title: "Discover",
    status: "complete",
    color: "bg-solo-gold text-white",
    href: "#discover",
  },
  {
    number: "02",
    title: "Learn",
    status: "complete",
    color: "bg-solo-orange text-white",
    href: "#learn",
  },
  {
    number: "03",
    title: "Build",
    status: "active",
    color: "bg-solo-blue text-white",
    href: "#learn",
  },
  {
    number: "04",
    title: "Prove",
    status: "upcoming",
    color: "border border-solo-orange/20 bg-white text-solo-muted",
    href: "#prove",
  },
  {
    number: "05",
    title: "Grow",
    status: "upcoming",
    color: "border border-solo-gold/30 bg-white text-solo-muted",
    href: "#profile",
  },
  {
    number: "06",
    title: "Showcase",
    status: "upcoming",
    color: "border border-solo-blue/30 bg-white text-solo-muted",
    href: "#profile",
  },
];

export default function LearnBuildSkills() {
  return (
    <section id="learn" className="relative overflow-hidden bg-solo-bg">
      {/* Light background decoration */}
      <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-solo-orange/10 blur-3xl" />
      <div className="absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-solo-gold/15 blur-3xl" />

      <div className="relative mx-auto max-w-[1180px] px-5 py-16 md:py-24">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-solo-text md:text-5xl">
            Learn & Build
            <span className="text-solo-orange"> Skills That Matter.</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-solo-muted md:text-base">
            Develop your skills through structured learning, practical
            activities, progressive learning experiences, and continuous
            progress tracking.
          </p>
        </div>

        {/* Learning pathway dashboard */}
        <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_24px_80px_rgba(23,20,18,0.08)]">
          {/* Dashboard header */}
          <div className="grid border-b border-black/10 lg:grid-cols-[1fr_auto]">
            <div className="p-5 md:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-orange">
                Learning Journey
              </p>

              <h3 className="mt-2 font-heading text-2xl font-extrabold text-solo-text md:text-3xl">
                Learn. Practice. Progress.
              </h3>

              <p className="mt-3 max-w-2xl text-xs leading-5 text-solo-muted md:text-sm">
                Build practical knowledge through guided pathways and
                activities designed to help you learn at your own pace.
              </p>
            </div>

            <div className="flex items-center border-t border-black/10 bg-solo-orange/5 p-5 lg:border-l lg:border-t-0 md:p-7">
              <a
                href="#prove"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-solo-orange bg-white px-5 py-3 text-xs font-bold text-solo-orange transition-all duration-300 hover:-translate-y-1 hover:bg-solo-orange hover:text-white hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-solo-orange lg:w-auto"
              >
                Continue Learning

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
            {/* Left learning pathway overview */}
            <aside className="relative overflow-hidden border-b border-black/10 bg-solo-orange/5 p-6 md:p-7 lg:border-b-0 lg:border-r">
              <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-solo-orange/15 blur-2xl" />
              <div className="absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-solo-gold/20 blur-2xl" />

              <div className="relative">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-orange">
                  Your Learning Pathway
                </p>

                <h3 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-solo-text">
                  One clear path.
                  <br />
                  Real progress.
                </h3>

                <p className="mt-4 text-xs leading-5 text-solo-muted">
                  Move through learning experiences that build confidence,
                  capability, and practical skills over time.
                </p>

                {/* Updated 6-step journey progress */}
                <div className="mt-8 rounded-2xl border border-solo-orange/20 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-orange">
                        SOLO Journey
                      </p>

                      <p className="mt-2 font-heading text-3xl font-extrabold text-solo-text">
                        03 / 06
                      </p>
                    </div>

                    <span className="rounded-full bg-solo-orange/10 px-3 py-1.5 text-[10px] font-bold text-solo-orange">
                      Building
                    </span>
                  </div>

                  <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-solo-orange/10">
                    <div className="h-full w-1/2 rounded-full bg-solo-orange" />
                  </div>

                  <p className="mt-3 text-[10px] leading-4 text-solo-muted">
                    Discover, learn, build, prove, grow, and showcase your
                    skills.
                  </p>
                </div>

                {/* Six-step learning flow */}
                <div className="mt-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-blue">
                    Your SOLO Journey
                  </p>

                  <div className="mt-4 space-y-3">
                    {PATHWAY_STEPS.map((step) => (
                      <a
                        key={step.number}
                        href={step.href}
                        className="group flex items-center gap-3 rounded-xl p-1 transition-colors duration-300 hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solo-orange"
                      >
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${step.color}`}
                        >
                          {step.number}
                        </span>

                        <span
                          className={
                            step.status === "upcoming"
                              ? "text-xs font-semibold text-solo-muted"
                              : "text-xs font-bold text-solo-text"
                          }
                        >
                          {step.title}
                        </span>

                        {step.status === "active" && (
                          <span className="ml-auto rounded-full bg-solo-blue/10 px-2 py-1 text-[9px] font-bold text-solo-blue">
                            Current
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Right learning features */}
            <div className="p-5 md:p-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-orange">
                    How You Learn
                  </p>

                  <h3 className="mt-1 font-heading text-xl font-extrabold text-solo-text">
                    Build skills through meaningful learning
                  </h3>
                </div>

                <span className="w-fit rounded-full bg-solo-blue/10 px-3 py-1.5 text-[10px] font-bold text-solo-blue">
                  Learn at your pace
                </span>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {LEARNING_FEATURES.map((feature, index) => (
                  <article
                    key={feature.number}
                    className={`group relative overflow-hidden rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none ${feature.accent} ${
                      index === 4 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className={`font-heading text-sm font-extrabold ${feature.numberColor}`}
                      >
                        {feature.number}
                      </span>

                      <span className="rounded-full border border-black/5 bg-white/70 px-2 py-1 text-[9px] font-bold text-solo-muted">
                        Learning
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
                        index === 1
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

          {/* Bottom progress CTA */}
          <div className="flex flex-col gap-4 border-t border-black/10 bg-solo-blue/5 p-5 sm:flex-row sm:items-center sm:justify-between md:px-7 md:py-6">
            <div>
              <p className="font-heading text-base font-bold text-solo-text">
                Keep growing your skills
              </p>

              <p className="mt-1 text-xs text-solo-muted">
                Track your progress as you complete learning activities and
                move through your pathway.
              </p>
            </div>

            <a
              href="#prove"
              className="group inline-flex w-fit items-center gap-2 rounded-xl bg-solo-orange px-5 py-3 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-solo-orange"
            >
              Move to Prove Skills

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