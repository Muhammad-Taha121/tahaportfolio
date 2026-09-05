"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { gmailLink } from "@/data/site";
import type { Project } from "@/data/projects";
import { getTechIcon } from "@/lib/techIcons";

function ModalIllustration({ project }: { project: Project }) {
  const [from, to] = project.gradient;

  if (project.image) {
    return (
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-card">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="(min-width: 800px) 720px, 100vw"
          className="object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className="relative aspect-[16/9] w-full overflow-hidden rounded-t-card"
      style={{ background: `linear-gradient(140deg, ${from}, ${to})` }}
    >
      <div className="absolute inset-6 overflow-hidden rounded-[10px] border border-white/[.14] bg-white/[.06]">
        <div className="flex h-[26px] items-center gap-1.5 border-b border-white/10 bg-white/[.08] px-3">
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        </div>
        <div className="flex h-[calc(100%-26px)] gap-3.5 p-3.5">
          <div className="h-full w-[38%] rounded-md bg-white/[.07]" />
          <div className="flex flex-1 flex-col gap-3.5">
            <div className="h-1/2 rounded-md bg-white/[.05]" />
            <div className="h-1/2 rounded-md bg-white/[.05]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseStudySection({
  label,
  text,
}: {
  label: string;
  text: string;
}) {
  return (
    <div>
      <h4 className="mb-1.5 font-display text-[11px] font-medium uppercase tracking-[0.08em] text-ink-3">
        {label}
      </h4>
      <p className="text-[13px] leading-[1.6] text-ink-2">{text}</p>
    </div>
  );
}

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm tab:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="max-h-[85vh] w-full max-w-[720px] overflow-y-auto rounded-card bg-bg shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <ModalIllustration project={project} />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink shadow-md transition-colors duration-200 hover:bg-ink hover:text-white"
              >
                <svg
                  aria-hidden
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M1 1L13 13M13 1L1 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="p-7 tab:p-9">
              <div className="mb-3 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => {
                  const Icon = getTechIcon(tech);
                  return (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-full border border-line bg-panel px-2.5 py-1 text-[11px] font-medium text-ink-2"
                    >
                      {Icon && <Icon aria-hidden className="h-3 w-3" />}
                      {tech}
                    </span>
                  );
                })}
              </div>

              <h3
                id="project-modal-title"
                className="mb-2.5 font-display text-2xl font-medium tracking-[-0.02em]"
              >
                {project.title}
              </h3>
              <p className="mb-7 text-sm text-ink-2">{project.description}</p>

              <div className="grid grid-cols-1 gap-6 border-t border-line pt-7 tab:grid-cols-3">
                <CaseStudySection label="Problem" text={project.caseStudy.problem} />
                <CaseStudySection label="Approach" text={project.caseStudy.approach} />
                <CaseStudySection label="Result" text={project.caseStudy.result} />
              </div>

              <a
                href={gmailLink(`Enquiry: something like ${project.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
              >
                Discuss a project like this
                <span aria-hidden>→</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
