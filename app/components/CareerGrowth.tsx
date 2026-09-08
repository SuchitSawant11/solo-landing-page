const GROWTH_PATHS = [
  {
    title: "Mentor Matching",
    description:
      "Connect with people a few steps ahead of you on the same path.",
  },
  {
    title: "Career Guidance",
    description:
      "Get direction on roles, salary ranges, and next skills to learn.",
  },
  {
    title: "Community Access",
    description:
      "Join a network of other independent learners for support.",
  },
];

export default function CareerGrowth() {
  return (
    <section
      id="growth"
      className="mx-auto mt-12 w-full max-w-5xl px-5 sm:px-6 lg:px-8"
    >
      <div className="text-center">
        <h3 className="font-heading text-xl font-bold text-solo-text sm:text-2xl">
          Grow
        </h3>

        <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-solo-muted">
          Skills alone don't build a career — direction and community do too.
        </p>
      </div>

      <div className="mt-7 grid gap-5 md:grid-cols-3">
        {GROWTH_PATHS.map((path) => (
          <div
            key={path.title}
            className="rounded-xl border border-black/10 bg-white px-5 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <h4 className="text-sm font-semibold text-solo-text">
              {path.title}
            </h4>

            <p className="mt-2 text-xs leading-5 text-solo-muted">
              {path.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}