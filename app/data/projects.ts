export type Project = {
  slug: string;
  title: string;
  short?: string;
  description: string;
  year: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
};
export const PROJECTS: Project[] = [
  {
    slug: "portfolio",
    title: "Portfolio Website",
    description: "Data fetching, loading states, and  layout for dashboards.",
    short:
      "Personal Portfolio Website A modern portfolio website showcasing my frontend projects, skills, and contact information.Built with Next.js, TypeScript, and Tailwind CSS, featuring dynamic project pages, filtering and search functionality, and a responsive UI.",
    year: "2026",
    tags: ["Next.js", "React", "TypeScipt", "Tailwind"],
    demoUrl: "https://mariami-portfolio.vercel.app/",
    githubUrl:
      "https://github.com/mariamo101/mariami-portfolio?tab=readme-ov-file",
  },
  {
    slug: "GitHub user search app solution",
    title: "GitHub User Search App",
    short:
      "GitHub User Search App A React application that allows users to search GitHub profiles and display detailed account information using the GitHub Users API.Built with React and Fetch API, featuring dynamic data rendering, error handling, and responsive UI.",
    description: "Search for GitHub users by their username",
    year: "2024",
    tags: ["React", "Async", "Fetch API"],
    demoUrl: "https://devfinder-roan.vercel.app/",
    githubUrl: "https://github.com/mariamo101/Devfinder",
  },
  {
    slug: "Todo app",
    title: "Todo App",
    description: "",
    short:
      "Todo App A task management application with drag-and-drop reordering and dark/light theme support.Built with React, featuring dynamic state management and persistent tasks using local storage.",
    year: "2023",
    tags: ["React", "Drag & Drop", "State Management"],
    demoUrl: "https://todo-react-app-six-orcin.vercel.app/",
    githubUrl: "https://github.com/mariamo101/todo.react.app",
  },
  {
    slug: "Advice generator app solution",
    title: "Advice generator app solution",
    short:
      "A small application that fetches random advice from a public API and displays it to the user.Built with JavaScript using the Fetch API and dynamic UI updates. ",
    description:
      "A small application that fetches random advice from a public API and displays it to the user.Built with JavaScript using the Fetch API and dynamic UI updates. ",
    year: "2024",
    tags: ["JavaScript", "API", "Fetch"],
    demoUrl: "https://advice-generator-app-six-jet.vercel.app/",
    githubUrl: "https://github.com/mariamo101/advice-generator-app",
  },
  {
    slug: "typemaster-landing-page",
    title: "Typemaster Landing Page",
    description: "",
    short:
      "Responsive landing page built from a Figma design.Focused on layout precision, responsive design, and modern CSS techniques.",
    year: "2023",
    tags: ["HTML", "CSS", "Responsive"],
    demoUrl: "/",
    githubUrl: "/",
  },
];
