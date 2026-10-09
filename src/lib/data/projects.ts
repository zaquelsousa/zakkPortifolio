interface Project {
    slug: string;
    name: string;
    description: string;
    technologies: string;
    githubLink?: string;
    image?: string;
    longDescription?: string;
    demoLink?: string;
}

export const projects: Project[] = [
    {
        slug: "habitctl",
        name: "HabitCTL",
        description: "A command-line tool for tracking habits and monitoring progress.",
        technologies: "C, SQLite",
        githubLink: "https://github.com/your-username/habitctl",
        image: "/images/habitctl.png",
        longDescription:
            "HabitCTL is a CLI application built in C that allows users to track habits, record sessions, and query their daily and weekly progress using SQLite."
    },
    {
        slug: "flashcard-api",
        name: "Flashcard API",
        description: "A REST API for managing flashcards and supporting active recall.",
        technologies: "Go, SQLite, REST",
        githubLink: "https://github.com/your-username/flashcard-api",
        image: "/images/flashcard-api.png",
        longDescription:
            "A backend service built with Go that exposes HTTP endpoints for creating and retrieving flashcards. The project explores REST API design, data persistence, and HTTP handlers."
    },
    {
        slug: "portfolio",
        name: "Developer Portfolio",
        description: "A personal website showcasing projects, technical articles, and learning progress.",
        technologies: "Svelte, TypeScript, CSS",
        githubLink: "https://github.com/your-username/portfolio",
        image: "/images/portfolio.png",
        longDescription:
            "A personal portfolio designed to document my software development journey, present selected projects, and publish articles about programming and computer science.",
        demoLink: "https://your-username.github.io/portfolio"
    }
];
