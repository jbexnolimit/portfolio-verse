import type { Service } from "@/types/portfolio";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({
  service,
  index,
}: ServiceCardProps) {
  return (
    <article className="surface-card group flex h-full flex-col rounded-2xl p-6 sm:p-7">
      <div className="mb-8 flex items-center justify-between">
        <span className="font-mono text-sm text-violet-300">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          aria-hidden="true"
          className="text-xl text-zinc-600 transition duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300"
        >
          ↗
        </span>
      </div>

      <h3 className="text-xl font-medium tracking-tight text-zinc-100">
        {service.title}
      </h3>

      <p className="mt-3 leading-7 text-zinc-300">
        {service.overview}
      </p>

      <p className="mt-3 text-sm leading-7 text-zinc-400">
        {service.description}
      </p>

      {service.details && (
        <p className="mt-3 text-sm leading-7 text-zinc-500">
          {service.details}
        </p>
      )}

      {service.technologies.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {service.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-zinc-400"
            >
              {technology}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
