import Image from "next/image";
import Link from "next/link";

const videoAssets = [
  {
    title: "Ravi Shastri Launch Video",
    href: "https://www.canva.com/design/DAGGfVTZu6o/JUVJelYehlc_dDbLNQWKKQ/edit",
    accent: "from-[#171329] via-[#5b4dff] to-[#a78bfa]",
    blurb: "Launch moment",
  },
  {
    title: "Inside Edge Campaign Reel",
    href: "https://www.canva.com/design/DAGGfVTZu6o/JUVJelYehlc_dDbLNQWKKQ/edit",
    accent: "from-[#f59e0b] via-[#f97316] to-[#fb7185]",
    blurb: "Brand teaser",
  },
];

export default function AmazonPrimeVideo() {
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
            src="/logo/amazon-prime-video.svg"
            alt="Amazon Prime Video"
            width={180}
            height={50}
          />

          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-[#5b4dff]">
            Case Study
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-tight text-[#171329] md:text-6xl">
            Making Inside Edge feel like the start of a real cricket season.
          </h1>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {videoAssets.map((video) => (
              <a
                key={video.title}
                href={video.href}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-sm shadow-violet-100/70 transition hover:-translate-y-0.5 hover:border-violet-200"
                aria-label={video.title}
              >
                <div className={`relative aspect-video bg-gradient-to-br ${video.accent}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.42),transparent_40%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-2xl font-bold text-[#171329] shadow-lg">
                      ▶
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
                      {video.blurb}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-white">
                      {video.title}
                    </h2>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <section className="rounded-2xl bg-[#fff7ed] p-6">
              <h2 className="text-xl font-semibold text-[#171329]">The Problem</h2>
              <p className="mt-4 leading-8 text-slate-600">
                Inside Edge was already familiar to audiences. The challenge was
                to bring curiosity back and make fans feel closer to the world
                of cricket, rivalry, and drama.
              </p>
            </section>

            <section className="rounded-2xl bg-[#f7f2ff] p-6">
              <h2 className="text-xl font-semibold text-[#171329]">Insight</h2>
              <p className="mt-4 leading-8 text-slate-600">
                Fans respond when a campaign feels like live sporting culture,
                not just entertainment promotion.
              </p>
            </section>

            <section className="rounded-2xl bg-[#effdf6] p-6">
              <h2 className="text-xl font-semibold text-[#171329]">Approach</h2>
              <p className="mt-4 leading-8 text-slate-600">
                We partnered with Ravi Shastri to announce the new season,
                making audiences feel as though they were watching the build-up
                to a real cricket tournament.
              </p>
            </section>

            <section className="rounded-2xl bg-[#eef6ff] p-6">
              <h2 className="text-xl font-semibold text-[#171329]">Impact</h2>
              <p className="mt-4 leading-8 text-slate-600">
                The campaign created a sharper entertainment hook and gave fans
                a familiar sports-language entry point into the new season.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
