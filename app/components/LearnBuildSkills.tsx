
"use client";

const LEARNING_FEATURES = [
  {
    number: "01",
    title: "Structured Learning Pathways",
    description:
      "Follow structured learning pathways that guide you through concepts and skills step by step.",
  },
  {
    number: "02",
    title: "Learning Activities",
    description:
      "Complete practical activities and exercises that help you understand and apply what you learn.",
  },
  {
    number: "03",
    title: "Progressive Learning",
    description:
      "Build your knowledge progressively by moving from foundational concepts to more advanced skills.",
  },
  {
    number: "04",
    title: "Track Learning Progress",
    description:
      "Monitor your learning progress and see how your skills develop as you complete different activities.",
  },
  {
    number: "05",
    title: "Explore Learning Areas",
    description:
      "Explore different areas of learning and discover subjects that match your interests and career goals.",
  },
];

export default function LearnBuildSkills() {
  return (
    <section id="learn" className="w-full bg-solo-bg">
      <div className="mx-auto max-w-[1180px] px-5 py-10 md:py-12">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-solo-orange">
            Step 02
          </span>

          <h2 className="mt-1 font-heading text-2xl font-extrabold text-solo-text md:text-3xl">
            Learn & Build Skills
          </h2>

          <p className="mt-2 text-xs leading-5 text-solo-muted md:text-sm">
            Develop your skills through structured learning, practical
            activities, progressive learning experiences, and continuous
            progress tracking.
          </p>
        </div>

        {/* Learning Preview */}
        <div className="mx-auto mt-7 max-w-5xl rounded-2xl border border-black/10 bg-white p-4 shadow-sm md:p-5">

          {/* Header */}
          <div className="flex flex-col gap-3 border-b border-black/10 pb-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-solo-orange">
                Learning Journey
              </p>

              <h3 className="mt-1 font-heading text-lg font-bold text-solo-text md:text-xl">
                Learn. Practice. Progress.
              </h3>

              <p className="mt-1 max-w-xl text-xs leading-5 text-solo-muted">
                Build practical knowledge through guided pathways and
                activities designed to help you learn at your own pace.
              </p>
            </div>

            <a
              href="#prove"
              className="group inline-flex w-fit items-center gap-1.5 rounded-lg border border-solo-orange px-4 py-2 text-xs font-semibold text-solo-orange transition-all duration-300 hover:-translate-y-1 hover:bg-solo-orange hover:text-white hover:shadow-md"
            >
              Continue Learning
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Learning Features */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {LEARNING_FEATURES.map((feature) => (
              <div
                key={feature.number}
                className="group rounded-xl border border-black/10 bg-solo-bg p-4 transition-all duration-300 hover:-translate-y-1 hover:border-solo-orange/40 hover:bg-white hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-solo-orange">
                    {feature.number}
                  </span>

                  <span className="text-xs text-solo-muted opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    →
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

          {/* Learning Progress */}
          <div className="mt-5 rounded-xl border border-solo-orange/20 bg-solo-orange/5 p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold text-solo-text">
                  Keep growing your skills
                </p>

                <p className="mt-1 text-[11px] text-solo-muted">
                  Track your progress as you complete learning activities and
                  move through your pathway.
                </p>
              </div>

              <a
                href="#prove"
                className="group inline-flex w-fit items-center gap-1.5 rounded-lg bg-solo-orange px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
              >
                Move to Prove Skills
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
