"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { TAGS, PROJECTS } from "./projects-data";
export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return PROJECTS.filter((p) => {
      const matchesTag = activeTag ? p.tags.includes(activeTag) : true;

      const matchesQuery = q
        ? (p.title + " " + p.description).toLowerCase().includes(q)
        : true;

      return matchesTag && matchesQuery;
    });
  }, [activeTag, query]);
  return (
    <main className="min-h-screen px-6 py-16 md:px-12">
      <div className="mx-auto w-full max-w-5xl">
        {/* Top bar */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3">
              <Link
                href="/"
                className="text-sm text-zinc-300 hover:text-white transition"
              >
                Back to Home
              </Link>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">
              Projects
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
              Browse selected work. Use filters or search to quickly find what
              you need.
            </p>
          </div>

          <div className="w-full md:w-[360px]">
            <label className="sr-only" htmlFor="search">
              Search projects
            </label>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <input
                id="search"
                placeholder="Search projects..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap items-center gap-2">
          {TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                activeTag === tag
                  ? "border-indigo-400/40 bg-indigo-500/20 text-indigo-200"
                  : "border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10"
              }`}
            >
              {tag}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              setActiveTag(null);
              setQuery("");
            }}
            className="ml-2 rounded-full border border-white/10 bg-white/0 px-4 py-2 text-xs font-medium text-zinc-400 transition hover:bg-white/5 hover:text-zinc-200"
          >
            Clear
          </button>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((p) => (
            <div
              key={p.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-zinc-100">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {p.description}
                  </p>
                </div>
                <div className="text-xs text-zinc-500">{p.year}</div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 text-sm font-medium text-zinc-300 transition group-hover:text-zinc-100">
                <Link
                  href={`/projects/${p.slug}`}
                  className="mt-6 inline-block text-sm font-medium text-zinc-300 transition group-hover:text-zinc-100"
                >
                  Open Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

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
