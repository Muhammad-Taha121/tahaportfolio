export type CaseStudy = {
  problem: string;
  approach: string;
  result: string;
};

export type Project = {
  slug: string;
  title: string;
  stack: string[];
  description: string;
  gradient: [string, string];
  image?: string;
  caseStudy: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "exportpro",
    title: "ExportPro",
    stack: ["Next.js 14", "TypeScript", "Supabase"],
    description:
      "Business-management platform with admin/user roles enforced through Row Level Security, unified receipt numbering and database-level audit logging.",
    gradient: ["#1b1b1b", "#3a3a3a"],
    image: "/projects/exportpro.png",
    caseStudy: {
      problem:
        "The business needed a single system to run day-to-day operations without giving every user unrestricted access to sensitive records, plus a reliable audit trail for compliance.",
      approach:
        "Built on Next.js 14 and Supabase, with role-based access enforced at the database level through Row Level Security rather than only in the UI, a unified receipt numbering scheme across the business, and audit logging triggered directly in Postgres so every change is tracked regardless of which client makes it.",
      result:
        "Admins and staff work from the same platform with permissions that can't be bypassed from the client, and every record change is traceable — cutting manual reconciliation and giving the business a verifiable audit trail.",
    },
  },
  {
    slug: "shopsphere",
    title: "ShopSphere",
    stack: ["MongoDB", "Express", "React", "JWT"],
    description:
      "Full-stack e-commerce system with JWT authentication, persistent cart, stock reservation and a role-based admin panel.",
    gradient: ["#243447", "#1b1b1b"],
    image: "/projects/shopsphere.png",
    caseStudy: {
      problem:
        "Needed a self-hosted e-commerce stack, not tied to a SaaS platform, that could handle real inventory constraints — carts shouldn't be able to oversell stock another shopper already has reserved.",
      approach:
        "A MongoDB/Express/React stack with JWT-based auth, a persistent cart that survives sessions, and a stock reservation system that holds inventory for a cart before checkout completes, backed by a role-based admin panel for managing products and orders.",
      result:
        "A working store where inventory numbers stay accurate under concurrent checkouts, and the admin panel gives non-technical staff full control over catalogue and orders without touching the database directly.",
    },
  },
  {
    slug: "finanseer",
    title: "Finanseer",
    stack: ["React 19", "Redux Toolkit", "MongoDB Atlas"],
    description:
      "Financial dashboard with Recharts visualisations and a linear-regression forecasting module on a JWT-secured API.",
    gradient: ["#2b2b2b", "#4d4d4d"],
    image: "/projects/finanseer.png",
    caseStudy: {
      problem:
        "Users needed to see historical financial data and get a forward-looking estimate, not just a static report.",
      approach:
        "A React 19 and Redux Toolkit frontend renders Recharts visualisations against a JWT-secured API, with a linear-regression module on the backend that forecasts near-term trends from historical data stored in MongoDB Atlas.",
      result:
        "A dashboard that goes beyond reporting past numbers to project where they're headed, giving users an early signal instead of only a rear-view mirror.",
    },
  },
  {
    slug: "kyc-onboarding",
    title: "KYC Onboarding",
    stack: ["React", "Formik", "Yup"],
    description:
      "Eight-step KYC wizard for an investment manager, with conditional joint-account flow and per-step validation.",
    gradient: ["#1e2a24", "#1b1b1b"],
    image: "/projects/kyc-onboarding.png",
    caseStudy: {
      problem:
        "An investment manager needed a compliant onboarding flow that could branch for joint accounts without turning into one giant, error-prone form.",
      approach:
        "An eight-step wizard in React with Formik and Yup handling per-step validation, and conditional logic that only introduces joint-account fields when relevant, keeping the flow short for the common case.",
      result:
        "A guided onboarding experience that collects everything compliance requires while never showing a user a field that doesn't apply to them.",
    },
  },
];
