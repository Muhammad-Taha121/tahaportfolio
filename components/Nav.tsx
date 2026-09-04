"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/site";
import { container } from "@/lib/styles";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b border-transparent bg-bg/90 backdrop-blur-sm">
      <div className={container}>
        <nav className="flex items-center justify-between py-[26px]">
          <a
            href="#"
            className="font-display text-xl font-semibold tracking-[-0.02em]"
          >
            {site.logo}
          </a>

          <div className="hidden items-center gap-[34px] text-sm text-ink-2 tab:flex">
            {site.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative py-1 hover:text-ink"
              >
                {link.label}
                <span
                  aria-hidden
                  className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-ink transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 tab:hidden"
          >
            <span
              className={`block h-px w-5 bg-ink transition-transform duration-200 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-ink transition-transform duration-200 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden tab:hidden"
            >
              <div className="flex flex-col gap-5 border-t border-line py-6 text-sm text-ink-2">
                {site.nav.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="hover:text-ink"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
