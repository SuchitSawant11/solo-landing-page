"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Check,
    Lock,
    ArrowRight,
    Sparkles,
    Target,
} from "lucide-react";

import { CAREER_PATHS } from "../data/careerPaths";

export default function PathwayTree() {
    const [activeId, setActiveId] = useState(CAREER_PATHS[0].id);

    const active = CAREER_PATHS.find(
        (career) => career.id === activeId
    )!;

    const unlockedCount = active.skills.filter(
        (skill) => skill.unlocked
    ).length;

    const progress =
        (unlockedCount / active.skills.length) * 100;

    return (
        <div className="relative mt-28 border-t border-neutral-200 pt-20">

            {/* =====================================================
                HEADER
            ====================================================== */}
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

                <div>
                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-8 bg-solo-orange" />

                        <span className="text-sm font-semibold uppercase tracking-[0.16em] text-solo-orange">
                            Explore a career path
                        </span>
                    </div>

                    <h3 className="font-heading text-3xl font-bold tracking-tight text-neutral-950 md:text-4xl">
                        See what it takes to become a...
                    </h3>

                    <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600">
                        Pick a career to see which skills you already have,
                        and which ones you can build next.
                    </p>
                </div>

                {/* Progress summary */}
                <motion.div
                    key={active.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-sm"
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-solo-orange/10 text-solo-orange">
                        <Target className="h-5 w-5" />
                    </div>

                    <div>
                        <p className="text-xs font-medium text-neutral-500">
                            Skills unlocked
                        </p>

                        <p className="font-heading text-lg font-bold text-neutral-950">
                            {unlockedCount}
                            <span className="font-normal text-neutral-400">
                                {" "}
                                / {active.skills.length}
                            </span>
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* =====================================================
                CAREER SELECTOR
            ====================================================== */}
            <div className="mt-10">
                <div className="flex flex-wrap gap-2.5">
                    {CAREER_PATHS.map((career) => {
                        const selected = activeId === career.id;

                        return (
                            <button
                                key={career.id}
                                onClick={() =>
                                    setActiveId(career.id)
                                }
                                className={`relative overflow-hidden rounded-xl border px-5 py-3 text-sm font-semibold transition-all duration-200 ${selected
                                        ? "border-solo-orange text-white shadow-sm"
                                        : "border-neutral-200 bg-white text-neutral-600 hover:-translate-y-0.5 hover:border-solo-orange/40 hover:text-solo-orange"
                                    }`}
                            >
                                {selected && (
                                    <motion.span
                                        layoutId="careerSelector"
                                        className="absolute inset-0 bg-solo-orange"
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 30,
                                        }}
                                    />
                                )}

                                <span className="relative z-10">
                                    {career.title}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* =====================================================
                PATHWAY CARD
            ====================================================== */}
            <div className="mt-8 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.05)]">

                {/* Card header */}
                <div className="border-b border-neutral-100 bg-neutral-50/70 px-6 py-5 md:px-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                        <div>
                            <p className="text-sm font-semibold text-neutral-900">
                                Your path to becoming a{" "}
                                <span className="text-solo-orange">
                                    {active.title}
                                </span>
                            </p>

                            <p className="mt-1 text-xs text-neutral-500">
                                {unlockedCount} of {active.skills.length} skills
                                unlocked
                            </p>
                        </div>

                        <div className="w-full sm:w-48">
                            <div className="mb-2 flex justify-between text-[11px] font-medium text-neutral-500">
                                <span>Progress</span>
                                <span>{Math.round(progress)}%</span>
                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-neutral-200">
                                <motion.div
                                    key={active.id}
                                    initial={{ width: 0 }}
                                    animate={{
                                        width: `${progress}%`,
                                    }}
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

                {/* Path */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active.id}
                        initial={{
                            opacity: 0,
                            y: 12,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: -8,
                        }}
                        transition={{ duration: 0.3 }}
                        className="p-6 md:p-10"
                    >
                        {/* Desktop */}
                        <div className="hidden md:block">
                            <div className="relative">

                                {/* Base connecting line */}
                                <div className="absolute left-[10%] right-[10%] top-7 h-0.5 bg-neutral-200" />

                                {/* Progress connecting line */}
                                <motion.div
                                    key={active.id}
                                    initial={{ width: 0 }}
                                    animate={{
                                        width:
                                            unlockedCount > 0
                                                ? `${(Math.max(
                                                    unlockedCount - 0.5,
                                                    0
                                                ) /
                                                    active.skills
                                                        .length) *
                                                80
                                                }%`
                                                : "0%",
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeOut",
                                    }}
                                    className="absolute left-[10%] top-7 h-0.5 bg-solo-orange"
                                />

                                <div className="relative grid grid-cols-5 gap-4">
                                    {active.skills.map(
                                        (skill, index) => (
                                            <motion.div
                                                key={skill.name}
                                                initial={{
                                                    opacity: 0,
                                                    y: 10,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                transition={{
                                                    delay:
                                                        index *
                                                        0.08,
                                                }}
                                                className="flex flex-col items-center text-center"
                                            >
                                                {/* Node */}
                                                <div
                                                    className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white text-sm font-bold shadow-sm transition-transform duration-200 hover:scale-105 ${skill.unlocked
                                                            ? "bg-solo-orange text-white"
                                                            : "bg-white text-neutral-400 ring-1 ring-neutral-200"
                                                        }`}
                                                >
                                                    {skill.unlocked ? (
                                                        <Check className="h-5 w-5" />
                                                    ) : (
                                                        index + 1
                                                    )}
                                                </div>

                                                {/* Skill */}
                                                <div className="mt-5">
                                                    <p
                                                        className={`text-sm font-semibold ${skill.unlocked
                                                                ? "text-neutral-950"
                                                                : "text-neutral-500"
                                                            }`}
                                                    >
                                                        {skill.name}
                                                    </p>

                                                    <div className="mt-2 flex items-center justify-center gap-1.5">
                                                        {skill.unlocked ? (
                                                            <>
                                                                <Check className="h-3 w-3 text-solo-orange" />

                                                                <span className="text-[11px] font-medium text-solo-orange">
                                                                    Unlocked
                                                                </span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Lock className="h-3 w-3 text-neutral-400" />

                                                                <span className="text-[11px] text-neutral-400">
                                                                    Next skill
                                                                </span>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Mobile */}
                        <div className="md:hidden">
                            <div className="relative ml-2">

                                {/* Vertical line */}
                                <div className="absolute bottom-6 left-5 top-6 w-0.5 bg-neutral-200" />

                                <div className="space-y-7">
                                    {active.skills.map(
                                        (skill, index) => (
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
                                                    delay:
                                                        index *
                                                        0.08,
                                                }}
                                                className="relative flex items-center gap-5"
                                            >
                                                <div
                                                    className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white text-xs font-bold shadow-sm ${skill.unlocked
                                                            ? "bg-solo-orange text-white"
                                                            : "bg-white text-neutral-400 ring-1 ring-neutral-200"
                                                        }`}
                                                >
                                                    {skill.unlocked ? (
                                                        <Check className="h-4 w-4" />
                                                    ) : (
                                                        index + 1
                                                    )}
                                                </div>

                                                <div>
                                                    <p
                                                        className={`text-sm font-semibold ${skill.unlocked
                                                                ? "text-neutral-950"
                                                                : "text-neutral-500"
                                                            }`}
                                                    >
                                                        {skill.name}
                                                    </p>

                                                    <p className="mt-1 text-xs text-neutral-400">
                                                        {skill.unlocked
                                                            ? "Skill unlocked"
                                                            : "Skill to develop next"}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Bottom insight */}
                <div className="flex items-center gap-3 border-t border-neutral-100 bg-solo-orange/[0.035] px-6 py-4 md:px-8">
                    <Sparkles className="h-4 w-4 shrink-0 text-solo-gold" />

                    <p className="text-xs leading-5 text-neutral-600">
                        {unlockedCount === active.skills.length
                            ? "You've unlocked every skill in this career path."
                            : `You have ${active.skills.length - unlockedCount} skill${active.skills.length -
                                unlockedCount ===
                                1
                                ? ""
                                : "s"
                            } left to build on this path.`}
                    </p>

                    <ArrowRight className="ml-auto hidden h-4 w-4 text-neutral-400 sm:block" />
                </div>
            </div>
        </div>
    );
}