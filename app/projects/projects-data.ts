// export type Project = {
//   slug: string;
//   title: string;
//   description: string;
//   year: string;
//   tags: string[];
// };
export type Project = {
  slug: string;
  title: string;
  description: string;
  year: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
  learned?: string[];
};

export const TAGS = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "UI",
  "API",
] as const;

export const PROJECTS: Project[] = [
  {
    slug: "tip-calculator-app",
    title: "🧮 Tip Calculator App",
    description:
      "An interactive tip calculator that helps users quickly split bills and calculate tips. Built with HTML, CSS, and JavaScript as part of the Frontend Mentor challenge focusing on responsive layout and user input validation.",
    year: "2026",
    tags: ["Flexbox", "Grid", "Responsive UI"],
    image: "/projects/tip-calculator.png",
    demoUrl: "https://tip-calculator-app-mm.netlify.app/",
    githubUrl: "https://github.com/mariamo101/Tip-Calculator-app",
    learned: [
      "Built responsive layouts using Flexbox and CSS Grid",
      "Handled user input validation and edge cases",
      "Improved UI structure and responsive design skills",
    ],
  },
  {
    slug: "product-feedback-app",
    title: "📝 Product Feedback App",
    description:
      "A feedback platform where users can submit and manage product suggestions. Built with React, Vite, and Reactstrap with features like lazy loading, routing, and dark mode support.",
    year: "2024",
    tags: ["Vite", "Reactstrap", "Bootstrap", "Lazy Loading", "Tailwind"],
    image: "/projects/product-feedback.png",
    demoUrl: "https://produc-feedback-app-tato-saba-mariami.netlify.app/",
    githubUrl: "https://github.com/mariamo101/team-2",
    learned: [
      "Built responsive layouts using Flexbox and CSS Grid",
      "Handled user input validation and edge cases",
      "Improved UI structure and responsive design skills",
    ],
  },
  {
    slug: "tic-tac-toe",
    title: "🎮 TIC-TAC-TOE",
    description:
      "Classic Tic-Tac-Toe game with an AI opponent powered by the Minimax algorithm.Built with Vanilla JavaScript, HTML, and CSS as part of the Frontend Mentor challenge.",
    year: "2023",
    tags: ["Vanilla JavaScript", "CSS", "HTML"],
    image: "/projects/tic-tac-toe.png",
    demoUrl: "https://tic-tac-toe-mm.netlify.app/",
    githubUrl: "https://github.com/mariamo101/TIC-TAC-TOE",
    learned: [
      "Built responsive layouts using Flexbox and CSS Grid",
      "Handled user input validation and edge cases",
      "Improved UI structure and responsive design skills",
    ],
  },
  {
    slug: "dealers-bet",
    title: "🎰 Dealers Bet",
    description:
      "A training tool for live casino dealers to practice calculating total bet amounts.The app displays real betting table scenarios and challenges the user to compute the correct total before revealing the answer.",
    year: "2026",
    tags: ["React", "TypeScript", "TailwindCSS", "Fetch API"],
    image: "/projects/dealers-bet.png",
    demoUrl: "https://calculate-dealer-bets.vercel.app/",
    githubUrl: "https://github.com/mariamo101/Calculate-Dealer-Bets",
    learned: [
      "Built responsive layouts using Flexbox and CSS Grid",
      "Handled user input validation and edge cases",
      "Improved UI structure and responsive design skills",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug) ?? null;
}
