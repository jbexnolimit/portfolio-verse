import { sections, site } from "@/lib/portfolio";
import SectionHeading from "@/components/ui/section-heading";

export default function Contact() {
  const section = sections.find((item) => item.id === "contact");

  if (!section) {
    return null;
  }

  return (
    <section id={section.id} className="section-spacing">
      <div className="container-shell">
        <SectionHeading section={section} />

        <div className="surface-card rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-zinc-500">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 inline-block break-all text-lg font-medium text-white transition hover:text-violet-300"
              >
                {site.email}
              </a>

              {site.phone && (
                <div className="mt-5">
                  <p className="text-sm text-zinc-500">Phone</p>
                  <a
                    href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                    className="mt-2 inline-block text-zinc-200 transition hover:text-violet-300"
                  >
                    {site.phone}
                  </a>
                </div>
              )}
            </div>

            <a
              href={`mailto:${site.email}`}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-950 transition hover:bg-violet-200"
            >
              Send an email
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {site.socials.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3 border-t border-white/[0.08] pt-6">
              {site.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-zinc-400 transition hover:text-white"
                >
                  {social.platform} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
