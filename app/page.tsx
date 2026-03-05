import Link from "next/link";
import FeaturedProjects from "./components/FeaturedProjects";
import { PROJECTS } from "./data/projects";

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 md:px-12">
      <div className="mx-auto w-full max-w-6xl">
        {/* Top nav */}
        <header className="flex items-center justify-between gap-6 py-10 md:py-12">
          <div className="text-base font-semibold tracking-tight text-zinc-100">
            Mariami
          </div>

          <nav className="hidden items-center gap-10 text-[15px] font-medium text-zinc-300 md:flex">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <Link href="/projects" className="hover:text-white transition">
              Projects
            </Link>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-6 text-[15px] font-medium">
            <a
              href="https://github.com/mariamo101 "
              target="_blank"
              rel="noreferrer"
              className="text-zinc-300 hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-300 hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href="https://www.upwork.com/"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-300 hover:text-white transition"
            >
              Upwork
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="pt-10 text-center md:pt-16">
          <h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-zinc-50 md:text-6xl">
            Mariami Makhniashvili
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]">
            Frontend Developer
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
            Designing and building modern web interfaces
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/projects"
              className="rounded-2xl bg-indigo-500 px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
            >
              View Projects
            </Link>

            <a
              href="https://github.com/mariamo101"
              target="_blank"
              className="rounded-2xl border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-zinc-100 backdrop-blur transition hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </section>

        {/* Featured */}
        <FeaturedProjects projects={PROJECTS} />

        {/* About + Contact */}
        <section className="mt-16 grid gap-10 border-t border-white/10 pt-12 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-zinc-100">About Me</h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-zinc-400">
              <p>
                I enjoy transforming ideas into real products — from early MVP
                concepts to polished user experiences. My work focuses on clean
                UI, performance, and intuitive user interactions.
              </p>
              <p>
                Currently exploring product-driven development and aviation
                technology while continuously improving my skills in Next.js,
                TypeScript, and modern frontend architecture. Tech I work with:
                Next.js • React • TypeScript • Tailwind • REST APIs • Git
              </p>
            </div>
          </div>

          <div id="contact">
            <h2 className="text-xl font-semibold text-zinc-100">
              Get In Touch
            </h2>

            <div className="mt-5 space-y-4 text-sm text-zinc-300">
              <a
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
                href="https://maro.maxniashvili98@gmail.com"
                target="_blank"
              >
                <span className="text-zinc-400">✉</span>
                <span>maro.maxniashvili98@gmail.com</span>
              </a>

              <a
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
                href="https://github.com/mariamo101"
                target="_blank"
              >
                <span className="text-zinc-400">⌁</span>
                <span>github.com</span>
              </a>

              <a
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
                href="https://linkedin.com/in/mariami"
                target="_blank"
              >
                <span className="text-zinc-400">in</span>
                <span>linkedin.com</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-14 border-t border-white/10 py-10 text-center text-sm text-zinc-500">
          <div>© 2026 Mariami Makhniashvili</div>

          <div className="mt-4 flex items-center justify-center gap-6">
            <a href="#" className="hover:text-zinc-300 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-zinc-300 transition">
              Terms of Service
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
