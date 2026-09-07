const CHALLENGES = [
  {
    title: "Capstone Project",
    description:
      "A larger, portfolio-worthy project that pulls together everything you've learned.",
  },
  {
    title: "Timed Assessment",
    description:
      "Prove your skills under realistic conditions, not just open-book quizzes.",
  },
  {
    title: "Peer Review",
    description:
      "Get feedback from others on the same path before you showcase your work.",
  },
];

export default function ProveSkills() {
  return (
    <div className="mx-auto max-w-[1240px] px-6 py-20">
      <div className="text-center">
        <h2 className="font-heading text-2xl font-extrabold text-solo-text md:text-3xl">
          Prove Your Skills
        </h2>
        <p className="mt-3 text-solo-muted">
          Move beyond lessons — show what you can actually do.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {CHALLENGES.map((challenge) => (
          <div
            key={challenge.title}
            className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
          >
            <h3 className="font-heading text-lg font-bold text-solo-text">
              {challenge.title}
            </h3>
            <p className="mt-2 text-sm text-solo-muted">
              {challenge.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="#profile"
          className="rounded-lg bg-solo-orange px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          Continue to Growth & Showcase
        </a>
      </div>
    </div>
  );
}
