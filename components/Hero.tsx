export default function Hero() {
  return (
    <section className="bg-portfolio-warm flex min-h-screen items-center pt-24">
      <div className="mx-auto max-w-7xl px-8">
        <p className="mb-6 inline-flex rounded-full border border-[#e8ddd5] bg-[#f9f6f4]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#4d433d] shadow-sm md:text-sm">
          Brand Strategist • Creative Director • Storyteller
        </p>

        <h1 className="max-w-5xl font-heading text-5xl font-bold leading-[0.98] tracking-normal text-[#171329] md:text-7xl lg:text-8xl">
          Building brands
          <br />
          <span className="text-accent-pop">people remember.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:mt-10 md:text-xl md:leading-9">
          I help brands reach the right audience through strategy,
          storytelling, and creative direction.
        </p>

        <a
          href="#work"
          className="mt-12 inline-flex rounded-full bg-[#1f1d1b] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-stone-300/40 transition hover:-translate-y-0.5 hover:bg-[#3a342f]"
        >
          Explore My Work
        </a>
      </div>
    </section>
  );
}
