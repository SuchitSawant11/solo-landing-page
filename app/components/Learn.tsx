const TOPICS = [
  {
    title: "Bite-Sized Lessons",
    description: "Short, focused modules you can finish in 10–15 minutes.",
  },
  {
    title: "Real-World Context",
    description: "Every concept tied to an actual use case, not just theory.",
  },
  {
    title: "Track Your Progress",
    description: "See exactly how far along you are at every step.",
  },
];

export default function Learn() {
  return (
    <div>
      <h3 className="font-heading text-xl font-bold text-solo-text">Learn</h3>
      <p className="mt-2 text-sm text-solo-muted">
        Structured lessons that build your foundation before you touch a
        real project.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {TOPICS.map((topic) => (
          <div
            key={topic.title}
            className="rounded-xl border border-black/10 bg-white p-4 shadow-sm"
          >
            <h4 className="text-sm font-semibold text-solo-text">
              {topic.title}
            </h4>
            <p className="mt-1 text-xs text-solo-muted">
              {topic.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
