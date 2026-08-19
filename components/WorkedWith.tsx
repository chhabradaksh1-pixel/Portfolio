import Image from "next/image";

const brands = [
  { name: "Netflix", src: "/logo/netflix-3.svg", bg: "bg-[#fff7ed]" },
  { name: "Marvel", src: "/logo/marvel.svg", bg: "bg-[#fff7ed]" },
  { name: "Amber", src: "/logo/amber.svg", bg: "bg-[#fff7ed]" },
  { name: "Crompton", src: "/logo/crompton-seeklogo.svg", bg: "bg-[#fff7ed]" },
  { name: "JBL", src: "/logo/jbl-svgrepo-com.svg", bg: "bg-[#fff7ed]" },
  { name: "MTV India", src: "/logo/mtv-india.svg", bg: "bg-[#fff7ed]" },
];

export default function WorkedWith() {
  return (
    <section className="bg-white pb-28 md:pb-32">
      <div className="mx-auto max-w-7xl px-8">
        <h2 className="font-heading text-4xl font-bold text-[#171329] md:text-5xl">
          Trusted by ⭐
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex min-h-28 items-center justify-center rounded-2xl border border-violet-100 bg-[#f7f2ff] p-8 shadow-sm">
            <Image
              src="/logo/amazon-prime-video.svg"
              alt="Amazon Prime Video"
              width={180}
              height={50}
              className="max-h-12 w-auto object-contain"
            />
          </div>

          <div className="flex min-h-28 items-center justify-center rounded-2xl border border-emerald-100 bg-[#effdf6] p-8 shadow-sm">
            <Image
              src="/logo/jio-hotstar.svg"
              alt="Jio Hotstar"
              width={180}
              height={50}
              className="max-h-12 w-auto object-contain"
            />
          </div>

          {brands.map((brand) => (
            <div
              key={brand.name}
              className={`flex min-h-28 items-center justify-center rounded-2xl border border-orange-100 ${brand.bg} p-8 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:bg-[#f7f2ff]`}
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={180}
                height={50}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
