"use client";

import { motion } from "framer-motion";

const journeySteps = [
  { label: "Discover", chip: "bg-solo-orange/10 text-solo-orange" },
  { label: "Learn", chip: "bg-solo-gold/15 text-solo-gold" },
  { label: "Build", chip: "bg-solo-blue/10 text-solo-blue" },
  { label: "Prove", chip: "bg-solo-orange/10 text-solo-orange" },
  { label: "Grow", chip: "bg-solo-gold/15 text-solo-gold" },
  { label: "Showcase", chip: "bg-solo-blue/10 text-solo-blue" },
];

export default function FinalCTA() {
  return (
    <section id="start" className="relative overflow-hidden bg-solo-bg px-5 py-16 md:px-6 md:py-15">
      {/* Soft background decoration */}
      <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-solo-orange/10 blur-3xl" />
      <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-solo-blue/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-solo-orange/20 bg-white shadow-[0_24px_80px_rgba(23,20,18,0.08)]"
      >
        {/* Decorative top colors */}
        <div className="flex h-2">
          <span className="w-1/3 bg-solo-orange" />
          <span className="w-1/3 bg-solo-gold" />
          <span className="w-1/3 bg-solo-blue" />
        </div>

        <div className="relative px-6 py-14 text-center sm:px-10 md:px-16 md:py-20">
          {/* Light decorative circles */}
          <div className="absolute -left-12 top-10 h-28 w-28 rounded-full bg-solo-orange/10 blur-2xl" />
          <div className="absolute -right-12 bottom-8 h-28 w-28 rounded-full bg-solo-blue/10 blur-2xl" />

          <div className="relative">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45 }}
              className="inline-flex rounded-full border border-solo-orange/20 bg-solo-orange/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-solo-orange"
            >
              Your next step starts here
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mx-auto mt-5 max-w-3xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-solo-text md:text-5xl"
            >
              Ready to Start
              <span className="text-solo-orange"> Your Own Path?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mx-auto mt-5 max-w-xl text-sm leading-6 text-solo-muted md:text-base md:leading-7"
            >
              No cohorts, no waitlists. Discover, learn, build, and showcase —
              all at your own pace.
            </motion.p>

            {/* Six-step journey reminder */}
            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-2 gap-y-3 text-[10px] font-bold uppercase tracking-wide sm:gap-x-3 sm:text-xs">
              {journeySteps.map((step, index) => (
                <motion.span
                  key={step.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.35, delay: 0.2 + index * 0.06 }}
                  className="inline-flex items-center gap-x-2 sm:gap-x-3"
                >
                  <span className={`rounded-full px-3 py-1.5 ${step.chip}`}>
                    {step.label}
                  </span>

                  {index < journeySteps.length - 1 && (
                    <span className="h-1.5 w-1.5 rounded-full bg-solo-orange" />
                  )}
                </motion.span>
              ))}
            </div>

            {/* Main CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <a
                href="https://app.thesolo.network/signup"
                target="_blank"
                className="inline-flex min-w-44 items-center justify-center rounded-xl bg-solo-orange px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-solo-orange/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-solo-orange"
              >
                Get Started Free
              </a>

              <a
                href="#learn"
                className="inline-flex min-w-44 items-center justify-center rounded-xl border border-solo-orange/30 bg-white px-8 py-3.5 text-sm font-bold text-solo-orange transition-all duration-300 hover:-translate-y-1 hover:border-solo-orange hover:bg-solo-orange hover:text-white hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-solo-orange"
              >
                Explore Learning
              </a>
            </motion.div>

            <p className="mt-5 text-[11px] font-medium text-solo-muted">
              Start exploring your pathway today.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
