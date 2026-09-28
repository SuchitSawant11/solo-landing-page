"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
    <footer className="relative border-t border-white/10 bg-[#171412] px-6 py-10 text-white">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mx-auto grid max-w-[1180px] gap-8 sm:grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr_1fr]"
      >
        {/* Brand */}
        <div>
          <a
            href="#hero"
            aria-label="Go to SOLO homepage"
            className="inline-flex items-center transition-opacity duration-300 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FD4322]"
          >

            <Image
              src="/images/logo/solo-logo-transparent.png"
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
        {COLUMNS.map((column, index) => (
          <motion.div
            key={column.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
          >
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
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Divider + Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 border-t border-white/10 pt-5"
      >
        <p className="pr-12 text-center text-[10px] leading-4 text-[#8F8884]">
          © {new Date().getFullYear()} SOLO. Skills-First Infrastructure
          Powering Learning, Employment & Workforce Readiness.
        </p>
      </motion.div>

      {/* Back to Top */}
      <motion.button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Back to top"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.25 }}
        className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#FD4322] text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FD4322]"
      >
        ↑
      </motion.button>
    </footer>
  );
}