import { skills } from "@/data/skills";
import { getTechIcon } from "@/lib/techIcons";

export function TechMarquee() {
  return (
    <div
      className="group overflow-hidden border-y border-line py-[22px]"
      role="marquee"
      aria-label="Technologies I work with"
    >
      <div className="flex w-max animate-marquee gap-3.5 group-hover:[animation-play-state:paused]">
        {[skills, skills].map((set, i) => (
          <div key={i} className="flex gap-3.5" aria-hidden={i === 1}>
            {set.map((skill) => {
              const Icon = getTechIcon(skill);
              return (
                <span
                  key={skill}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium transition-colors duration-200 hover:border-ink"
                >
                  {Icon && <Icon aria-hidden className="h-[15px] w-[15px] text-ink-2" />}
                  {skill}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
