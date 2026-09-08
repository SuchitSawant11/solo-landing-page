
"use client";

const DISCOVER_ITEMS = [
  {
    number: "01",
    title: "Learning Pathways",
    description:
      "Explore structured learning pathways that guide you from your interests to practical skills and career goals.",
    href: "#learn",
  },
  {
    number: "02",
    title: "Relevant Skills",
    description:
      "Discover the skills that match your interests and understand what you need to develop for your chosen direction.",
    href: "#skills",
  },
  {
    number: "03",
    title: "Learning Resources",
    description:
      "Find courses, projects, guides, and other learning resources to support your learning journey.",
    href: "#resources",
  },
  {
    number: "04",
    title: "Career Possibilities",
    description:
      "Explore different career possibilities and discover where your interests and skills can lead you.",
    href: "#careers",
  },
  {
    number: "05",
    title: "Skills for Specific Roles",
    description:
      "Understand the skills and knowledge required for specific roles and career opportunities.",
    href: "#roles",
  },
];

const INTERESTS = [
  {
    name: "Web Development",
    href: "#web-development",
  },
  {
    name: "Data & AI",
    href: "#data-ai",
  },
  {
    name: "UI/UX Design",
    href: "#ui-ux",
  },
  {
    name: "Product Management",
    href: "#product-management",
  },
  {
    name: "Marketing",
    href: "#marketing",
  },
  {
    name: "Cybersecurity",
    href: "#cybersecurity",
  },
];

export default function Discover() {
  return (
    <section id="discover" className="w-full bg-solo-bg">
      <div className="mx-auto max-w-[1180px] px-5 py-10 md:py-12">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-solo-orange">
            Discover
          </span>

          <h2 className="mt-1 font-heading text-2xl font-extrabold text-solo-text md:text-3xl">
            Discover Your
            <span className="text-solo-orange"> Possibilities</span>
          </h2>

          <p className="mt-2 text-xs leading-5 text-solo-muted md:text-sm">
            Find learning pathways, relevant skills, useful resources, and
            career possibilities that help you understand where you want to go
            and what you need to get there.
          </p>
        </div>

        {/* Discover Cards */}
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {DISCOVER_ITEMS.map((item) => (
            <a
              key={item.number}
              href={item.href}
              className="group relative rounded-xl border border-black/10 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-solo-orange/40 hover:shadow-lg"
            >
              {/* Number + Arrow */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-solo-orange">
                  {item.number}
                </span>

                <span className="text-sm text-solo-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-solo-orange">
                  →
                </span>
              </div>

              {/* Content */}
              <div className="mt-3">
                <h3 className="font-heading text-sm font-bold text-solo-text">
                  {item.title}
                </h3>

                <p className="mt-1 text-[11px] leading-4 text-solo-muted">
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Interests */}
        <div className="mt-7 rounded-2xl border border-black/10 bg-white p-5 text-center shadow-sm">
          <h3 className="font-heading text-lg font-bold text-solo-text">
            Explore Your Interests
          </h3>

          <p className="mt-1 text-xs text-solo-muted">
            Start with an area that interests you and discover where it can
            take you.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {INTERESTS.map((interest) => (
              <a
                key={interest.name}
                href={interest.href}
                className="rounded-full border border-solo-orange/30 bg-solo-orange/5 px-3 py-1.5 text-[11px] font-semibold text-solo-text transition-all duration-300 hover:-translate-y-0.5 hover:bg-solo-orange hover:text-white hover:shadow-md"
              >
                {interest.name}
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex justify-center">
          <a
            href="#learn"
            className="group inline-flex items-center gap-2 rounded-lg bg-solo-orange px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
          >
            Explore Learning Pathways
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
