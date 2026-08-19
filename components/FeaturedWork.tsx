import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="bg-portfolio-soft scroll-mt-24 py-28 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-8">
        <h2 className="font-heading text-4xl font-bold text-[#171329] md:text-5xl">
          Featured Work
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.brand}
              className="flex min-h-full flex-col rounded-2xl border border-violet-100 bg-white/90 p-8 shadow-sm shadow-violet-100/70 transition hover:-translate-y-1 hover:border-[#b9adff] hover:shadow-md"
            >
              {/* Logo */}
              <div className="flex h-14 items-center">
                {project.logo ? (
                  <Image
                    src={project.logo}
                    alt={project.brand}
                    width={180}
                    height={50}
                    className="max-h-12 w-auto object-contain"
                  />
                ) : (
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    {project.brand}
                  </p>
                )}
              </div>

              {/* Brand */}
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-[#5b4dff]">
                {project.brand}
              </p>

              {/* Title */}
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#171329]">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-5 flex-1 text-base leading-7 text-slate-600">
                {project.description}
              </p>

              {/* Button */}
              {project.href ? (
                <Link
                  href={project.href}
                  className="mt-8 inline-flex w-fit rounded-full bg-[#171329] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:bg-[#5b4dff]"
                >
                  View Case Study
                </Link>
              ) : (
                <span className="mt-8 inline-flex w-fit rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-neutral-500">
                  Coming Soon
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}