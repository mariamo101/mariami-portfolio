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
    title: "Portfolio",
    description: "Data fetching, loading states, and  layout for dashboards.",
    short:
      "Personal portfolio website built with Next.js (App Router), TypeScript, and Tailwind CSS.",
    year: "2026",
    tags: ["Next.js", "React", "TypeScipt", "Tailwind"],
  },
  {
    slug: "Dealers Bet",
    title: "Count Dealer Bet",
    description: "Data fetching, loading states, and responsive layout .",
    short:
      "A React training application designed to help casino dealers improve their roulette bet counting speed and accuracy.",
    year: "2026",
    tags: ["Randomized bet images", "API", "Tailwind"],
    demoUrl: "https://calculate-dealer-bets.vercel.app/",
    githubUrl: "https://github.com/mariamo101/Calculate-Dealer-Bets",
  },
  {
    slug: "GitHub user search app solution",
    title: "GitHub user search app solution",
    short:
      "Search for GitHub users by their username, Switch between light and dark themes",
    description: "Search for GitHub users by their username",
    year: "2024",
    tags: ["React", "Javascript", "Fetch API", "CSS"],
    demoUrl: "https://devfinder-roan.vercel.app/",
    githubUrl: "https://github.com/mariamo101/Devfinder",
  },
  {
    slug: "Product Feedback App",
    title: "Product Feedback App",
    short: "Users can submit feedback for different products.",
    description: "Client-side validation,  inputs, and clean error states.",
    year: "2024",
    tags: ["Vite", "Bootstrap", "Lazy Loading", "useContext"],
    demoUrl: "https://produc-feedback-app-tato-saba-mariami.netlify.app/",
    githubUrl: "https://github.com/mariamo101/team-2?tab=readme-ov-file",
  },
  {
    slug: "TIC-TAC-TOE",
    title: "TIC-TAC-TOE",
    description: "",
    short: "Tic-Tac-Toe game with AI using the Minimax algorithm! 🤖🕹️",
    year: "2023",
    tags: ["Vanila JavaScript", "CSS", "HTML"],
    demoUrl: "https://tic-tac-toe-mm.netlify.app/",
    githubUrl: "https://github.com/mariamo101/TIC-TAC-TOE",
  },
  {
    slug: "Todo app",
    title: "Todo app",
    description: "",
    short: "The classic todo app with a dark/light theme",
    year: "2023",
    tags: ["React - JS library", "CSS Grid", "Flexbox"],
    demoUrl: "https://todo-react-app-six-orcin.vercel.app/",
    githubUrl: "https://github.com/mariamo101/todo.react.app",
  },
  {
    slug: "Advice generator app solution",
    title: "Advice generator app solution",
    short: "Happiness is a journey, not a destination.",
    description: "Search for GitHub users by their ",
    year: "2024",
    tags: ["Next.js ", "Styled Components ", "Responsive"],
    demoUrl: "https://advice-generator-app-six-jet.vercel.app/",
    githubUrl: "https://github.com/mariamo101/advice-generator-app",
  },
];
