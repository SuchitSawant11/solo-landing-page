"use client";

import { useMemo, useState } from "react";
import {
    ArrowRight,
    CheckCircle2,
    Compass,
    RotateCcw,
    Route,
    Sparkles,
    Target,
} from "lucide-react";

type SkillRequirement = {
    name: string;
    required: number;
    recommendation: string;
};

type CareerProfile = {
    id: string;
    title: string;
    description: string;
    skills: SkillRequirement[];
};

const CAREERS: CareerProfile[] = [
    {
        id: "frontend",
        title: "Frontend Developer",
        description:
            "Build accessible, responsive interfaces and interactive web experiences.",
        skills: [
            { name: "HTML & CSS", required: 3, recommendation: "Build a responsive multi-section landing page." },
            { name: "JavaScript", required: 4, recommendation: "Practise DOM, arrays, async code, and small coding challenges." },
            { name: "React", required: 4, recommendation: "Build a component-based app with reusable stateful components." },
            { name: "Git & GitHub", required: 3, recommendation: "Use branches, meaningful commits, and a clear project README." },
            { name: "Responsive Design", required: 3, recommendation: "Test a project across mobile, tablet, and desktop widths." },
        ],
    },
    {
        id: "data-analyst",
        title: "Data Analyst",
        description:
            "Turn raw data into useful insights through analysis and visualisation.",
        skills: [
            { name: "SQL", required: 4, recommendation: "Answer business questions using joins, grouping, and subqueries." },
            { name: "Python", required: 3, recommendation: "Analyse a dataset with Python and pandas." },
            { name: "Statistics", required: 3, recommendation: "Practise descriptive statistics and interpreting distributions." },
            { name: "Data Visualization", required: 4, recommendation: "Create a dashboard that communicates three useful findings." },
            { name: "Spreadsheets", required: 3, recommendation: "Use formulas, filters, pivot tables, and charts on a dataset." },
        ],
    },
    {
        id: "ui-ux",
        title: "UI/UX Designer",
        description:
            "Design intuitive digital experiences grounded in user needs.",
        skills: [
            { name: "UI Design", required: 4, recommendation: "Design a consistent screen set using spacing and typography rules." },
            { name: "UX Research", required: 3, recommendation: "Interview a few users and summarise their main pain points." },
            { name: "Wireframing", required: 4, recommendation: "Map a user flow and create low-fidelity wireframes." },
            { name: "Prototyping", required: 4, recommendation: "Create a clickable prototype and test it with a user." },
            { name: "Visual Design", required: 3, recommendation: "Build a small design system with colour, type, and component styles." },
        ],
    },
];

const LEVELS = ["New to it", "Beginner", "Developing", "Confident", "Strong"];

const INITIAL_RATINGS: Record<string, number> = {
    "HTML & CSS": 2,
    JavaScript: 1,
    React: 1,
    "Git & GitHub": 2,
    "Responsive Design": 2,
};

export default function CareerCompass() {
    const [careerId, setCareerId] = useState("frontend");

    // Keep each career's ratings separate, so switching careers doesn't erase progress.
    const [ratingsByCareer, setRatingsByCareer] = useState<
        Record<string, Record<string, number>>
    >({ frontend: INITIAL_RATINGS });

    const career = CAREERS.find((item) => item.id === careerId) ?? CAREERS[0];
    const ratings = ratingsByCareer[careerId] ?? {};

    const result = useMemo(() => {
        const totalTarget = career.skills.reduce(
            (sum, skill) => sum + skill.required,
            0,
        );

        const covered = career.skills.reduce(
            (sum, skill) =>
                sum + Math.min(ratings[skill.name] ?? 0, skill.required),
            0,
        );

        const gaps = career.skills
            .map((skill) => {
                const current = ratings[skill.name] ?? 0;
                return {
                    ...skill,
                    current,
                    gap: Math.max(0, skill.required - current),
                };
            })
            .filter((skill) => skill.gap > 0)
            .sort((a, b) => b.gap - a.gap || a.name.localeCompare(b.name));

        const metCount = career.skills.filter(
            (skill) => (ratings[skill.name] ?? 0) >= skill.required,
        ).length;

        return {
            score: totalTarget ? Math.round((covered / totalTarget) * 100) : 0,
            gaps,
            metCount,
            totalTarget,
        };
    }, [career, ratings]);

    const updateRating = (skillName: string, value: number) => {
        setRatingsByCareer((current) => ({
            ...current,
            [careerId]: {
                ...(current[careerId] ?? {}),
                [skillName]: value,
            },
        }));
    };

    const resetAssessment = () => {
        setRatingsByCareer((current) => ({
            ...current,
            [careerId]: {},
        }));
    };

    return (
        <section
            id="career-compass"
            aria-labelledby="career-compass-title"
            className="relative mt-16 overflow-hidden rounded-[2rem] border border-solo-orange/20 bg-white shadow-[0_20px_60px_rgba(23,20,18,0.06)] md:mt-20"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-solo-orange/10 blur-3xl"
            />

            <div className="relative grid gap-8 p-5 sm:p-7 md:p-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
                <div className="min-w-0">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-solo-orange/20 bg-solo-orange/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-solo-orange">
                        <Compass aria-hidden="true" className="h-3.5 w-3.5" />
                        Career Compass
                    </div>

                    <h3
                        id="career-compass-title"
                        className="max-w-lg font-heading text-2xl font-extrabold leading-tight tracking-tight text-solo-text sm:text-3xl md:text-4xl"
                    >
                        Turn your career goal into your next move.
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-6 text-solo-muted md:text-base md:leading-7">
                        Choose a career, rate your current skills, and explore a sample
                        roadmap of what you could strengthen next.
                    </p>

                    <div className="mt-7">
                        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-500">
                            01 / Choose a direction
                        </p>

                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                            {CAREERS.map((item) => {
                                const active = item.id === careerId;

                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => setCareerId(item.id)}
                                        aria-pressed={active}
                                        className={`rounded-xl border p-3 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-solo-orange focus-visible:ring-offset-2 ${active
                                            ? "border-solo-orange bg-solo-orange text-white shadow-md shadow-solo-orange/15"
                                            : "border-neutral-200 bg-white text-solo-text hover:border-solo-orange/40 hover:bg-[#FFF8F5]"
                                            }`}
                                    >
                                        <span className="block text-xs font-bold sm:text-sm">
                                            {item.title}
                                        </span>
                                        {active && (
                                            <span className="mt-1 block text-[10px] font-medium text-white/80">
                                                Selected career
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        <p className="mt-3 text-xs leading-5 text-solo-muted">
                            {career.description}
                        </p>
                    </div>

                    <div className="mt-6 rounded-2xl border border-neutral-200 bg-solo-bg/70 p-4">
                        <div className="flex items-start gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-solo-orange/10 text-solo-orange">
                                <Target aria-hidden="true" className="h-4 w-4" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-solo-text">
                                    A guide, not a verdict
                                </p>
                                <p className="mt-1 text-xs leading-5 text-solo-muted">
                                    This demo uses sample skill targets and your self-ratings.
                                    It is not an official SOLO assessment or a prediction of
                                    employability.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 rounded-2xl border border-solo-orange/15 bg-white p-4 sm:p-5">
                        <div className="flex items-start gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-solo-orange/10 text-solo-orange">
                                <Route aria-hidden="true" className="h-4 w-4" />
                            </div>
                            <div className="min-w-0">
                                <h4 className="text-sm font-bold text-solo-text">
                                    Your Career Roadmap
                                </h4>
                                <p className="mt-1 text-xs leading-5 text-solo-muted">
                                    A practical path from learning to evidence.
                                </p>
                            </div>
                        </div>

                        <ol className="mt-5 space-y-4">
                            {[
                                {
                                    title: "Strengthen your skills",
                                    description: "Focus on the skill gaps highlighted in your assessment.",
                                },
                                {
                                    title: "Practise what you learn",
                                    description: "Work through exercises and relevant learning material.",
                                },
                                {
                                    title: "Build a practical project",
                                    description: "Apply your skills to a project you can demonstrate.",
                                },
                                {
                                    title: "Showcase your progress",
                                    description: "Present your work and achievements on your SOLO profile.",
                                },
                            ].map((step, index) => (
                                <li key={step.title} className="flex items-start gap-3">
                                    <div className="flex flex-col items-center">
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-solo-orange/20 bg-solo-orange/5 text-[10px] font-bold text-solo-orange">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        {index < 3 && (
                                            <span
                                                aria-hidden="true"
                                                className="mt-1 h-4 w-px bg-solo-orange/20"
                                            />
                                        )}
                                    </div>
                                    <div className="min-w-0 pb-1">
                                        <p className="text-xs font-bold text-solo-text">
                                            {step.title}
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-solo-muted">
                                            {step.description}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>

                <div className="min-w-0">
                    <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-solo-orange">
                                02 / Your skill snapshot
                            </p>
                            <h4 className="mt-1 font-heading text-lg font-extrabold text-solo-text">
                                How confident are you?
                            </h4>
                        </div>

                        <button
                            type="button"
                            onClick={resetAssessment}
                            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-solo-muted transition hover:bg-solo-orange/5 hover:text-solo-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-solo-orange focus-visible:ring-offset-2"
                        >
                            <RotateCcw aria-hidden="true" className="h-3.5 w-3.5" />
                            Reset this career
                        </button>
                    </div>

                    <div className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-4 sm:p-5">
                        {career.skills.map((skill) => {
                            const level = ratings[skill.name] ?? 0;

                            return (
                                <div key={`${career.id}-${skill.name}`}>
                                    <div className="mb-2 flex items-center justify-between gap-3">
                                        <label
                                            htmlFor={`compass-${career.id}-${skill.name}`}
                                            className="text-xs font-semibold text-solo-text sm:text-sm"
                                        >
                                            {skill.name}
                                        </label>
                                        <span className="shrink-0 text-[10px] font-semibold text-solo-muted sm:text-xs">
                                            {LEVELS[level]}
                                        </span>
                                    </div>

                                    <input
                                        id={`compass-${career.id}-${skill.name}`}
                                        type="range"
                                        min={0}
                                        max={4}
                                        step={1}
                                        value={level}
                                        onChange={(event) =>
                                            updateRating(
                                                skill.name,
                                                Number(event.target.value),
                                            )
                                        }
                                        aria-label={`${skill.name} self-rating`}
                                        aria-valuetext={LEVELS[level]}
                                        className="h-2 w-full cursor-pointer accent-solo-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-solo-orange focus-visible:ring-offset-4"
                                    />

                                    <div
                                        aria-hidden="true"
                                        className="mt-1 flex justify-between text-[10px] text-neutral-400"
                                    >
                                        <span>New to it</span>
                                        <span>Strong</span>
                                    </div>

                                    <p className="mt-1 text-[10px] leading-4 text-neutral-400">
                                        Sample target: {LEVELS[skill.required]}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-[0.8fr_1.2fr]">
                        <div className="rounded-2xl bg-[#FFF3ED] p-4 sm:p-5">
                            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-solo-muted">
                                Skill coverage
                            </p>

                            <div className="mt-2 flex items-baseline gap-1">
                                <span className="font-heading text-4xl font-extrabold tracking-tight text-solo-orange">
                                    {result.score}%
                                </span>
                            </div>

                            <div
                                className="mt-3 h-2 overflow-hidden rounded-full bg-white"
                                role="progressbar"
                                aria-label="Sample skill coverage"
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-valuenow={result.score}
                            >
                                <div
                                    className="h-full rounded-full bg-solo-orange transition-all duration-300"
                                    style={{ width: `${result.score}%` }}
                                />
                            </div>

                            <p className="mt-3 text-[11px] leading-5 text-solo-muted">
                                {result.metCount} of {career.skills.length} sample targets met
                            </p>
                            <p className="mt-1 text-[10px] leading-4 text-solo-muted">
                                Weighted by the sample target level for each skill.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-neutral-200 p-4 sm:p-5">
                            <div className="flex items-center gap-2">
                                <Sparkles
                                    aria-hidden="true"
                                    className="h-4 w-4 text-solo-orange"
                                />
                                <p className="text-sm font-bold text-solo-text">
                                    Your next steps
                                </p>
                            </div>

                            {result.gaps.length === 0 ? (
                                <div className="mt-3">
                                    <p className="flex items-center gap-2 text-xs font-semibold text-solo-text">
                                        <CheckCircle2
                                            aria-hidden="true"
                                            className="h-4 w-4 shrink-0 text-solo-orange"
                                        />
                                        All sample targets met!
                                    </p>
                                    <p className="mt-2 text-xs leading-5 text-solo-muted">
                                        Consider building a portfolio project that demonstrates
                                        these skills. Real role requirements can vary.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <p className="mt-2 text-xs leading-5 text-solo-muted">
                                        Start with these {Math.min(3, result.gaps.length)} skill
                                        {result.gaps.length === 1 ? "" : " gaps"} with the
                                        largest difference from the sample target.
                                    </p>
                                    <ul className="mt-3 space-y-3">
                                        {result.gaps.slice(0, 3).map((skill) => (
                                            <li
                                                key={skill.name}
                                                className="flex items-start gap-2.5"
                                            >
                                                <CheckCircle2
                                                    aria-hidden="true"
                                                    className="mt-0.5 h-4 w-4 shrink-0 text-solo-orange"
                                                />
                                                <div>
                                                    <p className="text-xs font-bold text-solo-text">
                                                        {skill.name}
                                                        <span className="ml-1 font-medium text-solo-muted">
                                                            ({skill.gap} level
                                                            {skill.gap === 1 ? "" : "s"} to target)
                                                        </span>
                                                    </p>
                                                    <p className="mt-1 text-xs leading-5 text-solo-muted">
                                                        {skill.recommendation}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            <a
                                href="#learning-opportunities"
                                className="mt-4 inline-flex items-center gap-1.5 rounded-sm text-xs font-bold text-solo-orange transition hover:gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-solo-orange focus-visible:ring-offset-4"
                            >
                                Explore learning opportunities
                                <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                            </a>
                        </div>
                    </div>

                    <p className="mt-3 text-[10px] leading-4 text-neutral-400">
                        Illustrative result based on self-reported ratings and sample role
                        requirements. Actual career requirements vary by role and employer.
                    </p>
                </div>
            </div>
        </section>
    );
}
