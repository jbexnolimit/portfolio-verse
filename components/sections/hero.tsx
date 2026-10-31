import Link from "next/link";
import { site } from "@/lib/portfolio";

export default function Hero() {
  const { hero } = site;

  return (
    <section
      id="home"
      className="relative flex min-h-[78vh] items-center overflow-hidden py-24 sm:min-h-[82vh]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8rem] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-violet-400/[0.08] sm:right-[-4rem] sm:h-[28rem] sm:w-[28rem]"
      >
        <div className="absolute inset-8 rounded-full border border-violet-400/[0.08]" />
        <div className="absolute inset-16 rounded-full border border-violet-400/[0.08]" />
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-violet-300/70 shadow-[0_0_24px_rgba(167,139,250,0.5)]" />
      </div>

      <div className="container-shell relative">
        <div className="max-w-3xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-violet-400" />
            <p className="eyebrow">{hero.eyebrow}</p>
          </div>

          <h1 className="text-gradient text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl md:text-7xl">
            {hero.headline}
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            {hero.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            {hero.primaryAction && (
              <Link
                href={`#${hero.primaryAction.target}`}
                className="hero-action hero-action-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
              >
                {hero.primaryAction.label}
                <span aria-hidden="true">↗</span>
              </Link>
            )}

            {hero.secondaryAction && (
              <Link
                href={`#${hero.secondaryAction.target}`}
                className="hero-action hero-action-secondary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
              >
                {hero.secondaryAction.label}
              </Link>
            )}

            {site.resumeUrl && (
              <a
                href={site.resumeUrl}
                download
                className="hero-action hero-action-secondary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium"
              >
                Download Resume
                <span aria-hidden="true">↓</span>
              </a>
            )}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-500">
            {site.location && (
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {site.location}
              </span>
            )}

            {site.headline && (
              <>
                <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />
                <span>{site.headline}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
