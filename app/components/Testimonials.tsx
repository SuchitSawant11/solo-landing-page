const TESTIMONIALS = [
  {
    quote:
      "I went from not knowing what to learn to landing a junior dev role in under a year.",
    name: "Aditi R.",
    role: "Frontend Developer",
  },
  {
    quote:
      "The project-first approach meant I actually had a portfolio, not just certificates.",
    name: "Marcus T.",
    role: "Data Analyst",
  },
  {
    quote:
      "Having one clear path instead of a hundred courses to choose from made all the difference.",
    name: "Priya S.",
    role: "Product Designer",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-solo-bg px-6 py-20">
      <div className="mx-auto max-w-[1240px] text-center">
        <h2 className="font-heading text-2xl font-extrabold text-solo-text md:text-3xl">
          Real People, Real Progress
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 text-left shadow-sm"
            >
              <p className="text-sm text-solo-text">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-solo-text">
                  {t.name}
                </p>
                <p className="text-xs text-solo-muted">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
