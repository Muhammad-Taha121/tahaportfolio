import { site } from "@/data/site";
import { services } from "@/data/services";
import { container, sectionTag, btnSolid } from "@/lib/styles";
import { Reveal } from "@/components/Reveal";

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
          <a href={site.gmailComposeUrl} target="_blank" rel="noopener" className={btnSolid}>
            {copy.ctaLabel}
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 gap-4 tab:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className={`flex min-h-[190px] flex-col justify-between rounded-card border p-[26px] ${
                  service.variant === "dark"
                    ? "border-dark bg-dark text-white"
                    : "border-line"
                }`}
              >
                <div>
                  <h3 className="mb-2.5 font-display text-lg font-medium tracking-[-0.02em]">
                    {service.title}
                  </h3>
                  <p
                    className={`text-[13px] ${
                      service.variant === "dark" ? "text-[#bdbdbd]" : "text-ink-2"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
                <span className="mt-5 text-xl" aria-hidden>
                  {service.variant === "dark" ? "↗" : "→"}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
