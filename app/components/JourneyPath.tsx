"use client";

interface Stage {
  label: string;
  href: string;
}

const STAGES: Stage[] = [
  { label: "Discover", href: "#discover" },
  { label: "Learn", href: "#learn" },
  { label: "Build Skills", href: "#learn" },
  { label: "Prove Skills", href: "#prove" },
  { label: "Grow", href: "#profile" },
  { label: "Showcase", href: "#profile" },
];

export default function JourneyPath() {
  const handleClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="bg-solo-bg px-6 py-16">
      <h2 className="mb-10 text-center font-heading text-2xl font-extrabold text-solo-text md:text-3xl">
        Your Journey, Step by Step
      </h2>

      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-6 lg:flex-row lg:justify-between">
        {STAGES.map((stage, index) => (
          <div key={stage.label} className="flex items-center lg:flex-1">
            <button
              onClick={handleClick(stage.href)}
              className="group flex flex-col items-center gap-2 rounded-lg px-3 py-2 text-center transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-solo-orange"
              aria-label={`Jump to ${stage.label} section`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-solo-orange/30 bg-white text-sm font-bold text-solo-orange transition-colors group-hover:border-solo-orange group-hover:bg-solo-orange group-hover:text-white">
                {index + 1}
              </span>
              <span className="whitespace-nowrap text-sm font-medium text-solo-text group-hover:text-solo-orange">
                {stage.label}
              </span>
            </button>

            {index < STAGES.length - 1 && (
              <div className="hidden h-0.5 w-8 bg-solo-orange/20 lg:block lg:w-full" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
