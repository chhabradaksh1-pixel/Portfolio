export default function Philosophy() {
  return (
    <section className="bg-white py-28 md:py-32">
      <div className="mx-auto max-w-7xl px-8">
        <h2 className="font-heading text-4xl font-bold text-[#171329] md:text-5xl">
          Philosophy
        </h2>

        <div className="mt-12 max-w-4xl rounded-2xl border border-violet-100 bg-[#f7f2ff] p-8 shadow-sm md:p-10">
          <p className="philosophy-quote text-2xl leading-10 tracking-[-0.04em] text-[#171329] md:text-3xl md:leading-[1.35]">
            “Great brands don&apos;t win because they shout the loudest. They
            win because people feel the brand is a part of their{" "}
            <span className="text-accent-pop">own story.</span>”
          </p>
        </div>
      </div>
    </section>
  );
}
