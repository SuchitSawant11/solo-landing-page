const INTERESTS = [
  "Web Development",
  "Data & AI",
  "Design",
  "Product Management",
  "Marketing",
  "Cybersecurity",
];

export default function Discover() {
  return (
    <div className="mx-auto max-w-[1240px] px-6 py-20">
      <div className="text-center">
        <h2 className="font-heading text-2xl font-extrabold text-solo-text md:text-3xl">
          Discover What Fits You
        </h2>
        <p className="mt-3 text-solo-muted">
          Take a short assessment or browse tracks to find where your
          strengths and interests overlap.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
        {INTERESTS.map((interest) => (
          <button
            key={interest}
            className="rounded-xl border border-black/10 bg-white px-4 py-4 text-sm font-medium text-solo-text shadow-sm transition-colors hover:border-solo-orange hover:text-solo-orange"
          >
            {interest}
          </button>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="#learn"
          className="rounded-lg bg-solo-orange px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          Take the Assessment
        </a>
      </div>
    </div>
  );
}
