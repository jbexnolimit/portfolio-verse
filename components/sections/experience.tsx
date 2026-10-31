import { experience, sections } from "@/lib/portfolio";
import SectionHeading from "@/components/ui/section-heading";

function formatDate(value: string) {
  const [year, month] = value.split("-");
  const date = new Date(Number(year), Number(month) - 1, 1);

  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export default function Experience() {
  const section = sections.find((item) => item.id === "experience");

  if (!section || experience.length === 0) {
    return null;
  }

  return (
    <section id={section.id} className="section-spacing">
      <div className="container-shell">
        <SectionHeading section={section} />

        <div className="space-y-5">
          {experience.map((item) => (
            <article
              key={item.id}
              className="surface-card rounded-2xl p-6 sm:p-8"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.position}
                  </h3>

                  <p className="mt-1 text-violet-300">{item.company}</p>

                  {item.location && (
                    <p className="mt-1 text-sm text-zinc-500">
                      {item.location}
                    </p>
                  )}
                </div>

                <p className="shrink-0 text-sm text-zinc-400">
                  {formatDate(item.startDate)} –{" "}
                  {item.endDate ? formatDate(item.endDate) : "Present"}
                </p>
              </div>

              <p className="mt-5 leading-7 text-zinc-300">{item.overview}</p>

              {item.description && (
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {item.description}
                </p>
              )}

              {item.highlights.length > 0 && (
                <ul className="mt-5 space-y-3">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-6 text-zinc-400"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
