import Image from "next/image";
import Link from "next/link";

export default function JioHotstar() {
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
            src="/logo/jio-hotstar.svg"
            alt="Jio Hotstar"
            width={180}
            height={50}
          />

          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-[#5b4dff]">
            Case Study
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-tight text-[#171329] md:text-6xl">
            Helping Marvel feel local, loved, and unmistakably Indian.
          </h1>

          <div className="mt-10">
            <a
              href="https://www.youtube.com/watch?v=WpUFUaNMXS8"
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-sm shadow-violet-100/70 transition hover:-translate-y-0.5 hover:border-violet-200"
              aria-label="Watch the Jio Hotstar campaign video"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="https://img.youtube.com/vi/WpUFUaNMXS8/hqdefault.jpg"
                  alt="Marvel localisation campaign video thumbnail"
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
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <section className="rounded-2xl bg-[#fff7ed] p-6">
              <h2 className="text-xl font-semibold text-[#171329]">The Problem</h2>
              <p className="mt-4 leading-8 text-slate-600">
                Marvel wanted Ant-Man to resonate with Hindi-speaking audiences
                rather than feel like a dubbed Hollywood release.
              </p>
            </section>

            <section className="rounded-2xl bg-[#f7f2ff] p-6">
              <h2 className="text-xl font-semibold text-[#171329]">Insight</h2>
              <p className="mt-4 leading-8 text-slate-600">
                Bhidu had become a cultural phenomenon because of his
                unmistakable slang and personality.
              </p>
            </section>

            <section className="rounded-2xl bg-[#effdf6] p-6">
              <h2 className="text-xl font-semibold text-[#171329]">Approach</h2>
              <p className="mt-4 leading-8 text-slate-600">
                We used an instantly recognizable voice to bridge Marvel&apos;s
                global storytelling with an audience that wanted something
                rooted in local culture.
              </p>
            </section>

            <section className="rounded-2xl bg-[#eef6ff] p-6">
              <h2 className="text-xl font-semibold text-[#171329]">Impact</h2>
              <p className="mt-4 leading-8 text-slate-600">
                The campaign made the title feel more accessible, culturally
                familiar, and conversation-worthy for Hindi-speaking audiences.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
