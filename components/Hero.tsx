"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { site } from "@/data/site";
import { container } from "@/lib/styles";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion ? {} : { opacity: 0, y: 20 };
  const animate = shouldReduceMotion ? {} : { opacity: 1, y: 0 };

  return (
    <div className={container}>
      <header className="grid grid-cols-1 items-end gap-10 py-[50px] tab:grid-cols-[1fr_320px] tab:gap-10 tab:pb-[50px] tab:pt-[70px]">
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-[clamp(56px,10.5vw,148px)] font-medium leading-[0.92] tracking-[-0.045em]">
            {site.hero.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <div className="mt-9 flex flex-wrap gap-[30px] border-t border-line pt-[26px] text-[13px] text-ink-2 tab:gap-[60px]">
            {site.hero.stats.map((stat) => (
              <div key={stat.label}>
                <b className="mb-1 block font-display text-[30px] font-medium tracking-[-0.03em] text-ink">
                  {stat.label}
                </b>
                {stat.value}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={initial}
          animate={animate}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-[22px]"
        >
          <span className="inline-flex items-center gap-2 text-[13px] text-ink-2">
            <i
              aria-hidden
              className="block h-2 w-2 rounded-full bg-accent"
            />
            {site.hero.availability}
          </span>
          <p className="text-[15px] leading-[1.55] text-ink-2">
            {site.hero.bio}
          </p>
          <div className="flex flex-wrap gap-2.5">
            <motion.a
              href={site.githubUrl}
              target="_blank"
              rel="noopener"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
              transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 rounded-full border border-ink bg-ink px-[22px] py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#333] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              {site.hero.githubButtonLabel}
              <span aria-hidden>↗</span>
            </motion.a>
            <motion.a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
              transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-full border border-ink text-ink transition-colors duration-200 hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              <FaLinkedin aria-hidden size={18} />
            </motion.a>
            <motion.a
              href={site.gmailComposeUrl}
              target="_blank"
              rel="noopener"
              aria-label="Email on Gmail"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
              transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-full border border-ink text-ink transition-colors duration-200 hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              <SiGmail aria-hidden size={16} />
            </motion.a>
          </div>
        </motion.div>
      </header>
    </div>
  );
}
