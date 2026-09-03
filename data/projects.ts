export type Project = {
  title: string;
  stack: string[];
  description: string;
  gradient: [string, string];
};

export const projects: Project[] = [
  {
    title: "ExportPro",
    stack: ["Next.js 14", "TypeScript", "Supabase"],
    description:
      "Business-management platform with admin/user roles enforced through Row Level Security, unified receipt numbering and database-level audit logging.",
    gradient: ["#1b1b1b", "#3a3a3a"],
  },
  {
    title: "ShopSphere",
    stack: ["MongoDB", "Express", "React", "JWT"],
    description:
      "Full-stack e-commerce system with JWT authentication, persistent cart, stock reservation and a role-based admin panel.",
    gradient: ["#243447", "#1b1b1b"],
  },
  {
    title: "Finanseer",
    stack: ["React 19", "Redux Toolkit", "MongoDB Atlas"],
    description:
      "Financial dashboard with Recharts visualisations and a linear-regression forecasting module on a JWT-secured API.",
    gradient: ["#2b2b2b", "#4d4d4d"],
  },
  {
    title: "KYC Onboarding",
    stack: ["React", "Formik", "Yup"],
    description:
      "Eight-step KYC wizard for an investment manager, with conditional joint-account flow and per-step validation.",
    gradient: ["#1e2a24", "#1b1b1b"],
  },
];
