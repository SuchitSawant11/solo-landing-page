"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "Discover", href: "#discover" },
  { label: "Learn & Grow", href: "#learn" },
  { label: "Prove Skills", href: "#prove" },
  { label: "Profile", href: "#profile" },
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-3">
        {/* Logo + tagline */}
        <a href="#hero">
          <Logo showTagline taglineColor="text-solo-orange" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden gap-7 lg:flex">
          {NAV_ITEMS.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-solo-orange"
                    : "text-solo-text hover:text-solo-orange"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Auth buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#login"
            className="rounded-lg border border-solo-orange px-5 py-2 text-sm font-semibold text-solo-orange transition-colors hover:bg-solo-orange hover:text-white"
          >
            Login
          </a>
          <a
            href="#start"
            className="rounded-lg bg-solo-orange px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`h-0.5 w-6 bg-solo-text transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-solo-text transition-opacity ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-solo-text transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="flex flex-col gap-4 border-t border-black/10 bg-white px-6 py-4 lg:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-solo-text"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 flex gap-3">
            <a
              href="#login"
              onClick={() => setMenuOpen(false)}
              className="flex-1 rounded-lg border border-solo-orange px-5 py-2 text-center text-sm font-semibold text-solo-orange"
            >
              Login
            </a>
            <a
              href="#start"
              onClick={() => setMenuOpen(false)}
              className="flex-1 rounded-lg bg-solo-orange px-5 py-2 text-center text-sm font-semibold text-white"
            >
              Sign Up
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
