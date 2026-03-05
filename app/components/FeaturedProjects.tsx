"use client";

import { useMemo, useState } from "react";

import type { Project } from "../data/projects";

type Props = {
  projects: Project[];
};

export default function FeaturedProjects({ projects }: Props) {
  const featured = useMemo(() => projects.slice(0, 8), [projects]);
  const [index, setIndex] = useState(0);

  // რამდენი card გამოჩნდეს ერთ “სლაიდში”
  const perView = 3;
  const maxIndex = Math.max(0, Math.ceil(featured.length / perView) - 1);

  const go = (next: number) => {
    const clamped = Math.max(0, Math.min(maxIndex, next));
    setIndex(clamped);
  };

  const pages = Array.from({ length: maxIndex + 1 }, (_, i) => i);

  return (
    <section className="mt-16">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-xl font-semibold text-zinc-100">
            Featured Projects
          </h2>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={() => go(index - 1)}
            className="cursor-pointer rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-zinc-200 transition hover:bg-white/10 disabled:opacity-40"
            disabled={index === 0}
          >
            ←
          </button>
          <button
            onClick={() => go(index + 1)}
            className="cursor-pointer rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-zinc-200 transition hover:bg-white/10 disabled:opacity-40"
            disabled={index === maxIndex}
          >
            →
          </button>
        </div>
      </div>

      <div className="mt-6 overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {pages.map((page) => {
            const start = page * perView;
            const slice = featured.slice(start, start + perView);

            return (
              <div key={page} className="w-full shrink-0 px-2">
                <div className="grid gap-4 md:grid-cols-3">
                  {slice.map((p) => (
                    <div
                      key={p.slug}
                      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-base font-semibold text-zinc-100">
                            {p.title}
                          </h3>
                          <p className="mt-2 text-sm text-zinc-400">
                            {p.short ?? p.description}
                          </p>
                        </div>
                        <div className="text-xs text-zinc-500">{p.year}</div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.tags.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] text-zinc-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex items-center gap-3">
                        <a
                          href={p.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-indigo-500 px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90"
                        >
                          Live Demo
                        </a>

                        <a
                          href={p.githubUrl ?? "#"}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-100 transition hover:bg-white/10"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => go(p)}
            className={`h-2 w-2 rounded-full transition ${
              p === index ? "bg-white" : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${p + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
