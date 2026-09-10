"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
    Search,
    BookOpen,
    Rocket,
    Briefcase,
    Trophy,
    TrendingUp,
    Compass,
    ArrowUpRight,
    Sparkles,
    SlidersHorizontal,
    X,
} from "lucide-react";

import {
    COURSES,
    CATEGORIES,
    IN_DEMAND_SKILLS,
    type Course,
} from "../data/courses";

import PathwayTree from "./PathwayTree";

const CATEGORY_ACCENT: Record<Course["category"], string> = {
    Design: "border-solo-coral",
    Development: "border-solo-blue",
    "Data Science": "border-solo-gold",
    Business: "border-solo-orange",
    "AI/ML": "border-solo-blue",
};

const CATEGORY_DOT: Record<Course["category"], string> = {
    Design: "bg-solo-coral",
    Development: "bg-solo-blue",
    "Data Science": "bg-solo-gold",
    Business: "bg-solo-orange",
    "AI/ML": "bg-solo-blue",
};

const TYPE_ICON = {
    Course: BookOpen,
    Internship: Briefcase,
    "Live Project": Rocket,
    Hackathon: Trophy,
};

const TYPE_LABEL: Record<Course["type"], string> = {
    Course: "Course",
    Internship: "Internship",
    "Live Project": "Live Project",
    Hackathon: "Hackathon",
};

export default function Discover() {
    const [query, setQuery] = useState("");
    const [category, setCategory] =
        useState<(typeof CATEGORIES)[number]>("All");

    const filtered = useMemo(() => {
        return COURSES.filter((course) => {
            const matchesCategory =
                category === "All" || course.category === category;

            const searchTerm = query.trim().toLowerCase();

            const matchesQuery =
                searchTerm === "" ||
                course.title.toLowerCase().includes(searchTerm) ||
                course.description.toLowerCase().includes(searchTerm) ||
                course.category.toLowerCase().includes(searchTerm) ||
                course.type.toLowerCase().includes(searchTerm);

            return matchesCategory && matchesQuery;
        });
    }, [query, category]);

    return (
        <section
            id="discover"
            className="relative overflow-hidden bg-solo-bg"
        >
            {/* Decorative background shapes */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-solo-orange/5 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-[520px] -left-48 h-96 w-96 rounded-full bg-solo-blue/5 blur-3xl"
            />

            <div className="relative mx-auto max-w-[1240px] px-6 py-24 md:py-28">

                {/* =====================================================
                    HEADER
                ====================================================== */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl"
                >
                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-8 bg-solo-orange" />

                        <span className="text-sm font-semibold uppercase tracking-[0.16em] text-solo-orange">
                            Discover
                        </span>
                    </div>

                    <h2 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-neutral-950 md:text-6xl">
                        Find what to learn.
                        <br />
                        <span className="text-solo-orange">
                            Discover where it can take you.
                        </span>
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
                        Explore courses, practical opportunities, in-demand
                        skills, and career paths that help you move from
                        curiosity to capability.
                    </p>
                </motion.div>

                {/* =====================================================
                    TRENDING SKILLS
                ====================================================== */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mt-12"
                >
                    <div className="mb-4 flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-solo-gold" />

                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">
                            In-demand skills right now
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                        {IN_DEMAND_SKILLS.map((skill, index) => (
                            <motion.button
                                key={skill}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.25,
                                    delay: index * 0.04,
                                }}
                                onClick={() => setQuery(skill)}
                                className={`group flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${query.toLowerCase() ===
                                        skill.toLowerCase()
                                        ? "border-solo-orange bg-solo-orange text-white shadow-sm"
                                        : "border-neutral-200 bg-white text-neutral-700 hover:-translate-y-0.5 hover:border-solo-orange/40 hover:bg-solo-orange/5 hover:text-solo-orange"
                                    }`}
                            >
                                <span
                                    className={`h-1.5 w-1.5 rounded-full transition-colors ${query.toLowerCase() ===
                                            skill.toLowerCase()
                                            ? "bg-white"
                                            : "bg-solo-gold group-hover:bg-solo-orange"
                                        }`}
                                />

                                {skill}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* =====================================================
                    DISCOVERY CONTROLS
                ====================================================== */}
                <div className="mt-12 rounded-2xl border border-neutral-200 bg-white p-4 shadow-[0_8px_40px_rgba(0,0,0,0.04)] md:p-5">

                    {/* Search */}
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                        <div className="relative w-full lg:max-w-xl">
                            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />

                            <input
                                type="text"
                                value={query}
                                onChange={(e) =>
                                    setQuery(e.target.value)
                                }
                                placeholder="Search by course, skill, topic, or opportunity..."
                                className="h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50 pl-12 pr-11 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-solo-orange/50 focus:bg-white focus:ring-4 focus:ring-solo-orange/10"
                            />

                            {query && (
                                <button
                                    onClick={() => setQuery("")}
                                    aria-label="Clear search"
                                    className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-200 hover:text-neutral-700"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            )}
                        </div>

                        <div className="hidden items-center gap-2 text-xs text-neutral-500 lg:flex">
                            <SlidersHorizontal className="h-4 w-4" />
                            Filter your learning journey
                        </div>
                    </div>

                    {/* Category filters */}
                    <div className="mt-5 border-t border-neutral-100 pt-4">
                        <div className="flex flex-wrap gap-2">
                            <LayoutGroup>
                                {CATEGORIES.map((cat) => {
                                    const active = category === cat;

                                    return (
                                        <button
                                            key={cat}
                                            onClick={() =>
                                                setCategory(cat)
                                            }
                                            className={`relative overflow-hidden rounded-lg px-4 py-2 text-sm font-medium transition-colors ${active
                                                    ? "text-white"
                                                    : "text-neutral-600 hover:text-neutral-950"
                                                }`}
                                        >
                                            {active && (
                                                <motion.span
                                                    layoutId="discoverActiveCategory"
                                                    className="absolute inset-0 rounded-lg bg-solo-orange"
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 400,
                                                        damping: 30,
                                                    }}
                                                />
                                            )}

                                            {!active && (
                                                <span className="absolute inset-0 rounded-lg border border-neutral-200 bg-white" />
                                            )}

                                            <span className="relative z-10">
                                                {cat}
                                            </span>
                                        </button>
                                    );
                                })}
                            </LayoutGroup>
                        </div>
                    </div>
                </div>

                {/* =====================================================
                    RESULTS HEADER
                ====================================================== */}
                <div className="mt-8 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-neutral-500">
                            {filtered.length === 0
                                ? "No results"
                                : `Showing ${filtered.length} ${filtered.length === 1
                                    ? "opportunity"
                                    : "opportunities"
                                }`}
                        </p>
                    </div>

                    {category !== "All" && (
                        <button
                            onClick={() => setCategory("All")}
                            className="text-sm font-medium text-solo-orange hover:underline"
                        >
                            Clear filter
                        </button>
                    )}
                </div>

                {/* =====================================================
                    COURSE GRID
                ====================================================== */}
                <div className="mt-4">
                    {filtered.length > 0 ? (
                        <motion.div
                            layout
                            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
                        >
                            <AnimatePresence mode="popLayout">
                                {filtered.map((course, i) => {
                                    const Icon = TYPE_ICON[course.type];

                                    return (
                                        <motion.article
                                            key={course.id}
                                            layout
                                            initial={{
                                                opacity: 0,
                                                y: 16,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                scale: 0.97,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                delay: i * 0.045,
                                            }}
                                            className={`group relative overflow-hidden rounded-2xl border border-neutral-200 border-l-[3px] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)] ${CATEGORY_ACCENT[course.category]}`}
                                        >
                                            {/* Top row */}
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex items-center gap-2">
                                                    <span
                                                        className={`h-2 w-2 rounded-full ${CATEGORY_DOT[course.category]}`}
                                                    />

                                                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                                                        {course.category}
                                                    </span>
                                                </div>

                                                <span className="rounded-full bg-neutral-50 px-2.5 py-1 text-[11px] font-medium text-neutral-500">
                                                    {course.level}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="mt-6 font-heading text-xl font-bold leading-tight text-neutral-950 transition-colors group-hover:text-solo-orange">
                                                {course.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="mt-3 line-clamp-3 text-sm leading-6 text-neutral-600">
                                                {course.description}
                                            </p>

                                            {/* Bottom */}
                                            <div className="mt-7 flex items-center justify-between border-t border-neutral-100 pt-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-50 text-neutral-500 transition-colors group-hover:bg-solo-orange/10 group-hover:text-solo-orange">
                                                        <Icon className="h-4 w-4" />
                                                    </div>

                                                    <span className="text-xs font-semibold text-neutral-600">
                                                        {TYPE_LABEL[course.type]}
                                                    </span>
                                                </div>

                                                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 text-neutral-400 transition-all group-hover:border-solo-orange group-hover:bg-solo-orange group-hover:text-white">
                                                    <ArrowUpRight className="h-4 w-4" />
                                                </div>
                                            </div>

                                            {/* Hover accent */}
                                            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-solo-orange transition-all duration-300 group-hover:w-full" />
                                        </motion.article>
                                    );
                                })}
                            </AnimatePresence>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="rounded-2xl border border-dashed border-neutral-300 bg-white px-6 py-16 text-center"
                        >
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-solo-orange/10 text-solo-orange">
                                <Search className="h-5 w-5" />
                            </div>

                            <h3 className="mt-4 font-heading text-lg font-bold text-neutral-900">
                                Nothing found
                            </h3>

                            <p className="mx-auto mt-2 max-w-md text-sm text-neutral-500">
                                Try another keyword or explore a different
                                category to find your next opportunity.
                            </p>

                            <button
                                onClick={() => {
                                    setQuery("");
                                    setCategory("All");
                                }}
                                className="mt-5 rounded-lg bg-solo-orange px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-solo-orange/90"
                            >
                                Reset discovery
                            </button>
                        </motion.div>
                    )}
                </div>

                {/* =====================================================
                    CAREER PATH EXPLORER
                ====================================================== */}
                <PathwayTree />
            </div>
        </section>
    );
}