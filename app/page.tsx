import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import { sections } from "@/lib/portfolio";

const sectionComponents = {
  services: Services,
  skills: Skills,
  experience: Experience,
  about: About,
  contact: Contact,
};

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="home">
        <Hero />

        {sections.map((section) => {
          const Component =
            sectionComponents[section.id as keyof typeof sectionComponents];

          if (!Component) {
            return null;
          }

          return <Component key={section.id} />;
        })}
      </main>

      <Footer />
    </>
  );
}
