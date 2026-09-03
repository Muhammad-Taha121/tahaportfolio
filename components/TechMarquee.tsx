import { skills } from "@/data/skills";

export function TechMarquee() {
  return (
    <div
      className="overflow-hidden border-y border-line py-[22px]"
      role="marquee"
      aria-label="Technologies I work with"
    >
      <div className="flex w-max animate-marquee gap-3.5">
        {[skills, skills].map((set, i) => (
          <div key={i} className="flex gap-3.5" aria-hidden={i === 1}>
            {set.map((skill) => (
              <span
                key={skill}
                className="whitespace-nowrap rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
