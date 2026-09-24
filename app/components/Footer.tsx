"use client";

import Image from "next/image";

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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative mt-16 border-t border-white/10 bg-[#171412] px-6 py-10 text-white">
      <div className="mx-auto grid max-w-[1180px] gap-8 sm:grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <a
            href="#hero"
            aria-label="Go to SOLO homepage"
            className="inline-flex items-center transition-opacity duration-300 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FD4322]"
          >

            <Image
              src="/solo-logo-transparent.png"
              alt="SOLO"
              width={100}
              height={100}
              className="h-13 w-auto object-contain"
            />

          </a>

          <p className=" max-w-48 text-xs leading-5 text-[#B8B1AD]">
            Discover. Learn. Prove. Grow. Showcase.
          </p>
        </div>

        {/* Footer Columns */}
        {COLUMNS.map((column) => (
          <div key={column.title}>
            <h2 className="font-heading text-sm font-bold text-[#FD4322]">
              {column.title}
            </h2>

            <ul className="mt-3 space-y-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-block text-xs text-[#B8B1AD] transition-all duration-300 hover:translate-x-1 hover:text-white focus-visible:translate-x-1 focus-visible:text-white focus-visible:outline-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Divider + Copyright */}
      <div className="mt-8 border-t border-white/10 pt-5">
        <p className="pr-12 text-center text-[10px] leading-4 text-[#8F8884]">
          © {new Date().getFullYear()} SOLO. Skills-First Infrastructure
          Powering Learning, Employment & Workforce Readiness.
        </p>
      </div>

      {/* Back to Top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Back to top"
        className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#FD4322] text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FD4322]"
      >
        ↑
      </button>
    </footer>
  );
}