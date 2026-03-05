export type Project = {
  slug: string;
  title: string;
  description: string;
  year: string;
  tags: string[];
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
    slug: "product-feedback-app",
    title: "Product Feedback App",
    description:
      "Welcome to our Product Feedback App! This application 📱 allows users to give feedback 🗣️ on various products. It's crafted with React, Vite, Reactstrap, Bootstrap, useContext, useEffect, lazy loading, React Router, and Dark Mode 🌑",
    year: "2024",
    tags: ["Vite", "Reactstrap", "Bootstrap", "Lazy Loading", "Tailwind"],
  },
  {
    slug: "dealers-Bet",
    title: "Dealers Bet",
    description:
      "The app displays real betting table images and allows the user to mentally calculate the total bet amount before revealing the correct answer.",
    year: "2026",
    tags: ["React", "TypeScript", "TailwindCSS", "Fetch API"],
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug) ?? null;
}
