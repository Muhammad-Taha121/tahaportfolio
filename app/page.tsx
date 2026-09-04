import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Solutions } from "@/components/Solutions";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { ContactFooter } from "@/components/ContactFooter";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <ScrollProgress />
      <Nav />
      <Hero />
      <TechMarquee />
      <About />
      <Services />
      <Solutions />
      <Process />
      <Projects />
      <ContactFooter />
    </>
  );
}
