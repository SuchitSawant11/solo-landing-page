
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
    X,
    MapPin,
    CalendarDays,
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
========================================================= */

const INTERESTS = [
    {
        name: "Web Development",
        skills: [
            "React",
            "JavaScript",
            "Frontend Development",
            "Web Development",
        ],
        accent: "text-solo-blue",
        bg: "bg-solo-blue/5",
        border: "border-solo-blue/20",
    },
    {
        name: "Data & AI",
        skills: [
            "Python",
            "Data Science",
            "Artificial Intelligence",
            "AI/ML",
        ],
        accent: "text-solo-gold",
        bg: "bg-solo-gold/5",
        border: "border-solo-gold/25",
    },
    {
        name: "UI/UX Design",
        skills: [
            "Figma",
            "UI/UX Design",
            "Design Systems",
            "UX Research",
        ],
        accent: "text-solo-coral",
        bg: "bg-solo-coral/5",
        border: "border-solo-coral/20",
    },
    {
        name: "Product Management",
        skills: [
            "Product Management",
            "Product Strategy",
            "Market Research",
        ],
        accent: "text-solo-orange",
        bg: "bg-solo-orange/5",
        border: "border-solo-orange/20",
    },
    {
        name: "Marketing",
        skills: ["Marketing", "Business", "Market Research"],
        accent: "text-solo-orange",
        bg: "bg-solo-orange/5",
        border: "border-solo-orange/20",
    },
    {
        name: "Cybersecurity",
        skills: ["Cybersecurity", "Security", "Network Security"],
        accent: "text-solo-blue",
        bg: "bg-solo-blue/5",
        border: "border-solo-blue/20",
    },
];

/* =========================================================
   OPPORTUNITY FILTERS
========================================================= */

const OPPORTUNITY_FILTERS = [
    { label: "All", value: "All" },
    { label: "Courses", value: "Course" },
    { label: "Projects", value: "Live Project" },
    { label: "Internships", value: "Internship" },
] as const;

export default function Discover() {
    const [query, setQuery] = useState("");

    const [category, setCategory] =
        useState<(typeof CATEGORIES)[number]>("All");

    const [opportunityType, setOpportunityType] =
        useState<(typeof OPPORTUNITY_FILTERS)[number]["value"]>("All");

    const [resultsHighlighted, setResultsHighlighted] = useState(false);

    const [selectedInterest, setSelectedInterest] =
        useState<(typeof INTERESTS)[number] | null>(null);

    /* =====================================================
       FILTER OPPORTUNITIES
    ===================================================== */

    const filtered = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        return COURSES.filter((course) => {
            const matchesCategory =
                category === "All" || course.category === category;

            const matchesQuery =
                normalizedQuery === "" ||
                course.title.toLowerCase().includes(normalizedQuery) ||
                course.description.toLowerCase().includes(normalizedQuery) ||
                course.category.toLowerCase().includes(normalizedQuery) ||
                course.type.toLowerCase().includes(normalizedQuery) ||
                course.skills.some((skill) =>
                    skill.toLowerCase().includes(normalizedQuery)
                );

            const matchesInterest =
                selectedInterest === null ||
                selectedInterest.skills.some((interestSkill) =>
                    course.skills.some(
                        (courseSkill) =>
                            courseSkill.toLowerCase() ===
                            interestSkill.toLowerCase()
                    )
                );

            const matchesType =
                opportunityType === "All" ||
                course.type === opportunityType;

            return (
                matchesCategory &&
                matchesQuery &&
                matchesInterest &&
                matchesType
            );
        });
    }, [query, category, selectedInterest, opportunityType]);

    /* =====================================================
       CLEAR SEARCH
    ===================================================== */

    const clearSearch = () => {
        setQuery("");
    };

    /* =====================================================
       CLEAR INTEREST
    ===================================================== */

    const clearInterest = () => {
        setSelectedInterest(null);
    };

    /* =====================================================
       INTEREST SELECTION
    ===================================================== */

    const handleInterestClick = (
        interest: (typeof INTERESTS)[number]
    ) => {
        setSelectedInterest(interest);
        setResultsHighlighted(true);

        window.setTimeout(() => {
            setResultsHighlighted(false);
        }, 1200);

        window.setTimeout(() => {
            const resultsSection = document.getElementById(
                "learning-opportunities"
            );

            if (resultsSection) {
                const navbarOffset = 110;

                const targetPosition =
                    resultsSection.getBoundingClientRect().top +
                    window.scrollY -
                    navbarOffset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth",
                });
            }
        }, 150);
    };

    return (
        <section
            id="discover"
            className="relative isolate overflow-hidden bg-solo-bg scroll-mt-28"
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

            <div className="relative z-10 mx-auto max-w-[1240px] px-5 py-16 md:px-6 md:py-20">

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
                    className="mt-10 md:mt-12"
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
                                className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold text-solo-text shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-solo-orange/30 hover:bg-solo-orange/5 hover:text-solo-orange hover:shadow-md"
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
                    className="mt-10 overflow-hidden rounded-[2rem] border border-neutral-200 bg-white/80 shadow-[0_20px_60px_rgba(23,20,18,0.05)] backdrop-blur-sm"
                >
                    <div className="p-5 sm:p-6 md:p-7">
                        <div className="mb-4 flex items-center justify-between gap-4">
                            <div>
                                <p className="font-heading text-sm font-bold text-solo-text">
                                    What do you want to learn?
                                </p>

                                <p className="mt-1 text-xs text-solo-muted">
                                    Search courses, skills, topics, or opportunities.
                                </p>
                            </div>

                            {query && (
                                <span className="hidden rounded-full bg-solo-orange/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-solo-orange sm:inline-flex">
                                    Searching: {query}
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                            <div className="relative w-full lg:max-w-2xl">
                                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />

                                <input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Try “React”, “Python”, “Internship”..."
                                    aria-label="Search courses, skills, topics, or opportunities"
                                    className="h-13 w-full rounded-xl border border-neutral-200 bg-solo-bg pl-12 pr-11 text-sm text-solo-text outline-none transition-all placeholder:text-neutral-400 focus:border-solo-orange/40 focus:bg-white focus:ring-4 focus:ring-solo-orange/10"
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
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-solo-gold/10">
                                    <TrendingUp className="h-3.5 w-3.5 text-solo-gold" />
                                </span>

                                <span>Explore at your own pace</span>
                            </div>
                        </div>

                        <div className="my-6 h-px bg-neutral-100" />

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

                <div
                    id="learning-opportunities"
                    className={`mt-8 scroll-mt-[130px] rounded-2xl transition-all duration-500 md:mt-10 ${resultsHighlighted
                        ? "bg-solo-orange/5 p-4 ring-2 ring-solo-orange/20"
                        : ""
                        }`}
                >
                    <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-solo-orange" />

                                <p className="text-xs font-bold uppercase tracking-[0.14em] text-solo-orange">
                                    Learning opportunities
                                </p>
                            </div>

                            <h3 className="mt-2 font-heading text-2xl font-bold text-solo-text md:text-3xl">
                                Explore your next step
                            </h3>

                            {/* Opportunity Type Filters */}

                            <div className="mt-6 flex flex-wrap gap-2">
                                {OPPORTUNITY_FILTERS.map((filter) => {
                                    const isActive = opportunityType === filter.value;

                                    // Select icon based on filter label
                                    const Icon =
                                        filter.label === "Courses"
                                            ? BookOpen
                                            : filter.label === "Projects"
                                                ? Rocket
                                                : filter.label === "Internships"
                                                    ? Briefcase
                                                    : null;

                                    return (
                                        <button
                                            key={filter.value}
                                            type="button"
                                            onClick={() => setOpportunityType(filter.value)}
                                            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 ${isActive
                                                ? "border-solo-orange bg-solo-orange text-white shadow-sm"
                                                : "border-neutral-200 bg-white text-neutral-600 hover:border-solo-orange/40 hover:text-solo-orange"
                                                }`}
                                        >
                                            {/* Display icon only when available */}
                                            {Icon && <Icon className="h-4 w-4 text-solo-orange" strokeWidth={2} />}

                                            {filter.label}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Selected Interest */}

                            {selectedInterest && (
                                <div className="mt-4">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="text-xs font-medium text-solo-muted">
                                            Exploring
                                        </span>

                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-solo-orange/20 bg-solo-orange/5 px-3 py-1.5 text-xs font-bold text-solo-orange">
                                            {selectedInterest.name}

                                            <button
                                                type="button"
                                                onClick={clearInterest}
                                                aria-label={`Clear ${selectedInterest.name} filter`}
                                                className="flex h-4 w-4 items-center justify-center rounded-full transition-colors hover:bg-solo-orange/10"
                                            >
                                                <X className="h-3 w-3" />
                                            </button>
                                        </span>
                                    </div>

                                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                                        <span className="mr-1 text-[10px] font-semibold uppercase tracking-wide text-neutral-400">
                                            Related skills
                                        </span>

                                        {selectedInterest.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[10px] font-medium text-neutral-600"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="shrink-0">
                            <p className="text-xs text-solo-muted">
                                Showing{" "}
                                <span className="font-bold text-solo-text">
                                    {filtered.length}
                                </span>{" "}
                                of {COURSES.length}
                            </p>
                        </div>
                    </div>
                </div>

                {/* =================================================
                    COMPACT COURSE / OPPORTUNITY GRID
                ================================================= */}

                <div className="mt-6">
                    {filtered.length > 0 ? (
                        <motion.div
                            layout
                            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            <AnimatePresence mode="popLayout">
                                {filtered.map((course, index) => {
                                    const Icon = TYPE_ICON[course.type];

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
                                            className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_2px_8px_rgba(23,20,18,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_16px_rgba(23,20,18,0.10)]"                                        >
                                            {/* Card Content */}

                                            <div className="flex-1 px-6 pt-6 pb-5">
                                                {/* Logo and Title */}

                                                <div className="flex items-start gap-3">
                                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-white">
                                                        {course.logo ? (
                                                            <img
                                                                src={course.logo}
                                                                alt={`${course.provider ?? "SOLO"} logo`}
                                                                className="h-full w-full object-contain p-2"
                                                            />
                                                        ) : (
                                                            <Icon className="h-6 w-6 text-solo-orange" />
                                                        )}
                                                    </div>

                                                    <div className="min-w-0 flex-1">
                                                        <h4 className="line-clamp-2 font-heading text-sm font-bold leading-snug text-solo-text">
                                                            {course.title}
                                                        </h4>

                                                        <p className="mt-1 text-xs text-solo-muted">
                                                            {course.provider ?? "SOLO"}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Information Badges */}

                                                <div className="mt-5 flex flex-wrap items-center gap-1.5">
                                                    <span className="rounded-lg bg-solo-orange/10 px-2.5 py-1.5 text-[11px] font-semibold text-solo-orange">
                                                        {course.skills.length} Skills
                                                    </span>

                                                    <span className="rounded-lg border border-neutral-200 px-2.5 py-1.5 text-[11px] font-medium text-neutral-600">
                                                        {course.price ?? "Free"}
                                                    </span>

                                                    <span className="inline-flex items-center gap-1 rounded-lg border border-neutral-200 px-2.5 py-1.5 text-[11px] font-medium text-neutral-600">
                                                        <CalendarDays className="h-3 w-3 text-neutral-500" />

                                                        {course.posted ?? "Recently Posted"}
                                                    </span>
                                                </div>

                                                {/* Location and Duration */}

                                                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-solo-muted">
                                                    <span className="inline-flex items-center gap-1.5">
                                                        <MapPin className="h-4 w-4 text-neutral-500" />

                                                        {course.mode ?? "Virtual"}
                                                    </span>

                                                    <span className="inline-flex items-center gap-1.5">
                                                        <Briefcase className="h-4 w-4 text-neutral-500" />

                                                        {course.duration ?? "Self-paced"}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Bottom Action Area */}

                                            <div className="border-t border-neutral-100 bg-neutral-100 px-6 py-3">
                                                <button
                                                    type="button"
                                                    className="rounded-lg border border-solo-orange/25 bg-white px-5 py-2 text-xs font-semibold text-solo-orange transition-all duration-300 hover:bg-solo-orange hover:text-white"
                                                    onClick={() => {
                                                        prompt("View more about this opportunity", `Description: ${course.description}`);
                                                    }}
                                                >
                                                    View more
                                                </button>
                                            </div>
                                        </motion.article>
                                    );
                                })}
                            </AnimatePresence>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="rounded-2xl border border-dashed border-neutral-300 bg-white/70 px-6 py-14 text-center"
                        >
                            <Search className="mx-auto h-5 w-5 text-solo-orange" />

                            <h4 className="mt-4 font-heading text-base font-bold text-solo-text">
                                Nothing matched your search
                            </h4>

                            <p className="mt-2 text-sm text-solo-muted">
                                Try a different keyword or browse another category.
                            </p>

                            <button
                                type="button"
                                onClick={() => {
                                    setQuery("");
                                    setCategory("All");
                                    setSelectedInterest(null);
                                    setOpportunityType("All");
                                }}
                                className="mt-5 rounded-xl bg-solo-orange px-5 py-2.5 text-xs font-bold text-white"
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
                    className="mt-16 md:mt-20"
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

                    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
                        {INTERESTS.map((interest, index) => (
                            <button
                                key={interest.name}
                                type="button"
                                onClick={() => handleInterestClick(interest)}
                                className={`group relative min-h-32 overflow-hidden rounded-2xl border ${interest.border} ${interest.bg} p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_40px_rgba(23,20,18,0.08)]`}
                            >
                                <span className="font-heading text-[10px] font-extrabold uppercase tracking-wider text-neutral-400">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span
                                    className={`mt-7 block text-xs font-bold ${interest.accent}`}
                                >
                                    {interest.name}
                                </span>

                                <span
                                    className={`absolute bottom-4 right-4 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide ${interest.accent} opacity-60 transition-all duration-300 group-hover:opacity-100`}
                                >
                                    Explore

                                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </span>
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* =================================================
                    CAREER PATH
                ================================================= */}

                <div className="mt-16 md:mt-20">
                    <PathwayTree />
                </div>
            </div>
        </section>
    );
}