const FEATURES = [
  {
    title: "Shareable Portfolio",
    description:
      "A public profile page showing your projects, badges, and progress.",
  },
  {
    title: "Verified Credentials",
    description:
      "Skill badges employers can verify, not just a certificate PDF.",
  },
  {
    title: "One Link, Everything",
    description:
      "Send one link instead of a resume, a GitHub, and three PDFs.",
  },
];

export default function Profile() {
  return (
    <section
      id="profile"
      className="mx-auto mt-12 w-full max-w-5xl px-5 sm:px-6 lg:px-8"
    >
      <div className="text-center">
        <h3 className="font-heading text-xl font-bold text-solo-text sm:text-2xl">
          Showcase
        </h3>

        <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-solo-muted">
          Turn your journey into a profile that speaks for itself.
        </p>
      </div>

      <div className="mt-7 grid gap-5 md:grid-cols-3">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border border-black/10 bg-white px-5 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <h4 className="text-sm font-semibold text-solo-text">
              {feature.title}
            </h4>

            <p className="mt-2 text-xs leading-5 text-solo-muted">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-9 flex justify-center">
        <a
          href="#hero"
          className="rounded-lg border border-solo-orange px-6 py-3 text-sm font-semibold text-solo-orange transition-colors hover:bg-solo-orange hover:text-white"
        >
          Start Your Own Journey
        </a>
      </div>
    </section>
  );
}