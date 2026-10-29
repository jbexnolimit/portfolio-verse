import { sections, site } from "@/lib/portfolio";
import SectionHeading from "@/components/ui/section-heading";

export default function About() {
  const section = sections.find((item) => item.id === "about");

  if (!section || !site.about) {
    return null;
  }

  return (
    <section id={section.id} className="section-spacing">
      <div className="container-shell">
        <SectionHeading section={section} />

        <div className="surface-card rounded-2xl p-6 sm:p-8">
          <p className="max-w-3xl whitespace-pre-line text-base leading-8 text-zinc-300">
            {site.about}
          </p>

          {site.socials.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {site.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:border-violet-400/50 hover:text-white"
                >
                  {social.platform}
                  <span aria-hidden="true" className="ml-2">↗</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
