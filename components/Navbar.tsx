import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-violet-200/60 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-[#171329] transition-colors hover:text-[#5b4dff] md:text-lg"
        >
          Daksh Chhabra
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#work" className="hover:text-[#5b4dff] transition-colors">
            Work
          </a>

          <a href="#about" className="hover:text-[#5b4dff] transition-colors">
            About
          </a>

          <a href="#contact" className="hover:text-[#5b4dff] transition-colors">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
