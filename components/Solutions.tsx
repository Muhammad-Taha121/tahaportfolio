import { gmailLink } from "@/data/site";
import { solutions } from "@/data/solutions";
import { container, sectionTag } from "@/lib/styles";
import { Reveal } from "@/components/Reveal";
import { CardReveal } from "@/components/CardReveal";

export function Solutions() {
  return (
    <section id="solutions" className={`${container} py-16 tab:py-[88px]`}>
      <Reveal>
        <span className={sectionTag}>{solutions.tag}</span>
        <div className="grid grid-cols-1 gap-[30px] tab:grid-cols-[1.2fr_1fr] tab:gap-[60px]">
          <h2 className="max-w-[520px] font-display text-[32px] font-medium leading-none tracking-[-0.03em] tab:text-[38px]">
            {solutions.heading}
          </h2>
          <p className="max-w-[340px] text-sm text-ink-2">{solutions.lede}</p>
        </div>
      </Reveal>

      <div className="mt-11 grid grid-cols-1 gap-4 tab:grid-cols-2 lg:grid-cols-3">
        {solutions.items.map((solution, i) => (
          <CardReveal key={solution.title} delay={i * 0.05} className="h-full rounded-card">
            <div className="flex h-full flex-col justify-between rounded-card border border-line p-[26px]">
              <div>
                <h3 className="mb-2.5 font-display text-lg font-medium tracking-[-0.02em]">
                  {solution.title}
                </h3>
                <p className="text-[13px] text-ink-2">{solution.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {solution.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line bg-panel px-3 py-1 text-[11px] font-medium text-ink-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={gmailLink(`Enquiry: ${solution.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium hover:underline"
              >
                {solutions.ctaLabel}
                <span aria-hidden>→</span>
              </a>
            </div>
          </CardReveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-7 grid grid-cols-1 gap-7 rounded-card bg-dark p-[34px] text-white tab:grid-cols-3">
          {solutions.strip.map((column) => (
            <div key={column.title}>
              <h3 className="mb-2 font-display text-[15px] font-medium text-white">
                {column.title}
              </h3>
              <p className="text-[13px] text-[#b9b9b9]">{column.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
