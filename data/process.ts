export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  output: string;
};

export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & scope",
    description:
      "We define the users, the data, and the must-have features. I map the schema and API surface before writing UI.",
    output: "Scope doc · schema draft",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "Choose the stack that fits — MERN for document-heavy products, PERN when relational integrity and RLS matter.",
    output: "Stack decision · repo setup",
  },
  {
    number: "03",
    title: "Build in the open",
    description:
      "Small, reviewed pull requests. Every feature ships with loading, error and empty states, and a protected route where it needs one.",
    output: "Weekly demos",
  },
  {
    number: "04",
    title: "Launch & handover",
    description:
      "Deployment, seed scripts, documentation and a clean codebase your team can keep building on without me.",
    output: "Live app · docs",
  },
];
