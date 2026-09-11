const JOURNEY_STEPS = [
  {
    number: "01",
    title: "Discover",
    description: "Explore career pathways",
    href: "#discover",
    color: "border-solo-gold/30",
    numberColor: "text-solo-gold",
  },
  {
    number: "02",
    title: "Learn",
    description: "Follow structured learning",
    href: "#learn",
    color: "border-solo-orange/30",
    numberColor: "text-solo-orange",
  },
  {
    number: "03",
    title: "Build Skills",
    description: "Practice through real projects",
    href: "#learn",
    color: "border-solo-blue/30",
    numberColor: "text-solo-blue",
  },
  {
    number: "04",
    title: "Prove Skills",
    description: "Complete challenges",
    href: "#prove",
    color: "border-solo-orange/30",
    numberColor: "text-solo-orange",
  },
  {
    number: "05",
    title: "Grow",
    description: "Track your progress",
    href: "#profile",
    color: "border-solo-gold/30",
    numberColor: "text-solo-gold",
  },
  {
    number: "06",
    title: "Showcase",
    description: "Share your achievements",
    href: "#profile",
    color: "border-solo-blue/30",
    numberColor: "text-solo-blue",
  },
];

const JOURNEY_POSITIONS = [
  "left-1/2 top-0 -translate-x-1/2",
  "right-0 top-20",
  "right-0 bottom-20",
  "left-1/2 bottom-0 -translate-x-1/2",
  "left-0 bottom-20",
  "left-0 top-20",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-screen pt-17 overflow-hidden bg-solo-bg"
    >
      {/* Soft background shapes */}
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

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-70px)] max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* Hero content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-solo-orange/20 bg-solo-orange/5 px-4 py-1.5 text-xs font-semibold text-solo-orange">
              <span className="h-1.5 w-1.5 rounded-full bg-solo-orange" />
              Your learning journey starts here
            </span>

            {/* Main heading */}
            <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.04] tracking-tight text-solo-text sm:text-5xl md:text-6xl">
              Build Skills.
              <br />

              <span className="relative inline-block text-solo-orange">
                Discover Careers.
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-solo-gold/70" />
              </span>

              <br />
              Learn Your Way.
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-solo-muted md:text-base md:leading-7 lg:mx-0">
              SOLO is a career learning platform for students and aspiring
              professionals figuring out what to learn next - from your first course to your first job.
              Discover career pathways, develop practical
              skills, work on real projects, and showcase your achievements as
              you progress toward your career goals.
            </p>

            {/* Platform statistics */}
            <div className="mx-auto mt-8 grid max-w-lg grid-cols-3 gap-5 text-center lg:mx-0 lg:text-left">
              <div>
                <div className="font-heading text-2xl font-extrabold text-solo-text sm:text-3xl">
                  120+
                </div>

                <div className="mt-1 text-[10px] font-bold uppercase tracking-wide text-solo-muted sm:text-xs">
                  Learning Pathways
                </div>
              </div>

              <div>
                <div className="font-heading text-2xl font-extrabold text-solo-text sm:text-3xl">
                  40k
                </div>

                <div className="mt-1 text-[10px] font-bold uppercase tracking-wide text-solo-muted sm:text-xs">
                  Skills Verified
                </div>
              </div>

              <div>
                <div className="font-heading text-2xl font-extrabold text-solo-text sm:text-3xl">
                  1,800
                </div>

                <div className="mt-1 text-[10px] font-bold uppercase tracking-wide text-solo-muted sm:text-xs">
                  Roles Mapped
                </div>
              </div>
            </div>

            {/* Main actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:justify-start">
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

            {/* Mobile journey list */}
            <div className="mt-10 lg:hidden">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-muted">
                Your SOLO Journey
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3 text-left sm:grid-cols-3">
                {JOURNEY_STEPS.map((step) => (
                  <a
                    key={step.number}
                    href={step.href}
                    aria-label={`${step.title}: ${step.description}`}
                    className={`rounded-2xl border ${step.color} bg-white/85 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-md motion-reduce:transform-none`}
                  >
                    <span
                      className={`font-heading text-xs font-extrabold ${step.numberColor}`}
                    >
                      {step.number}
                    </span>

                    <h3 className="mt-2 font-heading text-sm font-bold text-solo-text">
                      {step.title}
                    </h3>

                    <p className="mt-1 text-[11px] leading-4 text-solo-muted">
                      {step.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop journey map */}
          <div className="relative mx-auto hidden h-[560px] w-full max-w-[600px] lg:block">
            {/* Outer circle */}
            <div className="absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-solo-orange/30" />

            {/* Inner circle */}
            <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-solo-blue/20" />

            {/* Decorative orbit dots */}
            <div className="absolute left-1/2 top-[45px] h-3 w-3 -translate-x-1/2 rounded-full bg-solo-orange shadow-[0_0_0_10px_rgba(253,67,34,0.12)]" />

            <div className="absolute bottom-[45px] left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-solo-blue shadow-[0_0_0_10px_rgba(61,126,184,0.12)]" />

            <div className="absolute left-[45px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-solo-gold shadow-[0_0_0_10px_rgba(244,181,64,0.12)]" />

            <div className="absolute right-[45px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-solo-orange shadow-[0_0_0_10px_rgba(253,67,34,0.12)]" />

            {/* Center content */}
            <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/80 bg-white/80 text-center shadow-xl backdrop-blur-md">
              <span className="font-heading text-sm font-extrabold tracking-[0.2em] text-solo-orange">
                SOLO
              </span>

              <span className="mt-2 max-w-[80px] text-[10px] leading-4 text-solo-muted">
                Your Career Journey
              </span>
            </div>

            {/* Journey cards */}
            {JOURNEY_STEPS.map((step, index) => (
              <a
                key={step.number}
                href={step.href}
                aria-label={`${step.title}: ${step.description}`}
                className={`group absolute z-20 w-44 rounded-2xl border ${step.color} ${JOURNEY_POSITIONS[index]} bg-white/90 p-4 shadow-[0_12px_34px_rgba(23,20,18,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-solo-orange/50 hover:shadow-[0_18px_45px_rgba(23,20,18,0.16)] motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-solo-orange`}
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
        </div>
      </div>
    </section>
  );
}