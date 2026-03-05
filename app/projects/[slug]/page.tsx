import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "../projects-data";

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
      </div>
    </main>
  );
}
