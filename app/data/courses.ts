export type Course = {
    id: string;
    title: string;
    description: string;
    category:
    | "Design"
    | "Development"
    | "Data Science"
    | "Business"
    | "AI/ML";
    level: "Beginner" | "Intermediate" | "Advanced";
    type: "Course" | "Internship" | "Live Project" | "Hackathon";

    skills: string[];
    provider?: string;
    logo?: string;
    price?: string;
    posted?: string;
    mode?: "Onsite" | "Virtual";
    duration?: string;
};

export const COURSES: Course[] = [
    {
        id: "react-fundamentals",
        title: "React Fundamentals",
        description:
            "Build modern UI components with JSX, state, props, and hooks from first principles.",
        category: "Development",
        level: "Beginner",
        type: "Course",

        skills: ["React", "JavaScript", "Frontend Development"],

        provider: "SOLO",
        price: "Free",
        posted: "Posted 6 Months Ago",
        mode: "Virtual",
        duration: "15 Hours",
    },

    {
        id: "react-redux",
        title: "React Redux",
        description:
            "Learn to manage application state with Redux and integrate it with React applications.",
        category: "Development",
        level: "Intermediate",
        type: "Course",
        skills: [
            "React",
            "JavaScript",
            "Frontend Development",
            "Web Development",
        ],

        provider: "SOLO",
        price: "Free",
        posted: "Posted 6 Months Ago",
        mode: "Virtual",
        duration: "10 Hours",
    },

    {
        id: "sql-live-project",
        title: "Real-World SQL Analysis",
        description:
            "Analyze a live dataset for a partner startup and present insights that inform their roadmap.",
        category: "Data Science",
        level: "Advanced",
        type: "Live Project",
        skills: [
            "SQL",
            "Data Analysis",
            "Data Science",
            "Analytics",
        ],
    },

    {
        id: "product-strategy-internship",
        title: "Product Strategy Internship",
        description:
            "Work alongside a product team for 6 weeks, prioritizing features and shaping outcomes.",
        category: "Business",
        level: "Intermediate",
        type: "Internship",
        skills: [
            "Product Strategy",
            "Product Management",
            "Business",
            "Market Research",
        ],
    },

    {
        id: "prompt-engineering",
        title: "Prompt Engineering Basics",
        description:
            "Write clear, structured prompts to get reliable results from AI tools and models.",
        category: "AI/ML",
        level: "Beginner",
        type: "Course",
        skills: [
            "Prompt Engineering",
            "Artificial Intelligence",
            "Generative AI",
            "AI/ML",
        ],
    },

    {
        id: "Google AI Tools Workshop (Hands-On)",
        title: "Google AI Tools Workshop (Hands-On)",
        description: "Get hands-on experience with Google's AI tools and learn how to apply them in real-world scenarios.",
        category: "AI/ML",
        level: "Intermediate",
        type: "Course",
        skills: [
            "AI/ML",
            "Google AI",
            "Machine Learning",
        ],
    }
];

export const CATEGORIES = ["All", "Design", "Development", "Data Science", "Business", "AI/ML"] as const;

export const IN_DEMAND_SKILLS = [
    "React", "SQL", "Figma", "Python", "Product Strategy", "UX Research", "Prompt Engineering",
];