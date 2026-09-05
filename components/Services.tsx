import { site } from "@/data/site";
import { services } from "@/data/services";
import { container, sectionTag, btnSolid } from "@/lib/styles";
import { Reveal } from "@/components/Reveal";
import { CardReveal } from "@/components/CardReveal";

export function Services() {
  const { services: copy } = site;

  return (
    <section id="services" className={`${container} py-16 tab:py-[88px]`}>
      <Reveal>
        <span className={sectionTag}>{copy.tag}</span>
      </Reveal>

      <div className="grid grid-cols-1 items-start gap-[30px] tab:grid-cols-[1fr_1.2fr] tab:gap-[60px]">
        <Reveal>
          <h2 className="max-w-[520px] font-display text-[32px] font-medium leading-none tracking-[-0.03em] tab:text-[38px]">
            {copy.heading}
          </h2>
          <p className="my-[22px] max-w-[340px] text-sm text-ink-2 tab:mb-7">
            {copy.lede}
          </p>
          <a href={site.gmailComposeUrl} target="_blank" rel="noopener noreferrer" className={btnSolid}>
            {copy.ctaLabel}
          </a>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 tab:grid-cols-2">
          {services.map((service, i) => (
            <CardReveal key={service.title} delay={0.1 + i * 0.06} className="rounded-card">
              <div className="flex min-h-[190px] flex-col rounded-card border border-line p-[26px]">
                <h3 className="mb-2.5 font-display text-lg font-medium tracking-[-0.02em]">
                  {service.title}
                </h3>
                <p className="text-[13px] text-ink-2">{service.description}</p>
              </div>
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
