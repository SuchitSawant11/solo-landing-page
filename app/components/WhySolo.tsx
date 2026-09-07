const REASONS = [
  {
    title: "No Cohorts, No Waiting",
    description:
      "Start today, move at your speed. No fixed schedules or group pacing holding you back.",
  },
  {
    title: "Built-In Proof of Skill",
    description:
      "Every stage ends with something real — a project, a challenge, or a credential you can show.",
  },
  {
    title: "One Path, Not a Maze",
    description:
      "No endless course catalogs. Just a clear sequence from discovery to a shareable profile.",
  },
];

export default function WhySolo() {
  return (
    <section className="bg-solo-bg px-6 py-20">
      <div className="mx-auto max-w-[1240px] text-center">
        <h2 className="font-heading text-2xl font-extrabold text-solo-text md:text-3xl">
          Why Go Solo?
        </h2>
        <p className="mt-3 text-solo-muted">
          A single, self-paced path built for independent learners.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-black/10 bg-white p-6 text-left shadow-sm"
            >
              <h3 className="font-heading text-lg font-bold text-solo-text">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm text-solo-muted">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
