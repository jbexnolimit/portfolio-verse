import { sections, services } from "@/lib/portfolio";
import ServiceCard from "@/components/ui/service-card";
import SectionHeading from "@/components/ui/section-heading";

export default function Services() {
  const section = sections.find((item) => item.id === "services");

  if (!section || services.length === 0) {
    return null;
  }

  return (
    <section id={section.id} className="section-spacing">
      <div className="container-shell">
        <SectionHeading section={section} />

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
