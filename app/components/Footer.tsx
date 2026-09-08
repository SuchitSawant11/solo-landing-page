"use client";

import Logo from "@/components/Logo";

const COLUMNS = [
  {
    title: "Journey",
    links: [
      { label: "Discover", href: "#discover" },
      { label: "Learn & Build Skills", href: "#learn" },
      { label: "Prove Skills", href: "#prove" },
      { label: "Grow & Showcase", href: "#profile" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "About SOLO", href: "#hero" },
      { label: "Success Stories", href: "#profile" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Get Started", href: "#start" },
      { label: "Contact Us", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#171412] px-6 py-16 text-white">
      <div className="mx-auto grid max-w-[1240px] gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        {/* Logo + tagline */}
        <div>
          <Logo />
          <p className="mt-4 text-sm text-white/70">
            Discover. Learn. Prove. Grow. Showcase.
          </p>
        </div>

        {/* Link columns */}
        {COLUMNS.map((column) => (
          <div key={column.title}>
            <h4 className="font-heading text-base font-bold text-solo-orange">
              {column.title}
            </h4>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider + copyright */}
      <div className="mx-auto mt-12 max-w-[1240px] border-t border-white/10 pt-6">
        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} SOLO. Skills-First Infrastructure
          Powering Learning, Employment & Workforce Readiness.
        </p>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-solo-orange text-white shadow-lg transition-transform hover:scale-105"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}
