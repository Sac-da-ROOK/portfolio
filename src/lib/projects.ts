import type { Metadata } from "next";

export type ProjectData = {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    details: string;
    status: string;
    tags: string[];
    href: string;
    repo: string;
    githubUrl: string;
    screenshot: string;
    gallery: string[];
    featured?: boolean;
    overview: string;
    problem: string;
    why: string;
    approach: string;
    result: string;
    techStack: string[];
    features: string[];
    challenges: string[];
    learnings: string[];
    nextSteps: string[];
    screenshots?: string[];
};

export const projects: ProjectData[] = [
    {
        slug: "ultimatetype",
        title: "UltimateType",
        subtitle: "A refined typing platform with analytics and performance-driven training.",
        description:
            "Built for speed and accuracy, UltimateType combines real-time metrics, progress tracking, and productive practice flows that help users improve faster.",
        details:
            "A polished typing experience that turns repetition into meaningful training by showing accuracy, cadence, and evolution across every session.",
        status: "Production",
        tags: ["React", "TypeScript", "Vercel"],
        href: "https://ultimate-type.vercel.app",
        repo: "https://github.com/Sac-da-ROOK",
        githubUrl: "https://github.com/Sac-da-ROOK",
        screenshot: "/images/featured/ultimate-type-1.svg",
        gallery: [
            "/images/featured/ultimate-type-1.svg",
            "/images/featured/ultimate-type-2.svg",
            "/images/featured/ultimate-type-3.svg"
        ],
        featured: true,
        overview:
            "UltimateType is a focused typing practice app designed to make improvement feel clear, measurable, and motivating. The project was built to help learners practice with intention rather than repetition alone.",
        problem:
            "Many typing tools focus on arbitrary exercises without clear feedback, making it hard to track progress or build muscle memory with purpose.",
        why:
            "UltimateType was created to give learners precise speed and accuracy feedback while keeping each practice session focused, engaging, and measurable.",
        approach:
            "I designed the app around a clean, distraction-free interface and a straightforward feedback loop: users type, review real-time metrics, and then build consistency over time through repeated practice.",
        result:
            "The project is a live typing-focused experience with a polished interface and a strong focus on practical improvement, making it useful as both a practice tool and a portfolio project.",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
        features: [
            "Live speed and accuracy metrics for every input session.",
            "Structured drills with adaptive difficulty and session summaries.",
            "Progress charts that reveal improvement over time.",
            "Clean UI optimized for focus and fast practice."
        ],
        challenges: [
            "Balancing instant performance feedback without distracting the learner.",
            "Creating a responsive input experience that feels smooth across devices.",
            "Designing analytics that are informative but not overwhelming."
        ],
        learnings: [
            "Effective practice tools need frictionless input and immediate clarity.",
            "Users trust progress when feedback is consistent and easy to interpret.",
            "Visual polish matters for sustained engagement in repeated training sessions."
        ],
        nextSteps: [
            "Add personalized daily training goals and streak tracking.",
            "Introduce custom typing themes and keyboard layouts.",
            "Expand analytics with heatmaps and challenge modes."
        ]
    },
    {
        slug: "omnimath",
        title: "OmniMath",
        subtitle: "Interactive math learning tools designed to make concepts feel more approachable.",
        description:
            "OmniMath combines guided practice with dynamic visual tools, helping students explore abstract ideas through concrete, playful interactions.",
        details:
            "A modern learning hub for building confidence with math through examples, guided explanations, and interactive exercises.",
        status: "Active",
        tags: ["Next.js", "React", "Education"],
        href: "https://omnimath-rho.vercel.app",
        repo: "https://github.com/Sac-da-ROOK",
        githubUrl: "https://github.com/Sac-da-ROOK",
        screenshot: "/images/featured/placeholder.svg",
        gallery: [
            "/images/featured/placeholder.svg",
            "/images/featured/placeholder.svg"
        ],
        featured: true,
        overview:
            "OmniMath is a math learning project created to make abstract ideas easier to understand through guided structure and interactive practice. The goal is to make problem-solving feel more approachable and less intimidating.",
        problem:
            "Students often struggle to connect math concepts when practice is abstract or presented without discovery-based interaction.",
        why:
            "OmniMath was built to make math feel less intimidating by layering explanation, practice, and interactive reinforcement in one experience.",
        approach:
            "I focused on a structured study flow with concept explanations, interactive practice, and a layout that reduces distraction so the learner can stay centered on the material.",
        result:
            "The project functions as an interactive education experience with a clear interface and a strong emphasis on making math learning more approachable.",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        features: [
            "Concept cards that break topics into approachable steps.",
            "Interactive practice modules with instant validation.",
            "Progress tracking for repeated review and improvement.",
            "Responsive layouts optimized for study sessions on any device."
        ],
        challenges: [
            "Keeping explanations concise without oversimplifying concepts.",
            "Designing a learning flow that feels natural and not overwhelming.",
            "Building interactive examples that remain fast on low-end devices."
        ],
        learnings: [
            "Clear structure is critical for math learning experiences.",
            "Interaction helps learners retain abstract concepts more effectively.",
            "A calm visual system improves focus and reduces cognitive load."
        ],
        nextSteps: [
            "Add topic-based learning paths and skill checkpoints.",
            "Introduce adaptive exercises based on performance.",
            "Build richer visualizations for algebra, geometry, and functions."
        ]
    },
    {
        slug: "mathsprint",
        title: "MathSprint Arena",
        subtitle: "A fast-paced math practice experience focused on speed, rhythm, and engagement.",
        description:
            "Designed to make math practice feel kinetic, this game blends responsive interaction with goal-driven progressions and crisp visual feedback.",
        details:
            "MathSprint turns skill-building into a pacing challenge, rewarding accuracy, speed, and smart play across every round.",
        status: "Live",
        tags: ["JavaScript", "Game", "Web"],
        href: "https://math-sprint-arena.vercel.app",
        repo: "https://github.com/Sac-da-ROOK",
        githubUrl: "https://github.com/Sac-da-ROOK",
        screenshot: "/images/featured/math-sprint-arena-1.svg",
        gallery: [
            "/images/featured/math-sprint-arena-1.svg",
            "/images/featured/math-sprint-arena-2.svg",
            "/images/featured/math-sprint-arena-3.svg"
        ],
        featured: true,
        overview:
            "MathSprint Arena is a fast-paced math practice project created to bring energy, rhythm, and immediate feedback to learning. The idea was to turn practice into a motivating challenge rather than a passive drill.",
        problem:
            "Standard drills can feel repetitive and fail to motivate learners who need energy and reward built into practice.",
        why:
            "MathSprint was created to bring momentum, clear feedback, and meaningful goals to everyday math work.",
        approach:
            "I focused on the feel of the experience: clear controls, fast feedback, and a pacing approach that keeps the exercise energetic but still readable and fair.",
        result:
            "The project works as an engaging web-based math challenge that emphasizes speed, clarity, and momentum while still being approachable for regular practice.",
        techStack: ["JavaScript", "HTML", "CSS", "Web Audio API"],
        features: [
            "Timed math rounds with score-based progression.",
            "Responsive controls and dynamic difficulty pacing.",
            "Visual feedback that reinforces accuracy and speed.",
            "A polished interface that keeps practice feeling playful."
        ],
        challenges: [
            "Balancing difficulty so practice stayed challenging without becoming frustrating.",
            "Maintaining performance in fast-paced animations and input handling.",
            "Designing reward feedback that felt motivating but not distracting."
        ],
        learnings: [
            "Playful practice increases confidence and retention.",
            "Fast feedback is essential for momentum-based learning tools.",
            "A strong visual rhythm helps users stay engaged session after session."
        ],
        nextSteps: [
            "Add power-ups and daily challenge modes.",
            "Build multiplayer or leaderboard support.",
            "Expand the range of math topics with new level packs."
        ]
    },
    {
        slug: "portfolio",
        title: "My Portfolio",
        subtitle: "A polished personal portfolio designed to showcase projects, skills, and ideas clearly.",
        description:
            "This portfolio brings together my work, interests, and technical story in a clean, readable experience that reflects my design and engineering approach.",
        details:
            "A portfolio experience built to present my work with clarity, personality, and a strong technical aesthetic.",
        status: "Portfolio",
        tags: ["Next.js", "TypeScript", "Design"],
        href: "https://aarushportfolio.vercel.app",
        repo: "https://github.com/Sac-da-ROOK",
        githubUrl: "https://github.com/Sac-da-ROOK",
        screenshot: "/images/featured/placeholder.svg",
        gallery: [
            "/images/featured/placeholder.svg",
            "/images/featured/placeholder.svg"
        ],
        overview:
            "My portfolio is the central representation of my work, ideas, and engineering direction. It synthesizes the projects, skills, and thinking behind my work into a cohesive digital identity.",
        problem:
            "I needed a way to present my work in a way that felt both professional and personal without becoming cluttered or generic.",
        why:
            "A strong portfolio helps communicate technical growth, creative thinking, and the story behind each project.",
        approach:
            "I designed the portfolio around clarity, consistency, and self-expression, combining narrative sections with project-driven content and a focused visual system.",
        result:
            "The site now works as a polished home for my projects, interests, and thinking, helping visitors understand both the work and the person behind it.",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        features: [
            "Clear project storytelling across multiple sections.",
            "Responsive design that works well across devices.",
            "A polished visual identity tied to the portfolio’s technical focus.",
            "Easy navigation between experience, projects, and contact details."
        ],
        challenges: [
            "Balancing creative expression with a strong technical brand.",
            "Presenting a body of work without overloading the visitor.",
            "Keeping the experience consistent while still feeling distinctive."
        ],
        learnings: [
            "A portfolio should communicate clarity before complexity.",
            "Storytelling matters as much as the work itself.",
            "Good design makes technical depth easier to appreciate."
        ],
        nextSteps: [
            "Add more project narratives and richer details.",
            "Continue refining the portfolio’s visual polish.",
            "Track improvements as the body of work grows over time."
        ]
    },
    {
        slug: "personal-browser",
        title: "Personal Browser",
        subtitle: "A personal browser concept focused on minimal clutter, speed, and a more intentional browsing flow.",
        description:
            "This browser-inspired project explores a cleaner way to surf the web by emphasizing focus, structure, and a calmer user experience.",
        details:
            "A browsing interface designed around focus, clarity, and less visual noise in everyday web use.",
        status: "Concept",
        tags: ["UI", "UX", "JavaScript"],
        href: "",
        repo: "https://github.com/Sac-da-ROOK",
        githubUrl: "https://github.com/Sac-da-ROOK",
        screenshot: "/images/featured/placeholder.svg",
        gallery: [
            "/images/featured/placeholder.svg",
            "/images/featured/placeholder.svg"
        ],
        overview:
            "Personal Browser is a concept project centered on building a more focused and intentional browsing experience. The goal is to reduce extraneous noise and keep the interface feeling calm and intentional.",
        problem:
            "Modern browsing experiences are often visually cluttered, distracting, and difficult to use with focus.",
        why:
            "I wanted to experiment with how interface design can make digital habits feel more deliberate and comfortable.",
        approach:
            "I focused on the interaction model, layout simplicity, and how the browser can present information in a way that feels calm and purposeful.",
        result:
            "The project explores a browser interface that is cleaner, more intentional, and better aligned with focused digital work.",
        techStack: ["JavaScript", "HTML", "CSS", "UX Design"],
        features: [
            "Minimal layout that reduces UI clutter.",
            "Focused navigation patterns for quicker browsing.",
            "A calmer aesthetic designed for sustained attention.",
            "Exploration of better browser UX principles."
        ],
        challenges: [
            "Balancing simplicity with practical browser functionality.",
            "Designing a visual system that feels calm without becoming bland.",
            "Thinking through how browsing behavior changes with reduced clutter."
        ],
        learnings: [
            "Distraction is often a product decision, not just a design detail.",
            "Minimal systems work best when they still feel intuitive.",
            "A user’s attention is deeply affected by interface rhythm."
        ],
        nextSteps: [
            "Turn the concept into a more complete prototype.",
            "Add custom tabs, workspaces, and personalized layouts.",
            "Refine interactions to make browsing feel more fluid."
        ]
    },
    {
        slug: "basic-arcade",
        title: "Basic Arcade",
        subtitle: "A playful arcade-style project focused on quick interactions and nostalgic game energy.",
        description:
            "Basic Arcade blends simple mechanics, bright visuals, and compact game loops into an approachable mini-game experience.",
        details:
            "A lightweight arcade collection built around simple interaction loops and accessible gameplay.",
        status: "Prototype",
        tags: ["Game", "JavaScript", "Canvas"],
        href: "",
        repo: "https://github.com/Sac-da-ROOK",
        githubUrl: "https://github.com/Sac-da-ROOK",
        screenshot: "/images/featured/placeholder.svg",
        gallery: [
            "/images/featured/placeholder.svg",
            "/images/featured/placeholder.svg"
        ],
        overview:
            "Basic Arcade is an experimental arcade project focused on creating fast, fun interactions with a friendly and readable interface. The aim is to make simple game mechanics feel polished and enjoyable.",
        problem:
            "Small game projects often feel unfinished because they skip polish, readability, and satisfying interaction loops.",
        why:
            "I wanted to build a playful game experience that emphasizes fun, quick feedback, and experimentation with game design ideas.",
        approach:
            "I leaned into compact gameplay loops, clear rules, and a visually approachable interface so the experience stays fun without needing a large feature set.",
        result:
            "The project works as a fun, low-complexity arcade concept that demonstrates playful design thinking and interaction experimentation.",
        techStack: ["JavaScript", "HTML", "CSS", "Game Design"],
        features: [
            "Fast arcade gameplay with simple mechanics.",
            "Readable UI and clear score feedback.",
            "Bright aesthetic with nostalgic energy.",
            "Compact interaction loops designed for quick play."
        ],
        challenges: [
            "Keeping the experience engaging without overbuilding it.",
            "Balancing simple controls with satisfying feedback.",
            "Maintaining readability while making the game feel lively.",
        ],
        learnings: [
            "Satisfying feedback matters more than complexity in small games.",
            "Arcade design lives or dies by clarity and pacing.",
            "Playful visuals help create instant accessibility."
        ],
        nextSteps: [
            "Expand it into a small game collection.",
            "Add more levels and audiovisual polish.",
            "Improve progression and challenge tuning."
        ]
    },
    {
        slug: "global-route-navigator",
        title: "Global Route Navigator",
        subtitle: "A route-planning concept focused on efficient navigation, structure, and clearer decision-making.",
        description:
            "Global Route Navigator explores how smart route planning can make travel, exploration, and decision-making feel more intuitive and streamlined.",
        details:
            "A navigation-focused project centered on route clarity, planning logic, and efficient user flow.",
        status: "Concept",
        tags: ["Maps", "UI", "Logic"],
        href: "",
        repo: "https://github.com/Sac-da-ROOK",
        githubUrl: "https://github.com/Sac-da-ROOK",
        screenshot: "/images/featured/placeholder.svg",
        gallery: [
            "/images/featured/placeholder.svg",
            "/images/featured/placeholder.svg"
        ],
        overview:
            "Global Route Navigator was built as an exploration in structured route planning. The idea was to make decision-making easier by bringing clarity, structure, and route visibility into one interface.",
        problem:
            "Navigation tools often prioritize raw data over usability, which can make planning feel slower and more complex than it needs to be.",
        why:
            "I wanted to think about how route planning interfaces could be more intuitive and decision-friendly.",
        approach:
            "I focused on route clarity, information hierarchy, and clean user interactions that help travelers reason about paths and options more naturally.",
        result:
            "The project acts as a concept for a smarter, cleaner route-planning experience built around clarity and utility.",
        techStack: ["JavaScript", "Maps", "UX Design", "Data Visualization"],
        features: [
            "Route planning with structured decision points.",
            "Clearer geographic and path visualization.",
            "Emphasis on information hierarchy and usability.",
            "An interface designed for calm, confident navigation."
        ],
        challenges: [
            "Making route logic understandable without visual overload.",
            "Finding the right balance between clarity and density.",
            "Designing decision flows that remain intuitive under pressure."
        ],
        learnings: [
            "Navigation is as much about confidence as it is about accuracy.",
            "The best route tools reduce cognitive friction.",
            "Structure and clarity improve how quickly users can trust the system."
        ],
        nextSteps: [
            "Turn it into a more complete route-planning prototype.",
            "Add path scoring and alternative routes.",
            "Explore how real geographic context could improve the interface."
        ]
    },
    {
        slug: "dynamic-diagram",
        title: "Dynamic Diagram",
        subtitle: "A visual system for exploring relationships, flows, and structure through interactive diagrams.",
        description:
            "Dynamic Diagram focuses on making complex systems easier to reason about by turning data and relationships into clear interactive visuals.",
        details:
            "An interactive visualization project built to clarify relationships and structure in a readable way.",
        status: "Prototype",
        tags: ["Visualization", "UI", "Logic"],
        href: "",
        repo: "https://github.com/Sac-da-ROOK",
        githubUrl: "https://github.com/Sac-da-ROOK",
        screenshot: "/images/featured/placeholder.svg",
        gallery: [
            "/images/featured/placeholder.svg",
            "/images/featured/placeholder.svg"
        ],
        overview:
            "Dynamic Diagram is a visualization project designed to make abstract relationships easier to understand. The idea is to turn dense information into a cleaner system of connected structure and motion.",
        problem:
            "Complex ideas can become hard to follow when they are represented as static lists and disconnected labels.",
        why:
            "I wanted to create a more intuitive way to show systems, connections, and process flow visually.",
        approach:
            "I focused on structure, readability, and interaction to help users move between concepts and understand relationships more clearly.",
        result:
            "The project acts as a concept for interactive visual thinking, making complex systems easier to reason about at a glance.",
        techStack: ["JavaScript", "Visualization", "UX", "Data"],
        features: [
            "Interactive diagram behavior for connected ideas.",
            "Clear structure and relationship mapping.",
            "A readable visual system for complex information.",
            "Strong emphasis on explanation and flow."
        ],
        challenges: [
            "Avoiding visual clutter while preserving meaning.",
            "Designing interactions that feel smooth and intuitive.",
            "Making abstract relationships readable for non-experts."
        ],
        learnings: [
            "Visualization is a form of communication, not just decoration.",
            "Structure helps users understand complexity faster.",
            "Good interactions make conceptual systems easier to explore."
        ],
        nextSteps: [
            "Expand into multi-node interactive system mapping.",
            "Improve animation and state transitions.",
            "Add data-driven examples for real-world use cases."
        ]
    },
    {
        slug: "omni-adventure-engine",
        title: "Omni Adventure Engine",
        subtitle: "An exploratory game engine concept for connected worlds, quests, and dynamic progression.",
        description:
            "Omni Adventure Engine is a sandbox-style concept for building a more dynamic, modular adventure system with evolving story and gameplay structure.",
        details:
            "A design-heavy adventure engine concept focusing on world logic, progression, and flexible content loops.",
        status: "Prototype",
        tags: ["Game Design", "Systems", "JavaScript"],
        href: "",
        repo: "https://github.com/Sac-da-ROOK",
        githubUrl: "https://github.com/Sac-da-ROOK",
        screenshot: "/images/featured/placeholder.svg",
        gallery: [
            "/images/featured/placeholder.svg",
            "/images/featured/placeholder.svg"
        ],
        overview:
            "Omni Adventure Engine is a concept project exploring how a game world can become more modular, dynamic, and expressive through flexible progression systems. The idea is to create the skeleton for adventures that feel connected and alive.",
        problem:
            "Many game systems feel rigid because progression and narrative structures are too linear or tightly coupled.",
        why:
            "I wanted to experiment with how game systems can be designed to support richer exploration and more flexible player journeys.",
        approach:
            "I focused on modular systems, progression logic, and dynamic narrative flow so the game world could evolve in a more organic way.",
        result:
            "The project acts as a framework concept for a richer adventure experience built around modular progression and dynamic storytelling.",
        techStack: ["JavaScript", "Game Systems", "Design", "UX"],
        features: [
            "Modular quest and progression structure.",
            "Dynamic world-state logic and branching possibilities.",
            "A flexible framework for narrative and gameplay design.",
            "System-first thinking for a more scalable adventure experience."
        ],
        challenges: [
            "Designing systems that are flexible without becoming chaotic.",
            "Keep player choices meaningful and readable.",
            "Balancing complexity with maintainability."
        ],
        learnings: [
            "Systems thinking is essential for good game design.",
            "Good worlds feel coherent because the rules are clear and connected.",
            "Modular design allows bigger ideas without losing structure."
        ],
        nextSteps: [
            "Build a more specific playable prototype.",
            "Add quest dependency and branching system logic.",
            "Develop world-state rules for richer player progression."
        ]
    },
    {
        slug: "arcade-prototype-beta",
        title: "Arcade Prototype Beta",
        subtitle: "A beta-stage arcade project focused on quick reactions, challenge loops, and polished feedback.",
        description:
            "Arcade Prototype Beta is a small, fast experimentation project centered on sharp mechanics, satisfying feedback, and quick game loops.",
        details:
            "A beta-stage mini-game concept built to test feel, pacing, and feedback under fast gameplay conditions.",
        status: "Beta",
        tags: ["Game", "Prototype", "JavaScript"],
        href: "",
        repo: "https://github.com/Sac-da-ROOK",
        githubUrl: "https://github.com/Sac-da-ROOK",
        screenshot: "/images/featured/placeholder.svg",
        gallery: [
            "/images/featured/placeholder.svg",
            "/images/featured/placeholder.svg"
        ],
        overview:
            "Arcade Prototype Beta explores how a simple game can feel sharp and rewarding even in a small format. The concept is built around quick mechanics, physical feedback, and short challenge loops.",
        problem:
            "Many small game prototypes lose momentum because they never fully realize feedback or pacing.",
        why:
            "I wanted to explore the feeling of a polished mini-game and how much quality can come from a compact, focused loop.",
        approach:
            "I focused on readability, rhythm, and immediate player feedback so the prototype feels responsive and satisfying even with limited scope.",
        result:
            "The project acts as a strong prototype for further arcade exploration, with a clear sense of pace and a tested gameplay loop.",
        techStack: ["JavaScript", "HTML", "CSS", "Game Loop"],
        features: [
            "Short, responsive gameplay loop.",
            "Clear score and reaction-based feedback.",
            "Compact game design built for refinement.",
            "Fast iteration as a prototype for more ambitious ideas."
        ],
        challenges: [
            "Making the prototype feel rewarding within a limited scope.",
            "Keeping the pacing fun without overcomplicating it.",
            "Balancing taste and polish in a small game experience."
        ],
        learnings: [
            "Small games succeed when the feel is immediately obvious.",
            "Feedback loops are essential for player attachment.",
            "A strong prototype shows what matters before full expansion."
        ],
        nextSteps: [
            "Expand the game loop into a richer system.",
            "Add more challenge states and variety.",
            "Build a stronger progression and polish pass."
        ]
    }
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs() {
    return projects.map((project) => project.slug);
}

export function metadataForProject(project: ProjectData): Metadata {
    return {
        title: `${project.title} | Portfolio`,
        description: project.description,
        openGraph: {
            title: `${project.title} | Portfolio`,
            description: project.details,
            type: "website"
        }
    };
}
