export type CareerPath = {
    id: string;
    title: string;
    skills: { name: string; unlocked: boolean }[];
};

// "unlocked" = the demo learner profile (Alex Mercer) already has this skill
export const CAREER_PATHS: CareerPath[] = [
    {
        id: "frontend-dev",
        title: "Frontend Developer",
        skills: [
            { name: "HTML & CSS", unlocked: true },
            { name: "JavaScript", unlocked: true },
            { name: "React", unlocked: true },
            { name: "TypeScript", unlocked: false },
            { name: "Testing", unlocked: false },
        ],
    },
    {
        id: "product-designer",
        title: "Product Designer",
        skills: [
            { name: "Design Fundamentals", unlocked: false },
            { name: "Figma", unlocked: true },
            { name: "Prototyping", unlocked: false },
            { name: "User Research", unlocked: false },
            { name: "Design Systems", unlocked: false },
        ],
    },
    {
        id: "data-analyst",
        title: "Data Analyst",
        skills: [
            { name: "Excel", unlocked: false },
            { name: "SQL", unlocked: false },
            { name: "Python", unlocked: false },
            { name: "Statistics", unlocked: false },
            { name: "Data Visualization", unlocked: false },
        ],
    },
];