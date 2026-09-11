"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
    ArrowRight,
    Check,
    LockKeyhole,
    Target,
} from "lucide-react";

import { CAREER_PATHS } from "../data/careerPaths";


export default function PathwayTree() {
    const [activeId, setActiveId] = useState(CAREER_PATHS[0].id);

    const active = CAREER_PATHS.find((career) => career.id === activeId)!;

    const unlockedCount = active.skills.filter(
        (skill) => skill.unlocked
    ).length;

    const totalSkills = active.skills.length;

    const progress =
        totalSkills > 0
            ? Math.round((unlockedCount / totalSkills) * 100)
            : 0;

    const nextSkillIndex = active.skills.findIndex(
        (skill) => !skill.unlocked
    );

    const nextSkill =
        nextSkillIndex >= 0
            ? active.skills[nextSkillIndex]
            : null;

    const remainingSkills = totalSkills - unlockedCount;


    return (
        <div className="relative">

            {/* =====================================================
                SECTION HEADER
            ====================================================== */}

            <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">

                <div>

                    <div className="mb-4 flex items-center gap-3">

                        <span className="h-px w-9 bg-solo-orange" />

                        <span className="text-xs font-bold uppercase tracking-[0.16em] text-solo-orange">
                            Explore a career path
                        </span>

                    </div>


                    <h3 className="max-w-3xl font-heading text-3xl font-extrabold leading-[1.08] tracking-tight text-solo-text sm:text-4xl md:text-5xl">

                        See what it takes to become a...

                    </h3>


                    <p className="mt-4 max-w-[60ch] text-sm leading-6 text-solo-muted md:text-base">
                        Pick a career to see which skills you already have,
                        and which ones you can build next.
                    </p>

                </div>


                {/* Overall unlock summary */}
                <motion.div
                    layout
                    className="flex w-fit items-center gap-3 rounded-2xl border border-solo-orange/15 bg-white px-4 py-3 shadow-[0_10px_30px_rgba(23,20,18,0.05)]"
                >

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-solo-orange/10 text-solo-orange">
                        <Target className="h-5 w-5" />
                    </div>

                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-wide text-solo-muted">
                            Skills unlocked
                        </p>

                        <p className="font-heading text-xl font-extrabold leading-none text-solo-text">
                            {unlockedCount}
                            <span className="ml-1 text-sm font-semibold text-neutral-400">
                                / {totalSkills}
                            </span>
                        </p>
                    </div>

                </motion.div>

            </div>



            {/* =====================================================
                CAREER SELECTOR
            ====================================================== */}

            <LayoutGroup id="career-path-selector">

                <div className="mb-5 flex flex-wrap gap-2">

                    {CAREER_PATHS.map((career) => {

                        const isActive = activeId === career.id;

                        const careerUnlocked = career.skills.filter(
                            (skill) => skill.unlocked
                        ).length;

                        return (

                            <button
                                key={career.id}
                                type="button"
                                onClick={() => setActiveId(career.id)}
                                className={`relative rounded-xl px-4 py-3 text-left transition-all duration-300 ${isActive
                                        ? "text-white shadow-md shadow-solo-orange/15"
                                        : "border border-neutral-200 bg-white text-neutral-600 hover:-translate-y-0.5 hover:border-solo-orange/30 hover:text-solo-orange"
                                    }`}
                            >

                                {isActive && (
                                    <motion.span
                                        layoutId="active-career"
                                        className="absolute inset-0 rounded-xl bg-solo-orange"
                                        transition={{
                                            type: "spring",
                                            stiffness: 420,
                                            damping: 32,
                                        }}
                                    />
                                )}

                                <span className="relative z-10 block">

                                    <span className="block text-xs font-bold">
                                        {career.title}
                                    </span>

                                    <span
                                        className={`mt-1 block text-[10px] ${isActive
                                                ? "text-white/75"
                                                : "text-neutral-400"
                                            }`}
                                    >
                                        {careerUnlocked}/{career.skills.length} unlocked
                                    </span>

                                </span>

                            </button>

                        );
                    })}

                </div>

            </LayoutGroup>



            {/* =====================================================
                PATHWAY CARD
            ====================================================== */}

            <AnimatePresence mode="wait">

                <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-[0_20px_60px_rgba(23,20,18,0.06)]"
                >

                    {/* -------------------------------------------------
                        Card header
                    -------------------------------------------------- */}

                    <div className="border-b border-neutral-100 px-5 py-5 sm:px-7 md:px-8">

                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                            <div>

                                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-400">
                                    Your path to becoming a
                                </p>

                                <p className="mt-1 font-heading text-base font-bold text-solo-text md:text-lg">
                                    <span className="text-solo-orange">
                                        {active.title}
                                    </span>
                                </p>

                                <p className="mt-1 text-xs text-solo-muted">
                                    {unlockedCount} of {totalSkills} skills unlocked
                                </p>

                            </div>


                            <div className="w-full sm:w-44">

                                <div className="mb-2 flex items-center justify-between text-[10px] font-semibold text-neutral-500">
                                    <span>Progress</span>
                                    <span>{progress}%</span>
                                </div>

                                <div
                                    className="h-2 overflow-hidden rounded-full bg-neutral-100"
                                    role="progressbar"
                                    aria-valuenow={progress}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    aria-label={`${progress}% career path progress`}
                                >
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progress}%` }}
                                        transition={{
                                            duration: 0.7,
                                            ease: "easeOut",
                                        }}
                                        className="h-full rounded-full bg-solo-orange"
                                    />
                                </div>

                            </div>

                        </div>

                    </div>



                    {/* -------------------------------------------------
                        Skill journey
                    -------------------------------------------------- */}

                    <div className="px-5 py-8 sm:px-7 md:px-10 md:py-10">

                        <div className="mb-7 flex items-center justify-between">

                            <div>

                                <p className="font-heading text-sm font-bold text-solo-text">
                                    Skills along the way
                                </p>

                                <p className="mt-1 text-xs text-solo-muted">
                                    Your current progress toward this role.
                                </p>

                            </div>

                            <span className="hidden rounded-full bg-solo-orange/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-solo-orange sm:inline-flex">
                                {remainingSkills === 0
                                    ? "Path complete"
                                    : `${remainingSkills} to go`}
                            </span>

                        </div>


                        {/* Desktop pathway */}
                        <div className="hidden sm:block">

                            <div className="relative">

                                {/* Base line */}
                                <div className="absolute left-[10%] right-[10%] top-7 h-0.5 bg-neutral-200" />

                                {/* Completed line */}
                                {unlockedCount > 1 && (
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{
                                            width: `${Math.max(
                                                0,
                                                ((unlockedCount - 1) /
                                                    (totalSkills - 1)) *
                                                80
                                            )}%`,
                                        }}
                                        transition={{
                                            duration: 0.7,
                                            ease: "easeOut",
                                        }}
                                        className="absolute left-[10%] top-7 h-0.5 bg-solo-orange"
                                    />
                                )}


                                <div className="relative grid grid-cols-5">

                                    {active.skills.map((skill, index) => {

                                        const isNext =
                                            index === nextSkillIndex;

                                        return (

                                            <motion.div
                                                key={skill.name}
                                                initial={{
                                                    opacity: 0,
                                                    y: 8,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                transition={{
                                                    delay: index * 0.07,
                                                }}
                                                className="flex min-w-0 flex-col items-center text-center"
                                            >

                                                {/* Node */}
                                                <div
                                                    className={`relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-white text-sm font-bold shadow-sm ${skill.unlocked
                                                            ? "bg-solo-orange text-white ring-1 ring-solo-orange/20"
                                                            : isNext
                                                                ? "bg-white text-solo-orange ring-2 ring-solo-orange/20"
                                                                : "bg-neutral-50 text-neutral-400 ring-1 ring-neutral-200"
                                                        }`}
                                                >

                                                    {skill.unlocked ? (
                                                        <Check className="h-5 w-5" strokeWidth={2.5} />
                                                    ) : isNext ? (
                                                        <span>{index + 1}</span>
                                                    ) : (
                                                        <LockKeyhole className="h-4 w-4" />
                                                    )}

                                                </div>


                                                {/* Label */}
                                                <p
                                                    className={`mt-4 max-w-[120px] text-xs font-semibold leading-5 ${skill.unlocked
                                                            ? "text-solo-text"
                                                            : isNext
                                                                ? "text-solo-orange"
                                                                : "text-neutral-400"
                                                        }`}
                                                >
                                                    {skill.name}
                                                </p>


                                                {/* Status */}
                                                <span
                                                    className={`mt-1 text-[10px] ${skill.unlocked
                                                            ? "font-medium text-solo-orange"
                                                            : isNext
                                                                ? "font-semibold text-solo-orange"
                                                                : "text-neutral-400"
                                                        }`}
                                                >
                                                    {skill.unlocked
                                                        ? "Unlocked"
                                                        : isNext
                                                            ? "Next skill"
                                                            : "Locked"}
                                                </span>

                                            </motion.div>

                                        );
                                    })}

                                </div>

                            </div>

                        </div>


                        {/* Mobile pathway */}
                        <div className="sm:hidden">

                            <div className="relative space-y-3">

                                <div className="absolute bottom-5 left-5 top-5 w-px bg-neutral-200" />

                                {active.skills.map((skill, index) => {

                                    const isNext =
                                        index === nextSkillIndex;

                                    return (

                                        <motion.div
                                            key={skill.name}
                                            initial={{
                                                opacity: 0,
                                                x: -8,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                            transition={{
                                                delay: index * 0.06,
                                            }}
                                            className="relative flex items-center gap-4"
                                        >

                                            <div
                                                className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white text-xs font-bold shadow-sm ${skill.unlocked
                                                        ? "bg-solo-orange text-white"
                                                        : isNext
                                                            ? "bg-white text-solo-orange ring-2 ring-solo-orange/20"
                                                            : "bg-neutral-50 text-neutral-400 ring-1 ring-neutral-200"
                                                    }`}
                                            >
                                                {skill.unlocked ? (
                                                    <Check className="h-3.5 w-3.5" />
                                                ) : isNext ? (
                                                    index + 1
                                                ) : (
                                                    <LockKeyhole className="h-3 w-3" />
                                                )}
                                            </div>


                                            <div className="min-w-0 flex-1 rounded-xl border border-neutral-100 bg-solo-bg px-4 py-3">

                                                <p
                                                    className={`text-xs font-bold ${skill.unlocked
                                                            ? "text-solo-text"
                                                            : isNext
                                                                ? "text-solo-orange"
                                                                : "text-neutral-400"
                                                        }`}
                                                >
                                                    {skill.name}
                                                </p>

                                                <p className="mt-0.5 text-[10px] text-neutral-400">
                                                    {skill.unlocked
                                                        ? "Unlocked"
                                                        : isNext
                                                            ? "Next skill"
                                                            : "Locked"}
                                                </p>

                                            </div>

                                        </motion.div>

                                    );
                                })}

                            </div>

                        </div>

                    </div>



                    {/* -------------------------------------------------
                        Next step footer
                    -------------------------------------------------- */}

                    <div className="border-t border-neutral-100 bg-solo-bg/70 px-5 py-5 sm:px-7 md:px-8">

                        {nextSkill ? (

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                                <div className="flex items-start gap-3">

                                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-solo-orange/10 text-solo-orange">
                                        <ArrowRight className="h-4 w-4" />
                                    </div>

                                    <div>

                                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-solo-orange">
                                            Your next step
                                        </p>

                                        <p className="mt-1 text-sm font-semibold text-solo-text">
                                            Build your {nextSkill.name} skills.
                                        </p>

                                        <p className="mt-0.5 text-xs text-solo-muted">
                                            Keep progressing to unlock the next stage of your career path.
                                        </p>

                                    </div>

                                </div>


                                <button
                                    type="button"
                                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-solo-orange/20 bg-white px-4 py-2.5 text-xs font-bold text-solo-orange transition-all duration-300 hover:-translate-y-0.5 hover:bg-solo-orange hover:text-white hover:shadow-md hover:shadow-solo-orange/15"
                                >
                                    Explore skill
                                    <ArrowRight className="h-3.5 w-3.5" />
                                </button>

                            </div>

                        ) : (

                            <div className="flex items-center gap-3">

                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-solo-orange text-white">
                                    <Check className="h-4 w-4" />
                                </div>

                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-solo-orange">
                                        Career path complete
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-solo-text">
                                        You've unlocked every skill for this path.
                                    </p>
                                </div>

                            </div>

                        )}

                    </div>

                </motion.div>

            </AnimatePresence>

        </div>
    );
}