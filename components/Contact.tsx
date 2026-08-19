export default function Contact() {
  return (
    <section id="contact" className="bg-portfolio-warm scroll-mt-24 py-28 md:py-32">
      <div className="mx-auto max-w-7xl px-8">
        <h2 className="max-w-3xl font-heading text-4xl font-bold leading-tight text-[#171329] md:text-5xl">
          Let&apos;s Build Something Great Together
        </h2>

        <div className="mt-12 max-w-3xl rounded-2xl border border-violet-100 bg-white/85 p-8 shadow-sm shadow-violet-100/70 md:p-10">
          <p className="text-lg leading-8 text-slate-600">
            Whether it&apos;s a brand launch, campaign, or product idea, I&apos;d
            love to hear what you&apos;re building.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="mailto:chhabradaksh1@gmail.com"
              className="inline-flex rounded-full bg-[#171329] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-violet-300/40 transition hover:-translate-y-0.5 hover:bg-[#5b4dff]"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 space-y-3 text-base text-slate-700">
            <p>
              <span className="font-semibold text-[#171329]">Email:</span>{" "}
              <a href="mailto:chhabradaksh1@gmail.com" className="text-[#5b4dff] hover:underline">
                chhabradaksh1@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-[#171329]">Phone:</span>{" "}
              <a href="tel:+919825208413" className="text-[#5b4dff] hover:underline">
                9825208413
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
