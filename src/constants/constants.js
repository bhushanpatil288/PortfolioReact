// Header start

// Navbar start
 
export const navLinks = [
    {
        name: "Home",
        url: "#",
        target: "_self",
        title: "Visit Home page"
    },
    {
        name: "About",
        url: "#",
        target: "_blank",
        title: "Visit About page"
    },
    {
        name: "Contact",
        url: "#",
        target: "_blank",
        title: "Visit Contact page"
    }
]



// Navbar end

// Header end

// main start

// projects start

export const projectsPreview = [
    {
        id: "portfolio-react",
        name: "Portfolio (React)",
        img: "/images/projects-img/portfolio-react.png",

        type: "personal", // academic | freelance | experiment
        status: "in-progress", // completed | in-progress | paused
        year: 2025,

        stack: ["html", "css", "js", "react"],
        
        description: "This was my project to test my react skills as well as making a fresh portfolio site to showcase my latest skills.",

        highlights: [
            "Data-driven UI using centralized configuration objects",
            "Component-based architecture",
            "Responsive layout with Tailwind",
            "Focused on clarity over visual noise"
        ],

        repo: "https://github.com/bhushanpatil288/PortfolioReact",
        live: "https://portfolio-react-five-opal.vercel.app/",

        tags: [
            "frontend",
            "react",
            "portfolio",
            "fundamentals"
        ]
    },
    {
        id: "simple-weather-checker",
        name: "Weather Checker",
        img: "/images/projects-img/simple-weather-checker.png",

        type: "academic",
        status: "completed",
        year: 2025,

        stack: ["html", "css", "js"],
        
        description: "This was made as an assignment in Red and White Multimedia Institute as a part of learning api",

        highlights: [
            "using public api",
            "Making use of api data to update ui"
        ],

        repo: "https://github.com/bhushanpatil288/weather-api",
        live: "https://bhushanpatil288.github.io/weather-api/",

        tags: [
            "api",
            "frontend",
            "fundamentals"
        ]
    }
]

// projects end

// main end