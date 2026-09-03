import { site } from "@/data/site";
import { process } from "@/data/process";
import { container, sectionTag } from "@/lib/styles";
import { Reveal } from "@/components/Reveal";

export function Process() {
  const { process: copy } = site;

  return (
    <section id="process-section" className={`${container} py-16 tab:py-[88px]`}>
      <Reveal>
        <span className={sectionTag}>{copy.tag}</span>
        <div className="mb-10 grid grid-cols-1 gap-[30px] tab:grid-cols-[1.2fr_1fr] tab:gap-[60px]">
          <h2 className="max-w-[520px] font-display text-[32px] font-medium leading-none tracking-[-0.03em] tab:text-[38px]">
            {copy.heading}
          </h2>
          <p className="max-w-[340px] text-sm text-ink-2">{copy.lede}</p>
        </div>
      </Reveal>

      <div>
        {process.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.06}>
            <div
              className={`-mx-4 grid grid-cols-[auto_1fr] items-center gap-8 rounded-xl border-t border-line px-4 py-7 transition-colors duration-200 hover:bg-panel tab:grid-cols-[auto_1fr_auto] tab:gap-10 ${
                i === process.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="w-11 font-display text-2xl font-medium text-ink-3">
                {step.number}
              </span>
              <div>
                <h3 className="mb-1.5 font-display text-[17px] font-medium tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="max-w-[560px] text-[13px] text-ink-2">
                  {step.description}
                </p>
              </div>
              <span className="hidden whitespace-nowrap text-[13px] text-ink-3 tab:block">
                {step.output}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
