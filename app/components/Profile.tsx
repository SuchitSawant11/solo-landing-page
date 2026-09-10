import Image from "next/image";

const SKILLS = ["Career Planning", "React", "UI Design", "Problem Solving"];

const PROJECTS = [
  {
    title: "Career Path Explorer",
    label: "Completed Project",
    color: "bg-solo-orange/10 text-solo-orange",
  },
  {
    title: "Student Portfolio",
    label: "In Progress",
    color: "bg-solo-blue/10 text-solo-blue",
  },
];

const BADGES = [
  {
    title: "First Project",
    description: "Built a practical project",
    label: "Achievement 01",
    color: "border-solo-gold/30 bg-solo-gold/10 text-solo-gold",
  },
  {
    title: "Skill Builder",
    description: "Completed 5 learning modules",
    label: "Achievement 02",
    color: "border-solo-orange/30 bg-solo-orange/10 text-solo-orange",
  },
  {
    title: "Career Ready",
    description: "Created a shareable profile",
    label: "Achievement 03",
    color: "border-solo-blue/30 bg-solo-blue/10 text-solo-blue",
  },
];

export default function Profile() {
  return (
    <section id="profile" className="relative overflow-hidden bg-solo-bg">
      {/* Decorative background shapes */}
      <div className="absolute -left-28 top-28 h-72 w-72 rounded-full bg-solo-orange/10 blur-3xl" />
      <div className="absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-solo-blue/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1180px] px-5 py-16 md:py-24">
        {/* Section heading */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-solo-text md:text-5xl">
              Your learning deserves
              <span className="text-solo-orange"> to be seen.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-solo-muted md:text-right">
            Turn skills, projects, achievements, and progress into one
            professional profile you can confidently share.
          </p>
        </div>

        {/* Main learner portfolio dashboard */}
        <div className="mt-10 overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_24px_80px_rgba(23,20,18,0.08)]">
          <div className="grid lg:grid-cols-[0.8fr_1.45fr_0.9fr]">
            {/* Left learner profile panel */}
            <aside className="relative overflow-hidden border-b border-solo-orange/15 bg-solo-orange/5 p-6 md:p-7 lg:border-b-0 lg:border-r">
              <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-solo-orange/15 blur-2xl" />
              <div className="absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-solo-gold/20 blur-2xl" />

              <div className="relative">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-solo-orange">
                  Learner Profile
                </p>

                {/* Local student SVG illustration */}
                <div className="mt-7 flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border border-solo-orange/70 bg-white p-2.5 shadow-lg shadow-solo-orange/40">
                  <Image
                    src="/Student-1623472004225-md.png"
                    alt="Student learner illustration"
                    width={104}
                    height={104}
                    className="h-[104px] w-[104px] object-contain"
                    priority={false}
                  />
                </div>

                <h3 className="mt-5 font-heading text-2xl font-extrabold text-solo-text">
                  Diksha Gaonkar
                </h3>

                <p className="mt-2 text-xs leading-5 text-solo-muted">
                  Learner Profile · Building career-ready skills
                </p>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-500" />

                  <span className="text-[10px] font-semibold text-solo-text">
                    Actively learning
                  </span>
                </div>

                <div className="mt-10">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-solo-muted">
                        Profile Complete
                      </p>

                      <p className="mt-1 font-heading text-3xl font-extrabold text-solo-text">
                        78%
                      </p>
                    </div>

                    <span className="rounded-lg bg-solo-gold/15 px-2 py-1 text-[10px] font-bold text-solo-gold">
                      Growing
                    </span>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-solo-orange/15">
                    <div className="h-full w-[78%] rounded-full bg-solo-orange" />
                  </div>
                </div>

                <a
                  href="#learn"
                  className="group mt-10 inline-flex items-center gap-2 text-xs font-bold text-solo-orange transition-all duration-300 hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-solo-orange"
                >
                  View Learning Journey

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </aside>

            {/* Centre panel: learning, skills, and projects */}
            <div className="p-5 md:p-7">
              {/* Learning progress */}
              <div className="rounded-2xl border border-solo-orange/20 bg-solo-orange/5 p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-orange">
                      Learning Progress
                    </p>

                    <h3 className="mt-2 font-heading text-xl font-extrabold text-solo-text md:text-2xl">
                      Career Foundations Pathway
                    </h3>

                    <p className="mt-2 max-w-sm text-xs leading-5 text-solo-muted">
                      Building the skills, confidence, and proof needed for
                      future career opportunities.
                    </p>
                  </div>

                  <span className="font-heading text-3xl font-extrabold text-solo-orange">
                    72%
                  </span>
                </div>

                <div className="mt-6 h-3 overflow-hidden rounded-full bg-solo-orange/15">
                  <div className="h-full w-[72%] rounded-full bg-solo-orange" />
                </div>

                <div className="mt-3 flex justify-between text-[10px] font-medium text-solo-muted">
                  <span>Started learning</span>
                  <span>Career-ready profile</span>
                </div>
              </div>

              {/* Skills */}
              <div className="mt-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-orange">
                      Skills
                    </p>

                    <h3 className="mt-1 font-heading text-lg font-bold text-solo-text">
                      Skills in Progress
                    </h3>
                  </div>

                  <span className="rounded-full bg-solo-orange/10 px-3 py-1.5 text-[10px] font-bold text-solo-orange">
                    4 Skills
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {SKILLS.map((skill, index) => (
                    <div
                      key={skill}
                      className={
                        index % 2 === 0
                          ? "rounded-2xl border border-solo-orange/15 bg-solo-orange/5 p-3 transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm"
                          : "rounded-2xl border border-solo-blue/15 bg-solo-blue/5 p-3 transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm"
                      }
                    >
                      <span
                        className={
                          index % 2 === 0
                            ? "text-[10px] font-bold text-solo-orange"
                            : "text-[10px] font-bold text-solo-blue"
                        }
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="mt-3 text-xs font-bold text-solo-text">
                        {skill}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured projects */}
              <div className="mt-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-orange">
                      Portfolio
                    </p>

                    <h3 className="mt-1 font-heading text-lg font-bold text-solo-text">
                      Featured Projects
                    </h3>
                  </div>

                  <span className="text-[10px] font-semibold text-solo-muted">
                    2 Projects
                  </span>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {PROJECTS.map((project, index) => (
                    <article
                      key={project.title}
                      className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-solo-orange/30 hover:shadow-lg"
                    >
                      <div
                        className={
                          index === 0
                            ? "absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-solo-orange/10"
                            : "absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-solo-blue/10"
                        }
                      />

                      <div className="relative flex items-start justify-between gap-3">
                        <span
                          className={`rounded-full px-2 py-1 text-[9px] font-bold ${project.color}`}
                        >
                          {project.label}
                        </span>

                        <span className="text-xs text-solo-muted transition-transform duration-300 group-hover:translate-x-1">
                          ↗
                        </span>
                      </div>

                      <p className="relative mt-8 font-heading text-sm font-bold text-solo-text">
                        {project.title}
                      </p>

                      <p className="relative mt-2 text-[10px] leading-4 text-solo-muted">
                        Evidence of practical learning and problem-solving.
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Right panel: achievements and shareable profile */}
            <aside className="border-t border-solo-blue/15 bg-solo-blue/5 p-5 md:p-7 lg:border-l lg:border-t-0">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-blue">
                  Achievement Cabinet
                </p>

                <h3 className="mt-2 font-heading text-2xl font-extrabold leading-tight text-solo-text">
                  Proof that grows with you.
                </h3>

                <p className="mt-3 text-xs leading-5 text-solo-muted">
                  Each completed project, milestone, and credential becomes part
                  of your professional story.
                </p>
              </div>

              {/* Achievement cards without icons */}
              <div className="mt-6 space-y-3">
                {BADGES.map((badge) => (
                  <article
                    key={badge.title}
                    className="rounded-2xl border border-black/10 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-solo-blue/30 hover:shadow-md"
                  >
                    <span
                      className={`inline-flex rounded-full border px-2.5 py-1 text-[9px] font-bold ${badge.color}`}
                    >
                      {badge.label}
                    </span>

                    <p className="mt-4 text-xs font-bold text-solo-text">
                      {badge.title}
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-solo-muted">
                      {badge.description}
                    </p>
                  </article>
                ))}
              </div>

              {/* Shareable portfolio */}
              <div className="mt-7 rounded-2xl border border-solo-blue/20 bg-white p-5 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-blue">
                  Your Shareable Portfolio
                </p>

                <p className="mt-3 font-heading text-lg font-bold text-solo-text">
                  One profile. Every achievement.
                </p>

                <p className="mt-2 text-xs leading-5 text-solo-muted">
                  Share your learning journey with mentors, peers, recruiters,
                  and future opportunities.
                </p>

                <div className="mt-4 rounded-xl border border-solo-blue/15 bg-solo-blue/5 px-3 py-2 text-[10px] font-medium text-solo-muted">
                  solo.example/diksha
                </div>

                <a
                  href="#start"
                  className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-solo-orange px-4 py-3 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-solo-orange"
                >
                  Build Your Profile

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}