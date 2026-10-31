import { sections, skillCategories } from "@/lib/portfolio";
import SectionHeading from "@/components/ui/section-heading";

export default function Skills() {
  const section = sections.find((item) => item.id === "skills");

  if (!section || skillCategories.length === 0) {
    return null;
  }

  return (
    <section id={section.id} className="section-spacing">
      <div className="container-shell">
        <SectionHeading section={section} />

        <div className="grid gap-4 md:grid-cols-2">
          {skillCategories.map((category) => (
            <article key={category.id} className="surface-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white">
                {category.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {category.overview}
              </p>

              {category.items.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-300"
                    >
                      {item}
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
