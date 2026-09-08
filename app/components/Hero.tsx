
"use client";

const JOURNEY_STEPS = [
  {
    number: "01",
    title: "Discover",
    description: "Explore career pathways",
    position: "left-4 top-8 md:left-10 md:top-16",
  },
  {
    number: "02",
    title: "Learn",
    description: "Follow structured learning",
    position: "right-4 top-10 md:right-10 md:top-20",
  },
  {
    number: "03",
    title: "Build Skills",
    description: "Practice through real projects",
    position: "left-2 top-[42%] md:left-8",
  },
  {
    number: "04",
    title: "Prove Skills",
    description: "Complete challenges",
    position: "right-2 top-[44%] md:right-8",
  },
  {
    number: "05",
    title: "Grow",
    description: "Track your progress",
    position: "left-8 bottom-8 md:left-16 md:bottom-10",
  },
  {
    number: "06",
    title: "Showcase",
    description: "Share your achievements",
    position: "right-8 bottom-8 md:right-16 md:bottom-10",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-70px)] overflow-hidden bg-solo-bg"
    >
      {/* Background Circles */}
      <div className="absolute left-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full bg-solo-orange/10 blur-3xl" />

      <div className="absolute bottom-[-140px] right-[-100px] h-[320px] w-[320px] rounded-full bg-solo-orange/10 blur-3xl" />

      {/* Floating Journey Cards */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {JOURNEY_STEPS.map((step) => (
          <a
            key={step.number}
            href={
              step.number === "01"
                ? "#discover"
                : step.number === "02"
                ? "#learn"
                : step.number === "03"
                ? "#learn"
                : step.number === "04"
                ? "#prove"
                : "#profile"
            }
            className={`pointer-events-auto absolute ${step.position} w-44 rounded-2xl border border-black/10 bg-white/90 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-solo-orange/40 hover:shadow-xl`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-solo-orange">
                {step.number}
              </span>

              <span className="text-xs text-solo-muted transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </div>

            <h3 className="mt-3 font-heading text-sm font-bold text-solo-text">
              {step.title}
            </h3>

            <p className="mt-1 text-[11px] leading-4 text-solo-muted">
              {step.description}
            </p>
          </a>
        ))}
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-70px)] max-w-4xl items-center justify-center px-6 py-10 text-center">
        <div className="w-full">

          {/* Badge */}
          <span className="inline-flex rounded-full border border-solo-orange/20 bg-solo-orange/5 px-4 py-1.5 text-xs font-semibold text-solo-orange">
            Your learning journey starts here
          </span>

          {/* Heading */}
          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-solo-text sm:text-5xl md:text-6xl">
            Build Skills.
            <br />
            <span className="text-solo-orange">
              Discover Careers.
            </span>
            <br />
            Learn Your Way.
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-solo-muted md:text-base">
            SOLO is a career learning platform for students and aspiring
            professionals. Discover career pathways, develop practical skills,
            work on real projects, and showcase your achievements as you
            progress toward your career goals.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#discover"
              className="group inline-flex items-center gap-2 rounded-lg bg-solo-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
            >
              Explore Pathways
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#learn"
              className="group inline-flex items-center gap-2 rounded-lg border border-solo-orange px-5 py-2.5 text-sm font-semibold text-solo-orange transition-all duration-300 hover:-translate-y-1 hover:bg-solo-orange hover:text-white hover:shadow-md"
            >
              Start Learning
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>

          {/* Journey Indicator */}
          <div className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-2 text-[10px] font-semibold text-solo-muted sm:gap-3 sm:text-xs">
            <span>Discover</span>
            <span className="text-solo-orange">—</span>
            <span>Learn</span>
            <span className="text-solo-orange">—</span>
            <span>Build</span>
            <span className="text-solo-orange">—</span>
            <span>Prove</span>
            <span className="text-solo-orange">—</span>
            <span>Grow</span>
            <span className="text-solo-orange">—</span>
            <span>Showcase</span>
          </div>
        </div>
      </div>
    </section>
  );
}
