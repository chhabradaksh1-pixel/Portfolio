export default function Aboutme() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-28 md:py-32">
      <div className="mx-auto max-w-7xl px-8">
        <h2 className="font-heading text-4xl font-bold text-[#171329] md:text-5xl">
          About Me
        </h2>

        <div className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
          I&apos;m Daksh Chhabra, a brand strategist and creative director with
          6+ years of experience creating campaigns for brands people grew up
          watching, streaming, and talking about.
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["6+", "years of experience"],
            ["50+", "campaigns across entertainment, consumer brands, and startups"],
            ["10+", "global brands"],
            ["Awarded", "Mommy's Choice Award for Best Advertising Campaign"],
          ].map(([metric, label]) => (
            <div
              key={metric}
              className="rounded-2xl border border-violet-100 bg-portfolio-card p-6 shadow-sm"
            >
              <p className="text-3xl font-bold tracking-tight text-[#5b4dff]">
                {metric}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
