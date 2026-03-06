import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "../projects-data";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-8 flex items-center justify-between gap-4">
        <Link
          href="/projects"
          className="text-sm text-zinc-300 transition hover:text-white"
        >
          Back to Projects
        </Link>

        <div className="text-xs text-zinc-500">{project.year}</div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <p className="text-xs uppercase tracking-widest text-zinc-400">
          Project
        </p>

        <h1 className="mt-2 text-4xl font-semibold text-white">
          {project.title}
        </h1>
        {project.image && (
          <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        <p className="mt-4 max-w-2xl text-zinc-300">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-indigo-500 px-5 py-2 text-xs font-semibold text-white transition hover:opacity-90"
            >
              Live Demo
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold text-zinc-100 transition hover:bg-white/10"
            >
              GitHub
            </a>
          )}
        </div>
        {/* {project.learned?.length ? (
          <div className="mt-10">
            <h2 className="text-sm font-semibold text-zinc-100">
              What I learned
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {project.learned.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null} */}
      </div>
    </main>
  );
}
