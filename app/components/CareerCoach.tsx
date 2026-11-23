"use client";

import { type FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown, LoaderCircle, Sparkles, X } from "lucide-react";

type CoachResult = {
  roleTitle: string;
  summary: string;
  strengths: string[];
  skillGaps: { skill: string; whyItMatters: string; priority: string; nextStep: string }[];
  roadmap: { phase: string; title: string; description: string; resources: string[] }[];
};

const CAREERS = ["Frontend Developer", "Data Analyst", "UI/UX Designer", "Product Manager", "Other / I'm exploring"];

export default function CareerCoach() {
  const [open, setOpen] = useState(false);
  const [career, setCareer] = useState(CAREERS[0]);
  const [jobDescription, setJobDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [result, setResult] = useState<CoachResult | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const openCoach = () => setOpen(true);
    window.addEventListener("open-career-coach", openCoach);
    return () => window.removeEventListener("open-career-coach", openCoach);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const generatePathway = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/career-coach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ career: career === "Other / I'm exploring" ? "" : career, jobDescription, skills }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not generate a pathway.");
      setResult(data.result as CoachResult);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
    setError("");
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open AI career pathway coach"
        className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full bg-solo-orange px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_35px_rgba(253,67,34,0.34)] transition hover:-translate-y-0.5 hover:bg-[#e8391b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-solo-orange sm:bottom-7 sm:right-7"
      >
        <Sparkles size={17} aria-hidden="true" />
        <span>Build my pathway</span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close career coach"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[70] cursor-default bg-black/40 backdrop-blur-[2px]"
            />
            <motion.aside
              role="dialog" aria-modal="true" aria-labelledby="coach-title"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              className="fixed inset-y-0 right-0 z-[80] flex w-full flex-col overflow-hidden bg-white shadow-2xl sm:max-w-xl"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-4 sm:px-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-solo-orange/10 text-solo-orange"><Sparkles size={20} /></span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-solo-orange">SOLO Career Coach</p>
                    <h2 id="coach-title" className="font-heading text-base font-bold text-solo-text">Build your pathway</h2>
                  </div>
                </div>
                <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-100"><X size={20} /></button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-7">
                {!result ? (
                  <>
                    <p className="mb-6 text-sm leading-6 text-solo-muted">Tell us where you want to go and what you already know. Get a practical, personalized roadmap to take your next step.</p>
                    <form onSubmit={generatePathway} className="space-y-5">
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold text-solo-text">Choose a career direction</span>
                        <span className="relative block">
                          <select value={career} onChange={(event) => setCareer(event.target.value)} className="w-full appearance-none rounded-xl border border-neutral-200 bg-white px-4 py-3 pr-10 text-sm text-solo-text outline-none transition focus:border-solo-orange focus:ring-2 focus:ring-solo-orange/15">
                            {CAREERS.map((item) => <option key={item}>{item}</option>)}
                          </select>
                          <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                        </span>
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold text-solo-text">Or paste a job description <span className="font-normal text-neutral-400">(optional)</span></span>
                        <textarea value={jobDescription} onChange={(event) => setJobDescription(event.target.value)} maxLength={8000} rows={5} placeholder="Paste a role you're interested in..." className="w-full resize-y rounded-xl border border-neutral-200 px-4 py-3 text-sm leading-6 text-solo-text outline-none transition placeholder:text-neutral-400 focus:border-solo-orange focus:ring-2 focus:ring-solo-orange/15" />
                        <span className="mt-1 block text-right text-[10px] text-neutral-400">{jobDescription.length}/8000</span>
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold text-solo-text">What skills or experience do you have?</span>
                        <textarea value={skills} onChange={(event) => setSkills(event.target.value)} maxLength={1000} rows={3} placeholder="For example: HTML, beginner JavaScript, class project..." className="w-full resize-y rounded-xl border border-neutral-200 px-4 py-3 text-sm leading-6 text-solo-text outline-none transition placeholder:text-neutral-400 focus:border-solo-orange focus:ring-2 focus:ring-solo-orange/15" />
                      </label>
                      {error && <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
                      <button type="submit" disabled={loading} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-solo-orange px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-solo-orange/20 transition hover:bg-[#e8391b] disabled:cursor-wait disabled:opacity-70">
                        {loading ? <><LoaderCircle size={17} className="animate-spin" /> Building your roadmap...</> : <>Generate my pathway <ArrowRight size={17} /></>}
                      </button>
                      <p className="text-center text-[11px] leading-5 text-neutral-400">Your details are used to generate this recommendation and are not saved by this demo.</p>
                    </form>
                  </>
                ) : (
                  <div className="space-y-7 pb-4">
                    <div>
                      <button type="button" onClick={reset} className="mb-4 text-xs font-bold text-solo-orange hover:underline">← Edit your details</button>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-orange">Your suggested direction</p>
                      <h3 className="mt-1 font-heading text-2xl font-extrabold text-solo-text">{result.roleTitle}</h3>
                      <p className="mt-3 text-sm leading-6 text-solo-muted">{result.summary}</p>
                    </div>
                    {result.strengths?.length > 0 && <section><h4 className="mb-3 text-sm font-bold text-solo-text">A good foundation</h4><ul className="space-y-2">{result.strengths.map((item, index) => <li key={index} className="flex gap-2 text-sm leading-5 text-solo-muted"><Check size={16} className="mt-0.5 shrink-0 text-emerald-600" />{item}</li>)}</ul></section>}
                    {result.skillGaps?.length > 0 && <section><h4 className="mb-3 text-sm font-bold text-solo-text">Skills to strengthen</h4><div className="space-y-3">{result.skillGaps.map((item, index) => <article key={`${item.skill}-${index}`} className="rounded-xl border border-neutral-200 p-4"><div className="flex items-center justify-between gap-2"><h5 className="text-sm font-bold text-solo-text">{item.skill}</h5><span className="rounded-full bg-solo-orange/10 px-2.5 py-1 text-[10px] font-bold text-solo-orange">{item.priority}</span></div><p className="mt-2 text-xs leading-5 text-solo-muted">{item.whyItMatters}</p><p className="mt-2 text-xs font-medium leading-5 text-solo-text">Next: {item.nextStep}</p></article>)}</div></section>}
                    {result.roadmap?.length > 0 && <section><h4 className="mb-3 text-sm font-bold text-solo-text">Your next steps</h4><ol className="space-y-3">{result.roadmap.map((item, index) => <li key={`${item.phase}-${index}`} className="relative rounded-xl bg-[#FFF8F5] p-4"><p className="text-[10px] font-bold uppercase tracking-wider text-solo-orange">{item.phase}</p><h5 className="mt-1 text-sm font-bold text-solo-text">{item.title}</h5><p className="mt-1 text-xs leading-5 text-solo-muted">{item.description}</p>{item.resources?.length > 0 && <p className="mt-2 text-xs font-medium text-solo-text">Explore: {item.resources.join(" · ")}</p>}</li>)}</ol></section>}
                    <p className="rounded-xl border border-neutral-200 px-4 py-3 text-[11px] leading-5 text-neutral-500">This AI-generated roadmap is a starting point, not a guarantee of job readiness. Review it and adapt it to your goals.</p>
                  </div>
                )}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
