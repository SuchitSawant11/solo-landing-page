"use client";

import { useMemo, useState } from "react";
import {
    motion,
    AnimatePresence,
    LayoutGroup,
} from "framer-motion";
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
    X,
} from "lucide-react";

import {
    COURSES,
    CATEGORIES,
    IN_DEMAND_SKILLS,
    type Course,
} from "../data/courses";

import PathwayTree from "./PathwayTree";


/* =========================================================
   CATEGORY ACCENTS
========================================================= */

const CATEGORY_ACCENT: Record<Course["category"], string> = {
    Design: "border-solo-coral/40",
    Development: "border-solo-blue/40",
    "Data Science": "border-solo-gold/50",
    Business: "border-solo-orange/40",
    "AI/ML": "border-solo-blue/40",
};


/* =========================================================
   CATEGORY BACKGROUNDS
========================================================= */

const CATEGORY_TINT: Record<Course["category"], string> = {
    Design: "bg-solo-coral/5",
    Development: "bg-solo-blue/5",
    "Data Science": "bg-solo-gold/7",
    Business: "bg-solo-orange/5",
    "AI/ML": "bg-solo-blue/5",
};


/* =========================================================
   TYPE ICONS
========================================================= */

const TYPE_ICON = {
    Course: BookOpen,
    Internship: Briefcase,
    "Live Project": Rocket,
    Hackathon: Trophy,
};


/* =========================================================
   INTERESTS
   These are mapped to actual searchable terms so they
   perform a real action instead of being decorative.
========================================================= */

const INTERESTS = [
    {
        name: "Web Development",
        search: "React",
        accent: "text-solo-blue",
        bg: "bg-solo-blue/5",
        border: "border-solo-blue/20",
    },
    {
        name: "Data & AI",
        search: "Python",
        accent: "text-solo-gold",
        bg: "bg-solo-gold/5",
        border: "border-solo-gold/25",
    },
    {
        name: "UI/UX Design",
        search: "Design",
        accent: "text-solo-coral",
        bg: "bg-solo-coral/5",
        border: "border-solo-coral/20",
    },
    {
        name: "Product Management",
        search: "Product",
        accent: "text-solo-orange",
        bg: "bg-solo-orange/5",
        border: "border-solo-orange/20",
    },
    {
        name: "Marketing",
        search: "Business",
        accent: "text-solo-orange",
        bg: "bg-solo-orange/5",
        border: "border-solo-orange/20",
    },
    {
        name: "Cybersecurity",
        search: "Security",
        accent: "text-solo-blue",
        bg: "bg-solo-blue/5",
        border: "border-solo-blue/20",
    },
];


export default function Discover() {

    const [query, setQuery] = useState("");

    const [category, setCategory] =
        useState<(typeof CATEGORIES)[number]>("All");


    /* =====================================================
       FILTER COURSES
    ===================================================== */

    const filtered = useMemo(() => {

        const normalizedQuery = query.trim().toLowerCase();

        return COURSES.filter((course) => {

            const matchesCategory =
                category === "All" ||
                course.category === category;

            const matchesQuery =
                normalizedQuery === "" ||
                course.title
                    .toLowerCase()
                    .includes(normalizedQuery) ||
                course.description
                    .toLowerCase()
                    .includes(normalizedQuery) ||
                course.category
                    .toLowerCase()
                    .includes(normalizedQuery) ||
                course.type
                    .toLowerCase()
                    .includes(normalizedQuery);

            return matchesCategory && matchesQuery;
        });

    }, [query, category]);


    /* =====================================================
       CLEAR SEARCH
    ===================================================== */

    const clearSearch = () => {
        setQuery("");
    };


    return (

        <section
            id="discover"
            className="relative isolate overflow-hidden bg-solo-bg"
        >

            {/* =================================================
                BACKGROUND ATMOSPHERE
            ================================================= */}

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-solo-orange/10 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 top-[35%] h-[420px] w-[420px] rounded-full bg-solo-blue/8 blur-3xl"
            />

            {/* Subtle grid — same language as Hero */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #171412 1px, transparent 1px), linear-gradient(to bottom, #171412 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                }}
            />


            {/* =================================================
                MAIN CONTENT
            ================================================= */}

            <div className="relative z-10 mx-auto max-w-[1240px] px-5 py-20 md:px-6 md:py-24">


                {/* =================================================
                    HERO / INTRO
                ================================================= */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55 }}
                    className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]"
                >

                    {/* Left */}
                    <div>

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-9 bg-solo-orange" />

                            <span className="font-body text-xs font-bold uppercase tracking-[0.18em] text-solo-orange">
                                Discover
                            </span>

                        </div>


                        <h2 className="max-w-4xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-solo-text sm:text-5xl md:text-6xl">

                            Find what to learn.

                            <br />

                            <span className="relative inline-block text-solo-orange">

                                Discover where it can take you.

                                <span
                                    aria-hidden="true"
                                    className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-solo-gold/60"
                                />

                            </span>

                        </h2>


                        <p className="mt-7 max-w-2xl text-base leading-7 text-solo-muted md:text-lg">
                            Explore courses, practical opportunities, in-demand
                            skills, and career paths that help you move from
                            curiosity to capability.
                        </p>

                    </div>


                    {/* Right — small discovery statement */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="hidden justify-end lg:flex"
                    >

                        <div className="max-w-xs rounded-2xl border border-solo-orange/20 bg-white/75 p-5 shadow-[0_12px_40px_rgba(23,20,18,0.05)] backdrop-blur-sm">

                            <div className="flex items-start gap-3">

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-solo-orange/10 text-solo-orange">
                                    <Compass className="h-5 w-5" />
                                </div>

                                <div>
                                    <p className="font-heading text-sm font-bold text-solo-text">
                                        Start anywhere.
                                    </p>

                                    <p className="mt-1 text-xs leading-5 text-solo-muted">
                                        Search for a skill, explore an interest,
                                        or choose a career direction.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </motion.div>

                </motion.div>



                {/* =================================================
                    IN-DEMAND SKILLS
                ================================================= */}

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mt-14"
                >

                    <div className="mb-4 flex items-center gap-2">

                        <Sparkles className="h-4 w-4 text-solo-gold" />

                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-solo-muted">
                            In-demand skills right now
                        </p>

                    </div>


                    <div className="flex flex-wrap gap-2.5">

                        {IN_DEMAND_SKILLS.map((skill) => (

                            <button
                                key={skill}
                                type="button"
                                onClick={() => setQuery(skill)}
                                className={`group inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold text-solo-text shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-solo-orange/30 hover:bg-solo-orange/5 hover:text-solo-orange hover:shadow-md`}
                            >

                                <span className="h-1.5 w-1.5 rounded-full bg-solo-orange transition-transform duration-300 group-hover:scale-125" />

                                {skill}

                            </button>

                        ))}

                    </div>

                </motion.div>



                {/* =================================================
                    DISCOVERY CONTROLS
                ================================================= */}

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="mt-12 overflow-hidden rounded-[2rem] border border-neutral-200 bg-white/80 shadow-[0_20px_60px_rgba(23,20,18,0.05)] backdrop-blur-sm"
                >

                    <div className="p-5 sm:p-6 md:p-7">

                        {/* Search */}
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                            <div className="relative w-full lg:max-w-2xl">

                                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />

                                <input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search by course, skill, topic, or opportunity..."
                                    aria-label="Search courses, skills, topics, or opportunities"
                                    className="h-12 w-full rounded-xl border border-neutral-200 bg-solo-bg pl-12 pr-11 text-sm text-solo-text outline-none transition-all placeholder:text-neutral-400 focus:border-solo-orange/40 focus:bg-white focus:ring-4 focus:ring-solo-orange/10"
                                />

                                {query && (
                                    <button
                                        type="button"
                                        onClick={clearSearch}
                                        aria-label="Clear search"
                                        className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-solo-orange/10 hover:text-solo-orange"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                )}

                            </div>


                            <div className="flex items-center gap-2 text-xs text-solo-muted">

                                <TrendingUp className="h-4 w-4 text-solo-orange" />

                                <span>
                                    Explore at your own pace
                                </span>

                            </div>

                        </div>


                        {/* Divider */}
                        <div className="my-6 h-px bg-neutral-100" />


                        {/* Categories */}
                        <div>

                            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-400">
                                Browse by category
                            </p>


                            <LayoutGroup id="discover-categories">

                                <div className="flex flex-wrap gap-2">

                                    {CATEGORIES.map((cat) => (

                                        <button
                                            key={cat}
                                            type="button"
                                            onClick={() => setCategory(cat)}
                                            className={`relative rounded-full px-4 py-2 text-xs font-semibold transition-colors ${category === cat
                                                    ? "text-white"
                                                    : "text-neutral-600 hover:text-solo-orange"
                                                }`}
                                        >

                                            {category === cat && (

                                                <motion.span
                                                    layoutId="discover-active-category"
                                                    className="absolute inset-0 rounded-full bg-solo-orange shadow-sm shadow-solo-orange/20"
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 400,
                                                        damping: 30,
                                                    }}
                                                />

                                            )}

                                            {category !== cat && (
                                                <span className="absolute inset-0 rounded-full border border-neutral-200 bg-white" />
                                            )}

                                            <span className="relative z-10">
                                                {cat}
                                            </span>

                                        </button>

                                    ))}

                                </div>

                            </LayoutGroup>

                        </div>

                    </div>

                </motion.div>



                {/* =================================================
                    RESULTS HEADER
                ================================================= */}

                <div className="mt-10 flex items-end justify-between gap-4">

                    <div>

                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-solo-orange">
                            Learning opportunities
                        </p>

                        <h3 className="mt-1 font-heading text-xl font-bold text-solo-text md:text-2xl">
                            Explore what's available
                        </h3>

                    </div>


                    <p className="shrink-0 text-xs text-solo-muted">
                        Showing{" "}
                        <span className="font-bold text-solo-text">
                            {filtered.length}
                        </span>{" "}
                        of {COURSES.length}
                    </p>

                </div>



                {/* =================================================
                    COURSE / OPPORTUNITY GRID
                ================================================= */}

                <div className="mt-5">

                    {filtered.length > 0 ? (

                        <motion.div
                            layout
                            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
                        >

                            <AnimatePresence mode="popLayout">

                                {filtered.map((course, index) => {

                                    const Icon = TYPE_ICON[course.type];

                                    const isFeatured = index === 0;


                                    return (

                                        <motion.article
                                            key={course.id}
                                            layout
                                            initial={{
                                                opacity: 0,
                                                y: 18,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: -10,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                delay: index * 0.04,
                                            }}
                                            className={`group relative overflow-hidden rounded-2xl border border-neutral-200 border-t-4 bg-white p-5 shadow-[0_8px_30px_rgba(23,20,18,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_18px_45px_rgba(23,20,18,0.09)] ${CATEGORY_ACCENT[course.category]
                                                } ${isFeatured
                                                    ? "lg:col-span-2"
                                                    : ""
                                                }`}
                                        >

                                            {/* Soft category tint */}
                                            <div
                                                aria-hidden="true"
                                                className={`pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${CATEGORY_TINT[course.category]
                                                    }`}
                                            />


                                            <div className="relative z-10">

                                                {/* Top row */}
                                                <div className="flex items-start justify-between gap-3">

                                                    <div className="flex items-center gap-2">

                                                        <span
                                                            className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${CATEGORY_TINT[course.category]} text-solo-muted`}
                                                        >
                                                            {course.category}
                                                        </span>


                                                        {course.type !== "Course" && (

                                                            <span className="inline-flex items-center gap-1 rounded-full bg-solo-orange/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-solo-orange">

                                                                <Icon className="h-3 w-3" />

                                                                {course.type}

                                                            </span>

                                                        )}

                                                    </div>


                                                    <span className="rounded-full border border-neutral-200 px-2.5 py-1 text-[10px] font-semibold text-neutral-500">
                                                        {course.level}
                                                    </span>

                                                </div>


                                                {/* Title */}
                                                <div className="mt-7 flex items-start justify-between gap-4">

                                                    <h4
                                                        className={`font-heading font-bold leading-snug text-solo-text ${isFeatured
                                                                ? "text-xl md:text-2xl"
                                                                : "text-base"
                                                            }`}
                                                    >
                                                        {course.title}
                                                    </h4>


                                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-400 transition-all duration-300 group-hover:border-solo-orange/30 group-hover:bg-solo-orange group-hover:text-white">
                                                        <ArrowUpRight className="h-4 w-4" />
                                                    </span>

                                                </div>


                                                {/* Description */}
                                                <p
                                                    className={`mt-3 max-w-2xl leading-6 text-solo-muted ${isFeatured
                                                            ? "text-sm"
                                                            : "text-xs"
                                                        }`}
                                                >
                                                    {course.description}
                                                </p>


                                                {/* Bottom */}
                                                <div className="mt-7 flex items-center justify-between border-t border-neutral-100 pt-4">

                                                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wide text-neutral-400">

                                                        <Icon className="h-3.5 w-3.5" />

                                                        {course.type}

                                                    </div>


                                                    <span className="text-[10px] font-semibold text-solo-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                        Explore opportunity
                                                    </span>

                                                </div>

                                            </div>

                                        </motion.article>

                                    );

                                })}

                            </AnimatePresence>

                        </motion.div>

                    ) : (

                        /* =================================================
                           EMPTY STATE
                        ================================================= */

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="rounded-2xl border border-dashed border-neutral-300 bg-white/70 px-6 py-16 text-center"
                        >

                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-solo-orange/10 text-solo-orange">
                                <Search className="h-5 w-5" />
                            </div>

                            <h4 className="mt-4 font-heading text-base font-bold text-solo-text">
                                Nothing matched your search
                            </h4>

                            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-solo-muted">
                                Try a different keyword, clear the search,
                                or browse all categories to discover more opportunities.
                            </p>

                            <button
                                type="button"
                                onClick={() => {
                                    setQuery("");
                                    setCategory("All");
                                }}
                                className="mt-5 rounded-xl bg-solo-orange px-5 py-2.5 text-xs font-bold text-white shadow-sm shadow-solo-orange/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                            >
                                Reset discovery
                            </button>

                        </motion.div>

                    )}

                </div>



                {/* =================================================
                    EXPLORE BY INTEREST
                ================================================= */}

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="mt-20"
                >

                    <div className="mb-6 max-w-2xl">

                        <div className="flex items-center gap-3">

                            <span className="h-px w-8 bg-solo-orange" />

                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-solo-orange">
                                Explore by interest
                            </p>

                        </div>


                        <h3 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-solo-text md:text-3xl">
                            Not sure where to start?
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-solo-muted">
                            Start with something you're curious about and
                            discover the opportunities connected to it.
                        </p>

                    </div>


                    {/* Bento interests */}
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">

                        {INTERESTS.map((interest, index) => (

                            <button
                                key={interest.name}
                                type="button"
                                onClick={() => setQuery(interest.search)}
                                className={`group relative min-h-28 overflow-hidden rounded-2xl border ${interest.border} ${interest.bg} p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_35px_rgba(23,20,18,0.07)]`}
                            >

                                <span className="font-heading text-[10px] font-extrabold uppercase tracking-wider text-neutral-400">
                                    {String(index + 1).padStart(2, "0")}
                                </span>


                                <span className={`mt-7 block text-xs font-bold ${interest.accent}`}>
                                    {interest.name}
                                </span>


                                <ArrowUpRight
                                    className={`absolute bottom-4 right-4 h-4 w-4 ${interest.accent} opacity-40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100`}
                                />

                            </button>

                        ))}

                    </div>

                </motion.div>



                {/* =================================================
                    CAREER PATH
                    Existing interactive PathwayTree is retained.
                ================================================= */}

                <div className="mt-24">

                    <PathwayTree />

                </div>


            </div>

        </section>
    );
}