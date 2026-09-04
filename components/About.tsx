import { site } from "@/data/site";
import { container, sectionTag } from "@/lib/styles";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";

export function About() {
  const { about } = site;

  return (
    <section id="about" className={`${container} py-16 tab:py-[88px]`}>
      <Reveal>
        <span className={sectionTag}>{about.tag}</span>
      </Reveal>

      <div className="grid grid-cols-1 items-start gap-[30px] tab:grid-cols-[1.2fr_1fr] tab:gap-[60px]">
        <Reveal>
          <h2 className="max-w-[520px] font-display text-[32px] font-medium leading-none tracking-[-0.03em] tab:text-[38px]">
            {about.heading}
          </h2>

          <div className="mt-[34px] grid grid-cols-1 gap-7 rounded-card bg-dark p-[34px] text-white tab:grid-cols-2">
            {about.panel.map((item) => (
              <div key={item.title}>
                <h3 className="mb-2 font-display text-[15px] font-medium text-white">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#b9b9b9]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="max-w-[340px] text-sm text-ink-2">{about.lede}</p>
          {about.stats.map((stat, i) => (
            <div
              key={stat.value}
              className={
                i === 0
                  ? "mt-[60px]"
                  : "mt-9 border-t border-line pt-7 tab:mt-9 tab:pt-7"
              }
            >
              <CountUp
                value={stat.value}
                delay={i * 0.1}
                className="block font-display text-5xl font-medium tracking-[-0.03em]"
              />
              <span className="mt-1.5 block max-w-[260px] text-[13px] text-ink-2">
                {stat.description}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
