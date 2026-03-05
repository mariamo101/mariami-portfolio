# Mariami Portfolio (Next.js)

Personal portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.  
Includes a featured projects slider, projects listing with filters/search, and dynamic project detail pages.

---

## ✨ Features

- Multi-page layout (Home, Projects, Project details)
- Featured projects slider (carousel)
- Projects page with:
  - Tag filters
  - Search input
  - Responsive grid layout
- Dynamic routes: `/projects/[slug]`
- Modern dark UI (Vercel/Tailwind-inspired)
- Optimized structure for future scaling (easy to add new projects)

---

## 🧱 Tech Stack

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**

---

## 🚀 Getting Started

### 1) Install dependencies

````bash
npm install

```bash
npm run dev
````

📁 Project Structure
app/
page.tsx # Home page
projects/
page.tsx # /projects (list + filters + search)
[slug]/
page.tsx # /projects/[slug] (details page)
components/
FeaturedProjects.tsx # Featured slider component
data/
projects.ts # Projects data (titles, descriptions, links, tags)

🧭 Routes

/ → Home

/projects → Projects listing

/projects/[slug] → Project details page

npm run dev # Start dev server
npm run build # Production build
npm run start # Start production server
npm run lint # Run ESLint
