import { site } from "@/data/site";
import { projects, type Project } from "@/data/projects";
import { container, sectionTag } from "@/lib/styles";
import { Reveal } from "@/components/Reveal";

function ProjectIllustration() {
  return (
    <div
      aria-hidden
      className="absolute inset-x-6 top-6 h-[150px] overflow-hidden rounded-[10px] border border-white/[.14] bg-white/[.06]"
    >
      <div className="flex h-[22px] items-center gap-1.5 border-b border-white/10 bg-white/[.08] px-3">
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
      </div>
      <div className="flex h-[calc(100%-22px)] gap-3.5 p-3.5">
        <div className="h-full w-[38%] rounded-md bg-white/[.07]" />
        <div className="flex flex-1 flex-col gap-3.5">
          <div className="h-1/2 rounded-md bg-white/[.05]" />
          <div className="h-1/2 rounded-md bg-white/[.05]" />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [from, to] = project.gradient;

  return (
    <div
      className="relative flex aspect-[16/10] flex-col justify-end overflow-hidden rounded-card p-6 text-white"
      style={{ background: `linear-gradient(140deg, ${from}, ${to})` }}
    >
      <ProjectIllustration />
      <div className="mb-2.5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/35 px-2.5 py-1 text-[11px]"
          >
            {tech}
          </span>
        ))}
      </div>
      <h3 className="font-display text-xl font-medium tracking-[-0.02em]">
        {project.title}
      </h3>
      <p className="mt-1.5 line-clamp-2 max-w-[380px] text-[13px] text-[#cfcfcf]">
        {project.description}
      </p>
    </div>
  );
}

export function Projects() {
  const { projects: copy } = site;

  return (
    <section id="work" className={`${container} py-16 tab:py-[88px]`}>
      <Reveal>
        <span className={sectionTag}>{copy.tag}</span>
        <div className="grid grid-cols-1 gap-[30px] tab:grid-cols-[1.2fr_1fr] tab:gap-[60px]">
          <h2 className="max-w-[520px] font-display text-[32px] font-medium leading-none tracking-[-0.03em] tab:text-[38px]">
            {copy.heading}
          </h2>
          <p className="max-w-[340px] text-sm text-ink-2">{copy.lede}</p>
        </div>
      </Reveal>

      <div className="mt-11 grid grid-cols-1 gap-4 tab:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
