import Link from "next/link";
import { site } from "@/lib/portfolio";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#09090b]/80 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="container-shell flex h-16 items-center justify-between"
      >
        <Link
          href="#home"
          className="text-sm font-semibold tracking-tight text-white"
        >
          {site.name}
          <span className="ml-1 text-violet-400">.</span>
        </Link>

        <div className="flex items-center gap-5 sm:gap-7">
          {site.navigation.map((item) => (
            <Link
              key={item.target}
              href={`#${item.target}`}
              className="hidden text-sm text-zinc-400 transition hover:text-white sm:inline-flex"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#contact"
            className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-zinc-200 transition hover:border-violet-400/50 hover:text-white"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
