
"use client";

const PROFILE_FEATURES = [
  {
    title: "Learner Profile",
    description:
      "Create a professional profile that reflects your learning journey, interests, and career goals.",
  },
  {
    title: "Skills & Projects",
    description:
      "Highlight the skills you have developed and the projects you have completed through practical learning.",
  },
  {
    title: "Achievements",
    description:
      "Showcase milestones, completed challenges, badges, and other accomplishments earned along your journey.",
  },
  {
    title: "Verified Credentials",
    description:
      "Present credentials and verified achievements that provide meaningful proof of your skills.",
  },
  {
    title: "Learning Progress",
    description:
      "Show your progress across learning pathways and demonstrate how your skills continue to grow.",
  },
  {
    title: "Digital Portfolio",
    description:
      "Bring your skills, projects, achievements, and credentials together in one professional, shareable portfolio.",
  },
];

export default function Profile() {
  return (
    <section id="profile" className="w-full bg-solo-bg">
      <div className="mx-auto max-w-[1180px] px-5 py-10 md:py-12">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-solo-orange">
            Step 06
          </span>

          <h2 className="mt-1 font-heading text-2xl font-extrabold text-solo-text md:text-3xl">
            Showcase Your Profile
          </h2>

          <p className="mt-2 text-xs leading-5 text-solo-muted md:text-sm">
            Turn everything you learn and achieve into a professional digital
            profile that shows what you can do.
          </p>
        </div>

        {/* Profile Preview */}
        <div className="mx-auto mt-7 max-w-5xl rounded-2xl border border-black/10 bg-white p-4 shadow-sm md:p-5">

          {/* Profile Header */}
          <div className="flex flex-col gap-3 border-b border-black/10 pb-4 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-solo-orange">
                Learner Profile
              </p>

              <h3 className="mt-1 font-heading text-lg font-bold text-solo-text md:text-xl">
                Your Journey. Your Skills. Your Proof.
              </h3>

              <p className="mt-1 max-w-xl text-xs leading-5 text-solo-muted">
                A single professional space to present your learning journey,
                projects, achievements, credentials, and progress.
              </p>
            </div>

            <a
              href="#learn"
              className="group inline-flex w-fit items-center gap-1.5 rounded-lg border border-solo-orange px-4 py-2 text-xs font-semibold text-solo-orange transition-all duration-300 hover:-translate-y-1 hover:bg-solo-orange hover:text-white hover:shadow-md"
            >
              View Journey
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Features */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PROFILE_FEATURES.map((feature, index) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-black/10 bg-solo-bg p-4 transition-all duration-300 hover:-translate-y-1 hover:border-solo-orange/30 hover:bg-white hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-bold text-solo-orange">
                    0{index + 1}
                  </span>

                  <span className="text-[10px] font-semibold text-solo-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View →
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

          {/* Portfolio Footer */}
          <div className="mt-5 flex flex-col gap-3 rounded-xl border border-solo-orange/20 bg-solo-orange/5 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold text-solo-text">
                One professional profile. Everything you've built.
              </p>

              <p className="mt-1 text-[11px] text-solo-muted">
                Share your journey with mentors, peers, and future
                opportunities.
              </p>
            </div>

            <a
              href="#hero"
              className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-solo-orange px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
            >
              Start Your Journey
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

