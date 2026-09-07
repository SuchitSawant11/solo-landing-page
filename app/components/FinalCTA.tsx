export default function FinalCTA() {
  return (
    <section id="start" className="px-6 py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-black/10 bg-white px-8 py-16 text-center shadow-sm">
        <h2 className="font-heading text-2xl font-extrabold text-solo-text md:text-3xl">
          Ready to Start Your Own Path?
        </h2>
        <p className="max-w-md text-sm text-solo-muted md:text-base">
          No cohorts, no waitlists. Discover, learn, build, and showcase —
          all at your own pace.
        </p>
        <a
          href="#discover"
          className="rounded-lg bg-solo-orange px-8 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          Get Started Free
        </a>
      </div>
    </section>
  );
}
