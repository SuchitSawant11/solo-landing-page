const JOURNEY_STEPS = [
  {
    number: "01",
    title: "Discover",
    description: "Explore career pathways",
    position: "left-3 top-10 lg:left-8 lg:top-14",
    href: "#discover",
    color: "border-solo-gold/30",
    numberColor: "text-solo-gold",
  },
  {
    number: "02",
    title: "Learn",
    description: "Follow structured learning",
    position: "right-3 top-14 lg:right-8 lg:top-24",
    href: "#learn",
    color: "border-solo-orange/30",
    numberColor: "text-solo-orange",
  },
  {
    number: "03",
    title: "Build Skills",
    description: "Practice through real projects",
    position: "left-1 top-[42%] lg:left-3",
    href: "#learn",
    color: "border-solo-blue/30",
    numberColor: "text-solo-blue",
  },
  {
    number: "04",
    title: "Prove Skills",
    description: "Complete challenges",
    position: "right-1 top-[45%] lg:right-3",
    href: "#prove",
    color: "border-solo-orange/30",
    numberColor: "text-solo-orange",
  },
  {
    number: "05",
    title: "Grow",
    description: "Track your progress",
    position: "bottom-10 left-8 lg:bottom-12 lg:left-14",
    href: "#profile",
    color: "border-solo-gold/30",
    numberColor: "text-solo-gold",
  },
  {
    number: "06",
    title: "Showcase",
    description: "Share your achievements",
    position: "bottom-10 right-8 lg:bottom-12 lg:right-14",
    href: "#profile",
    color: "border-solo-blue/30",
    numberColor: "text-solo-blue",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-[calc(100vh-70px)] overflow-hidden bg-solo-bg"
    >
      {/* Soft background color shapes */}
      <div className="absolute -left-36 -top-36 h-[420px] w-[420px] rounded-full bg-solo-orange/15 blur-3xl" />
      <div className="absolute -right-36 -top-20 h-[380px] w-[380px] rounded-full bg-solo-gold/15 blur-3xl" />
      <div className="absolute -bottom-48 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-solo-blue/10 blur-3xl" />

      {/* Decorative background grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #171412 1px, transparent 1px), linear-gradient(to bottom, #171412 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* Circular journey map: large screens */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute left-1/2 top-1/2 h-[530px] w-[530px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-solo-orange/30" />

        <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-solo-blue/20" />

        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-solo-orange shadow-[0_0_0_10px_rgba(253,67,34,0.12)]" />
      </div>

      {/* Floating learner journey cards: tablet and desktop */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {JOURNEY_STEPS.map((step) => (
          <a
            key={step.number}
            href={step.href}
            aria-label={`${step.title}: ${step.description}`}
            className={`group pointer-events-auto absolute z-20 w-44 rounded-2xl border ${step.color} bg-white/85 p-4 shadow-[0_12px_34px_rgba(23,20,18,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-solo-orange/50 hover:shadow-[0_18px_45px_rgba(23,20,18,0.16)] motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-solo-orange ${step.position}`}
          >
            <span
              className={`font-heading text-xs font-extrabold ${step.numberColor}`}
            >
              {step.number}
            </span>

            <h3 className="mt-4 font-heading text-sm font-bold text-solo-text">
              {step.title}
            </h3>

            <p className="mt-1 text-[11px] leading-4 text-solo-muted">
              {step.description}
            </p>

            <div className="mt-4 h-1 w-8 rounded-full bg-solo-orange/20 transition-all duration-300 group-hover:w-full group-hover:bg-solo-orange" />
          </a>
        ))}
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-70px)] max-w-5xl items-center justify-center px-5 py-20 text-center md:px-6">
        <div className="w-full rounded-[2rem] border border-white/70 bg-white/55 px-5 py-10 shadow-[0_24px_80px_rgba(23,20,18,0.06)] backdrop-blur-sm sm:px-10 md:px-16 md:py-14">
          {/* Hero badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-solo-orange/20 bg-solo-orange/5 px-4 py-1.5 text-xs font-semibold text-solo-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-solo-orange" />
            Your learning journey starts here
          </span>

          {/* Main heading */}
          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.03] tracking-tight text-solo-text sm:text-5xl md:text-6xl lg:text-7xl">
            Build Skills.
            <br />

            <span className="relative inline-block text-solo-orange">
              Discover Careers.
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-solo-gold/70" />
            </span>

            <br />
            Learn Your Way.
          </h1>

          {/* Platform description */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-solo-muted md:text-base md:leading-7">
            SOLO is a career learning platform for students and aspiring
            professionals. Discover career pathways, develop practical skills,
            work on real projects, and showcase your achievements as you
            progress toward your career goals.
          </p>

          {/* Main actions */}
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href="#discover"
              className="inline-flex items-center justify-center rounded-xl bg-solo-orange px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-solo-orange/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-solo-orange"
            >
              Explore Pathways
            </a>

            <a
              href="#learn"
              className="inline-flex items-center justify-center rounded-xl border border-solo-orange/40 bg-white/70 px-6 py-3.5 text-sm font-bold text-solo-orange shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-solo-orange hover:bg-solo-orange hover:text-white hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-solo-orange"
            >
              Start Learning
            </a>
          </div>

          {/* Six-step SOLO journey */}
          <div className="mx-auto mt-10 max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-muted">
              Your SOLO Journey
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-[10px] font-bold uppercase tracking-wide sm:gap-x-3 sm:text-xs">
              <span className="rounded-full bg-solo-orange/10 px-3 py-1.5 text-solo-orange">
                01 Discover
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-solo-orange" />

              <span className="rounded-full bg-solo-gold/15 px-3 py-1.5 text-solo-gold">
                02 Learn
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-solo-orange" />

              <span className="rounded-full bg-solo-blue/10 px-3 py-1.5 text-solo-blue">
                03 Build
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-solo-orange" />

              <span className="rounded-full bg-solo-orange/10 px-3 py-1.5 text-solo-orange">
                04 Prove
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-solo-orange" />

              <span className="rounded-full bg-solo-gold/15 px-3 py-1.5 text-solo-gold">
                05 Grow
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-solo-orange" />

              <span className="rounded-full bg-solo-blue/10 px-3 py-1.5 text-solo-blue">
                06 Showcase
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}