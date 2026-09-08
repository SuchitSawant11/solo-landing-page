
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
    <footer className="relative border-t border-solo-border bg-solo-bg px-6 py-10 text-solo-text">
      <div className="mx-auto grid max-w-[1180px] gap-8 md:grid-cols-[1.2fr_1fr_1fr_1fr]">

        {/* Brand */}
        <div>
          <a
            href="#hero"
            className="inline-flex items-center transition-opacity duration-300 hover:opacity-80"
          >
            <Image
              src="/solo-logo.png"
              alt="SOLO Logo"
              width={100}
              height={100}
              className="h-10 w-auto object-contain"
            />
          </a>

          <p className="mt-3 text-xs leading-5 text-solo-muted">
            Discover. Learn. Prove. Grow. Showcase.
          </p>
        </div>

        {/* Footer Columns */}
        {COLUMNS.map((column) => (
          <div key={column.title}>
            <h4 className="font-heading text-sm font-bold text-solo-orange">
              {column.title}
            </h4>

            <ul className="mt-3 space-y-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-solo-muted transition-all duration-300 hover:translate-x-1 hover:text-solo-orange"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="mx-auto mt-8 max-w-[1180px] border-t border-solo-border pt-5">
        
<p className="text-center text-[10px] leading-4 text-solo-muted">
  © {new Date().getFullYear()} SOLO. Skills-First Infrastructure
  Powering Learning, Employment & Workforce Readiness.
</p>


      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-solo-orange text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
      >
        ↑
      </button>
    </footer>
  );
}
