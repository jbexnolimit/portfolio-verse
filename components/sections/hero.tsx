import Link from "next/link";
import { site } from "@/lib/portfolio";

export default function Hero() {
  return (
    <section className="relative flex min-h-[78vh] items-center py-24 sm:min-h-[82vh]">
      <div className="container-shell">
        <div className="max-w-3xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-violet-400" />
            <p className="eyebrow">Available for opportunities</p>
          </div>

          <h1 className="text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl md:text-7xl">
            Building useful
            <br />
            software, one
            <br />
            <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
              solution at a time.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            I&apos;m {site.name}, a {site.title} focused on{" "}
            {site.headline.toLowerCase()}. I enjoy building reliable systems,
            solving practical problems, and learning along the way.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-950 transition hover:bg-violet-200"
            >
              Explore my work
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/25 hover:text-white"
            >
              Get in touch
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-500">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {site.location}
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />
            <span>Backend &amp; Full-Stack Development</span>
          </div>
        </div>
      </div>
    </section>
  );
}
