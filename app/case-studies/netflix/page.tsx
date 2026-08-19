import Image from "next/image";
import Link from "next/link";

export default function NetflixCaseStudy() {
  return (
    <main className="bg-portfolio-soft min-h-screen py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-8">
        <Link
          href="/#work"
          className="text-sm font-semibold uppercase tracking-wider text-[#5b4dff] transition hover:text-[#171329]"
        >
          Back to Work
        </Link>

        <div className="mt-10 rounded-2xl border border-violet-100 bg-white/90 p-8 shadow-sm shadow-violet-100/70 md:p-12">
          <Image
            src="/logo/netflix-3.svg"
            alt="Netflix"
            width={180}
            height={50}
          />

          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-[#5b4dff]">
            Case Study
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-tight text-[#171329] md:text-6xl">
            Building a Netflix campaign that felt premium, familiar, and unmistakably local.
          </h1>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <a
              href="https://www.youtube.com/watch?v=cdGXEvYtH-0&t=27s"
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-sm shadow-violet-100/70 transition hover:-translate-y-0.5 hover:border-violet-200"
              aria-label="Watch the Netflix campaign video"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="https://img.youtube.com/vi/cdGXEvYtH-0/hqdefault.jpg"
                  alt="Netflix campaign video thumbnail"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#171329]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171329] text-white">
                    ▶
                  </span>
                  Watch Campaign
                </div>
              </div>
            </a>

            <div className="flex flex-col justify-between rounded-2xl border border-violet-100 bg-[#f7f2ff] p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5b4dff]">
                  Campaign Summary
                </p>
                <p className="mt-5 text-lg leading-8 text-slate-700">
                  A premium local lens for a global story — built to feel emotionally relevant, not simply translated.
                </p>
              </div>
              <div className="mt-6 rounded-xl bg-white/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Outcome
                </p>
                <p className="mt-2 text-2xl font-bold text-[#171329]">
                  High recall. Strong cultural fit.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <section className="rounded-2xl bg-[#fff7ed] p-6">
              <h2 className="text-xl font-semibold text-[#171329]">The Problem</h2>
              <p className="mt-4 leading-8 text-slate-600">
                A global streaming title needed to feel culturally tuned to its audience instead of like a straight import.
              </p>
            </section>

            <section className="rounded-2xl bg-[#f7f2ff] p-6">
              <h2 className="text-xl font-semibold text-[#171329]">Insight</h2>
              <p className="mt-4 leading-8 text-slate-600">
                Audiences respond best when a campaign feels emotionally familiar, not just visually branded.
              </p>
            </section>

            <section className="rounded-2xl bg-[#effdf6] p-6">
              <h2 className="text-xl font-semibold text-[#171329]">Approach</h2>
              <p className="mt-4 leading-8 text-slate-600">
                The work translated the core feeling of the title into a locally resonant creative language that felt premium and conversational.
              </p>
            </section>

            <section className="rounded-2xl bg-[#eef6ff] p-6">
              <h2 className="text-xl font-semibold text-[#171329]">Impact</h2>
              <p className="mt-4 leading-8 text-slate-600">
                The campaign made the story feel more immediate, aspirational, and memorable for audiences who wanted something that fit their world.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
