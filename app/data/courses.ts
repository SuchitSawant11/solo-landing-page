export type Course = {
    id: string;
    title: string;
    description: string;
    category: "Design" | "Development" | "Data Science" | "Business" | "AI/ML";
    level: "Beginner" | "Intermediate" | "Advanced";
    type: "Course" | "Internship" | "Live Project" | "Hackathon";
};

export const COURSES: Course[] = [
    {
        id: "design-systems",
        title: "Design Systems Foundations",
        description: "Learn how to build reusable components, tokens, and documentation that scale across teams.",
        category: "Design",
        level: "Intermediate",
        type: "Course",
    },
    {
        id: "react-fundamentals",
        title: "React Fundamentals",
        description: "Build modern UI components with JSX, state, props, and hooks from first principles.",
        category: "Development",
        level: "Beginner",
        type: "Course",
    },
    {
        id: "sql-live-project",
        title: "Real-World SQL Analysis",
        description: "Analyze a live dataset for a partner startup and present insights that inform their roadmap.",
        category: "Data Science",
        level: "Advanced",
        type: "Live Project",
    },
    {
        id: "product-strategy-internship",
        title: "Product Strategy Internship",
        description: "Work alongside a product team for 6 weeks, prioritizing features and shaping outcomes.",
        category: "Business",
        level: "Intermediate",
        type: "Internship",
    },
    {
        id: "prompt-engineering",
        title: "Prompt Engineering Basics",
        description: "Write clear, structured prompts to get reliable results from AI tools and models.",
        category: "AI/ML",
        level: "Beginner",
        type: "Course",
    },
];

export const CATEGORIES = ["All", "Design", "Development", "Data Science", "Business", "AI/ML"] as const;

export const IN_DEMAND_SKILLS = [
    "React", "SQL", "Figma", "Python", "Product Strategy", "UX Research", "Prompt Engineering",
];