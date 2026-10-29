import type { SectionConfig } from "@/types/portfolio";

interface SectionHeadingProps {
  section: SectionConfig;
}

export default function SectionHeading({
  section,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="eyebrow">{section.eyebrow}</p>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        {section.title}
      </h2>

      {section.description && (
        <p className="mt-4 leading-7 text-zinc-400">
          {section.description}
        </p>
      )}
    </div>
  );
}
